import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"

function Booth(props) 
{
    const [model, setModel] = useState();

    const loader = new OBJLoader2();
    loader.load(props.model_src, setModel);

    const materialData = [
        {
            attach:"material",
            color:"grey",
            roughness:0.2,
            metalness:0.7
 
        },
        {
            attach:"material",
            color:"grey",
            roughness:0.2,
            metalness:0.7
        },
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
            emissive:0xffffff,
            roughness:0.2,
            metalness:0.7
        }
    ]

    function Item(child_props)
    {
        return(
            <mesh
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
        <group name="table" position={props.position}>
            {model ? model.children.map((child, i)=>{
                return (
                    <Item key={i} geometry={child.geometry} {...materialData[i]} />
                )
            }) : null}
        </group>
    )
}

export default Booth