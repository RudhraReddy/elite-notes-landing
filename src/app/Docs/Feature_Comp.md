# ContentSection Component Documentation

## Overview

The ContentSection component is a reusable React component designed for creating alternating content and image layouts. It's ideal for feature sections, product showcases, or any content that pairs text with an image.

## Installation

1. Place the component in your components directory:

```bash
/components/ContentSection.tsx
```

2. Make sure you have the required dependencies:

```json
{
  "dependencies": {
    "next": "^13.0.0",
    "@/components/ui/button": "^1.0.0" // shadcn/ui button component
  }
}
```

## Props Interface

```typescript
interface ContentSectionProps {
  title: string; // Main heading text
  description: string; // Description paragraph
  imagePath: string; // Path to the image
  imagePosition: "left" | "right"; // Image position relative to content
  buttonText?: string; // Optional button text
}
```

## Basic Usage

```tsx
import ContentSection from "@/components/ContentSection";

<ContentSection
  title="Your Title"
  description="Your description text here"
  imagePath="/path/to/your/image.png"
  imagePosition="right"
  buttonText="Click Me"
/>;
```

## Image Configuration

### Image Sizing

The default configuration uses a container height of 500px. To modify the image size, adjust these values in the component:

```tsx
// For larger images
const imageSection = (
  <div className="flex-1 relative h-[700px]">
    {" "}
    // Increase this height
    <Image
      src={imagePath}
      alt={title}
      fill
      className="rounded-lg object-contain"
      priority
    />
  </div>
);
```

### Image Paths

- For images in the public folder: `/images/your-image.png`
- For imported images: Use the imported path directly

## Styling

### Default Styles

- Background: Uses theme background color
- Typography: Montserrat font for headings
- Spacing: 20px padding top and bottom (py-20)
- Layout: Flex container with 12px gap between elements

### Customizing Styles

1. Title Size:

```tsx
<h2 className="text-7xl"> // Increase from text-5xl for larger title
```

2. Image Container:

```tsx
// Adjust height and width
<div className="flex-1 relative h-[700px] w-full">
```

3. Section Spacing:

```tsx
<section className="bg-background py-32"> // Increase padding
```

## Examples

### Right-aligned Image

```tsx
<ContentSection
  title="Choose from 5 of our tools"
  description="We offer 5 tools tailored for your different needs"
  imagePath="/assets/tools.png"
  imagePosition="right"
  buttonText="Try for Free"
/>
```

### Left-aligned Image

```tsx
<ContentSection
  title="Text Summarization"
  description="Get concise summaries of long text"
  imagePath="/assets/summary.png"
  imagePosition="left"
  buttonText="Start Now"
/>
```

## Best Practices

1. Images

   - Use high-quality images
   - Recommended aspect ratio: 16:9 or 4:3
   - Optimal image size: 800x600px or larger
   - Format: PNG or WebP for better quality

2. Content

   - Keep titles concise (2-6 words)
   - Descriptions should be 1-2 sentences
   - Button text should be action-oriented

3. Spacing
   - Maintain consistent spacing between sections
   - Use complementary images that don't overwhelm the text

## Common Issues

1. Images Not Displaying

   - Check if the image path is correct
   - Ensure images are in the public folder
   - Verify file extensions match exactly

2. Layout Issues
   - For mobile responsiveness, consider the flex direction
   - Adjust image size for different screen sizes

## Customization Examples

### Larger Images

```tsx
// In ContentSection.tsx
const imageSection = (
  <div className="flex-1 relative h-[700px] md:h-[800px]">
    {" "}
    // Responsive height
    <Image
      src={imagePath}
      alt={title}
      fill
      className="rounded-lg object-contain"
      priority
    />
  </div>
);
```

### Different Text Sizes

```tsx
const contentSection = (
  <div className="flex-1 space-y-6">
    {" "}
    // Increased spacing
    <h2 className="text-6xl md:text-7xl font-montserrat text-foreground">
      {title}
    </h2>
    <p className="text-xl text-foreground/80 max-w-2xl">
      {" "}
      // Larger text
      {description}
    </p>
    {buttonText && (
      <Button className="mt-8 text-lg">
        {" "}
        // Larger button
        {buttonText}
      </Button>
    )}
  </div>
);
```

## Contributing

Feel free to modify and extend this component to suit your needs. If you make improvements, consider:

1. Maintaining TypeScript types
2. Adding JSDoc comments for new props
3. Updating this documentation

## License

This component is free to use and modify as needed for your project.
