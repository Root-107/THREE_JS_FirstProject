import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"


function StandScreen(props)
{
    const [model, setModel] = useState();

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);

    const loader = new OBJLoader2();
    loader.load(props.model_src, setModel);

    function Mesh (child_props){
        return(
            <mesh
            layers={props.render_layer}
            geometry={child_props.geometry}
            scale={[0.1,0.1,0.1]}
            castShadow
        >
            <meshPhysicalMaterial
                attach="material"
                color={"white"}
                roughness={1}
                metalness={0.7}
            /> 
        </mesh>
        )
    }

    return(
    <group position={props.position} rotation={props.rotation}>
            {model ? model.children.map((child, i)=>{
                return (
                    <Mesh key={i} geometry={child.geometry} />
                )
            }) : null}
        </group>
    )
}

export default StandScreen