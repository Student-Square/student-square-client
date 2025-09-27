'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const NavigationMenu = NavigationMenuPrimitive.Root
const NavigationMenuList = React.forwardRef<
	HTMLUListElement,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn('group flex list-none items-center gap-1', className)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(
			'group inline-flex h-9 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none disabled:opacity-50',
			className
		)}
		{...props}
	>
		{children}
		<ChevronDown className="ml-1 h-4 w-4 transition group-data-[state=open]:rotate-180" />
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'left-0 top-0 w-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in data-[motion=to-start]:fade-out-0 data-[motion=to-end]:fade-out-0',
			className
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
}

