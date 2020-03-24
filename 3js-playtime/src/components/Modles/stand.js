import React from 'react'
import { useLoader, primitive } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Stand()
{  
    const {nodes , materials } = useLoader(GLTFLoader, '/scene.gltf');

    //console.log(nodes)

    return(
        <group name="data">
            <mesh
                geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
                scale={[0.05,0.05,0.05]}
            >
                <meshPhysicalMaterial
                    attach="material"
                    color={"grey"}
                    roughness={0.2}
                    metalness={0.7}
                /> 
            </mesh>
        </group>
        //<primitive object={nodes.mesh}/>
    )
}

export default Stand