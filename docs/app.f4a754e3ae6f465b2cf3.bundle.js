(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(t,e,n){},5:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=8,s=13,l=1,h=[{wall:"#7ca1bf",window:"#648199"},{wall:"#cb7a4d",window:"#845032"}],c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=h[Math.floor(Math.random()*h.length)],this.mesh=new i.k(new i.a(e.width,e.depth,e.height),[new i.l({map:this.createTexture(e.depth,e.height,270)}),new i.l({map:this.createTexture(e.depth,e.height,90)}),new i.l({map:this.createTexture(e.width,e.height,0)}),new i.l({map:this.createTexture(e.width,e.height,0)}),new i.l({color:4473924}),new i.l({color:4473924})]),this.mesh.position.x=e.x,this.mesh.position.z=e.y,this.mesh.position.y=e.height/2,this.mesh.rotation.x=-Math.PI/2}var e,n,a;return e=t,(n=[{key:"createTexture",value:function(t,e,n){var a=document.createElement("canvas"),o=a.getContext("2d"),h=n*Math.PI/180;a.width=t*Math.abs(Math.cos(h))+e*Math.abs(Math.sin(h)),a.height=t*Math.abs(Math.sin(h))+e*Math.abs(Math.cos(h)),o.translate(a.width/2,a.height/2),o.rotate(h),o.translate(-t/2,-e/2),o.fillStyle=this.color.wall,o.fillRect(0,0,t,e),o.fillStyle=this.color.window;var c=r+2*l,u=s+2*l,f=Math.floor(t/c),d=Math.floor(e/u);if(f>=1&&d>=1)for(var v=f*d,y=(t-f*c)/2,w=(e-d*u)/2,g=0;g<v;g++){var x=c*(g%f)+l+y,p=u*Math.floor(g/f)+l+w;o.fillRect(x,p,r,s)}return new i.c(a)}}])&&o(e.prototype,n),a&&o(e,a),t}(),u=n(2),f=30;function d(t,e,n){var a=document.createElement("canvas");a.width=t,a.height=e;var o=a.getContext("2d");return o.fillStyle="#fff",o.fillRect(0,0,t,e),o.fillStyle="#3d3d3d",n.forEach((function(t){o.fillRect(t.x,t.y,t.w,t.h)})),new i.c(a)}function v(){var t=new i.k(new i.a(16,5,5),new i.l({color:0}));return t.position.z=2.5,t}var y=d(80,40,[{x:10,y:0,w:60,h:30}]),w=d(80,40,[{x:10,y:10,w:60,h:30}]),g=d(40,110,[{x:10,y:10,w:30,h:50},{x:10,y:70,w:30,h:30}]),x=d(40,110,[{x:0,y:10,w:30,h:50},{x:0,y:70,w:30,h:30}]);var p={create3dModel:function(t){var e=new i.g,n=new i.k(new i.a(14,f,7),new i.l({color:t,flatShading:!0}));n.position.z=6,e.add(n);var a=new i.k(new i.a(14,15,6),[new i.l({color:13421772,map:g}),new i.l({color:13421772,map:x}),new i.l({color:13421772,map:y}),new i.l({color:13421772,map:w}),new i.l({color:13421772}),new i.l({color:13421772})]);a.position.y=-3.5,a.position.z=12.5,e.add(a);var o=v();o.position.y=-9,e.add(o);var r=v();r.position.y=9,e.add(r);var s=new i.k(new i.b(14,f,20),new i.l({color:t,opacity:.5,transparent:!0}));return s.material.visible=!1,s.position.z=6,s.name="hitbox",e.add(s),e},carSize:f};function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var P={green:new i.i({color:4193792}),yellow:new i.i({color:16632832})},k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.car=e.car,this.far=e.far,this.distance=null,this.raycaster=new i.o,this.raycaster.far=e.far,this.line=this.createLine()}var e,n,a;return e=t,(n=[{key:"createLine",value:function(){var t=new i.f;t.vertices.push(new i.t(0,0,6),new i.t(0,this.far,6));var e=new i.h(t,P.green);return e.name="sensor",e}},{key:"setLineMaterial",value:function(t){this.line.material!==t&&(this.line.material=t)}},{key:"reset",value:function(){this.line.material!==P.green&&(this.line.material=P.green),this.distance=null}},{key:"update",value:function(t){var e=this.line.geometry.vertices[1].clone().applyMatrix4(this.line.parent.matrix).sub(this.line.parent.position);this.raycaster.set(this.car.mesh.position.clone(),e.clone().normalize());var n=this.raycaster.intersectObjects(t);if(n.length){var i=n.reduce((function(t,e){return!t||e.distance<t.distance?e:t}));this.distance=i.distance,this.setLineMaterial(P.yellow)}else this.setLineMaterial(P.green)}}])&&m(e.prototype,n),a&&m(e,a),t}(),b={tileSize:50,worldWidth:1250,worldHeight:1250,carTotal:40},T={roundNumber:function(t,e){var n=Number("".concat(t)).toFixed(parseInt(e,10));return parseFloat(n)},radiansToAngle:function(t){return t*(180/Math.PI)},angleToRadians:function(t){return t*Math.PI/180},calcAngleDegrees:function(t,e){return this.roundNumber(this.radiansToAngle(Math.atan2(e,t)),2)},getDistance:function(t,e,n,i){var a=t-e,o=n-i;return Math.sqrt(a*a+o*o)},getRandomInt:function(t,e){var n=Math.ceil(t),i=Math.floor(e);return Math.floor(Math.random()*(i-n))+n},getRandomColor:function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},pullPointReferenceToLineWithAngle:function(t,e,n,i,a){var o=i-n,r=e-t,s=Math.atan2(o,r),l=Math.hypot(e-t,i-n);return[e+l*Math.cos(s+a),i+l*Math.sin(s+a)]},loadImage:function(t,e){var n=new Image;n.onload=function(){e(n)},n.src=t},checkCollision:function(t,e){var n,a,o,r=t.geometry.vertices;for(o=0;o<r.length;o++)if(n=r[o].clone().applyMatrix4(t.parent.matrix).sub(t.parent.position),(a=new i.o(t.parent.position.clone(),n.clone().normalize(),0,30).intersectObjects(e)).length>0&&a[0].distance<n.length())return a;return[]}};function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var R={ways:{even:"#ff0000",odd:"#ff00ff"}},S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.way=e.way,this.road=e.road,this.initPoint=null}var e,n,i;return e=t,i=[{key:"drawOnCanvas",value:function(t,e){var n=e.initPoint;t.translate(b.worldWidth/2,b.worldHeight/2),t.beginPath(),t.strokeStyle=R.ways[e.way],function e(n){n.nextPoints.forEach((function(i){n.roadPath.name===i.roadPath.name&&(t.moveTo(n.x,n.y),t.lineTo(i.x,i.y),e(i))}))}(n),t.stroke(),t.closePath();var i,a,o=e.initPoint.nextPoints[0].x-e.initPoint.x,r=e.initPoint.nextPoints[0].y-e.initPoint.y,s=T.calcAngleDegrees(o,r);!function n(o){o.nextPoints.length&&(t.beginPath(),t.fillStyle=R.ways[e.way],i=o.x+Math.sin(T.angleToRadians(s))*(b.tileSize/12),a=o.y+Math.cos(T.angleToRadians(s))*(b.tileSize/12),t.moveTo(i,a),i=o.x-Math.sin(T.angleToRadians(s))*(b.tileSize/12),a=o.y-Math.cos(T.angleToRadians(s))*(b.tileSize/12),t.lineTo(i,a),i=o.x+Math.cos(T.angleToRadians(s))*(b.tileSize/8),a=o.y+Math.sin(T.angleToRadians(s))*(b.tileSize/8),t.lineTo(i,a),t.fill(),t.closePath(),o.nextPoints.forEach((function(t){o.roadPath.name===t.roadPath.name&&n(t)})))}(n),t.textAlign="center",t.font="11px Verdana",t.fillStyle="#000",t.fillText(e.name,n.x,n.y+10),t.resetTransform()}}],(n=[{key:"addPoint",value:function(t){t.roadPath=this,this.initPoint?this.getDeepestPoint().addNextPoint(t):this.initPoint=t}},{key:"find",value:function(t){return function e(n){if(t(n))return n;for(var i,a=n.nextPoints.length,o=0;o<a;o++)if((i=n.nextPoints[o]).roadPath.name===n.roadPath.name){var r=e(i);if(r)return r}return null}(this.initPoint)}},{key:"getDeepestPoint",value:function(){return this.find((function(t){return 0===t.nextPoints.length}))}},{key:"getPointInsideTile",value:function(t){var e=b.tileSize/2;return this.find((function(n){return n.x>t.sceneX-e&&n.x<t.sceneX+e&&n.y>t.sceneY-e&&n.y<t.sceneY+e}))}},{key:"getPathToAnyEndPoint",value:function(){return function t(e,n){return n.push(e),e.nextPoints.length?t(e.nextPoints[T.getRandomInt(0,e.nextPoints.length)],n):n}(this.initPoint,[])}},{key:"getPointPreviousPoint",value:function(t){return this.find((function(e){return-1!==e.nextPoints.indexOf(t)}))}},{key:"addPointAt",value:function(t,e){t.roadPath=this,this.points.splice(e,0,t)}}])&&M(e.prototype,n),i&&M(e,i),t}();function C(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e.x,this.y=e.y,this.vector3=new i.t(this.x,0,this.y),this.nextPoints=[],this.roadPath=e.roadPath||null}var e,n,a;return e=t,(n=[{key:"generatePathToAnyEndPoint",value:function(){return function t(e,n){return n.push(e),e.nextPoints.length?t(e.nextPoints[T.getRandomInt(0,e.nextPoints.length)],n):n}(this,[])}},{key:"addBefore",value:function(t){var e=this;if(this.roadPath){var n=this.roadPath.find((function(t){return-1!==t.nextPoints.indexOf(e)}));t.addNextPoint(this),n.removeNextPoint(this),n.addNextPoint(t)}}},{key:"removeNextPoint",value:function(t){var e=this.nextPoints.indexOf(t);-1!==e&&this.nextPoints.splice(e,0)}},{key:"addNextPoint",value:function(t){-1===this.nextPoints.indexOf(t)&&this.nextPoints.push(t)}}])&&C(e.prototype,n),a&&C(e,a),t}();function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.tiles=e.tiles,this.ways={},["even","odd"].forEach((function(t){n.ways[t]=[],"odd"===t&&e.tiles.reverse();var i,a=new S({name:"".concat(n.name,"-").concat(t),way:t,road:n}),o=e.tiles[1].sceneX-e.tiles[0].sceneX,r=-1*(e.tiles[1].sceneY-e.tiles[0].sceneY),s=T.calcAngleDegrees(o,r);e.tiles.forEach((function(t){var e=t.sceneX+Math.sin(T.angleToRadians(s))*(b.tileSize/4),n=t.sceneY+Math.cos(T.angleToRadians(s))*(b.tileSize/4);i=new z({x:e,y:n}),a.addPoint(i)})),n.ways[t].push(a),"odd"===t&&e.tiles.reverse()}))}var e,n,i;return e=t,i=[{key:"createJunctionOnTile",value:function(t,e,n){var i=[t,e];i.forEach((function(t,e){["even","odd"].forEach((function(a){var o=i[0===e?1:0],r=t.ways[a][0],s=r.getPointInsideTile(n),l=r.getPointPreviousPoint(s),h=new z({x:(s.x+l.x)/2,y:(s.y+l.y)/2,roadPath:r}),c=s.nextPoints[0];s.x=(s.x+c.x)/2,s.y=(s.y+c.y)/2;var u=s.x-h.x,f=s.y-h.y,d=T.calcAngleDegrees(u,f),v=h.x+Math.cos(T.angleToRadians(d))*(.75*b.tileSize),y=h.y+Math.sin(T.angleToRadians(d))*(.75*b.tileSize),w={x:v+Math.cos(T.angleToRadians(d-90))*(.75*b.tileSize),y:y+Math.sin(T.angleToRadians(d-90))*(.75*b.tileSize)},g=new z({x:w.x,y:w.y,roadPath:r});h.addNextPoint(g);var x=o.findClosestPoint(g.x,g.y);g.addNextPoint(x),s.addBefore(h);var p=new z({x:h.x+Math.cos(T.angleToRadians(d))*(.25*b.tileSize),y:h.y+Math.sin(T.angleToRadians(d))*(.25*b.tileSize),roadPath:r});p.addNextPoint(o.findClosestPoint(p.x,p.y)),s.addBefore(p)}))}))}},{key:"createRoadsJunctions",value:function(e,n){for(var i=e.tiles.length,a=n.tiles.length,o=0;o<i;o++)for(var r=0;r<a;r++)e.tiles[o]===n.tiles[r]&&t.createJunctionOnTile(e,n,e.tiles[o])}}],(n=[{key:"getInitPoints",value:function(){var t=this,e=[];return Object.keys(this.ways).forEach((function(n){t.ways[n].forEach((function(t){e.push(t.initPoint)}))})),e}},{key:"drawOnCanvas",value:function(t){var e=this,n=b.tileSize/2;this.tiles.forEach((function(i,a){var o=b.tileSize*i.x,r=b.tileSize*i.y;t.fillStyle="#989899",t.fillRect(o,r,b.tileSize,b.tileSize),0===a&&(t.textAlign="center",t.font="11px Verdana",t.fillStyle="#fff",t.fillText(e.name,o+n,r+n))}));var i=this.tiles[0],a=this.tiles[this.tiles.length-1];t.strokeStyle="#fff",t.beginPath(),t.setLineDash([10,15]),t.moveTo(b.tileSize*i.x+n,b.tileSize*i.y+n),t.lineTo(b.tileSize*a.x+n,b.tileSize*a.y+n),t.stroke()}},{key:"findClosestPoint",value:function(t,e){var n,i=this,a=null,o=null;return Object.keys(this.ways).forEach((function(r){i.ways[r].forEach((function(i){i.find((function(i){return n=Math.sqrt(Math.pow(t-i.x,2)+Math.pow(e-i.y,2)),(!a||n<o)&&(o=n,a=i),!1}))}))})),a}}])&&E(e.prototype,n),i&&E(e,i),t}();function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function L(t,e,n){return e&&O(t.prototype,e),n&&O(t,n),t}var N=25,D=b.worldWidth,B=b.worldHeight,j=b.tileSize,V=function(){function t(e,n){I(this,t),this.x=e,this.y=n,this.contents=[],this.sceneX=D/2*-1+e*j+j/2,this.sceneY=B/2*-1+n*j+j/2}return L(t,[{key:"getRoadContents",value:function(){return this.contents.filter((function(t){return t instanceof A}))}}]),t}(),W=new(function(){function t(){I(this,t),this.size=N,this.matrix=[];for(var e=0;e<this.size;e++){this.matrix[e]=[];for(var n=0;n<this.size;n++)this.matrix[e][n]=new V(e,n)}}return L(t,[{key:"getTiles",value:function(){for(var t=[],e=0;e<this.matrix.length;e++)for(var n=0;n<this.matrix[e].length;n++)t.push(this.matrix[e][n]);return t}},{key:"getTile",value:function(t,e){return this.matrix[t][e]}},{key:"setTileContent",value:function(t,e,n){this.matrix[t][e].contents.some((function(t){return t===n}))||this.matrix[t][e].contents.push(n)}},{key:"getRoadMatrix",value:function(){for(var t=[],e=0;e<this.matrix.length;e++){t[e]=[];for(var n=0;n<this.matrix[e].length;n++){var i=this.matrix[e][n].getRoadContents();t[e][n]={roads:i}}}return t}}]),t}());function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var F=function t(e){G(this,t),this.x=e.x,this.y=e.y,this.path=e.path||[],this.status="Unknown"},J=new(function(){function t(){G(this,t),this.matrix=W,this.fromLocation=null,this.toLocation=null,this.activeRoadMatrix=null}var e,n,i;return e=t,(n=[{key:"verifyLocationStatus",value:function(t){var e=t.x,n=t.y;if(e<0||e>=this.matrix.size||n<0||n>=this.matrix.size)return"Invalid";var i=this.activeRoadMatrix[e][n];return e===this.toLocation.x&&n===this.toLocation.y?"Goal":!i.roads.length||i.isVisited?"Blocked":"Valid"}},{key:"exploreInDirection",value:function(t,e){var n=t.y,i=t.x,a=t.path.slice();a.push(this.matrix.getTile(i,n)),"North"===e?n-=1:"East"===e?i+=1:"South"===e?n+=1:"West"===e&&(i-=1);var o=new F({x:i,y:n,path:a});return o.status=this.verifyLocationStatus(o),"Goal"===o.status&&o.path.push(this.matrix.getTile(i,n)),"Valid"===o.status&&(this.activeRoadMatrix[i][n].isVisited=!0),o}},{key:"findBestRoute",value:function(t,e){var n=["North","East","South","West"];this.activeRoadMatrix=this.matrix.getRoadMatrix(),this.fromLocation=new F({x:t.x,y:t.y}),this.toLocation=new F({x:e.x,y:e.y});var i=[this.fromLocation];for(this.activeRoadMatrix[this.fromLocation.x][this.fromLocation.y].isVisited=!0;i.length>0;)for(var a=i.shift(),o=0;o<n.length;o++){var r=this.exploreInDirection(a,n[o]);if("Goal"===r.status)return r.path;"Valid"===r.status&&i.push(r)}return null}}])&&H(e.prototype,n),i&&H(e,i),t}());function X(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.position,i=e.angle;this.broken=!1,this.position={x:0,y:0},this.handleAngle=0,this.color=T.getRandomColor(),this.mesh=p.create3dModel(this.color),this.hitboxMesh=this.mesh.children.find((function(t){return"hitbox"===t.name})),this.mesh.rotation.x=-Math.PI/2,this.setPosition(n.x,n.y),this.setAngle(i),this.navigation=J,this.currentRoutePoint=null,this.velocity=0,this.brakePower=.02,this.accelerationPower=.1,this.maxVelocity=T.getRandomInt(15,20)/10,this.callbacks={onBrake:function(){},onArrival:function(){}},this.sensors=[new k({name:"front",car:this,far:this.getStoppingDistance(this.maxVelocity)+p.carSize+10})],this.mesh.add(this.sensors[0].line)}var e,n,a;return e=t,(n=[{key:"getLeftDistanceToEnd",value:function(){for(var t=this.mesh.position.distanceTo(this.route[this.currentRoutePoint].vector3),e=this.currentRoutePoint+1;e<this.route.length;e++)t+=this.route[e-1].vector3.distanceTo(this.route[e].vector3);return t}},{key:"getStoppingDistance",value:function(t){for(var e=t,n=0;e>0;)n+=e-=this.brakePower;return n}},{key:"setPosition",value:function(t,e){this.position.x=t,this.position.y=e,this.mesh.position.set(t,0,e)}},{key:"setAngle",value:function(t){this.angle=t,this.mesh.rotation.z=-T.angleToRadians(this.angle)}},{key:"calculateNextPosition",value:function(){var t=this.position,e=t.x,n=t.y,i=T.roundNumber(e+Math.sin(T.angleToRadians(this.angle))*this.velocity,1),a=T.roundNumber(n-Math.cos(T.angleToRadians(this.angle))*this.velocity,1);this.setPosition(i,a)}},{key:"setRoute",value:function(t,e){this.route=t,this.currentRoutePoint=0,this.callbacks.onArrival=e.onArrival,this.callbacks.onBrake=e.onBrake}},{key:"accelerate",value:function(){var t=this.velocity+this.accelerationPower;t>this.maxVelocity?this.velocity=this.maxVelocity:this.velocity=t}},{key:"brake",value:function(){var t=this.velocity-this.brakePower;this.velocity=t<0?0:t}},{key:"nextRoutePoint",value:function(){var t=this;this.route[this.currentRoutePoint+1]?this.currentRoutePoint++:(this.currentRoutePoint=null,setTimeout((function(){t.callbacks.onArrival(t)})))}},{key:"break",value:function(){if(!this.broken){var t=this,e={gray:new i.l({color:11447982}),black:new i.l({color:2236962})},n=new i.d(e.gray.color.getHex()),a=new i.d(e.black.color.getHex());u.a.to(n,1,{r:a.r,g:a.g,b:a.b,onUpdate:function(){t.mesh.children.forEach((function(t){"sensor"!==t.name&&(t.material.color=n)}))},onComplete:function(){t.callbacks.onBrake(t)}}),this.broken=!0}}},{key:"resetSensors",value:function(){this.sensors.forEach((function(t){return t.reset()}))}},{key:"checkCollision",value:function(t){if(!this.broken)if(t.length){var e=t.map((function(t){return t.hitboxMesh})),n=T.checkCollision(this.hitboxMesh,e);n.length&&(this.break(),n.forEach((function(n){t[e.indexOf(n.object)].break()}))),this.sensors.forEach((function(t){t.update(e)}))}else this.resetSensors()}},{key:"update",value:function(){if(!this.broken&&null!==this.currentRoutePoint){var t=this.route[this.currentRoutePoint],e=this.position,n=e.x,i=e.y,a=T.roundNumber(t.x-n,1),o=T.roundNumber(-1*(t.y-i),1);if(0===a&&0===o)return this.nextRoutePoint();var r=T.calcAngleDegrees(o,a);r!==this.angle&&this.setAngle(r);var s=this.getLeftDistanceToEnd(),l=this.getStoppingDistance(this.velocity),h=this.sensors[0].distance;s<=l||null!==h&&h<=l+10?this.brake():h===l||this.accelerate(),this.calculateNextPosition(),Math.sqrt(Math.pow(t.x-this.position.x,2)+Math.pow(t.y-this.position.y,2))<this.maxVelocity&&this.nextRoutePoint()}}}])&&X(e.prototype,n),a&&X(e,a),t}();function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=new i.p,this.scene.background=new i.d(16441547),this.tileSize=b.tileSize,this.width=b.worldWidth,this.height=b.worldHeight,this.matrix=W,this.groundCanvas=document.createElement("canvas"),this.groundCanvas.width=this.width,this.groundCanvas.height=this.height,this.roads=[],this.houses=[new c({width:30,height:101,depth:20,x:150,y:-200})],this.cars=[],this.initilize()}var e,n,a;return e=t,(n=[{key:"drawTilesGrid",value:function(){var t=this,e=this.groundCanvas.getContext("2d");e.fillStyle="#cac4ae",e.fillRect(0,0,this.width,this.height),this.matrix.getTiles().forEach((function(n){e.strokeStyle="#aea998",e.strokeRect(t.tileSize*n.x,t.tileSize*n.y,t.tileSize,t.tileSize)}))}},{key:"populateRoads",value:function(){var t=this,e=this.groundCanvas.getContext("2d");["Row","Col"].forEach((function(e){for(var n=0,i=function(i){n++;for(var a=[],o=0;o<t.matrix.size;o++){var r="Col"===e?t.matrix.getTile(i,o):t.matrix.getTile(o,i);a.push(r)}var s=new A({name:"".concat(e,"-").concat(n),tiles:a});a.forEach((function(e){t.matrix.setTileContent(e.x,e.y,s)})),t.roads.forEach((function(t){A.createRoadsJunctions(s,t)})),t.roads.push(s)},a=4;a<t.matrix.size;a+=8)i(a)})),this.roads.forEach((function(t){return t.drawOnCanvas(e)}))}},{key:"createCarRouteTrace",value:function(t){var e=new i.f,n=new i.i({color:t.color});t.route.forEach((function(t){e.vertices.push(new i.t(t.x,t.y,-5))})),t.routeTrace=new i.h(e,n),t.routeTrace.rotation.x=90*Math.PI/180,this.scene.add(t.routeTrace)}},{key:"onCarBrake",value:function(t){var e=this.cars.findIndex((function(e){return e===t}));this.cars.splice(e,1),this.scene.remove(t.mesh),this.scene.remove(t.routeTrace)}},{key:"onCarArrival",value:function(t){var e=this.cars.findIndex((function(e){return e===t}));this.cars.splice(e,1),this.scene.remove(t.mesh),this.scene.remove(t.routeTrace)}},{key:"createRandomCar",value:function(t,e){var n=t.generatePathToAnyEndPoint(),i=new Y({position:{x:n[0].x,y:n[0].y},angle:180});i.setRoute(n,{onArrival:this.onCarArrival.bind(this),onBrake:this.onCarBrake.bind(this)}),this.scene.add(i.mesh),this.cars.push(i),i.index=e}},{key:"getFreePointsToEnterCar",value:function(){var t,e,n=this,a=[];return this.roads.forEach((function(o){for(var r=o.getInitPoints(),s=0;s<r.length;s++){t=null,e=new i.t(r[s].x,-5,r[s].y);for(var l=0;l<n.cars.length;l++){var h=n.cars[l].mesh.position.distanceTo(e);t?h<t&&(t=h):t=h}(null===t||t>2*p.carSize)&&a.push(r[s])}})),a}},{key:"populateCars",value:function(){var t=b.carTotal-this.cars.length;if(0!==t)for(var e=this.getFreePointsToEnterCar(),n=Math.min(e.length,t),i=0;i<n;i++)this.createRandomCar(e[i],this.cars.length)}},{key:"populateBuildings",value:function(){var t=this;this.houses.forEach((function(e){t.scene.add(e.mesh)}))}},{key:"createGround",value:function(){var t=new i.k(new i.a(this.width,20,this.height),[new i.l({color:13288622}),new i.l({color:13288622}),new i.l({map:new i.c(this.groundCanvas)}),new i.l({color:13288622}),new i.l({color:13288622}),new i.l({color:13288622})]);t.position.set(0,-10,0),this.scene.add(t)}},{key:"initilize",value:function(){this.drawTilesGrid(),this.populateRoads(),this.populateBuildings(),this.populateCars(),this.createGround();var t=new i.k(new i.a(5,125,5),new i.l({color:16711680}));t.rotation.x=-Math.PI/2,this.scene.add(t);var e=new i.k(new i.a(125,5,5),new i.l({color:16711680}));e.rotation.x=-Math.PI/2,this.scene.add(e)}},{key:"getCarCollidableList",value:function(t){return this.cars.filter((function(e){return!e.broken&&t!==e&&t.mesh.position.distanceTo(e.mesh.position)<90}))}},{key:"updateCars",value:function(){var t,e,n=this.cars.length;for(t=0;t<n;t++)(e=this.cars[t]).checkCollision(this.getCarCollidableList(e)),e.update(t);this.populateCars()}},{key:"update",value:function(){this.updateCars()}}])&&q(e.prototype,n),a&&q(e,a),t}(),K=(n(3),n(4),new i.m(45,window.innerWidth/window.innerHeight,100,5e3));K.position.set(0,950,1400);var Q=new U,Z=new i.u({antialias:!0});Z.setSize(window.innerWidth,window.innerHeight),new a.a(K,Z.domElement).maxDistance=1800,document.querySelector("#scene").appendChild(Z.domElement),function t(){Q.update(),Z.render(Q.scene,K),requestAnimationFrame(t)}()}},[[5,1,2]]]);