import React from 'react';
import { BackSide } from "three";

export default () => {

    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[30, 10, 10]} />
        <meshPhysicalMaterial
          color={0x404040}
          attach="material"
          side={BackSide}
          metalness={0.4}
        />
      </mesh>
    );
  };