"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{9355:function(e,t,r){r.d(t,{M1:function(){return f},jP:function(){return v},pe:function(){return i},qH:function(){return d},yK:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(1243),o="https://api.themoviedb.org/3",u="c9873e67c5e03bd61e79d852c2fd46a6";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(u),e.prev=1,e.next=4,s.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"/movie/").concat(t,"?api_key=").concat(u),e.prev=1,e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u),e.prev=1,e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u),e.prev=1,e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e,t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(r),e.prev=1,e.next=4,s.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},1510:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7689),a=r(1087),c={home_list:"MovieList_home_list__oYkWj",movie_img:"MovieList_movie_img__nhGcc",movie_item:"MovieList_movie_item__Q205J"},s=r(12),o=r(184),u=function(e){var t=e.movies,r=(0,n.TH)();return(0,o.jsx)("div",{className:c.home_container,children:(0,o.jsx)("ul",{className:c.home_list,children:t.map((function(e){return(0,o.jsx)("li",{className:c.movie_item,children:(0,o.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(e.id),children:(0,o.jsx)("img",{className:c.movie_img,src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):s,alt:e.title})})},e.id)}))})})}},5689:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),o=r(2791),u=r(1087),i=r(9355),p=r(2007),l=r.n(p),m="SearchBar_searchbar__xBucJ",f="SearchBar_SearchForm__J+i1a",h="SearchBar_SearchForm_button__WJfDq",v="SearchBar_SearchForm_input__-FIrC",_=r(6355),d=r(184),x=function(e){var t=e.setParams,r=(0,o.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1];return(0,d.jsx)("header",{className:m,children:(0,d.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),t(c)},children:[(0,d.jsx)("button",{type:"submit",className:h,children:(0,d.jsx)(_.U41,{size:25})}),(0,d.jsx)("input",{className:v,type:"text",name:"search",value:c,onChange:function(e){s(e.target.value.trim().toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})})},g=x;x.propType={onSubmit:l().func};var y=r(8809),Z=r(1510),b="Movies_movies_container__H3K6e",k="Movies_error_text__Q0xLy",j=function(){var e,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],p=r[1],l=(0,o.useState)(1),m=(0,a.Z)(l,2),f=m[0],h=m[1],v=(0,o.useState)(null),_=(0,a.Z)(v,2),x=_[0],j=_[1],w=(0,o.useState)(!1),S=(0,a.Z)(w,2),N=S[0],F=S[1],q=(0,u.lr)(),C=(0,a.Z)(q,2),M=C[0],B=C[1],J=null!==(e=M.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){if(""!==J){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.prev=1,e.next=4,(0,i.qH)(J,f);case 4:if(t=e.sent,0!==(r=t.results).length){e.next=8;break}return e.abrupt("return",j("Not Found ".concat(J)));case 8:p(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),j(e.t0.message);case 14:return e.prev=14,F(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[f,J]);return(0,d.jsxs)("div",{className:b,children:[(0,d.jsx)(g,{setParams:function(e){""!==e?J!==e?(h(1),p([]),j(null),F(!0),B({query:e})):alert("Try again"):alert("Empty string")}}),x&&(0,d.jsx)("div",{className:k,children:x}),0!==c.length&&""!==J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z.Z,{movies:c}),N&&(0,d.jsx)(y.Z,{})]}),N&&(0,d.jsx)(y.Z,{})]})}},12:function(e,t,r){e.exports=r.p+"static/media/not-found.630ac531e3ab36442810.JPG"}}]);
//# sourceMappingURL=689.27a6bc8f.chunk.js.map