import React from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useLoader } from 'react-three-fiber';

function Stage(props)
{
    const loader = useLoader(OBJLoader2, props.model_src);

    function Mesh (child_props){
        return(
            <mesh
            layers={props.render_layer}
            geometry={child_props.geometry}
            scale={[0.025,0.025,0.025]}
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
        <group position={props.position} rotation={props.rotation}>
            {console.log(loader)}
            {loader ? loader.children.map((child, i)=>{
                return (
                    <Mesh key={i} geometry={child.geometry} />
                )
            }) : null}
        </group>
    )
}

export default Stage;