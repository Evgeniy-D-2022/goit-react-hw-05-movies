"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[854],{9355:function(e,t,n){n.d(t,{M1:function(){return d},jP:function(){return f},pe:function(){return u},qH:function(){return m},yK:function(){return p}});var r=n(5861),s=n(7757),a=n.n(s),c=n(1243),i="https://api.themoviedb.org/3",o="c9873e67c5e03bd61e79d852c2fd46a6";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/trending/movie/day?api_key=").concat(o),e.prev=1,e.next=4,c.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"?api_key=").concat(o),e.prev=1,e.next=4,c.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o),e.prev=1,e.next=4,c.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o),e.prev=1,e.next=4,c.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t,n){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(n),e.prev=1,e.next=4,c.Z.get(r);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},854:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(9439),s=n(8617),a=n(1087),c="BackLink_link__Echxs",i=n(184),o=function(e){var t=e.to;e.children;return(0,i.jsxs)(a.rU,{className:c,to:t,children:[(0,i.jsx)(s.jTe,{size:"24"}),(0,i.jsx)("span",{children:"Back"})]})},u=n(8809),l=n(9355),p="MoviesDetails_moviedetails_text__hxFke",v="MoviesDetails_moviedetails_title__htWDF",d="MoviesDetails_movie_container__cDwn2",h="MoviesDetails_movie_img__CFWte",f="MoviesDetails_info__7t3XW",_="MoviesDetails_info_list__5PXJj",m="MoviesDetails_info_text__eViFk",x="MoviesDetails_info_item__UBC61",j=n(7689),k=n(2791),w=function(){var e,t,n=(0,j.UO)().id,s=(0,k.useState)({}),c=(0,r.Z)(s,2),w=c[0],g=c[1],y=(0,j.TH)(),N=(0,k.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,k.useEffect)((function(){(0,l.yK)(n).then((function(e){return g(e)}))}),[n,g]);var b=w.poster_path,Z=w.title,D=w.vote_average,M=w.overview,U=w.genres,C=w.budget;return(0,i.jsxs)("main",{children:[(0,i.jsx)(o,{to:N.current}),(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("img",{className:h,src:b&&"https://image.tmdb.org/t/p/w300".concat(b),alt:"Film Poster"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:v,children:Z}),D&&(0,i.jsxs)("p",{className:p,children:["User score: ",Math.round(10*D),"%"]}),(0,i.jsxs)("p",{className:p,children:[(0,i.jsx)("span",{children:"Owerview "}),M]}),(0,i.jsxs)("p",{className:p,children:[(0,i.jsx)("span",{children:"Genres: "}),null===U||void 0===U?void 0:U.map((function(e){return e.name})).join(", ")]}),(0,i.jsxs)("p",{className:p,children:[(0,i.jsx)("span",{children:"Budget: "}),C," USD"]})]})]}),(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("p",{className:m,children:"Info: "}),(0,i.jsxs)("ul",{className:_,children:[(0,i.jsx)("li",{className:x,children:(0,i.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,i.jsx)("li",{className:x,children:(0,i.jsx)(a.rU,{to:"reviews",children:"Review"})})]})]}),(0,i.jsx)(k.Suspense,{fallback:(0,i.jsx)(u.Z,{}),children:(0,i.jsx)(j.j3,{})})]})}}}]);
//# sourceMappingURL=854.65d89459.chunk.js.map