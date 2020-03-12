
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var axis = new THREE.AxesHelper( 2.0 );
	scene.add(axis);

	var circuloGeometry = new THREE.Geometry();

	var numVertices = 250;
	var raio = 0.8;
	var constCor = 0.5;

	//triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  0.0, 0.0));

	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = raio * Math.cos(i);
		var y = raio * Math.sin(i);

		circuloGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
		}

	circuloGeometry.vertices.push(circuloGeometry.vertices[0]);

	var circuloMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var circulo = new THREE.Line(circuloGeometry, circuloMaterial);

	scene.add( circulo );

	renderer.clear();
	renderer.render(scene, camera);
};
