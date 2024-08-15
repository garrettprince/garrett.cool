import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EdgesGeometry, LineSegmentsGeometry, Line2, LineMaterial, BoxGeometry } from 'three';

const BoxWithThickLines = () => {
  const lineRef = useRef();

  useFrame(({ gl, size }) => {
    // Set the resolution for proper rendering
    lineRef.current.material.resolution.set(size.width, size.height);
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  return (
    <line ref={lineRef}>
      <lineSegmentsGeometry args={[
        new LineSegmentsGeometry().setPositions(
          new EdgesGeometry(new BoxGeometry(1, 1, 1)).attributes.position.array
        )
      ]} />
      <lineMaterial 
        color={0x0000ff}  // Blue color
        linewidth={5}      // Adjust this for desired thickness
      />
    </line>
  );
};

const App = () => {
  return (
    <Canvas>
      <BoxWithThickLines />
    </Canvas>
  );
};
