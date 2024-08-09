
"use client"
import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";


const Blob = () => {
    const mesh = useRef();

    return (
        <mesh
            ref={mesh as any}
            scale={1.5}
            position={[0, 0, 0]}
        >
            <icosahedronBufferGeometry args={[2, 20]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
};

export default Blob;
