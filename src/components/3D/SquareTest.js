import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Cube() {
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const gradientMaterial = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "orange");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshBasicMaterial({ map: texture });
  }, []);

  const edgesMaterial = new THREE.LineBasicMaterial({ color: "black" });
  const edges = new THREE.EdgesGeometry(geometry);


  
//   useFrame((state) => {
//     const time = state.clock.getElapsedTime();
//     state.camera.position.x = Math.sin(time) * 3;
//     state.camera.position.z = Math.cos(time) * 3;
//     state.camera.lookAt(0, 0, 0);
//   });

  return (
    <>
      <mesh geometry={geometry} material={gradientMaterial} />
      <lineSegments geometry={edges} material={edgesMaterial} />
    </>
  );
}
