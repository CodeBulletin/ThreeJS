// canvas
const canvas = document.getElementById("webgl")

// Main Scene
const scene = new THREE.Scene();

// Window Size
const winsize = {
    width: 800,
    height: 600
};

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#ff0000'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, winsize.width/winsize.height);
camera.position.z=3
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer( {
    canvas: canvas
})

renderer.setSize(winsize.width, winsize.height)

renderer.render(scene, camera)