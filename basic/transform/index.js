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

mesh.scale.x = 0.5;
mesh.scale.y = 0.5;

scene.add(mesh);

// Axis Helper
const AxesHelper = new THREE.AxesHelper();
scene.add(AxesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, winsize.width/winsize.height);
camera.position.z = 3
camera.position.x = 0.5
camera.position.y = 0.5
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer( {
    canvas: canvas
})
renderer.setSize(winsize.width, winsize.height)

let mult = 1;

function animate() {
    requestAnimationFrame(animate);
    mesh.position.y += mult / 100;
    mesh.position.z += mult / 300;

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z -= 0.02;
    if(Math.abs(mesh.position.y) >= 1) {
        mult *= -1;
    }

    camera.lookAt(mesh.position)
    renderer.render(scene, camera)
}

animate()