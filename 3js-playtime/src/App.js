import React, { Suspense, useState } from 'react';
import './App.css';

/**
 * Three and fiber imports
 */
import { Canvas, extend, useThree } from "react-three-fiber";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
/*
components
*/
import MainScene from "./components/Modles";
import Ambient from "./components/Lights/ambinet.js";
import SpotLight from "./components/Lights/spot.js"
import Environemnt from "./components/Environemnt";
import PointLight from './components/Lights/point.js';
import GlowRings from './components/Modles/glow_rings';
import StandBase from './components/Modles/stand_base';
import Booth from './components/Modles/booth';
import Effect from './components/Post/effects'

/**
 * inside the canvas to add fog
 * <fog attach="fog" args={["grey", 25, 30]} />
 */
extend({OrbitControls, RenderPass});

function App() {

    const {camera, scene} = useThree

    var ENTIRE_SCENE = 0, BLOOM_SCENE = 1;
    var bloomLayer = new THREE.Layers();
    bloomLayer.set(BLOOM_SCENE);

    var renderScene = new RenderPass( scene, camera );

    //camera.layers.set(BLOOM_SCENE);

    return (
        <Canvas 
            camera={{position:[10,3,20]}} 
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.Uncharted2ToneMapping
                gl.setClearColor(new THREE.Color('#020207'))
              }}>
        >
            <fog attach="fog" args={["grey", 25, 190]} />
            <Suspense fallback={null}>
                <StandBase model_src="/StandExportOBJ/Structure.obj" />
                <GlowRings model_src="/StandExportOBJ/GlowRings.obj" render_layer={bloomLayer} />
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[-4,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[0,0,-5]}/>
                <Booth model_src="/StandExportOBJ/Booth.obj" position={[4,0,-5]}/>
            </Suspense>
            <MainScene/>
            <Ambient/>
            <Effect/>
            <PointLight />

        </Canvas>
    );
}

export default App;