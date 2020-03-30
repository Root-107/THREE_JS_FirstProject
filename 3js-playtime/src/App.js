import React, { useState } from 'react';
import './App.css';
import Scene from './components/Scene';

/**
 * Three and fiber imports
 */
import { Canvas, extend, useThree, render, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import Controller from './components/Modles';
import { useSpring } from 'react-spring/three';

/*
Import 3D assets - DONE
Manipulate material types - DONE
Alpha Textures - DONE
Add Orbit controller - DONE
Create look at points - DONE

Create camera move to points - TODO
Camera animations - TODO
Import materials - TODO
LOD groups - TODO
Texturing (PBR Maps) and other properties - TODO
Post processing effects - TODO
Animated textures - TODO
Custome Shaders - TODO
*/


function App() {
    const [controller, setController] = useState()

    return (
        <Canvas 
            shadowMap
            camera={{position:[10,3,20]}}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap
                gl.toneMapping = THREE.Uncharted2ToneMapping
                gl.setClearColor(new THREE.Color('#020207'))
            }}    
        >
            <fog attach="fog" args={["grey", 25, 190]} />
            <Controller controller={controller} setController={setController} />
            <Scene controller={controller} setController={setController} />
        </Canvas>
    );
}

export default App;