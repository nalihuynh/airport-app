(this["webpackJsonpairport-app"]=this["webpackJsonpairport-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(11),n(12),n(13),n(0));var j=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})};n(15);var o=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},h=n(4),u=n.n(h),l=n(6),d=n(2);n(17),n(18);var b=function(e){return Object(i.jsx)("div",{className:"places",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Airport ID"}),Object(i.jsx)("th",{children:"Airport Name"}),Object(i.jsx)("th",{children:"Country ID"}),Object(i.jsx)("th",{children:"Region ID"}),Object(i.jsx)("th",{children:"City ID"}),Object(i.jsx)("th",{children:"Country Name"})]})}),Object(i.jsx)("tbody",{children:e.places.map((function(e){return Object(i.jsxs)("tr",{id:e.PlaceId,children:[Object(i.jsx)("th",{children:e.PlaceId}),Object(i.jsx)("th",{children:e.PlaceName}),Object(i.jsx)("th",{children:e.CountryId}),Object(i.jsx)("th",{children:e.RegionId}),Object(i.jsx)("th",{children:e.CityId}),Object(i.jsx)("th",{children:e.CountryName})]})}))})]})})};var p=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),j=a[0],o=a[1],h=Object(c.useState)(!1),p=Object(d.a)(h,2),O=p[0],x=p[1];return Object(i.jsxs)("div",{className:"airportinfo",children:[Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("22a05fb95emshec83bbbfcc1d494p13e716jsn7049a428551d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},"SFO-sky","ORD-sky","anytime",e.next=6,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/".concat("SFO-sky","/").concat("ORD-sky","/").concat("anytime"),t);case 6:return n=e.sent,e.next=9,n.json();case 9:n=e.sent,console.log(n.Places),r(n.Places);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),x(!0),o("")},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"State or Country:"}),Object(i.jsx)("input",{id:"queryInput",value:j,onChange:function(e){return o(e.target.value)},required:!0}),Object(i.jsx)("button",{className:"search",children:"Submit"})]}),O?Object(i.jsx)(b,{places:n}):Object(i.jsx)(i.Fragment,{})]})};var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{title:"Airport Info"}),Object(i.jsx)(p,{}),Object(i.jsx)(o,{title:"2020"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}],[[19,1,2]]]);
//# sourceMappingURL=main.d77a18b3.chunk.js.map