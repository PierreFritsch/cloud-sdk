(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{189:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(189)),c={},i={unversionedId:"js/features/odata/common/batch/batch-intro",id:"js/features/odata/common/batch/batch-intro",isDocsHomePage:!1,title:"batch-intro",description:"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.",source:"@site/docs/js/features/odata/common/batch/batch-intro.mdx",slug:"/js/features/odata/common/batch/batch-intro",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/batch-intro",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/batch-intro.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1605083530},u=[],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.\nThis can significantly reduce the network overhead you have to deal with when you want to execute a large number of requests."),Object(a.b)("p",null,"An OData batch request can consist of a number of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#retrieve-request"}),"retrieve requests")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#changeset"}),"changesets"),".\nThose can be combined arbitrarily."))}l.isMDXComponent=!0}}]);