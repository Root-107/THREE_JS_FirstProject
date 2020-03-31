import React, { useState, useRef } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useSpring, a } from 'react-spring/three'
import { TextureLoader, Texture, DoubleSide } from 'three';
import { useThree, useFrame } from 'react-three-fiber';
import * as THREE from 'three'


function IntertactionPoint(props)
{
    const item = useRef();
    const {camera} = useThree();
    const [texture, setTexture] = useState();

    const[hovered, setHover] = useState(false);

    const textureLoader = new TextureLoader();
    textureLoader.load("/Textures/HotspotTexture.png", setTexture);

    const camTarget =  [props.position[0], props.position[1], props.position[2]];
    const camPos = [props.cameraPos[0], props.cameraPos[1], props.cameraPos[2]];

    function HandleOnClick()
    {
        props.setTargetPos({position: camTarget})
        props.setCamPos({position: camPos})
        props.setActive(props.name)
        props.setControlState(false);
    }

    useFrame(()=>{
        item.current.lookAt(camera.position)
    }, 1)

    const hoverData = useSpring({
        scale: props.active === props.name? [0.0001,0.0001,0.0001] : hovered? [0.05,0.05,0.05] : [0.06,0.06,0.06],
    })

    return(
        <a.mesh
            ref={item}
            position={props.position}
            scale={hoverData.scale}
            onPointerOver={() =>setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => HandleOnClick()}
        >
            <planeBufferGeometry attach="geometry" args={[10,10]} />
            <meshStandardMaterial
                attach="material"
                transparent={true}
                map={texture}
                side={DoubleSide}
            >
                <texture attach="map"/>
            </meshStandardMaterial>
        </a.mesh>
    )
}

export default IntertactionPoint