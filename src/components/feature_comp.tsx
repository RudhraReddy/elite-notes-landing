"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface ContentSectionProps {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
  imagePosition: "left" | "right";
  buttonText?: string;
}

const ContentSection = ({
  title,
  description,
  imagePath,
  imagePosition,
  buttonText,
}: ContentSectionProps) => {
  const contentSection = (
    <div className="flex-1 space-y-10">
      <h2 className="text-5xl font-medium font-montserrat text-foreground">
        {title}
      </h2>
      <p className="text-lg text-foreground/80 max-w-xl">{description}</p>
      {buttonText && (
        <Button className="mt-6 h-14 w-64 bg-primary text-lg text-primary-foreground hover:bg-primary/80">
          {buttonText}
        </Button>
      )}
    </div>
  );

  const imageSection = (
    <div className="flex-1 relative h-[350px]">
      <Image
        src={imagePath}
        alt={title}
        fill
        className="rounded-lg object-contain"
        priority
      />
    </div>
  );

  return (
    <section className="bg-background py-20">
      {" "}
      {/* Removed min-h-screen and adjusted padding */}
      <div className="container">
        <div className="flex items-center gap-12">
          {imagePosition === "left" ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
