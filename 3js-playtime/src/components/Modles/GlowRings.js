import React, { useState } from 'react'
import { useLoader, primitive } from 'react-three-fiber'
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import Effect from '../Post/Effects'

function GlowRings(props)
{  
    const loader = useLoader(OBJLoader2, props.model_src);

    const ringData = [
        {
            attach:"material",
            color:"grey",
            emissive:0xffffff,
            roughness:0.2,
            metalness:0.7
 
        },
        {
            attach:"material",
            color:"grey",
            emissive:0x7ce0fe,
            roughness:0.2,
            metalness:0.7
        },
        {
            attach:"material",
            color:"grey",
            emissive:0x9888e7,
            roughness:0.2,
            metalness:0.7
        }
    ]

    function Ring (child_props){
        return(
            <mesh
            layers={props.render_layer}
            geometry={child_props.geometry}
            scale={[0.05,0.05,0.05]}
        >
            <meshPhysicalMaterial
                {...child_props}
            /> 
        </mesh>
        )
    }

    return(
        <group position={[0,5,0]}>
            {loader ? loader.children.map((child, i)=>{
                return (
                    <Ring key={i} geometry={child.geometry} {...ringData[i]} />
                )
            }) : null}
        </group>
    )
}

export default GlowRings