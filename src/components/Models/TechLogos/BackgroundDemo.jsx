"use client";
import React from "react";
import { Boxes } from "../../ui/background-boxes";
import { cn } from "../../../../lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="min-h-full absolute w-full  bg-black-100 ">
      {/* Background overlay with mask effect */}
      <div
        className="absolute inset-0 w-full h-full bg-black-100 z-1 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
      />
      
      {/* Animated Boxes */}
      <Boxes />

      {/* Page content */}
      <div className="relative z-20 text-center px-4">
        
        
      </div>
    </div>
  );
}
