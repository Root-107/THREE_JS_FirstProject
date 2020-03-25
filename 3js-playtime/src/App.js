import React, { Suspense } from 'react';
import './App.css';

import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
    'Test_02/Build/Test_02.json',
    'Test_02/Build/UnityLoader.js'
);


function App() {
    return (
        <Unity unityContent={unityContent} />
    );
}

export default App;