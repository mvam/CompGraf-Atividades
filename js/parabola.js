
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
	
	var triangleGeometry = new THREE.Geometry(); 
	
	var resulucao = 100;
	var max = 2.0;
	var numvertices = resulucao*max;

	var periodicidade = max/numvertices;

	var pFoco = 10.0; 
	
	for (i = -max ; i <= max ; i+= periodicidade) {
		var x = 2*pFoco*i;
		var y = pFoco*Math.pow(i,2);
	
		triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0)); 
		}

	for (i = 0 ; i < numvertices*2-1 ; i++) {
		triangleGeometry.faces.push(new THREE.Face3(i, i+1, i)); 
		}
		
	//triangleGeometry.faces.push(new THREE.Face3(0, numVertices-1, 1)); 

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


