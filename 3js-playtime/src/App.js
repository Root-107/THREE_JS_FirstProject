import React from 'react';
import './App.css';
import Scene from './components/scene';

/**
 * Three and fiber imports
 */
import { Canvas, extend, useThree, render, useFrame } from "react-three-fiber";
import * as THREE from 'three';


function App() {
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
        <Scene />
        </Canvas>
    );
}

export default App;