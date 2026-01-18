# Sanity CMS Implementation Guide

## Quick Start Implementation

This guide shows how to implement Sanity CMS for your Student Square project.

---

## Step 1: Install Sanity

```bash
npm install -g @sanity/cli
npm install @sanity/client @sanity/image-url next-sanity
```

---

## Step 2: Initialize Sanity Project

```bash
cd student-square-client
sanity init
```

Follow the prompts:
- Choose "Create new project"
- Project name: "student-square"
- Dataset: "production"
- Template: "Blog (schema)"

---

## Step 3: Content Schemas

Create these content types in `sanity/schemas/`:

### Blog Post Schema
```typescript
// sanity/schemas/blog.ts
export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'paragraph',
      title: 'Excerpt',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date'
    }
  ]
}
```

### Author Schema
```typescript
// sanity/schemas/author.ts
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string'
    }
  ]
}
```

### User Schema
```typescript
// sanity/schemas/user.ts
export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }
  ]
}
```

### Donation Schema
```typescript
// sanity/schemas/donation.ts
export default {
  name: 'donation',
  title: 'Donation',
  type: 'document',
  fields: [
    {
      name: 'donorName',
      title: 'Donor Name',
      type: 'string'
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number'
    },
    {
      name: 'date',
      title: 'Donation Date',
      type: 'date'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text'
    },
    {
      name: 'anonymous',
      title: 'Anonymous',
      type: 'boolean'
    }
  ]
}
```

---

## Step 4: Create Sanity Client

```typescript
// lib/sanity.client.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
})
```

---

## Step 5: Create API Functions

```typescript
// lib/sanity.queries.ts
import { client } from './sanity.client'
import { Blog } from '@/types/blog'

export async function getBlogs(): Promise<Blog[]> {
  const query = `*[_type == "blog"] | order(publishDate desc) {
    _id,
    title,
    paragraph,
    "image": image.asset->url,
    "author": author->{
      name,
      "image": image.asset->url,
      designation
    },
    tags,
    publishDate
  }`
  
  return await client.fetch(query)
}

export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    paragraph,
    "image": image.asset->url,
    "author": author->{
      name,
      "image": image.asset->url,
      designation
    },
    tags,
    publishDate,
    content
  }`
  
  return await client.fetch(query, { slug })
}
```

---

## Step 6: Update Components

```typescript
// src/components/Blog/index.tsx
import { getBlogs } from '@/lib/sanity.queries'
import SingleBlog from './SingleBlog'

export default async function Blog() {
  const blogData = await getBlogs()
  
  return (
    <section className="...">
      <div className="container">
        <SectionTitle title="Our Latest Blogs" />
        <div className="grid ...">
          {blogData.map((blog) => (
            <SingleBlog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Step 7: Environment Variables

```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
```

---

## Step 8: Access Admin Panel

After setup, your client can access the admin panel at:
- Development: `http://localhost:3000/admin` (when running Sanity Studio)
- Production: Deploy Sanity Studio or use `sanity.sanity.io`

---

## Benefits for Your Client

1. **Visual Editor**: Edit content with a rich text editor
2. **Image Upload**: Drag & drop images, automatic optimization
3. **Media Library**: Organize all images in one place
4. **Preview**: See changes before publishing
5. **Version History**: Revert to previous versions
6. **No Code Required**: Client never touches code

---

## Migration Steps

1. Export current data from TypeScript files
2. Import into Sanity using their import tool
3. Map fields correctly
4. Test all content displays correctly
5. Remove old TypeScript data files

---

This setup gives your client full control over content without touching code! 🎉


