/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: David Campbell (https://sketchfab.com/david-campbell)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pubg-male-model-d45092e3358943c29c7d7f79ceffb0d0
title: Pubg Male Model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/male-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.07, 0.09]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
            <mesh geometry={nodes.Skin_Mesh_1_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Skin_Mesh_2_0.geometry} material={materials.material_1} />
            <mesh geometry={nodes.Skin_Mesh_3_0.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Skin_Mesh_4_0.geometry} material={materials.material_3} />
            <mesh geometry={nodes.Skin_Mesh_5_0.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Skin_Mesh_6_0.geometry} material={materials.material_0} />
            <mesh geometry={nodes.Skin_Mesh_7_0.geometry} material={materials.material_6} />
            <mesh geometry={nodes.Skin_Mesh_8_0.geometry} material={materials.material_7} />
            <mesh geometry={nodes.Skin_Mesh_9_0.geometry} material={materials.material_8} />
            <mesh geometry={nodes.Skin_Mesh_10_0.geometry} material={materials.material_9} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/male-transformed.glb')