import React, { createContext, useState } from 'react';

export const OrbitControllerContext = createContext();

export default (props)=>{
    const [controller, setController] = useState({});
let a = {test:true}
    return(
        <OrbitControllerContext.Provider value={a}>
            {props.children}
        </OrbitControllerContext.Provider>
    )
}