
function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -10.0, 10.0, 10.0, -10.0, -10.0, 10.0 );
	scene.add( camera );
	
	var axis = new THREE.AxesHelper( 4.0 );
	scene.add(axis);
	
	var bezierGeometry = new THREE.Geometry();
	var controlGeometry = new THREE.Geometry(); 
	
	var numVertices = 50;
	var periodicidade = 1.0/numVertices;

	//grau de bazier. limitado pelo tamanho do vetos de pontos de controle
	var grau = 7;

	// control points
	var xb = [0.0, 0.3, 2.6, 4.5, 6.0, 7.2, 8.2, 8.5];
	var yb = [0.0, 1.7, 3.8, 4.7, 4.6, 4.1, 3.2, 1.1];

	for(i = 0; i <= grau; i++){
		controlGeometry.vertices.push(new THREE.Vector3( xb[i],  yb[i], 0.0));
	}
	
	for(i = 0; i <= grau-1; i++){
		controlGeometry.faces.push(new THREE.Face3(i, i+1, i)); 
	}	
	
	//bezier
	for (t = 0 ; t < 1.0 ; t+= periodicidade) {
		var bx = 0;
		var by = 0;
		for(i = 0; i <= grau; i++){
			bx += pin(grau, i, t)*xb[i];
			by += pin(grau, i, t)*yb[i];
		}
	
		bezierGeometry.vertices.push(new THREE.Vector3( bx,  by, 0.0)); 
		}

	for (i = 0 ; i < numVertices-1 ; i++) {
		bezierGeometry.faces.push(new THREE.Face3(i, i+1, i)); 
		}
		
	//bezierGeometry.faces.push(new THREE.Face3(0, numVertices-1, 1)); 

	var bezierMaterial = new THREE.MeshBasicMaterial({ 
		color:0xfff000, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:true
		}); 
	
	var controlMaterial = new THREE.MeshBasicMaterial({ 
		color:0x00fff0, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:true
		}); 
	
	var bezierMesh = new THREE.Mesh(bezierGeometry, bezierMaterial); 
	var controlMesh = new THREE.Mesh(controlGeometry, controlMaterial); 


	scene.add( bezierMesh );
	scene.add( controlMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};

function binomial(n, k) {
     if ((typeof n !== 'number') || (typeof k !== 'number')) 
  return false; 
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
};

function pin (n, i, t) {
	return binomial(n, i)*Math.pow((1-t), n-i)*Math.pow(t, i);
};


