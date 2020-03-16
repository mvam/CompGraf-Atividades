
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

	var cardioideGeometry = new THREE.Geometry();

	var numVertices = 250;
	var size = 0.3;

	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = size*(Math.cos(i) + 0.5 + 0.5*Math.cos(2*i));
		var y = size*(Math.sin(i) + 0.5*Math.sin(2*i));

		cardioideGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
		}


	var cardioideMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var cardioideMesh = new THREE.Line(cardioideGeometry, cardioideMaterial);

	scene.add( cardioideMesh );

	renderer.clear();
	renderer.render(scene, camera);
};
