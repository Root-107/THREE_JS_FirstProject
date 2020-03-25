import React from 'react'
import ReactDOM from 'react-dom'
import Unity, { UnityContent } from 'react-unity-webgl'
import './index.css'

ReactDOM.render(
  <Unity unityContent={new UnityContent('Test_02/Build/Test_02.json', 'Test_02/Build/UnityLoader.js')} />,
  document.getElementById('root')
)