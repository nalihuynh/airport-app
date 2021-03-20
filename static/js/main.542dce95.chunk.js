(this["webpackJsonpairport-app"]=this["webpackJsonpairport-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(6),s=r.n(a),i=(r(11),r(12),r(13),r(0));var j=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})};r(15);var u=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},o=r(3),l=r.n(o),h=r(4),d=r(2);r(17),r(18);var b=function(e){return Object(i.jsx)("div",{className:"places",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Airport ID"}),Object(i.jsx)("th",{children:"Airport Name"}),Object(i.jsx)("th",{children:"Country ID"}),Object(i.jsx)("th",{children:"Region ID"}),Object(i.jsx)("th",{children:"City ID"}),Object(i.jsx)("th",{children:"Country Name"})]})}),Object(i.jsx)("tbody",{children:e.places.map((function(e){return Object(i.jsxs)("tr",{id:e.PlaceId,children:[Object(i.jsx)("th",{children:e.PlaceId}),Object(i.jsx)("th",{children:e.PlaceName}),Object(i.jsx)("th",{children:e.CountryId}),Object(i.jsx)("th",{children:e.RegionId}),Object(i.jsx)("th",{children:e.CityId}),Object(i.jsx)("th",{children:e.CountryName})]})}))})]})})};var O=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),j=s[0],u=s[1],o=Object(c.useState)(!1),O=Object(d.a)(o,2),p=O[0],x=O[1];return Object(i.jsxs)("div",{className:"airportinfo",children:[Object(i.jsx)("p",{children:"Enter a state, country, or city to search for your Airport"}),Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(h.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("22a05fb95emshec83bbbfcc1d494p13e716jsn7049a428551d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:j}),t);case 3:return r=e.sent,e.next=6,r.json();case 6:r=e.sent,console.log(r.Places),n(r.Places);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),x(!0),u("")},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"State, Country, or City:"}),Object(i.jsx)("input",{id:"queryInput",value:j,onChange:function(e){return u(e.target.value)},required:!0}),Object(i.jsx)("button",{className:"search",children:"Search"})]}),p?Object(i.jsx)(b,{places:r}):Object(i.jsx)(i.Fragment,{})]})};r(19),r(20);var p=function(e){function t(t){var r="";return e.carriers.forEach((function(e){e.CarrierId===t&&(r=e.Name)})),r}function r(t){var r="";return e.places.forEach((function(e){e.PlaceId===t&&(r=e.Name)})),r}return Object(i.jsx)("div",{className:"routes",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Prices"}),Object(i.jsx)("th",{children:"Origin"}),Object(i.jsx)("th",{children:"Destination"}),Object(i.jsx)("th",{children:"Departure Date"}),Object(i.jsx)("th",{children:"Carrier Name"})]})}),Object(i.jsx)("tbody",{children:e.quotes.map((function(e){return Object(i.jsxs)("tr",{id:e.QuoteId,children:[Object(i.jsx)("th",{children:e.MinPrice}),Object(i.jsx)("th",{children:r(e.OutboundLeg.OriginId)}),Object(i.jsx)("th",{children:r(e.OutboundLeg.DestinationId)}),Object(i.jsx)("th",{children:e.OutboundLeg.DepartureDate}),Object(i.jsx)("th",{children:t(e.OutboundLeg.CarrierIds[0])})]})}))})]})})};var x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),j=s[0],u=s[1],o=Object(c.useState)([]),b=Object(d.a)(o,2),O=b[0],x=b[1],f=Object(c.useState)([]),y=Object(d.a)(f,2),m=y[0],v=y[1],g=Object(c.useState)(!1),I=Object(d.a)(g,2),S=I[0],C=I[1],D=Object(c.useState)(""),q=Object(d.a)(D,2),N=q[0],k=q[1],F=Object(c.useState)(""),P=Object(d.a)(F,2),A=P[0],w=P[1],E=Object(c.useState)(""),L=Object(d.a)(E,2),U=L[0],Q=L[1],R=Object(c.useState)(""),T=Object(d.a)(R,2),B=T[0],G=T[1];return Object(i.jsxs)("div",{className:"routesinfo",children:[Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"Find origin place Airport ID and destination place Airport ID above"}),Object(i.jsxs)("li",{children:["Format outbound date as ",Object(i.jsx)("mark",{class:"red",children:'"yyyy-mm-dd", "yyyy-mm", or "anytime"'})]}),Object(i.jsxs)("li",{children:["Enter your currency as a ",Object(i.jsx)("mark",{class:"red",children:"3-Letter code "}),"(ex. USD, EUR, CAD, etc.)"]})]}),Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(h.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("22a05fb95emshec83bbbfcc1d494p13e716jsn7049a428551d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/".concat(B,"/en-US/").concat(N,"/").concat(A,"/").concat(U),t);case 3:return r=e.sent,e.next=6,r.json();case 6:r=e.sent,console.log(r),n(r.Quotes),u(r.Carriers),x(r.Places),v(r.Currencies);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),C(!0)},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"Airport ID (Origin):"}),Object(i.jsx)("input",{id:"queryInput",value:N,onChange:function(e){return k(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Airport ID (Destination):"}),Object(i.jsx)("input",{id:"queryInput",value:A,onChange:function(e){return w(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Outbound Date:"}),Object(i.jsx)("input",{id:"queryInput",value:U,onChange:function(e){return Q(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Currency:"}),Object(i.jsx)("input",{id:"queryInput",value:B,onChange:function(e){return G(e.target.value)},required:!0}),Object(i.jsx)("button",{className:"search",children:"Search"})]}),S?Object(i.jsx)(p,{quotes:r,carriers:j,places:O,currencies:m}):Object(i.jsx)(i.Fragment,{})]})};var f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{title:"Airport Flights"}),Object(i.jsx)(O,{}),Object(i.jsx)(x,{}),Object(i.jsx)(u,{title:"Nali Huynh - 2021"})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,22)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.542dce95.chunk.js.map