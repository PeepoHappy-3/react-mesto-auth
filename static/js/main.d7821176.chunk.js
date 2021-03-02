(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),s=(n(29),n(1)),c=n.n(s),r=n(23),i=n.n(r),o=n(25),u=n(14),l=n(5),p=n.n(l),d=n(10),j=n(2),h=n.p+"static/media/logo.c2821b38.svg",b=n(8),m=n(3);var f=function(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)(b.b,{to:"/",className:"header__logo",children:Object(a.jsx)("img",{src:e.src,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e \u041c\u0435\u0441\u0442\u043e.",className:"header__logo-img"})}),Object(a.jsxs)("div",{className:"header__profile",children:[e.loggedIn?Object(a.jsx)("p",{className:"header__email",children:e.email}):"",Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{path:"/sign-in",children:Object(a.jsx)(b.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(m.b,{path:"/sign-up",children:Object(a.jsx)(b.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(m.b,{exact:!0,path:"/",children:Object(a.jsx)(b.b,{to:"/sign-up",onClick:e.onLogOut,className:"header__link",children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})]})},_=c.a.createContext();var O=function(e){var t=c.a.useContext(_),n=e.card.owner._id===t._id,s=e.card.likes.some((function(e){return e._id===t._id}));return Object(a.jsx)("div",{className:e.className,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)},loading:"lazy"}),n&&Object(a.jsx)("button",{type:"button",className:"card__delete",onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"card__body",children:[Object(a.jsx)("h3",{className:"card__heading",children:e.card.name}),Object(a.jsxs)("div",{className:"card__like",children:[Object(a.jsx)("button",{type:"button",className:"card__btn ".concat(s&&"card__btn_active"),onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("span",{className:"card__like-count",children:e.card.likes.length})]})]})]})})};var x=function(e){var t=c.a.useContext(_);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__inner",children:[Object(a.jsx)("div",{className:"profile__overlay",onClick:e.onEditAvatar}),Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 ".concat(t.name),className:"profile__photo"})]}),Object(a.jsxs)("div",{className:"profile__column",children:[Object(a.jsxs)("div",{className:"profile__row",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{type:"button",className:"profile__btn profile__btn_edit",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__btn profile__btn_add",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"cards-gallery",children:e.cards.map((function(t,n){return Object(a.jsx)(O,{className:"card",onCardClick:e.onCardClick,card:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var v=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current.addEventListener("click",(function(){console.log("click")}))}),[]),Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpened&&"popup_opened"),ref:t,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(a.jsxs)("form",{action:"#",className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var k=function(e){return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(e.isOpened&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("img",{src:e.card.src,alt:e.card.name,className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__caption",children:"".concat(e.card.name)})]})]})})},N=n(16),y=n(17),C=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._token=t.token}return Object(y.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"setProfileInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return e._getResponse(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponse(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._getResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponse(e)}))}},{key:"changeLikeStatus",value:function(e,t){return t?this.deleteLike(e):this.putLike(e)}},{key:"setProfileAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19/",token:"aac4a60b-b09e-40d2-9391-f119b1a59443"});var S=function(e){var t=c.a.useContext(_),n=c.a.useState(""),s=Object(j.a)(n,2),r=s[0],i=s[1],o=c.a.useState(""),u=Object(j.a)(o,2),l=u[0],p=u[1];return c.a.useEffect((function(){i(t.name),p(t.about)}),[t]),Object(a.jsxs)(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpened:e.isOpened,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:l})},children:[Object(a.jsx)("input",{id:"name-input",type:"text",className:"popup__input  popup__input_type_title",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",value:r||"",onChange:function(e){e.preventDefault(),i(e.target.value)}}),Object(a.jsx)("span",{id:"name-input-error",className:"popup__error"}),Object(a.jsx)("input",{id:"job-input",type:"text",className:"popup__input popup__input_type_subtitle",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"about",required:!0,minLength:"2",maxLength:"200",value:l||"",onChange:function(e){e.preventDefault(),p(e.target.value)}}),Object(a.jsx)("span",{id:"job-input-error",className:"popup__error"})]})};var w=function(e){var t=c.a.useRef("");return Object(a.jsxs)(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpened:e.isOpened,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(a.jsx)("input",{id:"avatar-input",type:"url",className:"popup__input  popup__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",required:!0,ref:t}),Object(a.jsx)("span",{id:"avatar-input-error",className:"popup__error"})]})};var z=function(e){var t=c.a.useState(""),n=Object(j.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(a.jsxs)(g,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpened:e.isOpened,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onSubmit({name:s,link:u})},children:[Object(a.jsx)("input",{id:"place-input",type:"text",className:"popup__input popup__input_type_place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",required:!0,minLength:"2",maxLength:"30",value:s||"",onChange:function(e){e.preventDefault(),r(e.target.value)}}),Object(a.jsx)("span",{id:"place-input-error",className:"popup__error"}),Object(a.jsx)("input",{id:"link-input",type:"url",className:"popup__input popup__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,value:u||"",onChange:function(e){e.preventDefault(),l(e.target.value)}}),Object(a.jsx)("span",{id:"link-input-error",className:"popup__error"})]})},U=n.p+"static/media/succes.1b6082f8.svg",L=n.p+"static/media/denied.df8eddf6.svg";var P=function(e){return Object(a.jsx)("div",{className:"popup popup_type_info ".concat(e.isOpened&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(a.jsx)("div",{className:"popup__inner",children:e.isSucces?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:U,className:"popup__icon"}),Object(a.jsx)("p",{className:"popup__info",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:L,className:"popup__icon"}),Object(a.jsx)("p",{className:"popup__info",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})]})})},E=n(26),D=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return Object(a.jsx)(m.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(u.a)({},n)):Object(a.jsx)(m.a,{to:"/sign-up"})}})};var T=Object(m.h)((function(e){var t=Object(m.g)(),n=c.a.useState(""),s=Object(j.a)(n,2),r=s[0],i=s[1],o=c.a.useState(""),u=Object(j.a)(o,2),l=u[0],p=u[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"authorize__form",action:"#",onSubmit:function(n){n.preventDefault(),e.onSubmit({password:l,email:r}).then((function(){t.push("/")})).catch((function(e){console.log(e.message)}))},children:[Object(a.jsx)("h2",{className:"authorize__heading",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("fieldset",{className:"authorize__fieldset",children:[Object(a.jsx)("input",{value:r||"",onChange:function(e){e.preventDefault(),i(e.target.value)},name:"email",className:"authorize__input",type:"email"}),Object(a.jsx)("input",{value:l||"",onChange:function(e){e.preventDefault(),p(e.target.value)},name:"password",className:"authorize__input",type:"password"})]}),Object(a.jsx)("button",{className:"authorize__submit",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}));var R=Object(m.h)((function(e){var t=c.a.useState(""),n=Object(j.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(j.a)(i,2),u=o[0],l=o[1],p=Object(m.g)();return Object(a.jsxs)("form",{className:"authorize__form",action:"#",onSubmit:function(t){t.preventDefault(),e.onSubmit({password:u,email:s}).then((function(){p.push("/sign-in")})).catch((function(e){console.log(e.message)}))},children:[Object(a.jsx)("h2",{className:"authorize__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("fieldset",{className:"authorize__fieldset",children:[Object(a.jsx)("input",{value:s||"",onChange:function(e){e.preventDefault(),r(e.target.value)},name:"email",className:"authorize__input",type:"email"}),Object(a.jsx)("input",{value:u||"",onChange:function(e){e.preventDefault(),l(e.target.value)},name:"password",className:"authorize__input",type:"password"})]}),Object(a.jsx)("button",{className:"authorize__submit",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsxs)("p",{className:"authorize__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(b.b,{className:"authorize__link",to:"./sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})),I=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl}return Object(y.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error(e.status))}},{key:"registration",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"login",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"checkToken",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponse(e)}))}}]),e}())({baseUrl:"https://auth.nomoreparties.co/"});var A=function(){var e=c.a.useState(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],r=c.a.useState(!1),i=Object(j.a)(r,2),l=i[0],b=i[1],O=c.a.useState(!1),N=Object(j.a)(O,2),y=N[0],U=N[1],L=c.a.useState(!1),E=Object(j.a)(L,2),A=E[0],F=E[1],J=c.a.useState(!1),q=Object(j.a)(J,2),B=q[0],G=q[1],H=c.a.useState({}),M=Object(j.a)(H,2),V=M[0],K=M[1],Q=c.a.useState({}),W=Object(j.a)(Q,2),X=W[0],Y=W[1],Z=c.a.useState([]),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ne=c.a.useState(!1),ae=Object(j.a)(ne,2),se=ae[0],ce=ae[1],re=c.a.useState(""),ie=Object(j.a)(re,2),oe=ie[0],ue=ie[1],le=c.a.useState(!1),pe=Object(j.a)(le,2),de=pe[0],je=pe[1];function he(){return(he=Object(d.a)(p.a.mark((function e(t){var n,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.likes.some((function(e){return e._id===X._id})),e.prev=1,e.next=4,C.changeLikeStatus(t._id,n);case 4:a=e.sent,s=ee.map((function(e){return e._id===t._id?a:e})),te(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function be(){return(be=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.deleteCard(t._id);case 3:n=ee.filter((function(e){return e._id!==t._id})),te(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function me(){b(!1),s(!1),U(!1),F(!1),G(!1)}function fe(){return(fe=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Y,e.next=4,C.setProfileInfo(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),me(),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function _e(){return(_e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Y,e.next=4,C.setProfileAvatar(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),me(),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Oe(){return(Oe=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=te,e.next=4,C.postNewCard(t);case 4:e.t1=e.sent,e.t2=[e.t1].concat(Object(o.a)(ee)),(0,e.t0)(e.t2),me(),e.next=13;break;case 10:e.prev=10,e.t3=e.catch(0),console.log(e.t3.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function xe(){return(xe=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.registration(t);case 3:je(!0),G(!0),e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),je(!1),G(!0),e.abrupt("return",Promise.reject(new Error(e.t0.message)));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ve(){return(ve=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.login(t);case 3:return n=e.sent,e.next=6,I.checkToken(n.token);case 6:a=e.sent,ue(a.data.email),ce(!0),e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error(e.t0.message)));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return c.a.useEffect((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=te,e.next=4,C.getInitialCards();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.useEffect((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Y,e.next=4,C.getProfileInfo();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(_.Provider,{value:X,children:[Object(a.jsx)(f,{src:h,onLogOut:function(){ce(!1)},email:oe,loggedIn:se}),Object(a.jsxs)(m.d,{children:[Object(a.jsx)(D,{exact:!0,path:"/",component:x,loggedIn:se,onEditAvatar:function(){b(!0)},onEditProfile:function(){s(!0)},onAddPlace:function(){U(!0)},onCardClick:function(e){K(Object(u.a)(Object(u.a)({},V),{},{src:e.link,name:e.name})),F(!0)},cards:ee,onCardLike:function(e){return he.apply(this,arguments)},onCardDelete:function(e){return be.apply(this,arguments)}}),Object(a.jsx)(m.b,{path:"/sign-in",children:Object(a.jsx)("div",{className:"authorize",children:Object(a.jsx)(T,{onSubmit:function(e){return ve.apply(this,arguments)}})})}),Object(a.jsx)(m.b,{path:"/sign-up",children:Object(a.jsx)("div",{className:"authorize",children:Object(a.jsx)(R,{onSubmit:function(e){return xe.apply(this,arguments)}})})}),Object(a.jsx)(m.b,{children:se?Object(a.jsx)(m.a,{to:"/"}):Object(a.jsx)(m.a,{to:"/sign-up"})})]}),Object(a.jsx)(v,{}),Object(a.jsx)(S,{isOpened:n,onClose:me,onUpdateUser:function(e){return fe.apply(this,arguments)}}),Object(a.jsx)(w,{isOpened:l,onClose:me,onUpdateAvatar:function(e){return _e.apply(this,arguments)}}),Object(a.jsx)(z,{isOpened:y,onClose:me,onSubmit:function(e){return Oe.apply(this,arguments)}}),Object(a.jsx)(P,{isOpened:B,onClose:me,isSucces:de})]})}),Object(a.jsx)(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onClose:me}),Object(a.jsx)(k,{card:V,isOpened:A,onClose:me})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(A,{})})}),document.getElementById("root")),F()}},[[39,1,2]]]);
//# sourceMappingURL=main.d7821176.chunk.js.map