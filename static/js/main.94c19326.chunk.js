(this.webpackJsonplookas=this.webpackJsonplookas||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),i=n(2),l=n(3),s=n.n(l),o=(n(11),n(0)),u="pulsar_rise",d="pulsar_jump",j="pulsar_remove",b="cap_rise",m="cap_remove";var _,O,f,h=function(e){var t=e.mountContent,n=e.hasAllLoad,c=e.hidePreloader,a=Object(r.useState)(b),l=Object(i.a)(a,2),_=l[0],O=l[1],f=Object(r.useRef)(0),h=Object(r.useRef)(0),p=s()("preloader__cap_element",{preloader__raised_cap_element:_===b,preloader__removed_cap_element:_===m}),v=s()("preloader__pulsar",{preloader__rised_pulsar:_===u,preloader__jumped_pulsar:_===d,preloader__removed_pulsar:_===j}),x=function(e){return{left:"".concat(10*e,"%"),width:"calc(".concat(10,"% + 1px)"),animationDelay:"".concat(200*(e+3),"ms")}},g=function(){return _===b&&(f.current+=1,10===f.current)?(O(u),void t()):_!==u?_===d?(h.current+=1,void(h.current>=3&&n&&O(j))):void(_!==j?_===m&&(f.current+=1,20===f.current&&c()):O(m)):void O(d)};return Object(o.jsxs)("div",{className:"preloader",children:[Array(10).fill(!0).map((function(e,t){return Object(o.jsx)("div",{className:p,style:x(t),onAnimationEnd:g},t)})),(_===u||_===d||_===j)&&Object(o.jsx)("div",{className:v,onAnimationIteration:g,onAnimationEnd:g})]})},p=n.p+"static/media/main_back.9dfdf953.jpg",v=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function w(e,t){var n=e.title,c=e.titleId,a=g(e,v);return r.createElement("svg",x({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),_||(_=r.createElement("defs",null,r.createElement("style",null,".cls-1{fill:none;}"))),n?r.createElement("title",{id:c},n):null,O||(O=r.createElement("g",{"data-name":"Layer 2",id:"Layer_2"},r.createElement("path",{d:"M12,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L18.59,16l-7.3-7.29a1,1,0,1,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42l-8,8A1,1,0,0,1,12,25Z"}))),f||(f=r.createElement("g",{id:"frame"},r.createElement("rect",{className:"cls-1",height:32,width:32}))))}var N=r.forwardRef(w);n.p,n(13);var y=function(e){var t=e.title,n=e.text;return Object(o.jsxs)("div",{className:"deal_label",children:[Object(o.jsx)("div",{className:"deal_label__title_block",children:Object(o.jsx)("span",{className:"deal_label__title",children:t})}),Object(o.jsx)("div",{className:"deal_label__text_block",children:n})]})},L=Object(r.createContext)({});n(14);var E=function(e){var t=e.title,n=e.text,c=e.imgSource,a=e.hasSelect,i=Object(r.useContext)(L).imgLoadHandler,l=s()("deal_card",{deal_card_visible:a});return Object(o.jsxs)("div",{className:l,children:[Object(o.jsx)("img",{className:"deal_card__background",src:c,onLoad:i}),Object(o.jsx)(y,{title:t,text:n})]})},k=n.p+"static/media/design.fa2a719c.jpg",S=n.p+"static/media/decor.45754d7c.jpg",T=n.p+"static/media/restoration.5565c575.jpg",C=1023,A=1024,P="v_direction",I="h_direction",W=[{id:"des",title:"\u0414\u0438\u0437\u0430\u0439\u043d",text:"\u042f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u0438 \u0444\u0430\u0441\u0430\u0434\u043e\u0432, \u0444\u043e\u0442\u043e\u0437\u043e\u043d, \u0431\u0430\u043d\u043a\u0435\u0442\u043d\u044b\u0445 \u0438 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0445 \u0437\u0430\u043b\u043e\u0432. \u041f\u043e\u043c\u043e\u0433\u0443 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0446\u0432\u0435\u0442 \u0438 \u0444\u043e\u0440\u043c\u0443 \u0432\u0441\u0435\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f, \u0432\u044b\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0443\u0437\u043d\u0430\u0432\u0430\u0435\u043c\u044b\u0439 \u0435\u0434\u0438\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c \u0432\u0438\u0437\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u043e\u0439 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430.",imgSource:k},{id:"dec",title:"\u0414\u0435\u043a\u043e\u0440",text:"\u0412 \u0434\u0435\u043a\u043e\u0440\u0435, \u0431\u0443\u0434\u044c \u0442\u043e \u0434\u0435\u043a\u043e\u0440 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u0435\u0431\u0435\u043b\u0438 \u0438\u043b\u0438 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u0432 \u0446\u0435\u043b\u043e\u043c, \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b: \u0434\u0435\u0440\u0435\u0432\u043e, \u043a\u0430\u0440\u0442\u043e\u043d, \u043f\u0435\u043d\u043e\u043f\u043b\u0430\u0441\u0442, \u043f\u043e\u043b\u0438\u043c\u0435\u0440\u043d\u0443\u044e \u0433\u043b\u0438\u043d\u0443, \u0430\u043a\u0440\u0438\u043b\u043e\u0432\u044b\u0435 \u043a\u0440\u0430\u0441\u043a\u0438, \u0446\u0435\u043c\u0435\u043d\u0442, \u043c\u0435\u0442\u0430\u043b\u043b \u0438 \u043c\u043d\u043e\u0433\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435. \u042f \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u0434\u0445\u043e\u0436\u0443 \u043a \u0434\u0435\u043b\u0443 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438 \u0438 \u0441\u043f\u0435\u0440\u0432\u0430 \u0441\u0442\u0430\u0440\u0430\u044e\u0441\u044c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u0445 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430,\u0430 \u043f\u043e\u0442\u043e\u043c \u0443\u0436\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0435\u043c\u0443 \u0447\u0442\u043e-\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435!",imgSource:S},{id:"res",title:"\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f",text:"\u042f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u0435\u0439 \u043c\u0435\u0431\u0435\u043b\u0438 \u0441\u0430\u043c\u043e\u0433\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u043d\u0430: \u0448\u043a\u0430\u0444\u044b, \u043a\u043e\u043c\u043e\u0434\u044b, \u0441\u0442\u043e\u043b\u044b, \u0441\u0442\u0443\u043b\u044c\u044f, \u0441\u0435\u0440\u0432\u0430\u043d\u0442\u044b \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435.\u041f\u043e\u043c\u043e\u0433\u0443 \u0432\u0434\u043e\u0445\u043d\u0443\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0436\u0438\u0437\u043d\u044c \u0432 \u0432\u0430\u0448\u0438 \u0432\u0435\u0449\u0438 \u0438 \u043f\u0440\u0438\u0434\u0430\u0442\u044c \u0438\u043c \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u043e\u0432\u044b\u0439 \u0441\u0430\u043c\u043e\u0431\u044b\u0442\u043d\u044b\u0439 \u0432\u0438\u0434 \u0442\u0430\u043a, \u0447\u0442\u043e \u043e\u043d\u0438 \u0441 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u0432\u043f\u0438\u0448\u0443\u0442\u0441\u044f \u0432 \u0432\u0430\u0448\u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440 \u0438 \u0441\u0442\u0430\u043d\u0443\u0442 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0435\u0433\u043e \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435\u043c.",imgSource:T}];n(15);var H=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useContext)(L).line;Object(r.useEffect)((function(){a>200&&c(null)}),[a]);var l=function(e){return s()("deal_menu__item",{deal_menu_selected_item:e===n})};return Object(o.jsxs)(o.Fragment,{children:[W.map((function(e){var t=e.id,r=e.title,c=e.text,a=e.imgSource;return Object(o.jsx)(E,{title:r,text:c,imgSource:a,hasSelect:n===t},t)})),Object(o.jsx)("ul",{className:"deal_menu",children:W.map((function(e){var t=e.id,r=e.title;return Object(o.jsx)("li",{className:l(t),onClick:function(){return function(e){c(e!==n?e:null)}(t)},children:r},t)}))})]})};n(16);var R=function(){var e=Object(r.useContext)(L).imgLoadHandler;return Object(o.jsxs)("section",{className:"main",children:[Object(o.jsx)("img",{src:p,className:"main__back",onLoad:e}),Object(o.jsx)("h1",{className:"main__title",children:"Tanya Lookas"}),Object(o.jsx)(N,{className:"main__arrow"}),Object(o.jsx)(H,{})]})},z=n.p+"static/media/avatar.d67961c0.jpg",B=n.p+"static/media/wl.4bdb30f8.jpg";n(17);var F=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useContext)(L),l=a.line,u=a.imgLoadHandler;Object(r.useEffect)((function(){l>300&&c(!0)}),[l]);var d=s()("about__image_block",{about__image_block_rised:n});return Object(o.jsxs)("section",{className:"about",children:[Object(o.jsxs)("div",{className:d,children:[Object(o.jsx)("img",{className:"about__avatar",src:z,onLoad:u}),Object(o.jsx)("img",{className:"about__wl",src:B,onLoad:u})]}),Object(o.jsxs)("div",{className:"about__title_block",children:[Object(o.jsx)("h1",{className:"about__big_title",children:"\u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0432\u0435\u0442, \u044f Tanya Lookas!"}),Object(o.jsx)("h2",{className:"about__small_title",children:"\u042f \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440-\u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0442\u043e\u0440 \u0441 \u0434\u0435\u0441\u044f\u0442\u0438\u043b\u0435\u0442\u043d\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(o.jsx)("h2",{className:"about__small_title",children:'\u0420\u0443\u043a\u043e\u0432\u043e\u0436\u0443 \u0441\u0442\u0443\u0434\u0438\u0435\u0439 \u0434\u0435\u043a\u043e\u0440\u0430 "\u0411\u0435\u043b\u044b\u0439 \u043b\u0451\u043d"'}),Object(o.jsx)("a",{className:"about__wl_anchor",href:"https://vk.com/whitelinen_snk",children:"White linen"})]})]})};n(18);var J=function(){return Object(o.jsxs)("section",{className:"materials",children:[Object(o.jsx)("h1",{children:"\u042f \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0441 \u0441\u0430\u043c\u044b\u043c\u0438 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438"}),Object(o.jsx)("p",{children:"\u041a\u0430\u0440\u0442\u043e\u043d. \u0413\u0438\u043f\u0441. \u0428\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430. \u041f\u043e\u043b\u0438\u043c\u0435\u0440\u043d\u0430\u044f \u0433\u043b\u0438\u043d\u0430. \u0410\u043a\u0440\u0438\u043b. \u041f\u0435\u043d\u043e\u043f\u043b\u0430\u0441\u0442. \u041c\u0435\u0442\u0430\u043b\u043b. \u0414\u0435\u0440\u0435\u0432\u043e. \u0418 \u044d\u0442\u043e \u0434\u0430\u043b\u0435\u043a\u043e \u043d\u0435 \u0432\u0441\u0451... ;)"})]})};n(19);var M=function(){return Object(o.jsxs)("section",{className:"command",children:[Object(o.jsx)("h1",{children:"\u0412\u043e\u043a\u0440\u0443\u0433 \u043c\u0435\u043d\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432"}),Object(o.jsx)("p",{children:"\u042f \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0441 \u0444\u043b\u043e\u0440\u0438\u0441\u0442\u0430\u043c\u0438, \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0430\u043c\u0438, \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438, \u043e\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u043c\u0438, \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0430\u043c\u0438, \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c\u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u0430\u043c\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430"})]})};n(20);var D=function(){return Object(o.jsxs)("section",{className:"learn",children:[Object(o.jsx)("h1",{children:"\u042f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0440\u043e\u043a\u0430\u0447\u0438\u0432\u0430\u044e \u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438"}),Object(o.jsx)("p",{children:"\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u044e \u0432 \u0441\u0435\u043c\u0438\u043d\u0430\u0440\u0430\u0445, \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f\u0445, \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u0430\u0445. \u0423\u0447\u0443\u0441\u044c \u0441\u0430\u043c\u0430 \u0438 \u0443\u0447\u0443 \u0434\u0440\u0443\u0433\u0438\u0445."})]})};n(21);var Y=function(){return Object(o.jsxs)("section",{className:"contacts",children:[Object(o.jsx)("h1",{children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u043c\u043d\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0442\u0443\u0442"}),Object(o.jsx)("p",{children:"...\u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0441\u044b\u043b\u043e\u043a \u043d\u0430 vk, instagram, telegram, whatsapp, email..."})]})},Z=(n(22),"full_line");var q=function(e){var t=e.title,n=e.lineType,r=s()("separator__line",{separator__line_full_line:n===Z,separator__short_full_line:"large_line"===n});return Object(o.jsxs)("div",{className:"separator",children:[Object(o.jsx)("div",{className:r}),Object(o.jsx)("span",{className:"separator__title",children:t})]})},G=n(5);function K(e){return e<=C?P:e>=A?I:null}n(23);var Q=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],l=Object(r.useState)(!0),s=Object(i.a)(l,2),u=s[0],d=s[1],j=Object(r.useState)(0),b=Object(i.a)(j,2),m=b[0],_=b[1],O=function(e,t){var n=Object(r.useState)({line:0,direction:K(window.innerWidth)}),c=Object(i.a)(n,2),a=c[0],l=c[1];return Object(r.useEffect)((function(){if(e.current){var n=window.innerWidth;return e.current.addEventListener("mousewheel",r),e.current.addEventListener("scroll",a),window.addEventListener("resize",c),function(){e.current.removeEventListener("mousewheel",r),e.current.removeEventListener("scroll",a),window.removeEventListener("resize",c)}}function r(n){if(t&&!(window.innerWidth<=C)){var r=n.deltaY;r<0&&c(-2),r>0&&c(2)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.current.scrollLeft;e.current.scrollLeft+=t,e.current.scrollLeft!==r&&n<30&&setTimeout((function(){return c(t,n+1)}),10)}}function c(){var t=window.innerWidth;(n<=C&&t>=A||n>=A&&t<=C)&&(e.current.scrollLeft=0,e.current.scrollTop=0),n=t,l({line:0,direction:K(t)})}function a(){var t=e.current.scrollTop+e.current.scrollLeft;l((function(e){return Object(G.a)(Object(G.a)({},e),{},{line:t})}))}}),[t]),a}(e,!u),f=O.line,p=O.direction;return Object(o.jsxs)("div",{className:"app",ref:e,style:u?{overflow:"hidden"}:{},children:[Object(o.jsx)(L.Provider,{value:{hasPreloader:u,line:f,direction:p,imgLoadHandler:function(){return _((function(e){return e+1}))}},children:c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(R,{}),Object(o.jsx)(q,{title:"01",lineType:Z}),Object(o.jsx)(F,{}),Object(o.jsx)(q,{title:"02",lineType:Z}),Object(o.jsx)(J,{}),Object(o.jsx)(q,{title:"03",lineType:Z}),Object(o.jsx)(M,{}),Object(o.jsx)(q,{title:"04",lineType:Z}),Object(o.jsx)(D,{}),Object(o.jsx)(q,{title:"05",lineType:Z}),Object(o.jsx)(Y,{})]})}),u&&Object(o.jsx)(h,{mountContent:function(){return a(!0)},hasAllLoad:6===m,hidePreloader:function(){return d(!1)}})]})};n(24);Object(a.render)(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Q,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.94c19326.chunk.js.map