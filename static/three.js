import * as THREE from 'three';
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

const scene = new THREE.Scene()
const light = new THREE.PointLight()
const ambientLight = new THREE.AmbientLight()
const fbxLoader = new FBXLoader()
const renderer = new THREE.WebGLRenderer({
    alpha:true
})
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
)
const controls = new OrbitControls(camera, renderer.domElement)
const container = document.querySelector('#scene-container');

light.position.set(0.8, 1.4, 1.0)
scene.add(light)
scene.add(ambientLight)

controls.enableDamping = true
controls.target.set(0, 1, 0)

camera.position.set(0, 10, 1.0)

let buildingObj;

//const material = new THREE.MeshNormalMaterial()

fbxLoader.load(
    'models/building.fbx',
    (object) => {
        // object.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         // (child as THREE.Mesh).material = material
        //         if ((child as THREE.Mesh).material) {
        //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         }
        //     }
        // })
        object.scale.set(.25, .25, .25)
        buildingObj = object;
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function resizeRendererToDisplaySize() {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

function animate() {
    requestAnimationFrame(animate)

    if(buildingObj)
        buildingObj.rotation.y -= 0.005;

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)

    if (resizeRendererToDisplaySize()) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    
    //disable vertical movement plus zooming
    controls.minPolarAngle = Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;
    controls.enableZoom = false;
}

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor( 0x000000, 0 ); // the default

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);
renderer.domElement.classList.add("modelCanvas");

animate()