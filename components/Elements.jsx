import { useRef } from "react";
import { Euler, SpotLightHelper } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Male from "./Male";
import Car from "./Car";
import { degToRad } from "three/src/math/MathUtils";
import { BackSide } from "three";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
  useTexture,
} from "@react-three/drei";

const Elements = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      "Grass/Color.jpg",
      "Grass/Displacement.jpg",
      "Grass/Normal.jpg",
      "Grass/Roughness.jpg",
      "Grass/AmbientOcclusion.jpg",
    ]);
  const sky = useTexture(["sky.jpg"]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 16]} />
      <OrbitControls />
      <Male position={[0, 3.2, 5]} castShadow />

      <ambientLight color="#ffffff" />
      <mesh rotation={[-degToRad(90), 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 10, 10]} />
        <meshStandardMaterial
          displacementScale={10}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          roughness={10}
          metalness={0.2}
          //   wireframe
          aoMap={aoMap}
        />
      </mesh>
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            // wireframe
            displacementScale={0}
            side={BackSide}
            map={sky[0]}
          />
        </mesh>
      </Environment>
    </>
  );
};

export default Elements;
