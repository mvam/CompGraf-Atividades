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

	var quadradoGeometry = new THREE.Geometry();

	quadradoGeometry.vertices.push(new THREE.Vector3( 0.25,  0.25, 0.0));
	quadradoGeometry.vertices.push(new THREE.Vector3( -0.25,  0.25, 0.0));
	quadradoGeometry.vertices.push(new THREE.Vector3( -0.25,  -0.25, 0.0));
	quadradoGeometry.vertices.push(new THREE.Vector3( 0.25,  -0.25, 0.0));
	quadradoGeometry.vertices.push(quadradoGeometry.vertices[0]);

	var quadradoMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var quadrado = new THREE.Line(quadradoGeometry, quadradoMaterial);

	scene.add( quadrado );

	renderer.clear();
	renderer.render(scene, camera);
};
