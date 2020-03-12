var renderer;
var scene;
var camera;

function init() {

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var triangleGeometry = new THREE.Geometry(); 
	
	var numVertices = 2;
	var dx = 1.6/(numVertices-1);
	
	for (x = -0.8 ; x <= 0.8; x+= dx) 
		for (y = -0.8 ; y <= 0.8 ; y+= dx) 
			triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
	
	triangleGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
	triangleGeometry.faces.push(new THREE.Face3(1, 3, 2)); 

	triangleGeometry.faces[0].vertexColors[0] = new THREE.Color( 1.0, 1.0, 1.0 ); 
	triangleGeometry.faces[0].vertexColors[1] = new THREE.Color( 1.0, 0.0, 0.0 ); 
	triangleGeometry.faces[0].vertexColors[2] = new THREE.Color( 0.0, 1.0, 0.0 );

	triangleGeometry.faces[1].vertexColors[0] = new THREE.Color( 1.0, 0.0, 0.0 ); 
	triangleGeometry.faces[1].vertexColors[1] = new THREE.Color( 0.0, 0.0, 1.0 ); 
	triangleGeometry.faces[1].vertexColors[2] = new THREE.Color( 0.0, 1.0, 0.0 );

	var triangleMaterial = new THREE.MeshBasicMaterial({ 
		vertexColors:THREE.VertexColors,
		wireframe:true
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
	};
