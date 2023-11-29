// import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import planet from "../../assets/planet/scene.gltf";

const EarthPrimitive = () => {
  const earth = useGLTF("./media/3d/planet/scene.gltf");

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <EarthPrimitive />
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
