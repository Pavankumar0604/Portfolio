import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* light blue overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={120}
      color="#fffbeb"
    />
    {/* cyan side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={100}
      color="#fef3c7"
    />
    {/* area light for soft bright fill */}
    <primitive
      object={new THREE.RectAreaLight("#fef3c7", 15, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={30}
    />
    {/* point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={20} color="#fffbeb" />
    <pointLight position={[1, 2, -2]} intensity={20} color="#fef3c7" />
  </>
);

export default HeroLights;
