(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{377:function(t,e,n){"use strict";n.r(e);n(13),n(141),n(17);var o=n(47),l=n(110),c=n.n(l),r=n(113),d=n(77),v=Object(o.a)({name:"OdaiCom",setup:function(){var t=Object(o.c)(r.b),e=Object(o.h)(""),n=Object(o.h)(!1),l=Object(o.k)(),v=Object(o.h)(""),f=Object(o.h)(!1);if(!t)throw new Error("store undefined");var data=Object(o.g)(t.data);t.state.socket||l.push({name:"index"});var m=Object(o.h)([]);Object(o.d)((function(){v.value=t.data.thema})),Object(o.l)(data,(function(){data.game_state===d.b.GameStart&&(f.value=!1,console.log("start"),l.push({name:"play"}))}),{deep:!0}),Object(o.l)(e,(function(){n.value=null==e.value.match(/^[ぁ-んー　]{4,6}$/),""!==e.value&&n.value&&c.a.get("".concat(location.protocol,"//").concat(location.host,"/api/suggest/search?hl=ja&q=").concat(e.value,"&output=toolbar"),{responseType:"document"}).then((function(t){var e=t.data.querySelectorAll("suggestion");m.value=[];for(var i=0;i<e.length&&!(m.value.length>3);i++)null!=e[i].getAttribute("data")&&null===e[i].getAttribute("data").match(/.* +.*/)&&m.value.push(e[i].getAttribute("data"))}))}));return{wordRef:e,wordValid:n,thema:v,registered:function(){t.setMyWord(e.value),f.value=!0,t.state.socket&&t.state.socket.send(JSON.stringify({type:d.a.SetWord,word:e.value}))},waiting:f,suggestionsRef:m}}}),f=n(76),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[n("div",{staticClass:"card",staticStyle:{width:"50%"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title text-center"},[t._v("\n        お題\n      ")]),t._v(" "),n("h1",{staticClass:"my-4 text-center"},[t._v("\n        "+t._s(t.thema)+"\n      ")]),t._v(" "),n("div",{staticClass:"form-group d-flex flex-column justify-content-center mt-4"},[n("span",{staticClass:"form-text"},[t._v("4~6文字でひらがなのみ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.wordRef,expression:"wordRef"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ことばをかく"},domProps:{value:t.wordRef},on:{input:function(e){e.target.composing||(t.wordRef=e.target.value)}}}),t._v(" "),t.wordValid?n("div",{staticClass:"form-text",staticStyle:{color:"red"}},[t._v("4~6文字でひらがなのみを使用してください")]):t._e(),t._v(" "),t._l(t.suggestionsRef,(function(e,o){return n("div",{key:o},[n("div",[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"mx-auto mt-3"},[!t.waiting&&t.wordValid?n("button",{staticClass:"btn btn-outline-info",attrs:{disabled:"",type:"submit"},on:{click:t.registered}},[t._v("\n            決定\n          ")]):t.waiting?n("p",[t._v("\n            他のプレイヤーを待っています...\n          ")]):n("button",{staticClass:"btn btn-outline-info",attrs:{type:"submit"},on:{click:t.registered}},[t._v("\n            決定\n          ")])])],2)])])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);var o=n(47),l=n(377),c=Object(o.a)({name:"OdaiPage",components:{OdaiCom:l.default},setup:function(){return{}}}),r=n(76),component=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("OdaiCom")}),[],!1,null,null,null);e.default=component.exports}}]);