import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");



// Scene
const scene = new THREE.Scene();



const group= new THREE.Group()
scene.add(group);

const cube1= new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:0xff0000}),
)
group.add(cube1);


const cube2= new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:0x00f000}),
)
cube2.position.x=-2
group.add(cube2);


const cube3= new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:0x66f0}),
)
cube3.position.x=2
group.add(cube3);
/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x663399 });
const mesh = new THREE.Mesh(geometry, material);
mesh.scale.set(2, 0.5, 0.5);

mesh.rotation.reorder('ZXY')
mesh.rotation.x= Math.PI * 0.25
mesh.rotation.y= Math.PI * 0.25

scene.add(mesh);

//- axes helper

const axesHelper= new THREE.AxesHelper(2);
scene.add(axesHelper);


/**
 * Sizes
 */
const sizes = {
  width: 1536,
  height: 703.5,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position));

camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
