(this["webpackJsonpairport-app"]=this["webpackJsonpairport-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),s=n.n(a),i=(n(11),n(12),n(13),n(0));var u=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})};n(15);var j=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},o=n(3),h=n.n(o),d=n(4),b=n(2);n(17),n(18);var l=function(e){return Object(i.jsx)("div",{className:"places",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Airport ID"}),Object(i.jsx)("th",{children:"Airport Name"}),Object(i.jsx)("th",{children:"Country ID"}),Object(i.jsx)("th",{children:"Region ID"}),Object(i.jsx)("th",{children:"City ID"}),Object(i.jsx)("th",{children:"Country Name"})]})}),Object(i.jsx)("tbody",{children:e.places.map((function(e){return Object(i.jsxs)("tr",{id:e.PlaceId,children:[Object(i.jsx)("th",{children:e.PlaceId}),Object(i.jsx)("th",{children:e.PlaceName}),Object(i.jsx)("th",{children:e.CountryId}),Object(i.jsx)("th",{children:e.RegionId}),Object(i.jsx)("th",{children:e.CityId}),Object(i.jsx)("th",{children:e.CountryName})]})}))})]})})};var O=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),u=s[0],j=s[1],o=Object(r.useState)(!1),O=Object(b.a)(o,2),p=O[0],x=O[1];return Object(i.jsxs)("div",{className:"airportinfo",children:[Object(i.jsx)("p",{children:"Enter a state, country, or city to search for your Airport"}),Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("22a05fb95emshec83bbbfcc1d494p13e716jsn7049a428551d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:u}),t);case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(n.Places),c(n.Places);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),x(!0),j("")},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"State, Country, or City:"}),Object(i.jsx)("input",{id:"queryInput",value:u,onChange:function(e){return j(e.target.value)},required:!0}),Object(i.jsx)("button",{className:"search",children:"Search"})]}),p?Object(i.jsx)(l,{places:n}):Object(i.jsx)(i.Fragment,{})]})};n(19),n(20);var p=function(e){function t(t){var n="";return e.carriers.forEach((function(e){e.CarrierId===t&&(n=e.Name)})),n}function n(t){var n="";return e.places.forEach((function(e){e.PlaceId===t&&(n=e.Name)})),n}return Object(i.jsx)("div",{className:"routes",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Prices"}),Object(i.jsx)("th",{children:"Origin"}),Object(i.jsx)("th",{children:"Destination"}),Object(i.jsx)("th",{children:"Departure Date"}),Object(i.jsx)("th",{children:"Carrier Name"})]})}),Object(i.jsx)("tbody",{children:e.quotes.map((function(e){return Object(i.jsxs)("tr",{id:e.QuoteId,children:[Object(i.jsx)("th",{children:e.MinPrice}),Object(i.jsx)("th",{children:n(e.OutboundLeg.OriginId)}),Object(i.jsx)("th",{children:n(e.OutboundLeg.DestinationId)}),Object(i.jsx)("th",{children:e.OutboundLeg.DepartureDate}),Object(i.jsx)("th",{children:t(e.OutboundLeg.CarrierIds[0])})]})}))})]})})};var x=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),u=s[0],j=s[1],o=Object(r.useState)([]),l=Object(b.a)(o,2),O=l[0],x=l[1],f=Object(r.useState)([]),y=Object(b.a)(f,2),m=y[0],v=y[1],g=Object(r.useState)(!1),I=Object(b.a)(g,2),S=I[0],C=I[1],D=Object(r.useState)(""),q=Object(b.a)(D,2),N=q[0],k=q[1],P=Object(r.useState)(""),F=Object(b.a)(P,2),A=F[0],w=F[1],L=Object(r.useState)(""),E=Object(b.a)(L,2),U=E[0],Q=E[1],T=Object(r.useState)(""),R=Object(b.a)(T,2),B=R[0],G=R[1];return Object(i.jsxs)("div",{className:"routesinfo",children:[Object(i.jsx)("p",{children:'Enter your origin place Airport ID and destination place Airport ID, then enter your outbound date as "yyyy-mm-dd" or "anytime"'}),Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("22a05fb95emshec83bbbfcc1d494p13e716jsn7049a428551d"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/".concat(B,"/en-US/").concat(N,"/").concat(A,"/").concat(U),t);case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(n),c(n.Quotes),j(n.Carriers),x(n.Places),v(n.Currencies);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),C(!0)},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"Airport ID (Origin):"}),Object(i.jsx)("input",{id:"queryInput",value:N,onChange:function(e){return k(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Airport ID (Destination):"}),Object(i.jsx)("input",{id:"queryInput",value:A,onChange:function(e){return w(e.target.value)},required:!0}),Object(i.jsx)("span",{id:"newline"}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Outbound Date (yyyy-mm-dd):"}),Object(i.jsx)("input",{id:"queryInput",value:U,onChange:function(e){return Q(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"queryInput",children:"Currency (3-Letter Code):"}),Object(i.jsx)("input",{id:"queryInput",value:B,onChange:function(e){return G(e.target.value)},required:!0}),Object(i.jsx)("button",{className:"search",children:"Search"})]}),S?Object(i.jsx)(p,{quotes:n,carriers:u,places:O,currencies:m}):Object(i.jsx)(i.Fragment,{})]})};var f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{title:"Airport App"}),Object(i.jsx)(O,{}),Object(i.jsx)(x,{}),Object(i.jsx)(j,{title:"2021"})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.dbdb719c.chunk.js.map