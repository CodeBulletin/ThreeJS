// canvas
const canvas = document.getElementById("webgl")

// Main Scene
const scene = new THREE.Scene();

// Window Size
const winsize = {
    width: window.innerWidth,
    height: window.innerHeight
};

//Group
function MakeGroup() {
    const Group = new THREE.Group();
    let cube1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    )
    cube1.position.x += 1;
    cube1.position.y += 1;
    Group.add(cube1);

    let cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x0000ff })
    )
    cube2.position.x += 1;
    cube2.position.y -= 1;
    Group.add(cube2);

    let cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    cube3.position.x -= 1;
    cube3.position.y -= 1;
    Group.add(cube3);

    let cube4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x00ffff })
    )
    cube4.position.x -= 1;
    cube4.position.y += 1;
    Group.add(cube4);

    let cube5 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    )
    Group.add(cube5);

    return Group;
}
const group = MakeGroup();
scene.add(group)

// Axis Helper
const AxesHelper = new THREE.AxesHelper();
scene.add(AxesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, winsize.width/winsize.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer( {
    canvas: canvas
})

renderer.setSize(winsize.width, winsize.height)

let Clock = new THREE.Clock();

let time_left = 1;

function animate() {
    requestAnimationFrame(animate);

    const delta_time = Clock.getDelta();

    group.rotation.z += 1 * delta_time
    group.rotation.x += 3 * delta_time
    group.rotation.y += 2 * delta_time

    if(time_left <= 0) {
        gsap.to(group.position, {duration: 1, delay: 1, x: 1})
        gsap.to(group.position, {duration: 1.5, delay: 2, x: -1})
        gsap.to(group.position, {duration: 1, delay: 3.5, x: 0})
        time_left = 4
    }

    time_left -= delta_time;

    renderer.render(scene, camera)
}

animate()