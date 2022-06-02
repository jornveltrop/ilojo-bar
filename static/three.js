import * as THREE from 'three';
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

const scene = new THREE.Scene()
const fbxLoader = new FBXLoader()
const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.8)
const spotLight = new THREE.SpotLight(0xffa95c, 0.3)
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

spotLight.castShadow = true;
spotLight.shadow.bias = -0.00001;
spotLight.shadow.mapSize.width = 1024*4;
spotLight.shadow.mapSize.height = 1024*4;

scene.add(hemiLight)
scene.add(spotLight)
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.shadowMap.enabled = true;

controls.enableDamping = true
controls.target.set(0, 1, 0)

camera.position.set(0, 10, 1.0)

let buildingObj;

fbxLoader.load(
    'models/test.fbx',
    (object) => {
        object.traverse(function (child) {
            if ( child.isMesh ) {
                child.castShadow = true;
                child.receiveShadow = true;
                if(child.material.map)
                    child.material.map.anisotropy = 16;
                if(child.material)
                    child.material.side = THREE.DoubleSide;
            }
        })
        object.scale.set(.02, .02, .02)
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

    spotLight.position.set(
        camera.position.x + 10,        
        camera.position.y + 10,
        camera.position.z + 10,
    )

    if(buildingObj)
        buildingObj.rotation.y -= 0.002;

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