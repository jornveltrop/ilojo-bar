import * as THREE from 'three'
import { OrbitControls } from '/jsm/controls/OrbitControls'
import { FBXLoader } from '/jsm/loaders/FBXLoader'
import Stats from '/jsm/libs/stats.module'

const scene = new THREE.Scene()
scene.background = transparent;

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

let buildingObj;

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)
camera.position.set(0, 0.2, 1.0)

const container = document.querySelector('#scene-container');

/*
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)
*/

//const material = new THREE.MeshNormalMaterial()

const fbxLoader = new FBXLoader()
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
        object.scale.set(.04, .04, .04)
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

function animate() {
    requestAnimationFrame(animate)

    if(buildingObj)
        buildingObj.rotation.y -= 0.005;

    //controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}

renderer = new THREE.WebGLRenderer({ 
    canvas: canvas;
    alpha: true 
});
renderer.setClearColor(0xffffff, 0);
renderer.setSize(window.innerWidth, window.innerHeight)

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);
const canvas = renderer.domElement;
canvas.classList.add("modelCanvas");

animate()