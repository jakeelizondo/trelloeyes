(this.webpackJsonptrelloyes=this.webpackJsonptrelloyes||[]).push([[0],[,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r=i(0),c=i(1),d=i(4),n=i.n(d),s=i(3);i(10);var l=function(e){return Object(r.jsxs)("div",{class:"Card",children:[Object(r.jsx)("button",{type:"button",children:"delete"}),Object(r.jsx)("h3",{children:e.header}),Object(r.jsx)("p",{children:e.content})]})};i(11);var a=function(e){var t=e.cards.map((function(e,t){return Object(r.jsx)(l,{header:e.title,content:e.content},t)}));return Object(r.jsxs)("section",{className:"List",children:[Object(r.jsx)("header",{className:"List-header",id:e.id,children:Object(r.jsx)("h2",{children:e.header})}),Object(r.jsxs)("div",{className:"List-cards",children:[t,Object(r.jsx)("button",{type:"button",class:"List-add-button",children:"+ Add Random Card"})]})]})};i(12);var o=function(e){var t=e.store.lists.map((function(t,i){var r=t.cardIds,d=Object.values(e.store.allCards).filter((function(e){return!0===r.includes(e.id)}));return Object(c.createElement)(a,Object(s.a)(Object(s.a)({},t),{},{key:i,header:t.header,cards:d}))}));return Object(r.jsxs)("main",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("h1",{children:"Trelloyes!"})}),Object(r.jsx)("div",{className:"App-list",children:t})]})},h=(i(13),{lists:[{id:"1",header:"First list",cardIds:["a","b","e","f","g","j","l","m"]},{id:"2",header:"Second list",cardIds:["b","c","d","f","h","i","k"]},{id:"3",header:"Third list",cardIds:["a","b","c","d","e","f","g","h","i","j","k","l","m"]},{id:"4",header:"Fourth list",cardIds:["l","m"]}],allCards:{a:{id:"a",title:"First card",content:"lorem ipsum"},b:{id:"b",title:"Second card",content:"lorem ipsum"},c:{id:"c",title:"Third card",content:"lorem ipsum"},d:{id:"d",title:"Fourth card",content:"lorem ipsum"},e:{id:"e",title:"Fifth card",content:"lorem ipsum"},f:{id:"f",title:"Sixth card",content:"lorem ipsum"},g:{id:"g",title:"Seventh card",content:"lorem ipsum"},h:{id:"h",title:"Eighth card",content:"lorem ipsum"},i:{id:"i",title:"Ninth card",content:"lorem ipsum"},j:{id:"j",title:"Tenth card",content:"lorem ipsum"},k:{id:"k",title:"Eleventh card",content:"lorem ipsum"},l:{id:"l",title:"Twelfth card",content:"lorem ipsum"},m:{id:"m",title:"Thirteenth card",content:"lorem ipsum"}}});n.a.render(Object(r.jsx)(o,{store:h}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.66e425ae.chunk.js.map