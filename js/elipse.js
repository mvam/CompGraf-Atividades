
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var axis = new THREE.AxesHelper( 4.0 );
	scene.add(axis);

	var elipseGeometry = new THREE.Geometry();

	var numVertices = 200;

	var a = 0.5;
	var b = 0.25;

	var constCor = 0.5;

	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = a * Math.cos(i);
		var y = b * Math.sin(i);

		elipseGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
		}

	elipseGeometry.vertices.push(elipseGeometry.vertices[0]);

	var elipseMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var elipse = new THREE.Line(elipseGeometry, elipseMaterial);

	scene.add( elipse );

	renderer.clear();
	renderer.render(scene, camera);
};
