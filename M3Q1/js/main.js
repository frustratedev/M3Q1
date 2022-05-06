//Bedroom Remake
//Materials used - MeshLambert, MeshPhong, MeshStandard
//Lights used - Ambient, Directional, Pointlight
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Lights
const ambientLight = new THREE.AmbientLight(0x0B5394 );
scene.add(ambientLight);

//Window Light
const window_light = new THREE.DirectionalLight( 0x0B5394, 0.5);
window_light.position.set(-44,2,0)
scene.add(window_light);

//Lamp Light
const lamp_light = new THREE.PointLight(0xf1c61c, 1);
lamp_light.position.set(-39, 10 ,-25);
scene.add(lamp_light);

//Materials
const wall = new THREE.MeshLambertMaterial({color:0x444444});
const flooring = new THREE.MeshLambertMaterial({color: 0x444444 });
const wood = new THREE.MeshStandardMaterial({color:0x733D04});
const glass = new THREE.MeshLambertMaterial({color: 0xffc2c5cc});
const blanket_material = new THREE.MeshPhongMaterial({color:0x990000});
const pillow_material = new THREE.MeshPhongMaterial({color:0xffffff});
const monitor_stand_material = new THREE.MeshLambertMaterial({color:0x3f3f3f});
const monitor_screen = new THREE.MeshLambertMaterial({color:0x212121});
const lampshade = new THREE.MeshStandardMaterial({color:0xf7d281});
const silver_handlebar = new THREE.MeshLambertMaterial({color:0x959595});

//Front Wall
const wall_geom = new THREE.BoxGeometry(1, 40, 100);
const front_wall = new THREE.Mesh(wall_geom, wall);
front_wall.position.set(-45,0,0);
scene.add(front_wall);

//Right Wall 
const wall_geom2 = new THREE.BoxGeometry(50, 40, 1);
const side_wall = new THREE.Mesh(wall_geom2, wall);
side_wall.position.set(-20.3,0,-50);
scene.add(side_wall);


//Flooring
const floor_geom = new THREE.BoxGeometry(50,1, 100);
const floor = new THREE.Mesh( floor_geom, flooring );
floor.position.set(-20,-20,0);
scene.add(floor);

//Bed
//Frame
const frame_geom = new THREE.BoxGeometry(20, 3, 15); 
const frame = new THREE.Mesh(frame_geom, wood);
frame.position.set(-33,-18.5,-42); 
frame.rotation.set(0,0,0);
scene.add(frame);

//Pillow
const pillow_geom = new THREE.BoxGeometry(5, 4, 15);
const pillow = new THREE.Mesh(pillow_geom, pillow_material);
pillow.position.set(-41,-15.5,-42.2);
scene.add(pillow);

//Blanket
const blanket_geom = new THREE.BoxGeometry(15, 4, 15);
const blanket = new THREE.Mesh(blanket_geom, blanket_material);
blanket.position.set(-30.5,-15.5,-41.8);
scene.add(blanket);

//Lamp
//Wall mounted base 
const lamp_base_geo = new THREE.BoxGeometry(4,1,4);
const lamp_base = new THREE.Mesh(lamp_base_geo, wood);
lamp_base.position.set(-39,-12,-29);
scene.add(lamp_base);

//Stem
const lamp_stem_geom = new THREE.BoxGeometry(1,5,1);
const lamp_stem = new THREE.Mesh(lamp_stem_geom, wood);
lamp_stem.position.set(-39,-9.9,-29);
scene.add(lamp_stem);

//Lamp
const lamp_geom = new THREE.CylinderGeometry(2, 3, 5, 32);
const lamp = new THREE.Mesh(lamp_geom, lampshade);
lamp.position.set(-39,-7,-29);
scene.add(lamp);


//Wall mounted desk
const desk_geom = new THREE.BoxGeometry(7, 1.5, 30); 
const desk = new THREE.Mesh(desk_geom, wood);
desk.position.set(-43, -10, -0.2); 
scene.add(desk);


//Chair
//Stand
const chair_stand_geom = new THREE.BoxGeometry(1.5,4,1.5);
const chair_stand = new THREE.Mesh(chair_stand_geom, wood);
chair_stand.position.set(-40,-19, -3);
scene.add(chair_stand);

const chair_stand2_geom = new THREE.BoxGeometry(1.5,4,1.5);
const chair_stand2 = new THREE.Mesh(chair_stand_geom, wood);
chair_stand2.position.set(-40,-19, 1);
scene.add(chair_stand2);

//Stool Chair
const chair_seat_geom = new THREE.BoxGeometry(6,1,6);
const chair_seat = new THREE.Mesh(chair_seat_geom, wood);
chair_seat.position.set(-40,-15, -1);
scene.add(chair_seat);

//Monitor
//Monitor Stand
const monitor_stand_geom = new THREE.BoxGeometry(2,3,5); 
const monitor_stand = new THREE.Mesh(monitor_stand_geom, monitor_stand_material);
monitor_stand.position.set(-44,-8.3,-0.2); 
scene.add(monitor_stand);

//Monitor Frame
const monitor_frame_geom = new THREE.BoxGeometry(2,4,12.); 
const monitor_frame = new THREE.Mesh(monitor_frame_geom, monitor_screen);
monitor_frame.position.set(-41,-2,0);
scene.add(monitor_frame);

//Monitor
const monitor_geom = new THREE.BoxGeometry(2,7,12); 
const monitor = new THREE.Mesh(monitor_geom, monitor_screen);
monitor.position.set(-41.6,-2,0); 
scene.add(monitor); 

//Window
//Window Frame
const window_frame_geom = new THREE.BoxGeometry(2,20,30); 
const window_frame = new THREE.Mesh(window_frame_geom, wood);
window_frame.position.set(-44.5,2,0);
scene.add(window_frame);

//Glass
const glass_geom = new THREE.BoxGeometry(2,17,27); 
const glass_window = new THREE.Mesh(glass_geom, glass);
glass_window.position.set(-44,2,0);
scene.add(glass_window);

//Cabinet
const cabinet_geom = new THREE.BoxGeometry(40, 30 , 8); 
const cabinet = new THREE.Mesh(cabinet_geom, wood);
cabinet.position.set(-35,-12,42);
scene.add(cabinet);

//Handle bar
const handle_geom = new THREE.BoxGeometry(1,6,1);
const handlebar = new THREE.Mesh(handle_geom, silver_handlebar);
handlebar.position.set(-28,-8, 38); 
scene.add(handlebar);

//Camera
camera.position.set(65 , 60); 
camera.lookAt(0,0,0);


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();