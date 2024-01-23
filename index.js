import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

// Sahne oluşturur
const scene = new THREE.Scene();

// Yeni bir perspektif kamera oluşturur
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

// yetersiz ışık.
//const light = new THREE.AmbientLight( 0x404040 )
//scene.add(light);

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 5 );
scene.add( light );

// WebGLRenderer'ı oluştur
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0.5, 0.5, 0.5));

// Render boyutlarını belirlyor
renderer.setSize(window.innerWidth, window.innerHeight);

// Render DOM elementini belirtilen body elementine ekle
document.body.appendChild(renderer.domElement);

loader.load('models/dgkn.glb', (gltf) => {
    let model = gltf.scene;
    scene.add(model);
    model.rotation.x = 89.8;
    model.rotation.y = 89.5;
    //model.rotation.z = 88.5;

    function animate() {
        requestAnimationFrame(animate);
        //model.rotation.z += 0.01;
        model.rotation.x += 0.01;
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});

camera.position.z = 2;

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

