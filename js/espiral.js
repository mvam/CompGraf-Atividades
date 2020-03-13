// Desenhando uma Geometria 2D simples com Material em Three.js

function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	var maxDim = Math.min(window.innerWidth, window.innerHeight)*0.7;

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(maxDim, maxDim);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	// Global Axis
	var globalAxis = new THREE.AxesHelper( 1.0 );
	scene.add( globalAxis );

	var espiralGeom = new THREE.Geometry();

	var numVertices = 1000;
	var raio = 0.999;
	var espir = numVertices*3;
	var numvoltas = 15; 

	for (i = 0 ; i < 2*Math.PI*numvoltas ; i+= (2*Math.PI)/numVertices) {
		let x = raio * Math.cos(i);
		let y = raio * Math.sin(i);
		raio -= raio/espir;

		espiralGeom.vertices.push(new THREE.Vector3( x,  y, 0.0));
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

	renderer.clear();
	renderer.render(scene, camera);
};


