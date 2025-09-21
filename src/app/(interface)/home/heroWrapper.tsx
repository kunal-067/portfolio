'use client'
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Hero2 = dynamic(() =>
    import("@/components/sections/Hero").then((mod) => ({ default: mod.Hero2 })), { ssr: false }
);

const HeroWrapper: React.FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Hero2 />
    </Suspense>
);

export default HeroWrapper;