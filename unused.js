// In this file are stored parts of code that are not used (I wrote new or better version)

// ----------------------------------------------------------------------------------------------------
// Torus

const geometry_torus = new THREE.TorusGeometry(8, 2, 8, 30);
const material_torus = new THREE.MeshBasicMaterial({color: 0xff6347, wireframe: true});
const torus = new THREE.Mesh(geometry_torus, material_torus);

scene.add(torus);

// ----------------------------------------------------------------------------------------------------
// Creating circle and rotating it to the wall position (without moving)

function create_circle(x, y, z, rotation)
{
	// Circle
	const geometry_circle = new THREE.CircleGeometry(0.5, 16);
	const edges_circle = new THREE.EdgesGeometry(geometry_circle);
	const circle = new THREE.LineSegments(edges_circle, new THREE.LineBasicMaterial({color: 0xaaaaff}));
	circle.position.set(x, y, z);
	if (rotation == 1)						    // left right wall
		circle.rotation.y += 1.57079633;		// == 90 degrees
	else if (rotation == 2)					    // top bottom wall
		circle.rotation.x += 1.57079633;
	scene.add(circle);
}

// ----------------------------------------------------------------------------------------------------
// Example of creating a group

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cubeA = new THREE.Mesh(geometry, material);
cubeA.position.set(0, 0, 2);
const cubeB = new THREE.Mesh(geometry, material);
cubeB.position.set(0, 0, -1);
const group = new THREE.Group();
group.add(cubeA, cubeB);
scene.add(group);
group.position.set(0, 0, 0);

// ----------------------------------------------------------------------------------------------------
// Render loop

function animate()
{
	requestAnimationFrame(animate);

	//torus.rotation.x += 0.01;
	//torus.rotation.y += 0.005;
	//torus.rotation.z += 0.01;

	renderer.render(scene, camera);
}
animate();

// ----------------------------------------------------------------------------------------------------
// Arrow Help

// Adding the vector to show the position of point
/*
const vector1 = new THREE.Vector3(point_x, point_y, point_z);
vector1.normalize();
const origin = new THREE.Vector3(0, 0, 0);
const arrowHelper1 = new THREE.ArrowHelper(vector1, origin, 1, 0x00ff00);
scene.add(arrowHelper1);

const vector2 = new THREE.Vector3(point2_x, point2_y, point2_z);
vector2.normalize();

const vector3 = new THREE.Vector3(vector2.getComponent(0), vector2.getComponent(1), vector2.getComponent(2));
// const help = new THREE.ArrowHelper(vector3, origin, 10, 0xff0000);
const arrowHelper2 = new THREE.ArrowHelper(vector2, origin, 1, 0xff00ff);

//const lerp = Vector3.subVectors(vector2, vector1);
// const arrowHelper3 = new THREE.ArrowHelper(vector2, vector1, 5, 0xffffff);
scene.add(arrowHelper2);
*/