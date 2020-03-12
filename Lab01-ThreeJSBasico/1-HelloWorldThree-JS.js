// Hello World em Three.js

function init() {

	var scene 		= new THREE.Scene();

	var renderer 	= new THREE.WebGLRenderer();
	
	var camera 		= new THREE.Camera();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerWidth*0.5, window.innerHeight*0.5);

    var axis = new THREE.AxesHelper( 0.5 );
    scene.add(axis);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	renderer.render(scene, camera);
};


