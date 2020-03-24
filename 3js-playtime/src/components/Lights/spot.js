import React from 'react';

function SportLight(props)
{
    return(
        <spotLight 
            position={props.pos}
            penumbra={props.fallOff}
            castShadow={props.shadows}
            color={props.color}
        />
    )
}

export default SportLight