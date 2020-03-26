import * as THREE from 'three'
import React, { useRef, useEffect, useMemo } from 'react'
import { useThree } from 'react-three-fiber';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

/**
 * this works but i want to try and make it work with render layers
 */
function Effects()
{
    var params = {
        exposure: 1,
        bloomStrength: 5,
        bloomThreshold: 0,
        bloomRadius: 0,
        scene: "Scene with Glow"
    };

    const {gl, scene, camera, size} = useThree()

    const rednerScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    const bloomComposer = new EffectComposer( gl );
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass( rednerScene );
    bloomComposer.addPass( bloomPass );

    const finalPass = new ShaderPass(
        new THREE.ShaderMaterial( {
            uniforms: {
                baseTexture: { value: null },
                bloomTexture: { value: bloomComposer.renderTarget2.texture }
            },
            vertexShader: document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            defines: {}
        } ), "baseTexture"
    );

    return <mesh/>
}

export default Effects