import React from 'react';
import './App.css';

import { Canvas, extend, render } from "react-three-fiber";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

extend({OrbitControls});

var object;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rednerer = new THREE.WebGLRenderer({ antialias: true });

rednerer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rednerer.domElement);


var geo = new THREE.SphereGeometry(2,12,12);
var material = new THREE.MeshBasicMaterial({color: 0x000000});
var spher = new THREE.Mesh(geo, material);
scene.add(spher);

camera.position.z = 5;

// var loader = new OBJLoader();
// loader.load( '../src/static/Imports/3D/StandModel.obj', function ( obj ) {

//     object = obj;
//     object.scale.multiplyScalar( 0.8 );
//     object.position.y = - 30;
//     scene.add( object );

// } );

function animate()
{
    requestAnimationFrame(animate);
    rednerer.render(scene, camera);
}

animate();

function App() {
    return (
        <Canvas>
        </Canvas>
    );
}

export default App;