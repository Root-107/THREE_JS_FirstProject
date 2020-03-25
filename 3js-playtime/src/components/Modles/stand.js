import React, { useState } from 'react'
import { useLoader, primitive } from 'react-three-fiber'
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"

function Stand()
{  
    //const {nodes , materials } = useLoader(OBJLoader2, '/scene.gltf');
    const [model, setModel] = useState();
    
    const loader = new OBJLoader2();
    loader.load("/StandModel.obj", setModel);

    return(
        <group name="data">
            {model ? <mesh
                geometry={model.children[0].geometry}
                scale={[0.05,0.05,0.05]}
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