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

	var circleGeom = new THREE.Geometry();

	var numVertices = 1000;
	var raio = 0.99;

	// circle.vertices.push(new THREE.Vector3( 0.0, 0.0, 0.0));

	for (i = 0 ; i < 10*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = raio * Math.cos(i);
		var y = raio * Math.sin(i);
		raio -= raio/numVertices;

		circleGeom.vertices.push(new THREE.Vector3( x,  y, 0.0));
		circleGeom.vertices[i].color(new THREE.color(0.0, 0.0, i/numVertices));
		}

	var circleMaterial = new THREE.MeshBasicMaterial({ color:0xffffff });

	var circle = new THREE.Line(circleGeom, circleMaterial);

	scene.add( circle );

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	renderer.clear();
	renderer.render(scene, camera);
};
