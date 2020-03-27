import React, { useState, useRef } from 'react';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2"
import { useSpring, a } from 'react-spring/three'
import { TextureLoader, Texture, DoubleSide } from 'three';
import { useThree, useFrame } from 'react-three-fiber';
import * as THREE from 'three'


function StandScreen(props)
{
    const item = useRef();
    const {camera} = useThree();
    const [texture, setTexture] = useState();

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);

    const textureLoader = new TextureLoader();
    textureLoader.load("/Textures/HotspotTexture.png", setTexture);

    const targetPos = new THREE.Vector3(props.position[0], props.position[1], props.position[2])

    function HandleOnClick()
    {
        setActive(!active);
        props.setCamTarget(targetPos)
    }

    useFrame(()=>{
        item.current.lookAt(camera.position)
    }, 1)


    const hoverData = useSpring({
        scale: active? [0.001,0.001,0.001] : hovered? [0.15,0.15,0.15] : [0.1,0.1,0.1],
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