function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var axis = new THREE.AxesHelper( 0.5 );
	scene.add(axis);

	var lineGeometry = new THREE.Geometry();

	lineGeometry.vertices.push(new THREE.Vector3( 0.25,  0.25, 0.0));
	lineGeometry.vertices.push(new THREE.Vector3( -0.25,  -0.25, 0.0));

	var lineMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		}); 

	var line = new THREE.Line(lineGeometry, lineMaterial);

	scene.add( line );

	renderer.clear();
	renderer.render(scene, camera);
};
