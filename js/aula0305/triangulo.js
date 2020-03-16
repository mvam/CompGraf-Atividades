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

	var triangleGeometry = new THREE.Geometry();

	triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  0.25, 0.0));
	triangleGeometry.vertices.push(new THREE.Vector3( 0.2165,  -0.125, 0.0));
	triangleGeometry.vertices.push(new THREE.Vector3( -0.2165,  -0.125, 0.0));
	triangleGeometry.vertices.push(triangleGeometry.vertices[0]);

	var triangleMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var triangle = new THREE.Line(triangleGeometry, triangleMaterial);

	scene.add( triangle );	

	renderer.clear();
	renderer.render(scene, camera);
};
