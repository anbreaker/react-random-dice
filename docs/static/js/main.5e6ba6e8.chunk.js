(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{131:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t(40),s=t.n(n),r=(t(46),t(10)),l=t(3),i=t(0),o=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark container",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Inicio"}),Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(r.b,{className:"nav-item nav-link",to:"/one",children:"Un Dado"}),Object(i.jsx)(r.b,{className:"nav-item nav-link",to:"/two",children:"Dos Dados"}),Object(i.jsx)(r.b,{className:"nav-item nav-link",to:"/opt",children:"Varios Dados"})]})]})})},d=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsx)("h1",{children:"BeKind Software, prueba T\xe9cnica"}),Object(i.jsxs)("div",{className:"jumbotron mt-3",children:[Object(i.jsx)("h4",{children:"Reto"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:'Crear una aplicaci\xf3n que permita al usuario "lanzar dados\u201d \ud83c\udfb2. \u2714\ufe0f'})}),Object(i.jsx)("h4",{children:"Historias de usuario:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Los usuarios deber\xe1n poder realizar la acci\xf3n de lanzar dados. \u2714\ufe0f"}),Object(i.jsx)("li",{children:"Un dado no debe caer dos veces consecutivas en el mismo valor pero mantener la aleatoreidad en el resto de las caras. \u2714\ufe0f"})]}),Object(i.jsx)("h4",{children:"Extras"}),Object(i.jsx)("p",{children:"Extras: Cumplir con alguna, varias o todas estas funcionalidades extra te da puntos \ud83d\ude42"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Poder elegir la cantidad de caras del dado. \u2714\ufe0f"}),Object(i.jsx)("li",{children:" Poder tirar m\xfaltiples dados a la vez. \u2714\ufe0f"}),Object(i.jsx)("li",{children:"Poder tirar m\xfaltiples dados de diferentes caras a la vez."}),Object(i.jsx)("li",{children:"Poder ingresar m\xfaltiples usuarios y llevar turnos para tirar los dados as\xed como un conteo de los mismos."})]})]})]})})},j=t(9),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(e-c+1)+1)},m=function(){var e=Object(a.useState)(1),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsx)("div",{className:"btn btn-lg btn-danger",onClick:function e(){var c=b();t!==c?n(c):e()},children:Object(i.jsx)("i",{className:"fas fa-dice-".concat(["one","two","three","four","five","six"][t-1]," icon")})})}),Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsx)("div",{className:"title",children:t})})]})})},x=function(e){var c=e.title,t=e.text;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"jumbotron mt-4",children:[c,Object(i.jsx)("ul",{children:t})]})})},u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5 ",children:[Object(i.jsx)(m,{}),Object(i.jsx)(x,{title:Object(i.jsx)("h4",{children:"Uso"}),text:Object(i.jsx)("li",{children:"Pulsa sobre el dado y saldr\xe1 un n\xfamero aleatorio, pero nunca saldr\xe1 dos veces seguidas el mismo valor."})})]})})},O=function(){var e=["one","two","three","four","five","six"],c=Object(a.useState)(1),t=Object(j.a)(c,2),n=t[0],s=t[1],r=Object(a.useState)(1),l=Object(j.a)(r,2),o=l[0],d=l[1],m=function e(){var c=b();n!==c?s(c):e()},u=function e(){var c=b();o!==c?d(c):e()};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5 ",children:[Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsx)("div",{className:"btn btn-lg btn-danger",onClick:m,children:Object(i.jsx)("i",{className:"fas fa-dice-".concat(e[n-1]," icon")})})}),Object(i.jsx)("div",{className:"col d-flex align-items-center justify-content-center",children:Object(i.jsx)("div",{className:"btn btn-lg btn-success",onClick:function(){m(),u()},children:Object(i.jsx)("i",{className:"fas fa-random"})})}),Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsx)("div",{className:"btn btn-lg btn-danger",onClick:u,children:Object(i.jsx)("i",{className:"fas fa-dice-".concat(e[o-1]," icon")})})})]}),Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsx)("div",{className:"title",children:n+o})}),Object(i.jsx)(x,{title:Object(i.jsx)("h4",{children:"Uso:"}),text:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{children:"Los dados funcionan individualmente clicando sobre cada uno de ellos, o en conjunto, haciendo click sobre el boton central."}),Object(i.jsx)("li",{children:"Nunca saldr\xe1 dos veces seguidas el mismo valor en el mismo dado"})]})})]})})},h=t(23),v=t(14),N=t(15),f=function(){var e=Object(a.useState)(!1),c=Object(j.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(!1),r=Object(j.a)(s,2),l=r[0],o=r[1],d=Object(a.useState)(1),m=Object(j.a)(d,2),x=m[0],u=m[1],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object(a.useState)(e),t=Object(j.a)(c,2),n=t[0],s=t[1],r=function(){s(e)},l=function(e,c){s(Object(N.a)(Object(N.a)({},n),{},Object(v.a)({},e,c)))};return{formValues:n,handleInputChange:function(e){var c=e.target,t=c.name,a=c.type,r=c.value,l=c.checked;s(Object(N.a)(Object(N.a)({},n),{},Object(v.a)({},t,"checkbox"===a?l:r)))},setFormValues:s,reset:r,setFieldValue:l}}({numFaces:"",numDices:""}),f=O.formValues,p=O.handleInputChange,g=f.numFaces,F=f.numDices,k=function(e){e.preventDefault(),Object(h.isInt)(g)&&g>=3?n(!1):n(!0),Object(h.isInt)(F)?o(!1):o(!0),C()},C=function(){for(var e=0,c=0;c<F;c++)e+=b(g);console.log({total:e},{result:x}),u(e)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Lanzar Dados \ud83c\udfb2 "}),Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsxs)("div",{className:"col text-center",children:[Object(i.jsx)("div",{className:"btn btn-lg badge-info",onClick:k,children:Object(i.jsx)("i",{className:"fas fa-dice-d20 icon"})}),Object(i.jsx)("div",{className:"col text-center mt-2",children:Object(i.jsx)("div",{className:"text-info",children:"Caras dado: ".concat(g,"  ")||!1})})]}),Object(i.jsxs)("div",{className:"col text-center ",children:[Object(i.jsx)("div",{className:"btn btn-lg badge-info",onClick:k,children:Object(i.jsx)("i",{className:"fas fa-cubes icon"})}),Object(i.jsx)("div",{className:"col text-center mt-2",children:Object(i.jsx)("div",{className:"text-info",children:"N\xfamero de dados: ".concat(F,"  ")||!1})})]})]}),Object(i.jsx)("div",{className:"col text-center",children:Object(i.jsxs)("div",{className:"count-dices",children:["Suma total: ",x]})}),Object(i.jsx)("div",{className:"jumbotron mt-5",children:Object(i.jsxs)("form",{onSubmit:k,children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"numFaceDice",children:"N\xfamero de Caras del Dado:"}),Object(i.jsx)("input",{type:"number",className:"form-control",placeholder:"Introduce un N\xfamero de Caras para el Dado.",name:"numFaces",value:g,onChange:p,onFocus:function(){return n(!1)}})]}),t&&Object(i.jsx)("p",{className:"text-warning",children:"El n\xfamero de caras para el dado introducido, ha de ser un valor entero (n) y mayor de 3. (Si no puedes jugar con monedas \ud83e\udd2a)"})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"nunDices",children:"N\xfamero de Dados:"}),Object(i.jsx)("input",{type:"number",className:"form-control",placeholder:"Introduce el N\xfamero de Dados que deseas lanzar.",name:"numDices",value:F,onChange:p,onFocus:function(){return o(!1)}})]}),l&&Object(i.jsx)("p",{className:"text-warning",children:"El n\xfamero de dados introducido, ha de ser un valor entero."})]})]}),Object(i.jsx)("div",{className:"row justify-content-center",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-lg btn-primary",children:"Lanzar"})})]})})]})})},p=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(i.jsx)(l.a,{exact:!0,path:"/one",component:u}),Object(i.jsx)(l.a,{exact:!0,path:"/two",component:O}),Object(i.jsx)(l.a,{exact:!0,path:"/opt",component:f})]})]})};s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))},46:function(e,c,t){}},[[131,1,2]]]);
//# sourceMappingURL=main.5e6ba6e8.chunk.js.map