(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__Xse80",total:"Cart_total__-9Nfa",actions:"Cart_actions__1WPDx","button--alt":"Cart_button--alt__1TTNq",button:"Cart_button__2GxZA"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1t8ey",summary:"CartItem_summary__1-i1u",price:"CartItem_price__28YB_",amount:"CartItem_amount__25qLT",actions:"CartItem_actions__f-gGU"}},,,function(e,t,n){e.exports={button:"CartButton_button__3E2N-",icon:"CartButton_icon__3Kjtp",badge:"CartButton_badge__2VTz4",bump:"CartButton_bump__1Kt73"}},,function(e,t,n){e.exports={meal:"MealItem_meal__JWOQa",description:"MealItem_description__1HCch",price:"MealItem_price__2gKJo"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2IygY",modal:"Modal_modal__1ikba","slide-down":"Modal_slide-down__TOQ5F"}},,function(e,t,n){e.exports={header:"Header_header__KJ2gN","main-image":"Header_main-image__khwRH"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2SyZy"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__yTRSc","meals-appear":"AvailableMeals_meals-appear__3ZoTW"}},function(e,t,n){e.exports={card:"Card_card__2miZo"}},function(e,t,n){e.exports={input:"Input_input__3_UbA"}},function(e,t,n){e.exports={form:"MealItemForm_form__38iMf"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpg",l=n(13),m=n.n(l),u=n(8),d=n.n(u),j=n(0);var b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})},x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}});var O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(x).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:d.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:d.a.badge,children:o})]})};var h=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)("header",{className:m.a.header,children:[Object(j.jsx)("h1",{children:"OrderMeals"}),Object(j.jsx)(O,{onClick:e.showCart})]}),Object(j.jsx)("div",{className:m.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"A table full of delicious food!"})})]})},p=n(15),_=n.n(p);var f=function(){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(17),N=n.n(g);var y=function(e){return Object(j.jsx)("div",{className:"".concat(N.a.card," ").concat(e.className),children:e.children})},I=n(10),k=n.n(I),A=n(2),M=n(18),w=n.n(M),T=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:w.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(A.a)({ref:t},e.input))]})})),B=n(19),F=n.n(B);var S=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(j.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.addToCart(a)},children:[Object(j.jsx)(T,{ref:s,label:"Amount",input:{id:e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})};var E=function(e){var t=Object(r.useContext)(x),n="$".concat(e.meal.price.toFixed(2));return Object(j.jsxs)("li",{className:k.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.meal.name}),Object(j.jsx)("div",{className:k.a.description,children:e.meal.description}),Object(j.jsx)("div",{className:k.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(S,{id:e.key,addToCart:function(n){t.addItem({id:e.meal.id,name:e.meal.name,amount:n,price:e.meal.price})}})})]})},H=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var D=function(){var e=H.map((function(e){return Object(j.jsx)(E,{meal:e},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(y,{children:Object(j.jsx)("ul",{children:e})})})};var R=function(){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(D,{})]})},J=n(4),P=n.n(J),z=n(11),K=n.n(z);function L(e){return Object(j.jsx)("div",{className:K.a.backdrop,onClick:e.onClick})}function W(e){return Object(j.jsx)("div",{className:K.a.modal,children:Object(j.jsx)("div",{className:K.a.content,children:e.children})})}var Y=function(e){var t=document.getElementById("overlays");return Object(j.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(j.jsx)(L,{onClick:e.onClick}),t),c.a.createPortal(Object(j.jsx)(W,{children:e.children}),t)]})},Z=n(5),q=n.n(Z),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:q.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:q.a.summary,children:[Object(j.jsx)("span",{className:q.a.price,children:t}),Object(j.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:q.a.actions,children:[Object(j.jsx)("button",{onClick:e.removeItem,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.addItem,children:"+"})]})]})};var V=function(e){var t=Object(r.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0;function c(e){t.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))}function i(e){t.removeItem(e)}var s=t.items.map((function(e){return Object(j.jsx)(G,{name:e.name,amount:e.amount,price:e.price,removeItem:i.bind(null,e.id),addItem:c.bind(null,e)},e.id)}));return Object(j.jsx)(Y,{onClick:e.hideCart,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("ul",{className:P.a["cart-items"],children:s}),Object(j.jsxs)("div",{className:P.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:P.a.actions,children:[Object(j.jsx)("button",{className:P.a["button--alt"],onClick:e.hideCart,children:"Close"}),a&&Object(j.jsx)("button",{className:P.a.button,children:"Order"})]})]})})},$=n(14),Q="ADD_ITEM",U="REMOVE_ITEM",X={items:[],totalAmount:0};function ee(e,t){if(t.type===Q){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(A.a)(Object(A.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object($.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if(t.type===U){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return X}var te=function(e){var t=Object(r.useReducer)(ee,X),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:Q,item:e})},removeItem:function(e){c({type:U,id:e})}};return Object(j.jsx)(x.Provider,{value:s,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(te,{children:[n&&Object(j.jsx)(V,{hideCart:function(){a(!1)}}),Object(j.jsx)(h,{showCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(R,{})})]})};c.a.render(Object(j.jsx)(ne,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.68e4a668.chunk.js.map