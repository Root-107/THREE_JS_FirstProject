import React, { useState, useRef, useContext } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Stand from './glow_rings' 
import { useSpring, a } from 'react-spring/three'
import { extend, useThree } from 'react-three-fiber';

/*useSpring => react spring is cross platform, us spring alows for animations outside of react
 the component renders once and then animates, far more optimised
 a => (shortcut for animated)
*/

function MainScene (props) {

    const[hovered, setHover] = useState(false);
    const[active, setActive] = useState(false);
    const orbitRef = useRef();
    
    props.setController(orbitRef)

    const Controls = () => {
        const {camera, gl} = useThree();
        return(
            <orbitControls
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/3}
                args={[camera, gl.domElement]}
                ref={orbitRef}
            />
        )
    }


    return (
        <Controls/>
    )
}

export default MainScene