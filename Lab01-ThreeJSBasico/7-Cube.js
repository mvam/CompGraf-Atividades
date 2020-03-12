
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var cubeGeometry = new THREE.Geometry(); 
	
	cubeGeometry.vertices.push(new THREE.Vector3( 0.5,  0.5,  0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5,  0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3( 0.5, -0.5,  0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3(-0.5,  0.5,  0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3( 0.5,  0.5, -0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, -0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3( 0.5, -0.5, -0.5)); 
	cubeGeometry.vertices.push(new THREE.Vector3(-0.5,  0.5, -0.5)); 

	// Front

	// Back

	// Top

	// Bottom

	// Right

	// Left
	
	var faceMaterials = [ 	new THREE.MeshBasicMaterial({color:0xFF0000}), 
							new THREE.MeshBasicMaterial({color:0x00FF00}), 
							new THREE.MeshBasicMaterial({color:0x0000FF}), 
							new THREE.MeshBasicMaterial({color:0xFFFF00}), 
							new THREE.MeshBasicMaterial({color:0x00FFFF}), 
							new THREE.MeshBasicMaterial({color:0xFFFFFF}) 
						]; 
                 
	var cubeMesh = new THREE.Mesh(cubeGeometry, faceMaterials); 

	cubeMesh.rotateX(30 * Math.PI / 180);
	cubeMesh.rotateY(60 * Math.PI / 180);
	cubeMesh.rotateZ(45 * Math.PI / 180);

	scene.add( cubeMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};


