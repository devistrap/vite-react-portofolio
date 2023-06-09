import { Canvas, extend, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls } from '@react-three/drei'
import React from 'react';



extend({ OrbitControls });

const ModelViewer = () => {
  const modelUrl = '/scene.gltf'; // Update with your model's URL

  const gltf = new GLTFLoader();
  const [model, setModel] = React.useState(null);
  const modelRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    gltf.load(modelUrl, (gltf) => {
      setModel(gltf.scene);
    });
  }, [modelUrl]);

  const { camera, gl } = useThree();
  useEffect(() => {
    controlsRef.current.addEventListener('change', () => {
      gl.render();
    });
  }, [gl]);

  return (
    <Canvas>
      <directionalLight intensity={1} position={[0, 5, 0]} />
      <Suspense fallback={null}>
        <perspectiveCamera makeDefault position={[0, 0, 3]} fov={60} />
        {model && (
          <>
            <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
            <primitive object={model} scale={[1, 1, 1]} position={[0, 0, 0]} ref={modelRef} />
          </>
        )}
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;