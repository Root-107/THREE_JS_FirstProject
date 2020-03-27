import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"

function InfoDesk(props)
{
    const [model, setModel] = useState();

    const loader = new OBJLoader2();
    loader.load(props.model_src, setModel);

    function Mesh (child_props){
        return(
            <mesh
            layers={props.render_layer}
            geometry={child_props.geometry}
            scale={[0.06,0.06,0.06]}
            castShadow
        >
            <meshStandardMaterial
                attach="material"
                color={"white"}
                roughness={1}
                metalness={0.7}
            /> 
        </mesh>
        )
    }

    return(
        <group position={props.position}>
            {model ? model.children.map((child, i)=>{
                return (
                    <Mesh key={i} geometry={child.geometry} />
                )
            }) : null}
        </group>
    )
}



export default InfoDesk