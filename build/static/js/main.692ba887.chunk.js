(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},133:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(19),o=a.n(n),l=a(10),i=a(11),c=a(14),d=a(12),m=a(15),u=a(141),p=a(143),g=a(142),h=a(9),f=a(16),v=a.n(f),w=a(20);a(139),a(53),a(55),a(57);var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={className:a.props.className?a.props.className:"",errorMessage:""},a.changeValue=function(e){var t=a.props.className?a.props.className:"";t+=e.target.value.length>0?" has-value":"",e.target.classList.contains("invalid-value")?e.target.classList.remove("invalid-value"):e.target.classList.contains("valid-value")&&e.target.classList.remove("valid-value"),a.setState({className:t}),a.setState({errorMessage:""})},a.maskedField=function(e){var t=e.value;"date"===a.props.field?2!==t.length&&5!==t.length||(t+="/"):"phone"===a.props.field&&(1===t.length&&(t="("+t),3===t.length&&(t+=") "),10===t.length&&(t+="-")),e.value=t},a.validateField=function(e){var t=e.target.value,s={codResposta:99,message:""};if(""===t)s.codResposta=0,s.message="Required field";else switch(a.props.field){case"email":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())||(s.codResposta=0,s.message="Invalid e-mail.");break;case"password":t.length<3&&(s.codResposta=0,s.message="Password with at least 3 characters.");break;case"confirm-password":t.length<3?(s.codResposta=0,s.message="Password with at least 3 characters."):t!==e.target.parentNode.previousSibling.children[0].value&&(s.codResposta=0,s.message="The passwords not macth");break;case"date":/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g.test(t)||(s.codResposta=0,s.message="Invalid date.");break;case"phone":/^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test(t)||(s.codResposta=0,s.message="Invalid phone number.");break;default:s.codResposta=99,s.message=""}99!==s.codResposta?(e.target.classList.add("invalid-value"),a.setState({errorMessage:s.message})):e.target.classList.add("valid-value"),Array.from(e.target.form.elements).every(function(t){return"BUTTON"!==t.tagName&&(""===t.value||t.classList.contains("invalid-value")?(e.target.form.querySelector("button").classList.add("disabled"),!1):(e.target.form.querySelector("button").classList.remove("disabled"),!0))})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("label",null,r.a.createElement("input",{type:this.props.type,className:this.state.className,onChange:function(t){e.changeValue(t),e.props.onChange(t)},field:this.props.field,onKeyUp:function(t){e.props.hasMask&&e.maskedField(t.target)},onBlur:function(t){e.props.field?e.validateField(t):e.props.onBlur&&e.props.onBlur(t),e.props.onBlur&&e.props.onBlur(t)}}),r.a.createElement("p",null,this.props.name),this.props.icon,this.state.errorMessage&&r.a.createElement("span",{className:"error-field"},this.state.errorMessage))}}]),t}(s.Component),E=(a(59),function(e){var t=e.type,a=e.className,s=e.text;return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:t,className:"".concat(a||""," disabled")},r.a.createElement("span",null,s)))}),y=a(5),k=function(){return r.a.createElement("svg",{className:"wave-bottom",viewBox:"0 0 300 110",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradientWave",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",style:{stopColor:"#b06fc7",stopOpacity:1}}),r.a.createElement("stop",{offset:"100%",style:{stopColor:"#6a9af5",stopOpacity:1}}))),r.a.createElement("path",{fill:"url(#gradientWave)",d:"M 0 50 Q 40 10 90 40 Q 160 80 220 70 Q 270 60 300 30 L 300 150 L 0 150 L 0 50"}))},O=(a(61),a(40)),S=Object(O.create)({baseURL:"http://localhost:3000"});S.addResponseTransform(function(e){if(!e.ok)throw e});var j=S,M=(a(129),function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isVisible:a.props.isVisible},a.closeModal=function(){a.setState({isVisible:!a.props.isVisible})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({isVisible:e.isVisible})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal ".concat(this.state.isVisible?" is-visible":"")},r.a.createElement("button",{className:"close-modal",onClick:this.closeModal},r.a.createElement(y.FaTimesCircle,null)),r.a.createElement("div",{className:"container"},this.props.children))}}]),t}(s.Component)),P=(a(133),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading ".concat(!0===this.props.isVisible?"is-visible":"")},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-rolling",style:{background:"none"}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradientWave",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",style:{stopColor:"#b06fc7",stopOpacity:1}}),r.a.createElement("stop",{offset:"100%",style:{stopColor:"#6a9af5",stopOpacity:1}}))),r.a.createElement("circle",{cx:"50",cy:"50",fill:"none","ng-attr-stroke":"{{config.color}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-r":"{{config.radius}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",stroke:"url(#gradientWave)",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(47.6381 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))}}]),t}(s.Component)),x=[{path:"/",name:"Login",component:function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:"",errorModal:"",login:{email:"",password:""},currentForm:0,modalForgotPassword:!1,modalResetPassword:!1,resetPassword:{email:"",password:"",token:""},loading:!1,register:{name:"",email:"",password:"",confirmPassword:"",bornDate:"",phone:""}},a.do_login=function(){var e=Object(w.a)(v.a.mark(function e(t){var s,r,n,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.post("/auth/authenticate",{email:a.state.login.email,password:a.state.login.password});case 3:s=e.sent,r=s.data,n=r.user,o=r.token,console.log(n),console.log(o),a.setState({loading:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({errorMessage:e.t0.data.error,loading:!1}),"Invalid password"===e.t0.data.error&&(t.target[1].classList.remove("valid-value"),t.target[1].classList.add("invalid-value"));case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.submitLogin=function(e){a.validateForm(Array.from(e.target.elements))?(a.setState({errorMessage:"",loading:!0}),a.do_login(e)):a.setState({errorMessage:"Todos os campos s\xe3o obrigat\xf3rios"})},a.chageForm=function(e){a.setState({currentForm:e})},a.forgotPassword=function(){var e=Object(w.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),t.preventDefault(),e.prev=2,e.next=5,j.post("/auth/forgot_password",{email:a.state.resetPassword.email});case 5:a.setState({loading:!1,modalForgotPassword:!1,modalResetPassword:!0,errorModal:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),a.setState({loading:!1,errorModal:e.t0.data.error});case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.resetPassword=function(){var e=Object(w.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,j.post("/auth/reset_password",{email:a.state.resetPassword.email,password:a.state.resetPassword.password,token:a.state.resetPassword.token});case 4:a.setState({loading:!1,modalResetPassword:!1,errorModal:"",resetPassword:{email:"",password:"",token:""}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a.setState({errorModal:e.t0.data.error});case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),a.do_signUp=Object(w.a)(v.a.mark(function e(){var t,s,r,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.post("/auth/register",{name:a.state.register.name,email:a.state.register.email,password:a.state.register.password,bornDate:a.state.register.bornDate,phone:a.state.register.phone});case 3:t=e.sent,s=t.data,r=s.user,n=s.token,console.log(r),console.log(n),a.setState({loading:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),a.setState({errorMessage:e.t0.data.error,loading:!1});case 14:case"end":return e.stop()}},e,this,[[0,10]])})),a.validateForm=function(e){var t=e.length;return e.forEach(function(e){""===e.value&&e.classList.add("invalid-value")}),!e[t-1].classList.contains("disabled")},a.submitSignUp=function(e){e.persist(),a.validateForm(Array.from(e.target.elements))?(a.setState({errorMessage:"",loading:!0}),a.do_signUp(e)):a.setState({errorMessage:"Todos os campos s\xe3o obrigat\xf3rios"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Movies")),r.a.createElement("main",null,r.a.createElement("section",{className:"sec-login ".concat(0===this.state.currentForm?"current":"")},r.a.createElement("h2",{onClick:this.chageForm.bind(this,0)},"Login"),r.a.createElement("form",{className:"login",onSubmit:function(t){t.preventDefault(),e.submitLogin(t)}},r.a.createElement(b,{type:"text",name:"E-mail",icon:r.a.createElement(y.FaEnvelope,null),value:this.state.login.email,field:"email",onChange:function(t){e.setState({login:Object(h.a)({},e.state.login,{email:t.target.value})})}}),r.a.createElement(b,{type:"password",name:"Password",icon:r.a.createElement(y.FaKey,null),value:this.state.login.password,field:"password",onChange:function(t){e.setState({login:Object(h.a)({},e.state.login,{password:t.target.value})})}}),r.a.createElement("a",{href:"/",onClick:function(t){t.preventDefault(),e.setState({modalForgotPassword:!0})}},"Forgot password?"),this.state.errorMessage&&r.a.createElement("label",{className:"errorMessage"},this.state.errorMessage),r.a.createElement(k,null),r.a.createElement(E,{type:"submit",text:"Login"}))),r.a.createElement("section",{className:"sec-sign-up ".concat(1===this.state.currentForm?"current":"")},r.a.createElement("h2",{onClick:this.chageForm.bind(this,1)},"Sign Up"),r.a.createElement("form",{className:"sign-up",onSubmit:function(t){t.preventDefault(),e.setState({loading:!0}),e.submitSignUp(t)}},r.a.createElement(b,{type:"text",name:"Nome Completo",icon:r.a.createElement(y.FaUser,null),value:this.state.register.name,field:"name",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{name:t.target.value})})}}),r.a.createElement(b,{type:"text",name:"E-mail",icon:r.a.createElement(y.FaEnvelope,null),value:this.state.register.email,field:"email",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{email:t.target.value})})}}),r.a.createElement(b,{type:"password",name:"Password",icon:r.a.createElement(y.FaKey,null),value:this.state.register.password,field:"password",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{password:t.target.value})})}}),r.a.createElement(b,{type:"password",name:"Confirm Password",icon:r.a.createElement(y.FaKey,null),value:this.state.register.confirmPassword,field:"confirm-password",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{confirmPassword:t.target.value})})}}),r.a.createElement(b,{type:"text",name:"Birth Date",icon:r.a.createElement(y.FaCalendar,null),value:this.state.register.bornDate,hasMask:"true",field:"date",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{bornDate:t.target.value})})}}),r.a.createElement(b,{type:"text",name:"Cellphone",icon:r.a.createElement(y.FaMobile,null),value:this.state.register.phone,hasMask:"true",field:"phone",onChange:function(t){e.setState({register:Object(h.a)({},e.state.register,{phone:t.target.value})})}}),this.state.errorMessage&&r.a.createElement("label",{className:"errorMessage"},this.state.errorMessage),r.a.createElement(k,null),r.a.createElement(E,{type:"submit",text:"Sign Up"}))),r.a.createElement("span",{className:"arrow-select-current"})),r.a.createElement(M,{isVisible:this.state.modalForgotPassword},r.a.createElement("h2",null,"Forgot Password"),r.a.createElement("p",null,"Type your e-mail to reset password."),r.a.createElement("form",{onSubmit:function(t){e.setState({loading:!0}),e.forgotPassword(t)}},r.a.createElement(b,{type:"text",name:"E-mail",icon:r.a.createElement(y.FaEnvelope,null),value:this.state.resetPassword.email,field:"email",onChange:function(t){e.setState({resetPassword:Object(h.a)({},e.state.resetPassword,{email:t.target.value})})}}),this.state.errorModal&&r.a.createElement("label",{className:"errorMessage"},this.state.errorModal),r.a.createElement(E,{type:"submit",text:"OK"}))),r.a.createElement(M,{isVisible:this.state.modalResetPassword},r.a.createElement("h2",null,"Reset Password"),r.a.createElement("p",null,"We send a e-mail to ",this.state.resetPassword.email," ","with a token. Please, fill in the fields below to reset your password."),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setState({loading:!0}),e.resetPassword(t)}},r.a.createElement(b,{type:"password",name:"Nova senha",icon:r.a.createElement(y.FaKey,null),value:this.state.resetPassword.password,field:"password",onChange:function(t){e.setState({resetPassword:Object(h.a)({},e.state.resetPassword,{password:t.target.value})})}}),r.a.createElement(b,{type:"text",name:"Token",icon:r.a.createElement(y.FaKey,null),value:this.state.resetPassword.token,field:"token",onChange:function(t){e.setState({resetPassword:Object(h.a)({},e.state.resetPassword,{token:t.target.value})})}}),this.state.errorModal&&r.a.createElement("label",{className:"errorMessage"},this.state.errorModal),r.a.createElement(E,{type:"submit",text:"Resetar senha"}))),r.a.createElement(P,{isVisible:this.state.loading}))}}]),t}(s.Component)}],C=function(){return r.a.createElement(u.a,{basename:"/movies/build"},r.a.createElement(p.a,null,x.map(function(e){return r.a.createElement(g.a,Object.assign({key:e.path},e,{exact:!0}))})))},N=(a(136),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null)}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a(138)},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){}},[[42,2,1]]]);
//# sourceMappingURL=main.692ba887.chunk.js.map