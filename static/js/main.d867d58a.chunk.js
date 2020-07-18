(this["webpackJsonpcontextapi-expense-tracker"]=this["webpackJsonpcontextapi-expense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=n(2),u=n(7),i=n(4),s="ADD_TRANSACTION",m="DELETE_TRANSACTION",d=function(e,t){switch(t.type){case s:var n=Object(i.a)({id:e.transactions.length+1},t.payload);return Object(i.a)({},e,{transactions:[n].concat(Object(u.a)(e.transactions))});case m:return Object(i.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});default:return e}},E={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},p=Object(a.createContext)(E),x=function(e){var t=e.children,n=Object(a.useReducer)(d,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(p.Provider,{value:{transactions:l.transactions,addTransaction:function(e){u({type:s,payload:e})},deleteTransaction:function(e){u({type:m,payload:e})}}},t)},b=(n(13),function(){return r.a.createElement("h2",null,"Expense Tracker")}),f=function(){var e=function(e){return e.reduce((function(e,t){return e+t.amount}),0).toFixed(2)}(Object(a.useContext)(p).transactions),t=e<0?"-":"";return r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},t,"$",Math.abs(e).toFixed(2)))},v=function(){var e=function(e){return e.reduce((function(t,n,a){var r=t.income,c=t.expense,l=n.amount;return l>=0?r+=l:c-=l,e.length-1===a&&(r=r.toFixed(2),c=c.toFixed(2)),{income:r,expense:c}}),{income:0,expense:0})}(Object(a.useContext)(p).transactions),t=e.income,n=e.expense;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-$",n))))},h=function(e){var t=e.id,n=e.text,c=e.amount,l=c<0?"-":"+",o=Object(a.useContext)(p).deleteTransaction;return r.a.createElement("li",{className:c<0?"minus":"plus"},n," ",r.a.createElement("span",null,l," $",Math.abs(c).toFixed(2)),r.a.createElement("button",{onClick:function(){return o(t)},className:"delete-btn"},"x"))},O=function(){var e=Object(a.useContext)(p).transactions;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.length?e.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))})):r.a.createElement("p",null,"Empty transactions...")))},j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(p).addTransaction;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n&&i&&m({text:n,amount:+i})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",placeholder:"Enter text...",value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",step:".01",id:"amount",placeholder:"Enter amount...",value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var N=function(){return r.a.createElement(x,null,r.a.createElement(b,null),r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(O,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d867d58a.chunk.js.map