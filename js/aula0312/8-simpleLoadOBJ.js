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

	camera = new THREE.OrthographicCamera( -3.0, 3.0, 3.0, -1.5, -1.5, 1.5);
	
	scene.add( camera );
	
	// Load Mesh
	var loader = new THREE.OBJLoader();
	loader.load('../../Models/bunny.obj', loadMesh);

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
	//loadedMesh.geometry.normalizeNormals();

	//for (i = 0; i < loadedMesh.index.length; i++)
		//loadedMesh.children.index[i].color = new THREE.Color(1.0, 1.0, i/loadedMesh.geometry.index.length)

	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		vertexColors:THREE.VertexColors, 
		wireframe: true
	});
	
	loadedMesh.children.forEach(function (child) {
		for (i = 0; i < child.geometry.faces.length; i++){
		}
	});


	loadedMesh.children.forEach(function (child) {
		child.material = material;
		});

	mesh = loadedMesh;
	
	// loadedMesh.rotateX(60 * Math.PI / 180);
	// loadedMesh.rotateY(90 * Math.PI / 180);
	// loadedMesh.rotateZ(30 * Math.PI / 180);
	
	scene.add(loadedMesh);	
	};

