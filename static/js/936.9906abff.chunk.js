"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{9355:function(t,e,n){n.d(e,{M1:function(){return f},jP:function(){return v},pe:function(){return u},qH:function(){return d},yK:function(){return l}});var r=n(5861),c=n(7757),a=n.n(c),o=n(1243),i="https://api.themoviedb.org/3",s="c9873e67c5e03bd61e79d852c2fd46a6";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"/trending/movie/day?api_key=").concat(s),t.prev=1,t.next=4,o.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"?api_key=").concat(s),t.prev=1,t.next=4,o.Z.get(n);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s),t.prev=1,t.next=4,o.Z.get(n);case 4:return r=t.sent,t.abrupt("return",r.data.cast);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s),t.prev=1,t.next=4,o.Z.get(n);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function d(t,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e,n){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=").concat(n),t.prev=1,t.next=4,o.Z.get(r);case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}},1510:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(7689),c=n(1087),a={home_list:"MovieList_home_list__oYkWj",movie_img:"MovieList_movie_img__nhGcc",movie_item:"MovieList_movie_item__Q205J"},o=n(12),i=n(184),s=function(t){var e=t.movies,n=(0,r.TH)();return(0,i.jsx)("div",{className:a.home_container,children:(0,i.jsx)("ul",{className:a.home_list,children:e.map((function(t){return(0,i.jsx)("li",{className:a.movie_item,children:(0,i.jsx)(c.rU,{state:{from:n},to:"/movies/".concat(t.id),children:(0,i.jsx)("img",{className:a.movie_img,src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):o,alt:t.title})})},t.id)}))})})}},4936:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(9439),c=n(2791),a=n(7689),o=n(9355),i="Home_home_container__-C8Dm",s="Home_home_title__Whyko",u=n(1510),p=n(184),l=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],l=e[1],m=(0,a.TH)();return(0,c.useEffect)((function(){(0,o.pe)().then((function(t){return l(t.results)}))}),[]),(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("h1",{className:s,children:"Tranding today"}),(0,p.jsx)(u.Z,{movies:n,location:m})]})}},12:function(t,e,n){t.exports=n.p+"static/media/not-found.630ac531e3ab36442810.JPG"}}]);
//# sourceMappingURL=936.9906abff.chunk.js.map