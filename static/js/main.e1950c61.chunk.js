(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),r=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajshekhar26.github.io/cleanfolio",j="SP",h="Shivraj Phadtare",d="Blockchain Developer",u="As a Blockchain Developer with expertise in Solidity, Ethereum, Hyperledger, and JavaScript. Experienced in smart contract development, dApps, and front-end interfaces, including ERC-20 and ERC-721 tokens. I possess a deep understanding of Hyperledger-Fabric. My focus is on innovation, providing valuable solutions to complex problems in the field of blockchain technology.",b="",m={linkedin:"https://www.linkedin.com/in/shivrajphadtare/",github:"https://github.com/shivraj203/"},p=[{name:"E-Voting Smart Contract",description:"A decentralized voting system that leverages the power of blockchain technology. Using Solidity and Ethereum, I developed a smart contract that enables voters to cast their votes securely, anonymously, and transparently.To ensure the integrity of the voting process, I implemented a range of security measures, such as multi-factor authentications.",stack:["Solidity"],sourceCode:"https://github.com/shivraj203/Voting-System"},{name:"Bank KYC-System Smart Contract",description:"Developed a smart contract that automates the KYC process, reducing the time and resources required to onboard new customers while ensuring compliance with regulatory requirements. The functionalities are, Add Request to KYC, Remove Request to KYC, Add Customer, View Customer, Modify Customer, Up Vote, Down Vote, View Bank Details, Get Complaints , Report Complaints, Add Bank, Modify Bank Voting Status, Remove Bank.",stack:["Solidity"],sourceCode:"https://github.comhttps://github.com/shivraj203/Bank-KYC-System"},{name:"Decentralized Finance Application",description:"Created an Decentralized system for P2P lending and borrow the money without any intermediaries or centralized institutions. With multiple functionalities. Using ERC-20 Token for executing the whole process.",stack:["Solidity","JavaScript","Angular"],sourceCode:"https://github.com/shivraj203/DeFi-Platform"},{name:"For More Projects",description:"Vist the GitHub Profile",stack:["Solidity","JavaScript","Angular","RectJs"],sourceCode:"https://github.com/shivraj203/"}],O=["Solidity","JavaScript","ReactJs","NodeJs","Git","Hyperledger-Fabric","HTML","CSS","Web3.js","Ether.js","Openzeppelin","Mocha.js","Chai.js","Hardhat","Truffle","Ganache"],f="shivrajphadtare.blockchain@gmail.com",x=n(16),v=n.n(x),k=n(14),g=n.n(k),N=n(18),_=n.n(N),y=n(17),C=n.n(y),S=(n(28),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(i.a)(l,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),w=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),E=n(11),P=n.n(E),R=n(19),A=n.n(R),B=(n(33),function(){var e=h,t=d,n=u,c=b,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),J=n(7),D=n.n(J),V=n(20),H=n.n(V),M=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})}),T=(n(36),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(M,{project:e},D()())}))})]}):null}),z=(n(37),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),F=n(21),I=n.n(F),Y=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(I.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/shivraj203/",className:"link footer__link",children:"Created Shivraj Phadtare"})})}),G=(n(41),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(w,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(B,{}),Object(a.jsx)(T,{}),Object(a.jsx)(z,{}),Object(a.jsx)(K,{})]}),Object(a.jsx)(Y,{}),Object(a.jsx)(q,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e1950c61.chunk.js.map