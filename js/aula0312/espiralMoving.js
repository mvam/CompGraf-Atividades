// Desenhando uma Geometria 2D simples com Material em Three.js

function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	var maxDim = Math.min(window.innerWidth, window.innerHeight)*0.7;

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(700, 500);

	var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	scene.add( camera );

	// Global Axis
	//var globalAxis = new THREE.AxesHelper( 1.0 );
	//scene.add( globalAxis );

	var espiralGeom = new THREE.Geometry();

	var numVertices = 1000;
	var raio = 0.999;
	var espir = numVertices*3;
	var numvoltas = 15; 
	var z = 0.0;

	for (i = 0 ; i < 2*Math.PI*numvoltas ; i+= (2*Math.PI)/numVertices) {
		let x = raio * Math.cos(i);
		let y = raio * Math.sin(i);
		//raio -= raio/espir;
		z += 0.001;

		espiralGeom.vertices.push(new THREE.Vector3( x, y, z));
	}

	for (i = 0 ; i < espiralGeom.vertices.length ; i++) {
		let colorR = 1.0 - i/espiralGeom.vertices.length;
		let colorG = 0.5 + (i/espiralGeom.vertices.length)*2;
		let colorB = i/espiralGeom.vertices.length;

		espiralGeom.colors[i] = new THREE.Color(colorR, colorG, colorB);
	}

	var espiralMaterial = new THREE.MeshBasicMaterial({ 
		vertexColors:THREE.VertexColors,
		wireframe:true
		}); 

	var espiral = new THREE.Line(espiralGeom, espiralMaterial);

	scene.add( espiral );

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	//renderer.clear();
	//renderer.render(scene, camera);
 	function animate() { 
	requestAnimationFrame( animate ); 
	
	if(camera.position.z < 20.0){
		camera.position.z += 0.01; 
	} else {
		camera.position.z = 0.5;	
	}

	renderer.render( scene, camera ); 
	}; animate();
};

