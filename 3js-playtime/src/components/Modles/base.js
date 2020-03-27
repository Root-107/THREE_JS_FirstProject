import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"

function Base(props)
{
    const [model, setModel] = useState();

    const loader = new OBJLoader2();
    loader.load(props.model_src, setModel);

    return(
        <group name="data">
            {model ? <mesh
                geometry={model.children[0].geometry}
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