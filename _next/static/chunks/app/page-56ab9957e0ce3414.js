(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9698:function(e,t,s){Promise.resolve().then(s.bind(s,5576))},5576:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var r=s(9268),n=s(6394),i=s.n(n),o=s(5846),a=s.n(o);function l(e){let{url:t,title:s,text:n}=e;return(0,r.jsx)(a(),{href:t,children:(0,r.jsxs)("div",{className:"p-6 max-w-sm mx-auto border dark:border-slate-800 shadow-sm hover:shadow-md duration-500 flex items-center space-x-4",children:[(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(i(),{className:"grayscale",src:"/yw-logo.png",alt:"Yw Logo",width:30,height:24,priority:!0})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xl font-medium text-black",children:s}),(0,r.jsx)("p",{className:"text-slate-500",children:n})]})]})})}var c=s(6006),d=new Map,u=new WeakMap,h=0,m=void 0;function p({threshold:e,delay:t,trackVisibility:s,rootMargin:r,root:n,triggerOnce:i,skip:o,initialInView:a,fallbackInView:l,onChange:p}={}){let[x,f]=c.useState(null),g=c.useRef(),[j,v]=c.useState({inView:!!a,entry:void 0});g.current=p,c.useEffect(()=>{let a;if(!o&&x)return a=function(e,t,s={},r=m){if(void 0===window.IntersectionObserver&&void 0!==r){let n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof s.threshold?s.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:i,elements:o}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var s;return`${t}_${"root"===t?(s=e.root)?(u.has(s)||(h+=1,u.set(s,h.toString())),u.get(s)):"0":e[t]}`}).toString(),s=d.get(t);if(!s){let r;let n=new Map,i=new IntersectionObserver(t=>{t.forEach(t=>{let s=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),n.get(t.target)?.forEach(e=>{e(s,t)})})},e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:i,elements:n},d.set(t,s)}return s}(s),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),d.delete(n))}}(x,(e,t)=>{v({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&i&&a&&(a(),a=void 0)},{root:n,rootMargin:r,threshold:e,trackVisibility:s,delay:t},l),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,x,n,r,i,o,s,l,t]);let b=j.entry?.target,y=c.useRef();x||!b||i||o||y.current===b||(y.current=b,v({inView:!!a,entry:void 0}));let w=[f,j.inView,j.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}c.Component;var x=s(8136);let f="grid md:grid-cols-12 relative",g="md:col-span-3 md:px-0 px-10 md:mt-20 md:w-[207px]",j="md:col-span-9 pl-10 md:border-l-8 border-slate-500 flex flex-wrap gap-8 my-6";function v(){let{ref:e,inView:t,entry:s}=p({threshold:1}),{ref:n,inView:o,entry:a}=p({threshold:0}),{ref:c,inView:d,entry:u}=p({threshold:0});return console.log("Page Level View : ",t),(0,r.jsxs)("main",{children:[(0,r.jsx)("section",{className:"w-full h-screen",children:(0,r.jsxs)("div",{className:"w-96 h-96   flex flex-col justify-center items-center  border-r-8 shadow-md rounded-full",children:[(0,r.jsxs)("a",{className:"flex items-center font-bold",href:"https://simpliwebdesign.com",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,r.jsx)(i(),{src:"/yw-logo.png",alt:"Yw Logo",width:100,height:24,priority:!0})]}),(0,r.jsx)("div",{className:"text-3xl",children:"Ui - Library"}),(0,r.jsx)("div",{className:"mt-10 animate-bounce",children:(0,r.jsx)(x.CSs,{})})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:f,ref:n,children:[(0,r.jsx)("div",{className:g,children:(0,r.jsxs)("h3",{className:"md:-rotate-90",children:[(0,r.jsx)("span",{children:"Section-level"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"font-bold",children:"components"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"font-bold text-sm",children:"[component-based]"})]})}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)(l,{url:"/sections",title:"Section",text:"Represents a major section of the page, such as a main content area, a feature section, or a specific functional block."}),(0,r.jsx)(l,{url:"/hero",title:"Hero",text:"Prominent sections at the top of the page that showcase important content or visuals."}),(0,r.jsx)(l,{url:"/cards",title:"Cards",text:"Sections that highlight a selection of featured products."}),(0,r.jsx)(l,{url:"/testimonials",title:"Testimonials",text:"Section that displays customer testimonials or reviews."}),(0,r.jsx)(l,{url:"/headers",title:"Header",text:"The top section of the page that typically contains branding, navigation, or other global elements."}),(0,r.jsx)(l,{url:"/sidebars",title:"Sidebar",text:"Vertical panel that provides additional navigation or content alongside the main page."}),(0,r.jsx)(l,{url:"/footer",title:"Footer",text:"The bottom section of the page that contains copyright information or other site-wide elements."}),(0,r.jsx)(l,{url:"/productlist",title:"Product List",text:"Components that render a list of products."}),(0,r.jsx)(l,{url:"/productcards",title:"Product Card",text:"Components that represent an individual product within a list."})]})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:f,ref:e,children:[(0,r.jsx)("div",{className:g,children:(0,r.jsxs)("h3",{className:"md:-rotate-90 md:mt-28",children:[(0,r.jsx)("span",{children:"Page-level"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"font-bold",children:"components"}),(0,r.jsx)("br",{})]})}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)(l,{url:"/pagemisc",title:"Miscellaneous Pages",text:"Collection of pages that can be used in any suitable page"}),(0,r.jsx)(l,{url:"/pagelanding",title:"Landing Page",text:"Represents the main page or view."}),(0,r.jsx)(l,{url:"/pageabout",title:"About us",text:"Introduction page"}),(0,r.jsx)(l,{url:"/pagecontact",title:"Contact Page",text:"Contact information and form"}),(0,r.jsx)(l,{url:"/pageblog",title:"Blog Page",text:"Blog page contents"}),(0,r.jsx)(l,{url:"/pagenews",title:"News Page",text:"News contents"}),(0,r.jsx)(l,{url:"/pageevents",title:"Events Page",text:"Events/activity contents"}),(0,r.jsx)(l,{url:"/pagegallery",title:"Gallery",text:"Gallery for images, magazines etc"}),(0,r.jsx)(l,{url:"/pagereviews",title:"Reviews",text:"Customer testimonials, reviews or feedback page"})]})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:f,ref:c,children:[(0,r.jsx)("div",{className:g,children:(0,r.jsxs)("h3",{className:"md:-rotate-90",children:[(0,r.jsx)("span",{className:"font-bold",children:"Ui"}),"-related",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"font-bold",children:"Components"})]})}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)(l,{url:"/buttons",title:"Buttons",text:"Reusable button components."}),(0,r.jsx)(l,{url:"/avatars",title:"Avatars",text:"Reusable Avatar components."}),(0,r.jsx)(l,{url:"/inputfields",title:"Input field",text:"Reusable input field components."}),(0,r.jsx)(l,{url:"/images",title:"Images",text:"Components that render a Images."}),(0,r.jsx)(l,{url:"/cssshapes",title:"CSS Shapes",text:"Making shapes with css."})]})]})})]})}},3177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(6006),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,i={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},9268:function(e,t,s){"use strict";e.exports=s(3177)},6394:function(e,t,s){e.exports=s(8707)},5846:function(e,t,s){e.exports=s(8920)},3270:function(e,t,s){"use strict";s.d(t,{w_:function(){return l},Pd:function(){return i}});var r=s(6006),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(s[r[n]]=e[r[n]]);return s};function l(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return r.createElement(t.tag,o({key:s},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var s,n=e.attr,i=e.size,l=e.title,c=a(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:s,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[141,707,920,667,488,744],function(){return e(e.s=9698)}),_N_E=e.O()}]);