var numVertices = 60;
var raio = 0.8;
	
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
	
	triangleGeometry.vertices.push(new THREE.Vector3( 0.0, 0.0, 0.0)); 
	
	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var x = raio * Math.cos(i);
		var y = raio * Math.sin(i);
	
		triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0)); 
		}

	for (i = 0 ; i < triangleGeometry.vertices.length ; i++) {
		triangleGeometry.faces.push(new THREE.Face3(0, i, i+1)); 
		
		triangleGeometry.faces[i].vertexColors[0] = new THREE.Color( 1.0, 1.0, 1.0 ); 
		triangleGeometry.faces[i].vertexColors[1] = new THREE.Color( 0.0, 1.0 - colorDef(i), 1.0 - colorDef(i)); 
		triangleGeometry.faces[i].vertexColors[2] = new THREE.Color( 0.0, colorDef(i+1), 1.0 - colorDef(i+1));
	}

	var triangleMaterial = new THREE.MeshBasicMaterial({ 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};

function colorDef(i) {
	return (i/numVertices);
};
