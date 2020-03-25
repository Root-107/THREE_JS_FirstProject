import React, { Suspense } from 'react';
import './App.css';

import { Canvas, extend } from "react-three-fiber";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import MainScene from "./components/Modles";
import Ambient from "./components/Lights/ambinet.js";
import SpotLight from "./components/Lights/spot.js"
import Environemnt from "./components/Environemnt";
import PointLight from './components/Lights/point.js';
import Stand from '../src/components/Modles/stand'

/**
 * inside the canvas to add fog
 * <fog attach="fog" args={["grey", 25, 30]} />
 */

extend({OrbitControls});

function App() {
    return (
        <Canvas 
            camera={{position:[0,0,8]}} 
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <Suspense fallback={null}>
                <Stand />
            </Suspense>
            <MainScene/>
            <Ambient/>
            <SpotLight pos={[-3,1,1]} shadows={true} fallOff={0.5} color={0x00aeff}/>
            <SpotLight pos={[3,2,-3]} shadows={true} fallOff={0.5} color={0xff9c00}/>
           <Environemnt/>
        </Canvas>
    );
}

export default App;