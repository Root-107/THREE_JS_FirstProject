import * as THREE from 'three'
import React, { useRef, useEffect, useMemo } from 'react'
import { useThree, extend, useFrame } from 'react-three-fiber';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'


extend({EffectComposer, RenderPass, UnrealBloomPass})
export default function Effects()
{
    const composer = useRef()
    const {scene, gl, size, camera} = useThree()

    const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
    useEffect(() => void composer.current.setSize(size.width, size.height), [size])

    useFrame(() => composer.current.render(), 1)
    return(
    <effectComposer ref={composer} args={[gl]} renderToScreens={false}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[0, 1, 0, 0]} />
    </effectComposer>
    )
}