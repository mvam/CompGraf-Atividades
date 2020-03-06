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
	
	triangleGeometry.vertices.push(new THREE.Vector3( 0.25,  0.25, 0.0)); 	
	triangleGeometry.vertices.push(new THREE.Vector3( -0.25,  -0.25, 0.0));  
	
	triangleGeometry.faces.push(new THREE.Face3(0, 1, 0)); 
		
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


