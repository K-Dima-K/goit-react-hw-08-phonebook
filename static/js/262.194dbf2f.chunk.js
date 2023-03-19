"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[262],{6262:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(9434),a=t(4106),u=t(4942),o=t(1413),i=t(9439),c=t(2791),s=t(6467),l={name:"",number:""},f="ContactForm_form__Z4FtV",p="ContactForm_formGroup__wqobt",m="ContactForm_label__7sG7d",d="ContactForm_input__LcR2n",h="ContactForm_submit_btn__uwksk",v=t(3329),_=function(){var e=(0,c.useState)((0,o.Z)({},l)),n=(0,i.Z)(e,2),t=n[0],a=n[1],_=(0,r.I0)();(0,c.useEffect)((function(){_((0,s.CL)())}),[_]);var b=function(e){var n=e.target,t=n.name,r=n.value;a((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,u.Z)({},t,r))}))},y=t.name,x=t.number;return(0,v.jsx)("form",{className:f,onSubmit:function(e){e.preventDefault(),_((0,s.v6)({name:y,number:x})),a((0,o.Z)({},l))},children:(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("label",{className:m,children:"Name"}),(0,v.jsx)("input",{onChange:b,className:d,placeholder:"enter name",type:"text",name:"name",value:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,v.jsx)("label",{className:m,children:"Number"}),(0,v.jsx)("input",{onChange:b,className:d,placeholder:"enter phone number",type:"tel",name:"number",value:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,v.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})})},b="NOT_FOUND";var y=function(e,n){return e===n};function x(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?y:r,u=t.maxSize,o=void 0===u?1:u,i=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:b},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return b}return{get:r,put:function(n,a){r(n)===b&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function l(){var n=s.get(arguments);if(n===b){if(n=e.apply(null,arguments),i){var t=s.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function j(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function g(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],m=j(r),d=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return u=d.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:d,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var C=g(x),N=function(e){return e.filter},k=C([N,function(e){return e.contacts.items}],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))})),w="ContactsList_contacts__1EGT+",F="ContactsList_text__pnuJ3",A="ContactsList_removeBtn__OGqBM",Z=function(){var e=(0,r.v9)(k),n=(0,r.I0)(),t=e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("span",{className:F,children:[r,": ",a]}),(0,v.jsx)("button",{className:A,onClick:function(){return function(e){n((0,s.in)(e))}(t)},type:"button",children:"Delete"})]},t)}));return(0,v.jsx)("ul",{className:w,children:t})},L=t(5653),E="Filter_formGroup__HnE+q",q="Filter_label__J1LHR",z="Filter_input__WjkHa",B=function(){var e=(0,r.v9)(N),n=(0,r.I0)();return(0,v.jsxs)("div",{className:E,children:[(0,v.jsx)("label",{className:q,children:"Find contacts by name"}),(0,v.jsx)("input",{name:"filter",onChange:function(e){var t=e.target;n((0,L.T)(t.value))},value:e,className:z,placeholder:"enter name"})]})},O={wrapper:"PhoneBook_wrapper__MLibB",title:"PhoneBook_title__r6uAi"},G=function(){var e=Boolean((0,r.v9)(k).length),n=(0,r.v9)((function(e){return e.contacts.isLoading}));return(0,v.jsxs)("div",{className:O.wrapper,children:[(0,v.jsx)("h2",{className:O.title,children:"Phonebook"}),(0,v.jsx)(_,{}),(0,v.jsx)("h2",{className:O.title,children:"Contacts"}),(0,v.jsx)(B,{}),n&&(0,v.jsx)(a.Z,{}),e&&(0,v.jsx)(Z,{}),!e&&!n&&(0,v.jsx)("p",{className:O.text,children:"No contacts in list"})]})},R=function(){return(0,v.jsx)(G,{})}}}]);
//# sourceMappingURL=262.194dbf2f.chunk.js.map