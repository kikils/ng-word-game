(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{371:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("511ab1f1",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n(371)},373:function(t,e,n){var r=n(78)(!1);r.push([t.i,".rect[data-v-0be4808d]{border:1.2px solid;display:table-cell;text-align:center;vertical-align:middle}.circle[data-v-0be4808d]{width:40px;height:40px;line-height:40px;font-size:30px}.circle[data-v-0be4808d],.circle--small[data-v-0be4808d]{display:inline-block;border:1.2px solid;border-radius:50%;text-align:center}.circle--small[data-v-0be4808d]{width:20px;height:20px;line-height:16px;margin-top:20px}.circle--dakuten[data-v-0be4808d]{width:35px;height:35px;line-height:35px;margin-top:5px}.circle--dakuten[data-v-0be4808d],.dakuten[data-v-0be4808d]{display:inline-block;border:1.2px solid;border-radius:50%;text-align:center}.dakuten[data-v-0be4808d]{width:15px;height:15px;line-height:12px}.opened[data-v-0be4808d]{background-color:#dbdbdc}.hide[data-v-0be4808d]{background-color:#000}",""]),t.exports=r},374:function(t,e,n){"use strict";n.r(e);n(114);var r=n(47),c=Object(r.a)({name:"SquareCom",props:{charaInfo:{type:Array,default:null}},setup:function(t){return{props:t,isSmall:function(t){return["ゃ","ゅ","ょ","ぁ","ぃ","ぅ","ぇ","ぉ","っ","ゎ"].includes(t)},isDakuon:function(t){return["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ"].includes(t)},isHanDakuon:function(t){return["ぱ","ぴ","ぷ","ぺ","ぽ"].includes(t)},changeChar:{"ゃ":"や","ゅ":"ゆ","ょ":"よ","ぁ":"あ","ぃ":"い","ぅ":"う","ぇ":"え","ぉ":"お","っ":"つ","ゎ":"わ","が":"か","ぎ":"き","ぐ":"く","げ":"け","ご":"こ","ざ":"さ","じ":"し","ず":"す","ぜ":"せ","ぞ":"そ","だ":"た","ぢ":"ち","づ":"つ","で":"て","ど":"と","ば":"は","び":"ひ","ぶ":"ふ","べ":"へ","ぼ":"ほ","ぱ":"は","ぴ":"ひ","ぷ":"ふ","ぺ":"へ","ぽ":"ほ"}}}}),l=(n(372),n(76)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex"},t._l(t.props.charaInfo,(function(e,r){return n("div",{key:r},[e.isHide?n("div",[t.isSmall(e.char)?n("div",{staticClass:"circle--small hide"},[t._v("・")]):t.isDakuon(e.char)||t.isHanDakuon(e.char)?n("div",{staticClass:"mx-2",staticStyle:{position:"relative"}},[n("div",{staticClass:"circle hide"},[t._v("・")]),t._v(" "),n("div",{staticClass:"dakuten hide",staticStyle:{position:"absolute",top:"0",right:"-13px"}})]):n("div",{staticClass:"circle hide mx-2"},[t._v("・")])]):t.isSmall(e.char)?n("div",{staticClass:"circle--small",class:[e.isOpen?"opened":""]},[t._v(t._s(t.changeChar[e.char]))]):t.isDakuon(e.char)?n("div",{staticClass:"mx-2",staticStyle:{position:"relative"}},[n("div",{staticClass:"circle",class:[e.isOpen?"opened":""]},[t._v(t._s(t.changeChar[e.char]))]),t._v(" "),n("div",{staticClass:"dakuten",class:[e.isOpen?"opened":""],staticStyle:{position:"absolute",top:"0",right:"-13px"}},[t._v("〃")])]):t.isHanDakuon(e.char)?n("div",{staticClass:"mx-2",staticStyle:{position:"relative"}},[n("div",{staticClass:"circle",class:[e.isOpen?"opened":""]},[t._v(t._s(t.changeChar[e.char]))]),t._v(" "),n("div",{staticClass:"dakuten",class:[e.isOpen?"opened":""],staticStyle:{position:"absolute",top:"0",right:"-13px","font-size":"10px"}},[t._v("○")])]):n("div",{staticClass:"circle mx-2",class:[e.isOpen?"opened":""]},[t._v("\n        "+t._s(e.char)+"\n      ")])])})),0)])}),[],!1,null,"0be4808d",null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);n(2),n(1),n(42),n(13),n(141),n(3);var r=n(47),c=n(113),l=n(77),o=n(374),d=Object(r.a)({name:"PlayCom",components:{SquareCom:o.default},setup:function(){var t=Object(r.c)(c.b);if(!t)throw new Error("store undefined");var e=Object(r.k)();t.state.socket||e.push({name:"index"});var n=t.data.users.filter((function(u){return u.Id===t.state.clientId}))[0],o=t.data.users.filter((function(u){return u.Id!==t.state.clientId})),d=Object(r.h)(""),v=Object(r.h)(!0),h=Object(r.h)(!1),f=Object(r.h)(),data=Object(r.g)(t.data),_=Object(r.h)(t.data.next_turn),C=Object(r.h)(),m=Object(r.g)([]),x=Object(r.h)(t.data.thema),y=Object(r.h)(t.data.ng_chars),O=Object(r.h)(0),I=Object(r.h)(0),k=Object(r.h)(),S=function(){clearInterval(w.value),f.value.hide(),t.state.socket?(t.state.socket.send(JSON.stringify({type:l.a.SetNgChar,ng_char:d.value})),d.value=""):console.log("websocket is not found")},w=Object(r.h)(),j=function(){O.value=60;var t=setInterval((function(){if(O.value<1)return d.value="",void S();O.value-=1}),1e3);w.value=t};Object(r.e)((function(){D(),_.value===n.Id&&j()})),Object(r.l)(data,(function(){if(D(),_.value=data.next_turn,I.value=data.turn,y.value=data.ng_chars,_.value===n.Id&&N())return d.value="L",void S();_.value===n.Id&&(clearInterval(w.value),j())}),{deep:!0}),Object(r.l)(k,(function(){document.querySelector("#ng-table-body > tr:last-child").scrollIntoView()})),Object(r.l)(d,(function(){v.value=""!==d.value&&null==d.value.match(/^[ぁ-んー　]{1}$/),h.value=""!==d.value&&y.value.filter((function(t){return t.char===d.value})).length>0}));var N=function(){return!!C.value&&C.value.filter((function(t){return t.isOpen})).length===C.value.length},D=function(){var e=[];t.data.word_state[n.Id].forEach((function(t){for(var n in t)e.push({char:n,isOpen:t[n]===l.c.OpenedWord,isHide:!1})})),C.value=e,o.forEach((function(e){var n=[];t.data.word_state[e.Id].forEach((function(t){for(var e in t)n.push({char:e,isOpen:t[e]===l.c.OpenedWord,isHide:t[e]===l.c.HiddenWord})})),0===m.filter((function(t){return t.id===e.Id})).length?m.push({id:e.Id,chars:n}):m.filter((function(t){return t.id===e.Id}))[0].chars=n}))};return{user:n,userCharInfo:C,anotherUsers:o,anotherUsersCharInfo:m,nextTurn:_,ngCharas:y,ngChar:d,ngCharValid:v,checkDuplicateNgChar:h,modalRef:f,registerNgChar:S,thema:x,timer:O,turn:I,tableRef:k}}}),v=n(76),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center flex-column",staticStyle:{height:"100vh"}},[t._l(t.anotherUsers,(function(e){return n("div",{staticClass:"mb-3"},[n("p",{staticClass:"text-center",staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v("\n      "+t._s(e.Name)+"のワード\n    ")]),t._v(" "),e&&t.anotherUsersCharInfo!==[]&&t.anotherUsersCharInfo.filter((function(t){return t.id===e.Id}))!==[]&&t.anotherUsersCharInfo.filter((function(t){return t.id===e.Id}))[0]&&t.anotherUsersCharInfo.filter((function(t){return t.id===e.Id}))[0].chars?n("SquareCom",{attrs:{"chara-info":t.anotherUsersCharInfo.filter((function(t){return t.id===e.Id}))[0].chars}}):t._e()],1)})),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-around",staticStyle:{height:"40vh",width:"80%"}},[n("div",{staticStyle:{width:"30%"}},[n("div",{staticClass:"card"},[n("p",{staticClass:"text-center",staticStyle:{"font-size":"100%"}},[t._v("\n          お題\n        ")]),t._v(" "),n("p",{staticClass:"text-center",staticStyle:{"font-size":"200%","font-weight":"bold"}},[t._v("\n          "+t._s(t.thema)+"\n        ")])]),t._v(" "),n("div",{staticClass:"my-2 d-flex justify-content-center"},[t.nextTurn===t.user.Id?n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticStyle:{width:"80%"},attrs:{variant:"outline-info"}},[t._v("\n          文字を選ぶ\n        ")]):n("p",[t._v("\n          相手を待っています...\n        ")])],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"text-center",staticStyle:{width:"50%"}},[n("p",[t._v("制限時間")]),t._v(" "),t.nextTurn===t.user.Id?n("p",[t._v("残り"),n("span",{staticClass:"font-weight-bold",staticStyle:{color:"red"}},[t._v(t._s(t.timer))]),t._v("秒")]):t._e()]),t._v(" "),n("div",{staticClass:"text-center",staticStyle:{width:"50%"}},[n("p",[t._v("ターン")]),t._v(" "),n("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.turn))])])])]),t._v(" "),n("div",{staticClass:"card",staticStyle:{height:"100%",width:"60%"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"text-center"},[t._v("\n          NGリスト\n        ")]),t._v(" "),n("div",{staticClass:"table-responsive",staticStyle:{height:"80%"}},[n("table",{staticClass:"table table-sm table-striped"},[t._m(0),t._v(" "),n("tbody",{attrs:{id:"ng-table-body"}},t._l(t.ngCharas.filter((function(t){return"L"!==t.char})),(function(e,r){return n("tr",{key:r,ref:"tableRef",refInFor:!0},[n("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),""===e.char?n("td",{staticClass:"text-center"},[t._v("\n                  時間切れ\n                ")]):n("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(e.char)+"\n                ")])])})),0)])])])])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("p",{staticClass:"text-center",staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v("\n      "+t._s(t.user.Name)+"のワード\n    ")]),t._v(" "),t.userCharInfo?n("SquareCom",{attrs:{"chara-info":t.userCharInfo}}):t._e()],1),t._v(" "),n("b-modal",{ref:"modalRef",attrs:{id:"modal-1","hide-footer":""}},[n("div",{staticClass:"d-block text-center"},[n("h3",[t._v("NG文字を入力しよう")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ngChar,expression:"ngChar"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.ngChar},on:{input:function(e){e.target.composing||(t.ngChar=e.target.value)}}}),t._v(" "),t.ngCharValid?n("div",{staticClass:"form-text",staticStyle:{color:"red"}},[t._v("ひらがな1文字のみ入力できます")]):t._e(),t._v(" "),t.checkDuplicateNgChar?n("div",{staticClass:"form-text",staticStyle:{color:"red"}},[t._v("すでにNG文字です")]):t._e(),t._v(" "),n("b-button",{staticClass:"mt-2",attrs:{disabled:t.ngCharValid,variant:"outline-info",block:""},on:{click:t.registerNgChar}},[t._v("\n      決定\n    ")])],1)],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"table-light",staticStyle:{position:"sticky",top:"0"}},[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n                  名前\n                ")]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n                  NG文字\n                ")])])])}],!1,null,null,null);e.default=component.exports}}]);