(()=>{"use strict";var n={919:(n,e,a)=>{a.d(e,{A:()=>A});var i=a(354),t=a.n(i),r=a(314),o=a.n(r)()(t());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]),o.push([n.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-background: #fff;\n  --second-background: #0891b2;\n\n  --font-size-large: 2rem;\n  --font-size-medium: 1.35rem;\n  --font-size-normal: 1rem;\n  --font-size-small: 0.75rem;\n\n  --icon-size-large: 64px;\n  --icon-size-medium: 48px;\n  --icon-size-normal: 24px;\n  --icon-size-small: 16px;\n\n  --padding-large: 2rem;\n  --padding-medium: 1.5rem;\n  --padding-normal: 1rem;\n  --padding-small: 0.75rem;\n}\n\nbody {\n  font-family: 'Playfair Display', serif;\n}\n\n/* Header */\n.header {\n  position: relative;\n  padding: var(--padding-medium);\n  margin-bottom: var(--padding-large);\n}\n\n.header-bgc {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: var(--second-background);\n  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);\n  z-index: -2;\n}\n\n.about-me__img {\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: var(--padding-large);\n}\n\n.about-me .name {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  color: var(--primary-background);\n  font-size: var(--font-size-large);\n  padding-bottom: var(--padding-small);\n  z-index: 1;\n}\n\n.desc-container {\n  background-color: var(--primary-background);\n}\n\n.desc-container > h2,\n.project-container > h2 {\n  width: 100%;\n  font-size: var(--font-size-large);\n  text-align: center;\n  font-weight: normal;\n  margin-bottom: var(--padding-normal);\n}\n\n.desc-container > .desc {\n  font-size: var(--font-size-normal);\n  line-height: 1.6;\n  margin-block: var(--padding-medium);\n}\n\n.social-icons {\n  width: 100%;\n  text-align: center;\n}\n\n/* Projects */\n.main {\n  padding: var(--padding-medium);\n  margin-bottom: var(--padding-large);\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--padding-large);\n}\n\n.project {\n  border-radius: 4px;\n  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  min-height: max-content;\n  padding-bottom: calc(var(--padding-large) * 3);\n  transition: transform 0.3s ease-in-out;\n}\n\n.project:hover,\n.project:focus {\n  transform: scale(1.05);\n}\n\n.project-header {\n  overflow: hidden;\n  max-height: 300px;\n  margin-bottom: var(--padding-small);\n}\n\n.project-header > img {\n  object-fit: fill;\n}\n\n.project-main {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-inline: var(--padding-large) var(--padding-medium);\n  margin-bottom: var(--padding-small);\n}\n\n.project-title {\n  font-size: var(--font-size-medium);\n  font-weight: 600;\n}\n\n.project-reference {\n  display: flex;\n  gap: var(--padding-small);\n}\n\n.project-footer {\n  padding: var(--padding-medium);\n}\n\n.project-footer > p {\n  font-size: var(--font-size-normal);\n}\n\n/* Footer */\n.footer {\n  background-color: var(--second-background);\n}\n\n.contact-container {\n  color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.contact-container > * {\n  width: 100%;\n}\n\n.contact-content {\n  padding: var(--padding-medium);\n}\n\n.contact-title {\n  font-size: var(--font-size-large);\n  text-align: center;\n  margin-bottom: var(--padding-normal);\n}\n\n.contact-desc {\n  font-size: var(--font-size-medium);\n  margin-bottom: var(--padding-medium);\n}\n\n.contact-address {\n  font-size: var(--font-size-normal);\n  margin-bottom: var(--padding-medium);\n}\n\n.contact-phone,\n.contact-email {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.contact-phone {\n  margin-bottom: var(--padding-small);\n}\n\n.phone-number,\n.email-address {\n  font-size: var(--font-size-normal);\n}\n\n.social-icons,\n.contact-social-media {\n  display: flex;\n  justify-content: center;\n  gap: var(--padding-medium);\n  margin-block: var(--font-size-small);\n}\n\n.contact-img {\n  width: 100%;\n  overflow: hidden;\n}\n\n/* Link tags */\na {\n  text-decoration: none;\n}\n\n/* Images */\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  aspect-ratio: 1/1;\n}\n\n/* Icon */\n.icon-l {\n  width: var(--icon-size-large);\n}\n\n.icon-m {\n  width: var(--icon-size-medium);\n}\n\n.icon-n {\n  width: var(--icon-size-normal);\n}\n\n.icon-s {\n  width: var(--icon-size-small);\n}\n\n.icon {\n  transition: transform 0.2s ease-in-out;\n}\n\n.icon:hover {\n  transform: scale(1.2);\n}\n\n@media (min-width: 640px) {\n  :root {\n    --font-size-large: 2.5rem;\n    --font-size-medium: 1.75rem;\n    --font-size-normal: 1.2rem;\n    --font-size-small: 0.85rem;\n\n    --icon-size-medium: 48px;\n  }\n\n  /* Header */\n  .header {\n    padding: calc(var(--padding-large) + var(--padding-small));\n  }\n\n  .header-bgc {\n    height: 100%;\n  }\n\n  .about-me__img {\n    width: 350px;\n    height: 350px;\n    float: left;\n    border-radius: 0;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);\n    margin: -100px var(--padding-small) var(--padding-small) 0;\n    overflow: visible;\n  }\n  .desc-container {\n    margin-top: 100px;\n    margin-left: 50px;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);\n    padding: var(--padding-large);\n  }\n  .social-icons {\n    display: none;\n  }\n  .about-me .name {\n    inset: initial;\n    top: var(--padding-normal);\n    right: 0;\n    text-align: start;\n    transform: translateX(calc(100% - 3ch));\n  }\n\n  /* Main */\n  .main {\n    padding: calc(var(--padding-large) + var(--padding-small));\n    margin-bottom: calc(var(--padding-large) + var(--padding-large));\n  }\n\n  .project-container > h2 {\n    grid-column: 1/-1;\n    text-align: start;\n  }\n\n  .project-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .project-header {\n    max-height: 450px;\n  }\n\n  /* Footer */\n  .footer {\n    padding: var(--padding-medium);\n    padding-bottom: calc(var(--padding-large) + var(--padding-large));\n  }\n  .contact-container {\n    flex-wrap: nowrap;\n  }\n  .contact-social-media {\n    justify-content: flex-start;\n  }\n  .contact-title {\n    text-align: start;\n  }\n}\n\n@media (min-width: 1280px) {\n  :root {\n    --font-size-large: 3rem;\n    --font-size-medium: 2rem;\n    --font-size-normal: 1.5rem;\n    --font-size-small: 1rem;\n\n    --icon-size-normal: 42px;\n  }\n\n  /* Header */\n  .header {\n    padding: calc(var(--padding-large) + var(--padding-small));\n  }\n\n  .about-me {\n    display: flex;\n    align-items: center;\n  }\n\n  .about-me__img {\n    min-width: 600px;\n    max-width: 600px;\n    min-height: 600px;\n    max-height: 600px;\n    float: none;\n    border-radius: 0;\n    margin: 0;\n    overflow: visible;\n  }\n  .desc-container {\n    margin-left: 0;\n    margin-top: 0;\n    padding: var(--font-size-normal);\n  }\n  .desc-container > h2 {\n    text-align: start;\n  }\n  .social-icons {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .about-me .name {\n    inset: initial;\n    text-align: center;\n    transform: translateX(0);\n    left: 0;\n    bottom: 0;\n  }\n\n  /* Main */\n  .project-container {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  .project-header {\n    max-height: 500px;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-background: #fff;\n  --second-background: #0891b2;\n\n  --font-size-large: 2rem;\n  --font-size-medium: 1.35rem;\n  --font-size-normal: 1rem;\n  --font-size-small: 0.75rem;\n\n  --icon-size-large: 64px;\n  --icon-size-medium: 48px;\n  --icon-size-normal: 24px;\n  --icon-size-small: 16px;\n\n  --padding-large: 2rem;\n  --padding-medium: 1.5rem;\n  --padding-normal: 1rem;\n  --padding-small: 0.75rem;\n}\n\nbody {\n  font-family: 'Playfair Display', serif;\n}\n\n/* Header */\n.header {\n  position: relative;\n  padding: var(--padding-medium);\n  margin-bottom: var(--padding-large);\n}\n\n.header-bgc {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: var(--second-background);\n  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);\n  z-index: -2;\n}\n\n.about-me__img {\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: var(--padding-large);\n}\n\n.about-me .name {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  color: var(--primary-background);\n  font-size: var(--font-size-large);\n  padding-bottom: var(--padding-small);\n  z-index: 1;\n}\n\n.desc-container {\n  background-color: var(--primary-background);\n}\n\n.desc-container > h2,\n.project-container > h2 {\n  width: 100%;\n  font-size: var(--font-size-large);\n  text-align: center;\n  font-weight: normal;\n  margin-bottom: var(--padding-normal);\n}\n\n.desc-container > .desc {\n  font-size: var(--font-size-normal);\n  line-height: 1.6;\n  margin-block: var(--padding-medium);\n}\n\n.social-icons {\n  width: 100%;\n  text-align: center;\n}\n\n/* Projects */\n.main {\n  padding: var(--padding-medium);\n  margin-bottom: var(--padding-large);\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--padding-large);\n}\n\n.project {\n  border-radius: 4px;\n  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  min-height: max-content;\n  padding-bottom: calc(var(--padding-large) * 3);\n  transition: transform 0.3s ease-in-out;\n}\n\n.project:hover,\n.project:focus {\n  transform: scale(1.05);\n}\n\n.project-header {\n  overflow: hidden;\n  max-height: 300px;\n  margin-bottom: var(--padding-small);\n}\n\n.project-header > img {\n  object-fit: fill;\n}\n\n.project-main {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-inline: var(--padding-large) var(--padding-medium);\n  margin-bottom: var(--padding-small);\n}\n\n.project-title {\n  font-size: var(--font-size-medium);\n  font-weight: 600;\n}\n\n.project-reference {\n  display: flex;\n  gap: var(--padding-small);\n}\n\n.project-footer {\n  padding: var(--padding-medium);\n}\n\n.project-footer > p {\n  font-size: var(--font-size-normal);\n}\n\n/* Footer */\n.footer {\n  background-color: var(--second-background);\n}\n\n.contact-container {\n  color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.contact-container > * {\n  width: 100%;\n}\n\n.contact-content {\n  padding: var(--padding-medium);\n}\n\n.contact-title {\n  font-size: var(--font-size-large);\n  text-align: center;\n  margin-bottom: var(--padding-normal);\n}\n\n.contact-desc {\n  font-size: var(--font-size-medium);\n  margin-bottom: var(--padding-medium);\n}\n\n.contact-address {\n  font-size: var(--font-size-normal);\n  margin-bottom: var(--padding-medium);\n}\n\n.contact-phone,\n.contact-email {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.contact-phone {\n  margin-bottom: var(--padding-small);\n}\n\n.phone-number,\n.email-address {\n  font-size: var(--font-size-normal);\n}\n\n.social-icons,\n.contact-social-media {\n  display: flex;\n  justify-content: center;\n  gap: var(--padding-medium);\n  margin-block: var(--font-size-small);\n}\n\n.contact-img {\n  width: 100%;\n  overflow: hidden;\n}\n\n/* Link tags */\na {\n  text-decoration: none;\n}\n\n/* Images */\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  aspect-ratio: 1/1;\n}\n\n/* Icon */\n.icon-l {\n  width: var(--icon-size-large);\n}\n\n.icon-m {\n  width: var(--icon-size-medium);\n}\n\n.icon-n {\n  width: var(--icon-size-normal);\n}\n\n.icon-s {\n  width: var(--icon-size-small);\n}\n\n.icon {\n  transition: transform 0.2s ease-in-out;\n}\n\n.icon:hover {\n  transform: scale(1.2);\n}\n\n@media (min-width: 640px) {\n  :root {\n    --font-size-large: 2.5rem;\n    --font-size-medium: 1.75rem;\n    --font-size-normal: 1.2rem;\n    --font-size-small: 0.85rem;\n\n    --icon-size-medium: 48px;\n  }\n\n  /* Header */\n  .header {\n    padding: calc(var(--padding-large) + var(--padding-small));\n  }\n\n  .header-bgc {\n    height: 100%;\n  }\n\n  .about-me__img {\n    width: 350px;\n    height: 350px;\n    float: left;\n    border-radius: 0;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);\n    margin: -100px var(--padding-small) var(--padding-small) 0;\n    overflow: visible;\n  }\n  .desc-container {\n    margin-top: 100px;\n    margin-left: 50px;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);\n    padding: var(--padding-large);\n  }\n  .social-icons {\n    display: none;\n  }\n  .about-me .name {\n    inset: initial;\n    top: var(--padding-normal);\n    right: 0;\n    text-align: start;\n    transform: translateX(calc(100% - 3ch));\n  }\n\n  /* Main */\n  .main {\n    padding: calc(var(--padding-large) + var(--padding-small));\n    margin-bottom: calc(var(--padding-large) + var(--padding-large));\n  }\n\n  .project-container > h2 {\n    grid-column: 1/-1;\n    text-align: start;\n  }\n\n  .project-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .project-header {\n    max-height: 450px;\n  }\n\n  /* Footer */\n  .footer {\n    padding: var(--padding-medium);\n    padding-bottom: calc(var(--padding-large) + var(--padding-large));\n  }\n  .contact-container {\n    flex-wrap: nowrap;\n  }\n  .contact-social-media {\n    justify-content: flex-start;\n  }\n  .contact-title {\n    text-align: start;\n  }\n}\n\n@media (min-width: 1280px) {\n  :root {\n    --font-size-large: 3rem;\n    --font-size-medium: 2rem;\n    --font-size-normal: 1.5rem;\n    --font-size-small: 1rem;\n\n    --icon-size-normal: 42px;\n  }\n\n  /* Header */\n  .header {\n    padding: calc(var(--padding-large) + var(--padding-small));\n  }\n\n  .about-me {\n    display: flex;\n    align-items: center;\n  }\n\n  .about-me__img {\n    min-width: 600px;\n    max-width: 600px;\n    min-height: 600px;\n    max-height: 600px;\n    float: none;\n    border-radius: 0;\n    margin: 0;\n    overflow: visible;\n  }\n  .desc-container {\n    margin-left: 0;\n    margin-top: 0;\n    padding: var(--font-size-normal);\n  }\n  .desc-container > h2 {\n    text-align: start;\n  }\n  .social-icons {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .about-me .name {\n    inset: initial;\n    text-align: center;\n    transform: translateX(0);\n    left: 0;\n    bottom: 0;\n  }\n\n  /* Main */\n  .project-container {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  .project-header {\n    max-height: 500px;\n  }\n}\n"],sourceRoot:""}]);const A=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a="",i=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),i&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=n(e),i&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(n,a,i,t,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(i)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],a=n[3];if(!a)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(t," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function a(n){for(var a=-1,i=0;i<e.length;i++)if(e[i].identifier===n){a=i;break}return a}function i(n,i){for(var r={},o=[],A=0;A<n.length;A++){var s=n[A],c=i.base?s[0]+i.base:s[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var m=a(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var g=t(p,i);i.byIndex=A,e.splice(A,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function t(n,e){var a=e.domAPI(e);return a.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;a.update(n=e)}else a.remove()}}n.exports=function(n,t){var r=i(n=n||[],t=t||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var A=a(r[o]);e[A].references--}for(var s=i(n,t),c=0;c<r.length;c++){var d=a(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},659:n=>{var e={};n.exports=function(n,a){var i=function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}e[n]=a}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,a)=>{n.exports=function(n){var e=a.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(a){!function(n,e,a){var i="";a.supports&&(i+="@supports (".concat(a.supports,") {")),a.media&&(i+="@media ".concat(a.media," {"));var t=void 0!==a.layer;t&&(i+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),i+=a.css,t&&(i+="}"),a.media&&(i+="}"),a.supports&&(i+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function a(i){var t=e[i];if(void 0!==t)return t.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,a),r.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var i in e)a.o(e,i)&&!a.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var t=i.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=i[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),a.nc=void 0,(()=>{const n=a.p+"fc5e4e31860409484278.jpg",e=a.p+"550985caaa8859d4b95f.svg",i=a.p+"eaccfc4b453ff94aff73.svg",t=a.p+"77a2f5734999924fb343.svg",r=a.p+"3ede19ed228086e87d89.svg";function o({img:n,name:a,desc:i,source:t,livepreview:o}){return`\n    <div class="project">\n      <div class="project-header">\n        <img src="${n}" alt="${a} image" />\n      </div>\n\n      <div class="project-main">\n        <p class="project-title">${a}</p>\n\n        <div class="project-reference">\n          <a class="project-source" href="https://github.com/hieuhocit/${t}" target="_blank">\n            <img class="icon icon-n" src="${e}" alt="Github Icon" />\n          </a>\n          <a class="project-live" href="https://hieuhocit.github.io/${o}" target="_blank">\n            <img class="icon icon-n" src="${r}" alt="Open New Tab Icon" />\n          </a>\n        </div>\n      </div>\n\n      <div class="project-footer">\n        <p>${i}</p>\n      </div>\n    </div>\n  `}const A=a.p+"999ac2baedd4c4b264ac.svg",s=a.p+"788973b288e3393aa814.svg",c=a.p+"fe96eb9f6d1070e5673c.png",d=a.p+"84e82f3df851c0c69cd7.png",l=a.p+"07f5a0a39ba40a97fa58.png",m=a.p+"5240246c551158102487.png",p=a.p+"ba4ef687146f2355dd67.png",g=a.p+"62ac9be9d766e4c87e1d.png",C=a.p+"503e18371743d14a4913.png",f=a.p+"e734ac5d761661c5bf1b.png",u=a.p+"5101cd8b6764a7877cf9.png",E=a.p+"73af31bf52feeaf376b3.png",h=a.p+"cd0d6738ac122fed13fa.png",v=a.p+"5ca2f49ddaba988e50d4.png";var B=a(72),b=a.n(B),x=a(825),w=a.n(x),y=a(659),k=a.n(y),z=a(56),I=a.n(z),j=a(540),T=a.n(j),W=a(113),S=a.n(W),$=a(919),D={};D.styleTagTransform=S(),D.setAttributes=I(),D.insert=k().bind(null,"head"),D.domAPI=w(),D.insertStyleElement=T(),b()($.A,D),$.A&&$.A.locals&&$.A.locals,document.querySelector("#homepage").innerHTML=`\n    \n    <header class="header">\n      <div class="header-bgc"></div>\n      <div class="about-me">\n        <div class="about-me__img">\n          <img src="${n}" alt="Avatar">\n          <p class="name">Trần Trung Hiếu</p>\n        </div>\n\n        <div class="desc-container">\n          <h2>About me</h2>\n\n          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus maxime, minus tenetur ipsam itaque sequi ex saepe dolor quae nobis laudantium! In molestiae perferendis aut nesciunt repellendus. Rem, quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quae consequatur maiores provident mollitia assumenda, aliquid quam magni iste ipsa eius. Illo sed modi dolorum quibusdam maxime velit vel perspiciatis.</p>\n\n          <div class="social-icons">\n            <a href="https://github.com/hieuhocit" target="_blank">\n              <img class="icon icon-m" src="${e}" alt="Github Icon"/>\n            </a>\n            <a href="https://www.linkedin.com/in/trung-hi%E1%BA%BFu-tr%E1%BA%A7n-1320572a2/" target="_blank">\n              <img class="icon icon-m" src="${i}" alt="Linkedin Icon"/>\n            </a>\n            <a href="#">\n              <img class="icon icon-m" src="${t}" alt="Twitter Icon"/>\n            </a>\n          </div>\n\n        </div>\n        \n      </div>\n    </header>\n  \n    <main class="main">\n      <div class="project-container">\n        <h2>My work</h2>\n  ${o({img:c,name:"Weather Project",source:"weather_app.git",livepreview:"weather_app/",desc:"A weather app that provides real-time forecasts, including current conditions, 7-day, and 24-hour forecasts."})}\n\n  ${o({img:d,name:"Todo List Project",source:"todo-list.git",livepreview:"todo-list/",desc:'The "To-Do List" app is a simple web application for managing tasks. It allows users to add, delete, and mark tasks as completed, helping to organize daily activities efficiently.'})}\n\n  ${o({img:l,name:"Model Shop Project",source:"songoku-model-page.git",livepreview:"songoku-model-page/",desc:'The "Songoku Model Page" is a simple webpage featuring an image of Goku from Dragon Ball. The page highlights the character with basic visuals, providing fans a straightforward showcase.'})}\n  ${o({img:m,name:"Tic Tac Toe",source:"tic-tac-toe.git",livepreview:"tic-tac-toe/",desc:'The "Tic-Tac-Toe" game is a simple, web-based version of the classic two-player game. Players take turns marking Xs and Os on a 3x3 grid, aiming to align three in a row to win.'})}\n  ${o({img:p,name:"Music Player",source:"music-player.git",livepreview:"music-player/",desc:'The "Music Player" is a web-based application that allows users to play and control their favorite songs. It includes basic functionalities like play, pause, and skip, along with a simple user interface.'})}\n  ${o({img:g,name:"Admin Dashboard",source:"admin-dashboard.git",livepreview:"admin-dashboard/",desc:"This is a sleek and modern admin dashboard with an intuitive interface for managing various aspects of your application efficiently."})}\n  ${o({img:C,name:"Book Library",source:"book-library.git",livepreview:"book-library/",desc:"This is a stylish book library interface, designed for browsing and managing book collections with a user-friendly."})}\n  ${o({img:f,name:"Rock Paper Scissors",source:"rock-paper-scissors.git",livepreview:"rock-paper-scissors/",desc:"This is a fun and interactive Rock-Paper-Scissors game with a clean design."})}\n  ${o({img:u,name:"Sign Up Form",source:"sign-up-form.git",livepreview:"sign-up-form/",desc:"This GitHub repository features a sign-up form project with a clear and responsive design, focusing on user-friendly registration and form validation."})}\n  ${o({img:E,name:"Calculator",source:"calculator.git",livepreview:"calculator/",desc:"This is a straightforward and functional calculator with a clean interface, offering essential arithmetic operations in an easy-to-use format."})}\n  ${o({img:h,name:"Etch a Sketch",source:"Etch-a-Sketch.git",livepreview:"Etch-a-Sketch/",desc:"This is an interactive Etch-a-Sketch tool with a simple, engaging interface, allowing users to draw and create designs with ease."})}\n  ${o({img:v,name:"Battleship",source:"battleship.git",livepreview:"battleship/",desc:"This is a classic Battleship game with a polished interface, offering an engaging and strategic gameplay experience for users to challenge their opponents."})}\n      </div>\n    </main>\n    <footer class="footer">\n      \n    <div class="contact-container">\n      <div class="contact-content">\n\n        <h2 class="contact-title">Contact me</h2>\n        \n        <p class="contact-desc">Please get i touch if you think our work could be mutually beneficial!</p>\n        \n        <div class="contact-address">\n          <p>1234 Random Road</p>\n          <p>Random Town, California 12345</p>\n        </div>\n\n        <div class="contact-phone">\n          <img class="icon-n" src="${A}" alt="Phone Icon"/>\n          <p class="phone-number">555-555-5555</p>\n        </div>\n\n        <div class="contact-email">\n          <img class="icon-n" src="${s}" alt="Email Icon"/>\n          <p class="email-address">hieuhocit2309@gmail.com</p>\n        </div>\n\n        <div class="contact-social-media">\n          <a href="https://github.com/hieuhocit" target="_blank">\n              <img class="icon icon-l" src="${e}" alt="Github Icon"/>\n            </a>\n            <a href="https://www.linkedin.com/in/trung-hi%E1%BA%BFu-tr%E1%BA%A7n-1320572a2/" target="_blank">\n              <img class="icon icon-l" src="${i}" alt="Linkedin Icon"/>\n            </a>\n            <a href="#">\n              <img class="icon icon-l" src="${t}" alt="Twitter Icon"/>\n            </a>\n        </div>\n      </div>\n\n      <div class="contact-img">\n        <img src="${n}" alt="Contact Image"/>\n      </div>\n    </div>\n  \n    </footer>\n  `})()})();
//# sourceMappingURL=app.bundle.js.map