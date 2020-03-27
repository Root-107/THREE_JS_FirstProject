import React, { useState } from 'react';
import './App.css';
import Scene from './components/scene';

/**
 * Three and fiber imports
 */
import { Canvas, extend, useThree, render, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import MainScene from './components/Modles';


function App() {
    const [controller, setController] = useState()

    return (
        <Canvas 
            shadowMap
            camera={{position:[10,3,20]}}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
                gl.toneMapping = THREE.Uncharted2ToneMapping
                gl.setClearColor(new THREE.Color('#020207'))
            }}
            
        >
            <fog attach="fog" args={["grey", 25, 190]} />
            <MainScene controller={controller} setController={setController}  />
            <Scene controller={controller} setController={setController} />
        </Canvas>
    );
}

export default App;