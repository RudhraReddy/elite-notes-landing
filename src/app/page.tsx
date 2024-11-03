"use client";

import React from "react";

// import UI
import { ParallaxProvider } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import scripts
import ParallaxSection from "@/components/ParallaxSection";
import FullscreenMenu from "@/components/fullmenu";
import ContentSection from "@/components/feature_comp";
import ThemeSwitch from "@/components/Theme_switch";

// Import images
import mainFeat from "@/components/assets/Main_Side.png";
import Text_summ from "@/components/assets/Text_Summarization.png";
import Text_ent from "@/components/assets/Text_Entered.png";

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

        {/* Feature section */}
        <ContentSection
          title="Choose from a range of our tools"
          description="We offer 5 tool tailed for you different needs, summarization, transcription, translation, keywords highlighting, domain specific information"
          imagePath={mainFeat}
          imagePosition="right"
          buttonText="Try for Free"
        />
        <ContentSection
          title="Text Summarization"
          description="Get concise summaries of long text and files in seconds, enhancing your reading efficiency."
          imagePath={Text_summ}
          imagePosition="left"
          buttonText="Summarize for Free"
        />
        <ContentSection
          title="Live Transcription"
          description="Concert spoken words into text in real-time, ideal for lecturers and meetings."
          imagePath={mainFeat}
          imagePosition="right"
          buttonText="Try for Free"
        />
        <ContentSection
          title="Keyword Identification"
          description="Extract essential keywords from text documents to aid in summarization and SEO."
          imagePath={Text_summ}
          imagePosition="left"
          buttonText="Try for Free"
        />
        <ContentSection
          title="Domain-Specific Information Retrieval"
          description="Access tailored information specific to your field of study, making research efficient."
          imagePath={mainFeat}
          imagePosition="right"
          buttonText="Try for Free"
        />
        <ContentSection
          title="Entangled Tool Usage "
          description="Use multiple tools in one notes, summarize the text then find the keywords with in the summarized text and then translate that text."
          imagePath={Text_ent}
          imagePosition="left"
          buttonText="Try for Free"
        />
        <ThemeSwitch />
      </main>
    </ParallaxProvider>
  );
}
