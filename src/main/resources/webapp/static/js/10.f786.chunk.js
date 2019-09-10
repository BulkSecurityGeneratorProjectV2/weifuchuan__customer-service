(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return o}));var r=n(4),a=n(1);if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!r.k)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");function o(e){var t=Object(a.useRef)(null);return t.current||(t.current=Object(r.h)(e)),t.current}var c=!1;function i(){return c}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function l(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)c.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return c}function s(e){return e.current?Object(r.e)(e.current):"<unknown>"}var d=[];function f(){var e=l(Object(a.useState)(0),2)[1];return Object(a.useCallback)((function(){e((function(e){return e+1}))}),[])}var h={};function p(e,t,n){if(void 0===t&&(t="observed"),void 0===n&&(n=h),i())return e();var o=(n.useForceUpdate||f)(),c=Object(a.useRef)(null);c.current||(c.current=new r.a("observer("+t+")",(function(){o()})));var u,l,p=function(){c.current&&!c.current.isDisposed&&c.current.dispose()};if(Object(a.useDebugValue)(c,s),function(e){Object(a.useEffect)((function(){return e}),d)}((function(){p()})),c.current.track((function(){try{u=e()}catch(t){l=t}})),l)throw p(),l;return u}function m(e,t){if(i())return e;var n,r,o,c=u({forwardRef:!1},t),l=e.displayName||e.name,s=function(t,n){return p((function(){return e(t,n)}),l)};return s.displayName=l,n=c.forwardRef?Object(a.memo)(Object(a.forwardRef)(s)):Object(a.memo)(s),r=e,o=n,Object.keys(r).forEach((function(e){r.hasOwnProperty(e)&&!b[e]&&Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})),n.displayName=l,n}var b={$$typeof:!0,render:!0,compare:!0,type:!0};function v(e){var t=e.children,n=e.render,r=t||n;return"function"!==typeof r?null:p(r)}function w(e,t,n,r,a){var o="children"===t?"render":"children",c="function"===typeof e[t],i="function"===typeof e[o];return c&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+n):c||i?null:new Error("Invalid prop `"+a+"` of type `"+typeof e[t]+"` supplied to `"+n+"`, expected `function`.")}v.propTypes={children:w,render:w},v.displayName="Observer"},796:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(29),c=n.n(o),i=n(638),u=n(698),l=n(703),s=n(639),d=n(4),f=n(284),h=n(1),p=n.n(h),m=n(127),b=n(184),v=n(700),w=n(701),g=n(640),y=Object(f.a)((function(){var e=Object(b.g)(),t=Object(b.e)(),n=Object(b.f)(),r=Object(h.useCallback)(function(){var t=c()(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.sendChatMsg(e.currentContact.id,1,r),t.abrupt("return",!0);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]),o=e.currentContact&&n.otherIdToRoom.has(e.currentContact.id)?n.otherIdToRoom.get(e.currentContact.id).roomKey:void 0,i=e.currentContact&&o&&n.roomKeyToMessageList.has(o)?n.roomKeyToMessageList.get(o).slice():[],s=Object(f.b)({hasMore:!0,fetching:!1}),m=Object(h.useCallback)(c()(a.a.mark((function t(){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.currentContact||s.fetching||!s.hasMore){t.next=11;break}if(s.fetching=!0,r=n.otherIdToRoom.get(e.currentContact.id)){t.next=7;break}return t.next=6,n.fetchRoomInfo(1,e.currentContact.id);case 6:r=t.sent;case 7:return t.next=9,n.nextMessagePage(r.roomKey);case 9:o=t.sent,Object(d.i)((function(){s.fetching=!1,s.hasMore=o}));case 11:case"end":return t.stop()}}),t)}))),[]);Object(v.a)(e,n),Object(h.useEffect)((function(){s.fetching=!1,s.hasMore=!0,m(),t.emit("changeContact")}),[e.currentContact]);var y={on:function(e){var r=function(t){t.roomKey===o&&e()};n.bus.addListener("remind",r);var a=function(){e()};return t.addListener("changeContact",a),function(){t.removeListener("changeContact",a),n.bus.removeListener("remind",r)}}},C=Object(h.useCallback)(c()(a.a.mark((function t(){var r,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.config.upload){t.next=12;break}return t.next=3,Object(w.a)((function(e){e.accept="image/*",e.multiple=!1}));case 3:if(!((r=t.sent).length>0)){t.next=10;break}return t.next=7,e.config.upload(r[0]);case 7:o=t.sent,c='\n          <div>\n            <img src="'.concat(o,'"/>\n          </div>\n        '),n.sendChatMsg(e.currentContact.id,1,c);case 10:t.next=13;break;case 12:g.a.error("The upload image function is not implemented.\nPlease implement it and provided as config. ");case 13:case"end":return t.stop()}}),t)}))),[]);return p.a.createElement(x,null,p.a.createElement("div",null,p.a.createElement(j,null)),p.a.createElement("div",null,p.a.createElement("div",null,p.a.createElement("div",null,p.a.createElement(l.a,{me:n.me||{},messageList:i.slice(),other:e.currentContact||{},canRefresh:function(e){m()},goBottomListener:y})),p.a.createElement("div",null,p.a.createElement(u.a,{onSend:r,onClickImageBtn:C})))),e.currentContact?null:p.a.createElement(O,null,p.a.createElement("span",null,"\u8bf7\u9009\u62e9\u8054\u7cfb\u4eba")))})),x=m.a.div.withConfig({displayName:"ChatPanel___ChatPanel",componentId:"sc-1ilhjfb-0"})(["position:relative;overflow:hidden;display:flex;flex-direction:column;height:100%;width:100%;> div:nth-child(1){height:60px;}> div:nth-child(2){flex:1;display:flex;> div:nth-child(1){flex:2;display:flex;flex-direction:column;> div:nth-child(1){flex:1;}> div:nth-child(2){border-top:solid 1px #dcdcdc;}}}"]),O=m.a.div.withConfig({displayName:"ChatPanel___UnselectModal",componentId:"sc-1ilhjfb-1"})(["position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.2);> span{font-size:2em;}"]),j=Object(f.a)((function(){var e=Object(b.g)(),t=e.currentContact?e.currentContact:{};return p.a.createElement(C,null,p.a.createElement("div",null,p.a.createElement(i.a,{src:t.avatar,height:40,width:40})),p.a.createElement("div",null,p.a.createElement("span",null,t.nickName)))})),C=m.a.div.withConfig({displayName:"ChatPanel___Title",componentId:"sc-1ilhjfb-2"})(["display:flex;padding:1rem;background-color:",";border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:",";> div:nth-child(1){}> div:nth-child(2){flex:1;display:flex;flex-direction:column;margin-left:1rem;> span:nth-child(1){font-size:1rem;}}"],s.a.WhiteSmoke,s.a.Gainsboro);t.default=y;Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now()}}]);