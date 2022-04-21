"use strict";(self.webpackChunkmm=self.webpackChunkmm||[]).push([[455],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="PO03-Pol\xedtica de Pull Requests",u={unversionedId:"Politicas/PO03",id:"Politicas/PO03",title:"PO03-Pol\xedtica de Pull Requests",description:"- Los Pull Requests deben tener la menor cantidad de cambios como sea posible. Cambios con archivos autogenerados deben tener su propio Pull Request.",source:"@site/docs/Politicas/PO03.md",sourceDirName:"Politicas",slug:"/Politicas/PO03",permalink:"/Politicas/PO03",editUrl:"https://github.com/MutateInc/manual-de-operaciones/tree/main/docs/Politicas/PO03.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PO02-Pol\xedtica de mensajes de commits",permalink:"/Politicas/PO02"},next:{title:"PO04-Pol\xedticas Departamentales",permalink:"/Politicas/PO04"}},p={},c=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Referencias",id:"referencias",level:2},{value:"Autores",id:"autores",level:2},{value:"Versiones",id:"versiones",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"po03-pol\xedtica-de-pull-requests"},"PO03-Pol\xedtica de Pull Requests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Los ",(0,l.kt)("strong",{parentName:"p"},"Pull Requests")," deben tener la menor cantidad de cambios como sea posible. Cambios con archivos autogenerados deben tener su propio ",(0,l.kt)("strong",{parentName:"p"},"Pull Request"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Los ",(0,l.kt)("strong",{parentName:"p"},"Pull Requests")," se deben abrir como borradores, con el prefijo ",(0,l.kt)("inlineCode",{parentName:"p"},"[WIP]")," (work in progress), en cuanto se haga un primer commit.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Los ",(0,l.kt)("strong",{parentName:"p"},"Pull Requests")," deben ser aprobados por al menos una persona externa a la funcionalidad siendo implementada. (Si dos personas est\xe1n trabajando juntas en una misma funcionalidad, el Pull Request NO PUEDE ser aprobado por ninguna de ellas)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Para un ",(0,l.kt)("strong",{parentName:"p"},"Pull Request")," se debe usar el mismo nombramiento que en los ",(0,l.kt)("a",{parentName:"p",href:"./PO02"},"Commits (PO02)"),", a\xf1adiendo ",(0,l.kt)("inlineCode",{parentName:"p"},"[WIP]")," al principio para Pull Requests en borrador.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La descripci\xf3n de los ",(0,l.kt)("strong",{parentName:"p"},"Pull Requests")," debe incluir un mensaje con cualquier bloqueo (otros ",(0,l.kt)("strong",{parentName:"p"},"Pull Requests")," con cambios que sean necesarios para integrar el actual) y una lista con cambios por hacer en el siguiente formato:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"[## \u26d4 Waiting on PR #<PrNo>]\n\n## Changes:\n- [ ] Cambios en lista\n\n[## Notes:]\n- [ ] Notas Adicionales\n")),(0,l.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,l.kt)("p",null,"T\xedtulo: ",(0,l.kt)("inlineCode",{parentName:"p"},"[WIP] feat(auth): \u2728 implement admin login logic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"## \u26d4\ufe0f Waiting on PR #420\n\n## Changes\n- [x] Change 1\n- [ ] Change 2\n- [ ] Change 3\n")),(0,l.kt)("p",null,"Indica que se debe intergar el Pull Request #420, y que se debe esperar a que se hagan los cambios indicados en la lista. Este Pull Request deber\xe1 ser un borrador y estar marcado como ",(0,l.kt)("inlineCode",{parentName:"p"},"[WIP]")," hasta que todos los cambios indicados hayan sido marcados."),(0,l.kt)("h2",{id:"referencias"},"Referencias"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opensource.creativecommons.org/contributing-code/pr-guidelines/"},"Creative Commons Pull Request Guidelines"))),(0,l.kt)("h2",{id:"autores"},"Autores"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.github.com/BernardoEstrada"},"@BernardoEstrada"),"   "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.github.com/MartinNoboa"},"@MartinNoboa"))),(0,l.kt)("h2",{id:"versiones"},"Versiones"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Versi\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Responsables"),(0,l.kt)("th",{parentName:"tr",align:null},"Fecha"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Creaci\xf3n de la Pol\xedtica"),(0,l.kt)("td",{parentName:"tr",align:null},"Bernardo Estrada"),(0,l.kt)("td",{parentName:"tr",align:null},"18/03/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Correcci\xf3n ortogr\xe1fica"),(0,l.kt)("td",{parentName:"tr",align:null},"Bernardo Estrada"),(0,l.kt)("td",{parentName:"tr",align:null},"23/03/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Aumentar nivel de detalle"),(0,l.kt)("td",{parentName:"tr",align:null},"BE & MN"),(0,l.kt)("td",{parentName:"tr",align:null},"04/04/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.3"),(0,l.kt)("td",{parentName:"tr",align:null},"Correcci\xf3n ortogr\xe1fica"),(0,l.kt)("td",{parentName:"tr",align:null},"Guillermo C. Espino"),(0,l.kt)("td",{parentName:"tr",align:null},"06/04/2022")))))}d.isMDXComponent=!0}}]);