"use client";

import { useState } from "react";

interface Theme {
  id: number;
  bgColor: string;
  textColor: string;
  label: string;
  preview: string;
}

const ThemeSwitch = () => {
  const [activeTheme, setActiveTheme] = useState<number>(1);

  const themes: Theme[] = [
    {
      id: 1,
      bgColor: "bg-theme_1_bg",
      textColor: "text-theme_1_text",
      label: "Light",
      preview: "Aa",
    },
    {
      id: 2,
      bgColor: "bg-theme_2_bg",
      textColor: "text-theme_2_text",
      label: "Cream",
      preview: "Aa",
    },
    {
      id: 3,
      bgColor: "bg-theme_3_bg",
      textColor: "text-theme_3_text",
      label: "Gray",
      preview: "Aa",
    },
    {
      id: 4,
      bgColor: "bg-theme_4_bg",
      textColor: "text-theme_4_text",
      label: "Dark",
      preview: "Aa",
    },
    {
      id: 5,
      bgColor: "bg-theme_5_bg",
      textColor: "text-theme_5_text",
      label: "Charcoal",
      preview: "Aa",
    },
  ];

  return (
    <div className="w-full h-screen bg-background_light flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[90vh]">
        <div className="flex flex-col mb-6">
          <div>
            <span className="text-[48px] heading-bold text-background mr-8">
              Themes
            </span>
            <span className="text-[20] heading-medium text-background">
              Have your preferred study experience.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-[calc(100%-4rem)]">
          {/* Main Preview Area */}
          <div
            className={`flex-1 h-5/6 rounded-lg border-2 border-background transition-colors duration-300 ${
              themes[activeTheme - 1].bgColor
            }`}
          >
            <div className={`p-6 h-full ${themes[activeTheme - 1].textColor}`}>
              <h3 className="text-2xl font-medium mt-4 mb-2">Preview</h3>
              <p className="text-lg p-2 mr-8 text-justify">
                Lorem ipsum dolor sit amet. Cum dicta molestiae quo incidunt
                velit et consequuntur eius aut saepe dicta qui quod autem. Aut
                expedita facilis ut eaque totam et exercitationem ipsum sed
                pariatur delectus ut inventore possimus. At magnam dolor sed
                velit sunt qui commodi nostrum id alias atque qui consequatur
                eveniet. Ea atque repellendus aut quia suscipit qui quidem{" "}
              </p>
              <p className="text-lg p-2 mr-8 text-justify">
                necessitatibus qui molestias galisum et voluptatem sunt. Eum
                repudiandae doloremque aut fugit iste ut sapiente repudiandae
                quo quidem accusamus non repellendus totam et quod velit. Aut
                dolores dolores eos facilis quidem ad alias dicta. Est dolore
                commodi eum voluptatem ipsum sed debitis iusto ad autem
                deleniti! Non numquam voluptates cum totam odit et soluta vitae?
              </p>
              <p className="text-lg p-2 mr-8 text-justify">
                Lorem ipsum dolor sit amet. Cum dicta molestiae quo incidunt
                velit et consequuntur eius aut saepe dicta qui quod autem. Aut
                expedita facilis ut eaque totam et exercitationem ipsum sed
                pariatur delectus ut inventore possimus. At magnam dolor sed
                velit sunt qui commodi nostrum id alias atque qui consequatur
                eveniet. Ea atque repellendus aut quia suscipit qui quidem{" "}
              </p>
            </div>
          </div>

          {/* Theme Options */}
          <div className="flex flex-col gap-3 w-full md:w-48">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`
                  w-full h-24 rounded-lg border-2 border-background
                  transition-all duration-300
                  hover:scale-105
                  ${theme.bgColor}
                  ${theme.textColor}
                  flex items-center p-8 pt-12
                  text-4xl font-medium
                  ${
                    activeTheme === theme.id
                      ? "ring-2 ring-offset-2 ring-gray-400"
                      : ""
                  }
                `}
                onMouseEnter={() => setActiveTheme(theme.id)}
                onClick={() => setActiveTheme(theme.id)}
              >
                {theme.preview}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
