import React, { useState, useRef } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useSpring, a } from 'react-spring/three'
import { TextureLoader, Texture, DoubleSide } from 'three';
import { useThree } from 'react-three-fiber';


function StandScreen(props)
{
    const {camera} = useThree();
    const meshPos = useRef();

    const [texture, setTexture] = useState();

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);

    const textureLoader = new TextureLoader();

    textureLoader.load("/Textures/HotspotTexture.png", setTexture);

    function HandleOnClick()
    {
        setActive(!active);
        //props.setCam(props.position);
    }

    const hoverData = useSpring({
        scale: active? [0,0,0] : hovered? [0.15,0.15,0.15] : [0.1,0.1,0.1],
    })

    return(
        <a.mesh
            position={props.position}
            scale={hoverData.scale}
            onPointerOver={() =>setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => HandleOnClick()}
        >
            <planeBufferGeometry attach="geometry" args={[10,10]} />
            <a.meshStandardMaterial
                attach="material"
                transparent={true}
                map={texture}
                side={DoubleSide}
            >
                <texture attach="map"/>
            </a.meshStandardMaterial>
        </a.mesh>
    )
}

export default StandScreen