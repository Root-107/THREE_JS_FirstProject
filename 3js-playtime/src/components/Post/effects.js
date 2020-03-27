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
    return <mesh/>
}

export default Effects