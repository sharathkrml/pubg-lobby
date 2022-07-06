import { useRef } from "react";
import { Euler, SpotLightHelper } from "three";
import Male from "./Male";
import Car from "./Car";
import { degToRad } from "three/src/math/MathUtils";
import { BackSide } from "three";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";

const Elements = () => {
  const spotLight = useRef(null);
  useHelper(spotLight, SpotLightHelper, "red");
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 16]} />
      <OrbitControls />

      <Male position={[0, 2.55, 5]} castShadow />

      <ambientLight color="#ffffff" />

      <spotLight
        castShadow
        position={[-9, 8, 10]}
        ref={spotLight}
        angle={1}
        distance={20}
      />
      <mesh rotation={[-degToRad(90), 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1ea8d8"></meshStandardMaterial>
      </mesh>
    </>
  );
};

export default Elements;
