var rt=Object.defineProperty;var st=(r,i,e)=>i in r?rt(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var _=(r,i,e)=>(st(r,typeof i!="symbol"?i+"":i,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w={},nt={get exports(){return w},set exports(r){w=r}},R=typeof Reflect=="object"?Reflect:null,H=R&&typeof R.apply=="function"?R.apply:function(i,e,t){return Function.prototype.apply.call(i,e,t)},I;R&&typeof R.ownKeys=="function"?I=R.ownKeys:Object.getOwnPropertySymbols?I=function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:I=function(i){return Object.getOwnPropertyNames(i)};function at(r){console&&console.warn&&console.warn(r)}var B=Number.isNaN||function(i){return i!==i};function f(){f.init.call(this)}nt.exports=f;w.once=ct;f.EventEmitter=f;f.prototype._events=void 0;f.prototype._eventsCount=0;f.prototype._maxListeners=void 0;var G=10;function L(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}Object.defineProperty(f,"defaultMaxListeners",{enumerable:!0,get:function(){return G},set:function(r){if(typeof r!="number"||r<0||B(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");G=r}});f.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};f.prototype.setMaxListeners=function(i){if(typeof i!="number"||i<0||B(i))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+i+".");return this._maxListeners=i,this};function K(r){return r._maxListeners===void 0?f.defaultMaxListeners:r._maxListeners}f.prototype.getMaxListeners=function(){return K(this)};f.prototype.emit=function(i){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);var s=i==="error",n=this._events;if(n!==void 0)s=s&&n.error===void 0;else if(!s)return!1;if(s){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var d=n[i];if(d===void 0)return!1;if(typeof d=="function")H(d,this,e);else for(var g=d.length,b=W(d,g),t=0;t<g;++t)H(b[t],this,e);return!0};function q(r,i,e,t){var s,n,a;if(L(e),n=r._events,n===void 0?(n=r._events=Object.create(null),r._eventsCount=0):(n.newListener!==void 0&&(r.emit("newListener",i,e.listener?e.listener:e),n=r._events),a=n[i]),a===void 0)a=n[i]=e,++r._eventsCount;else if(typeof a=="function"?a=n[i]=t?[e,a]:[a,e]:t?a.unshift(e):a.push(e),s=K(r),s>0&&a.length>s&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(i)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=r,u.type=i,u.count=a.length,at(u)}return r}f.prototype.addListener=function(i,e){return q(this,i,e,!1)};f.prototype.on=f.prototype.addListener;f.prototype.prependListener=function(i,e){return q(this,i,e,!0)};function ot(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Y(r,i,e){var t={fired:!1,wrapFn:void 0,target:r,type:i,listener:e},s=ot.bind(t);return s.listener=e,t.wrapFn=s,s}f.prototype.once=function(i,e){return L(e),this.on(i,Y(this,i,e)),this};f.prototype.prependOnceListener=function(i,e){return L(e),this.prependListener(i,Y(this,i,e)),this};f.prototype.removeListener=function(i,e){var t,s,n,a,u;if(L(e),s=this._events,s===void 0)return this;if(t=s[i],t===void 0)return this;if(t===e||t.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete s[i],s.removeListener&&this.emit("removeListener",i,t.listener||e));else if(typeof t!="function"){for(n=-1,a=t.length-1;a>=0;a--)if(t[a]===e||t[a].listener===e){u=t[a].listener,n=a;break}if(n<0)return this;n===0?t.shift():ut(t,n),t.length===1&&(s[i]=t[0]),s.removeListener!==void 0&&this.emit("removeListener",i,u||e)}return this};f.prototype.off=f.prototype.removeListener;f.prototype.removeAllListeners=function(i){var e,t,s;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[i]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[i]),this;if(arguments.length===0){var n=Object.keys(t),a;for(s=0;s<n.length;++s)a=n[s],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=t[i],typeof e=="function")this.removeListener(i,e);else if(e!==void 0)for(s=e.length-1;s>=0;s--)this.removeListener(i,e[s]);return this};function V(r,i,e){var t=r._events;if(t===void 0)return[];var s=t[i];return s===void 0?[]:typeof s=="function"?e?[s.listener||s]:[s]:e?ft(s):W(s,s.length)}f.prototype.listeners=function(i){return V(this,i,!0)};f.prototype.rawListeners=function(i){return V(this,i,!1)};f.listenerCount=function(r,i){return typeof r.listenerCount=="function"?r.listenerCount(i):k.call(r,i)};f.prototype.listenerCount=k;function k(r){var i=this._events;if(i!==void 0){var e=i[r];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}f.prototype.eventNames=function(){return this._eventsCount>0?I(this._events):[]};function W(r,i){for(var e=new Array(i),t=0;t<i;++t)e[t]=r[t];return e}function ut(r,i){for(;i+1<r.length;i++)r[i]=r[i+1];r.pop()}function ft(r){for(var i=new Array(r.length),e=0;e<i.length;++e)i[e]=r[e].listener||r[e];return i}function ct(r,i){return new Promise(function(e,t){function s(a){r.removeListener(i,n),t(a)}function n(){typeof r.removeListener=="function"&&r.removeListener("error",s),e([].slice.call(arguments))}z(r,i,n,{once:!0}),i!=="error"&&lt(r,s,{once:!0})})}function lt(r,i,e){typeof r.on=="function"&&z(r,"error",i,e)}function z(r,i,e,t){if(typeof r.on=="function")t.once?r.once(i,e):r.on(i,e);else if(typeof r.addEventListener=="function")r.addEventListener(i,function s(n){t.once&&r.removeEventListener(i,s),e(n)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r)}class dt{constructor(){_(this,"store");this.store=new Set}add(i){this.store.add(i)}grab(i){for(const e of this.store)if(i(e))return this.store.delete(e),e}}class pt extends w.EventEmitter{constructor(i){super(),this.element=i}chunk(i,e){this.emit("chunk",i,e)}done(){this.emit("done")}meta(i,e){this.emit("meta",i,e)}}const Q=new dt,M=new Map;class J extends window.MediaSource{addSourceBuffer(i){try{const e=super.addSourceBuffer(i);e.mode="sequence";const t=this,s=M.get(t);M.delete(t);const n=Q.grab(a=>{var u;return((u=a==null?void 0:a.element)==null?void 0:u.src)===s});return!s||!n?(console.log("reverse search failed"),e):(console.log("reverse search found =>",n.element.src),n.meta(i,t.duration),e.appendBuffer=new Proxy(e.appendBuffer,{apply(a,u,d){const g=d[0];Reflect.apply(a,u,d),e.addEventListener("update",function(){n.element.currentTime=n.element.buffered.end(0)-9,n.chunk(g,n.element.buffered.end(0)),t.duration-n.element.buffered.end(0)<1&&(e.abort(),t.endOfStream(),n.done())},{once:!0})}}),e)}catch(e){throw console.log(e),e}}}const gt={createObjectURL:new Proxy(window.URL.createObjectURL,{apply(r,i,e){const t=Reflect.apply(r,i,e),s=e[0];return s instanceof J&&M.set(s,t),t}}),revokeObjectURL:new Proxy(URL.revokeObjectURL,{apply(r,i,e){return Reflect.apply(r,i,e)}})};window.MediaSource=J;Object.assign(window.URL,gt);var C=function(){function r(){this.listeners={}}var i=r.prototype;return i.on=function(t,s){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(s)},i.off=function(t,s){if(!this.listeners[t])return!1;var n=this.listeners[t].indexOf(s);return this.listeners[t]=this.listeners[t].slice(0),this.listeners[t].splice(n,1),n>-1},i.trigger=function(t){var s=this.listeners[t];if(s)if(arguments.length===2)for(var n=s.length,a=0;a<n;++a)s[a].call(this,arguments[1]);else for(var u=Array.prototype.slice.call(arguments,1),d=s.length,g=0;g<d;++g)s[g].apply(this,u)},i.dispose=function(){this.listeners={}},i.pipe=function(t){this.on("data",function(s){t.push(s)})},r}();function P(){return P=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},P.apply(this,arguments)}var A;typeof window<"u"?A=window:typeof $<"u"?A=$:typeof self<"u"?A=self:A={};var F=A,ht=function(i){return F.atob?F.atob(i):Buffer.from(i,"base64").toString("binary")};function mt(r){for(var i=ht(r),e=new Uint8Array(i.length),t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return e}/*! @name m3u8-parser @version 6.0.0 @license Apache-2.0 */class bt extends C{constructor(){super(),this.buffer=""}push(i){let e;for(this.buffer+=i,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)}}const Et=String.fromCharCode(9),N=function(r){const i=/([0-9.]*)?@?([0-9.]*)?/.exec(r||""),e={};return i[1]&&(e.length=parseInt(i[1],10)),i[2]&&(e.offset=parseInt(i[2],10)),e},Tt=function(){const r="[^=]*",i='"[^"]*"|[^,]*',e="(?:"+r+")=(?:"+i+")";return new RegExp("(?:^|,)("+e+")")},p=function(r){const i={};if(!r)return i;const e=r.split(Tt());let t=e.length,s;for(;t--;)e[t]!==""&&(s=/([^=]*)=(.*)/.exec(e[t]).slice(1),s[0]=s[0].replace(/^\s+|\s+$/g,""),s[1]=s[1].replace(/^\s+|\s+$/g,""),s[1]=s[1].replace(/^['"](.*)['"]$/g,"$1"),i[s[0]]=s[1]);return i};class vt extends C{constructor(){super(),this.customParsers=[],this.tagMappers=[]}push(i){let e,t;if(i=i.trim(),i.length===0)return;if(i[0]!=="#"){this.trigger("data",{type:"uri",uri:i});return}this.tagMappers.reduce((n,a)=>{const u=a(i);return u===i?n:n.concat([u])},[i]).forEach(n=>{for(let a=0;a<this.customParsers.length;a++)if(this.customParsers[a].call(this,n))return;if(n.indexOf("#EXT")!==0){this.trigger("data",{type:"comment",text:n.slice(1)});return}if(n=n.replace("\r",""),e=/^#EXTM3U/.exec(n),e){this.trigger("data",{type:"tag",tagType:"m3u"});return}if(e=/^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(n),e){t={type:"tag",tagType:"inf"},e[1]&&(t.duration=parseFloat(e[1])),e[2]&&(t.title=e[2]),this.trigger("data",t);return}if(e=/^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(n),e){t={type:"tag",tagType:"targetduration"},e[1]&&(t.duration=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-VERSION:([0-9.]*)?/.exec(n),e){t={type:"tag",tagType:"version"},e[1]&&(t.version=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(n),e){t={type:"tag",tagType:"media-sequence"},e[1]&&(t.number=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(n),e){t={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(t.number=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(n),e){t={type:"tag",tagType:"playlist-type"},e[1]&&(t.playlistType=e[1]),this.trigger("data",t);return}if(e=/^#EXT-X-BYTERANGE:(.*)?$/.exec(n),e){t=P(N(e[1]),{type:"tag",tagType:"byterange"}),this.trigger("data",t);return}if(e=/^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(n),e){t={type:"tag",tagType:"allow-cache"},e[1]&&(t.allowed=!/NO/.test(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-MAP:(.*)$/.exec(n),e){if(t={type:"tag",tagType:"map"},e[1]){const a=p(e[1]);a.URI&&(t.uri=a.URI),a.BYTERANGE&&(t.byterange=N(a.BYTERANGE))}this.trigger("data",t);return}if(e=/^#EXT-X-STREAM-INF:(.*)$/.exec(n),e){if(t={type:"tag",tagType:"stream-inf"},e[1]){if(t.attributes=p(e[1]),t.attributes.RESOLUTION){const a=t.attributes.RESOLUTION.split("x"),u={};a[0]&&(u.width=parseInt(a[0],10)),a[1]&&(u.height=parseInt(a[1],10)),t.attributes.RESOLUTION=u}t.attributes.BANDWIDTH&&(t.attributes.BANDWIDTH=parseInt(t.attributes.BANDWIDTH,10)),t.attributes["FRAME-RATE"]&&(t.attributes["FRAME-RATE"]=parseFloat(t.attributes["FRAME-RATE"])),t.attributes["PROGRAM-ID"]&&(t.attributes["PROGRAM-ID"]=parseInt(t.attributes["PROGRAM-ID"],10))}this.trigger("data",t);return}if(e=/^#EXT-X-MEDIA:(.*)$/.exec(n),e){t={type:"tag",tagType:"media"},e[1]&&(t.attributes=p(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-ENDLIST/.exec(n),e){this.trigger("data",{type:"tag",tagType:"endlist"});return}if(e=/^#EXT-X-DISCONTINUITY/.exec(n),e){this.trigger("data",{type:"tag",tagType:"discontinuity"});return}if(e=/^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(n),e){t={type:"tag",tagType:"program-date-time"},e[1]&&(t.dateTimeString=e[1],t.dateTimeObject=new Date(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-KEY:(.*)$/.exec(n),e){t={type:"tag",tagType:"key"},e[1]&&(t.attributes=p(e[1]),t.attributes.IV&&(t.attributes.IV.substring(0,2).toLowerCase()==="0x"&&(t.attributes.IV=t.attributes.IV.substring(2)),t.attributes.IV=t.attributes.IV.match(/.{8}/g),t.attributes.IV[0]=parseInt(t.attributes.IV[0],16),t.attributes.IV[1]=parseInt(t.attributes.IV[1],16),t.attributes.IV[2]=parseInt(t.attributes.IV[2],16),t.attributes.IV[3]=parseInt(t.attributes.IV[3],16),t.attributes.IV=new Uint32Array(t.attributes.IV))),this.trigger("data",t);return}if(e=/^#EXT-X-START:(.*)$/.exec(n),e){t={type:"tag",tagType:"start"},e[1]&&(t.attributes=p(e[1]),t.attributes["TIME-OFFSET"]=parseFloat(t.attributes["TIME-OFFSET"]),t.attributes.PRECISE=/YES/.test(t.attributes.PRECISE)),this.trigger("data",t);return}if(e=/^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(n),e){t={type:"tag",tagType:"cue-out-cont"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-CUE-OUT:(.*)?$/.exec(n),e){t={type:"tag",tagType:"cue-out"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-CUE-IN:(.*)?$/.exec(n),e){t={type:"tag",tagType:"cue-in"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-SKIP:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"skip"},t.attributes=p(e[1]),t.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(t.attributes["SKIPPED-SEGMENTS"]=parseInt(t.attributes["SKIPPED-SEGMENTS"],10)),t.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(t.attributes["RECENTLY-REMOVED-DATERANGES"]=t.attributes["RECENTLY-REMOVED-DATERANGES"].split(Et)),this.trigger("data",t);return}if(e=/^#EXT-X-PART:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"part"},t.attributes=p(e[1]),["DURATION"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=parseFloat(t.attributes[a]))}),["INDEPENDENT","GAP"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=/YES/.test(t.attributes[a]))}),t.attributes.hasOwnProperty("BYTERANGE")&&(t.attributes.byterange=N(t.attributes.BYTERANGE)),this.trigger("data",t);return}if(e=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"server-control"},t.attributes=p(e[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=parseFloat(t.attributes[a]))}),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=/YES/.test(t.attributes[a]))}),this.trigger("data",t);return}if(e=/^#EXT-X-PART-INF:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"part-inf"},t.attributes=p(e[1]),["PART-TARGET"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=parseFloat(t.attributes[a]))}),this.trigger("data",t);return}if(e=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"preload-hint"},t.attributes=p(e[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach(function(a){if(t.attributes.hasOwnProperty(a)){t.attributes[a]=parseInt(t.attributes[a],10);const u=a==="BYTERANGE-LENGTH"?"length":"offset";t.attributes.byterange=t.attributes.byterange||{},t.attributes.byterange[u]=t.attributes[a],delete t.attributes[a]}}),this.trigger("data",t);return}if(e=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(n),e&&e[1]){t={type:"tag",tagType:"rendition-report"},t.attributes=p(e[1]),["LAST-MSN","LAST-PART"].forEach(function(a){t.attributes.hasOwnProperty(a)&&(t.attributes[a]=parseInt(t.attributes[a],10))}),this.trigger("data",t);return}this.trigger("data",{type:"tag",data:n.slice(4)})})}addParser({expression:i,customType:e,dataParser:t,segment:s}){typeof t!="function"&&(t=n=>n),this.customParsers.push(n=>{if(i.exec(n))return this.trigger("data",{type:"custom",data:t(n),customType:e,segment:s}),!0})}addTagMapper({expression:i,map:e}){const t=s=>i.test(s)?e(s):s;this.tagMappers.push(t)}}const Rt=r=>r.toLowerCase().replace(/-(\w)/g,i=>i[1].toUpperCase()),v=function(r){const i={};return Object.keys(r).forEach(function(e){i[Rt(e)]=r[e]}),i},D=function(r){const{serverControl:i,targetDuration:e,partTargetDuration:t}=r;if(!i)return;const s="#EXT-X-SERVER-CONTROL",n="holdBack",a="partHoldBack",u=e&&e*3,d=t&&t*2;e&&!i.hasOwnProperty(n)&&(i[n]=u,this.trigger("info",{message:`${s} defaulting HOLD-BACK to targetDuration * 3 (${u}).`})),u&&i[n]<u&&(this.trigger("warn",{message:`${s} clamping HOLD-BACK (${i[n]}) to targetDuration * 3 (${u})`}),i[n]=u),t&&!i.hasOwnProperty(a)&&(i[a]=t*3,this.trigger("info",{message:`${s} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${i[a]}).`})),t&&i[a]<d&&(this.trigger("warn",{message:`${s} clamping PART-HOLD-BACK (${i[a]}) to partTargetDuration * 2 (${d}).`}),i[a]=d)};class Ot extends C{constructor(){super(),this.lineStream=new bt,this.parseStream=new vt,this.lineStream.pipe(this.parseStream);const i=this,e=[];let t={},s,n,a=!1;const u=function(){},d={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},g="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";let b=0;this.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};let x=0,y=0;this.on("end",()=>{t.uri||!t.parts&&!t.preloadHints||(!t.map&&s&&(t.map=s),!t.key&&n&&(t.key=n),!t.timeline&&typeof b=="number"&&(t.timeline=b),this.manifest.preloadSegment=t)}),this.parseStream.on("data",function(o){let X,h;({tag(){({version(){o.version&&(this.manifest.version=o.version)},"allow-cache"(){this.manifest.allowCache=o.allowed,"allowed"in o||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange(){const c={};"length"in o&&(t.byterange=c,c.length=o.length,"offset"in o||(o.offset=x)),"offset"in o&&(t.byterange=c,c.offset=o.offset),x=c.offset+c.length},endlist(){this.manifest.endList=!0},inf(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),o.duration>0&&(t.duration=o.duration),o.duration===0&&(t.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=e},key(){if(!o.attributes){this.trigger("warn",{message:"ignoring key declaration without attribute list"});return}if(o.attributes.METHOD==="NONE"){n=null;return}if(!o.attributes.URI){this.trigger("warn",{message:"ignoring key declaration without URI"});return}if(o.attributes.KEYFORMAT==="com.apple.streamingkeydelivery"){this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:o.attributes};return}if(o.attributes.KEYFORMAT==="com.microsoft.playready"){this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.microsoft.playready"]={uri:o.attributes.URI};return}if(o.attributes.KEYFORMAT===g){if(["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(o.attributes.METHOD)===-1){this.trigger("warn",{message:"invalid key method provided for Widevine"});return}if(o.attributes.METHOD==="SAMPLE-AES-CENC"&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),o.attributes.URI.substring(0,23)!=="data:text/plain;base64,"){this.trigger("warn",{message:"invalid key URI provided for Widevine"});return}if(!(o.attributes.KEYID&&o.attributes.KEYID.substring(0,2)==="0x")){this.trigger("warn",{message:"invalid key ID provided for Widevine"});return}this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:o.attributes.KEYFORMAT,keyId:o.attributes.KEYID.substring(2)},pssh:mt(o.attributes.URI.split(",")[1])};return}o.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),n={method:o.attributes.METHOD||"AES-128",uri:o.attributes.URI},typeof o.attributes.IV<"u"&&(n.iv=o.attributes.IV)},"media-sequence"(){if(!isFinite(o.number)){this.trigger("warn",{message:"ignoring invalid media sequence: "+o.number});return}this.manifest.mediaSequence=o.number},"discontinuity-sequence"(){if(!isFinite(o.number)){this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+o.number});return}this.manifest.discontinuitySequence=o.number,b=o.number},"playlist-type"(){if(!/VOD|EVENT/.test(o.playlistType)){this.trigger("warn",{message:"ignoring unknown playlist type: "+o.playlist});return}this.manifest.playlistType=o.playlistType},map(){s={},o.uri&&(s.uri=o.uri),o.byterange&&(s.byterange=o.byterange),n&&(s.key=n)},"stream-inf"(){if(this.manifest.playlists=e,this.manifest.mediaGroups=this.manifest.mediaGroups||d,!o.attributes){this.trigger("warn",{message:"ignoring empty stream-inf attributes"});return}t.attributes||(t.attributes={}),P(t.attributes,o.attributes)},media(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||d,!(o.attributes&&o.attributes.TYPE&&o.attributes["GROUP-ID"]&&o.attributes.NAME)){this.trigger("warn",{message:"ignoring incomplete or missing media group"});return}const c=this.manifest.mediaGroups[o.attributes.TYPE];c[o.attributes["GROUP-ID"]]=c[o.attributes["GROUP-ID"]]||{},X=c[o.attributes["GROUP-ID"]],h={default:/yes/i.test(o.attributes.DEFAULT)},h.default?h.autoselect=!0:h.autoselect=/yes/i.test(o.attributes.AUTOSELECT),o.attributes.LANGUAGE&&(h.language=o.attributes.LANGUAGE),o.attributes.URI&&(h.uri=o.attributes.URI),o.attributes["INSTREAM-ID"]&&(h.instreamId=o.attributes["INSTREAM-ID"]),o.attributes.CHARACTERISTICS&&(h.characteristics=o.attributes.CHARACTERISTICS),o.attributes.FORCED&&(h.forced=/yes/i.test(o.attributes.FORCED)),X[o.attributes.NAME]=h},discontinuity(){b+=1,t.discontinuity=!0,this.manifest.discontinuityStarts.push(e.length)},"program-date-time"(){typeof this.manifest.dateTimeString>"u"&&(this.manifest.dateTimeString=o.dateTimeString,this.manifest.dateTimeObject=o.dateTimeObject),t.dateTimeString=o.dateTimeString,t.dateTimeObject=o.dateTimeObject},targetduration(){if(!isFinite(o.duration)||o.duration<0){this.trigger("warn",{message:"ignoring invalid target duration: "+o.duration});return}this.manifest.targetDuration=o.duration,D.call(this,this.manifest)},start(){if(!o.attributes||isNaN(o.attributes["TIME-OFFSET"])){this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"});return}this.manifest.start={timeOffset:o.attributes["TIME-OFFSET"],precise:o.attributes.PRECISE}},"cue-out"(){t.cueOut=o.data},"cue-out-cont"(){t.cueOutCont=o.data},"cue-in"(){t.cueIn=o.data},skip(){this.manifest.skip=v(o.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",o.attributes,["SKIPPED-SEGMENTS"])},part(){a=!0;const c=this.manifest.segments.length,l=v(o.attributes);t.parts=t.parts||[],t.parts.push(l),l.byterange&&(l.byterange.hasOwnProperty("offset")||(l.byterange.offset=y),y=l.byterange.offset+l.byterange.length);const E=t.parts.length-1;this.warnOnMissingAttributes_(`#EXT-X-PART #${E} for segment #${c}`,o.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach((S,T)=>{S.hasOwnProperty("lastPart")||this.trigger("warn",{message:`#EXT-X-RENDITION-REPORT #${T} lacks required attribute(s): LAST-PART`})})},"server-control"(){const c=this.manifest.serverControl=v(o.attributes);c.hasOwnProperty("canBlockReload")||(c.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),D.call(this,this.manifest),c.canSkipDateranges&&!c.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint"(){const c=this.manifest.segments.length,l=v(o.attributes),E=l.type&&l.type==="PART";t.preloadHints=t.preloadHints||[],t.preloadHints.push(l),l.byterange&&(l.byterange.hasOwnProperty("offset")||(l.byterange.offset=E?y:0,E&&(y=l.byterange.offset+l.byterange.length)));const S=t.preloadHints.length-1;if(this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${S} for segment #${c}`,o.attributes,["TYPE","URI"]),!!l.type)for(let T=0;T<t.preloadHints.length-1;T++){const U=t.preloadHints[T];U.type&&U.type===l.type&&this.trigger("warn",{message:`#EXT-X-PRELOAD-HINT #${S} for segment #${c} has the same TYPE ${l.type} as preload hint #${T}`})}},"rendition-report"(){const c=v(o.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(c);const l=this.manifest.renditionReports.length-1,E=["LAST-MSN","URI"];a&&E.push("LAST-PART"),this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${l}`,o.attributes,E)},"part-inf"(){this.manifest.partInf=v(o.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",o.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),D.call(this,this.manifest)}}[o.tagType]||u).call(i)},uri(){t.uri=o.uri,e.push(t),this.manifest.targetDuration&&!("duration"in t)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),t.duration=this.manifest.targetDuration),n&&(t.key=n),t.timeline=b,s&&(t.map=s),y=0,t={}},comment(){},custom(){o.segment?(t.custom=t.custom||{},t.custom[o.customType]=o.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[o.customType]=o.data)}})[o.type].call(i)})}warnOnMissingAttributes_(i,e,t){const s=[];t.forEach(function(n){e.hasOwnProperty(n)||s.push(n)}),s.length&&this.trigger("warn",{message:`${i} lacks required attribute(s): ${s.join(", ")}`})}push(i){this.lineStream.push(i)}end(){this.lineStream.push(`
`),this.trigger("end")}addParser(i){this.parseStream.addParser(i)}addTagMapper(i){this.parseStream.addTagMapper(i)}}function Z(r){const i=new Ot;return i.push(r),i.end(),i.manifest}let m;const yt=async()=>{const r=await fetch("/hls.min.js").then(i=>i.text());if(eval.call(window,r),m=new Hls,!Hls.isSupported())throw new Error("Hls not supported")};yt();function tt(r){const i=document.createElement("video");i.muted=!0;const e=new pt(i);return Q.add(e),m.attachMedia(i),m.on(Hls.Events.MEDIA_ATTACHED,function(){m.loadSource(r),m.on(Hls.Events.MANIFEST_PARSED,function(t,s){console.log("manifest loaded, found "+s.levels.length+" quality level",m.levels)})}),e}function et(r,i){m.attachMedia(r),m.on(Hls.Events.MEDIA_ATTACHED,function(){m.loadSource(i),m.on(Hls.Events.MANIFEST_PARSED,function(e,t){console.log("manifest loaded, found "+t.levels.length+" quality level"),r.play()})})}function it(r,i,e){const t=new Blob(r,{type:e}),s=URL.createObjectURL(t),n=document.createElement("a");n.download=i,n.href=s,n.click(),URL.revokeObjectURL(s)}function At(){const i={m3u8:{parse:Z,download:tt,play:et},saveBlob:it};window.api=i}At();const j=document.querySelector(".progress");function St(r){const i=[];let e="",t=0;return tt(r).on("meta",(s,n)=>{e=s,t=n,console.log(s,n)}).on("chunk",(s,n)=>{const a=n/t*100;j.style.width=a+"%",i.push(s)}).on("done",()=>{j.style.width="0",it(i,r.replace(/[^\w\.]/gi,"")+".mp4",e)})}const It=document.querySelector(".getsource"),wt=document.querySelector(".playmedia"),Pt=document.querySelector(".parseplaylist"),O=document.querySelector(".inputm3u8"),Lt=document.querySelector("video"),Nt=new URLSearchParams(location.search).get("q");O.innerText=Nt||"/index.m3u8";It.onclick=()=>{St(O.innerText)};wt.onclick=()=>{et(Lt,O.innerText)};Pt.onclick=()=>{fetch(O.innerText).then(r=>r.text()).then(Z).then(r=>{const i=JSON.stringify(r,(t,s)=>{if(t==="uri"&&typeof s=="string"){const n=O.innerText.match(/.*\//i),a=!n||s.startsWith("http")?s:n[0]+s;return`<a href=${a}>${a}</a>`}return s},2),e=document.querySelector("pre.parse-result");e.innerHTML=i,e.querySelectorAll("a").forEach(t=>{t.onclick=s=>{s.preventDefault(),O.innerText=t.href}})})};
