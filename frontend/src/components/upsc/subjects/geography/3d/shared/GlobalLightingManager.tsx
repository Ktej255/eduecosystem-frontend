"use client";

import { Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

interface GlobalLightingProps {
    bloom?: boolean;
    noise?: boolean;
    vignette?: boolean;
    chromatic?: boolean;
}

export default function GlobalLightingManager({
    bloom = true,
    noise = true,
    vignette = true,
    chromatic = false
}: GlobalLightingProps) {
    return (
        <>
            <Environment preset="city" />
            <ContactShadows
                position={[0, -2, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
            />
            <EffectComposer>
                {(bloom ? <Bloom
                    luminanceThreshold={1}
                    mipmapBlur
                    intensity={0.5}
                    radius={0.4}
                /> : null) as any}
                {(noise && <Noise
                    opacity={0.02}
                    premultiply
                    blendFunction={BlendFunction.SOFT_LIGHT}
                />) as any}
                {(vignette && <Vignette
                    eskil={false}
                    offset={0.1}
                    darkness={1.1}
                />) as any}
                {(chromatic && <ChromaticAberration
                    offset={[0.001, 0.001]}
                    blendFunction={BlendFunction.NORMAL}
                />) as any}
            </EffectComposer>
        </>
    );
}
