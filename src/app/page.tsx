"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ParallaxSection from "@/components/ParallaxSection";
import FullscreenMenu from "@/components/fullmenu";

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ParallaxProvider>
      <FullscreenMenu />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full text-center space-y-6">
            {/* Main heading section */}
            <div className="flex flex-col items-center gap-2">
              <div>
                <span className="text-7xl heading-bold text-foreground">
                  Elite Notes
                </span>
                <span className="text-5xl heading-medium text-primary-muted">
                  , innovative virtual assistant
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-5xl heading-medium text-primary-muted">
              to Transform your learning Experience
            </div>

            {/* Description */}
            <p className="body-text text-2xl text-primary-muted">
              Find time for us and try the assistant for free
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mt-16">
              <div className="flex max-w-2xl mx-auto gap-4">
                <div className="flex-grow">
                  <Input
                    type="email"
                    placeholder="Work email"
                    className="w-full h-12 bg-transparent border-t-0 border-x-0 border-b-2 border-primary-muted rounded-none focus:border-primary focus:ring-0 text-foreground text-sm placeholder:text-primary-muted/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary-muted rounded text-lg font-medium"
                >
                  Try for Free
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Parallax Section */}
        <ParallaxSection />
      </main>
    </ParallaxProvider>
  );
}
