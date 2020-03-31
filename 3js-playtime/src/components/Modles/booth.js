import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { DoubleSide } from 'three';
import { useLoader } from 'react-three-fiber';

function Booth(props) 
{
    const loader = useLoader(OBJLoader2, props.model_src);

    const materialData = [
        {
            attach:"material",
            color:"white",
            roughness:1,
            metalness:0.7
 
        },
        {
            attach:"material",
            color:"white",
            roughness:1,
            metalness:0.7
        },
        {
            attach:"material",
            color:"white",
            roughness:1,
            metalness:0.7
        },
        {
            attach:"material",
            color:"white",
            roughness:1,
            metalness:0.7
        },
        {
            side:DoubleSide,
            attach:"material",
            color:"white",
            roughness:1,
            metalness:0.7
        }
    ]

    function Item(child_props)
    {
        return(
            <mesh
                geometry={child_props.geometry}
                scale={[0.06,0.06,0.06]}
                castShadow
            >
            <meshStandardMaterial
                {...child_props}
            /> 
        </mesh>
        )
    }

    return(
        <group name="table" position={props.position}>
            {loader ? loader.children.map((child, i)=>{
                return (
                    <Item key={i} geometry={child.geometry} {...materialData[i]} />
                )
            }) : null}
        </group>
    )
}

export default Booth