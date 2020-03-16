
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
	cubeGeometry.faces.push(new THREE.Face3(2, 0, 1));
	cubeGeometry.faces.push(new THREE.Face3(3, 1, 0));
	
	cubeGeometry.faces[0].color = new THREE.Color(0xff0000);
	cubeGeometry.faces[1].color = new THREE.Color(0xff0000);
	
	// Back
	cubeGeometry.faces.push(new THREE.Face3(6, 5, 4));
	cubeGeometry.faces.push(new THREE.Face3(7, 4, 5));
	
	cubeGeometry.faces[2].color = new THREE.Color(0x00ff00);
	cubeGeometry.faces[3].color = new THREE.Color(0x00ff00);

	// Top
	cubeGeometry.faces.push(new THREE.Face3(4, 0, 2));
	cubeGeometry.faces.push(new THREE.Face3(6, 4, 2));
	
	cubeGeometry.faces[4].color = new THREE.Color(0x0000ff);
	cubeGeometry.faces[5].color = new THREE.Color(0x0000ff);
	
	// Bottom
	cubeGeometry.faces.push(new THREE.Face3(5, 1, 3));
	cubeGeometry.faces.push(new THREE.Face3(7, 5, 3));
	
	cubeGeometry.faces[6].color = new THREE.Color(0xffff00);
	cubeGeometry.faces[7].color = new THREE.Color(0xffff00);
	
	// Right
	cubeGeometry.faces.push(new THREE.Face3(1, 5, 2));
	cubeGeometry.faces.push(new THREE.Face3(6, 2, 5));
	
	cubeGeometry.faces[8].color = new THREE.Color(0xff00ff);
	cubeGeometry.faces[9].color = new THREE.Color(0xff00ff);
	
	// Left
	cubeGeometry.faces.push(new THREE.Face3(4, 7, 0));
	cubeGeometry.faces.push(new THREE.Face3(3, 0, 7));
	
	cubeGeometry.faces[10].color = new THREE.Color(0x00ffff);
	cubeGeometry.faces[11].color = new THREE.Color(0x00ffff);
	
	
	var faceMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		vertexColors:THREE.VertexColors,
		wireframe:false
	}); 
		
                 
	var cubeMesh = new THREE.Mesh(cubeGeometry, faceMaterial); 

	cubeMesh.rotateX(30 * Math.PI / 180);
	cubeMesh.rotateY(60 * Math.PI / 180);
	cubeMesh.rotateZ(45 * Math.PI / 180);

	scene.add( cubeMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};


