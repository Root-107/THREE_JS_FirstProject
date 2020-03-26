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
import GlowRings from './components/Modles/glow_rings';
import StandBase from './components/Modles/stand_base';
import Booth from './components/Modles/booth';

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
                <StandBase model_src="/StandExportOBJ/Structure.obj" />
                <GlowRings model_src="/StandExportOBJ/GlowRings.obj" />
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[-4,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[0,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[4,0,-5]}/>
            </Suspense>

            <MainScene/>
            <Ambient/>
            <PointLight />
           <Environemnt/>
        </Canvas>
    );
}

export default App;