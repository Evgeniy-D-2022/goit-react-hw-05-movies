"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{9355:function(e,t,n){n.d(t,{M1:function(){return v},jP:function(){return d},pe:function(){return i},qH:function(){return m},yK:function(){return l}});var r=n(5861),c=n(7757),a=n.n(c),u=n(1243),s="https://api.themoviedb.org/3",o="c9873e67c5e03bd61e79d852c2fd46a6";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/trending/movie/day?api_key=").concat(o),e.prev=1,e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"?api_key=").concat(o),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(n),e.prev=1,e.next=4,u.Z.get(r);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},2168:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(9439),c=n(7689),a={review_text:"Reviews_review_text__n65C+"},u=n(2791),s=n(9355),o=n(184),i=function(){var e=(0,c.UO)().id,t=(0,u.useState)([]),n=(0,r.Z)(t,2),i=n[0],p=n[1];return(0,u.useEffect)((function(){(0,s.jP)(e).then((function(e){return p(e)}))}),[e]),(0,o.jsx)("div",{className:a.review_wrap,children:i.length>0?(0,o.jsx)("ul",{className:a.review_list,children:i.map((function(e){var t=e.content,n=e.author,r=e.id;return(0,o.jsxs)("li",{className:a.review_item,children:[(0,o.jsxs)("p",{className:a.review_text,children:["Author: ",n]}),(0,o.jsx)("p",{className:a.review_text,children:t})]},r)}))}):"Not review"})}}}]);
//# sourceMappingURL=168.14f9bb81.chunk.js.map