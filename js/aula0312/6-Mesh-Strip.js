var renderer;
var scene;
var camera;

var numVerticesX = 5;
var numVerticesY = 5;

function init() {

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(600, 600);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.OrthographicCamera( -2.5, 2.5, 2.5, -2.5, -1.0, 1.0 );
	scene.add( camera );

	var triangleGeometry = new THREE.Geometry(); 
	
	var dx = 4.0/(numVerticesX-1);
	var dy = 4.0/(numVerticesY-1);
	
	for (y = -2.0 ; y < 2.0 ; y+= dy) {
		for (x = -2.0 ; x < 2.0; x+= dx) {
			triangleGeometry.vertices.push(new THREE.Vector3( x,  y, 0.0));
		}
		triangleGeometry.vertices.push(new THREE.Vector3( 2.0,  y, 0.0));
	}
	
	for (x = -2.0 ; x < 2.0; x+= dx) { 
		triangleGeometry.vertices.push(new THREE.Vector3( x,  2.0, 0.0));
	}
	
	triangleGeometry.vertices.push(new THREE.Vector3( 2.0,  2.0, 0.0));

	for (iy = 0 ; iy < numVerticesY -1 ; iy++) {
		for (ix = 0 ; ix < numVerticesX -1; ix++) {
			let i = iy*(numVerticesX) + ix;			
			triangleGeometry.faces.push(new THREE.Face3( i,   i+numVerticesX, i+1+numVerticesX)); 
			triangleGeometry.faces.push(new THREE.Face3( i, i+1+numVerticesX,              i+1)); 
		}
	}	
	
	
	for (iy = 0 ; iy < numVerticesY -1 ; iy++) {
		for (ix = 0 ; ix < numVerticesX -1; ix++) {	
			let i = iy*(numVerticesX-1) + ix;			
			triangleGeometry.faces[i*2].vertexColors[0] = new THREE.Color( colorDefR(ix, iy), colorDefG(ix, iy), colorDefB(ix, iy)); 
			triangleGeometry.faces[i*2].vertexColors[1] = new THREE.Color( colorDefR(ix, iy+1), colorDefG(ix, iy+1), colorDefB(ix, iy+1)); 
			triangleGeometry.faces[i*2].vertexColors[2] = new THREE.Color( colorDefR(ix+1, iy+1), colorDefG(ix+1, iy+1), colorDefB(ix+1, iy+1));

			
			triangleGeometry.faces[i*2+1].vertexColors[0] = new THREE.Color( colorDefR(ix, iy), colorDefG(ix, iy), colorDefB(ix, iy)); 
			triangleGeometry.faces[i*2+1].vertexColors[1] = new THREE.Color( colorDefR(ix+1, iy+1), colorDefG(ix+1, iy+1), colorDefB(ix+1, iy+1)); 
			triangleGeometry.faces[i*2+1].vertexColors[2] = new THREE.Color( colorDefR(ix+1, iy), colorDefG(ix+1, iy), colorDefB(ix+1, iy));
		}
	}
	
	var triangleMaterial = new THREE.MeshBasicMaterial({ 
		color: 0xffffff,
		vertexColors:THREE.VertexColors,
		wireframe:true
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};

function colorDefR(x, y){
	var i = 1.0 - x/numVerticesX;
	return (i < 1.0? i : 1.0);
};

function colorDefG(x, y){
	var i = 1.0 - y/numVerticesY;
	return (i < 1.0? i : 1.0);
};

function colorDefB(x, y){
	var i = 1.0 - Math.abs((x/numVerticesX) - (y/numVerticesY));
	return (i < 1.0? i : 1.0);
};
