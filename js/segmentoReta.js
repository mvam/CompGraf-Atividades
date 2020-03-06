var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();

var camera = new THREE.Camera();

renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);

var axis = new THREE.AxesHelper( 0.5 );
scene.add(axis);

document.body.appendChild( renderer.domElement );

renderer.render(scene, camera);
