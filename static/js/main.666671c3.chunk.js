(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Scooby-Doo","image":"/images/scooby_doo.png","clicked":false},{"id":2,"name":"Shaggy Rogers","image":"/images/shaggy_rogers.png","clicked":false},{"id":3,"name":"Fred Jones","image":"/images/fred_jones.png","clicked":false},{"id":4,"name":"Daphne Blake","image":"/images/daphne_blake.png","clicked":false},{"id":5,"name":"Velma Dinkley","image":"/images/Velma_Dinkley.png","clicked":false},{"id":6,"name":"Black Knight","image":"/images/Black_Knight.png","clicked":false},{"id":7,"name":"Phantom","image":"/images/phantom.png","clicked":false},{"id":8,"name":"Miner Forty-Niner","image":"/images/Miner_Forty-Niner.png","clicked":false},{"id":9,"name":"Snow Ghost","image":"/images/snow_ghost.png","clicked":false},{"id":10,"name":"Wax Phantom","image":"/images/Wax_Phantom.png","clicked":false},{"id":11,"name":"Mummy of Anka","image":"/images/Mummy_of_Ankha.png","clicked":false},{"id":12,"name":"Ghost Clown","image":"/images/Ghost_Clown.png","clicked":false}]')},,,function(e,a,n){e.exports=n(19)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(2),s=n.n(i),o=(n(13),n(3)),r=n(4),l=n(7),m=n(6);n(14);var u=function(e){return c.a.createElement("div",{className:"nav-container"},c.a.createElement("nav",{className:"navbar",id:"navbar"},c.a.createElement("h5",{className:"navbar-brand "},"Clicky Game"),c.a.createElement("div",null,c.a.createElement("h5",{className:"user-score"},"Current Score: ",e.score," - Best Score: ",e.bestScore))))};n(15);var d=function(e){return c.a.createElement("div",{className:"jumbo-wrapper"},c.a.createElement("h1",null,"Clicky Game!!!"),c.a.createElement("h3",null,e.notification))};n(16);var g=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.id,e.clicked)},"data-clicked":e.clicked,"data-id":e.id},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:"/clicky"+e.image,className:"card-img",alt:e.name})))},f=n(5),h=(n(17),function(e){Object(l.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={scooby:f,score:0,bestScore:0,message:"Click an image to start!"},e.shuffle=function(e){return e.sort((function(){return Math.random()-.5})),e},e.correctGuess=function(a){var n=e.state.scooby.map((function(e){return e.id===a&&(e.clicked=!e.clicked),e})),t=e.state.score+1,c=e.state.bestScore;t<=c||c++,e.setState({scooby:e.shuffle(n),score:t,bestScore:c,message:"That's correct! Guess again."})},e.incorrectGuess=function(a){var n=e.state.scooby.map((function(e){return e.clicked&&(e.clicked=!1),e}));e.setState({scooby:e.shuffle(n),score:0,message:"That's incorrect!",bestScore:a})},e.handleClick=function(a,n){return n?e.incorrectGuess(e.state.bestScore):e.correctGuess(a)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({scooby:this.shuffle(this.state.scooby)})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{score:this.state.score,bestScore:this.state.bestScore}),c.a.createElement(d,{notification:this.state.message}),c.a.createElement("div",{className:"card-container"},this.state.scooby.map((function(a){return c.a.createElement(g,{onClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image,clicked:a.clicked})}))))}}]),n}(t.Component));n(18);var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.666671c3.chunk.js.map