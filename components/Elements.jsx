import { useRef, useEffect } from "react";
import { Euler } from "three";
import Male from "./Male";
import Car from "./Car";
import { degToRad } from "three/src/math/MathUtils";
import { BackSide } from "three";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";

const Elements = () => {
  const orbitControlRef = useRef(null);
  const spotLightRef = useRef(null);

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
      <OrbitControls ref={orbitControlRef} maxPolarAngle={degToRad(80)} />
      <Male position={[0, 3.2, 5]} castShadow />
      <Car
        castShadow
        scale={2}
        position={[-9, 0.9, -5]}
        rotation={new Euler(degToRad(0), -degToRad(25), degToRad(0))}
      />
      <ambientLight color="#ffffff" />
      <spotLight color="#FFC300" ref={spotLightRef} position={[0, 20, 15]} />
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
          aoMap={aoMap}
        />
      </mesh>
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
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
