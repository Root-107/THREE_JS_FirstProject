import React, { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Stand from './glow_rings' 
import { useSpring, a } from 'react-spring/three'
import { extend, useThree } from 'react-three-fiber';

/*useSpring => react spring is cross platform, us spring alows for animations outside of react
 the component renders once and then animates, far more optimised
 a => (shortcut for animated)
*/



function MainScene () {

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);

    const mesh = useRef();
    const orbitRef = useRef();

    //React spring can turn static values in to values that animate by tehmselves
    const props = useSpring({
        scale: active? [1.5,1.5,1.5] : [1,1,1],
        color: hovered? "hotpink" : "grey"
    })

    extend({OrbitControls});

    const Controls = () => {
        const {camera, gl} = useThree();
        return(
            <orbitControls
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/3}
                args={[camera, gl.domElement]}
                ref={orbitRef}
            />
        )
    }


    let degToRad = (value) =>{
        return value * (Math.PI/180) ;
    }

    var planeRot = new THREE.Euler(degToRad(-90), degToRad(0), degToRad(0), 'XYZ');

    return (
        <>
        <Controls />
            {/* <group
                ref = {mesh}
            >
                <a.mesh
                    onPointerOver={() =>setHover(true)}
                    onPointerOut={() => setHover(false)}
                    onClick={() => setActive(!active)}
                    scale={props.scale}
                    castShadow
                >
                    <boxBufferGeometry
                        attach="geometry"
                        args={[1,1,1]}
                        scale ={props.scale}
                        
                    />
                    <a.meshPhysicalMaterial
                        attach="material"
                        color={props.color}
                        roughness={0.1}
                        metalness={0.3}
                    />
                </a.mesh>
                <mesh position={[0, -1, 0]} rotation={planeRot} receiveShadow >
                    <planeBufferGeometry attach="geometry" args={[10,10]} />
                    <a.meshPhysicalMaterial
                        attach="material"
                        color={"grey"}
                        roughness={0.2}
                        metalness={0.7}
                    />
                </mesh>
            </group> */}
        </>
    )
}

export default MainScene