import React, { Suspense, useState, useEffect, useRef, useContext } from 'react';
import TweenLite from 'gsap';

/**
 * Three and fiber imports
 */
import { extend, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

/*
components
*/
import MainScene from "./Modles";
import Ambient from "./Lights/Ambinet.js";
import SpotLight from "./Lights/Spot.js"
import Environemnt from "./Environemnt";
import PointLight from './Lights/Point.js';
import GlowRings from './Modles/GlowRings';
import StandBase from './Modles/StandBase';
import Booth from './Modles/Booth';
import Base from './Modles/Base';
import InfoDesk from './Modles/InfoDesk';
import StandScreen from './Modles/StandScreen';
import InteractionPoint from './InteractionPoint';
import Effect from './Post/Effects';

import { OrbitControllerContext } from '../context/OrbitControllerContext'
import { useSpring, a } from 'react-spring/three';
import { config } from 'react-spring'

/**
 * inside the canvas to add fog
 * <fog attach="fog" args={["grey", 25, 30]} />
 */

// let degToRad = (value) =>{
//     return value * (Math.PI/180) ;
// }
//var Rot = new THREE.Euler(degToRad(-90), degToRad(0), degToRad(0), 'XYZ');

extend({OrbitControls, RenderPass});

function Scene(props)
{
    const camTarget = useRef();

    const [hotSpotActive, setActive] = useState(false);

    const [camTargetPos, setTargetPos] = useSpring(() => ({
          position: [0,0,0],  
          config: { mass: .5, tension: 80, friction: 26, clamp: true }
        }))
    const [camPos, setCamPos] = useSpring(() => ({
        position: [10,3,20], 
        config: { mass: .5, tension: 80, friction: 26, clamp: true }
    }))

    // if(props.controller)
    // {
    //     console.log(props.controller.current);
    // }

    useFrame(({gl, scene, camera})=>
    {
        props.controller.current.target.set(camTarget.current.position.x, camTarget.current.position.y, camTarget.current.position.z);
        props.controller.current.object.position.set(camPos.current.position.x, camPos.current.position.y, camPos.current.position.z);
        props.controller.current.update();
        gl.render(scene, camera);
    }, 1)

    function CreateInteractionPoint(position, cameraPos)
    {
        return (
            <InteractionPoint position={position} cameraPos={cameraPos} setTargetPos={setTargetPos} setCamPos={setCamPos} />
        )
    }

    return(
        <group>
            <a.group ref={camTarget} position={camTargetPos.position}></a.group>
            <a.group ref={camPos} position={camPos.position}></a.group>
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
                {CreateInteractionPoint([-3,1,7], [-2,1,7])} 
                {CreateInteractionPoint([0,2,-3], [1,3,0])}
                {CreateInteractionPoint([3,2,8], [4,3,9])}
            </Suspense>

            <Effect/>
            <Ambient/>
            <PointLight/>
        </group>
    )
}

export default Scene;