(this["webpackJsonpmonsters-rolodex-app"]=this["webpackJsonpmonsters-rolodex-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(0)),d=function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},j=(n(16),n(17),function(e){var t=e.monster;return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("p",{children:t.email})]})}),m=function(e){var t=e.monsters;return Object(u.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(u.jsx)(j,{monster:e},e.id)}))})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState({searchField:e.target.value})},s.state={monsters:[],searchField:""},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(d,{placeholder:"search monsters",handleChange:this.handleChange}),Object(u.jsx)(m,{monsters:s})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.5a379d09.chunk.js.map