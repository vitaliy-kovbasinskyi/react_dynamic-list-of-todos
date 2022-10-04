(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(6),l=c(5),i=c(2),d=c(3),r=c.n(d),o=c(1),j=(c(14),c(15),c(8)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.getUser,s=e.startTodoLoading;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(),c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},O=function(e){var t=e.selectHandler,c=e.searchHandler,s=e.searchHandlerReset,a=Object(o.useState)(""),n=Object(i.a)(a,2),l=n[0],d=n[1];return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:t,children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:l,onChange:function(e){c(e),d(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),l.length>0&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s(),d("")}})})]})]})},m=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t,c,s=e.todoLoading,a=e.selectedTodo,n=e.closeSelectedTodo;return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),s?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:n})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:null===a||void 0===a||null===(t=a.user)||void 0===t?void 0:t.email,children:null===a||void 0===a||null===(c=a.user)||void 0===c?void 0:c.name})]})]})]})]})};function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p=function(){return f("/todos")},v=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)([]),d=Object(i.a)(a,2),j=d[0],u=d[1],v=Object(o.useState)(!0),N=Object(i.a)(v,2),y=N[0],g=N[1],k=Object(o.useState)(null),S=Object(i.a)(k,2),w=S[0],T=S[1],C=Object(o.useState)(!1),H=Object(i.a)(C,2),L=H[0],_=H[1],E=Object(o.useState)(""),B=Object(i.a)(E,2),I=B[0],A=B[1],J=Object(o.useState)(""),P=Object(i.a)(J,2),R=P[0],U=P[1],F=function(){var e=Object(l.a)(r.a.mark((function e(t){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=t.userId,f("/users/".concat(a));case 2:c=e.sent,s=Object(n.a)(Object(n.a)({},t),{},{user:c}),T(s),_(!1);case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();function q(){return(q=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,s(t),u(t),g(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){q.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){!function(e,t){var s=c;"active"===e?s=s.filter((function(e){return!e.completed})):"completed"===e?s=s.filter((function(e){return e.completed})):"all"===e&&(s=c),u(s.filter((function(e){return e.title.includes(t)})))}(I,R)}),[I,R]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(O,{selectHandler:function(e){A(e.target.value)},searchHandler:function(e){U(e.target.value)},searchHandlerReset:function(){U("")}})}),Object(b.jsxs)("div",{className:"block",children:[y&&Object(b.jsx)(m,{}),c.length>0&&Object(b.jsx)(h,{todos:j,getUser:F,startTodoLoading:function(){_(!0)}})]})]})})}),(null!==w||L)&&Object(b.jsx)(x,{todoLoading:L,selectedTodo:w,closeSelectedTodo:function(){T(null)}})]})};a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.618d5a2e.chunk.js.map