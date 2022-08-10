(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(4),c=n.n(s),o=n(2),a=n(1),i=(n(9),n(10),n(11),n(0)),l=function(e){var t=e.posts,n=e.setSelectedPostId,s=e.selectedPostId;return Object(i.jsxs)("div",{className:"PostsList",children:[Object(i.jsx)("h2",{children:"Posts:"}),Object(i.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:t.map((function(e){return Object(i.jsxs)("li",{className:"PostsList__item",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void n(s===t?null:t);var t},children:s===e.id?"Close":"Open"})]},e.id)}))})]})},r="https://mate.academy/students-api",u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(r).concat(e),t).then((function(e){if(!e.ok)throw new Error;return e.json()}))},j=function(){return u("/posts")};n(13);var d=function(e){var t=e.selectedPostId,n=e.loadComments,s=Object(a.useState)(""),c=Object(o.a)(s,2),l=c[0],r=c[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),m=d[0],b=d[1],h=Object(a.useState)(""),O=Object(o.a)(h,2),p=O[0],f=O[1],x=function(e){return u("/comments?postId=".concat(e),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:l,email:m,body:p,postId:e})}).then((function(){n(),r(""),b(""),f("")}))};return Object(i.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),x(t)},children:[Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:l,onChange:function(e){return r(e.target.value)}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:m,onChange:function(e){return b(e.target.value)}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:p,onChange:function(e){return f(e.target.value)}})}),Object(i.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},m=(n(14),function(e){var t=e.selectedPostId,n=Object(a.useState)(!0),s=Object(o.a)(n,2),c=s[0],l=s[1],r=Object(a.useState)(null),j=Object(o.a)(r,2),m=j[0],b=j[1],h=Object(a.useState)([]),O=Object(o.a)(h,2),p=O[0],f=O[1],x=function(){var e;(e=t,u("/comments?postId=".concat(e))).then((function(e){return f(e)}))};return Object(a.useEffect)((function(){var e;(e=t,u("/posts/".concat(e))).then((function(e){return b(e)})),x()}),[t]),Object(i.jsxs)("div",{className:"PostDetails",children:[Object(i.jsx)("h2",{children:"Post details:"}),Object(i.jsx)("section",{className:"PostDetails__post",children:m&&Object(i.jsx)("p",{children:m.title})}),Object(i.jsxs)("section",{className:"PostDetails__comments","data-cy":"postList",children:[Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return l(!c)},children:c?"Hide comments":"Show comments"}),c&&Object(i.jsxs)("ul",{className:"PostDetails__list",children:[p.map((function(e){return Object(i.jsxs)("li",{className:"PostDetails__list-item",children:[Object(i.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return t=e.id,u("/comments/".concat(t),{method:"DELETE"}).then((function(){return x()}));var t},children:"X"}),Object(i.jsx)("p",{children:e.body})]},e.id)})),0===p.length&&"No comments yet"]})]}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(i.jsx)(d,{selectedPostId:t,loadComments:x})})})]})}),b=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(o.a)(c,2),d=r[0],b=r[1],h=Object(a.useState)(null),O=Object(o.a)(h,2),p=O[0],f=O[1];return Object(a.useEffect)((function(){j().then((function(e){return b(e)}))}),[]),Object(a.useMemo)((function(){var e;0===n?j().then((function(e){return b(e)})):(e=n,u("/posts?userId=".concat(e))).then((function(e){return b(e)}))}),[n]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App__header",children:Object(i.jsxs)("label",{children:["Select a user: \xa0",Object(i.jsxs)("select",{className:"App__user-selector",value:n,onChange:function(e){s(+e.target.value),f(null)},children:[Object(i.jsx)("option",{value:"0",children:"All users"}),Object(i.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(i.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(i.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(i.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(i.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(i.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(i.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(i.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(i.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(i.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(i.jsxs)("main",{className:"App__main",children:[Object(i.jsx)("div",{className:"App__sidebar",children:Object(i.jsx)(l,{posts:d,setSelectedPostId:function(e){return f(e)},selectedPostId:p})}),Object(i.jsx)("div",{className:"App__content",children:p&&Object(i.jsx)(m,{selectedPostId:p})})]})]})};c.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f26cdad8.chunk.js.map