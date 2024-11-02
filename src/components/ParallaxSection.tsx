"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

// Import images
import mainApp from "@/components/assets/main_app.png";
import leftTop from "@/components/assets/left_top.png";
import leftBottom from "@/components/assets/left_bottom.png";
import rightTop from "@/components/assets/right_top.png";
import rightBottom from "@/components/assets/right_bottom.png";

export default function ParallaxSection() {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden py-20">
      <h2 className="text-5xl heading-medium text-foreground text-center mb-24">
        What Elite Offers
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Top Left Image */}
          <Parallax
            translateY={[-25, 25]}
            className="absolute -top-44 -left-28"
          >
            <Image
              src={leftTop}
              alt="Background Element"
              className="w-[200px] h-auto"
              priority
            />
          </Parallax>

          {/* Bottom Left Image */}
          <Parallax
            translateY={[25, -100]}
            className="absolute -bottom-24 -left-32"
          >
            <Image
              src={leftBottom}
              alt="Background Element"
              className="w-[400px] h-auto"
              priority
            />
          </Parallax>

          {/* Top Right Image */}
          <Parallax
            translateY={[-50, 25]}
            className="absolute -top-24 -right-52"
          >
            <Image
              src={rightTop}
              alt="Background Element"
              className="w-[400px] h-auto"
              priority
            />
          </Parallax>

          {/* Bottom Right Image */}
          <Parallax
            translateY={[20, -45]}
            className="absolute -bottom-0 -right-32"
          >
            <Image
              src={rightBottom}
              alt="Background Element"
              className="w-[150px] h-auto"
              priority
            />
          </Parallax>
        </div>

        {/* Main App Image */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <Parallax translateY={[5, -5]}>
            <Image
              src={mainApp}
              alt="Elite Notes Application"
              className="w-full h-auto"
              priority
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
