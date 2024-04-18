import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

const DeviceCanvas = () => {
  const earth = useGLTF('/planet/scene.gltf')

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <primitive object={earth.scene} />
    </Canvas>
  )
}

export default DeviceCanvas
