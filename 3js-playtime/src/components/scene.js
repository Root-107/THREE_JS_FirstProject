import React, { Suspense, useState, useEffect, useRef } from 'react';

/**
 * Three and fiber imports
 */
import { Canvas, extend, useThree, render, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

/*
components
*/
import MainScene from "./Modles";
import Ambient from "./Lights/ambinet.js";
import SpotLight from "./Lights/spot.js"
import Environemnt from "./Environemnt";
import PointLight from './Lights/point.js';
import GlowRings from './Modles/glow_rings';
import StandBase from './Modles/stand_base';
import Booth from './Modles/booth';
import Base from './Modles/base';
import InfoDesk from './Modles/info-desk';
import StandScreen from './Modles/stand-screen';
import InteractionPoint from './interaction-point';

import Effect from './Post/effects';

/**
 * inside the canvas to add fog
 * <fog attach="fog" args={["grey", 25, 30]} />
 */

let degToRad = (value) =>{
    return value * (Math.PI/180) ;
}
//var Rot = new THREE.Euler(degToRad(-90), degToRad(0), degToRad(0), 'XYZ');

extend({OrbitControls, RenderPass});



// function Camera(props)
// {
//     const ref = useRef();
//     const { set } = useThree

//     useEffect(()=> void setDefaultCamera(ref.current), [])
//     useFrame(() => ref.current.updateMatrixWorld())
//     return(<perspectiveCamera ref={ref} position={props.position}/>)
// }

function Scene()
{
    const [camtarget, setCamTarget] = useState(new THREE.Vector3(0,0,0));

    useFrame(({gl, scene, camera})=>{
        camera.lookAt(camtarget);
        gl.render(scene, camera);
    }, 1)

    return(
        <group>
            <Suspense fallback={null}>
                <StandBase model_src="/StandExportOBJ/Structure.obj" />
                <GlowRings model_src="/StandExportOBJ/GlowRings.obj" />
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[-5,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[0,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[5,0,-5]}/>
                <Base model_src="/StandExportOBJ/Base.obj" />
                <InfoDesk model_src="/StandExportOBJ/InfoDesk.obj" position={[3,0,8]} rotation={[0,5,0]}/>
                <StandScreen model_src="/StandExportOBJ/StandScreen.obj" position={[-4,0.1,10]} rotation={[0, 0.5, 0]}/>
                <StandScreen model_src="/StandExportOBJ/StandScreen.obj" position={[-8,0.1,7]} rotation={[0, 0.2, 0]}/>
                <StandScreen model_src="/StandExportOBJ/StandScreen.obj" position={[-4,0.1,5]} rotation={[0, 1, 0]}/>
                <InteractionPoint position={[-4,1,7]} setCamTarget={setCamTarget}/>
                <InteractionPoint position={[0,2,-3]} setCamTarget={setCamTarget}/>
                <InteractionPoint position={[3,2,8]} setCamTarget={setCamTarget}/>
            </Suspense>

            <MainScene/>
            <Effect/>
            <Ambient/>
            <PointLight/>
        </group>
    )
}

export default Scene;