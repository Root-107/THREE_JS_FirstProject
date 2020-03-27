import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useLoader } from 'react-three-fiber';

function Base(props)
{
    const loader = useLoader(OBJLoader2, props.model_src);

    return(
        <group name="data">
            {loader ? <mesh
                geometry={loader.children[0].geometry}
                scale={[0.04,0.04,0.04]}
            >
                <meshPhysicalMaterial
                    attach="material"
                    color={"white"}
                    roughness={1}
                    metalness={0.7}
                /> 
            </mesh> : null}
        </group>
    )
}



export default Base