(this["webpackJsonpkduia-shopping-app"]=this["webpackJsonpkduia-shopping-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);c(5);var a=c(1),s=c.n(a),n=c(3),i=c.n(n);var r=(e,t)=>{let c=[];switch(t.type){case"ADD_QUANTITY":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:e.quantity+t.payload.quantity}:e)),{...e,expenses:c};case"RED_QUANTITY":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:Math.max(0,e.quantity-t.payload.quantity)}:e)),{...e,expenses:c};case"DELETE_ITEM":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:0}:e)),{...e,expenses:c};case"CHG_LOCATION":return{...e,Location:t.payload};case"SET_BUDGET":return{...e,CartValue:t.payload};case"ADD_ALLOCATION":return{...e,CartValue:e.CartValue+t.payload};default:return e}},l=c(0);const d={expenses:JSON.parse(localStorage.getItem("expenses"))||[{id:"Shirt",name:"Shshirt",quantity:0,unitprice:500},{id:"Jeans",name:"Jeans",quantity:0,unitprice:300},{id:"Dress",name:"Dress",quantity:0,unitprice:400},{id:"Dinner set",name:"Dinner set",quantity:0,unitprice:600},{id:"Bags",name:"Bags",quantity:0,unitprice:200}],Location:"\xa3",CartValue:1e3},j=Object(a.createContext)(),u=e=>{const[t,c]=Object(a.useReducer)(r,d);return Object(a.useEffect)((()=>{localStorage.setItem("expenses",JSON.stringify(t.expenses))}),[t.expenses]),Object(a.useEffect)((()=>{localStorage.setItem("CartValue",t.CartValue)}),[t.CartValue]),Object(l.jsx)(j.Provider,{value:{...t,dispatch:c},children:e.children})};var o=()=>{const{CartValue:e,Location:t,dispatch:c,expenses:s}=Object(a.useContext)(j),[n,i]=Object(a.useState)(e),[r,d]=Object(a.useState)(t),u=s.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"alert alert-primary",children:[Object(l.jsxs)("span",{children:["Budget: ",r,Object(l.jsx)("input",{type:"number",value:n,onChange:e=>{const t=parseInt(e.target.value);t>2e4?alert("Budget cannot exceed 20,000"):t<u?alert("Budget cannot be less than the total spending"):(i(t),c({type:"SET_BUDGET",payload:t}))},min:u,max:"20000"})]}),Object(l.jsx)("button",{onClick:()=>{n-10>=u&&(i(n-10),c({type:"SET_BUDGET",payload:n-10}))},children:"-"}),Object(l.jsx)("button",{onClick:()=>{n+10<=2e4&&(i(n+10),c({type:"SET_BUDGET",payload:n+10}))},children:"+"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"currency",children:"Currency: "}),Object(l.jsxs)("select",{id:"currency",value:r,onChange:e=>{d(e.target.value),c({type:"CHG_LOCATION",payload:e.target.value})},children:[Object(l.jsx)("option",{value:"\xa3",children:"\xa3 Pound"}),Object(l.jsx)("option",{value:"$",children:"$ Dollar"}),Object(l.jsx)("option",{value:"\u20ac",children:"\u20ac Euro"}),Object(l.jsx)("option",{value:"\u20b9",children:"\u20b9 Rupee"})]})]})]})})},p=c(4);var b=e=>{const{dispatch:t,Location:c}=Object(a.useContext)(j);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.quantity}),Object(l.jsxs)("td",{children:[c,e.unitprice]}),Object(l.jsxs)("td",{children:[c,e.quantity*e.unitprice]}),Object(l.jsx)("td",{children:Object(l.jsx)(p.a,{size:"2.2em",color:"red",onClick:()=>{t({type:"DELETE_ITEM",payload:{name:e.name}})}})})]})};var x=()=>{const{expenses:e}=Object(a.useContext)(j);return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{className:"thead-light",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Items"}),Object(l.jsx)("th",{scope:"col",children:"Quantity"}),Object(l.jsx)("th",{scope:"col",children:"Unit Price"}),Object(l.jsx)("th",{scope:"col",children:"Items Price"}),Object(l.jsx)("th",{scope:"col",children:"Remove"})]})}),Object(l.jsx)("tbody",{children:e.map((e=>Object(l.jsx)(b,{...e},e.id)))})]})};var h=()=>{const{dispatch:e,Location:t,expenses:c,CartValue:s}=Object(a.useContext)(j),[n,i]=Object(a.useState)(""),[r,d]=Object(a.useState)(""),[u,o]=Object(a.useState)(""),p=s-c.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"input-group mb-3",style:{marginLeft:"2rem"},children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",children:"Items"})}),Object(l.jsxs)("select",{className:"custom-select",id:"inputGroupSelect01",onChange:e=>i(e.target.value),children:[Object(l.jsx)("option",{defaultValue:!0,children:"Choose..."}),c.map((e=>Object(l.jsx)("option",{value:e.name,children:e.name},e.id)))]}),Object(l.jsx)("div",{className:"input-group-prepend",style:{marginLeft:"2rem"},children:Object(l.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect02",children:"Action"})}),Object(l.jsxs)("select",{className:"custom-select",id:"inputGroupSelect02",onChange:e=>o(e.target.value),children:[Object(l.jsx)("option",{defaultValue:!0,value:"Add",children:"Add"}),Object(l.jsx)("option",{value:"Reduce",children:"Reduce"})]}),Object(l.jsx)("span",{className:"eco",style:{marginLeft:"2rem",marginRight:"8px"},children:t}),Object(l.jsx)("input",{required:"required",type:"number",id:"quantity",value:r,style:{size:10},min:"0",max:p,onChange:e=>d(Math.min(e.target.value,p))}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:()=>{if(r>p&&"Add"===u)return void alert("The quantity exceeds the remaining budget.");const t={name:n,quantity:parseInt(r)};e("Reduce"===u?{type:"RED_QUANTITY",payload:t}:{type:"ADD_QUANTITY",payload:t})},style:{marginLeft:"2rem"},children:"Save"})]})})})};var m=()=>{const{expenses:e,Location:t,CartValue:c}=Object(a.useContext)(j),s=e.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{className:"alert alert-success",children:Object(l.jsxs)("span",{children:["Remaining: ",t,c-s]})})};var O=()=>{const{expenses:e,Location:t}=Object(a.useContext)(j),c=e.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{className:"alert alert-info",children:Object(l.jsxs)("span",{children:["Spent so far: ",t,c]})})};var y=()=>{const{Location:e,dispatch:t}=Object(a.useContext)(j),[c,s]=Object(a.useState)(""),[n,i]=Object(a.useState)("");return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e}),Object(l.jsx)("input",{type:"number",value:c,onChange:e=>{const t=e.target.value;isNaN(t)?i("Please enter a valid number"):(s(t),i(""))},min:"0",max:"20000"}),n&&Object(l.jsx)("p",{style:{color:"red"},children:n}),Object(l.jsx)("button",{onClick:()=>{const e=parseInt(c);e>2e4?i("Allocation exceeds remaining budget"):(t({type:"ADD_ALLOCATION",payload:e}),s(""))},children:"Allocate Budget"})]})};var v=function(){return Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"mt-3",children:"Shopping Cart"}),Object(l.jsxs)("div",{className:"row mt-3",children:[Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(o,{})}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(m,{})}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(O,{})})]}),Object(l.jsx)("h3",{className:"mt-3",children:"Items"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(x,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Add/Reduce Item Quantity"}),Object(l.jsx)("div",{className:"row mt-3",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(h,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Budget Allocation"}),Object(l.jsx)("div",{className:"row mt-3",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(y,{})})})]})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.47a9d09b.chunk.js.map