(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(e,t,n){__NEXT_REGISTER_PAGE("/doc",function(){return e.exports=n(221),{page:e.exports.default}})},221:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(10),o=n.n(r),a=n(0),u=n.n(a),i=(n(82),n(33)),c=n(34),s=(n(55),n(56)),l=(n(83),n(21));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).apply(this,arguments))}var n,r,f,v,w;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return u.a.createElement("div",{className:""},u.a.createElement(i.a,null),u.a.createElement("div",{className:"nav-transition"}),u.a.createElement("div",{className:"container markdown-body menu-wrap"},u.a.createElement(s.a,{prefix:"/doc",menu:this.props.menuObj,url:this.props.url}),u.a.createElement("div",{className:"container menu-body"},u.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.note.content}}))),u.a.createElement(c.a,null))}}],f=[{key:"getInitialProps",value:(v=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,l.a.get("/notes/getDoc",{key:n.id});case 3:return r=e.sent,e.next=6,l.a.get("/notes/docsList");case 6:return a=e.sent,e.abrupt("return",{note:r,menuObj:h(a)});case 8:case"end":return e.stop()}},e,this)}),w=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=v.apply(e,t);function a(e){p(o,n,r,a,u,"next",e)}function u(e){p(o,n,r,a,u,"throw",e)}a(void 0)})},function(e){return w.apply(this,arguments)})}],r&&y(n.prototype,r),f&&y(n,f),t}();function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{title:"Introduction",body:e["transform-introduction"]||[]},{title:"The Basics",body:e["transform-basics"]||[]},{title:"The Components",body:e["transform-base-components"]||[]},{title:"The Plugins",body:e["transform-plugin"]||[]}]}},56:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),o=n.n(r);n(116);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(){var e,n,r,o,u,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,p=new Array(f),y=0;y<f;y++)p[y]=arguments[y];return r=this,n=!(o=(e=i(t)).call.apply(e,[this].concat(p)))||"object"!==a(o)&&"function"!=typeof o?s(r):o,u=s(s(n)),l=function(e){return e.sort(function(e,t){return Number(e.tags[0])-Number(t.tags[0])})},(c="sortMenuItems")in u?Object.defineProperty(u,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[c]=l,n}var n,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this,t=this.props.menu||[0,1],n=this.props.url;return o.a.createElement("div",{className:"menu menu-side"},t.map(function(t,r){return o.a.createElement("div",{key:r},o.a.createElement("p",{className:"menu-label"},t.title),o.a.createElement("ul",{className:"menu-list"},e.sortMenuItems(t.body).map(function(t){var r=t.key==n.query.id?"is-active":"";return o.a.createElement("li",{key:t.key},o.a.createElement("a",{className:r,href:"/docs".concat(e.props.prefix,"/").concat(t.key)},t.title))})))}))}}])&&u(n.prototype,l),f&&u(n,f),t}()},83:function(e,t,n){"use strict";n(0),n(117)}},[[220,1,0,2]]]);