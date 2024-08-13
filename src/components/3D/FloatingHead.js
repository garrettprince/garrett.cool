import { useGLTF, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export default function FloatingHead({}) {
  const { nodes, materials } = useGLTF("./models/facetest3.gltf");

  //   const { scale, position, rotation } = useSpring({
  //     scale: action !== "home" ? 0.275 : 0.2,
  //     position: action !== "home" ? [-1.4, 3.1, 0] : [-1.4, 3.25, 0],
  //     rotation: action !== "home" ? [0.5, 0.6, 0] : [0.5, 0.2, 0],
  //   });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    meshRef.current.rotation.y += 0.007;
  });

  return (
    <animated.group
      ref={meshRef}
      scale={1}
      position={[0, -0.3, 0]}
      rotation={[0, 0, 0]}
    >
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
