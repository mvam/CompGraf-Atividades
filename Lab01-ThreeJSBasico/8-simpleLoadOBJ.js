var mesh;
var renderer;
var scene;
var camera;
var BBox;
var maxDim;

function init() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(750, 750);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.OrthographicCamera( -1.5, 1.5, 1.5, -1.5, -1.5, 1.5);
	
	scene.add( camera );
	
	// Load Mesh
	var loader = new THREE.OBJLoader();
	loader.load('../../../Assets/Models/bunny.obj', loadMesh);

	renderer.clear();
	// Global Axis
	var globalAxis = new THREE.AxesHelper( 5.0 );
	scene.add( globalAxis );
	render();
	}

function render() {

	if (mesh) 
		renderer.render(scene, camera);
	else {
		console.log("x");
		requestAnimationFrame(render);	
		}
	}

function loadMesh(loadedMesh) {
	var material = new THREE.MeshBasicMaterial({color: 0x2194ce, wireframe: true});

	loadedMesh.children.forEach(function (child) {
		child.material = material;
		});

	mesh = loadedMesh;
	
	// loadedMesh.rotateX(60 * Math.PI / 180);
	// loadedMesh.rotateY(90 * Math.PI / 180);
	// loadedMesh.rotateZ(30 * Math.PI / 180);
	
	scene.add(loadedMesh);	
	};

