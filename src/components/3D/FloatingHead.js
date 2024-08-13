import { useGLTF, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export default function FloatingHead({ menuOpen }) {
  const { nodes, materials } = useGLTF("./models/facetest3.gltf");

  const { scale, position, rotation } = useSpring({
    scale: menuOpen === true ? 2 : 1,
    position: menuOpen === true ? [0, -0.3, 0] : [0, -0.3, 0],
    //   rotation: action !== "home" ? [0.5, 0.6, 0] : [0.5, 0.2, 0],
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    menuOpen
      ? (meshRef.current.rotation.y = 0)
      : (meshRef.current.rotation.y += 0.007);
  });

  return (
    <animated.group ref={meshRef} scale={scale} position={position}>
      <PresentationControls
        global
        polar={[0, 0]} // Restrict vertical rotation
        azimuth={[-Infinity, Infinity]} // Allow horizontal rotation
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FBHead003.geometry}
          material={materials["FBHead.001_preview_mat"]}
        />
      </PresentationControls>
    </animated.group>
  );
}

useGLTF.preload("/models/facetest3.gltf");
