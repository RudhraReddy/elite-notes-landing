# Fullscreen Menu Component Documentation

## Overview

The FullscreenMenu component is a modern, animated navigation menu that slides down from the top of the screen. It features a hamburger button that transforms into an X, and contains a large "MENU" heading with navigation links.

## Installation

1. Place the component in your components directory:

```bash
/components/FullscreenMenu.tsx
```

2. Required dependencies:

```json
{
  "dependencies": {
    "next": "^13.0.0",
    "@/components/ui/button": "^1.0.0" // shadcn/ui button component
  }
}
```

## Component Structure

The component consists of three main parts:

1. MenuButton - The animated hamburger/close button
2. MenuItem - Individual navigation links
3. FullscreenMenu - The main container component

## Props Interfaces

```typescript
// MenuButton Props
interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

// MenuItem Props
interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}
```

## Basic Usage

```tsx
import FullscreenMenu from "@/components/FullscreenMenu";

// In your layout or page
export default function Layout() {
  return (
    <>
      <FullscreenMenu />
      {/* Your other content */}
    </>
  );
}
```

## Styling

### Hamburger Button

The hamburger button consists of two lines that animate into an X:

```tsx
// Default styling for lines
<span
  className={`absolute h-0.5 w-10 transition-all duration-300 ease-in-out
    ${isOpen ? "rotate-45 bg-background" : "translate-y-[-6px] bg-primary"}`}
/>
```

Customizing line sizes:

```tsx
// For thicker lines
className = "absolute h-1 w-10"; // Change h-0.5 to h-1

// For longer lines
className = "absolute h-0.5 w-12"; // Change w-10 to w-12
```

### Menu Overlay

```tsx
<div
  className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-y-0" : "-translate-y-full"
  }`}
>
```

### Navigation Items

```tsx
<Link
  href={href}
  className="text-[24px] font-montserrat font-medium text-background hover:text-primary-muted transition-colors duration-300 inline-block py-1"
>
  {children}
</Link>
```

## Animation Details

### Button Animation

- Transform duration: 300ms
- Ease-in-out timing
- Rotates 45° for X formation
- Color transition included

### Menu Overlay Animation

- Slide down duration: 500ms
- Uses CSS transform for better performance
- Slides from above viewport (-translate-y-full)

## Customization Options

### 1. Changing Menu Text Size

```tsx
// In FullscreenMenu component
<h1 className="text-[260px] font-bold text-background leading-none">
  MENU
</h1>

// For larger size
<h1 className="text-[300px] font-bold text-background leading-none">
```

### 2. Modifying Navigation Item Spacing

```tsx
// Adjust vertical spacing
<ul className="space-y-4"> // Increase or decrease from space-y-2
```

### 3. Changing Animation Timing

```tsx
// For button
className = "transition-all duration-500"; // Slower animation

// For overlay
className = "transition-transform duration-700"; // Slower slide
```

### 4. Adjusting Button Position

```tsx
// Default position
className = "fixed top-6 right-14";

// Custom position
className = "fixed top-8 right-8";
```

## Examples

### Basic Implementation

```tsx
const FullscreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuButton isOpen={isOpen} toggle={toggle} />
      {/* Menu Content */}
    </>
  );
};
```

### Custom Navigation Items

```tsx
const MENU_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact Us" },
];

// In the component
{
  MENU_ITEMS.map((item) => (
    <MenuItem key={item.href} href={item.href}>
      {item.label}
    </MenuItem>
  ));
}
```

## Best Practices

1. Button Placement

   - Keep consistent spacing from edges
   - Ensure good contrast with background
   - Maintain reasonable touch target size

2. Navigation Items

   - Keep labels concise
   - Use consistent spacing
   - Maintain readable font sizes
   - Consider mobile viewports

3. Animations
   - Keep durations under 500ms for responsiveness
   - Use ease-in-out for smooth transitions
   - Consider reduced-motion preferences

## Common Issues

1. Z-index Conflicts

```tsx
// Ensure proper layering
className = "z-50"; // For button
className = "z-40"; // For overlay
```

2. Mobile Responsiveness

```tsx
// Add responsive text sizes
className = "text-[180px] md:text-[260px]";
```

3. Animation Performance

```tsx
// Use transform instead of height/width animations
className = "transform transition-transform";
```

## Accessibility Considerations

1. Add ARIA labels

```tsx
<button
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
>
```

2. Keyboard Navigation

```tsx
// Add keyboard event handlers
onKeyDown={(e) => {
  if (e.key === 'Escape') setIsOpen(false);
}}
```

## Mobile Considerations

1. Touch Targets

   - Minimum 44x44px for buttons
   - Adequate spacing between links

2. Viewport Adjustments

```tsx
// Responsive text sizing
className = "text-[24px] md:text-[32px]"; // For menu items
```

## Contributing

When modifying this component:

1. Maintain animation smoothness
2. Consider mobile-first approach
3. Test across different viewport sizes
4. Document any new features or changes

## License

Free to use and modify for your projects.
