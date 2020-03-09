
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
	
	var triangleGeometry = new THREE.Geometry(); 
	
	var numVertices = 250;
	
	var a = 0.5;
	var b = 0.25;

	var constCor = 0.5;
	
	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = a * Math.cos(i);
		var y = b * Math.sin(i);
	
		triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0)); 
		}

	for (i = 0 ; i <= numVertices-2 ; i++) {
		triangleGeometry.faces.push(new THREE.Face3(i, i+1, i)); 
		}
		
	triangleGeometry.faces.push(new THREE.Face3(0, numVertices-1, 1)); 

	var triangleMaterial = new THREE.MeshBasicMaterial({ 
		color:0xffffff, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:true
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};

