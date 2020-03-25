import React, { useState, useEffect } from 'react'
import { useLoader, primitive } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"

function Stand()
{  

    const [model, setModel] = useState();
    //const { nodes , materials } = useLoader(GLTFLoader, '/StandModel.gltf');

    new OBJLoader2().load("/StandModel.obj", setModel);


    //console.log(nodes)
    //console.log(model)
    return(
        <group name="data">
            {/* {model ? <primitive object={model} size={[0.01,0.01,0.01]}>
            <meshPhysicalMaterial
                    attach="material"
                    color={"red"}
                    roughness={0.2}
                    metalness={0.7}
                />
            </primitive> : null} */}
            {model ?
            <mesh
                geometry={model.children[0].geometry}
                scale={[0.1,0.1,0.1]}
                smooth ={[1]}
            >
                <meshPhysicalMaterial
                    attach="material"
                    color={"grey"}
                    roughness={0.2}
                    metalness={0.7}
                /> 
            </mesh> : null}
        </group>
    )
}

export default Stand