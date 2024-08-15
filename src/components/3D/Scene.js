// Package imports
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Loader,
  OrbitControls,
  Html,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { useSpring, animated, a } from "@react-spring/three";
import FloatingHead from "./FloatingHead";
import SquareTest from "./SquareTest";
import { PresentationControls } from "@react-three/drei";
// Component imports

export default function Scene({ action, setAction }) {
  return (
    <>
      <Canvas>
        <PerspectiveCamera position={[0, 0, 0]}></PerspectiveCamera>
        {/* <OrthographicCamera makeDefault zoom={1.5} position={[0, 0, 5]} /> */}
        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
        <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />
        {/* Camera */}
        {/* <OrbitControls /> */}

        {/* <Float
          action={action}
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={action === "home" ? 0.2 : 0.15} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={action === "home" ? [-0.02, 0.02] : [-0.02, 0.02]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        > */}
        <PresentationControls>
          <mesh>
            <boxGeometry args={[1, 1, 1]} position={[0, 0, 0]} scale={10} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </PresentationControls>

        {/* </Float> */}

        {/* <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <PlayDate action={action} setAction={setAction} />
        </Float> */}
        {/* <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <Phone action={action} setAction={setAction} />
        </Float> */}
        {/* <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <MacBook action={action} setAction={setAction} />
        </Float> */}
        {/* Find out why grass component doesn't render */}
      </Canvas>
    </>
  );
}
