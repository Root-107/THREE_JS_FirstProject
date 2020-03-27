import React, { useState } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useSpring, a } from 'react-spring/three'


function StandScreen(props)
{
    const [model, setModel] = useState();

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);

    const loader = new OBJLoader2();
    loader.load(props.model_src, setModel);

    const hoverData = useSpring({
        scale: active? [0.2,0.2,0.2] : [0.1,0.1,0.1],
        color: hovered? "hotpink" : "grey"
    })

    return(
        <a.mesh
            position={props.position}
            scale={hoverData.scale}
            onPointerOver={() =>setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => setActive(!active)}
        >
            <planeBufferGeometry attach="geometry" args={[10,10]} />
            <a.meshBasicMaterial
                attach="material"
                color={hoverData.color}
                roughness={0.2}
                metalness={0.7}
            />
        </a.mesh>
    )
}

export default StandScreen