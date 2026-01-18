/**
 * GenerateImage Sample Data
 */

import type { ToolSample } from "./types";

export const SAMPLES: ToolSample[] = [
  {
    name: "Sunset Beach",
    args: {
      imageData: "https://picsum.photos/id/28/800/600",
      prompt: "A beautiful sunset over a calm ocean beach with palm trees",
    },
  },
  {
    name: "Mountain Lake",
    args: {
      imageData: "https://picsum.photos/id/29/800/600",
      prompt: "A serene mountain lake surrounded by pine trees and snow-capped peaks",
    },
  },
  {
    name: "City Skyline",
    args: {
      imageData: "https://picsum.photos/id/43/800/600",
      prompt: "A modern city skyline at night with glowing skyscrapers",
    },
  },
  {
    name: "Forest Path",
    args: {
      imageData: "https://picsum.photos/id/15/800/600",
      prompt: "A winding path through an enchanted forest with sunlight filtering through the leaves",
    },
  },
];
