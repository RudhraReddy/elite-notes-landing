"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import FullscreenMenu from "@/components/fullmenu";

export default function AboutPage() {
  return (
    <ParallaxProvider>
      <FullscreenMenu />
      <main className="min-h-screen bg-background text-foreground px-4 py-16">
        {/* About Us Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h1 className="text-[64px] font-poppins heading-Medium mb-12">
            About Us
          </h1>
          <div className="space-y-6">
            <p className="text-[20px] leading-relaxed">
              At EliteNotes, we are committed to enhancing learning through
              technology. Our platform integrates advanced machine learning
              models to provide students and professionals with a unique
              educational experience. Our mission is to break down barriers in
              education by providing tools that make learning more efficient,
              engaging, and accessible.
            </p>
            <p className="text-[20px] leading-relaxed">
              With a team of passionate innovators, we strive to stay at the
              forefront of educational technology, continually updating our
              features based on user feedback and advancements in machine
              learning.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-[58px] font-poppins heading-medium mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-60 h-60 mx-auto mb-4 rounded-full bg-primary/10" />
              <h3 className="text-xl font-semibold text-center mb-2">
                xxxxxxxxx
              </h3>
              <p className="text-primary-muted text-center">Founder</p>
            </div>

            <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-60 h-60 mx-auto mb-4 rounded-full bg-primary/10" />
              <h3 className="text-xl font-semibold text-center mb-2">
                xxxxxxxxx
              </h3>
              <p className="text-primary-muted text-center">Dev</p>
            </div>

            <div className="bg-background border border-primary/20 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-60 h-60 mx-auto mb-4 rounded-full bg-primary/10" />
              <h3 className="text-xl font-semibold text-center mb-2">
                xxxxxxxxx
              </h3>
              <p className="text-primary-muted text-center">Design</p>
            </div>
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
}
