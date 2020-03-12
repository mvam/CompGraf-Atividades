
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	var maxDim = Math.min(window.innerWidth, window.innerHeight)*0.7;

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(maxDim, maxDim);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	var triangleGeometry = new THREE.Geometry(); 
	
	var numVertices = 60;
	var raio = 0.8;
	
	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = raio * Math.cos(i);
		var y = raio * Math.sin(i);
	
		triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0)); 
		}

	triangleGeometry.faces.push(new THREE.Face3(0, 1, 2)); 

	var triangleMaterial = new THREE.MeshBasicMaterial({ 
		color:0xffffff,
		wireframe:true
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};


