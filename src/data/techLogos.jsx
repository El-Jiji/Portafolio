import React from "react";
import html5Logo from "../../SVG/html5.svg";
import cssLogo from "../../SVG/css_old.svg";
import phpLight from "../../SVG/Php_light_dark/Php_light.svg";
import phpDark from "../../SVG/Php_light_dark/Php_dark.svg";
import githubLight from "../../SVG/GitHub_light_dark/GitHub_light.svg";
import githubDark from "../../SVG/GitHub_light_dark/GitHub_dark.svg";
import vercelLight from "../../SVG/Vercel_light_dark/Vercel_light.svg";
import vercelDark from "../../SVG/Vercel_light_dark/Vercel_dark.svg";
import supabaseLogo from "../../SVG/supabase.svg";
import reactLight from "../../SVG/React_light_dark/React_light.svg";
import reactDark from "../../SVG/React_light_dark/React_dark.svg";
import typescriptLogo from "../../SVG/typescript.svg";
import tailwindLogo from "../../SVG/tailwindcss.svg";
import threeLight from "../../SVG/Three.js_light_dark/Three.js_light.svg";
import threeDark from "../../SVG/Three.js_light_dark/Three.js_dark.svg";
import nodeLogo from "../../SVG/nodejs.svg";
import dockerLogo from "../../SVG/docker.svg";

export const techLogos = [
  { name: "HTML5", src: html5Logo },
  { name: "CSS3", src: cssLogo },
  { name: "PHP", lightSrc: phpLight, darkSrc: phpDark },
  { name: "GitHub", lightSrc: githubLight, darkSrc: githubDark },
  { name: "Vercel", lightSrc: vercelLight, darkSrc: vercelDark },
  { name: "Supabase", src: supabaseLogo },
  { name: "React", lightSrc: reactLight, darkSrc: reactDark },
  { name: "TypeScript", src: typescriptLogo },
  { name: "Tailwind CSS", src: tailwindLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Three.js", lightSrc: threeLight, darkSrc: threeDark },
];
