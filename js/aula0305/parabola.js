
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -25.0, 25.0, 25.0, -25.0, -25.0, 25.0 );
	scene.add( camera );

	var axis = new THREE.AxesHelper( 10.0 );
	scene.add(axis);

	var parabolaGeometry = new THREE.Geometry();

	var resulucao = 100;
	var max = 2.0;
	var numvertices = resulucao*max;

	var periodicidade = max/numvertices;

	var pFoco = 5.0;

	for (i = -max ; i <= max ; i+= periodicidade) {
		var x = 2*pFoco*i;
		var y = pFoco*Math.pow(i,2);

		parabolaGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
		}

	var parabolaMaterial = new THREE.MeshBasicMaterial({
		color:0xffffff
		});

	var parabola = new THREE.Line(parabolaGeometry, parabolaMaterial);

	scene.add( parabola );

	renderer.clear();
	renderer.render(scene, camera);
};
