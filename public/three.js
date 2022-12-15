import * as THREE from 'three';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

let scene, fbxLoader, hemiLight, spotLight, renderer, 
    camera, controls, container, buildingObj, model;

var loadingBar = document.getElementById("loadingBar");
var progressBar = document.getElementById("progress");

seeModel();


function seeModel(){
    scene = new THREE.Scene()
    fbxLoader = new FBXLoader()
    hemiLight = new THREE.HemisphereLight('white', 'white', 1)
    spotLight = new THREE.SpotLight('white', 0.3)
    renderer = new THREE.WebGLRenderer({
        alpha:true
    })
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    )
    controls = new OrbitControls(camera, renderer.domElement)
    container = document.querySelector('#scene-container');

    scene.add(hemiLight)

    controls.enableDamping = true
    controls.target.set(0, 1, 0)

    camera.position.set(0, 10, 1.0)

    fbxLoader.load(
        'models/building.fbx',
        (object) => {
            object.traverse(function (child) {
                if ( child.isMesh ) {
                    if(child.material)
                        child.material.side = THREE.DoubleSide;
                }
            })
            object.scale.set(.02, .02, .02)
            buildingObj = object;
            controls.enablePan = false;
            scene.add(object)
            progressBar.style.display = "none";
        },
        (xhr) => {
            let percentage = (xhr.loaded / xhr.total) * 100;
            console.log(percentage + '% loaded')
            var roundedPerc = Math.round(percentage * 10) / 10;

            loadingBar.style.width = roundedPerc + "%";
            loadingBar.innerHTML = roundedPerc  + "%";
        },
        (error) => {
            console.log(error)
        }
    )
    
    window.addEventListener('resize', onWindowResize, false)

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor( 0x000000, 0 ); // the default

    // add the automatically created <canvas> element to the page
    model = renderer.domElement;
    container.append(renderer.domElement);
    renderer.domElement.classList.add("modelCanvas");

    animate()
}

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