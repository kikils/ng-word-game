(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{381:function(e,t,n){e.exports=n.p+"img/title.adef92f.png"},382:function(e,t,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(79).default)("8eecebf0",content,!0,{sourceMap:!1})},383:function(e,t,n){var o=n(78)(!1);o.push([e.i,'.loader,.loader:after,.loader:before{border-radius:50%}.loader{color:#0dc5c1;font-size:11px;text-indent:-99999em;margin:55px auto;position:relative;width:10em;height:10em;box-shadow:inset 0 0 0 1em;transform:translateZ(0)}.loader:after,.loader:before{position:absolute;content:""}.loader:before{border-radius:10.2em 0 0 10.2em;left:-.1em;transform-origin:5.1em 5.1em;-webkit-animation:load2 2s ease 1.5s infinite;animation:load2 2s ease 1.5s infinite}.loader:after,.loader:before{width:5.2em;height:10.2em;background:#fff;top:-.1em}.loader:after{border-radius:0 10.2em 10.2em 0;left:4.9em;transform-origin:.1em 5.1em;-webkit-animation:load2 2s ease infinite;animation:load2 2s ease infinite}@-webkit-keyframes load2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),e.exports=o},384:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{staticClass:"card-title text-center"},[t("img",{attrs:{src:n(381),alt:"MOJIATE"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("参加ユーザー")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("参加人数/募集人数")]),e._v(" "),n("th")])])}],r=(n(42),n(2),n(1),n(13),n(31),n(43),n(20),n(17),n(47)),l=n(110),c=n.n(l),d=n(114),m=n(71),v=n(30),f=(n(80),function(e){var t=new FileReader;return new Promise((function(n,o){t.onerror=function(){t.abort(),o()},t.onload=function(){n(t.result)},t.readAsText(e)}))}),x=function(){var e=Object(v.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,e.abrupt("return",JSON.parse(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(382),Object(r.b)({name:"PlayerJoin",setup:function(){var e,t=function(e){return window.localStorage.setItem("last-used-name",e)},n=Object(r.k)().app,o=Object(r.d)(d.b),l=Object(r.i)(null!==(e=window.localStorage.getItem("last-used-name"))&&void 0!==e?e:""),v=Object(r.i)(!1),f=Object(r.i)(2),_=Object(r.i)(!1),h=Object(r.l)();if(!o)throw new Error("store undefined");var data=Object(r.h)(o.data),y=Object(r.i)(!1),w=Object(r.i)(!1),j=P(),C=Object(r.i)(),O=Object(r.i)(""),k=Object(r.i)(),E=Object(r.i)(),S=function(){c.a.get("http://".concat(n.$config.apiURL,"/rooms")).then((function(e){E.value=e.data.rooms}))};function I(){console.log("close"),h.push({name:"result"})}function P(){for(var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),i=0,t=e.length;i<t;i++)switch(e[i]){case"x":e[i]=Math.floor(16*Math.random()).toString(16);break;case"y":e[i]=(Math.floor(4*Math.random())+8).toString(16)}return e.join("")}Object(r.f)((function(){S(),setInterval((function(){S()}),5e3)})),Object(r.m)(data,(function(){console.log("here"),data.game_state===m.b.PlayerFilled&&(y.value=!1,h.push({name:"odai"}))}),{deep:!0}),Object(r.m)(E,(function(){E.value&&E.value.filter((function(e){return e.id===O.value}))!==[]&&(k.value=E.value.filter((function(e){return e.id===O.value}))[0])}));return{name:l,maxPlayer:f,connectError:w,createRoom:function(){if(0!==l.value.length)if(f.value<2)_.value=!0;else{t(l.value),v.value=!1,_.value=!1,o.setName(l.value),o.setClientId(j),y.value=!0,C.value.show(),O.value=P();var e=new WebSocket("ws://".concat(n.$config.apiURL,"/?id=").concat(j,"&name=").concat(l.value,"&roomId=").concat(O.value,"&newRoom=true&maxPlayer=").concat(f.value));console.log(e),e.addEventListener("error",(function(){w.value=!0})),e.addEventListener("open",(function(){console.log("open"),e.addEventListener("message",(function(e){x(e.data).then((function(e){console.log(e),o.setData(e)}))})),e.addEventListener("close",I,!1),o.setSocket(e)}))}else v.value=!0},waiting:y,rooms:E,joinRoom:function(e){if(0!==l.value.length){t(l.value),v.value=!1,o.setName(l.value),o.setClientId(j),y.value=!0,C.value.show(),O.value=e;var r=new WebSocket("ws://".concat(n.$config.apiURL,"/?id=").concat(j,"&roomId=").concat(O.value,"&newRoom=false&name=").concat(l.value,"&maxPlayer=0"));console.log(r),r.addEventListener("error",(function(){w.value=!0})),r.addEventListener("open",(function(){console.log("open"),r.addEventListener("message",(function(e){x(e.data).then((function(e){console.log(e),o.setData(e)}))})),r.addEventListener("close",I,!1),o.setSocket(r)}))}else v.value=!0},nameErr:v,maxPlayerErr:_,modalRef:C,roomInfo:k}}})),h=n(77),component=Object(h.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center align-items-center flex-column",staticStyle:{height:"100vh"}},[n("div",{staticClass:"card my-2",staticStyle:{height:"35vh",width:"80%"}},[n("div",{staticClass:"card-body"},[e._m(0),e._v(" "),n("p",{staticClass:"text-center"},[e._v("ベータ版")]),e._v(" "),n("div",{staticClass:"form-group d-flex flex-column justify-content-center"},[n("h5",{staticClass:"text-center"},[e._v("ユーザー名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ユーザー名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),e.nameErr?n("div",{staticClass:"form-text",staticStyle:{color:"red"}},[e._v("ユーザー名を入力してください")]):e._e()])])]),e._v(" "),n("div",{staticClass:"card my-2",staticStyle:{height:"22vh",width:"80%"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"text-center"},[e._v("ルームを作成")]),e._v(" "),n("div",{staticClass:"mx-auto form-inline justify-content-center"},[n("label",{attrs:{for:"inputMaxPlayer"}},[e._v("募集人数: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPlayer,expression:"maxPlayer"}],staticClass:"mx-2 form-control",staticStyle:{width:"25%"},attrs:{id:"inputMaxPlayer",type:"number",min:"2",placeholder:"人数"},domProps:{value:e.maxPlayer},on:{input:function(t){t.target.composing||(e.maxPlayer=t.target.value)}}}),e._v(" "),e.waiting?e.connectError?e._e():n("p",[e._v("\n          参加者を待っています....\n        ")]):n("button",{staticClass:"btn btn-outline-info",attrs:{type:"submit",disabled:e.waiting},on:{click:e.createRoom}},[e._v("\n          ルームを作成\n        ")]),e._v(" "),e.connectError?n("p",[e._v("サーバーと接続できません")]):e._e()]),e._v(" "),e.maxPlayerErr?n("div",{staticClass:"form-text text-center",staticStyle:{color:"red"}},[e._v("募集人数は2人以上にしてください")]):e._e()])]),e._v(" "),n("div",{staticClass:"card my-2",staticStyle:{height:"30vh",width:"80%"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"py-3 text-center"},[e._v("募集中のルーム")]),e._v(" "),n("table",{staticClass:"table table-borderless"},[e._m(1),e._v(" "),n("tbody",e._l(e.rooms,(function(t){return n("tr",{key:t.id},[null!==t.players?n("td",[e._v(e._s(t.players.join(", ")))]):e._e(),e._v(" "),null!==t.players?n("td",{staticClass:"text-center"},[e._v(e._s(t.num)+"/"+e._s(t.max_player))]):e._e(),e._v(" "),null!==t.players?n("td",{staticStyle:{width:"35%"}},[n("button",{staticClass:"btn btn-outline-info",on:{click:function(n){return e.joinRoom(t.id)}}},[e._v("参加")])]):e._e()])})),0)])])]),e._v(" "),n("b-modal",{ref:"modalRef",attrs:{id:"modal-1",centered:"","hide-footer":"","hide-header":"","no-close-on-backdrop":""}},[n("div",{staticClass:"d-block text-center"},[n("h3",[e._v("参加者を待っています")]),e._v(" "),n("div",{staticClass:"loader"},[e._v("Loading...")]),e._v(" "),e.roomInfo?n("div",[e.roomInfo.players?n("h5",[e._v("参加ユーザー: "+e._s(e.roomInfo.players.join(", ")))]):e._e(),e._v(" "),e.roomInfo.num&&e.roomInfo.max_player?n("h5",[e._v(e._s(e.roomInfo.num)+"/"+e._s(e.roomInfo.max_player))]):e._e()]):e._e()])])],1)}),o,!1,null,null,null);t.default=component.exports}}]);