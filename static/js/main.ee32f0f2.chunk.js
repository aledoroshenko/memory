(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{19:function(n,t,e){n.exports=e(27)},24:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),c=e(11),i=e.n(c),o=(e(24),e(17)),l=e(1),u=e(2),s=e(4),d=e(18),f=e(3),p=e(15),m=12,b=2,v="cats",g=e(29),h={cats:{covers:["/tiles/cats/covers/1.png"],tiles:["/tiles/cats/tiles/1.png","/tiles/cats/tiles/2.png","/tiles/cats/tiles/3.png","/tiles/cats/tiles/4.png","/tiles/cats/tiles/5.png","/tiles/cats/tiles/6.png","/tiles/cats/tiles/7.png","/tiles/cats/tiles/8.png","/tiles/cats/tiles/9.png","/tiles/cats/tiles/10.png","/tiles/cats/tiles/11.png","/tiles/cats/tiles/12.png","/tiles/cats/tiles/13.png","/tiles/cats/tiles/14.png","/tiles/cats/tiles/15.png"]}};var j,O=function(n,t,e){return Array.from({length:t/e}).flatMap((function(t,r){return Array.from({length:e},(function(){return n[r]}))})).sort((function(){return Math.random()-.5}))}(h[v].tiles.map((function(n){return{id:Object(g.a)(),frontUrl:n,backUrl:h[v].covers[0]}})).sort((function(){return Math.random()-.5})),m,b),y=O.map((function(n){return{id:Object(g.a)(),isFlipped:!1,isMatch:!1,matchId:n.id,frontUrl:n.frontUrl,backUrl:n.backUrl}})),E={moves:0,cardsByIds:(j=y,j.reduce((function(n,t){return Object(f.a)({},n,Object(s.a)({},t.id,t))}),{})),flippedCardsIds:[],flipSoon:!1,allFlipped:!1,matchedCards:0,roundDuration:null};var w=null,I=function(n,t){switch(t.type){case"RESTART":return Object(f.a)({},E);case"FLIP_SOON":return n.flippedCardsIds.map((function(t){return n.cardsByIds[t].isFlipped=!1})),Object(f.a)({},n,{cardsByIds:Object(f.a)({},n.cardsByIds),flippedCardsIds:[],flipSoon:!1});case"FLIP_CARD":0===n.moves&&(w=new Date);var e=t.data,r=e.id,a=e.matchId,c=n.moves+1,i=[].concat(Object(d.a)(n.flippedCardsIds),[r]),o=i.length===b,l=!1,u=n.matchedCards,m=null,v=function(n){var t=Object(f.a)({},n);return t.isFlipped=!n.isFlipped,t}(n.cardsByIds[r]);if(o)i.every((function(t){return n.cardsByIds[t].matchId===a}))?(v.isMatch=!0,i.forEach((function(t){n.cardsByIds[t]=Object(f.a)({},n.cardsByIds[t],{isMatch:!0})})),u+=i.length,i=[]):l=!0;var g=u===Object.values(n.cardsByIds).length;return g&&null!==w&&(m=Object(p.a)({start:w,end:new Date})),Object(f.a)({},n,{moves:c,cardsByIds:Object(f.a)({},n.cardsByIds,Object(s.a)({},r,v)),flippedCardsIds:i,flipSoon:l,allFlipped:g,matchedCards:u,roundDuration:m});default:return n}},x=e(16);function C(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return n},n}function k(){var n=Object(l.a)(["\n  max-width: 500px;\n  min-height: 100px;\n  background-color: #fff;\n  padding: 10px 40px 60px;\n"]);return k=function(){return n},n}var F=u.c.div(k()),B=function(n){var t=n.data,e=n.onClose;return a.a.createElement(F,null,a.a.createElement("h2",null,"You have some memory"),a.a.createElement("p",null,"You solve round with ",a.a.createElement("strong",null,t.cardsAmount," cards")," with"," ",a.a.createElement("strong",null,t.moves," moves")," and"," ",a.a.createElement("strong",null,"spend ",t.roundDuration&&Object(x.a)(t.roundDuration)),"."),a.a.createElement("button",{onClick:e},"Try again"))},S=u.c.div(C()),D=function(n){var t=n.data,e=n.onClose;return a.a.createElement(S,null,a.a.createElement(B,{data:t,onClose:e}))};function A(){var n=Object(l.a)(["\n  ",";\n  ",";\n  ",";\n"]);return A=function(){return n},n}function R(){var n=Object(l.a)(["\n  ",";\n  ",";\n  ",";\n"]);return R=function(){return n},n}function M(){var n=Object(l.a)(["\n      "," {\n        transform: rotateX(-180deg) rotateZ(5deg);\n      }\n    "]);return M=function(){return n},n}function U(){var n=Object(l.a)(["\n  position: relative;\n  ",";\n  ",";\n"]);return U=function(){return n},n}function T(){var n=Object(l.a)(["\n  ",";\n  transform-style: preserve-3d;\n  transition: 0.3s transform;\n\n  &:active {\n    transform: scale(0.875);\n  }\n"]);return T=function(){return n},n}function L(){var n=Object(l.a)(["\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);\n  ",";\n  border: 1px solid aliceblue;\n  background-size: cover;\n"]);return L=function(){return n},n}function P(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return P=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"]);return _=function(){return n},n}var Z=Object(u.b)(_()),q=Object(u.b)(P()),J=Object(u.b)(L(),(function(n){var t=n.url;return'background: #fff url(".'.concat(t,'") no-repeat center center;')})),N=u.c.div(T(),Z),W=u.c.div(U(),Z,(function(n){return n.isFlipped&&Object(u.b)(M(),N)})),X=u.c.div(R(),J,Z,(function(n){var t=n.angle;return"transform: rotateZ(".concat(t,")")})),Y=u.c.div(A(),J,q,(function(n){var t=n.angle;return"transform: rotateX(-180deg) rotateZ(".concat(t,")")}));function z(n,t){return"".concat(Math.random()*(t-n)+n,"deg")}var $=function(n){var t=n.data,e=n.onClick,c=Object(r.useRef)(z(-3,3)).current,i=Object(r.useRef)(z(-3,3)).current;return a.a.createElement(W,{isFlipped:t.isFlipped},a.a.createElement(N,null,a.a.createElement(Y,{angle:c,url:t.frontUrl}),a.a.createElement(X,{onClick:e,angle:i,url:t.backUrl})))};function G(){var n=Object(l.a)(["\n  width: 800px;\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap;\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(['\n  flex: 0 0 25%;\n  display: flex;\n  height: auto;\n  justify-content: center;\n  align-items: stretch;\n\n  &:before {\n    content: "";\n    display: table;\n    padding-top: 100%;\n  }\n']);return H=function(){return n},n}var K=u.c.div(H()),Q=u.c.div(G()),V=function(n){var t=n.flipSoon,e=n.cards,c=n.onCardFlip,i=n.flipCardsBack;return Object(r.useEffect)((function(){t&&setTimeout((function(){i()}),1e3)}),[t,i]),a.a.createElement(Q,null,e.map((function(n){return a.a.createElement(K,{key:n.id},a.a.createElement($,{data:n,onClick:function(){return c(n)}}))})))};function nn(){var n=Object(l.a)(["\n  body {\n    background-color: #e2e8ea;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(l.a)(["\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  max-width: 600px;\n\n  h1 {\n    margin-bottom: 0;\n  }\n\n  p {\n    margin: 10px;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return en=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  flex-direction: column;\n"]);return rn=function(){return n},n}var an=u.c.div(rn()),cn=u.c.div(en()),on=u.c.div(tn()),ln=Object(u.a)(nn());var un=function(){var n=Object(r.useReducer)(I,E),t=Object(o.a)(n,2),e=t[0],c=t[1],i=Object(r.useCallback)((function(){c({type:"FLIP_SOON"})}),[]),l=Object.values(e.cardsByIds);return a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,null),a.a.createElement(an,null,a.a.createElement(cn,null,a.a.createElement(on,null,a.a.createElement("h1",null,"Memory game"),a.a.createElement("p",null,"Support of themes, difficulty and cats."))),a.a.createElement(cn,null,a.a.createElement(V,{cards:l,onCardFlip:function(n){if(!0===e.flipSoon)return!1;c({type:"FLIP_CARD",data:{id:n.id,matchId:n.matchId}})},flipSoon:e.flipSoon,flipCardsBack:i})),e.allFlipped?a.a.createElement(D,{data:{roundDuration:e.roundDuration,moves:e.moves,cardsAmount:m},onClose:function(){c({type:"RESTART"})}}):null,a.a.createElement(cn,null,a.a.createElement(on,null,a.a.createElement("p",null,a.a.createElement("strong",null,"Themes support")),a.a.createElement("p",null,"Add new folder with cards tiles - and you will have set of cards to play: based on available unique tiles game create set of pairs of cards"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement("strong",null,"Difficulties switcher")),a.a.createElement("p",null,"Amount of cards on the board and amount of unique pieces are in the config, and with updating two numbers game could vary in difficulty and adjust matching logic.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(un,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee32f0f2.chunk.js.map