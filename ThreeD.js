// @refresh reset

import { ExpoWebGLRenderingContext, GLView } from 'expo-gl'
import { Renderer, TextureLoader } from 'expo-three'
import * as React from 'react'
import {
  AmbientLight,
  BoxBufferGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three'


export default () => {
  let timeout
  
  // THIS MAKE SHIT WORK
  THREE.suppressExpoWarnings(true)

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout)
  }, [])

  return (
    <GLView
      style={{ flex: 1, maxHeight: 300, width:'100%'}}
      onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl
        const sceneColor = 0x6ad6f0

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl })
        renderer.setSize(width, height)
        renderer.setClearColor( 0x000000, 0)

        const camera = new PerspectiveCamera(70, width / height, 0.01, 1000)
        camera.position.set(2, 5, 5)

        const scene = new Scene()

        const ambientLight = new AmbientLight(0x101010)
        scene.add(ambientLight)

        const pointLight = new PointLight(0xffffff, 2, 1000, 1)
        pointLight.position.set(0, 200, 200)
        scene.add(pointLight)

        const spotLight = new SpotLight(0xffffff, 0.5)
        spotLight.position.set(0, 500, 100)
        spotLight.lookAt(scene.position)
        scene.add(spotLight)

        const cube = new IconMesh()
        
        cube.rotation.x = Math.random() * 360
        cube.rotation.y = Math.random() * 360
        scene.add(cube)

        camera.lookAt(cube.position)

        function update() {
          cube.rotation.y += 0.0075
          cube.rotation.x += 0.0075
        }

        // Setup an animation loop
        const render = () => {
          timeout = requestAnimationFrame(render)
          update()
          renderer.render(scene, camera)
          gl.endFrameEXP()
        }
        render()
      }}
    />
  )
}

class IconMesh extends Mesh {
  constructor() {
    super(
      new BoxBufferGeometry(5.0, 5.0, 5.0),
      new THREE.MeshNormalMaterial()
    )
  }
}
