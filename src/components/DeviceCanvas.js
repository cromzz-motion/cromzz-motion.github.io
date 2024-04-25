import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Scene = () => {
  const device = useGLTF('/device_mai_inchis.gltf')
  const axisRef = useRef()
  const deviceRef = useRef()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('/device_mai_inchis.gltf', (gltf) => {
      console.log(gltf) // Log the loaded model

      deviceRef.current = gltf.scene
      deviceRef.current.position.set(0, 0, 0) // Adjust position
      deviceRef.current.scale.set(0.1, 0.1, 0.1) // Adjust scale
    })
  }, [])

  return (
    <>
      {/* Load your GLTF model */}
      <primitive
        object={device.scene}
        position={[-2, 0, 0.5]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[Math.PI / 6, 0, -Math.PI / 6]}
      />

      {/* Directional light */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={4}
        color={'#F4FDFF'}
        castShadow={true}
      />

      <directionalLight
        position={[0, -10, 0]}
        intensity={2}
        color={'#F4FDFF'}
        castShadow={true}
      />
    </>
  )
}

const DeviceCanvas = () => {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 5, 10], fov: 60 }}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <Scene />
    </Canvas>
  )
}

export default DeviceCanvas
