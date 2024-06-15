(this["webpackJsonpkduia-shopping-app"]=this["webpackJsonpkduia-shopping-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);c(5);var s=c(1),a=c.n(s),n=c(3),i=c.n(n);var r=(e,t)=>{let c=[];switch(t.type){case"ADD_QUANTITY":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:e.quantity+t.payload.quantity}:e)),{...e,expenses:c};case"RED_QUANTITY":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:Math.max(0,e.quantity-t.payload.quantity)}:e)),{...e,expenses:c};case"DELETE_ITEM":return c=e.expenses.map((e=>e.name===t.payload.name?{...e,quantity:0}:e)),{...e,expenses:c};case"CHG_LOCATION":return{...e,Location:t.payload};case"SET_BUDGET":return{...e,CartValue:t.payload};default:return e}},l=c(0);const j={expenses:JSON.parse(localStorage.getItem("expenses"))||[{id:"Shirt",name:"Shirt",quantity:0,unitprice:500},{id:"Jeans",name:"Jeans",quantity:0,unitprice:300},{id:"Dress",name:"Dress",quantity:0,unitprice:400},{id:"Dinner set",name:"Dinner set",quantity:0,unitprice:600},{id:"Bags",name:"Bags",quantity:0,unitprice:200}],Location:"\xa3",CartValue:1e3},d=Object(s.createContext)(),u=e=>{const[t,c]=Object(s.useReducer)(r,j);return Object(s.useEffect)((()=>{localStorage.setItem("expenses",JSON.stringify(t.expenses))}),[t.expenses]),Object(s.useEffect)((()=>{localStorage.setItem("CartValue",t.CartValue)}),[t.CartValue]),Object(l.jsx)(d.Provider,{value:{...t,dispatch:c},children:e.children})};var o=()=>{const{CartValue:e,Location:t,dispatch:c,expenses:a}=Object(s.useContext)(d),[n,i]=Object(s.useState)(e),r=a.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"alert alert-primary",children:[Object(l.jsxs)("span",{children:["Budget: ",t,n]}),Object(l.jsx)("button",{onClick:()=>{n-10>=r&&(i(n-10),c({type:"SET_BUDGET",payload:n-10}))},children:"-"}),Object(l.jsx)("button",{onClick:()=>{n+10<=2e4&&(i(n+10),c({type:"SET_BUDGET",payload:n+10}))},children:"+"})]})})},p=c(4);var m=e=>{const{dispatch:t,Location:c}=Object(s.useContext)(d);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.quantity}),Object(l.jsxs)("td",{children:[c,e.unitprice]}),Object(l.jsxs)("td",{children:[c,e.quantity*e.unitprice]}),Object(l.jsx)("td",{children:Object(l.jsx)(p.a,{size:"2.2em",color:"red",onClick:()=>{t({type:"DELETE_ITEM",payload:{name:e.name}})}})})]})};var b=()=>{const{expenses:e}=Object(s.useContext)(d);return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{className:"thead-light",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Items"}),Object(l.jsx)("th",{scope:"col",children:"Quantity"}),Object(l.jsx)("th",{scope:"col",children:"Unit Price"}),Object(l.jsx)("th",{scope:"col",children:"Items Price"}),Object(l.jsx)("th",{scope:"col",children:"Remove"})]})}),Object(l.jsx)("tbody",{children:e.map((e=>Object(l.jsx)(m,{...e},e.id)))})]})};var h=()=>{const{dispatch:e,Location:t,expenses:c,CartValue:a}=Object(s.useContext)(d),[n,i]=Object(s.useState)(""),[r,j]=Object(s.useState)(""),[u,o]=Object(s.useState)(""),p=a-c.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"input-group mb-3",style:{marginLeft:"2rem"},children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",children:"Items"})}),Object(l.jsxs)("select",{className:"custom-select",id:"inputGroupSelect01",onChange:e=>i(e.target.value),children:[Object(l.jsx)("option",{defaultValue:!0,children:"Choose..."}),c.map((e=>Object(l.jsx)("option",{value:e.name,children:e.name},e.id)))]}),Object(l.jsx)("div",{className:"input-group-prepend",style:{marginLeft:"2rem"},children:Object(l.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect02",children:"Action"})}),Object(l.jsxs)("select",{className:"custom-select",id:"inputGroupSelect02",onChange:e=>o(e.target.value),children:[Object(l.jsx)("option",{defaultValue:!0,value:"Add",children:"Add"}),Object(l.jsx)("option",{value:"Reduce",children:"Reduce"})]}),Object(l.jsx)("span",{className:"eco",style:{marginLeft:"2rem",marginRight:"8px"},children:t}),Object(l.jsx)("input",{required:"required",type:"number",id:"quantity",value:r,style:{size:10},min:"0",max:p,onChange:e=>j(Math.min(e.target.value,p))}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:()=>{if(r>p&&"Add"===u)return void alert("The quantity exceeds the remaining budget.");const t={name:n,quantity:parseInt(r)};e("Reduce"===u?{type:"RED_QUANTITY",payload:t}:{type:"ADD_QUANTITY",payload:t})},style:{marginLeft:"2rem"},children:"Save"})]})})})};var x=()=>{const{Location:e,dispatch:t}=Object(s.useContext)(d);return Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect03",children:"Currency"})}),Object(l.jsxs)("select",{className:"custom-select",id:"inputGroupSelect03",value:e,onChange:e=>{t({type:"CHG_LOCATION",payload:e.target.value})},children:[Object(l.jsx)("option",{value:"\xa3",children:"\xa3 Pound"}),Object(l.jsx)("option",{value:"$",children:"$ Dollar"}),Object(l.jsx)("option",{value:"\u20ac",children:"\u20ac Euro"}),Object(l.jsx)("option",{value:"\u20b9",children:"\u20b9 Rupee"})]})]})};var O=()=>{const{expenses:e,Location:t,CartValue:c}=Object(s.useContext)(d),a=e.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{className:"alert alert-success",children:Object(l.jsxs)("span",{children:["Remaining: ",t,c-a]})})};var y=()=>{const{expenses:e,Location:t}=Object(s.useContext)(d),c=e.reduce(((e,t)=>e+t.unitprice*t.quantity),0);return Object(l.jsx)("div",{className:"alert alert-info",children:Object(l.jsxs)("span",{children:["Spent so far: ",t,c]})})};var v=function(){return Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"mt-3",children:"Shopping Cart"}),Object(l.jsxs)("div",{className:"row mt-3",children:[Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(o,{})}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(x,{})})]}),Object(l.jsx)("h3",{className:"mt-3",children:"Items"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(b,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Remaining"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(O,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Spent so far"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(y,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Add/Reduce Item Quantity"}),Object(l.jsx)("div",{className:"row mt-3",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(h,{})})})]})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9765f204.chunk.js.map