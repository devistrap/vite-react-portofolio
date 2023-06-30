import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const ModelViewer = () => {
  const modelUrl = '/scene.gltf'; // Update with your model's URL

  const gltfLoader = useRef(new GLTFLoader());
  const [model, setModel] = useState(null);
  const modelRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    gltfLoader.current.load(modelUrl, (gltf) => {
      setModel(gltf.scene);
    });
  }, [modelUrl]);

  return (
    <div >
    <h1 className='text-6xl absolute top-32 text-purple-800 headline' id='headline'>welcome to my portofolio</h1>
    <Canvas  style={{ height: '800px' }} className='w-full '>
      <directionalLight intensity={0.4} position={[0, 5, 0]} />
      <directionalLight intensity={0.4} position={[0, -5, 0]} />
      <directionalLight intensity={0.4} position={[5, 0, 0]} />
      <directionalLight intensity={0.4} position={[-5, 0, 0]} />
      <directionalLight intensity={0.4} position={[0, 0, 5]} />
      <directionalLight intensity={0.4} position={[0, 0, -5]} />
      <Suspense fallback={null}>
        <ModelScene model={model} modelRef={modelRef} controlsRef={controlsRef} />
      </Suspense>
    </Canvas>
    </div>
  );
};

const ModelScene = ({ model, modelRef, controlsRef }) => {
  const { camera, scene, gl } = useThree();
  const [rotationSpeed] = useState(0.005); // Adjust the rotation speed as desired

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed;
    }
    gl.render(scene, camera);
  });

  return (
    <>
      
      {model && (
        <mesh ref={modelRef} scale={[0.06, 0.06, 0.06]}>
          <primitive object={model} />
        </mesh>
      )}
      <orbitControls
        ref={controlsRef}
        args={[camera, gl.domElement]}
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
      
    </>
  );
};

export default ModelViewer;
