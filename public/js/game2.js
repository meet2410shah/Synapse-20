
if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
    document.getElementById( 'container' ).innerHTML = "";
}



// Graphics variables
var container, stats;
var camera, controls, scene, renderer, labelRenderer;
var textureLoader;
var clock = new THREE.Clock();
var clickRequest = true;
var mouseCoords = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var ballMaterial = new THREE.MeshPhongMaterial( { color: 0x202020 } );
var pos = new THREE.Vector3();
var quat = new THREE.Quaternion();
var ground;
// Physics variables
var gravityConstant = - 9.8;
var physicsWorld;
var rigidBodies = [];
var softBodies = [];
var margin = 0.05;
var transformAux1 = new Ammo.btTransform();
var softBodyHelpers = new Ammo.btSoftBodyHelpers();
var box;
var coll;
var liftAudio, music, ropeAudio, starmusic, sndliftDown;
var _boxwidth;
var _boxlast;
var edges;
var mesh;
var k=0;
var flag=false;
var _readycount=0;
var group = new THREE.Group();
var anckerMaterial;
var anckerMap1, anckerMap2;
var ancker;
var pat_array=[];
var pat_num=0;
var imgPath;
var imgNum;

var listener;
var buffer0, buffer1, buffer2, buffer3, buffer4;
var fb1, vk1;
var muter=false;
var sounds_arr=[];
var gmtl=new TimelineMax();
var xsum=0;
var endTexture;
 var preload;
 var k=0;
 var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume:0.5})

 function ready(){
    
        if(_readycount==37){
            
            tlloader.restart();
            setTimeout(function(){
                
                    init();
                animate();
                

            },800)

            /*m=createjs.Sound;
            m.play(1);
            m.volume=0.*/
            createjs.Sound.play(1, props);
        }

}



function volumeMuter(){
if(muter){

createjs.Sound.volume=0;
TweenMax.set(".wave",{alpha:0})

}else{
createjs.Sound.volume=1;
TweenMax.set(".wave",{alpha:1})

}
}



function initmusic() {
if (!createjs.Sound.initializeDefaultPlugins()) {

return;
}
var assetsPath = "sounds/";
var sounds = [
{src: "music.mp3", id: 1},
{src: "liftdowncut.mp3", id: 2},
{src: "liftupcut.mp3", id: 3},

{src: "rope.mp3", id: 4},
{src: "stars.mp3", id: 5},
{src: "collision.mp3", id: 6},
{src: "bell1.mp3", id: 7},
{src: "bell2.mp3", id: 8},
{src: "bell3.mp3", id: 9},
{src: "bell4.mp3", id: 10},
{src: "bell5.mp3", id: 11},
    {src: "bell6.mp3", id: 12},
        {src: "bell7.mp3", id: 13},
        {src: "bell8.mp3", id: 14},
        {src: "bell9.mp3", id: 15},
        {src: "bell10.mp3", id: 16},
        {src: "bell11.mp3", id: 17},
        {src: "bell12.mp3", id: 18}
];

//createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
createjs.Sound.registerSounds(sounds, assetsPath);
}

function soundLoaded(event) {

_readycount++;
ready();

}

document.querySelector('#volumebtn').addEventListener('click', function() {
muter=!muter;
volumeMuter();
});

document.querySelector('#volumebtn2').addEventListener('click', function() {
muter=!muter;
volumeMuter();
});

document.querySelector('#btn').addEventListener('click', function() {

imgNum=Math.round(Math.random()*100000)+1;

tlloader.reverse();

initmusic();







var tl3=new TimelineMax();
tl3.to("#wrapper", 0.5, {alpha:0, onComplete:function(){
    document.getElementById('wrapper').style.display="none";

    document.getElementById('gamecontainer').style.display="block";

    TweenMax.from(gamecontainer,1,{scale:1.2})
    
    gmtl.from(".ram", 1, {scaleX:0, ease:Power1.easeInOut,transformOrigin:"right"})
        .from(".aLine", 1, {drawSVG:0, ease:Power1.easeInOut})
        .from(".ram0", 1, {alpha:0, ease:Power1.easeInOut,transformOrigin:"center", onComplete:function(){
            
            _readycount++;
             ready();
        }})
        


tlballs.reverse();
tltree.reverse();
tlflake.reverse();

treevers.textContent = imgNum;





        

    ////FBTEMPLET/////

if(_lang!="en"){

fb1 = new Image();
fb1.onload = function () {
_readycount++;
ready();
}
fb1.src = "img/fbtemplate1.jpg";

fb2 = new Image();
fb2.onload = function () {
_readycount++;
ready();
}
fb2.src = "img/fbtemplate2.jpg";

fb3 = new Image();
fb3.onload = function () {
_readycount++;
ready();
}
fb3.src = "img/fbtemplate3.jpg";

fb4 = new Image();
fb4.onload = function () {
_readycount++;
ready();
}
fb4.src = "img/fbtemplate4.jpg";

fb5 = new Image();
fb5.onload = function () {
_readycount++;
ready();
}
fb5.src = "img/fbtemplate5.jpg";

} else{

fb1 = new Image();
fb1.onload = function () {
_readycount++;
ready();
}
fb1.src = "img/fbtemplate1en.jpg";

fb2 = new Image();
fb2.onload = function () {
_readycount++;
ready();
}
fb2.src = "img/fbtemplate2en.jpg";

fb3 = new Image();
fb3.onload = function () {
_readycount++;
ready();
}
fb3.src = "img/fbtemplate3en.jpg";

fb4 = new Image();
fb4.onload = function () {
_readycount++;
ready();
}
fb4.src = "img/fbtemplate4en.jpg";

fb5 = new Image();
fb5.onload = function () {
_readycount++;
ready();
}
fb5.src = "img/fbtemplate5en.jpg";

}


if(_lang!="en"){

vk1 = new Image();
vk1.onload = function () {
_readycount++;
ready();
}
vk1.src = "img/vktemplate1.jpg";

vk2 = new Image();
vk2.onload = function () {
_readycount++;
ready();
}
vk2.src = "img/vktemplate2.jpg";

vk3 = new Image();
vk3.onload = function () {
_readycount++;
ready();
}
vk3.src = "img/vktemplate3.jpg";

vk4 = new Image();
vk4.onload = function () {
_readycount++;
ready();
}
vk4.src = "img/vktemplate4.jpg";

vk5 = new Image();
vk5.onload = function () {
_readycount++;
ready();
}
vk5.src = "img/vktemplate5.jpg";

}else{

    vk1 = new Image();
vk1.onload = function () {
_readycount++;
ready();
}
vk1.src = "img/vktemplate1en.jpg";

vk2 = new Image();
vk2.onload = function () {
_readycount++;
ready();
}
vk2.src = "img/vktemplate2en.jpg";

vk3 = new Image();
vk3.onload = function () {
_readycount++;
ready();
}
vk3.src = "img/vktemplate3en.jpg";

vk4 = new Image();
vk4.onload = function () {
_readycount++;
ready();
}
vk4.src = "img/vktemplate4en.jpg";

vk5 = new Image();
vk5.onload = function () {
_readycount++;
ready();
}
vk5.src = "img/vktemplate5en.jpg";

}


////AUDIO//////









/////////PATTERN



var pat1 = new THREE.TextureLoader().load( 'textures/pat1.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });
var pat2 = new THREE.TextureLoader().load( 'textures/pat2.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });
var pat3 = new THREE.TextureLoader().load( 'textures/pat3.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });
var pat4 = new THREE.TextureLoader().load( 'textures/pat4.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });

var pat5 = new THREE.TextureLoader().load( 'textures/pat5.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });
var pat6 = new THREE.TextureLoader().load( 'textures/pat6.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });


var pat7 = new THREE.TextureLoader().load( 'textures/pat7.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            pat_array.push(texture);
            _readycount++;
            ready();
        });

endTexture = new THREE.TextureLoader().load( 'textures/pat8.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(3,0.7);
            //texture1.needsUpdate = true;
            texture.needsUpdate = true;
            //pat_array.push(texture);
            _readycount++;
            ready();
        });


}});


            


});

















function init() {
    initGraphics();

                        anckerMap1 = new THREE.TextureLoader().load( "img/anckerholdon.png" );
        anckerMap2 = new THREE.TextureLoader().load( "img/anckerholdoff.png" );
        var geometry = new THREE.PlaneGeometry( 3, 3, 3);
        anckerMaterial = new THREE.MeshLambertMaterial({
                map: anckerMap1,
               
                transparent: true
            });

        
        ancker = new THREE.Mesh(geometry, anckerMaterial);
        //sprite.position.set(0, -2.9, 3);
        ancker.position.set(0, 10, 0);
        //sprite.scale.set(3, 3, 3);

        scene.add(ancker);
    _boxwidth = 6.8;
    _boxlast = 1;


    var shape = new THREE.Shape();
    shape.moveTo( -0.5, 0);
    shape.lineTo( -0.5, 1);
    shape.lineTo( 0.5, 1);
    shape.lineTo( 0.5, 0 );
    shape.lineTo( -0.5, 0 );

    var extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: false,
        bevelThickness: 0,
        bevelSize: 0,
        bevelSegments: 0
    };

    var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );

    //var geometry = new THREE.CylinderGeometry( 0, 1, 1,4);

    var texture1 = new THREE.TextureLoader().load( 'textures/pat2.png', function(texture){
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            //texture1.repeat.set( 4, 4 );
            //texture.repeat.set(3,1);
            texture.needsUpdate = true;
        });
    pat_num = Math.floor(Math.random()*(pat_array.length))
    var material = new THREE.MeshPhongMaterial({map: pat_array[pat_num], color: 0xCCCCCC, transparent: true });
    
    mesh = new THREE.Mesh( geometry, material ) ;

    mesh.position.y=-2.45;
    mesh.position.z=-0.4;
    ancker.add( mesh );

     //mesh.position.y=-2;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        var edgesGeom = new THREE.EdgesGeometry(mesh.geometry);
        
        var edges = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({color: "red"}));
        //box.add(edges);

        mesh.add(edges);

        var thickness =0.015;

        for (var i = 0; i < edgesGeom.attributes.position.count - 1; i+=2){

          var startPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 0],
            edgesGeom.attributes.position.array[i * 3 + 1],
            edgesGeom.attributes.position.array[i * 3 + 2]
          );
            var endPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 3],
            edgesGeom.attributes.position.array[i * 3 + 4],
            edgesGeom.attributes.position.array[i * 3 + 5]
          );
          
          var cylLength = new THREE.Vector3().subVectors(endPoint, startPoint).length();
          var cylGeom = new THREE.CylinderBufferGeometry(thickness, thickness, cylLength, 16);
          cylGeom.translate(0, cylLength / 2, 0);
          cylGeom.rotateX(Math.PI / 2);
          var cyl = new THREE.Mesh(cylGeom, new THREE.MeshLambertMaterial({color: 0xffffff}));
          cyl.position.copy(startPoint);
          cyl.lookAt(endPoint);
          //box.add(cyl);

          mesh.add(cyl);
        }



    initPhysics();
    createObjects();
    initInput();

    anckerDown();
    TweenMax.to(tizer,1,{alpha:1, delay:1})
    
}
function initGraphics() {

    

    
              //.to(container,1,{marginLeft:"-73%"});

    container = document.getElementById( 'container' );
    camera = new THREE.PerspectiveCamera( 18, window.innerWidth / window.innerHeight, 1, 1000 );
    //camera.position.set( 0, -6, 5 );
    //
    if(md.phone()){
        
        camera.position.set( 0, -2, 40 );

    }else if(md.tablet()){
            camera.position.set( 0, -2.8, 35 );
    }else{
        camera.position.set( 0, -5, 20 );
    }
    
    
    
    

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    

    //renderer = new THREE.SVGRenderer();


    textureLoader = new THREE.TextureLoader();
    directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    //directionalLight.position.set(-40, 150, -10);
    directionalLight.castShadow = true;
    //scene.add(directionalLight);
    var ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );
    var light = new THREE.DirectionalLight( 0xffffff, 0.8 );
    //light.position.set( - 10, 10, 5 );
    light.position.set( 0, 5, 5 );
    //light.castShadow = true;
    var d = 10;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;
    light.shadow.camera.near = 2;
    light.shadow.camera.far = 50;
    light.shadow.mapSize.x = 3024;
    light.shadow.mapSize.y = 3024;
    scene.add( light );

    scene.add( group);

    group.updateMatrixWorld( true );


    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
    

    
}
function initPhysics() {
    // Physics configuration
    var collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
    var broadphase = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();
    var softBodySolver = new Ammo.btDefaultSoftBodySolver();
    physicsWorld = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver );
    physicsWorld.setGravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
    physicsWorld.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
}
function createObjects() {
    // Ground
    pos.set( 0, -9, 0 );
    quat.set( 0, 0, 0, 1 );
    ground = createParalellepiped( 40, 1, 40, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
    ground.castShadow = true;
    ground.receiveShadow = true;
    textureLoader.load( "textures/grid.png", function ( texture ) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 40, 40 );
        ground.material.map = texture;
        ground.material.needsUpdate = true;
    } );

    coll=ground.position.y;

}
function createParalellepiped( sx, sy, sz, mass, pos, quat, material ) {
    var threeObject = new THREE.Mesh( new THREE.BoxBufferGeometry( sx, sy, sz, 1, 1, 1 ), material );
    var shape = new Ammo.btBoxShape( new Ammo.btVector3( sx * 0.5, sy * 0.5, sz * 0.5 ) );
    shape.setMargin( margin );
    createRigidBody( threeObject, shape, mass, pos, quat );
    return threeObject;
}
function createRigidBody( threeObject, physicsShape, mass, pos, quat ) {
    threeObject.position.copy( pos );
    threeObject.quaternion.copy( quat );
    var transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
    transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
    var motionState = new Ammo.btDefaultMotionState( transform );
    var localInertia = new Ammo.btVector3( 0, 0, 0 );
    physicsShape.calculateLocalInertia( mass, localInertia );
    var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
    var body = new Ammo.btRigidBody( rbInfo );
    threeObject.userData.physicsBody = body;
    //scene.add( threeObject );
    if ( mass > 0 ) {
        rigidBodies.push( threeObject );
        // Disable deactivation
        body.setActivationState( 4 );
    }
    physicsWorld.addRigidBody( body );
    return body;
}

function createRigidBody2( threeObject, physicsShape, mass, pos, quat ) {
    threeObject.position.copy( pos );
    threeObject.quaternion.copy( quat );
    //threeObject.position.y=0;
    var transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
    transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
    var motionState = new Ammo.btDefaultMotionState( transform );
    var localInertia = new Ammo.btVector3( 0, 0, 0 );
    physicsShape.calculateLocalInertia( mass, localInertia );
    var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
    var body = new Ammo.btRigidBody( rbInfo );
    threeObject.userData.physicsBody = body;



    
    group.add( threeObject );


    if ( mass > 0 ) {
        rigidBodies.push( threeObject );
        // Disable deactivation
        body.setActivationState( 4 );
    }
    physicsWorld.addRigidBody( body );

    return body;
}

function initInput() {
    click_area.addEventListener( 'mousedown', function ( event ) {
        TweenMax.to(tizer,0.5,{alpha:0, onComplete:function(){
            tizer.style.display="none";
        }})

            if ( ! clickRequest ) {
            clickRequest = true;
            processClick();
        }
    }, false );
}
       



function processClick() {
    if ( clickRequest ) {



        ancker.material.map=anckerMap2;

        
        
        var material = new THREE.MeshPhongMaterial({color: 0xffffff});
    
        newbox = new THREE.Mesh( mesh.geometry, mesh.material ) ;
        newbox.castShadow = true;
        newbox.receiveShadow = true;

         if(rigidBodies.length==11){
    
        var spritestar = new THREE.TextureLoader().load( "img/star4.png" );
        starMaterial = new THREE.SpriteMaterial({
                map: spritestar,
            });
        var sprite = new THREE.Sprite(starMaterial);
        sprite.scale.set(0.4,0.4,0.4);
        sprite.position.set(0, 1.13, 0.5);
        //sprite.scale.set(1.5, 1.5, 0);

        newbox.add(sprite);
        }
    //scene.add( mesh );

        var edgesGeom = new THREE.EdgesGeometry(mesh.geometry);
        
        var edges = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({color: "white"}));
        newbox.add(edges);

        var thickness =0.015;

        for (var i = 0; i < edgesGeom.attributes.position.count - 1; i+=2){

          var startPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 0],
            edgesGeom.attributes.position.array[i * 3 + 1],
            edgesGeom.attributes.position.array[i * 3 + 2]
          );
            var endPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 3],
            edgesGeom.attributes.position.array[i * 3 + 4],
            edgesGeom.attributes.position.array[i * 3 + 5]
          );
          
          var cylLength = new THREE.Vector3().subVectors(endPoint, startPoint).length();
          var cylGeom = new THREE.CylinderBufferGeometry(thickness, thickness, cylLength, 16);
          cylGeom.translate(0, cylLength / 2, 0);
          cylGeom.rotateX(Math.PI / 2);
          var cyl = new THREE.Mesh(cylGeom, new THREE.MeshLambertMaterial({color: 0xffffff}));
          cyl.position.copy(startPoint);
          cyl.lookAt(endPoint);
          newbox.add(cyl);
        }


      
        var boxMass = 300;

        var boxShape = new Ammo.btBoxShape( new Ammo.btVector3( _boxwidth*3 * 0.5, 1* 0.5, _boxwidth*3 * 0.5 ) );
        
        boxShape.setMargin( margin );

        pos.set( ancker.position.x-ancker.rotation.y/3, ancker.position.y-2.45, ancker.position.z-0.4);	
        quat.set( 0, ancker.rotation.y/1.85, ancker.rotation.z, 1 );
        var boxBody = createRigidBody2( newbox, boxShape, boxMass, pos, quat );
        boxBody.setFriction( 0.5 );
    
        pos.multiplyScalar( 14 );

        mesh.visible = false;
        mesh.children = [];
        _boxwidth-=0.5;



        var shape = new THREE.Shape();
        shape.moveTo( -_boxwidth/2, 0 );
        shape.lineTo( -(_boxwidth/2-_boxlast), 1 );
        shape.lineTo( (_boxwidth/2-_boxlast), 1 );
        shape.lineTo( _boxwidth/2, 0 );
        shape.lineTo( -_boxwidth/2, 0  );

    var extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: false,
        bevelThickness: 0,
        bevelSize: 0,
        bevelSegments: 0
    };
    _boxlast-=0.07;

    
    if(rigidBodies.length==11){


        geometry = new THREE.CylinderGeometry(0, 1, 1, 4, false); 




        geometry.vertices[0].y=1;
        geometry.vertices[1].y=0;
        geometry.vertices[2].y=0;
        geometry.vertices[3].y=0;
        geometry.vertices[4].y=0;
        geometry.vertices[5].y=0;


        geometry.vertices[1].z-=0.5;
        geometry.vertices[3].z+=0.5;
        geometry.vertices[2].x-=0.5;
        geometry.vertices[4].x+=0.5;




        
        geometry.vertices[0].z+=0.5;
        geometry.vertices[1].z+=0.5;
        geometry.vertices[2].z+=0.5;
        geometry.vertices[3].z+=0.5;
        geometry.vertices[4].z+=0.5;
        geometry.vertices[5].z+=0.5;



        var spritestar = new THREE.TextureLoader().load( "img/star4.png" );
        starMaterial = new THREE.SpriteMaterial({
                map: spritestar,
            });
        var sprite = new THREE.Sprite(starMaterial);
        sprite.scale.set(0.4,0.4,0.4);
        sprite.position.set(0, 1.13, 0.5);
        

        mesh.add(sprite);

        
        var material = new THREE.MeshLambertMaterial({map: endTexture, color: 0xCCCCCC, transparent: true });

       

    }else{
        var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );

        pat_num=pat_num+1>pat_array.length-1?pat_num=0:pat_num=pat_num+1;
        var texture1 = pat_array[pat_num];

        var material = new THREE.MeshLambertMaterial({map: texture1, color: 0xCCCCCC, transparent: true });

    }


    
    mesh.geometry = geometry;
    mesh.material = material;

     //console.log(mesh);

    var edgesGeom = new THREE.EdgesGeometry(mesh.geometry);
        //console.log(edgesGeom);
        var edges = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({color: "white"}));
        mesh.add(edges);

        var thickness =0.015;

        for (var i = 0; i < edgesGeom.attributes.position.count - 1; i+=2){

          var startPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 0],
            edgesGeom.attributes.position.array[i * 3 + 1],
            edgesGeom.attributes.position.array[i * 3 + 2]
          );
            var endPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 3],
            edgesGeom.attributes.position.array[i * 3 + 4],
            edgesGeom.attributes.position.array[i * 3 + 5]
          );
          
          var cylLength = new THREE.Vector3().subVectors(endPoint, startPoint).length();
          var cylGeom = new THREE.CylinderBufferGeometry(thickness, thickness, cylLength, 16);
          cylGeom.translate(0, cylLength / 2, 0);
          cylGeom.rotateX(Math.PI / 2);
          var cyl = new THREE.Mesh(cylGeom, new THREE.MeshLambertMaterial({color: 0xffffff}));
          cyl.position.copy(startPoint);
          cyl.lookAt(endPoint);
          mesh.add(cyl);
        }


    }
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

var radius = 60, theta = 0;

function animate() {
    requestAnimationFrame( animate );

    k++;


    
    if(rigidBodies.length<1){
    ancker.position.x = Math.sin(k/20)*1/5;
    
    
    }else{
    ancker.position.x = Math.sin(k/20)*_boxwidth/6;
    
    }

  
    

    ancker.rotation.y =Math.sin(k/20)/(1);

    if(rigidBodies.length==11){
    mesh.rotation.x =0;
    }else{
    mesh.rotation.x =0;//.25;
    }



    if(flag){
    
    }

    render();
}
function render() {
    var deltaTime = clock.getDelta();
    if(!flag){
    updatePhysics( deltaTime );
    }

    renderer.render( scene, camera );
}


function anckerDown(){
ancker.material.map=anckerMap1;
clickRequest =false;
createjs.Sound.play(2).volume=0.5;

if(md.phone()){
        TweenMax.to(ancker.position,1,{y:camera.position.y+6, onComplete:function(){
        
        }})
}else if(md.tablet()){
    TweenMax.to(ancker.position,1,{y:camera.position.y+5, onComplete:function(){
        
        }})
}
else{
    TweenMax.to(ancker.position,1,{y:camera.position.y+3.2, onComplete:function(){
    
    }})
}

}

function anckerUp(){

createjs.Sound.play(3).volume=0.5;

volumeMuter();

if(md.phone() || md.tablet()){
TweenMax.to(ancker.position,1,{y:30, ease:Quad.easeIn, onComplete:function(){
    
    mesh.visible=true;
    if(rigidBodies.length % 12!=0){
        
    anckerDown();
    }else{
    
    }
}})
}else{
    TweenMax.to(ancker.position,1,{y:10, ease:Quad.easeIn, onComplete:function(){
    
    mesh.visible=true;
    if(rigidBodies.length % 12!=0){
        
    anckerDown();
    }else{
        
    }
}})
}


}

var arr=[];
   
   function CreateExplosion(x,y,z){

          

          

           

              createjs.Sound.play(5).volume=0.5;
              createjs.Sound.play(6+rigidBodies.length).volume=0.3;
        var spriteMap = new THREE.TextureLoader().load( "img/star.png" );
        var spriteMap2 = new THREE.TextureLoader().load( "img/star3.png" );
        
        

        

        
        for( var i=0; i<50; i++){

        
        var material = new THREE.MeshBasicMaterial({map:spriteMap2, transparent: true});	
        
        
        var s=Math.random()*0.3+0.01;
        var geometry = new THREE.PlaneGeometry( s, s, 1 );
        
        var plane = new THREE.Mesh( geometry, material );
        plane.name="star"

        arr.push(plane);
    

        plane.position.set((x+1-Math.random()*2), y,3-Math.random()*6);

        _s=Math.random()*0.5;
    
        var tlp=new TimelineMax()
            
            tlp.to(plane.position,1-s,{y:y+s*2-Math.random(), ease:Sine.easeOut})
               .to(plane.material,1-s,{opacity:0});

       
        if(plane.position.x>0){
        TweenMax.to(plane.position,5,{x:plane.position.x+s*3});
        TweenMax.to(plane.rotation,5,{x:Math.random()*20,y:Math.random()*20,z:Math.random()*20});
        }else{
        TweenMax.to(plane.position,5,{x:plane.position.x-s*3});	
        TweenMax.to(plane.rotation,5,{x:-Math.random()*20,y:-Math.random()*20,z:-Math.random()*20});
        }
      

        group.add(plane);
    }
    
   }


function showEpic(num){
    TweenMax.set("#res1",{display:"none"});
    TweenMax.set("#res2",{display:"none"});
    TweenMax.set("#res3",{display:"none"});
    TweenMax.set("#res4",{display:"none"});
    TweenMax.set("#res5",{display:"none"});

    switch (num) {
        case 1:
            TweenMax.set("#res1",{display:"block"});
            break;
        case 2:
            TweenMax.set("#res2",{display:"block"});
            break;
        case 3: 
            TweenMax.set("#res3",{display:"block"});
            break; 
        case 4:
            TweenMax.set("#res4",{display:"block"});
            break;
        case 5:
            TweenMax.set("#res5",{display:"block"});
            break;

        default:
            TweenMax.set("#res5",{display:"block"});
    }

}


function updatePhysics( deltaTime ) {
    // Step world
    physicsWorld.stepSimulation( deltaTime, 10 );
    // Update rigid bodies
    for ( var i = 0, il = rigidBodies.length; i < il; i ++ ) {

        
        var objThree = rigidBodies[ i ];
        var objPhys = objThree.userData.physicsBody;
        var ms = objPhys.getMotionState();

            if(i==rigidBodies.length-1 && Math.round(objThree.position.y)-1==coll){

            
            createjs.Sound.play(6).volume=0.5;

            anckerUp();
           // drawVKImage();
            xsum+=Math.abs(objThree.position.x);
            
           

            

            
            coll++;


            if(md.phone()){
                if(rigidBodies.length % 6==0 && rigidBodies.length % 12!=0){
                TweenMax.to(camera.position,1,{y:camera.position.y+3.8})
                }
            }else{
                if(rigidBodies.length % 3==0 && rigidBodies.length % 12!=0){
                TweenMax.to(camera.position,1,{y:camera.position.y+2.8})
                }
            }

            if(rigidBodies.length % 12==0){


            TweenMax.to(camera.position,1,{y:-2, z:45, ease:Cubic.easeInOut, onComplete:function(){
                flag=true;
                        for(m=0; m<arr.length; m++){
                              var selectedObject = scene.getObjectByName("star");
                        group.remove( selectedObject );
                          }
            }, delay:1})
            TweenMax.to(group.rotation,2,{y:Math.PI*2, delay:1, ease:Cubic.easeInOut, onComplete:function(){
                 imgData = renderer.domElement.toDataURL();
                


                                          if(xsum<=0.7){
                                           
                                           showEpic(1)
                                           drawVKImage(vk1);
                                           drawFBImage(fb1);
                                           if(_lang!="en"){
                                           resdiscript.innerHTML = "РћС‚Р»РёС‡РЅРѕ! Р’Р°С€ РїСЂРѕРµРєС‚ РґРѕРєР°Р·С‹РІР°РµС‚, С‡С‚Рѕ РјРµР¶РґСѓ РїСЂРёСЂРѕРґРѕР№ Рё&nbspР°СЂС…РёС‚РµРєС‚СѓСЂРѕР№ РЅРµС‚ РїСЂРѕС‚РёРІРѕСЃС‚РѕСЏРЅРёСЏ!";
                                              }else{
                                              resdiscript.innerHTML = "Fine! Your project proves that there is&nbspno&nbspopposition between nature and&nbsparchitecture!";
                                              }

                                     }else if(xsum<=1.4){

                                            showEpic(2)
                                            drawVKImage(vk2);
                                            drawFBImage(fb2);
                                            if(_lang!="en"){
                                           resdiscript.innerHTML = "РњР°РєСЃРёРјР°Р»СЊРЅРѕ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Р№, РІР°С€ РїСЂРѕРµРєС‚ РµР»Рё РјРѕР¶РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ РєСЂСѓРіР»С‹Р№ РіРѕРґ.";
                                              }else{
                                              resdiscript.innerHTML = "As functional as&nbsppossible, your project could be&nbspused all year round.";
                                              }

                                     }else if(xsum<=2.1){

                                           showEpic(3)
                                           drawVKImage(vk3);
                                           drawFBImage(fb3);
                                           if(_lang!="en"){
                                           resdiscript.innerHTML = "Р’С‹РґР°СЋС‰Р°СЏСЃСЏ Р°СЂС…РёС‚РµРєС‚СѓСЂРЅР°СЏ РёРґРµСЏ, Рё&nbspРЅР°Рґ&nbspРЅР°РїРѕР»РЅРµРЅРёРµРј РїСЂРѕРµРєС‚Р° РІС‹ С‚РѕР¶Рµ РїРѕСЂР°Р±РѕС‚Р°Р»Рё РЅР°&nbspСЃР»Р°РІСѓ!";
                                              }else{
                                              resdiscript.innerHTML = "Outstanding architectural idea, and you also worked excellently over the filling of&nbspthe&nbspproject!";
                                              }
                                    }else if(xsum<=2.8){

                                           showEpic(4)
                                           drawVKImage(vk4);
                                           drawFBImage(fb4);
                                           if(_lang!="en"){
                                           resdiscript.innerHTML = "Р—Р°РјРµС‚РЅРѕ, С‡С‚Рѕ РІС‹ СѓС‡РёС‚С‹РІР°РµС‚Рµ РєРѕРЅС‚РµРєСЃС‚ Рё&nbspСЃС‚СЂРµРјРёС‚РµСЃСЊ Рє&nbspРёСЃСЃР»РµРґРѕРІР°РЅРёСЏРј РІРѕР·РјРѕР¶РЅРѕСЃС‚РµР№ РґРёР·Р°Р№РЅР°!";
                                              }else{
                                              resdiscript.innerHTML = "It is noticeable that you take into account the&nbspcontext and&nbsptend to&nbspexplore the&nbsppossibilities of&nbspdesign!";
                                              }
                                    }else if(xsum<=3.5){

                                           showEpic(5)
                                           drawVKImage(vk5);
                                           drawFBImage(fb5);
                                           if(_lang!="en"){
                                           resdiscript.innerHTML = "Р­С‚РѕС‚ РїСЂРѕРµРєС‚ РјРѕР¶РЅРѕ СЃРјРµР»Рѕ РЅР°Р·РІР°С‚СЊ С‘Р»РєРѕР№ Р±СѓРґСѓС‰РёС… РїРѕРєРѕР»РµРЅРёР№! Р’РїРµСЂРµРґ, РїРѕРєР°Р¶РёС‚Рµ РµС‘ РІСЃРµРј!";
                                              }else{
                                              resdiscript.innerHTML = "This project can be called the Christmas tree of&nbspthe&nbspfuture generations! Go ahead, show it to&nbspeveryone!";
                                              }

                                    }else{

                                           showEpic()
                                           if(_lang!="en"){
                                           resdiscript.innerHTML = "Р­С‚РѕС‚ РїСЂРѕРµРєС‚ РјРѕР¶РЅРѕ СЃРјРµР»Рѕ РЅР°Р·РІР°С‚СЊ С‘Р»РєРѕР№ Р±СѓРґСѓС‰РёС… РїРѕРєРѕР»РµРЅРёР№! Р’РїРµСЂРµРґ, РїРѕРєР°Р¶РёС‚Рµ РµС‘ РІСЃРµРј!";
                                              }else{
                                              resdiscript.innerHTML = "This project can be called the Christmas tree of&nbspthe&nbspfuture generations! Go ahead, show it to&nbspeveryone!";
                                              }
                                    }
            
                 
                 
                 TweenMax.to(cran,1,{alpha:0})
                 tlballs.restart().timeScale(1);
                
                 TweenMax.to(container,1,{x:"-25%", ease:Cubic.easeInOut});
                 if(window.innerWidth<window.innerHeight){
                      TweenMax.to(container,1,{alpha:0});
                 }
           
                 res();
                 

                 TweenMax.set(fintext,{display:"block"});
                     

                 fintext.style.pointerEvents="auto";
                 finanim.play().timeScale(1);

                
            }});
            }
            CreateExplosion(objThree.position.x, objThree.position.y, objThree.position.z)
        }
        if ( ms ) {
            ms.getWorldTransform( transformAux1 );
            var p = transformAux1.getOrigin();
            var q = transformAux1.getRotation();
            objThree.position.set( p.x(), p.y(), p.z() );
            objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );
            
        }
    }
}

function drawFBImage(_idtemp){
    
    var draft = document.createElement('canvas');
    var ctx=draft.getContext("2d");

    draft.width=1048;
    draft.height=548;

    ctx.drawImage(_idtemp, 0, 0);
    ctx.fillStyle = "white";
    ctx.font = "bold 22px Roboto-Bold";
    ctx.fillText(imgNum,623,510);




    var c=document.getElementById("fbcanvas");
    var ctx=c.getContext("2d");


    fb_k=524/274;

    
    fbcanvas.height=renderer.domElement.height;
    fbcanvas.width=renderer.domElement.height*fb_k;
    
    ctx.drawImage(draft, 0, 0,renderer.domElement.height*fb_k, renderer.domElement.height);
    ctx.drawImage(renderer.domElement, fbcanvas.width*0.25-renderer.domElement.width/2, 0);
    
    
    
    imgPath="../fbimage/fbimage_"+imgNum+".png";

    var data = document.getElementById("fbcanvas").toDataURL();
            $.post("php/fbimg.php", {
                imageData : data,
                imagePath : imgPath
            }, function(data) {

            });


}

function drawVKImage(_idtemp){

    var draft = document.createElement('canvas');
    var ctx=draft.getContext("2d");

    draft.width=1074;
    draft.height=480;

    ctx.drawImage(_idtemp, 0, 0);
    ctx.fillStyle = "white";
    ctx.font = "bold 22px Roboto";
    ctx.fillText(imgNum,647,443);


    var c=document.getElementById("vkcanvas");
    var ctx=c.getContext("2d");


    vk_k=537/240;

    
    vkcanvas.height=renderer.domElement.height;
    vkcanvas.width=renderer.domElement.height*vk_k;
    
    ctx.drawImage(draft, 0, 0,renderer.domElement.height*vk_k, renderer.domElement.height);
    ctx.drawImage(renderer.domElement, vkcanvas.width*0.23-renderer.domElement.width/2, 0);
    
    
    
    imgPath="../vkimage/vkimage_"+imgNum+".png";

    var data = document.getElementById("vkcanvas").toDataURL();
            $.post("php/vkimg.php", {
                imageData : data,
                imagePath : imgPath
            }, function(data) {

            });

            
     

}

document.getElementById("vkbtn").onclick=function(){





   if(_lang!="en"){
   _IMG_PATH="http://"+window.location.hostname+"/vkimage/vkimage_"+imgNum+".png";
   _site="http://"+window.location.hostname;

   _title = "%D0%9F%D0%BE%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B9%D1%82%D0%B5%20%D0%B8%20%D0%92%D1%8B%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%E2%80%94%20%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8E%D1%8E%20%D0%B5%D0%BB%D1%8C!"

   }else{
     _IMG_PATH="http://"+window.location.hostname+"/vkimage/vkimage_"+imgNum+".png";
    _site="http://"+window.location.hostname;
       _title = "Now%20you%20can%20also%20create%20your%20object%20%E2%80%94%20a%20New%20Year%20tree!"

   }
   window.open("https://vk.com/share.php?url="+_site+"&title="+_title+"&image="+_IMG_PATH,"_blank");
   
}

document.getElementById("fbbtn").onclick=function(){


   if(_lang!="en"){
       _IMG_PATH="http://"+window.location.hostname+"/fbimage/fbimage_"+imgNum+".png";
   _site="http://"+window.location.hostname;
    window.open("https://www.facebook.com/sharer/sharer.php?u="+_site+"/php/resru.php?image="+_IMG_PATH+"&lang="+_lang,"_blank");
    }else{
    _IMG_PATH="http://"+window.location.hostname+"/fbimage/fbimage_"+imgNum+".png";
   _site="http://"+window.location.hostname;
    window.open("https://www.facebook.com/sharer/sharer.php?u="+_site+"/php/resen.php?image="+_IMG_PATH+"&lang="+_lang,"_blank");
    }
   
}



document.getElementById("replaybtn").onclick=function(){

         imgNum++;
         treevers.textContent = imgNum;

        
        fintext.style.pointerEvents="none";
        
        

            finanim.reverse().timeScale(3);
            tlballs.reverse().timeScale(3);
            
            TweenMax.to(container,1,{x:"0%", ease:Cubic.easeInOut});
            TweenMax.to(container,1,{alpha:1});
            for (var i = group.children.length - 1; i >= 0; i--) {
                group.remove(group.children[i]);
            }

    mesh.children = [];
    
    var shape = new THREE.Shape();
    shape.moveTo( -0.5, 0);
    shape.lineTo( -0.5, 1);
    shape.lineTo( 0.5, 1);
    shape.lineTo( 0.5, 0 );
    shape.lineTo( -0.5, 0 );

    var extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: false,
        bevelThickness: 0,
        bevelSize: 0,
        bevelSegments: 0
    };

    mesh.geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );

    var edgesGeom = new THREE.EdgesGeometry(mesh.geometry);
        
    var edges = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({color: "white"}));
        mesh.add(edges);

    var thickness =0.015;

    for (var i = 0; i < edgesGeom.attributes.position.count - 1; i+=2){

          var startPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 0],
            edgesGeom.attributes.position.array[i * 3 + 1],
            edgesGeom.attributes.position.array[i * 3 + 2]
          );
            var endPoint = new THREE.Vector3(
              edgesGeom.attributes.position.array[i * 3 + 3],
            edgesGeom.attributes.position.array[i * 3 + 4],
            edgesGeom.attributes.position.array[i * 3 + 5]
          );
          
          var cylLength = new THREE.Vector3().subVectors(endPoint, startPoint).length();
          var cylGeom = new THREE.CylinderBufferGeometry(thickness, thickness, cylLength, 16);
          cylGeom.translate(0, cylLength / 2, 0);
          cylGeom.rotateX(Math.PI / 2);
          var cyl = new THREE.Mesh(cylGeom, new THREE.MeshLambertMaterial({color: 0xffffff}));
          cyl.position.copy(startPoint);
          cyl.lookAt(endPoint);
          mesh.add(cyl);
    }

            rigidBodies.length=[];
            flag=false;
            _boxwidth = 6.8;
            _boxlast = 1;
            coll=ground.position.y;
            

            if(md.phone()){
        
        camera.position.set( 0, -2, 40 );

        }else if(md.tablet()){
                camera.position.set( 0, -2.8, 35 );
        }else{
            camera.position.set( 0, -5, 20 );
        }

            xsum=0;
            group.rotation.y=0;
            initPhysics();
            createObjects();
            anckerDown();
            TweenMax.to(cran,1,{alpha:1})
            
    

}



