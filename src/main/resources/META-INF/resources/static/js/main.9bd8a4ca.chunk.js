(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=(a(23),a(24),a(17)),u=a(3),i=a(4),o=a(2),d=a(5),h=a(6),m=a(25).default,p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={text:"",uppercase:!1,reverse:!1},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("Sending Request "+JSON.stringify(this.state)),m.post("/api/send-request",this.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Requests"),r.a.createElement("form",{id:"requests",method:"post",onSubmit:this.handleSubmit},r.a.createElement("input",{id:"request-text",type:"text",name:"text",autoFocus:"autofocus",onChange:this.handleChange,value:this.state.text}),r.a.createElement("div",{id:"request-uppercase-option"},r.a.createElement("input",{id:"request-uppercase",type:"checkbox",name:"uppercase",onChange:this.handleChange,checked:this.state.uppercase}),r.a.createElement("label",{htmlFor:"request-uppercase"},"Uppercase")),r.a.createElement("div",{id:"request-reverse-option"},r.a.createElement("input",{id:"request-reverse",type:"checkbox",name:"reverse",onChange:this.handleChange,checked:this.state.reverse}),r.a.createElement("label",{htmlFor:"request-reverse"},"Reverse")),r.a.createElement("button",{type:"submit"},"Send Request")))}}]),a}(r.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Responses"),r.a.createElement("div",{className:"two-column"},r.a.createElement("div",{id:"processedMessagesChart",className:"column"}),r.a.createElement("div",{id:"processedErrorsChart",className:"column"})))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{id:"-body"},r.a.createElement("header",{id:"-head"},r.a.createElement("h2",null,"Hybrid Cloud")),r.a.createElement("br",null),r.a.createElement("div",{id:"-body-content"},r.a.createElement(p,null),r.a.createElement("div",null,"\xa0"),r.a.createElement(b,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9bd8a4ca.chunk.js.map