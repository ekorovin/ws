(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*//*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||s.toggleClass("open"),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on(".dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// Bootstrap Select Plugin
!function(b){var a=function(d,c,f){if(f){f.stopPropagation();f.preventDefault()}this.$element=b(d);this.$newElement=null;this.button=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof c=="object"&&c);if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;this.render=a.prototype.render;this.refresh=a.prototype.refresh;this.selectAll=a.prototype.selectAll;this.deselectAll=a.prototype.deselectAll;this.init()};a.prototype={constructor:a,init:function(d){if(!this.options.container){this.$element.hide()}else{this.$element.css("visibility","hidden")}this.multiple=this.$element.prop("multiple");var f=this.$element.attr("class")!==undefined?this.$element.attr("class").split(/\s+/):"";var h=this.$element.attr("id");this.$element.after(this.createView());this.$newElement=this.$element.next(".bootstrap-select");if(this.options.container){this.selectPosition()}this.button=this.$newElement.find("> button");if(h!==undefined){var g=this;this.button.attr("data-id",h);b('label[for="'+h+'"]').click(function(){g.$newElement.find("button[data-id="+h+"]").focus()})}for(var c=0;c<f.length;c++){if(f[c]!="selectpicker"){this.$newElement.addClass(f[c])}}if(this.multiple){this.$newElement.addClass("show-tick")}this.button.addClass(this.options.style);this.checkDisabled();this.checkTabIndex();this.clickListener();this.render();this.setSize()},createDropdown:function(){var c="<div class='btn-group bootstrap-select'><button type='button' class='btn dropdown-toggle' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><ul class='dropdown-menu' role='menu'></ul></div>";return b(c)},createView:function(){var c=this.createDropdown();var d=this.createLi();c.find("ul").append(d);return c},reloadLi:function(){this.destroyLi();var c=this.createLi();this.$newElement.find("ul").append(c)},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var h=this;var e=[];var g=[];var c="";this.$element.find("option").each(function(){e.push(b(this).text())});this.$element.find("option").each(function(k){var l=b(this);var j=l.attr("class")!==undefined?l.attr("class"):"";var p=l.text();var n=l.data("subtext")!==undefined?'<small class="muted">'+l.data("subtext")+"</small>":"";var m=l.data("icon")!==undefined?'<i class="'+l.data("icon")+'"></i> ':"";if(l.is(":disabled")||l.parent().is(":disabled")){m="<span>"+m+"</span>"}p=m+'<span class="text">'+p+n+"</span>";if(h.options.hideDisabled&&(l.is(":disabled")||l.parent().is(":disabled"))){g.push('<a style="min-height: 0; padding: 0"></a>')}else{if(l.parent().is("optgroup")&&l.data("divider")!=true){if(l.index()==0){var o=l.parent().attr("label");var q=l.parent().data("subtext")!==undefined?'<small class="muted">'+l.parent().data("subtext")+"</small>":"";var i=l.parent().data("icon")?'<i class="'+l.parent().data("icon")+'"></i> ':"";o=i+'<span class="text">'+o+q+"</span>";if(l[0].index!=0){g.push('<div class="div-contain"><div class="divider"></div></div><dt>'+o+"</dt>"+h.createA(p,"opt "+j))}else{g.push("<dt>"+o+"</dt>"+h.createA(p,"opt "+j))}}else{g.push(h.createA(p,"opt "+j))}}else{if(l.data("divider")==true){g.push('<div class="div-contain"><div class="divider"></div></div>')}else{if(b(this).data("hidden")==true){g.push("")}else{g.push(h.createA(p,j))}}}}});if(e.length>0){for(var d=0;d<e.length;d++){var f=this.$element.find("option").eq(d);c+="<li rel="+d+">"+g[d]+"</li>"}}if(!this.multiple&&this.$element.find("option:selected").length==0&&!h.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return b(c)},createA:function(d,c){return'<a tabindex="0" class="'+c+'">'+d+'<i class="icon-ok check-mark"></i></a>'},render:function(){var h=this;this.$element.find("option").each(function(i){h.setDisabled(i,b(this).is(":disabled")||b(this).parent().is(":disabled"));h.setSelected(i,b(this).is(":selected"))});var g=this.$element.find("option:selected").map(function(i,k){var j;if(h.options.showSubtext&&b(this).attr("data-subtext")&&!h.multiple){j=' <small class="muted">'+b(this).data("subtext")+"</small>"}else{j=""}if(b(this).attr("title")!=undefined){return b(this).attr("title")}else{return b(this).text()+j}}).toArray();var f=!this.multiple?g[0]:g.join(", ");if(h.multiple&&h.options.selectedTextFormat.indexOf("count")>-1){var c=h.options.selectedTextFormat.split(">");var e=this.options.hideDisabled?":not([disabled])":"";if((c.length>1&&g.length>c[1])||(c.length==1&&g.length>=2)){f=g.length+" of "+this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+e).length+" selected"}}if(!f){f=h.options.title!=undefined?h.options.title:h.options.noneSelectedText}var d;if(this.options.showSubtext&&this.$element.find("option:selected").attr("data-subtext")){d=' <small class="muted">'+this.$element.find("option:selected").data("subtext")+"</small>"}else{d=""}h.$newElement.find(".filter-option").html(f+d)},setSize:function(){if(this.options.container){this.$newElement.toggle(this.$element.parent().is(":visible"))}var j=this;var e=this.$newElement.find(".dropdown-menu");var l=e.find("li > a");var o=this.$newElement.addClass("open").find(".dropdown-menu li > a").outerHeight();this.$newElement.removeClass("open");var h=e.find("li .divider").outerHeight(true);var g=this.$newElement.offset().top;var k=this.$newElement.outerHeight();var c=parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom"))+parseInt(e.css("border-top-width"))+parseInt(e.css("border-bottom-width"));var d=this.options.hideDisabled?":not(.disabled)":"";var f;if(this.options.size=="auto"){var p=function(){var q=g-b(window).scrollTop();var u=window.innerHeight;var r=c+parseInt(e.css("margin-top"))+parseInt(e.css("margin-bottom"))+2;var t=u-q-k-r;var s;f=t;if(j.$newElement.hasClass("dropup")){f=q-r}if((e.find("li").length+e.find("dt").length)>3){s=o*3+r-2}else{s=0}e.css({"max-height":f+"px","overflow-y":"auto","min-height":s+"px"})};p();b(window).resize(p);b(window).scroll(p)}else{if(this.options.size&&this.options.size!="auto"&&e.find("li"+d).length>this.options.size){var n=e.find("li"+d+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index();var m=e.find("li").slice(0,n+1).find(".div-contain").length;f=o*this.options.size+m*h+c;e.css({"max-height":f+"px","overflow-y":"auto"})}}if(this.options.width=="auto"){this.$newElement.find(".dropdown-menu").css("min-width","0");var i=this.$newElement.find(".dropdown-menu").css("width");this.$newElement.css("width",i);if(this.options.container){this.$element.css("width",i)}}else{if(this.options.width){if(this.options.container){this.$element.css("width",this.options.width);this.$newElement.width(this.$element.outerWidth())}else{this.$newElement.css("width",this.options.width)}}else{if(this.options.container){this.$newElement.width(this.$element.outerWidth())}}}},selectPosition:function(){var e=b(this.options.container).offset();var d=this.$element.offset();if(e&&d){var f=d.top-e.top;var c=d.left-e.left;this.$newElement.appendTo(this.options.container);this.$newElement.css({position:"absolute",top:f+"px",left:c+"px"})}},refresh:function(){this.reloadLi();this.render();this.setSize();this.checkDisabled();if(this.options.container){this.selectPosition()}},setSelected:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("selected")}else{this.$newElement.find("li").eq(c).removeClass("selected")}},setDisabled:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1)}else{this.$newElement.find("li").eq(c).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element.is(":disabled")||this.$element.attr("readonly")},checkDisabled:function(){if(this.isDisabled()){this.button.addClass("disabled");this.button.click(function(c){c.preventDefault()});this.button.attr("tabindex","-1")}else{if(!this.isDisabled()&&this.button.hasClass("disabled")){this.button.removeClass("disabled");this.button.click(function(){return true});this.button.removeAttr("tabindex")}}},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var c=this.$element.attr("tabindex");this.button.attr("tabindex",c)}},clickListener:function(){var c=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(d){d.stopPropagation()});this.$newElement.on("click","li a",function(j){var g=b(this).parent().index(),i=b(this).parent(),d=i.parents(".bootstrap-select"),h=c.$element.val();if(c.multiple){j.stopPropagation()}j.preventDefault();if(c.$element.not(":disabled")&&!b(this).parent().hasClass("disabled")){if(!c.multiple){c.$element.find("option").prop("selected",false);c.$element.find("option").eq(g).prop("selected",true)}else{var f=c.$element.find("option").eq(g).prop("selected");if(f){c.$element.find("option").eq(g).prop("selected",false)}else{c.$element.find("option").eq(g).prop("selected",true)}}d.find(".filter-option").html(i.text());d.find("button").focus();if(h!=c.$element.val()){c.$element.trigger("change")}c.render()}});this.$newElement.on("click","li.disabled a, li dt, li .div-contain",function(f){f.preventDefault();f.stopPropagation();var d=b(this).parent().parents(".bootstrap-select");d.find("button").focus()});this.$element.on("change",function(d){c.render()})},val:function(c){if(c!=undefined){this.$element.val(c);this.$element.trigger("change");return this.$element}else{return this.$element.val()}},selectAll:function(){this.$element.find("option").prop("selected",true).attr("selected","selected");this.render()},deselectAll:function(){this.$element.find("option").prop("selected",false).removeAttr("selected");this.render()},keydown:function(n){var o,m,h,l,j,i,p,d,g;o=b(this);h=o.parent();m=b("[role=menu] li:not(.divider):visible a",h);if(!m.length){return}if(/(38|40)/.test(n.keyCode)){l=m.index(m.filter(":focus"));i=m.parent(":not(.disabled)").first().index();p=m.parent(":not(.disabled)").last().index();j=m.eq(l).parent().nextAll(":not(.disabled)").eq(0).index();d=m.eq(l).parent().prevAll(":not(.disabled)").eq(0).index();g=m.eq(j).parent().prevAll(":not(.disabled)").eq(0).index();if(n.keyCode==38){if(l!=g&&l>d){l=d}if(l<i){l=i}}if(n.keyCode==40){if(l!=g&&l<j){l=j}if(l>p){l=p}}m.eq(l).focus()}else{var f={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};var c=[];m.each(function(){if(b(this).parent().is(":not(.disabled)")){if(b.trim(b(this).text().toLowerCase()).substring(0,1)==f[n.keyCode]){c.push(b(this).parent().index())}}});var k=b(document).data("keycount");k++;b(document).data("keycount",k);var q=b.trim(b(":focus").text().toLowerCase()).substring(0,1);if(q!=f[n.keyCode]){k=1;b(document).data("keycount",k)}else{if(k>=c.length){b(document).data("keycount",0)}}m.eq(c[k-1]).focus()}if(/(13)/.test(n.keyCode)){b(":focus").click();h.addClass("open");b(document).data("keycount",0)}}};b.fn.selectpicker=function(e,f){var c=arguments;var g;var d=this.each(function(){if(b(this).is("select")){var m=b(this),l=m.data("selectpicker"),h=typeof e=="object"&&e;if(!l){m.data("selectpicker",(l=new a(this,h,f)))}else{if(h){for(var j in h){l.options[j]=h[j]}}}if(typeof e=="string"){var k=e;if(l[k] instanceof Function){[].shift.apply(c);g=l[k].apply(l,c)}else{g=l.options[k]}}}});if(g!=undefined){return g}else{return d}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",width:null,container:false,hideDisabled:false,showSubtext:false};b(document).data("keycount",0).on("keydown","[data-toggle=dropdown], [role=menu]",a.prototype.keydown)}(window.jQuery);

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				if($(this).is('img')) $(this).attr('src', $(this).attr('src') + '?timestamp=' + new Date().getTime());
				$(this).load(function(){
					setTimeout(function(){
						if(++count == total) callback();
					}, 0)
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true, start the show
			if (slider.settings.auto && slider.settings.autoStart) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}
			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width();
					slidesShowing = Math.floor(slider.viewport.width() / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = slider.children.length / getMoveBy();
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.delegate('a', 'click', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
			slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
			// if clicked pager link is not active, continue with the goToSlide call
			if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
			e.preventDefault();
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
				else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', 50);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}
		
		init();
		
		// returns the current jQuery object
		return this;
	}

})(jQuery);

/*!
 * jQuery imagesLoaded plugin v2.1.0
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
g}})(jQuery);


/* Customize form */

// Show hide label
jQuery(".DefaultLabel").each(function() {
	if (jQuery(this).val() == "") {
		jQuery(this).siblings(".DefaultLabelContent").show();
	} else {
		jQuery(this).siblings(".DefaultLabelContent").hide();
	}
	jQuery(this).focus(function() {
		jQuery(this).siblings(".DefaultLabelContent").hide();
	}).blur(function() {
		if (jQuery(this).val() == "") {
			jQuery(this).siblings(".DefaultLabelContent").show();
		}
	});
});

/* FILE BROWSE OBJECT */
/*
 * FileBrowseUI will be created to replace the original file browse FileBrowseUI
 * will be created like this : <div> : Wrapper for all elements <input
 * type="text" /> : Fake Text Input to show the browse path ID and Name of the
 * origin browse will be copy to this textbox and remove them on the original
 * browse <div><input type="file" /></div> : <div> = wrapper for original file
 * browse </div> Options : browseButtonPos : set the Browse button position
 * left/right then top/bottom(affected when breakline==TRUE) default: "right"
 * breakline : if set to TRUE, textbox and Browse button are on 2 line
 * (top/bottom available) browseButtonClassName : set the classname for Browse
 * button, default = DefaultBrowseBtn browseTextBoxClassName : set the classname
 * for the TextBox, default = DefaultBrowseTextBox
 */
FileBrowseUIGroup = function() {
	this.FileBrowseUIGroup = getElementsByClassName(arguments[0]);
	for ( var i = 0; i < this.FileBrowseUIGroup.length; i++) {
		new FileBrowseUI(this.FileBrowseUIGroup[i], arguments[1]);
	}
};
FileBrowseUI = function() {
	this.options = {
		browseButtonPos : arguments[1] && arguments[1].browseButtonPos ? arguments[1].browseButtonPos
				: "right",
		browseButtonClassName : arguments[1]
				&& arguments[1].browseButtonClassName ? arguments[1].browseButtonClassName
				: "DefaultBrowseBtn",
		browseTextBoxClassName : arguments[1]
				&& arguments[1].browseTextBoxClassName ? arguments[1].browseTextBoxClassName
				: "DefaultBrowseTextBox",
		breakline : arguments[1] && arguments[1].breakline ? arguments[1].breakline
				: false,
		browseButtonText : arguments[1].browseButtonText ? arguments[1].browseButtonText
				: "Browse",
		browseTextBoxValue : arguments[1].browseTextBoxValue ? arguments[1].browseTextBoxValue
				: ""

	};
	// Left/Right + Top/Bottom
	var lr = this.options.browseButtonPos.split(" ")[0];
	var tb = this.options.browseButtonPos.split(" ")[1];
	// Original file browse
	this.originalFileBrowse = arguments[0];
	// Create file browse wrapper
	var inputWrapper = document.createElement("div");
	this.originalFileBrowse.parentNode.insertBefore(inputWrapper,
			this.originalFileBrowse);
	inputWrapper.appendChild(this.originalFileBrowse);

	// Create fake input text for fake Browse...
	var fakeTextBoxWrapper = document.createElement("div");
	this.fakeTextBoxInput = document.createElement("input");
	this.fakeTextBoxInput.id = "fake_" + this.originalFileBrowse.id;
	// this.originalFileBrowse.id = "";
	this.fakeTextBoxInput.name = "fake_" + this.originalFileBrowse.name;
	// this.originalFileBrowse.name = "";
	inputWrapper.parentNode.insertBefore(fakeTextBoxWrapper, inputWrapper);
	fakeTextBoxWrapper.appendChild(this.fakeTextBoxInput);

	// Create BrowseUI Wrapper for al element
	var browseUIWrapper = document.createElement("div");
	inputWrapper.parentNode.insertBefore(browseUIWrapper, inputWrapper);
	// Append to Browser
	if (typeof (tb) == "undefined" || tb == "bottom") {
		browseUIWrapper.appendChild(fakeTextBoxWrapper);
		browseUIWrapper.appendChild(inputWrapper);
	} else {
		browseUIWrapper.appendChild(inputWrapper);
		browseUIWrapper.appendChild(fakeTextBoxWrapper);
	}
	browseUIWrapper.className = this.originalFileBrowse.className;

	// Prepare styling...
	browseUIWrapper.style.overflow = "hidden";
	// Browse button
	inputWrapper.style.position = "relative";
	inputWrapper.style.overflow = "hidden";
	this.originalFileBrowse.style.fontSize = "10em";
	this.originalFileBrowse.style.position = "absolute";
	this.originalFileBrowse.style.Zindex = "1";
	this.originalFileBrowse.style.top = "0px";
	this.originalFileBrowse.style.right = "0px";
	this.originalFileBrowse.className = "";
	inputWrapper.className += this.options.browseButtonClassName;

	// Start Modify
	var textBrowse = document.createElement("div");
	inputWrapper.appendChild(textBrowse);
	textBrowse.innerHTML = this.options.browseButtonText;
	// End Modify
	// Event: onmousedown state
	inputWrapper.onmousedown = function() {
		inputWrapper.className += " FileBrowseMouseDown";
	};
	inputWrapper.onmouseout = function() {
		inputWrapper.className = inputWrapper.className.replace(
				/FileBrowseMouseDown/, "");
	};

	var ie = document.all;
	if (ie) {
		inputWrapper.style.styleFloat = lr;
		this.originalFileBrowse.style.filter = "alpha(opacity=0)";
	} else {
		inputWrapper.style.cssFloat = lr;
		this.originalFileBrowse.style.opacity = 0;
		this.originalFileBrowse.style.MozOpacity = 0;
	}
	// Browse TextBox: this.fakeTextBoxInput
	fakeTextBoxWrapper.className += "TextBoxWrapper";
	this.fakeTextBoxInput.className += this.options.browseTextBoxClassName;
	this.fakeTextBoxInput.style.margin = "0px";
	this.fakeTextBoxInput.style.outline = "none";
	this.fakeTextBoxInput.value = this.options.browseTextBoxValue;
	if (ie) {
		if (lr == "left") {
			fakeTextBoxWrapper.style.styleFloat = "right";
		} else {
			fakeTextBoxWrapper.style.styleFloat = "left";
		}
		this.fakeTextBoxInput.style.marginTop = "-1px"; /* fix for IE */
	} else {
		if (lr == "left") {
			fakeTextBoxWrapper.style.cssFloat = "right";
		} else {
			fakeTextBoxWrapper.style.cssFloat = "left";
		}
		fakeTextBoxWrapper.style.width = this.fakeTextBoxInput.offsetWidth
				+ "px"; /* fix for MAC Safari not effected others */
	}
	// browseUIWrapper dimension
	browseUIWrapper.style.width = this.options.breakline ? this.fakeTextBoxInput.offsetWidth
			+ "px"
			: inputWrapper.offsetWidth + this.fakeTextBoxInput.offsetWidth + 6
					+ "px";
	// Event
	var self = this;
	this.originalFileBrowse.onchange = function() {
		self.updatedFileBrowseUI();
	};

	/* method */
	// Update FileBrowseUI
	FileBrowseUI.prototype.updatedFileBrowseUI = function() {
		this.fakeTextBoxInput.value = this.originalFileBrowse.value;
	};
};

/* Misc functions */
function getElementsByClassName(className) {
	var children = document.getElementsByTagName('*') || document.all;
	var elements = new Array();

	for ( var i = 0; i < children.length; i++) {
		var child = children[i];
		var classNames = child.className.split(' ');
		for ( var j = 0; j < classNames.length; j++) {
			if (classNames[j] == className) {
				elements.push(child);
				break;
			}
		}
	}
	return elements;
}

// Cancel Bubling
function stopEventBubling(e) {
	if (!e)
		e = window.event;
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

// Change CSS style to DOM style
function DOMStyle(styleProp) {
	parseString = styleProp.split("-");
	styleProp = "";
	for ( var i = 1; i < parseString.length; i++) {
		parseString[i] = parseString[i].replace(parseString[i].charAt(0),
				parseString[i].charAt(0).toUpperCase());
	}
	for ( var i = 0; i < parseString.length; i++) {
		styleProp += parseString[i];
	}
	return styleProp;
}

function getStyle(element, styleProp) {
	if (element.currentStyle) {
		styleProp = DOMStyle(styleProp);
		var value = element.currentStyle[styleProp];
	} else {
		if (window.getComputedStyle) {
			var value = document.defaultView.getComputedStyle(element, null)
					.getPropertyValue(styleProp);
		}
	}
	return value;
}

function findAbsPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return {
		left : curleft,
		top : curtop
	};
}

var JQueryCheckboxController = function(jEl, opts) {
	var options = {
		onChangedCallBack : undefined,
		activeClass : 'Active'
	};
	var self = this;
	var onCheckboxSelectedChange = function(evt) {
		var checkbox = self.checkbox.get(0);
		toggleLabelClass(checkbox);

		if (typeof options.onChangedCallBack != 'undefined') {
			options.onChangedCallBack(self.checkbox.get(0).checked,
					self.checkbox.val());
		}
	};
	var init = function() {
		$.extend(options, opts);

		self.checkbox = jEl;
		self.label = jEl.next();

		if (self.checkbox.prop("checked") == true) {
			self.label.addClass(options.activeClass);
		} else {
			self.label.removeClass(options.activeClass);
		}
		self.checkbox.unbind("change").bind("change", onCheckboxSelectedChange);
	};

	var toggleLabelClass = function(checkbox) {
		if (checkbox.checked == true) {
			self.label.addClass(options.activeClass);
		} else {
			self.label.removeClass(options.activeClass);
		}
	};

	this.getSelected = function() {
		return self.checkbox.get(0).checked;
	};

	this.setSelected = function(value) {
		self.checkbox.get(0).checked = value;
		toggleLabelClass(self.checkbox.get(0));
	};
	init();
};
/*
jQuery.fn.extend({
	checkbox : function(opts) {

		if (typeof opts != 'undefined') {
			this.each(function() {

				var checkBoxUI = new JQueryCheckboxController($(this), opts);
				$(this).get(0).checkbox = checkBoxUI;

			});
		} else {
			return $(this).get(0).checkbox;
		}

	}
});
*/
/**
 * jquery plugins checkbox
 */
(function ($) {
	var checkboxes = [];
	var options = {
		changeHandler : function(e){},
		activeClass : 'Active',
		bindreset: true
	};
	
	var invalidate = function () {
		var checkbox = $(this);
		var options = $(this).data("options");
		var label = $(checkbox).parent().find("label[for=" + $(checkbox).attr("name") +"]");
		if (checkbox.prop("checked")) {
			label.addClass(options.activeClass);
		} else {
			label.removeClass(options.activeClass);
		}
	};
	
	var onCheckboxSelectedChange = function(evt) {
		var checkbox = $(this);
		var options = $(this).data("options");
		invalidate.call(checkbox);
		evt.data = checkbox.val();
		if (options.changeHandler != undefined) {
			options.changeHandler(evt);
		}
	};
	
	var bindFormEvents = function () {
		
		var parent = jQuery(this).parent();
		var p = null;
		var toContinue = false;
		do {        
			p = jQuery(parent).get(0);
			if (p && p.nodeName && p.nodeName.toLowerCase() == 'form') {
				break;
			}
			toContinue = (parent.length > 0);
			parent = parent.parent();           
		} while (toContinue);
		
		var resetHandler = function () {
			setTimeout(resetValue, 100);
		}
		
		jQuery(p).unbind('reset', resetHandler).bind('reset', resetHandler);
	};

	var resetValue = function() {
		var el;
		for (var i in checkboxes) {
			el = checkboxes[i];         
			invalidate.call(el);
		}
		
	};
	
	var checkbox = {
		init: function (opts) {
			return this.each(function (e) {
				var data = $(this).data("options");
				if (!data) {
					data = {};
					$.extend(data, options);
					$(this).data("options", data);                  
				}           
				$.extend(data, opts);
				data.id = (new Date()).getTime();
				$(this).unbind("change", onCheckboxSelectedChange).bind("change", onCheckboxSelectedChange);
				invalidate.call($(this));
				if(options.bindreset) {                 
					checkboxes[data.id] = this;
					bindFormEvents.call(this);
				}
			});
		},
		checked: function() {
			return $(this).prop("checked");
		},
		selectedValue: function (param) {
			if (!param) {
				return $(this).prop("checked");
			} else {
				$(this).prop("checked", value);
				invalidate.call($(this));
			}
			return ;
		},
		
		toggleCheck: function(value) {
			var checked = $(this).prop("checked");
			$(this).prop("checked", !checked);
			invalidate.call($(this));
		},
		changeHandler: function (func) {
			var options = $(this).data("options");
			options.changeHandler = func;
		},
		destroy: function() {
			//dereference to the object             
			delete checkboxes[this];
			//unbind and events
			$(this).unbind("change", onCheckboxSelectedChange);
		}
	};
	
	$.fn.checkbox = function(param) {
		if (typeof param == 'string') {
			return checkbox[param].apply(this, Array.prototype.slice.call( arguments, 1 ));
		} else if (typeof param === 'object' || !param) {
			return checkbox.init.apply(this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.checkbox' );
		}
		
	}
})(jQuery);
/**
 * jquery plugins: radio group
 */
(function ($) {
	//declare private methods,
	var radioGroups = [];
	
	var options = {
		changeHandler : function(value){},
		activeClass : 'Active',
		bindreset: true
	};
	
	
	var invalidate = function () {
		var options;
		var groupName;
		var label = $(this).parent().find("label[for='" + $(this).attr("id") + "']");
		
		groupName = $(this).attr("name");
		options = radioGroups[groupName].options;
		$(this).parent().find('input:radio[name="' + groupName + '"]').each(function(){
			if ($(this).prop("checked") == true) {
				$(this).parent().find("label[for='" + $(this).attr("id") + "']").addClass(options.activeClass);
			} else {
				$(this).parent().find("label[for='" + $(this).attr("id") + "']").removeClass(options.activeClass);
			}
			
		})
		
	};
	
	var bindFormEvents = function () {
		var parent = jQuery(this).parent();
		var p = null;
		var toContinue = false;
		do {        
			p = jQuery(parent).get(0);
			if (p && p.nodeName && p.nodeName.toLowerCase() == 'form') {
				break;
			}
			toContinue = (parent.length > 0);
			parent = parent.parent();           
		} while (toContinue);
		
		var resetHandler = function () {
			setTimeout(resetValue, 100);
		}
		
		jQuery(p).unbind('reset', resetHandler).bind('reset', resetHandler);
	};

	var resetValue = function() {
		for (var i in radioGroups) {
			var radioItem = radioGroups[i].parent.find('input:radio[name="' + i + '"]').eq(0);
			invalidate.call(radioItem);
		}
		
	};
	
	var radioGroup = {
		init: function(opts) {
			var radio = $(this),
				label;
				
				var groupName = radio.attr("name");
				if (groupName && groupName != "") {
					if (!radioGroups[groupName]) {
						radioGroups[groupName] = {};
						radioGroups[groupName].options = {};
					}
					$.extend(radioGroups[groupName].options, options);
					$.extend(radioGroups[groupName].options, opts);
					radio.data(groupName, radioGroups[groupName]);
					radioGroups[groupName].parent = radio.parent();
				}
				
				label = radio.parent().find("label[for='" + radio.attr("id") + "']");               
				
				radio.parent().find('input:radio[name="' + groupName + '"]').unbind("change").bind("change", function(evt) {
					var options = radioGroups[$(this).attr("name")].options;
					invalidate.call(this);
					evt.data = $(this).val();
					options.changeHandler(evt);                 
					evt.stopPropagation();
				});
				
				invalidate.call(this);
				
				if (radioGroups[groupName].options.bindreset) {
					bindFormEvents.call(this);                  
				}
				
			return this.each(function (e) {
			});
		},
		selectedValue: function(param) {
			var gn = $(this).attr('name');
			var selectedThis;
			var value;
			
			if (!param) {
				selectedThis = $(this).parent().find('input[name=' + gn + ']:checked');             
				value = selectedThis.val();
				return value;
			} else {
				selectedThis = $(this).parent().find('input[value=' + param + ']:radio');
				$(this).parent().find('input[name=' + gn + ']:radio').prop("checked", false);
				selectedThis.prop("checked",true);
				invalidate.call(selectedThis);
			}
			
			return ;
		},
		changeHandler: function (func) {
			var options = $(this).data("options");
			options.changeHandler = func;
		}
	};
	
	$.fn.radioGroup = function(param) {
		if (typeof param == 'string') {
			return radioGroup[param].apply(this, Array.prototype.slice.call( arguments, 1 ));
		} else if (typeof param === 'object' || !param) {
			return radioGroup.init.apply(this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.radioGroup' );
		}
		
	}
})(jQuery);




/* End: Customize form */
function words(str){
	str = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").replace(/\s+/g, " ");
	if (typeof str == 'string' && str != ''){		
		return str.split(/\s+/);
	}

	return [];
};

function truncateText(jct, words, limit){
	if (!jct.length || !words.length) return;	
	var i = 0,
		l = limit || words.length,
		text = '';

	for (;i<l;i++){
		text += ' ' + words[i];
	}	
	jct.html(text + '...');
};

function truncateTextByLimitCharacter(sentence, limit) {
	if(typeof sentence != 'string' || !sentence.length) return;
	if (sentence.length <= limit) return sentence;
	var i = 0,
		l = limit || words.length,
		text = '';

	for (;i<l;i++){
		text += sentence[i];
	}
	text = text.trim();
	text += '...';
	return text;
};

/*!
	jQuery Colorbox v1.4.21 - 2013-06-06
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		className: false,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		trapFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,

		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'),
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	className,
	requests = 0,
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.photo || settings.photoRegex.test(url);
	}

	function retinaUrl(settings, url) {
		return settings.retinaUrl && window.devicePixelRatio > 1 ? url.replace(settings.photoRegex, settings.retinaSuffix) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target)) {
			e.stopPropagation();
			$box.focus();
		}
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		// for external use
		$(document).trigger(event);

		// for internal use
		$events.trigger(event);

		if ($.isFunction(callback)) {
			callback.call(element);
		}
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		clear,
		set,
		start,
		stop;
		
		if (settings.slideshow && $related[1]) {
			clear = function () {
				clearTimeout(timeOut);
			};

			set = function () {
				if (settings.loop || $related[index + 1]) {
					timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
				}
			};

			start = function () {
				$slideshow
					.html(settings.slideshowStop)
					.unbind(click)
					.one(click, stop);

				$events
					.bind(event_complete, set)
					.bind(event_load, clear)
					.bind(event_cleanup, stop);

				$box.removeClass(className + "off").addClass(className + "on");
			};
			
			stop = function () {
				clear();
				
				$events
					.unbind(event_complete, set)
					.unbind(event_load, clear)
					.unbind(event_cleanup, stop);
				
				$slideshow
					.html(settings.slideshowStart)
					.unbind(click)
					.one(click, function () {
						publicMethod.next();
						start();
					});

				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
			$box.removeClass(className + "off " + className + "on");
		}
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to Colorbox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			$overlay.css({
				opacity: parseFloat(settings.opacity),
				cursor: settings.overlayClose ? "pointer" : "auto",
				visibility: 'visible'
			}).show();
			

			if (className) {
				$box.add($overlay).removeClass(className);
			}
			if (settings.className) {
				$box.add($overlay).addClass(settings.className);
			}
			className = settings.className;

			$close.html(settings.close).show();

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden').appendTo($content);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);
				
				
				// Opens inital empty Colorbox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();

				slideshow();

				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();

				$box.focus();
				

				if (settings.trapFocus) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.returnFocus) {
					$events.one(event_closed, function () {
						$(element).focus();
					});
				}
			}
			
			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $tag(div, "LoadingOverlay").add($tag(div, "LoadingGraphic"));
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay,
				$close = $('<button type="button"/>').attr({id:prefix+'Close'})
			);
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if ($.isFunction($this)) { // assume a call to $.colorbox
				$this = $('<a/>');
				options.open = true;
			} else if (!$this[0]) { // colorbox being applied to empty collection
				return $this;
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});

		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt(that.style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt(that.style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		if(speed===0){ // temporary workaround to side-step jQuery-UI 1.8 bug (http://bugs.jquery.com/ticket/12273)
			$box.css(css);
		}
		$box.dequeue().animate(css, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;

		$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		callback = function () {
			var total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE7 & IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete, settings.onComplete);
			};

			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				if (settings.slideshow) {
					$slideshow.show();
				}
				
				// Preloads images within a rel group
				if (settings.preloading) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var src,
							img,
							i = $related[this],
							data = $.data(i, colorbox);

						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = $(i).attr('href');
						}

						if (src && isImage(data, src)) {
							src = retinaUrl(data, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}

				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.href,
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true, // allow HTML5 video to go fullscreen
						webkitAllowFullScreen : true,
						mozallowfullscreen : true
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.fastIframe) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		makeSettings();
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = document.createElement('img');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.one('load', function () {
				var percent;

				if (request !== requests) {
					return;
				}

				photo.alt = $(element).attr('alt') || $(element).attr('data-alt') || '';

				if (settings.retinaImage && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}

				photo.style.width = photo.width + 'px';
				photo.style.height = photo.height + 'px';

				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);

			$window.unbind('.' + prefix);

			$overlay.fadeTo(settings.fadeOut || 0, 0);

			$box.stop().fadeTo(settings.fadeOut || 0, 0, function () {

				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();

				trigger(event_purge);

				$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

				setTimeout(function () {
					closing = false;
                    // commenting out following line because it breaks the patient story DOM in tablet mode.
                    // trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));

/* End: jQuery Colorbox*/

/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window, doc){
var m = Math,
	dummyStyle = doc.createElement('div').style,
	vendor = (function () {
		var vendors = 't,webkitT,MozT,msT,OT'.split(','),
			t,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}

		return false;
	})(),
	cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

	// Style properties
	transform = prefixStyle('transform'),
	transitionProperty = prefixStyle('transitionProperty'),
	transitionDuration = prefixStyle('transitionDuration'),
	transformOrigin = prefixStyle('transformOrigin'),
	transitionTimingFunction = prefixStyle('transitionTimingFunction'),
	transitionDelay = prefixStyle('transitionDelay'),

	// Browser capabilities
	isAndroid = (/android/gi).test(navigator.appVersion),
	isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
	isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

	has3d = prefixStyle('perspective') in dummyStyle,
	hasTouch = 'ontouchstart' in window && !isTouchPad,
	hasTransform = vendor !== false,
	hasTransitionEnd = prefixStyle('transition') in dummyStyle,

	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	TRNEND_EV = (function () {
		if ( vendor === false ) return false;

		var transitionEnd = {
				''			: 'transitionend',
				'webkit'	: 'webkitTransitionEnd',
				'Moz'		: 'transitionend',
				'O'			: 'otransitionend',
				'ms'		: 'MSTransitionEnd'
			};

		return transitionEnd[vendor];
	})(),

	nextFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) { return setTimeout(callback, 1); };
	})(),
	cancelFrame = (function () {
		return window.cancelRequestAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
	})(),

	// Helpers
	translateZ = has3d ? ' translateZ(0)' : '',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental
			handleClick: true,

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];
		
		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform && that.options.useTransform;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together!
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			translateZ = '';
		}
		
		// Set some default styles
		that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
		that.scroller.style[transitionDuration] = '0';
		that.scroller.style[transformOrigin] = '0 0';
		if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';
		
		if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			if (that.options.wheelAction != 'none') {
				that._bind('DOMMouseScroll');
				that._bind('mousewheel');
			}
		}

		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,
	
	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
			case TRNEND_EV: that._transitionEnd(e); break;
		}
	},
	
	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},
	
	_scrollbar: function (dir) {
		var that = this,
			bar;

		if (!that[dir + 'Scrollbar']) {
			if (that[dir + 'ScrollbarWrapper']) {
				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
			if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},
	
	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},
	
	_pos: function (x, y) {
		if (this.zoomed) return;

		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
		} else {
			x = m.round(x);
			y = m.round(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
	},
	
	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
				y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
			}
			
			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind(TRNEND_EV);
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV, window);
		that._bind(END_EV, window);
		that._bind(CANCEL_EV, window);
	},
	
	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x;
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) {
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}
		
		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},
	
	_end: function (e) {
		if (hasTouch && e.touches.length !== 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;
			
			that.scroller.style[transitionDuration] = '200ms';
			that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;
			
			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else if (this.options.handleClick) {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = doc.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(400);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},
	
	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}
		
		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;
			
			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;
				
				that.zoom(e.pageX, e.pageY, deltaScale, 400);
				
				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}
			
			return;
		}
		
		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
	
		if (that.maxScrollY < 0) {
			that.scrollTo(deltaX, deltaY, 0);
		}
	},
	
	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind(TRNEND_EV);
		
		that._startAni();
	},


	/**
	*
	* Utilities
	*
	*/
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;
		
		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}
		
		step = that.steps.shift();
		
		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;
		
		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind(TRNEND_EV);
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[transitionDuration] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: m.round(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;
			
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		
		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = m.round(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	*
	* Public methods
	*
	*/
	destroy: function () {
		var that = this;

		that.scroller.style[transform] = '';

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);
		
		if (!that.options.hasTouch) {
			that._unbind('DOMMouseScroll');
			that._unbind('mousewheel');
		}
		
		if (that.options.useTransition) that._unbind(TRNEND_EV);
		
		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);
		
		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
		that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[transitionDuration] = '0';
			that._resetPos(400);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
		
		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;
		
		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV, window);
		this._unbind(END_EV, window);
		this._unbind(CANCEL_EV, window);
	},
	
	enable: function () {
		this.enabled = true;
	},
	
	stop: function () {
		if (this.options.useTransition) this._unbind(TRNEND_EV);
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},
	
	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[transitionDuration] = time + 'ms';
		that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
		that.zoomed = false;
	},
	
	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}
};

function prefixStyle (style) {
	if ( vendor === '' ) return style;

	style = style.charAt(0).toUpperCase() + style.substr(1);
	return vendor + style;
}

dummyStyle = null;	// for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);


/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[0], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[0] );
		$.data( this[0], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(event.target).hasClass("cancel") ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $(event.target).attr("formnovalidate") !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is("form")) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid = valid && validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function( index, value ) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function( command, argument ) {
		var element = this[0];

		if ( command ) {
			var settings = $.data(element.form, "validator").settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				// remove messages from rules, but allow them to be set separetely
				delete existingRules.messages;
				staticRules[element.name] = existingRules;
				if ( argument.messages ) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function( index, method ) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.dataRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if ( data.required ) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function( a ) { return !$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function( a ) { return !!$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function( i, n ) {
		source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
			return n;
		});
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $([]),
		errorLabelContainer: $([]),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element, event ) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function( element, event ) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue(element) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function( element, event ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if ( element.parentNode.name in this.submitted ) {
				this.element(element.parentNode);
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split(/\s/);
				}
				$.each(value, function( index, name ) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function( key, value ) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if ( validator.settings[eventType] ) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if ( !this.valid() ) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !(element.name in errors);
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$(this.currentForm).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $(selector)[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.replace(" ", ".");
			return $(this.settings.errorElement + "." + errorClass, this.errorContext);
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr("type"),
				val = $(element).val();

			if ( type === "radio" || type === "checkbox" ) {
				return $("input[name='" + $(element).attr("name") + "']:checked").val();
			}

			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function( element, method ) {
			return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if ( arguments[i] !== undefined ) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + ">")
					.attr("for", this.idOrName(element))
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
						label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function( element ) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr("for") === name;
			});
		},

		idOrName: function( element ) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function( element ) {
			// if radio/checkbox, validate first element in group instead
			if ( this.checkable(element) ) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find("[name='" + name + "']");
		},

		getLength: function( value, element ) {
			switch( element.nodeName.toLowerCase() ) {
			case "select":
				return $("option:selected", element).length;
			case "input":
				if ( this.checkable( element) ) {
					return this.findByName(element.name).filter(":checked").length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function( param, element ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$(param, element.form).length;
			},
			"function": function( param, element ) {
				return param(element);
			}
		},

		optional: function( element ) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[element.name] ) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function( element ) {
		var rules = {};
		var classes = $(element).attr("class");
		if ( classes ) {
			$.each(classes.split(" "), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {};
		var $element = $(element);
		var type = $element[0].getAttribute("type");

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number(value);
			}

			if ( value ) {
				rules[method] = value;
			} else if ( type === method && type !== 'range' ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $(element);
		for (method in $.validator.methods) {
			value = $element.data("rule-" + method.toLowerCase());
			if ( value !== undefined ) {
				rules[method] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {};
		var validator = $.data(element.form, "validator");
		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each(rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[prop];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch (typeof val.depends) {
				case "string":
					keepRule = !!$(val.depends, element.form).length;
					break;
				case "function":
					keepRule = val.depends.call(element, element);
					break;
				}
				if ( keepRule ) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function( rule, parameter ) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength'], function() {
			if ( rules[this] ) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			var parts;
			if ( rules[this] ) {
				if ( $.isArray(rules[this]) ) {
					rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
				} else if ( typeof rules[this] === "string" ) {
					parts = rules[this].split(/[\s,]+/);
					rules[this] = [Number(parts[0]), Number(parts[1])];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min && rules.max ) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength && rules.maxlength ) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function( name, method, message ) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if ( method.length < 3 ) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function( value, element ) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function( value, element ) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function( value, element ) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function( value, element ) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function( value, element ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if ( this.settings.onfocusout ) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function( value, element, param ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function( response ) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true";
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ) {
			var port = settings.port;
			if ( settings.mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function( settings ) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if ( mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));

//truncate
(function($, undefined) {
	
	$.fn.truncate = function( options ) {
		
		var opts = _extendOptions(options);
		
		var _text = this.html();
		var _textLength = _text.length;
		
		if ( _textLength > opts.maxLength ) {
			
			var _newText = _text.substring(0,opts.maxLength);
			
			if ( opts.breakWord )
				_newText = _newText.replace(/ \w+$/, '');
			
			this.html(_newText + opts.afterText);
		}
	};
	
	var _extendOptions = function ( options ) {
		
		var opts = $.extend({}, $.fn.truncate.defaults, options || {} );
		
		if ( !$.isNumeric(opts.maxLength) )
			opts.maxLength = $.fn.truncate.defaults.maxLength;
			
		if( typeof opts.afterText != 'string' )
			opts.afterText = $.fn.truncate.defaults.afterText;
			
		if ( typeof opts.breakWord != 'boolean' )
			opts.breakWord = false;
		
		return opts;
	};
	
	$.fn.truncate.defaults = {
		maxLength: 27,
		afterText: '...',
		breakWord: true
	};
	
})(jQuery);

/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function ($) {
  var inviewObjects = {}, viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, expando = $.expando;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };
    },

    remove: function(data) {
      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = $(), elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      $elements = $elements.add(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize   = viewportSize   || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i<elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i])) {
          continue;
        }

        var $element      = $($elements[i]),
            elementSize   = { height: $element.height(), width: $element.width() },
            elementOffset = $element.offset(),
            inView        = $element.data('inview'),
            visiblePartX,
            visiblePartY,
            visiblePartsMerged;
        
        // Don't ask me why because I haven't figured out yet:
        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
        // Even though it sounds weird:
        // It seems that the execution of this function is interferred by the onresize/onscroll event
        // where viewportOffset and viewportSize are unset
        if (!viewportOffset || !viewportSize) {
          return;
        }
        
        if (elementOffset.top + elementSize.height > viewportOffset.top &&
            elementOffset.top < viewportOffset.top + viewportSize.height &&
            elementOffset.left + elementSize.width > viewportOffset.left &&
            elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize", function() {
    viewportSize = viewportOffset = null;
  });
  
  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }

  // Use setInterval in order to also make sure this captures elements within
  // "overflow:scroll" elements or elements that appeared in the dom tree due to
  // dom manipulation and reflow
  // old: $(window).scroll(checkInView);
  //
  // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
  // intervals while the user scrolls. Therefore the inview event might fire a bit late there
  setInterval(checkInView, 250);
})(jQuery);

/*
http://www.JSON.org/json2.js
2011-02-23

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

    JSON.stringify(value, replacer, space)
        value       any JavaScript value, usually an object or array.

        replacer    an optional parameter that determines how object
                    values are stringified for objects. It can be a
                    function or an array of strings.

        space       an optional parameter that specifies the indentation
                    of nested structures. If it is omitted, the text will
                    be packed without extra whitespace. If it is a number,
                    it will specify the number of spaces to indent at each
                    level. If it is a string (such as '\t' or '&nbsp;'),
                    it contains the characters used to indent at each level.

        This method produces a JSON text from a JavaScript value.

        When an object value is found, if the object contains a toJSON
        method, its toJSON method will be called and the result will be
        stringified. A toJSON method does not serialize: it returns the
        value represented by the name/value pair that should be serialized,
        or undefined if nothing should be serialized. The toJSON method
        will be passed the key associated with the value, and this will be
        bound to the value

        For example, this would serialize Dates as ISO strings.

            Date.prototype.toJSON = function (key) {
                function f(n) {
                    // Format integers to have at least two digits.
                    return n < 10 ? '0' + n : n;
                }

                return this.getUTCFullYear()   + '-' +
                     f(this.getUTCMonth() + 1) + '-' +
                     f(this.getUTCDate())      + 'T' +
                     f(this.getUTCHours())     + ':' +
                     f(this.getUTCMinutes())   + ':' +
                     f(this.getUTCSeconds())   + 'Z';
            };

        You can provide an optional replacer method. It will be passed the
        key and value of each member, with this bound to the containing
        object. The value that is returned from your method will be
        serialized. If your method returns undefined, then the member will
        be excluded from the serialization.

        If the replacer parameter is an array of strings, then it will be
        used to select the members to be serialized. It filters the results
        such that only members with keys listed in the replacer array are
        stringified.

        Values that do not have JSON representations, such as undefined or
        functions, will not be serialized. Such values in objects will be
        dropped; in arrays they will be replaced with null. You can use
        a replacer function to replace those with JSON values.
        JSON.stringify(undefined) returns undefined.

        The optional space parameter produces a stringification of the
        value that is filled with line breaks and indentation to make it
        easier to read.

        If the space parameter is a non-empty string, then that string will
        be used for indentation. If the space parameter is a number, then
        the indentation will be that many spaces.

        Example:

        text = JSON.stringify(['e', {pluribus: 'unum'}]);
        // text is '["e",{"pluribus":"unum"}]'


        text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
        // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

        text = JSON.stringify([new Date()], function (key, value) {
            return this[key] instanceof Date ?
                'Date(' + this[key] + ')' : value;
        });
        // text is '["Date(---current time---)"]'


    JSON.parse(text, reviver)
        This method parses a JSON text to produce an object or array.
        It can throw a SyntaxError exception.

        The optional reviver parameter is a function that can filter and
        transform the results. It receives each of the keys and values,
        and its return value is used instead of the original value.
        If it returns what it received, then the structure is not modified.
        If it returns undefined then the member is deleted.

        Example:

        // Parse the text. Values that look like ISO date strings will
        // be converted to Date objects.

        myData = JSON.parse(text, function (key, value) {
            var a;
            if (typeof value === 'string') {
                a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                        +a[5], +a[6]));
                }
            }
            return value;
        });

        myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
            var d;
            if (typeof value === 'string' &&
                    value.slice(0, 5) === 'Date(' &&
                    value.slice(-1) === ')') {
                d = new Date(value.slice(5, -1));
                if (d) {
                    return d;
                }
            }
            return value;
        });


This is a reference implementation. You are free to copy, modify, or
redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
*/


//Create a JSON object only if one does not already exist. We create the
//methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
JSON = {};
}

(function () {
"use strict";

function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
}

if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function (key) {

        return isFinite(this.valueOf()) ?
            this.getUTCFullYear()     + '-' +
            f(this.getUTCMonth() + 1) + '-' +
            f(this.getUTCDate())      + 'T' +
            f(this.getUTCHours())     + ':' +
            f(this.getUTCMinutes())   + ':' +
            f(this.getUTCSeconds())   + 'Z' : null;
    };

    String.prototype.toJSON      =
        Number.prototype.toJSON  =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
}

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;


function quote(string) {

//If the string contains no control characters, no quote characters, and no
//backslash characters, then we can safely slap some quotes around it.
//Otherwise we must also replace the offending characters with safe escape
//sequences.

    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}


function str(key, holder) {

//Produce a string from holder[key].

    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

//If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }

//If we were called with a replacer function, then call the replacer to
//obtain a replacement value.

    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }

//What happens next depends on the value's type.

    switch (typeof value) {
    case 'string':
        return quote(value);

    case 'number':

//JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value) ? String(value) : 'null';

    case 'boolean':
    case 'null':

//If the value is a boolean or null, convert it to a string. Note:
//typeof null does not produce 'null'. The case is included here in
//the remote chance that this gets fixed someday.

        return String(value);

//If the type is 'object', we might be dealing with an object or an array or
//null.

    case 'object':

//Due to a specification blunder in ECMAScript, typeof null is 'object',
//so watch out for that case.

        if (!value) {
            return 'null';
        }

//Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

//Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

//The value is an array. Stringify every element. Use null as a placeholder
//for non-JSON values.

            length = value.length;
            for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || 'null';
            }

//Join all of the elements together, separated with commas, and wrap them in
//brackets.

            v = partial.length === 0 ? '[]' : gap ?
                '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                '[' + partial.join(',') + ']';
            gap = mind;
            return v;
        }

//If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === 'string') {
                    k = rep[i];
                    v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                }
            }
        } else {

//Otherwise, iterate through all of the keys in the object.

            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                }
            }
        }

//Join all of the member texts together, separated with commas,
//and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

//If the JSON object does not yet have a stringify method, give it one.

if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (value, replacer, space) {

//The stringify method takes a value and an optional replacer, and an optional
//space parameter, and returns a JSON text. The replacer can be a function
//that can replace values, or an array of strings that will select the keys.
//A default replacer method can be provided. Use of the space parameter can
//produce text that is more easily readable.

        var i;
        gap = '';
        indent = '';

//If the space parameter is a number, make an indent string containing that
//many spaces.

        if (typeof space === 'number') {
            for (i = 0; i < space; i += 1) {
                indent += ' ';
            }

//If the space parameter is a string, it will be used as the indent string.

        } else if (typeof space === 'string') {
            indent = space;
        }

//If there is a replacer, it must be a function or an array.
//Otherwise, throw an error.

        rep = replacer;
        if (replacer && typeof replacer !== 'function' &&
                (typeof replacer !== 'object' ||
                typeof replacer.length !== 'number')) {
            throw new Error('JSON.stringify');
        }

//Make a fake root object containing our value under the key of ''.
//Return the result of stringifying the value.

        return str('', {'': value});
    };
}


//If the JSON object does not yet have a parse method, give it one.

if (typeof JSON.parse !== 'function') {
    JSON.parse = function (text, reviver) {

//The parse method takes a text and an optional reviver function, and returns
//a JavaScript value if the text is a valid JSON text.

        var j;

        function walk(holder, key) {

//The walk method is used to recursively walk the resulting structure so
//that modifications can be made.

            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }


//Parsing happens in four stages. In the first stage, we replace certain
//Unicode characters with escape sequences. JavaScript handles many characters
//incorrectly, either silently deleting them, or treating them as line endings.

        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) {
            text = text.replace(cx, function (a) {
                return '\\u' +
                    ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            });
        }

//In the second stage, we run the text against regular expressions that look
//for non-JSON patterns. We are especially concerned with '()' and 'new'
//because they can cause invocation, and '=' because it can cause mutation.
//But just to be safe, we want to reject all unexpected forms.

//We split the second stage into 4 regexp operations in order to work around
//crippling inefficiencies in IE's and Safari's regexp engines. First we
//replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
//replace all simple value tokens with ']' characters. Third, we delete all
//open brackets that follow a colon or comma or that begin the text. Finally,
//we look to see that the remaining characters are only whitespace or ']' or
//',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

        if (/^[\],:{}\s]*$/
                .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

//In the third stage we use the eval function to compile the text into a
//JavaScript structure. The '{' operator is subject to a syntactic ambiguity
//in JavaScript: it can begin a block or an object literal. We wrap the text
//in parens to eliminate the ambiguity.

            j = eval('(' + text + ')');

//In the optional fourth stage, we recursively walk the new structure, passing
//each name/value pair to a reviver function for possible transformation.

            return typeof reviver === 'function' ?
                walk({'': j}, '') : j;
        }

//If the text is not JSON parseable, then a SyntaxError is thrown.

        throw new SyntaxError('JSON.parse');
    };
}
}());

/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 - 2012 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 (function(){
    var
        /* jStorage version */
        JSTORAGE_VERSION = "0.4.3",

        /* detect a dollar object or create one if not found */
        $ = window.jQuery || window.$ || (window.$ = {}),

        /* check for a JSON handling support */
        JSON = {
            parse:
                window.JSON && (window.JSON.parse || window.JSON.decode) ||
                String.prototype.evalJSON && function(str){return String(str).evalJSON();} ||
                $.parseJSON ||
                $.evalJSON,
            stringify:
                Object.toJSON ||
                window.JSON && (window.JSON.stringify || window.JSON.encode) ||
                $.toJSON
        };

    // Break if no JSON support was found
    if(!JSON.parse || !JSON.stringify){
        throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    }

    var
        /* This is the object, that holds the cached values */
        _storage = {__jstorage_meta:{CRC32:{}}},

        /* Actual browser storage (localStorage or globalStorage['domain']) */
        _storage_service = {jStorage:"{}"},

        /* DOM element for older IE versions, holds userData behavior */
        _storage_elm = null,

        /* How much space does the storage take */
        _storage_size = 0,

        /* which backend is currently used */
        _backend = false,

        /* onchange observers */
        _observers = {},

        /* timeout to wait after onchange event */
        _observer_timeout = false,

        /* last update time */
        _observer_update = 0,

        /* pubsub observers */
        _pubsub_observers = {},

        /* skip published items older than current timestamp */
        _pubsub_last = +new Date(),

        /* Next check for TTL */
        _ttl_timeout,

        /**
         * XML encoding and decoding as XML nodes can't be JSON'ized
         * XML nodes are encoded and decoded if the node is the value to be saved
         * but not if it's as a property of another object
         * Eg. -
         *   $.jStorage.set("key", xmlNode);        // IS OK
         *   $.jStorage.set("key", {xml: xmlNode}); // NOT OK
         */
        _XMLService = {

            /**
             * Validates a XML node to be XML
             * based on jQuery.isXML function
             */
            isXML: function(elm){
                var documentElement = (elm ? elm.ownerDocument || elm : 0).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            },

            /**
             * Encodes a XML node to string
             * based on http://www.mercurytide.co.uk/news/article/issues-when-working-ajax/
             */
            encode: function(xmlNode) {
                if(!this.isXML(xmlNode)){
                    return false;
                }
                try{ // Mozilla, Webkit, Opera
                    return new XMLSerializer().serializeToString(xmlNode);
                }catch(E1) {
                    try {  // IE
                        return xmlNode.xml;
                    }catch(E2){}
                }
                return false;
            },

            /**
             * Decodes a XML node from string
             * loosely based on http://outwestmedia.com/jquery-plugins/xmldom/
             */
            decode: function(xmlString){
                var dom_parser = ("DOMParser" in window && (new DOMParser()).parseFromString) ||
                        (window.ActiveXObject && function(_xmlString) {
                    var xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                    xml_doc.async = 'false';
                    xml_doc.loadXML(_xmlString);
                    return xml_doc;
                }),
                resultXML;
                if(!dom_parser){
                    return false;
                }
                resultXML = dom_parser.call("DOMParser" in window && (new DOMParser()) || window, xmlString, 'text/xml');
                return this.isXML(resultXML)?resultXML:false;
            }
        };


    ////////////////////////// PRIVATE METHODS ////////////////////////

    /**
     * Initialization function. Detects if the browser supports DOM Storage
     * or userData behavior and behaves accordingly.
     */
    function _init(){
        /* Check if browser supports localStorage */
        var localStorageReallyWorks = false;
        if("localStorage" in window){
            try {
                window.localStorage.setItem('_tmptest', 'tmpval');
                localStorageReallyWorks = true;
                window.localStorage.removeItem('_tmptest');
            } catch(BogusQuotaExceededErrorOnIos5) {
                // Thanks be to iOS5 Private Browsing mode which throws
                // QUOTA_EXCEEDED_ERRROR DOM Exception 22.
            }
        }

        if(localStorageReallyWorks){
            try {
                if(window.localStorage) {
                    _storage_service = window.localStorage;
                    _backend = "localStorage";
                    _observer_update = _storage_service.jStorage_update;
                }
            } catch(E3) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports globalStorage */
        else if("globalStorage" in window){
            try {
                if(window.globalStorage) {
					if(window.location.hostname == 'localhost'){
						_storage_service = window.globalStorage['localhost.localdomain'];
					}
					else{
						_storage_service = window.globalStorage[window.location.hostname];
					}
                    _backend = "globalStorage";
                    _observer_update = _storage_service.jStorage_update;
                }
            } catch(E4) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports userData behavior */
        else {
            _storage_elm = document.createElement('link');
            if(_storage_elm.addBehavior){

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                try{
                    _storage_elm.load("jStorage");
                }catch(E){
                    // try to reset cache
                    _storage_elm.setAttribute("jStorage", "{}");
                    _storage_elm.save("jStorage");
                    _storage_elm.load("jStorage");
                }

                var data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}

                try{
                    _observer_update = _storage_elm.getAttribute("jStorage_update");
                }catch(E6){}

                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }else{
                _storage_elm = null;
                return;
            }
        }

        // Load data from storage
        _load_storage();

        // remove dead keys
        _handleTTL();

        // start listening for changes
        _setupObserver();

        // initialize publish-subscribe service
        _handlePubSub();

        // handle cached navigation
        if("addEventListener" in window){
            window.addEventListener("pageshow", function(event){
                if(event.persisted){
                    _storageObserver();
                }
            }, false);
        }
    }

    /**
     * Reload data from storage when needed
     */
    function _reloadData(){
        var data = "{}";

        if(_backend == "userDataBehavior"){
            _storage_elm.load("jStorage");

            try{
                data = _storage_elm.getAttribute("jStorage");
            }catch(E5){}

            try{
                _observer_update = _storage_elm.getAttribute("jStorage_update");
            }catch(E6){}

            _storage_service.jStorage = data;
        }

        _load_storage();

        // remove dead keys
        _handleTTL();

        _handlePubSub();
    }

    /**
     * Sets up a storage change observer
     */
    function _setupObserver(){
        if(_backend == "localStorage" || _backend == "globalStorage"){
            if("addEventListener" in window){
                window.addEventListener("storage", _storageObserver, false);
            }else{
                document.attachEvent("onstorage", _storageObserver);
            }
        }else if(_backend == "userDataBehavior"){
            setInterval(_storageObserver, 1000);
        }
    }

    /**
     * Fired on any kind of data change, needs to check if anything has
     * really been changed
     */
    function _storageObserver(){
        var updateTime;
        // cumulate change notifications with timeout
        clearTimeout(_observer_timeout);
        _observer_timeout = setTimeout(function(){

            if(_backend == "localStorage" || _backend == "globalStorage"){
                updateTime = _storage_service.jStorage_update;
            }else if(_backend == "userDataBehavior"){
                _storage_elm.load("jStorage");
                try{
                    updateTime = _storage_elm.getAttribute("jStorage_update");
                }catch(E5){}
            }

            if(updateTime && updateTime != _observer_update){
                _observer_update = updateTime;
                _checkUpdatedKeys();
            }

        }, 25);
    }

    /**
     * Reloads the data and checks if any keys are changed
     */
    function _checkUpdatedKeys(){
        var oldCrc32List = JSON.parse(JSON.stringify(_storage.__jstorage_meta.CRC32)),
            newCrc32List;

        _reloadData();
        newCrc32List = JSON.parse(JSON.stringify(_storage.__jstorage_meta.CRC32));

        var key,
            updated = [],
            removed = [];

        for(key in oldCrc32List){
            if(oldCrc32List.hasOwnProperty(key)){
                if(!newCrc32List[key]){
                    removed.push(key);
                    continue;
                }
                if(oldCrc32List[key] != newCrc32List[key] && String(oldCrc32List[key]).substr(0,2) == "2."){
                    updated.push(key);
                }
            }
        }

        for(key in newCrc32List){
            if(newCrc32List.hasOwnProperty(key)){
                if(!oldCrc32List[key]){
                    updated.push(key);
                }
            }
        }

        _fireObservers(updated, "updated");
        _fireObservers(removed, "deleted");
    }

    /**
     * Fires observers for updated keys
     *
     * @param {Array|String} keys Array of key names or a key
     * @param {String} action What happened with the value (updated, deleted, flushed)
     */
    function _fireObservers(keys, action){
        keys = [].concat(keys || []);
        if(action == "flushed"){
            keys = [];
            for(var key in _observers){
                if(_observers.hasOwnProperty(key)){
                    keys.push(key);
                }
            }
            action = "deleted";
        }
        for(var i=0, len = keys.length; i<len; i++){
            if(_observers[keys[i]]){
                for(var j=0, jlen = _observers[keys[i]].length; j<jlen; j++){
                    _observers[keys[i]][j](keys[i], action);
                }
            }
            if(_observers["*"]){
                for(var j=0, jlen = _observers["*"].length; j<jlen; j++){
                    _observers["*"][j](keys[i], action);
                }
            }
        }
    }

    /**
     * Publishes key change to listeners
     */
    function _publishChange(){
        var updateTime = (+new Date()).toString();

        if(_backend == "localStorage" || _backend == "globalStorage"){
            _storage_service.jStorage_update = updateTime;
        }else if(_backend == "userDataBehavior"){
            _storage_elm.setAttribute("jStorage_update", updateTime);
            _storage_elm.save("jStorage");
        }

        _storageObserver();
    }

    /**
     * Loads the data from the storage based on the supported mechanism
     */
    function _load_storage(){
        /* if jStorage string is retrieved, then decode it */
        if(_storage_service.jStorage){
            try{
                _storage = JSON.parse(String(_storage_service.jStorage));
            }catch(E6){_storage_service.jStorage = "{}";}
        }else{
            _storage_service.jStorage = "{}";
        }
        _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;

        if(!_storage.__jstorage_meta){
            _storage.__jstorage_meta = {};
        }
        if(!_storage.__jstorage_meta.CRC32){
            _storage.__jstorage_meta.CRC32 = {};
        }
    }

    /**
     * This functions provides the "save" mechanism to store the jStorage object
     */
    function _save(){
        _dropOldEvents(); // remove expired events
        try{
            _storage_service.jStorage = JSON.stringify(_storage);
            // If userData is used as the storage engine, additional
            if(_storage_elm) {
                _storage_elm.setAttribute("jStorage",_storage_service.jStorage);
                _storage_elm.save("jStorage");
            }
            _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
        }catch(E7){/* probably cache is full, nothing is saved this way*/}
    }

    /**
     * Function checks if a key is set and is string or numberic
     *
     * @param {String} key Key name
     */
    function _checkKey(key){
        if(!key || (typeof key != "string" && typeof key != "number")){
            throw new TypeError('Key name must be string or numeric');
        }
        if(key == "__jstorage_meta"){
            throw new TypeError('Reserved key name');
        }
        return true;
    }

    /**
     * Removes expired keys
     */
    function _handleTTL(){
        var curtime, i, TTL, CRC32, nextExpire = Infinity, changed = false, deleted = [];

        clearTimeout(_ttl_timeout);

        if(!_storage.__jstorage_meta || typeof _storage.__jstorage_meta.TTL != "object"){
            // nothing to do here
            return;
        }

        curtime = +new Date();
        TTL = _storage.__jstorage_meta.TTL;

        CRC32 = _storage.__jstorage_meta.CRC32;
        for(i in TTL){
            if(TTL.hasOwnProperty(i)){
                if(TTL[i] <= curtime){
                    delete TTL[i];
                    delete CRC32[i];
                    delete _storage[i];
                    changed = true;
                    deleted.push(i);
                }else if(TTL[i] < nextExpire){
                    nextExpire = TTL[i];
                }
            }
        }

        // set next check
        if(nextExpire != Infinity){
            _ttl_timeout = setTimeout(_handleTTL, nextExpire - curtime);
        }

        // save changes
        if(changed){
            _save();
            _publishChange();
            _fireObservers(deleted, "deleted");
        }
    }

    /**
     * Checks if there's any events on hold to be fired to listeners
     */
    function _handlePubSub(){
        var i, len;
        if(!_storage.__jstorage_meta.PubSub){
            return;
        }
        var pubelm,
            _pubsubCurrent = _pubsub_last;

        for(i=len=_storage.__jstorage_meta.PubSub.length-1; i>=0; i--){
            pubelm = _storage.__jstorage_meta.PubSub[i];
            if(pubelm[0] > _pubsub_last){
                _pubsubCurrent = pubelm[0];
                _fireSubscribers(pubelm[1], pubelm[2]);
            }
        }

        _pubsub_last = _pubsubCurrent;
    }

    /**
     * Fires all subscriber listeners for a pubsub channel
     *
     * @param {String} channel Channel name
     * @param {Mixed} payload Payload data to deliver
     */
    function _fireSubscribers(channel, payload){
        if(_pubsub_observers[channel]){
            for(var i=0, len = _pubsub_observers[channel].length; i<len; i++){
                // send immutable data that can't be modified by listeners
                _pubsub_observers[channel][i](channel, JSON.parse(JSON.stringify(payload)));
            }
        }
    }

    /**
     * Remove old events from the publish stream (at least 2sec old)
     */
    function _dropOldEvents(){
        if(!_storage.__jstorage_meta.PubSub){
            return;
        }

        var retire = +new Date() - 2000;

        for(var i=0, len = _storage.__jstorage_meta.PubSub.length; i<len; i++){
            if(_storage.__jstorage_meta.PubSub[i][0] <= retire){
                // deleteCount is needed for IE6
                _storage.__jstorage_meta.PubSub.splice(i, _storage.__jstorage_meta.PubSub.length - i);
                break;
            }
        }

        if(!_storage.__jstorage_meta.PubSub.length){
            delete _storage.__jstorage_meta.PubSub;
        }

    }

    /**
     * Publish payload to a channel
     *
     * @param {String} channel Channel name
     * @param {Mixed} payload Payload to send to the subscribers
     */
    function _publish(channel, payload){
        if(!_storage.__jstorage_meta){
            _storage.__jstorage_meta = {};
        }
        if(!_storage.__jstorage_meta.PubSub){
            _storage.__jstorage_meta.PubSub = [];
        }

        _storage.__jstorage_meta.PubSub.unshift([+new Date, channel, payload]);

        _save();
        _publishChange();
    }


    /**
     * JS Implementation of MurmurHash2
     *
     *  SOURCE: https://github.com/garycourt/murmurhash-js (MIT licensed)
     *
     * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
     * @see http://github.com/garycourt/murmurhash-js
     * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
     * @see http://sites.google.com/site/murmurhash/
     *
     * @param {string} str ASCII only
     * @param {number} seed Positive integer only
     * @return {number} 32-bit positive integer hash
     */

    function murmurhash2_32_gc(str, seed) {
        var
            l = str.length,
            h = seed ^ l,
            i = 0,
            k;

        while (l >= 4) {
            k =
                ((str.charCodeAt(i) & 0xff)) |
                ((str.charCodeAt(++i) & 0xff) << 8) |
                ((str.charCodeAt(++i) & 0xff) << 16) |
                ((str.charCodeAt(++i) & 0xff) << 24);

            k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
            k ^= k >>> 24;
            k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

            h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

            l -= 4;
            ++i;
        }

        switch (l) {
            case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
            case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
            case 1: h ^= (str.charCodeAt(i) & 0xff);
                h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
        }

        h ^= h >>> 13;
        h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
        h ^= h >>> 15;

        return h >>> 0;
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    $.jStorage = {
        /* Version number */
        version: JSTORAGE_VERSION,

        /**
         * Sets a key's value.
         *
         * @param {String} key Key to set. If this value is not set or not
         *              a string an exception is raised.
         * @param {Mixed} value Value to set. This can be any value that is JSON
         *              compatible (Numbers, Strings, Objects etc.).
         * @param {Object} [options] - possible options to use
         * @param {Number} [options.TTL] - optional TTL value
         * @return {Mixed} the used value
         */
        set: function(key, value, options){
            _checkKey(key);

            options = options || {};

            // undefined values are deleted automatically
            if(typeof value == "undefined"){
                this.deleteKey(key);
                return value;
            }

            if(_XMLService.isXML(value)){
                value = {_is_xml:true,xml:_XMLService.encode(value)};
            }else if(typeof value == "function"){
                return undefined; // functions can't be saved!
            }else if(value && typeof value == "object"){
                // clone the object before saving to _storage tree
                value = JSON.parse(JSON.stringify(value));
            }

            _storage[key] = value;

            _storage.__jstorage_meta.CRC32[key] = "2." + murmurhash2_32_gc(JSON.stringify(value), 0x9747b28c);

            this.setTTL(key, options.TTL || 0); // also handles saving and _publishChange

            _fireObservers(key, "updated");
            return value;
        },

        /**
         * Looks up a key in cache
         *
         * @param {String} key - Key to look up.
         * @param {mixed} def - Default value to return, if key didn't exist.
         * @return {Mixed} the key value, default value or null
         */
        get: function(key, def){
            _checkKey(key);
            if(key in _storage){
                if(_storage[key] && typeof _storage[key] == "object" && _storage[key]._is_xml) {
                    return _XMLService.decode(_storage[key].xml);
                }else{
                    return _storage[key];
                }
            }
            return typeof(def) == 'undefined' ? null : def;
        },

        /**
         * Deletes a key from cache.
         *
         * @param {String} key - Key to delete.
         * @return {Boolean} true if key existed or false if it didn't
         */
        deleteKey: function(key){
            _checkKey(key);
            if(key in _storage){
                delete _storage[key];
                // remove from TTL list
                if(typeof _storage.__jstorage_meta.TTL == "object" &&
                  key in _storage.__jstorage_meta.TTL){
                    delete _storage.__jstorage_meta.TTL[key];
                }

                delete _storage.__jstorage_meta.CRC32[key];

                _save();
                _publishChange();
                _fireObservers(key, "deleted");
                return true;
            }
            return false;
        },

        /**
         * Sets a TTL for a key, or remove it if ttl value is 0 or below
         *
         * @param {String} key - key to set the TTL for
         * @param {Number} ttl - TTL timeout in milliseconds
         * @return {Boolean} true if key existed or false if it didn't
         */
        setTTL: function(key, ttl){
            var curtime = +new Date();
            _checkKey(key);
            ttl = Number(ttl) || 0;
            if(key in _storage){

                if(!_storage.__jstorage_meta.TTL){
                    _storage.__jstorage_meta.TTL = {};
                }

                // Set TTL value for the key
                if(ttl>0){
                    _storage.__jstorage_meta.TTL[key] = curtime + ttl;
                }else{
                    delete _storage.__jstorage_meta.TTL[key];
                }

                _save();

                _handleTTL();

                _publishChange();
                return true;
            }
            return false;
        },

        /**
         * Gets remaining TTL (in milliseconds) for a key or 0 when no TTL has been set
         *
         * @param {String} key Key to check
         * @return {Number} Remaining TTL in milliseconds
         */
        getTTL: function(key){
            var curtime = +new Date(), ttl;
            _checkKey(key);
            if(key in _storage && _storage.__jstorage_meta.TTL && _storage.__jstorage_meta.TTL[key]){
                ttl = _storage.__jstorage_meta.TTL[key] - curtime;
                return ttl || 0;
            }
            return 0;
        },

        /**
         * Deletes everything in cache.
         *
         * @return {Boolean} Always true
         */
        flush: function(){
            _storage = {__jstorage_meta:{CRC32:{}}};
            _save();
            _publishChange();
            _fireObservers(null, "flushed");
            return true;
        },

        /**
         * Returns a read-only copy of _storage
         *
         * @return {Object} Read-only copy of _storage
        */
        storageObj: function(){
            function F() {}
            F.prototype = _storage;
            return new F();
        },

        /**
         * Returns an index of all used keys as an array
         * ['key1', 'key2',..'keyN']
         *
         * @return {Array} Used keys
        */
        index: function(){
            var index = [], i;
            for(i in _storage){
                if(_storage.hasOwnProperty(i) && i != "__jstorage_meta"){
                    index.push(i);
                }
            }
            return index;
        },

        /**
         * How much space in bytes does the storage take?
         *
         * @return {Number} Storage size in chars (not the same as in bytes,
         *                  since some chars may take several bytes)
         */
        storageSize: function(){
            return _storage_size;
        },

        /**
         * Which backend is currently in use?
         *
         * @return {String} Backend name
         */
        currentBackend: function(){
            return _backend;
        },

        /**
         * Test if storage is available
         *
         * @return {Boolean} True if storage can be used
         */
        storageAvailable: function(){
            return !!_backend;
        },

        /**
         * Register change listeners
         *
         * @param {String} key Key name
         * @param {Function} callback Function to run when the key changes
         */
        listenKeyChange: function(key, callback){
            _checkKey(key);
            if(!_observers[key]){
                _observers[key] = [];
            }
            _observers[key].push(callback);
        },

        /**
         * Remove change listeners
         *
         * @param {String} key Key name to unregister listeners against
         * @param {Function} [callback] If set, unregister the callback, if not - unregister all
         */
        stopListening: function(key, callback){
            _checkKey(key);

            if(!_observers[key]){
                return;
            }

            if(!callback){
                delete _observers[key];
                return;
            }

            for(var i = _observers[key].length - 1; i>=0; i--){
                if(_observers[key][i] == callback){
                    _observers[key].splice(i,1);
                }
            }
        },

        /**
         * Subscribe to a Publish/Subscribe event stream
         *
         * @param {String} channel Channel name
         * @param {Function} callback Function to run when the something is published to the channel
         */
        subscribe: function(channel, callback){
            channel = (channel || "").toString();
            if(!channel){
                throw new TypeError('Channel not defined');
            }
            if(!_pubsub_observers[channel]){
                _pubsub_observers[channel] = [];
            }
            _pubsub_observers[channel].push(callback);
        },

        /**
         * Publish data to an event stream
         *
         * @param {String} channel Channel name
         * @param {Mixed} payload Payload to deliver
         */
        publish: function(channel, payload){
            channel = (channel || "").toString();
            if(!channel){
                throw new TypeError('Channel not defined');
            }

            _publish(channel, payload);
        },

        /**
         * Reloads the data from browser storage
         */
        reInit: function(){
            _reloadData();
        }
    };

    // Initialize jStorage
    _init();

})();
 
 /*
 *
 * Copyright (c) 2006-2011 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 1.3.1
 * Demo: http://www.texotela.co.uk/code/jquery/numeric/
 *
 */
(function($) {
/*
 * Allows only valid characters to be entered into input boxes.
 * Note: fixes value when pasting via Ctrl+V, but not when using the mouse to paste
  *      side-effect: Ctrl+A does not work, though you can still use the mouse to select (or double-click to select all)
 *
 * @name     numeric
 * @param    config      { decimal : "." , negative : true }
 * @param    callback     A function that runs if the number is not valid (fires onblur)
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @example  $(".numeric").numeric();
 * @example  $(".numeric").numeric(","); // use , as separator
 * @example  $(".numeric").numeric({ decimal : "," }); // use , as separator
 * @example  $(".numeric").numeric({ negative : false }); // do not allow negative values
 * @example  $(".numeric").numeric(null, callback); // use default values, pass on the 'callback' function
 *
 */
$.fn.numeric = function(config, callback)
{
	if(typeof config === 'boolean')
	{
		config = { decimal: config };
	}
	config = config || {};
	// if config.negative undefined, set to true (default is to allow negative numbers)
	if(typeof config.negative == "undefined") { config.negative = true; }
	// set decimal point
	var decimal = (config.decimal === false) ? "" : config.decimal || ".";
	// allow negatives
	var negative = (config.negative === true) ? true : false;
	// callback function
	callback = (typeof(callback) == "function" ? callback : function() {});
	// set data and methods
	return this.data("numeric.decimal", decimal).data("numeric.negative", negative).data("numeric.callback", callback).keypress($.fn.numeric.keypress).keyup($.fn.numeric.keyup).blur($.fn.numeric.blur);
};

$.fn.numeric.keypress = function(e)
{
	// get decimal character and determine if negatives are allowed
	var decimal = $.data(this, "numeric.decimal");
	var negative = $.data(this, "numeric.negative");
	// get the key that was pressed
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	// allow enter/return key (only when in an input box)
	if(key == 13 && this.nodeName.toLowerCase() == "input")
	{
		return true;
	}
	else if(key == 13)
	{
		return false;
	}
	var allow = false;
	// allow Ctrl+A
	if((e.ctrlKey && key == 97 /* firefox */) || (e.ctrlKey && key == 65) /* opera */) { return true; }
	// allow Ctrl+X (cut)
	if((e.ctrlKey && key == 120 /* firefox */) || (e.ctrlKey && key == 88) /* opera */) { return true; }
	// allow Ctrl+C (copy)
	if((e.ctrlKey && key == 99 /* firefox */) || (e.ctrlKey && key == 67) /* opera */) { return true; }
	// allow Ctrl+Z (undo)
	if((e.ctrlKey && key == 122 /* firefox */) || (e.ctrlKey && key == 90) /* opera */) { return true; }
	// allow or deny Ctrl+V (paste), Shift+Ins
	if((e.ctrlKey && key == 118 /* firefox */) || (e.ctrlKey && key == 86) /* opera */ ||
	  (e.shiftKey && key == 45)) { return true; }
	// if a number was not pressed
	if(key < 48 || key > 57)
	{
	  var value = $(this).val();
		/* '-' only allowed at start and if negative numbers allowed */
		if(value.indexOf("-") !== 0 && negative && key == 45 && (value.length === 0 || parseInt($.fn.getSelectionStart(this), 10) === 0)) { return true; }
		/* only one decimal separator allowed */
		if(decimal && key == decimal.charCodeAt(0) && value.indexOf(decimal) != -1)
		{
			allow = false;
		}
		// check for other keys that have special purposes
		if(
			key != 8 /* backspace */ &&
			key != 9 /* tab */ &&
			key != 13 /* enter */ &&
			key != 35 /* end */ &&
			key != 36 /* home */ &&
			key != 37 /* left */ &&
			key != 39 /* right */ &&
			key != 46 /* del */
		)
		{
			allow = false;
		}
		else
		{
			// for detecting special keys (listed above)
			// IE does not support 'charCode' and ignores them in keypress anyway
			if(typeof e.charCode != "undefined")
			{
				// special keys have 'keyCode' and 'which' the same (e.g. backspace)
				if(e.keyCode == e.which && e.which !== 0)
				{
					allow = true;
					// . and delete share the same code, don't allow . (will be set to true later if it is the decimal point)
					if(e.which == 46) { allow = false; }
				}
				// or keyCode != 0 and 'charCode'/'which' = 0
				else if(e.keyCode !== 0 && e.charCode === 0 && e.which === 0)
				{
					allow = true;
				}
			}
		}
		// if key pressed is the decimal and it is not already in the field
		if(decimal && key == decimal.charCodeAt(0))
		{
			if(value.indexOf(decimal) == -1)
			{
				allow = true;
			}
			else
			{
				allow = false;
			}
		}
	}
	else
	{
		allow = true;
	}
	return allow;
};

$.fn.numeric.keyup = function(e)
{
	var val = $(this).val();
	if(val && val.length > 0)
	{
		// get carat (cursor) position
		var carat = $.fn.getSelectionStart(this);
		var selectionEnd = $.fn.getSelectionEnd(this);
		// get decimal character and determine if negatives are allowed
		var decimal = $.data(this, "numeric.decimal");
		var negative = $.data(this, "numeric.negative");
		
		// prepend a 0 if necessary
		if(decimal !== "" && decimal !== null)
		{
			// find decimal point
			var dot = val.indexOf(decimal);
			// if dot at start, add 0 before
			if(dot === 0)
			{
				this.value = "0" + val;
			}
			// if dot at position 1, check if there is a - symbol before it
			if(dot == 1 && val.charAt(0) == "-")
			{
				this.value = "-0" + val.substring(1);
			}
			val = this.value;
		}
		
		// if pasted in, only allow the following characters
		var validChars = [0,1,2,3,4,5,6,7,8,9,'-',decimal];
		// get length of the value (to loop through)
		var length = val.length;
		// loop backwards (to prevent going out of bounds)
		for(var i = length - 1; i >= 0; i--)
		{
			var ch = val.charAt(i);
			// remove '-' if it is in the wrong place
			if(i !== 0 && ch == "-")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
			// remove character if it is at the start, a '-' and negatives aren't allowed
			else if(i === 0 && !negative && ch == "-")
			{
				val = val.substring(1);
			}
			var validChar = false;
			// loop through validChars
			for(var j = 0; j < validChars.length; j++)
			{
				// if it is valid, break out the loop
				if(ch == validChars[j])
				{
					validChar = true;
					break;
				}
			}
			// if not a valid character, or a space, remove
			if(!validChar || ch == " ")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
		}
		// remove extra decimal characters
		var firstDecimal = val.indexOf(decimal);
		if(firstDecimal > 0)
		{
			for(var k = length - 1; k > firstDecimal; k--)
			{
				var chch = val.charAt(k);
				// remove decimal character
				if(chch == decimal)
				{
					val = val.substring(0, k) + val.substring(k + 1);
				}
			}
		}
		// set the value and prevent the cursor moving to the end
		this.value = val;
		$.fn.setSelection(this, [carat, selectionEnd]);
	}
};

$.fn.numeric.blur = function()
{
	var decimal = $.data(this, "numeric.decimal");
	var callback = $.data(this, "numeric.callback");
	var val = this.value;
	if(val !== "")
	{
		var re = new RegExp("^\\d+$|^\\d*" + decimal + "\\d+$");
		if(!re.exec(val))
		{
			callback.apply(this);
		}
	}
};

$.fn.removeNumeric = function()
{
	return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).unbind("keypress", $.fn.numeric.keypress).unbind("blur", $.fn.numeric.blur);
};

// Based on code from http://javascript.nwbox.com/cursor_position/ (Diego Perini <dperini@nwbox.com>)
$.fn.getSelectionStart = function(o)
{
	if (o.createTextRange)
	{
		var r = document.selection.createRange().duplicate();
		r.moveEnd('character', o.value.length);
		if (r.text === '') { return o.value.length; }
		return o.value.lastIndexOf(r.text);
	} else { return o.selectionStart; }
};

// Based on code from http://javascript.nwbox.com/cursor_position/ (Diego Perini <dperini@nwbox.com>)
$.fn.getSelectionEnd = function(o)
{
	if (o.createTextRange) {
		var r = document.selection.createRange().duplicate()
		r.moveStart('character', -o.value.length)
		return r.text.length
	} else return o.selectionEnd
}

// set the selection, o is the object (input), p is the position ([start, end] or just start)
$.fn.setSelection = function(o, p)
{
	// if p is number, start and end are the same
	if(typeof p == "number") { p = [p, p]; }
	// only set if p is an array of length 2
	if(p && p.constructor == Array && p.length == 2)
	{
		if (o.createTextRange)
		{
			var r = o.createTextRange();
			r.collapse(true);
			r.moveStart('character', p[0]);
			r.moveEnd('character', p[1]);
			r.select();
		}
		else if(o.setSelectionRange)
		{
			o.focus();
			o.setSelectionRange(p[0], p[1]);
		}
	}
};

})(jQuery);lpch = {};lpch.BaseModel = Backbone.Model.extend({
	
	getSibling: function(value) {
		if (this.collection)
			return isNaN(value)
			       ? collection.get(value)
			       : collection.at(value);

		return null;
	},

	bindCollection: function(attribute, collection) {
		if (!this._collectionBindings)
			this._collectionBindings = {};

		this._collectionBindings[attribute] = collection;
	},

	getID: function(attribute) {
		var model = attribute
		          ? this.get(attribute)
		          : this;

		if (model)
			return model.get('id');
	},

	getPosition: function(attribute) {
		var collection = !attribute
		               ? this.collection
		               : (this.get(attribute) instanceof Backbone.Model
		                  ? this.get(attribute).collection
		                  : this._collectionBindings[attribute]);

		if (collection) {
			var value = attribute
			          ? this.get(attribute)
			          : this;

			if (value)
				return collection.indexOf(value);
		}

		return -1;
	},

	moveTo: function(attribute, value) {
		var collection = this._collectionBindings[attribute];

		if (collection) {
			var position = isNaN(value)
			             ? collection.indexOf(collection.get(value))
			             : value;

			if (position > -1
			&& position < collection.length)
				this.set(attribute, collection.at(position));
		}
	},

	movePrevious: function(attribute) {
		var collection = this._collectionBindings[attribute];

		if (collection)
			this.moveTo(attribute, this.getPosition(attribute) - 1);
	},

	moveNext: function(attribute) {
		var collection = this._collectionBindings[attribute];

		if (collection)
			this.moveTo(attribute, this.getPosition(attribute) + 1);
	}
});lpch.DocumentModel = lpch.BaseModel.extend({
	
	defaults: {
		currentWidth: 0,
		currentHeight: 0,
		currentLayout: null,
		currentOrientation: null
	},
	
	initialize: function() {
		
		var _this = this;
		this.layouts = new Backbone.Collection();
		this.layouts.model = lpch.Layout;
		this.layouts.add([
		                new lpch.LayoutSmartphone(),
		      			new lpch.LayoutTablet(),
		      			new lpch.LayoutDesktop()
		      		]);
		
		this.zipcodes = new lpch.ZipCodeCollection();

		this.on('change:currentWidth', this.handleCurrentWidthChange, this);
		this.on('change:currentLayout', this.handleCurrentLayoutChange, this);
		
		this.templates = new Backbone.Collection();
		this.templates.model = lpch.BaseModel;

		$.get('../templates/lpch-templates.html', function(data) {
			$(data).filter("script").each(function(i, elem) {
				_this.templates.add({id:$(elem).attr("id"), html:$(elem).html()});
			});
			// call the function in the Document view when load is complete
			module.view.initializeComponents();
		});
		
	},
	
	getZipCodeGPSCoords: function(zip) {
		var zipcode = this.zipcodes.find(function(zipcode)
		{
			return zip == zipcode.get('zip');
		});
		return zipcode;
	},

	getLayoutByWidth: function(width) {
		// TODO: Currently assuming layouts have been added small to large
		var layout = this.layouts.find(function(layout)
		{
			return width <= layout.get('maximumWidth');
		});
		return layout;
	},

	handleCurrentWidthChange: function(model, width) {
		this.set('currentLayout', this.getLayoutByWidth(width));
	},

	handleCurrentLayoutChange: function(model, layout) {
		this.set('currentOrientation', layout.get('orientation'));
	}
});lpch.Layout = lpch.BaseModel.extend({
	
	defaults: {
		minimumWidth: 0,
		maximumWidth: Number.POSITIVE_INFINITY,
		orientation: null,
		swipeMinLength: 0
	}

});lpch.LayoutSmartphone = lpch.Layout.extend({
	
	defaults: {
		minimumWidth: 320,
		maximumWidth: 719,
		orientation: 'smartphone',
		swipeMinLength: 30
	}

});lpch.LayoutTablet = lpch.Layout.extend({
	
	defaults: {
		minimumWidth: 720,
		maximumWidth: 979,
		orientation: 'tablet',
		swipeMinLength: 70
	}

});lpch.LayoutDesktop = lpch.Layout.extend({
	
	defaults: {
		minimumWidth: 980,
		maximumWidth: Number.POSITIVE_INFINITY,
		orientation: 'desktop',
		swipeMinLength: 70
	}

});lpch.SearchClassRecordModel = Backbone.Model.extend({
	defaults:{
		"content-type": "class",
		"description": "Friday and Saturday CB each class 8:30am-12:30pm",
		"event-end-date": "Oct 06, 2013",
		"event-end-time": "12:30 AM",
		"event-start-date": "Oct 05, 2013",
		"event-start-time": " 8:30 AM",
		"id": "0x8680540001",
		"name": "Test - Two Day Weekend Childbirth Prep Class",
		"title": "Test - Two Day Weekend Childbirth Prep Class",
		"url": "/en/classes/class-detail.page?evt=2dayCB&amp;uid=0x8680540001",
        "image-small": "/web-resources/default/img/thumb-5.jpg",
        "image-large": "/web-resources/default/img/thumb-5.jpg"
    }
});lpch.SearchDoctorRecordModel = Backbone.Model.extend({
    defaults: {
    	"id":"abanti-chaudhuri",
        "title":"Abanti Chaudhuri",
        "path":"/templatedata/Entities/CareGiver/data/content-public/abanti-chaudhuri.xml",
        "content-type":"caregiver",
        "lang":"en_US",
        "description":"",
        "keywords":"",
        "name":"Abanti Chaudhuri",
        "mso-id":"41789",
        "type":"Doctor",
        "lang-spoken":"en",
        "quote":"",
        "introduction":"",
        "manual-links":"",
        "qualification-degrees":"",
        "qualification-titles":"",
        "qualification-specialities":"",
        "qualification-schooling":"",
        "address":"",
        "telecom":"",
        "hours":"",
        "db_id":"41789",
        "db_last_name":"Chaudhuri",
        "db_first_name":"Abanti",
        "db_middle_initial":"",
        "db_suffix":"",
        "db_degree":"MD",
        "db_administrativetitle":"",
        "db_academictitle":"Clinical Assistant Professor",
        "db_subspecialty1":"",
        "db_subspecialty2":"",
        "db_subspecialty3":"",
        "db_subspecialty4":"",
        "db_date_on_staff":"2010-09-01 00:00:00.000",
        "db_location1office_name":"Pediatric Nephrology Clinic",
        "db_researchinterest1":"",
        "db_researchinterest2":"",
        "db_researchinterest3":"",
        "db_researchinterest4":"",
        "db_clinicalphone":"6507240353",
        "db_physicianreferralphone":"8007565000",
        "db_fax_number":"6507216685",
        "db_faccode":"LPCH",
        "db_practicelocation":"S",
        "db_mailname":"Pediatric Nephrology",
        "db_mailaddress1":"300 Pasteur Dr MC 5208",
        "db_mailaddress2":"G306",
        "db_mailcity":"Stanford",
        "db_mailstate":"CA",
        "db_mailzip":"94305",
        "db_officephone":"6507237903",
        "db_gender":"F",
        "db_specialty":"Nephrology",
        "db_location1address1":"770 Welch Rd Ste 300",
        "db_location1address2":"",
        "db_location1city":"Palo Alto",
        "db_location1state":"CA",
        "db_location1zip":"94304",
        "db_specialtyid":["21",
          "25"],
        "db_modifier":["Pediatric",
          "Pediatric"],
        "db_searchSpecialty":["Kidney Transplantation",
          "Nephrology (Kidney)"],
        "db_location2address1":["Women & Children's Center"],
        "db_location2address2":["3700 California Street, B555"],
        "db_location2office_name":["California Pacific Medical Center"],
        "db_location2city":["San Francisco"],
        "db_location2state":["CA"],
        "db_location2zip":["94118"],
        "db_profEdu_universityName":["RG Kar Medical College, Calcutta University"],
        "db_profEdu_universityCity":[""],
        "db_profEdu_universityState":[""],
        "db_profEdu_universityThruData":["02/1994"],
        "db_residency_universityName":["Kaiser Foundation Hospital-Oakland",
          "Manchester University - St Mary's Hospital"],
        "db_residency_universityCity":["Oakland",
          "Manchester"],
        "db_residency_universityState":["CA",
          ""],
        "db_residency_universityThruData":["06/2007",
          "08/2003"],
        "db_fellowship_universityName":["Lucile Packard Children's Hospital"],
        "db_fellowship_universityCity":["Palo Alto"],
        "db_fellowship_universityState":["CA"],
        "db_fellowship_universityThruData":["06/2010"],
        "db_boardCert_specialtyName":["General Pediatrics"],
        "db_boardCert_boardName":["American Board of Pediatrics"],
        "db_boardCert_certifiedYear":["2007"],
        "db_photo_fileName":["chaudhuriAbanti.jpg"],
        "db_photo_associatedURL":["http://med.stanford.edu/profiles/Abanti_Chaudhuri/"],
        "db_photo_fileExists":["1"],
        "db_fellowship_type":["Fellowship"],
        "db_fellowship_university_name":["Lucile Packard Children's Hospital"],
        "db_fellowship_university_city":["Palo Alto"],
        "db_fellowship_university_state":["CA"],
        "db_fellowship_university_country":[""],
        "db_fellowship_university_thru_date":["06/2010"],
        "db_medical_education_type":["Medical Education"],
        "db_medical_education_university_name":["RG Kar Medical College, Calcutta University"],
        "db_medical_education_university_city":[""],
        "db_medical_education_university_state":[""],
        "db_medical_education_university_country":["India"],
        "db_medical_education_university_thru_date":["02/1994"],
        "db_residency_type":["Residency",
          "Residency"],
        "db_residency_university_name":["Kaiser Foundation Hospital-Oakland",
          "Manchester University - St Mary's Hospital"],
        "db_residency_university_city":["Oakland",
          "Manchester"],
        "db_residency_university_state":["CA",
          ""],
        "db_residency_university_country":["",
          "United Kingdom"],
        "db_residency_university_thru_date":["06/2007",
          "08/2003"]
    },
    initialize: function() {
    	if (this.get('lang-spoken') == '') {
    		this.set('lang-spoken', 'en');
    	}
    	this.getGPSLocation();
    },
    getGPSLocation: function() {
    	var _this = this;
    	// look up the GPS coords in the ZipCodeCollection
    	this.set('gpsLocation', module.view.model.getZipCodeGPSCoords(this.get('db_location1zip')));
    	
    	// Fail safe, if the zip code and gps coords do not exist in the ZipCodeCollection object
    	if (this.get('gpsLocation') == undefined) {
    		// use GoogleMaps API to get the lat/lng for the zip code
    		$.getJSON( "http://maps.googleapis.com/maps/api/geocode/json?address="+this.get('db_location1zip')+"&sensor=false", function( data ) {
    			_this.set('gpsLocation', new Backbone.Model({
    				"zip":_this.get('db_location1zip'),
    				"lat":data.results[0].geometry.location.lat,
    				"lng":data.results[0].geometry.location.lng
    			}));
    		});
    	}
    },
    getDistance: function(lat1, lng1) {
    	var pi = Math.PI;
    	var lat2 = this.get('gpsLocation').get('lat');
    	var lng2 = this.get('gpsLocation').get('lng');
    	var x = Math.sin(lat1 * pi/180) * Math.sin(lat2 * pi/180) + Math.cos(lat1 *pi/180) * Math.cos(lat2 * pi/180) * Math.cos(Math.abs((lng2 * pi/180) - (lng1 *pi/180)));
    	x = Math.atan((Math.sqrt(1- Math.pow(x, 2))) / x);  
    	return ( 1.852 * 60.0 * ((x/pi)*180) ) / 1.609344;
    }
    
});lpch.SearchDocumentRecordModel = Backbone.Model.extend({
	defaults:{
    	"id":"Document1",
        "category":"Documents",
        "content-type":"webcrawl",
        "url":"Classes",
        "title":"",
        "content":"",
        "_version_": 0,
        "image-small": "/web-resources/default/img/thumb-6.jpg",
        "image-large": "/web-resources/default/img/thumb-6.jpg"
	}
});lpch.SearchLocationRecordModel = Backbone.Model.extend({
    defaults:{
    	"id":"1000-welch-road-palo-alto-ca-94304",
        "title":"1000-welch-road-palo-alto-ca-94304",
        "path":"/templatedata/Entities/Location/data/content-public/1000-welch-road-palo-alto-ca-94304.xml",
        "content-type":"location",
        "lang":"en_US",
        "description":"",
        "keywords":"",
        "name":"",
        "type":"",
        "services-glance":"",
        "address-a":"1000 Welch Road",
        "address-b":"",
        "address-c":"",
        "city":"Palo Alto",
        "zip":"94304",
        "state":"CA",
        "long":"-122.1788401",
        "lat":"37.4359791",
        "telecom":"",
        "hours":""
    }
});lpch.SearchResultsCollection = Backbone.Collection.extend({
    initialize: function() {
        this.classCollection = [];
        this.serviceCollection = [];
        this.caregiverCollection = [];
        this.locationCollection = [];
        this.webcrawlCollection = [];
        this.defaultCollection = [];
    },
    model: function(attrs, options) {
        var modelItem;
        switch (attrs["content-type"]) {
            case "class":
                modelItem = new lpch.SearchClassRecordModel(attrs);
                options.collection.classCollection.push(modelItem);
                break;
            case "location":
                modelItem = new lpch.SearchLocationRecordModel(attrs);
                options.collection.locationCollection.push(modelItem);
                break;
            case "service":
                modelItem = new lpch.SearchServiceRecordModel(attrs);
                options.collection.serviceCollection.push(modelItem);
                break;
            case "caregiver":
                modelItem = new lpch.SearchDoctorRecordModel(attrs);
                options.collection.caregiverCollection.push(modelItem);
                break;
            case "webcrawl":
            	modelItem = new lpch.SearchDocumentRecordModel(attrs);
            	options.collection.webcrawlCollection.push(modelItem);
                break;
            default:
            	// any json objects that don't fit in one of the above content-types
            	// are treated as Documents and dumped into a default Array
            	modelItem = new lpch.SearchDocumentRecordModel(attrs);
            	options.collection.defaultCollection.push(modelItem);
            	break;
            
        }
        return modelItem;
    },
    parse: function(response) {
        return response.response.docs;
    },
    clean: function() {
    	// removes all the models that do not relate to a specific content-type
    	this.remove(this.defaultCollection);
    }
});lpch.ZipCodeCollection = Backbone.Collection.extend({
    initialize: function() {
    	this.model = lpch.BaseModel;
		this.add([{
		              "zip": "93901",
		              "lat": 36.6623815,
		              "lng": -121.6454222
		          },
		          {
		              "zip": "94025",
		              "lat": 37.4484914,
		              "lng": -122.1802812
		          },
		          {
		              "zip": "94028",
		              "lat": 37.4251299,
		              "lng": -122.173041
		          },
		          {
		              "zip": "94034",
		              "lat": 48.5881467,
		              "lng": 13.4359544
		          },
		          {
		              "zip": "94035",
		              "lat": 37.41752,
		              "lng": -122.0525
		          },
		          {
		              "zip": "94040",
		              "lat": 37.3785351,
		              "lng": -122.086585
		          },
		          {
		              "zip": "94041",
		              "lat": 37.386812,
		              "lng": -122.0751549
		          },
		          {
		              "zip": "94062",
		              "lat": 37.41089270000001,
		              "lng": -122.2880726
		          },
		          {
		              "zip": "94063",
		              "lat": 37.5021585,
		              "lng": -122.2086579
		          },
		          {
		              "zip": "94303",
		              "lat": 37.4530553,
		              "lng": -122.1178261
		          },
		          {
		              "zip": "94304",
		              "lat": 37.3813444,
		              "lng": -122.1802812
		          },
		          {
		              "zip": "94305",
		              "lat": 37.4135757,
		              "lng": -122.1689284
		          },
		          {
		              "zip": "94403",
		              "lat": 37.5349925,
		              "lng": -122.3050823
		          },
		          {
		              "zip": "94538",
		              "lat": 37.5042267,
		              "lng": -121.9643745
		          },
		          {
		              "zip": "94609",
		              "lat": 37.8321173,
		              "lng": -122.2625529
		          },
		          {
		              "zip": "94705",
		              "lat": 37.8646149,
		              "lng": -122.2341905
		          },
		          {
		              "zip": "95032",
		              "lat": 37.2260616,
		              "lng": -121.9302449
		          },
		          {
		              "zip": "95035",
		              "lat": 37.4517015,
		              "lng": -121.8676464
		          },
		          {
		              "zip": "95065",
		              "lat": 37.0353977,
		              "lng": -121.9871217
		          },
		          {
		              "zip": "95128-2604",
		              "lat": 37.3189149,
		              "lng": -121.9416226
		          },
		          {
		              "zip": "95819",
		              "lat": 38.5678631,
		              "lng": -121.4399041
		          }
		      ]);
    }
});lpch.SearchServiceRecordModel = Backbone.Model.extend({
	defaults:{
		"id":"adolescent-medicine",
        "title":"Adolescent Medicine",
        "path":"/templatedata/Entities/Service/data/content-public/adolescent-medicine.xml",
        "content-type":"service",
        "lang":"en_US",
        "description":"",
        "keywords":"",
        "related-caregiver":["abanti-chaudhuri",
          "adam-r-frymoyer",
          "zina-zarshenas-payman"],
        "related-caregiver-path":["/templatedata/Entities/CareGiver/data/content-public/abanti-chaudhuri.xml",
          "/templatedata/Entities/CareGiver/data/content-public/adam-r-frymoyer.xml",
          "/templatedata/Entities/CareGiver/data/content-public/zina-zarshenas-payman.xml"],
        "related-caregiver-label":["Abanti Chaudhuri",
          "Adam R Frymoyer",
          "Zina Zarshenas-Payman"],
        "related-location":["2160-appian-way-pinole-ca-94564"],
        "related-location-path":[""],
        "related-location-label":["Bayside Pediatric Medical Group"],
        "name":"Adolescent Medicine",
        "type":"Service",
        "introduction":"<p>...</p>",
        "address":"<p>...</p>",
        "contacts":"<p>...</p>",
        "hours":"<p>...</p>"
	}
});lpch.BaseView = Backbone.View.extend({
	
	_configure: function(options) {
		if (this.modelClass) {
			this.model = new this.modelClass();
			this.model.set('view', this);
		}
		Backbone.View.prototype._configure.call(this, options);
	},
	
	initialize: function() {		
		// Add/remove listeners as needed
		module.on('layoutChange', this.handleLayoutChange, this);
		module.on('viewportChange', this.handleViewportChange, this);
	},
	
	load: function(url, onSuccess, data) {
		this.$el.children().hide();
		
		var _this = this,
			html = '<div class="ajax-loader"></div>',
			loader = $(html).appendTo(this.$el);
		
		$.getJSON(url, data).done(function(data) {
			_this.$el.children().show();
			loader.remove();
			onSuccess(data);
		});
	},
	
	handleLayoutChange: function(layout) {}

});lpch.Document = lpch.BaseView.extend({
	
	modelClass: lpch.DocumentModel,
	
	initialize: function() {
		var _this = this;
		this.setElement(document);

		// detect browser and device
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/iphone/i) || ua.match(/ipad/i)){
			jQuery('html').addClass('ios');
		}
		if((/android/).test(ua)){
			jQuery('html').addClass('android');
		}
		if(ua.match(/os 6/i)){
			jQuery('html').addClass('ios6');
		}
		if (ua.indexOf("msie 8") != -1) {
			$("html").addClass("ie8");
		}
		if (ua.indexOf("msie") != -1) {
			$("html").addClass("ie");
		} else {
			if((/chrome/).test(ua)){
				jQuery('html').addClass('chrome');
			} else {
				if((/firefox/).test(ua)){
					jQuery('html').addClass('firefox');
				} else {
					if((/safari/).test(ua)){
						jQuery('html').addClass('safari');
					}
				}
			}	
		}

		$('.ls-canvas').wrap('<div class="wrapper" />');
	},
	
	initializeComponents: function() {
		// scope reference
		var _this = this;

		this.$el.find('input, textarea').placeholder();
		
		// for ie8, manipulate the youtube urls to use the old embed code
		if ($('html').hasClass('ie8')) {
			this.$el.find('.youtube').each(function() {
				var url = $(this).attr('href');
				$(this).attr('href', url.replace('/embed/', '/v/'));
			});
		}
		
		// Colorbox initialization
		this.$el.find('.youtube')
			.click(function(e) {
				_this.trackEvent($(this).attr('title'));
			})
			.colorbox({
				iframe:true, 
				innerWidth:620,
				innerHeight:404,
				fixed: true,
				onComplete: function(){
					var orientation = module.view.getCurrentOrientation();
					if(orientation == 'smartphone') {
						var w = module.view.getViewportWidth()-40;
						var h = (module.view.getViewportWidth()-40) * 0.6511612;
						
						$.colorbox.resize({
							innerWidth: w,
							innerHeight: h
						});
					}
				}
			});
		
		// on window resize
		$(window).resize(function() {
			_this.model.set('currentWidth', _this.getViewportWidth());
			_this.model.set('currentHeight', _this.getViewportHeight());
		});

		this.model.on('change:currentWidth', this.handleViewportChange, this);
		this.model.on('change:currentHeight', this.handleViewportChange, this);
		this.model.on('change:currentLayout', this.handleLayoutChange, this);
		
		this.model.set('currentWidth', this.getViewportWidth());
		this.model.set('currentHeight', this.getViewportHeight());
		
		try {
			addthis.init();
		} catch (error) {
			console.log(error.message);
		}
		
		// trigger
		$(window).trigger('initializeComponents');
	},
	
	getViewportWidth: function() {
		var viewPortWidth = $(window).innerWidth();

		/**
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') {
			viewPortWidth = window.innerWidth;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0) {
			viewPortWidth = document.documentElement.clientWidth;
		}

		 // older versions of IE
		else {
			viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
		}
		*/

		return viewPortWidth;
	},

	getViewportHeight: function() {
		var viewPortHeight = $(window).innerHeight();

		/**
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerHeight != 'undefined') {
			viewPortHeight = window.innerHeight;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientHeight !=
		'undefined' && document.documentElement.clientHeight != 0) {
			viewPortHeight = document.documentElement.clientHeight;
		}

		// older versions of IE
		else {
			viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
		}
		*/
		return viewPortHeight;
	},
	
	getCurrentLayout: function() {
		return this.model.get('currentLayout');
	},

	getCurrentOrientation: function() {
		return this.model.get('currentOrientation');
	},
	
	getParameterByName: function(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	
	handleViewportChange: function(model) {
		module.trigger('viewportChange', this.model.get('currentWidth'), this.model.get('currentHeight'));
	},

	handleLayoutChange: function(model, layout) {
		module.trigger('layoutChange', layout);
		
		// Colorbox resize handler
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			var w = module.view.getViewportWidth()-40;
			var h = (module.view.getViewportWidth()-40) * 0.6511612;
			
			$.colorbox.resize({
				innerWidth: w,
				innerHeight: h
			});
		} else {
			$.colorbox.resize({			
				innerWidth:620,
				innerHeight: 404
			});
		}
	},
	
	/**
	 * 
	 * @param label			Button label
	 * @param action		Optional: Click action
	 * @param category		Optional: Click category
	 */
	trackEvent: function(label, action, category) {
		if (category == null || category == '') {
			category = $('.nav-item.current .dropdown-btn').text();
			if (category == '') category = "Marketing";
		}
		if (action == null || action == '') {
			action = document.title;
		}
		console.log('send', 'event', category, action, label);
		try {
			ga('send', 'event', category, action, label);
		} catch (error) {
			console.log(error.message);
		}
	}
	
});/**
 * FilterView:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Search Results doctor filters
 */
lpch.FilterView = lpch.BaseView.extend({
	filterEventName: "filter.default",
	
	events:{
		"submit form": "submitFilter"
	},
	initialize: function(options){
		_.extend(this, options);
		module.vent.on("updateAllCriteria", this.updateAllCriteria, this);
		this.render();
	},
	render: function(){
		var _this = this;
		
		// check for a search-term param on the URL
		if (module.view.getParameterByName("search-term") == "") {
			// if blank, hide the results filters
			this.$el.find('.results-doctor').hide();
			// add some padding to the search instructions
			this.$el.find('.search-doctor').addClass("pad");
		} else {
			// if search-term not blank, hide the search instructions
			this.$el.find('#frm-search-doctor-header').hide();
		}
		
		// set zip code to accept numeric chars only
		this.$el.find('#zipcode').numeric();
		
		// bind change updates to the selectpickers
		this.$el.find('.selectpicker').bind("change.update",function(e){
			module.view.trackEvent($(e.currentTarget).next().find('button .filter-option').text(), "Filter", "Search");
			// if the NOT the 'specialty' selectpicker
			if ($(this).attr('id') != 'slSpecialty') {
				// update filter criteria
				_this.updateAllCriteria();
			}
		}).selectpicker();

		this.$el.find('.toggle-filter').click(function(){
			var $this = $(this);
			$('.filter-inner').stop(true,true).slideToggle(function() {
				$this.toggleClass('expand').toggleClass('collapse');
			});
			return false;
		});
		
		// on blur for zip code field
		this.$el.find("input[name='db_location1zip']").blur(function() {
	    	_this.updateAllCriteria();
		});
		
		// click listener for the SEARCH button in the Find a Doctor form
		this.$el.find('.doctor-search-btn .btn').click(function(e) {
			e.preventDefault();
			var $form = _this.$el.find('.search-doctor form');
			var url = $form.attr('action') + '?tab=doctors&search-term=';
			// if the input field is NOT blank, use this search term
			if ($form.find('.doctor-name input').val() != "") {
				url += $form.find('.doctor-name input').val();
				window.location = url;
			} else if ($form.find('#slSpecialty').val() != "") {
				// else if the 'specialty' is selected use this search term
				url += $form.find('#slSpecialty').val();
				window.location = url;
			}
		});
		
		// ENTER keypress handler for the Find a Doctor input field
		this.$el.find('.search-doctor form .doctor-name input').bind("keypress", function(e) {
	        if (e.keyCode == 13) {
	        	_this.$el.find('.doctor-search-btn .btn').trigger("click");
	        }
		});
		
		this.updateAllCriteria();
	},
	
	/**
	 * @updateAllCriteria	Method that serializes the form and submits and triggers the filter event
	 */
	updateAllCriteria: function() {
		var _this = this;
		var dataArray = this.$el.find("form#frm-filter-doctor").serializeArray();
		var dataObj = {};
		$.each(dataArray, function(i){
			dataObj[dataArray[i].name] = dataArray[i].value;
		});
		
		// if the zip is defined, get the GPS coords
		if (dataObj.db_location1zip != "") {
			var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+dataObj.db_location1zip+'&sensor=false';
	    	$.getJSON(url, function(data) {
	        	dataObj['lat'] = data.results[0].geometry.location.lat;
				dataObj['lng'] = data.results[0].geometry.location.lng;
				module.vent.trigger(_this.filterEventName, dataObj);
	    	});
		} else {
			module.vent.trigger(this.filterEventName, dataObj);
		}
	},
	
	/**
	 * @method	submitFilter
	 * @param 	e
	 */
	submitFilter: function(e){
		e.preventDefault();
	}
	
});

/**
 * FilterView:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '#filter-doctor' elems and initialize lpch.FilterView
 */
$(window).bind('initializeComponents', function() {
	// die if there are no #filter-doctor elements returned
	if ($('#filter-doctor').length == 0) return;
	new lpch.FilterView({
		el: '#filter-doctor',
		filterEventName:"filter.doctor",
	});
});lpch.SearchAllItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('allItemTemplate').get('html'));
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});lpch.SearchClassItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('classItemTemplate').get('html'));
		this.render();
		this.model.on("hide", this.hide, this);
		this.model.on("show", this.hide, this);
	},
	hide: function(category){
		if(this.model.get("content-type")==category)
			this.$el.hide(0);
	},
	show: function(category){
		if(this.model.get("content-type")==category)
			this.$el.show(0);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});lpch.SearchDoctorItemView = lpch.BaseView.extend({
	tagName: 'li',
	className: 'row-fluid',
	initialize: function() {
		this.template = _.template(module.view.model.templates.get('doctorItemTemplate').get('html'));
		this.model.on("hide", this.hide, this);
		this.model.on("show", this.show, this);
	},
	hide: function(category){
		if(this.model.get("content-type")==category)
			this.$el.hide(0);
	},
	show: function(category){
		if(this.model.get("content-type")==category)
			this.$el.show(0);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});/**
 * SearchItemListView:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SearchItemListView
 */
lpch.SearchItemListView = lpch.BaseView.extend({

	// collection of the ENTIRE result set
	collection: null,
	// collection of results sorted by list/tab
	sortedCollection: null, 
	// collection of results rendered to the DOM
	renderedCollection: null,
	// list item view class
	itemViewClass: null,
	// google map object, not defined until tab is shown
	googleMap: null,
	// filter criteria
	criteria:undefined,
	// tab category
	category:"",
	// filter event name for filtering results
	filterEventName: null,
	// template id name
	templateID:"",	
	// total number of pages in result set
	numPages: null,
	// current page of results
	currentPage: null,
	// id of the tab/list
	listID: null,
	// number of results per page
	resultsPerPage: 12,
	// keeps track if pagination should be reset to page 1
	// by default set to false to ensure that the last page 
	// saved in LocalStorage is read
	resetPagination: false,

	events: {
		"click .type-switcher-wrap a" : "switchType"
	},

	/**
	 * @method	initialize	Invoked on object instantiation by Backbone
	 * @param 	options		Extra options to override defaults declared above
	 * @returns	{Boolean}
	 */
	initialize: function(options){
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
		
		_.extend(this, options);
		// get the template for this list view
		this.template = _.template(module.view.model.templates.get(this.templateID).get('html'));
		
		// string indentifier for this list of results, maps directly to the tab href
		// (all, doctors, services, locations, classes)
		this.listID = this.$el.parent().attr('id');
		
		if (options.itemViewClass==null) {
			throw new Error('Should have itemViewClass');
			return false;
		}
		
		// this event handler need to receive criteria data
		if (this.filterEventName != '') {
			module.vent.on(this.filterEventName, this.updateListView, this);
		}

		this.$el.html(this.template({}));
		
		// if the category is empty (ALL) use the full collection
		// else sort the collection based on category (doctors, services, locations, classes)
		if (this.category=="") {
			this.sortedCollection = this.collection;
		} else {
			this.sortedCollection = new Backbone.Collection(this.collection[this.category+"Collection"]);
		}

		// set the current page
		this.currentPage = 1;
		// check to see if we are backing into a result set, it is ok to do here because this initializes BEFORE
		// lpch.SearchResult which where the lastSearchTab/lastSearchTerm is set/reset
		if ($.jStorage.get('lastSearchTab') && $.jStorage.get('lastSearchTerm') == module.view.getParameterByName("search-term")) {
			// if backing into a result set
			// check for which page of results we were on
			this.currentPage = $.jStorage.get(this.listID+'LastSearchPage');
		}
		$.jStorage.set(this.listID+'LastSearchPage', this.currentPage);
		// set the total number of pages in the result set
		this.numPages = Math.ceil(this.sortedCollection.models.length/this.resultsPerPage);
		
		// update pagination
		this.updatePagination();
		
		// update the list view based on filter criteria
		this.updateListView(this.criteria);
		
		// show grid or list
		this.updateViewType("grid", "list");
		
		// event hanlder for tab clicks
		module.on('showTab', this.handleShowTab, this);
		
		// last second ui initialization
		this.initUI();
	},
	
	/**
	 * @method	initUI
	 */
	initUI: function() {
		this.$el.find('.video').colorbox({
			iframe:true, 
			innerWidth:620,
			innerHeight:404,
			onOpen: function() {
				module.view.trackEvent($(this).attr('title'));
			},
			onComplete: function() {
				var pageHeight = $('html').height();
				$('#cboxOverlay').height(pageHeight);
			}
		});
		
		// formats phone numbers as: (123) 456-7890
		$(".phone1").text(function(i, text) {
	        text = text.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
	        return text;
	    });
		
		if (module.view.getParameterByName("search-term") == "" && this.listID == "doctors") {
			this.$el.hide();
		}
		
		// if the 'filterEventName' is defined, trigger an event to update all filter criteria
		// this helps when backing into the search results page that may have had filters enabled
		// prior to an outbound click on a search result
		if (this.filterEventName) {
			// do NOT reset the pagination
			this.resetPagination = false;
			module.vent.trigger("updateAllCriteria");
		}
	},
	
	/**
	 * @method	handleShowTab	Callback for tab clicks
	 * @param 	tabID
	 */
	handleShowTab: function(tabID) {
		if (this.el == "#locations-list" && tabID == "#locations") {
			// if there is more than 0 results
			if (this.collection[this.category+"Collection"].length > 0) {
				this.$el.find(".results-body").show();
				if (!this.googleMap) {
					this.googleMap = new lpch.GoogleMapSearchView({ el: '#map-canvas' });
				}
			} else {
				this.$el.find(".results-body").hide();
			}
		}
	},
	
	/**
	 * @method	addOne	Adds one item to the list of results
	 * @param 	model	data model of the item to add
	 */
	addOne: function(model) {
		var tempView = new this.itemViewClass({model:model});
		var $list = this.$el.find(".results-body ul");
		var $item = $(tempView.render().el);
		$item.find(".avatar p").text($list.find("li").length+1);
		$item.appendTo($list);
	},
	
	/**
	 * @method	updateListView	Updates the list of doctors based on filter settings
	 * @param 	criteria		Object containing filter settings
	 */
	updateListView: function(criteria) {
		_this = this;
		var filteredLength = 0;
		var filteredCollection = new Backbone.Collection();
		if (criteria != undefined) {
			this.$el.find(".results-body ul").empty();
			console.log(criteria);
			this.sortedCollection.each(function(model){
				var flag = true;
				_.each(criteria, function(v,k){
					if (v == ""){
						return;
					}
					//temporary remove radius
					var tempVal = model.get(k);
					// if the key is 'radius' AND lat, lng and radius are DEFINED
					if (k == "radius" && !isNaN(criteria.lat) && !isNaN(criteria.lng) && criteria.radius != ""){
						var dist = model.getDistance(criteria.lat, criteria.lng);
						if (dist > Number(criteria.radius)) {
							flag = false;
							return false;
						}
					// else just another key
					} else {
						// if the key is lat or lng, do nothing
						if (k == "lat" || k == "lng") {
							return false;
						// if the key is zip and radius is defined, do nothing
						} else if (k == 'db_location1zip' && criteria.radius != "") {
							return false;
						} else {
							// else just match the values
							if (tempVal != v) {
								flag = false;
								return false;
							}
						}
					}
				}, this);
				
				if (flag) {
					filteredCollection.add(model);
					filteredLength++;
				}
				
			}, this);
			
			this.renderedCollection = filteredCollection;
			
		} else {
			if (this.category == "") {
				if (filteredLength == 0) 
					filteredLength = this.collection.length;
			} else {
				if (filteredLength == 0)
					filteredLength = this.collection[this.category+"Collection"].length;
			}
			this.renderedCollection = this.sortedCollection;
			
		}
		
		// reset the page to 1 if necessary
		if (this.resetPagination) {
			this.currentPage = 1;
			$.jStorage.set(this.listID+'LastSearchPage', this.currentPage);
		} 
		this.resetPagination = true;
		
		this.numPages = Math.ceil(this.renderedCollection.models.length/this.resultsPerPage);
		this.updatePagination();
		
		this.render();
		this.addStyleForOddRow();
		
		this.$el.find('.result-count span').html(filteredLength);
		
		module.vent.trigger("updateTabLabelLength", {
			l:filteredLength,
			category: this.category==""?"all":this.category
		});
	},
	
	render: function() {
		this.$el.find(".results-body ul").empty();
		
		var start = (this.currentPage-1) * this.resultsPerPage;
		var end = this.currentPage * this.resultsPerPage;
		
		var newColl = new Backbone.Collection( this.renderedCollection.models.slice(start, end) );
		newColl.each(this.addOne, this);
		return this;
	},
	
	switchType: function(e){
		if (!$(e.target).hasClass("active")) {
			var currentType = $(e.target).siblings()
									 .removeClass("active").end()
									 .addClass("active")
									 .attr("data-view-type");
			this.updateViewType(currentType=="grid"?"list":"grid", currentType);
		}
		
		return false;
	},
	
	/**
	 * @method	updatePagination	draw/update the pagination component based on number of results
	 */
	updatePagination: function() {
		var _this = this;
		this.$el.find('.pagination ul').empty();
		var html = '<li class="prev"><a href="#">previous</a></li>';
		// add the appropriate number of page indicators
		for (var i=1; i<=this.numPages; i++) {
			html += '<li><a href="#">'+i+'</a></li>';
		}
		html += '<li class="next"><a href="#">next</a></li>';
		// draw the pagination element
		this.$el.find('.pagination ul')
			.append(html)
			// for anchors that are not the prev or next links
			.find('li').not('.prev, .next').find('a').click(function(event) {
				event.preventDefault();
				// reset active
				_this.$el.find('.pagination ul li').removeClass('active');
				$(this).parent().addClass('active');
				// set currentPage
				_this.currentPage = Number( $(this).text() );
				$.jStorage.set(_this.listID+'LastSearchPage',  _this.currentPage);
				// render list
				_this.render();
				$(window).scrollTop(0);
			});
		
		this.$el.find('.pagination ul li.prev, .pagination ul li.next').find('a').click(function(event) {
			event.preventDefault();
			if ($(this).parent().hasClass('prev')) {
				if (_this.currentPage > 1) {
					_this.currentPage--;
					$.jStorage.set(_this.listID+'LastSearchPage', _this.currentPage);
					_this.render();
					$(window).scrollTop(0);
				}
			} else {
				if (_this.currentPage < _this.numPages) {
					_this.currentPage++;
					$.jStorage.set(_this.listID+'LastSearchPage', _this.currentPage);
					_this.render();
					$(window).scrollTop(0);
				}
			}
			_this.$el.find('.pagination ul li').removeClass('active');
			$(_this.$el.find('.pagination ul li').not('.prev, .next')[_this.currentPage-1]).addClass("active");
			
		});
		
		// set current active page
		$(this.$el.find('.pagination ul li').not('.prev, .next')[this.currentPage-1]).addClass("active");
		
		if (this.numPages <= 1) {
			this.$el.find('.pagination').hide();
		} else {
			this.$el.find('.pagination').show();
		}
	},
	
	/**
	 * @method	updateViewType		Method to update the search results list from list to grid or vice versa
	 * @param 	removeClassName
	 * @param 	addClassName
	 */
	updateViewType: function(removeClassName, addClassName){
		this.$el.find('.list-wrap').removeClass(removeClassName).addClass(addClassName);
	},
	
	/**
	 * @method	handleLayoutChange	Method to handle changes in the layout (smartphone, tablet, desktop)
	 * @param 	layout
	 */
	handleLayoutChange: function(layout) {
		if(layout.get('orientation') == "smartphone")
			this.updateViewType("grid","list");
		else{
			if(this.$el.find('.type-switcher.active').attr("data-view-type")!="list")
				this.updateViewType("list","grid");
		}
	},
	
	handleViewportChange: function() {},
	
	/**
	 * @method	addStyleForOddRow	Adds style for odd numbered rows
	 */
	addStyleForOddRow: function() {
		this.$('ul li').removeClass('odd')
		.filter(function() {
			return $(this).css('display') != 'none';
		})
		.filter(function(i) {
			return i%2 == 0;
		}).addClass('odd');
	}
});lpch.SearchLocationItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('locationItemTemplate').get('html'));
		this.render();
		this.model.on("hide", this.hide, this);
		this.model.on("show", this.hide, this);
	},
	hide: function(category){
		if(this.model.get("content-type")==category)
			this.$el.hide(0);
	},
	show: function(category){
		if(this.model.get("content-type")==category)
			this.$el.show(0);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});lpch.SearchServiceItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('serviceItemTemplate').get('html'));
		this.render();
		this.model.on("hide", this.hide, this);
		this.model.on("show", this.hide, this);
	},
	hide: function(category){
		if(this.model.get("content-type")==category)
			this.$el.hide(0);
	},
	show: function(category){
		if(this.model.get("content-type")==category)
			this.$el.show(0);
	},
	render: function(){		
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});/**
 * Accordion:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Accordion components
 */
lpch.Accordion = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// Help for IE8
		this.$el.find('.mktgaccord-item-main-content ul:first-of-type, .mktgaccord-item-sidebar ul:first-of-type').addClass('first-of-type');
		this.$el.find('.mktgaccord-item-main-content .p50:first-of-type').addClass('first-of-type');
		// End Help for IE8
		
		this.$el.find('.accordion-nav li a').first().addClass('active').next().addClass('open');
		this.$el.find('.mktgaccord-item-container div:first-child').addClass('open');
	
		this.$el.find('.accordion-btn').click(function(e) {
			if($(this).hasClass('no-action')) {
				return false;
			}
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
				
				// track events for nav-item clicks
				module.view.trackEvent($(this).attr('title') || $(this).text());
			}
		});
		
		var $firstAccordion = $('.mktgaccord-component').first();
		var $lastAccordion = $('.mktgaccord-component').last();
		
		$firstAccordion.find(".accordion-title .arrow").addClass("bottom");
		$lastAccordion.find(".accordion-title .arrow").addClass("top");
		$lastAccordion.addClass("last-child");
		
		this.$el.find('.bottom').click(function(){
			$('html, body').stop().animate({
				scrollTop: $lastAccordion.offset().top
			}, 600);					
		});
		this.$el.find('.top').click(function(){
			$('html, body').stop().animate({
				scrollTop: $firstAccordion.offset().top - $firstAccordion.find(".tabs-title").height() - 15
			}, 600);					
		});
		
		// track events from anchor clicks
		this.$el.find(".mktgaccord-item a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});

		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'smartphone') {
			this.$el.find('.accordion-title').unbind('click', this.toggleAccordion).bind('click', this.toggleAccordion).removeClass('down').addClass('up');
			this.$el.find('.accordion-title').next().hide();
			this.setHeightForSubNav();

			this.$el.find('.bottom').unbind('click');
			this.$el.find('.top').unbind('click');
		} 
		

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			this.$el.find('.accordion-title').unbind('click', this.toggleAccordion).bind('click', this.toggleAccordion);
			this.$el.find('.accordion-title').removeClass('up').addClass('down');
			this.$el.find('.bottom').unbind('click');
			this.$el.find('.top').unbind('click');

		} else {
			this.$el.find('.accordion-title').unbind('click',this.toggleAccordion);
			this.$el.find('.accordion-wrapper').removeAttr("style");
			this.$('.accordion-item a').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'smartphone') {
			this.setHeightForSubNav();
		}
	},

	toggleAccordion: function() {
		var $title = $(this);
		if ($title.hasClass('down')){
			$title.removeClass('down').addClass('up');
		} else {
			$title.removeClass('up').addClass('down');
		}
		$title.next().toggle();
	},
	setHeightForSubNav: function() {
		var orientation = module.view.getCurrentOrientation();

		if(orientation == 'smartphone') {
			this.$('.accordion-item a').removeAttr('style');
			var maxHeight = this.getMaxHeightForSubNav();
			this.$('.accordion-item a').height(maxHeight);
		}
	},
	getMaxHeightForSubNav: function() {
		var maxHeight = this.$('.accordion-item a').eq(0).height();
		this.$('.accordion-item a').each(function(i) {
			if($(this).height() > maxHeight)
				maxHeight = $(this).height();
		});
		return maxHeight;
	}

});
/**
 * Accordion:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */
$(window).bind('initializeComponents', function() {
	$('.mktgaccord-component').each(function(index) {
		new lpch.Accordion({
	        el: this
	    });
	});
});

/**
 * ArticleContent:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for ArticleContent components
 */
lpch.ArticleContent = lpch.BaseView.extend({ 
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// track events from anchor clicks
		this.$el.find('a').not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * ArticleContent:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.ArticleContent' classes and initialize lpch.ArticleContent
 */
$(window).bind('initializeComponents', function() {
	$('.article-content').each(function(index) {
		new lpch.ArticleContent({
	        el: this
	    });
	});
	
});/**
 * BackToTop:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for BackToTop components
 */
lpch.BackToTop = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('.link-back-to-top').click(_this.backToTop);
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	backToTop: function(e) {
		
		module.view.trackEvent($(this).attr('title') || $(this).text());
		
		$('html, body').animate({
			'scrollTop': 0
		}, 300);
		e.preventDefault();
	}
});

/**
 * BackToTop:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.BackToTop' classes and initialize lpch.BackToTop
 */
$(window).bind('initializeComponents', function() {
	$('.back-to-top').each(function(index) {
		new lpch.BackToTop({
	        el: this
	    });
	});
}); /**
 * Breadcrumb:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the breadcrumb component
 */
lpch.Breadcrumb = lpch.BaseView.extend({
	
	scroller: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.dropdown-breadcrumb').bind('click', function(e) {
			_this.openBreadcrumb(e);
		});
		
		// track event clicks
		this.$el.find('.list-breadcrumb a').bind('click', function(e){
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		$(document).bind('click touchstart',function(e){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation != 'desktop') {
				if ( !$(e.target).parents().is(_this.$el) )
					_this.closeBreadcrumb();
			}
		});
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	openBreadcrumb: function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.list-breadcrumb').show();
		var elem = this.$el.find('.list-breadcrumb')[0];
		this.scroller = new iScroll(elem, {bounce: false});
	},
	
	closeBreadcrumb: function(e){
		$('.list-breadcrumb').hide();
		this.scroller = null;
	},
	
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'desktop') {
			$('.list-breadcrumb').show();
		}
		else {
			$('.list-breadcrumb').hide();	
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Breadcrumb:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.breadcrumb' classes and initialize lpch.Breadcrumb
 */
$(window).bind('initializeComponents', function() {
	$('.breadcrumb').each(function(index) {
		new lpch.Breadcrumb({
	        el: this
	    });
	});
});/**
 * Calendar:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.Calendar = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},

  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object

    _this.$el.find('.section-navigation a').bind('click', function(e){
    	e.preventDefault();
    	_this.filterEvents(this);
    	
    	var orientation = module.view.getCurrentOrientation(); 
		if (orientation == 'smartphone') {
	    	_this.$el.find('.section-navigation h2').text($(this).text());
	    	// trigger an event that SectionNavigation handles to close the nav
	    	$(this).trigger("itemClicked");
		}
    });

    // language detection, default is 'en' (English)
    var url = window.location.pathname.split("/");
    _this.lang = 'en';
    // if 'es' is present, set to Spanish
    // if 'en' or blank, do nothing
    if ( url[1] === 'es' ) _this.lang = 'es';
   
   $.ajax({
      type: "GET",
      //url: "/web-resources/default/data/certaindemo.xml",
      url: "/config-public/events/index.xml",
      dataType: "xml",
      success: function(data) {
        _this.jsonObj = _this.xmlToJson(data);
        _this.parseData('ALL');
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },

  parseData: function(cat) {
    var _this = this;
    if (cat === 'ALL') cat = '';
    var html = '',
        counter = 0,
        duplicates = [],
        classes = [];
    
    _this.$el.find('.noevents').hide();
    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
      // list only active/live events
      if (val.txtEvtEstName /* === 'Live' */) {
        
        // fix for indexOf in IE8
        if (!Array.indexOf){
          Array.prototype.indexOf = function(obj){
           for(var i=0; i<this.length; i++){
            if(this[i]==obj){
             return i;
            }
           }
           return -1;
          }
        }
        // filter by category
        if (val.txtEvtAnsField02['#text'] && val.txtEvtAnsField02['#text'].indexOf(cat) !== -1) {
          // filter out duplicate classes
          if (classes.indexOf(val.txtEvtAnsField01['#text']) === -1) {
            classes.push(val.txtEvtAnsField01['#text']);
            html += '<li class="event evt_'+val.txtEvtCode['#text']+'" data-rel="'+val.txtEvtAnsField01['#text']+'">';
            html += '<div class="event-name">';
            html += '<a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'">';
            // check for Spanish
            if (_this.lang === 'es') {
              // if Spanish field isn't present display English
              if(typeof val.txtEvtAnsField05['#text'] !== 'undefined') {
                html += val.txtEvtAnsField05['#text'];
              } else {
                html += val.txtEvtName['#text'];
              }
            } else {
              html += val.txtEvtName['#text'];
            }
            html += '</a>';
            html += '</div>';
            html += '<div class="event-description">';
            // check for Spanish
            if (_this.lang === 'es') {
              // if Spanish field isn't present display English
              if(typeof val.txtEvtAnsField06['#text'] !== 'undefined'){
                html += val.txtEvtAnsField06['#text'];
              } else {
            	  if (val.txtEvtNotes['#text'] !== 'undefined') {
                	  html += val.txtEvtNotes['#text'];
                  }
              }
            } else {
              if (val.txtEvtNotes['#text'] !== 'undefined') {
            	  html += val.txtEvtNotes['#text'];
              }
            }
            html += '</div>';
            html += '<div class="event-data">';
            //html += '<span class="frequency">Multiple Sessions</span>';
            html += '<span class="time">'+val.dteEvtStartTime['#text']+' - '+val.dteEvtEndTime['#text']+'</span>';
            if (Number(val.txtEvtAnsField08['#text']) == 0) {
            	html += '<span class="time">Free</span>';
            } else {
            	html += '<span class="time">$'+val.txtEvtAnsField08['#text']+'</span>';
            }
            html += '<span class="details"><a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'">Details</a></span>';
            html += '</div></li>';
            counter++;
          } else {
        	  // add duplicates to an array to keep track
        	  if (duplicates.indexOf(val.txtEvtAnsField01['#text']) === -1) {
                  duplicates.push(val.txtEvtAnsField01['#text']);
        	  }
          }
        }
        
      }
    });
    
    // if no events are present, show 'no event' message
    if (counter === 0) {
      _this.$el.find('.noevents').show();
    } else {
      _this.$el.find('.eventlist').html(html);
    }
    
    // for each class
    $.each(classes, function(index, value) {
    	// if the class does not exist in duplicates
    	if (duplicates.indexOf(value) === -1) {
    		// remove the "Multiple Sessions" span
    		_this.$el.find('.eventlist .event[data-rel="'+value+'"] span.frequency').remove();
    	}
     });
  },

  filterEvents: function (evt) {
    var _this = this;
    var filter = $(evt).attr('class');
    if ( !$(evt).parent().hasClass('active') ) {
      _this.$el.find('.active').removeClass('active');
      _this.$el.find(evt).parent().addClass('active');
      _this.$el.find('.eventlist li').addClass('previous');
      _this.$el.find('.events').fadeOut(function(){
        _this.parseData(filter);
        _this.$el.find('.eventlist li.previous').remove();
        _this.$el.find('.events').fadeIn();
      });
    }
  },

  xmlToJson: function(xml) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }
  
    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) === "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) === "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

});

/**
 * Calendar:  Initialization
 * Description: Listen for 'initializeComponents' triggered from Document.js
 *        Then find all '.calendar' classes and initialize lpch.Calendar
 */
$(window).bind('initializeComponents', function() {
	$('.calendar.list').each(function(index) {
		new lpch.Calendar({
			el: this
		});
	});
});//This js file used in service-index.html

lpch.ContactForm = lpch.BaseView.extend({

	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		this.initSelect(this.$el);

		this.validate(this.$el);
		
		this.pageSuccess();
		
		// Submit button tracking
		this.$el.find('input[type="submit"]').click(function(event) {
			module.view.trackEvent($(this).val());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
	},	
	handleViewportChange: function(width, height) {
		
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if ($('#colorbox').hasClass('layer-success-form-template')){
			clearTimeout(this.timer);
			this.timer = setTimeout(function(){
				if(orientation == 'smartphone') {
					$.colorbox.resize({
						innerWidth:320,
						innerHeight: 380
					});
				}
				else if(orientation == 'tablet') {
					$.colorbox.resize({
						innerWidth:508,
						innerHeight: 300
					});
				}
				else{
					$.colorbox.resize({
						innerWidth:564,
						innerHeight: 273
					});			
				}
			},200);
		}
	},
	initSelect: function(){
		var selects = this.$el.find('.selectpicker');		
		selects.selectpicker();		
		selects.change(function(){
			var $sel = $(this);
			var error = $sel.prev(".error");			
			($sel.val() != '') && error.length && error.hide();
		});
	},
	validate: function(form){
		var _this = this;
		form.validate({
			ignore: "",
			errorPlacement: function(error, element) {				
				error.addClass('error-text-right');
				if (element.next().is('.add-on')) {
					error.addClass('add-on').insertBefore(element.next('.add-on'));
				} else {
					error.insertBefore(element);
				}
			},
			rules: {				
				fullname: "required",
				email: {
					required: true,
					email: true
				},
				inquiry: {
					required: true
				},
				message : "required"
			},
			messages: {
				fullname: "* Required Field",
				email: {
					required: "* Required Field",
					email: "* Invalid Email"
				},
				inquiry: "* Required Field",
				message: "* Required Field"
			}
		});
	},
	templateSuccess: function(){
		return '<div class="layout-success-container">'+
							'<div class="content">'+
								'<h3 class="heading">Thank You!</h3>'+
								'<p class="description">Est ma comnienis mos ex erferum rerereped quia si reperfe rnates eatibust, excerspid quunt, quas is ipsusciuntes aut eatusamus veliquat imint alit et quidign imoluptatur aceruptatur repudantet quia nulpa plaborepudis re ame imi, es simi, quat autem que Cuptaqu aepernatquis aut am volest, temolorest, consed magnam quat eum int quatur aut que parchit laut la sitias idit omnit ent maiorro.</p>'+
							'</div>'+
							'<p class="controls">'+
								'<button class="btn btn-danger" type="button">Return to page</button>'+
							'</p>'+
						'</div>';
	},
	pageSuccess: function(){		
		if (module.view.getParameterByName("success") == "true"){
			var template = this.templateSuccess();
			
			$.colorbox({
				html: template,
				innerWidth:564,
				innerHeight:273,
				onComplete: function(){
					var orientation = module.view.getCurrentOrientation();
					if(orientation == 'smartphone') {
						$.colorbox.resize({
							innerWidth:320,
							innerHeight: 400
						});
					}
					else if(orientation == 'tablet') {
						$.colorbox.resize({
							innerWidth:508,
							innerHeight: 300
						});
					}
				},
				onOpen: function(){
					$('#colorbox').addClass('layer-success-form-template');
				},
				onClosed: function(){
					$('#colorbox').removeClass('layer-success-form-template');
				}
			});
		}
	}
});

$(window).bind('initializeComponents', function() {	
	new lpch.ContactForm({
		el: '.contact-form'
	});
});/**
 * DoctorDetailTab:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorDetailTab = lpch.BaseView.extend({
	
	NAME: "Doctor Profile",
	pictureProfile: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		_this.$('#doctor-detail-tab a').click(function(event) {
			event.preventDefault();
			_this.showTab(event);
		});

		if(orientation != "smartphone"){
			$('.pull-right').find('.health-wellness-topic').prependTo('.health-wellness-topic-prepend');
		}
		else {
			$('.health-wellness-topic-prepend').find('.health-wellness-topic').appendTo('.health-wellness-topic-append');	
		}
		_this.showAutoTab();

		_this.$('.introduction-sort .read-more').click(this.showIntroductionFull);
		
		/* Add tracking events */
		this.$el.find('.tab-content a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	showTab: function(e) {		
		var thisTab = $(e.currentTarget);
		module.view.trackEvent($(thisTab).find('.inner').text());
		thisTab.tab('show');
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		var _this = this;
		if(device != "smartphone"){
			$('.pull-right').find('.health-wellness-topic').prependTo('.health-wellness-topic-prepend');
			_this.$('.introduction-sort .read-more').trigger('click');
		}
		else {
			$('.health-wellness-topic-prepend').find('.health-wellness-topic').appendTo('.health-wellness-topic-append');

			_this.hideIntroductionFull();
		}

		_this.showAutoTab();

	},	
	showAutoTab: function() {
		var objLi = this.$el.find('.doctor-detail-tab-nav li');
		var lenTab = objLi.length;
		var singleTabSize = 100/lenTab;
		objLi.css('width',singleTabSize+'%');
		
	},
	showIntroductionFull: function(e){
		e.preventDefault();
		$('.introduction-sort').hide();
		$('.introduction-full').show();
	},
	hideIntroductionFull: function(e){
		$('.introduction-sort').show();
		$('.introduction-full').hide();
	},
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorDetailTab:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorDetailTab
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-detail-tab').each(function(index) {
		new lpch.DoctorDetailTab({
	        el: this
	    });
	});
});/**
 * DoctorIntro:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorIntro = lpch.BaseView.extend({
	
	quoteSlider: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;			
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('li').wrapInner('<div />');
		this.initSlider();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initSlider: function() {
		this.quoteSlider = this.$el.find('ul').bxSlider({
			auto: false,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: true,
			pager: false,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true
		});
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorIntro:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorIntro
 */
$(window).bind('initializeComponents', function() {
	// clone the "desktop" .doctor-intro container and prepend it to the "smartphone" container
	// this prevents the need to do any DOM manipulation on orientation change which
	// causes issues with the BXSlider
	$('.doctor-profile .span8 .doctor-intro')
		.clone()
		.prependTo('.doctor-profile .span4 .doctor-intro-wrap')
		.addClass("visible-phone");
	// initialize
	$('.doctor-intro').each(function(index) {
		new lpch.DoctorIntro({
			el: this
		});
	});
});/**
 * DoctorPicture:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorPicture = lpch.BaseView.extend({
	
	pictureProfile: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();	
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		//TODO: Init BxSlider for DoctorPicture here
		if(orientation == 'smartphone') {
			_this.initPictureProfilePhone();
		}
		else {
			_this.initPictureProfileDesktop();
		}
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		var _this = this;
		var orientation = layout.get('orientation');

		if(orientation != 'smartphone') {
			_this.reInitPictureProfileDesktop();
		}
		
	},

	// init picture profile slider for mobile
	initPictureProfilePhone: function(){
		this.pictureProfile = this.$el.find('#picture-profile').bxSlider({
			auto: false,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: false,
			pager: false,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true,
			mode: 'fade',
			onSliderLoad: function(){
			}
		});
	},
	// init picture profile slider for Tablet & desktop
	initPictureProfileDesktop: function(){

		var pictureProfile = this.$el.find('#picture-profile');

		var bxPager = $('<div class="thumb-picture-profile" id="bx-pager-custom"></div>');

		bxPager.insertAfter(pictureProfile);

		$('>li',pictureProfile).each(function(){
			var index = $(this).index();
			var imgSrc = $(this).attr('data-img');
			var li = $('<a class="item-thumb" data-slide-index="'+index+'" href=""><img src="'+imgSrc+'" alt="Doctor Picture" /></a>')
			li.appendTo(bxPager);
		})

		this.pictureProfile = this.$el.find('#picture-profile').bxSlider({
			pagerCustom: '#bx-pager-custom'
		});
		
		// track clicks on thumbnail imgs
		this.$el.find(".item-thumb").click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text() || $(this).find('img').first().attr('alt'));
		});
	},

	reInitPictureProfileDesktop: function(){

		$('#bx-pager-custom').remove();
		this.pictureProfile.destroySlider();
		this.initPictureProfileDesktop();

	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorPicture:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorPicture
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-picture').each(function(index) {
		new lpch.DoctorPicture({
	        el: this
	    });
	});
});/**
 * DoctorProfile:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorProfile = lpch.BaseView.extend({
	
	NAME: "Doctor Profile",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		if(orientation == "desktop"){
			$('.span12').find('.related-locations').prependTo('.span8 .related-locations-wrap');
		} else {
			$('.span8').find('.related-locations').prependTo('.span12 .related-locations-wrap');
		}

		if(orientation == "tablet"){
			$('.span12').find('.doctor-profile-title').prependTo('.span8 .doctor-profile-title-wrap');
		} else {
			$('.span8').find('.doctor-profile-title').prependTo('.span12 .doctor-profile-title-wrap');
		}
		
		
		/* Add tracking events */
		// vcard, directions tracking
		this.$el.find('.list-link-top a, .arrow-add, .btn-make, .btn-directions').click(function(event) {
			module.view.trackEvent( $(this).attr('title') || $(this).text() );
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	handleLayoutChange: function(layout) {
		if(orientation == "desktop"){
			$('.span12').find('.related-locations').prependTo('.span8 .related-locations-wrap');
		} else {
			$('.span8').find('.related-locations').prependTo('.span12 .related-locations-wrap');
		}

		if(orientation == "tablet"){
			$('.span12').find('.doctor-profile-title').prependTo('.span8 .doctor-profile-title-wrap');
		} else {
			$('.span8').find('.doctor-profile-title').prependTo('.span12 .doctor-profile-title-wrap');
		}
		$('.related-locations').each(function(index) {
			new lpch.Location({
		        el: this
		    });
		});
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorProfile:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorProfile
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-profile').each(function(index) {
		new lpch.DoctorProfile({
	        el: this
	    });
	});

	
});/**
 * Engagement:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Engagement components
 */
lpch.Engagement = lpch.BaseView.extend({
	
	slide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.item').last().addClass('last');
		
		// track events from anchor clicks
		this.$el.find(".engagement-item a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Engagement:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.engagement' classes and initialize lpch.Engagement
 */
$(window).bind('initializeComponents', function() {
	$('.engagement').each(function(index) {
		new lpch.Engagement({
	        el: this
	    });
	});
});/**
 * Event Detail:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.EventDetail = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},
  
  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object

    // language detection, default is en (English)
    var url = window.location.pathname.split("/");
    var evt = location.search.replace('?', '').split('=');
    evt = evt[1];
    _this.lang = 'en';
    // if 'es' is present, set to Spanish
    if ( url[1] === 'es' ) _this.lang = 'es';

    $.ajax({
      type: "GET",
      //url: "/web-resources/default/data/certaindemo.xml",
      url: "/config-public/events/index.xml",
      dataType: "xml",
      success: function(data) {
        _this.jsonObj = _this.xmlToJson(data);
        _this.parseData(evt);
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },
  
  initMap: function(loc) {
    var geocoder = null,
        map = null;
    
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': loc}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var options = {
          zoom: 14,
          center: results[0].geometry.location,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), options);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      }
    });
  },

  parseData: function(evt) {
    var _this = this;
    if (evt === 'ALL') evt = '';
    var html = '',
        detail = false;

    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
      // if event code is blank, do nothing
      if (typeof val.txtEvtAnsField01['#text'] !== 'undefined') {
        // list only active/live events
        if (val.txtEvtEstName /* === 'Live' */) {
        
          // fix for indexOf in IE8
          if(!Array.indexOf){
            Array.prototype.indexOf = function(obj){
             for(var i=0; i<this.length; i++){
              if(this[i]==obj){
               return i;
              }
             }
             return -1;
            }
          }
        
          // get events matching event code
          if (val.txtEvtAnsField01['#text'].indexOf(evt) !== -1) {
            // check if image path is present, if not display default
            if(typeof val.txtEvtAnsField04['#text'] !== 'undefined'){
              _this.$el.find('.event-image img').attr('src', val.txtEvtAnsField04['#text']);
            } else {
              _this.$el.find('.event-image img').attr('src', '/web-resources/default/img/event-img-BFS.jpg');
            }
                      
            // grab title and description from first event instance, disable for remaining events
            var loc;
            if (detail === false) {
              // get location for google maps
              loc = val.txtLocAdrLine1['#text']+'+'+val.txtLocAdrCity['#text']+',+'+val.txtLocAdrState['#text'];
              loc = loc.split(' ').join('+');
              _this.initMap(loc);
              
              _this.$el.find('.event-info, .event-info .event-description').addClass(val.txtEvtAnsField01['#text']);
              var evtTitle = val.txtEvtName['#text'];
              var evtDescription = val.txtEvtNotes['#text'];
              if (_this.lang === 'es') {
                // if Spanish field isn't present or empty display English
                if(typeof val.txtEvtAnsField05['#text'] !== 'undefined'){
                  evtTitle = val.txtEvtAnsField05['#text'];
                  evtDescription = val.txtEvtAnsField06['#text'];
                }
              }
              _this.$el.find('.event-info .event-title').html('<h2>'+evtTitle+'</h2>');
              _this.$el.find('.event-info .event-description').html(evtDescription);
              var address = '';
              address += '<strong>'+val.txtLocName['#text']+'</strong><br>';
              address += val.txtLocAdrLine1['#text']+'<br>';
              address += val.txtLocAdrCity['#text']+', '+val.txtLocAdrState['#text']+' '+val.txtLocAdrPostalCode['#text']+'<br>';
              address += '<div class="map-link"><a href="https://maps.google.com/maps?q='+loc+'" target="_blank">Maps &amp; directions...</a></div>';
              
              _this.$el.find('.event-info .event-location').append(address);
              detail = true;
            }
            html += '<div class="event e_'+val.evtEncodedId['#text']+'">';
            html += '<div class="event-date">';
            html += '<div class="event-day">'+val.dteEvtStartDate['#text']+'</div>';
            html += '<div class="event-time">'+val.dteEvtStartTime['#text']+' - '+val.dteEvtEndTime['#text']+'</div>';
            html += '</div>';
            html += '<div class="event-location">';
            html += '<div class="location-name">'+val.txtLocName['#text']+'</div>';
            html += '<div class="location-address">'+val.txtLocAdrLine1['#text']+'</div>';
            html += '<div class="location-city">'+val.txtLocAdrCity['#text']+', '+val.txtLocAdrState['#text']+' '+val.txtLocAdrPostalCode['#text']+'</div>';
            // update location link for individual events
            loc = val.txtLocAdrLine1['#text']+'+'+val.txtLocAdrCity['#text']+'+'+val.txtLocAdrState['#text']+'+'+val.txtLocAdrPostalCode['#text'];
            loc = loc.split(' ').join('+');
            html += '<div class="location-map"><a href="https://maps.google.com/maps?q='+loc+'" target="_blank">Maps &amp; directions...</a></div>';
            html += '</div>';
            html += '<div class="event-cost">';
            // calculate number of remaining seats
            var seats = val.txtEvtAnsField03['#text'] - val.intEvtNumberRegistered['#text'];
            var txtSeat = 'seats';
            if (seats === 1) txtSeat = 'seat';
            // if class is full, show message
            if (seats <= 0) {
              html += '<div class="event-price">CLASS<br>FILLED</div>';
              
            } else {
              html += '<div class="event-remaining">'+seats+' '+txtSeat+' remaining</div>';
              var price = '$'+val.txtEvtAnsField08['#text'];
              if (price === '$0') {
                price = 'Free';
              }
              html += '<div class="event-price">'+price+'</div>';
            }
            html += '</div>';
            if (val.txtEvtAnsField09['#text'] === undefined || val.txtEvtAnsField09['#text'] == '' || val.txtEvtAnsField09['#text'].toLowerCase() == 'yes') {
	            html += '<div class="event-register">';
	            // if seats are empty, display grey button
	            if (seats <= 0) {
	              html += '<div class="register-btn"><a href="#" class="btn disabled">Register</a></div>';
	            } else {
	              html += '<div class="register-btn"><a href="'+val.txtEvtPrimaryFormURL['#text']+'" class="btn">Register</a></div>';
	            }
	            html += '</div>';
            }
            html += '</div>';
          }
        }
      }

    });
    _this.$el.find('.eventlist').html(html);
  },

  xmlToJson: function(xml) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }
  
    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) === "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) === "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

});

/**
 * Event Detail:  Initialization
 * Description: Load Google Maps API before initializing the page.
 */
$(window).bind('initializeComponents', function() {
	new lpch.EventDetail({
	    el: '.event-detail'
	  });
});lpch.FBLikeBox = lpch.BaseView.extend({
	initialize: function(){
		var _this = this;
		this.$el = $(".facebook-body");
		lpch.BaseView.prototype.initialize.call(this);
		FB.Event.subscribe("xfbml.render", function(){			
			var checkInterval = setInterval(function(){				
				if(_this.$el.find("iframe").length!=0){
					_this.$el.find("iframe").removeAttr("width").css({width: _this.$el.width()});
					clearInterval(checkInterval);	
				} 
			}, 500);
		});
	},
	handleViewportChange: function(){
		console.log("asdasd");
		this.$el.find("iframe").removeAttr("width").css({width: this.$el.width()});
	}
});

$(window).bind('initializeComponents', function() {
	$('.social-youtube-videos').each(function(index) {
		new lpch.FBLikeBox();
	});
});

/**
 * Footer:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Footer component
 */
lpch.Footer = lpch.BaseView.extend({
	
	NAME: "Footer",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('a').click(function(event) {
			module.view.trackEvent($(this).text(), $(this).parent().parent().parent().find("> h3").text(), _this.NAME);
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Footer:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Footer' classes and initialize lpch.Footer
 */
$(window).bind('initializeComponents', function() {
	$('.footer').each(function(index) {
		new lpch.Footer({
	        el: this
	    });
	});
});/**
 * Feature:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Feature components
 */
lpch.Feature = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		var orientation = module.view.getCurrentOrientation();
		if( orientation != 'smartphone') {
			$('.img-top-text-bottom').find('.pull-right').prependTo('.img-top-text-bottom');
		}

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			$('.img-top-text-bottom').find('.pull-right').appendTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.pull-right').prependTo('.img-top-text-bottom');
		} 
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Feature:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Feature' classes and initialize lpch.Feature
 */
$(window).bind('initializeComponents', function() {
	$('.feature-story').each(function(index) {
		new lpch.Feature({
	        el: this
	    });
	});
});/**
 * GlobalCarousel:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.GlobalCarousel = lpch.BaseView.extend({
	
	slide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		//var slideCount = this.slide.getSlideCount();
		/*if (orientation != 'desktop') {
			this.$el.find('.bx-controls-direction a').removeClass('disabled');
		} else {
			if (slideCount < 3) {
				this.$el.find('.bx-controls-direction a').addClass('disabled');
			}
		}*/
		var _this = this;
		/*
		if(orientation == 'smartphone'){
			this.slide = this.$el.find('#global_slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 320,
				controls: true,
				useCSS: false,
				pager: false,
				startSlide: 0,
				hideControlOnEnd: false,
				infiniteLoop: false
			});

		}
		else {
			if(this.slide != null) {
				this.slide.destroySlider();
				this.slide = null;
				setTimeout(function(){
					_this.$el.find('.slide-item').removeAttr("style");
				},100);
			}
		}
		*/
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * GlobalCarousel:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.global-carousel' classes and initialize lpch.GlobalCarousel
 */
$(window).bind('initializeComponents', function() {
	$('.global-carousel').each(function(index) {
		new lpch.GlobalCarousel({
	        el: this
	    });
	});
});lpch.GoogleMapSearchView = lpch.BaseView.extend({
	initialize: function() {

		var _this = this;
		_this.initMap();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initMap: function() {
		
		var SearchLocations =[];
		var LocDocs = searchResults.response.docs;
		
			
		var locSearchResult = [];
		if(LocDocs.length>0){
		var i=0;		
				$.each(LocDocs, function(j){
				
					 if (LocDocs[j]['content-type'] == "location"){
						 locSearchResult[i] = {
							 "id": LocDocs[j].id,
							 "title": LocDocs[j].title,
							 "name": LocDocs[j].name,
							 "description": LocDocs[j].description,
							 "keywords": LocDocs[j].keywords,
							 "content-path" : LocDocs[j]["path"],
							 "address": LocDocs[j]["address-a"],
							 "address-city" : LocDocs[j]["city"],
							 "address-zip": LocDocs[j]["zip"],
							 "address-state": LocDocs[j]["state"],
							 "location-phone": LocDocs[j]["telecom"],
							 "latitude" : LocDocs[j]["lat"],
							 "longitude" : LocDocs[j]["long"],
							 "location-map-image-small": LocDocs[j]["location-map-image-small"],
							 "location-map-image-large": LocDocs[j]["location-map-image-large"],
							 "doctor": LocDocs[j].doctor							 
						 };
						 i++; 		
					 }
				});
			
			}
		
		var lat = Number(locSearchResult[0]["latitude"]);
		var lng = Number(locSearchResult[0]["longitude"]);
		var mapCenter = new google.maps.LatLng(lat, lng);
		var pinPath = '/web-resources/default/img/ico-point.png';
	
        map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 8,
          center: mapCenter,
          mapTypeControl: true,
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          navigationControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
		var that;
		var markerClick = function() {
			if (that) {
				that.setZIndex();
			}
			that = this;
			this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
		};   
      
        
        
        $.each(locSearchResult, function(j) {
	        var pinImage = pinPath;
	        
	        lat = Number(locSearchResult[j]["latitude"]);
			lng = Number(locSearchResult[j]["longitude"]);
		        
			var marker = new MarkerWithLabel({
					position: new google.maps.LatLng(lat, lng),
			       	draggable: false,
			       	clickable: true,
					map: map,
					labelContent: j+1,
					icon: pinImage,
			       	title: locSearchResult[j].name,
					labelAnchor: new google.maps.Point(20, 50),
					labelClass: "markerwithlabel", // the CSS class for the label
			     });
	        
	        google.maps.event.addListener(marker, "click", markerClick);
        });
      
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}	
	
});lpch.GoogleMapView = lpch.BaseView.extend({
	initialize : function() {

		var _this = this;

		_this.initMap();
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange : function(layout) {
		var orientation = layout.get('orientation');
		if (this.infoBubble) {
			if (orientation == 'tablet' || orientation == 'smartphone') {
				this.infoBubble.setMinWidth(255);
			} else if (orientation == 'desktop') {
				this.infoBubble.setMinWidth(400);
			}
		}

	},
	
	handleViewportChange : function(width, height) {

	},
	
	initMap : function() {
		// defaultLocation defined as global var in page/window
		var lat = window.defaultLocation['lat'];
		var lng = window.defaultLocation['long'];
		
		var mapCenter = new google.maps.LatLng(lat, lng);
		
		map = new google.maps.Map(document.getElementById('map-canvas'), {
			zoom : 12,
			center : mapCenter,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});
		
		var image = '/web-resources/default/img/map-maker-icon.png';
		var marker = new google.maps.Marker({
			map : map,
			position : mapCenter,
			draggable : false,
			icon : image
		});

		var contentString = window.defaultLocation.content;
		var bubbleColor = '#fff';
		if (Modernizr.rgba)
			bubbleColor = 'rgba(255,255,255,0.8)';

		var infoBubble = new InfoBubble({
			minWidth : 255,
			minHeight : 110,
			borderRadius : 0,
			padding : 20,
			arrowSize : 10,
			borderWidth : 0,
			borderColor : bubbleColor,
			backgroundColor : bubbleColor,
			content : contentString,
			backgroundClassName : 'mapBG',
			hideCloseButton : true,
			shadowStyle : 1,
			arrowSize : 20
		});
		infoBubble.open(map, marker);
		
		// allows click on marker to center map on marker and infobubble
		google.maps.event.addListener(marker, 'click', function(event) {
			infoBubble.open(map, marker);
	    });
		
		// fix for map that doesn't autopan to marker/infowindow
		google.maps.event.addListenerOnce(map, 'idle', function(){
			google.maps.event.trigger(marker,'click');
		});  
	}
});

$(window).bind('initializeComponents', function() {
	$('.google-map').each(function() {
		if (!google)
			return;
		setTimeout(function() {
			new lpch.GoogleMapView({
				el : this
			});
		}, 1300);
	});
});
/**
 * Header:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the site header
 */
lpch.Header = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// check to see if the device is Android's Browser app NOT Chrome
		// if Browser app, add class to header to help with flyout nav
		if ($('html').hasClass('android') && !$('html').hasClass('chrome')) this.$el.addClass('android-browser');
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.find('.nav-btn').click(function(event) {
			event.preventDefault();
			$('.ls-canvas').toggleClass('active');
			$('body').toggleClass('no-scroll');
			$('#mobile-content-overlay').toggle();
			
			// trigger an event that the nav is being toggled
			module.trigger('toggleNav');
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == 'desktop') {
			if($('.ls-canvas').hasClass('active')) {
				this.$el.find('.nav-btn').trigger('click');	
			}			
		} else {
			
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Header:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.Header
 */
$(window).bind('initializeComponents', function() {
	new lpch.Header({ el: '#header' });
});/**
 * HeroBanner:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.HeroBanner = lpch.BaseView.extend({
	
	NAME: "Hero Banner",
	heroSlide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		var hasSlides = (_this.$el.find("#hero_banner li").length > 1);
		this.heroSlide = this.$el.find('#hero_banner').bxSlider({
			auto: true,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: false,
			pager: hasSlides,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true,
			onSliderLoad: function(){
				$('.slide-content').removeClass('slide-content--fix-height-mobile');
				$(_this.$el.find(".information .item")[0]).show();
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex) {
				$(_this.$el.find(".information .item")[oldIndex]).hide();
				$(_this.$el.find(".information .item")[newIndex]).fadeIn();
			}
		});
		
		$.each(this.$el.find(".information .item"), function(index, el) {
			if (_this.heroSlide.getCurrentSlide() == index) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
		
		this.$el.find(".information .item a").click(function(event) {
			module.view.trackEvent($(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		var _this = this;
		$.each(this.$el.find(".information .item"), function(index, el) {
			if (_this.heroSlide.getCurrentSlide() == index) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * HeroBanner:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.HeroBanner
 */
$(window).bind('initializeComponents', function() {
	$('.hero-banner').each(function(index) {
		new lpch.HeroBanner({
	        el: this
	    });
	});
});/**
 * HomeSlider:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for HomeSlider components
 */
lpch.HomeSlider = lpch.BaseView.extend({
	
	slider: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		if (module.view.getCurrentOrientation() != "smartphone") {
			this.initSlider();
		}
		
		$('.generic').addClass('nopad');
		
		this.$el.find('a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initSlider: function() {
		var _this = this;
		if (this.slider) return;
		var hasSlides = (this.$el.find(".bxslider > li").length > 1);
		if (hasSlides) {
			var nextStr = $(this.$el.find(".bxslider > li")[1]).attr("data-title");
			this.slider = this.$el.find(".bxslider").bxSlider({
				nextText: nextStr,
				auto: false,
				minSlides: 1,
				maxSlides: 1,
				controls: true,
				useCSS: true,
				pager: false,
				startSlide: 0,
				infiniteLoop: false,
				hideControlOnEnd: true,
				onSlideNext: function($elem, oldIndex, newIndex) {
					var nextStr = $(_this.$el.find(".bxslider > li")[newIndex+1]).attr("data-title");
					var prevStr = $(_this.$el.find(".bxslider > li")[oldIndex]).attr("data-title");
					_this.$el.find(".bx-controls .bx-prev").text(prevStr);
					_this.$el.find(".bx-controls .bx-next").text(nextStr);
				},
				onSlidePrev: function($elem, oldIndex, newIndex) {
					var nextStr = $(_this.$el.find(".bxslider > li")[newIndex+1]).attr("data-title");
					var prevStr = $(_this.$el.find(".bxslider > li")[newIndex-1]).attr("data-title");
					_this.$el.find(".bx-controls .bx-prev").text(prevStr);
					_this.$el.find(".bx-controls .bx-next").text(nextStr);
				}
			});
		}
	},
	
	destroySlider: function() {
		if (!this.slider) return;
		this.slider.destroySlider();
		this.slider = null;
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation')=='smartphone') {
			this.destroySlider();
		} else {
			this.initSlider();
		}
	},
	
	handleViewportChange: function(height) {
		
	}
	
});

/**
 * HomeSlider:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.home-slider' classes and initialize lpch.HomeSlider*/
 
$(window).bind('initializeComponents', function() {
	$('.home-slider').each(function(index) {
		new lpch.HomeSlider({
	        el: this
	    });
	});
});/**
 * HomeSliderIndicators:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for HomeSliderIndicators components
 */
lpch.HomeSliderIndicators = lpch.BaseView.extend({
	
	topArr: [],
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		var offset = (orientation == "desktop") ? 75 : 110;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		$('body').scrollspy({target: '.home-slider-indicators'});
		
		if (!Modernizr.touch) {
			this.$el.find("li a").addClass("no-touch");
		}
		
		$(window).bind('scroll', function() {
			if ($(this).scrollTop() < $('.home-slider').first().offset().top) {
				_this.$el.find("li").removeClass("active");
				_this.$el.find("li").first().addClass("active");
			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(height) {}
	
});

/**
 * HomeSliderIndicators:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.home-slider' classes and initialize lpch.HomeSliderIndicators*/
 
$(window).bind('initializeComponents', function() {
	$('.home-slider-indicators').each(function(index) {
		new lpch.HomeSliderIndicators({
	        el: this
	    });
	});
});/**
 * ImageText:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.ImageText = lpch.BaseView.extend({
	maxHeight: null,
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		_this.changeHeight();
		
		this.$el.find('a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text() || $(this).find('img').first().attr('alt'));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	changeHeight: function(){
		var orientation = module.view.getCurrentOrientation();		
		var objWrapper = $('.image-text-extra-component');
		var imageTextContent= $('.image-text-second');
		var objHeight = imageTextContent.outerHeight();
		var _this = this;
		// console.log(objHeight);
		this.maxHeight = 0;
		objWrapper.each(function(){
			var contentHeight = $('.image-text-second', this).outerHeight();
			if(_this.maxHeight < contentHeight) {
				_this.maxHeight = contentHeight;
			}
		});

		if(orientation != 'smartphone'){
			objWrapper.css({'min-height': this.maxHeight});	
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');

	},
	handleViewportChange: function(width, height) {
		this.changeHeight();		
	}
	
});

/**
 * ImageText:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.ImageText
 */
$(window).bind('initializeComponents', function() {
	$('.image-text-extra-component').each(function(index) {
		new lpch.ImageText({
	        el: this
	    });
	});
});/**
 * LightSidebar:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for the main site navigation
 */
lpch.LightSidebar = lpch.BaseView.extend({
	$searchInput: null,
	$cancelButton: null,
	$clearTextButton: null,
	$resultsContainer: null,
	
	isIE8: false,
	scrollResultList: null,
	searchResultsListView: null,
	
	SHOW: 'show',
	HAS_RESULT: 'has-result',
	IS_LOADING: 'is-loading',
	//URL: "/web-resources/default/data/search-query.json?search-term=",
	URL: "/en/search/widget.page?search-term=",
	
	initialize: function(options) {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		
		this.isIE8 = $('html').hasClass('ie8');
		this.$clearTextButton = this.$('.icon.clear');
		this.$cancelButton = this.$('.button-cancel');
		this.$searchInput = this.$('#lightSideBarSearch');
		this.$resultsContainer = this.$('.light-sidebar-results');

		this.bind("show", this.setupIscroll);
		this.$searchInput.bind('keyup', _this, _this.loadResults);
		this.$cancelButton.bind('click', _this, _this.hide);
		this.$clearTextButton.bind('click', _this, _this.clearText);
		options.originalSearchTextBox.bind('focus', _this, _this.show);
		this.searchResultsListView = new lpch.LightSidebarResultsListView({
			el: this.$('.results-list')
		});
		this.searchResultsListView.bind(_this.HAS_RESULT, _this.hasResults, _this);
		this.searchResultsListView.bind('need-refresh-iscroll', _this.refreshIscroll, _this);

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	setupIscroll: function() {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		if (orientation != 'desktop' && this.scrollResultList == null) {
			this.$resultsContainer.height(this.getResultsContainerHeight());
			if (!_this.isIE8)
				this.scrollResultList = new iScroll('light_sidebar_results');
			else
				this.scrollResultList = 0; // flag for ie8
		}
	},
	refreshIscroll: function() {

		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		if (orientation != 'desktop' && _this.scrollResultList != null) {
			//alert(this.getResultsContainerHeight());
			_this.$resultsContainer.height(_this.getResultsContainerHeight());
			if (!_this.isIE8)
				_this.scrollResultList.refresh();
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = module.view.getCurrentOrientation();
		var _this = this;
		if (orientation == 'desktop') {
			if (_this.scrollResultList != null) {
				_this.scrollResultList.destroy();
				_this.scrollResultList = null;
			}
			_this.$resultsContainer.removeAttr('style');
			_this.hide();
		}
	},
	handleViewportChange: function(width, height) {
		this.refreshIscroll();
	},
	show: function(e) {
		var _view = null;
		if (e) {
			e.stopPropagation();
			_view = e.data;
		} else _view = this;

		_view.$el.addClass(_view.SHOW);
		_view.$searchInput.focus();
		_view.trigger("show");

		$(document).bind('click touchstart', _view, _view.hide);
		_view.$el.on('click touchstart', '*', function(e) {
			e.stopPropagation();
		});


		//need to fix bug on Firefox 21
		_view.options.originalSearchTextBox.on('click', function(e) {
			e.stopPropagation();
		});
	},
	hide: function(e) {
		var _view = null;

		if (e) {
			_view = e.data;
			e.preventDefault();
		} else _view = this;

		_view.$el.removeClass(_view.SHOW);
		_view.clearText();
		_view.$resultsContainer.removeClass(_view.IS_LOADING);
		//need to unbind event to fix problem on iPad
		$(document).unbind('click touchstart', _view.hide);
	},
	clearText: function(e) {
		var _view = null;
		var orientation = module.view.getCurrentOrientation();

		if (e) _view = e.data;
		else _view = this;

		_view.$searchInput.val('');
		_view.$resultsContainer.removeClass(_view.HAS_RESULT);
		_view.searchResultsListView.clearResults();
		_view.refreshIscroll();
	},
	loadResults: function(e) {
		var _view = e.data;
		var keyword = $(this).val();

		if (keyword.length > 3) {
			_view.$resultsContainer.addClass(_view.IS_LOADING);

			_view.load(_view.URL + $(this).val(), _view.renderList);
		} else {
			_view.$resultsContainer.removeClass(_view.HAS_RESULT);
			_view.searchResultsListView.clearResults();
			_view.refreshIscroll();
		}
	},
	getResultsContainerHeight: function() {
		var orientation = module.view.getCurrentOrientation();
		var resultsHeight = 0;
		if (orientation == 'tablet') {
			resultsHeight = 258;
		} else {
			var offsetTop = this.$resultsContainer.offset().top;
			resultsHeight = module.view.getViewportHeight() - offsetTop;
		}

		return resultsHeight;
	},
	load: function(url, successCallBack) {
		var _this = this;
		$.getJSON(url, function(data) {
			successCallBack(data.response.docs, _this);
		});
	},
	renderList: function(data, that) {
		var _view = that;
		if (data.length > 0) {
			_view.searchResultsListView.dataResults = data;
			_view.searchResultsListView.render();
		}
		_view.$resultsContainer.removeClass(_view.IS_LOADING);
	},
	hasResults: function() {
		this.$resultsContainer.addClass(this.HAS_RESULT);
	}
});
lpch.LightSidebarResultsListView = lpch.BaseView.extend({
	itemTemplateName: 'lightSidebarResultItem',
	$viewMoreItem: null,
	titleCharsLimit: 28,
	HAS_RESULT: 'has-result',

	events: {
		'click .view-more': 'viewMoreItem'
	},
	initialize: function(options) {
		var _this = this;
		_this.$viewMoreItem = _this.$('.view-more-item');
		_this.itempTemplate = _.template(module.view.model.templates.get(_this.itemTemplateName).get('html'));
	},
	render: function() {
		var _this = this;
		if (_this.dataResults.length == 0 || this.dataResults == null) return this;


		_this.clearResults();

		var i = 1;
		_.each(this.dataResults, function(obj) {
			obj.hiddenTabletClass = i > 4 ? 'hide-default-tablet' : '';
			obj = _this.truncateText(obj);
			i++;
			_this.$viewMoreItem.before(_this.itempTemplate(obj));
		});
		if (_this.dataResults.length > 0) {
			_this.trigger(_this.HAS_RESULT);
		}
		if (_this.$('.hide-default-tablet').length > 0)
			_this.$viewMoreItem.removeAttr('style');
		this.trigger('need-refresh-iscroll');

		return this;
	},
	clearResults: function() {
		this.$('.result-item').remove();
	},
	viewMoreItem: function(e) {
		e.preventDefault();

		this.$('.hide-default-tablet')
			.slice(0, 3)
			.removeClass('hide-default-tablet');

		if (this.$('.hide-default-tablet').length <= 0) this.$viewMoreItem.hide();
		this.trigger('need-refresh-iscroll');
	},
	truncateText: function(obj) {
		if (obj.title)
			obj.title[0] = truncateTextByLimitCharacter(obj.title[0], this.titleCharsLimit);
		else
			obj.name = truncateTextByLimitCharacter(obj.name, this.titleCharsLimit);
		return obj;
	}
});
/**
 * LightSidebar
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.LightSidebar
 */
$(window).bind('initializeComponents', function() {
	if ($('#light-sidebar').length == 0 || $('.search-nav').length == 0) return;
	new lpch.LightSidebar({
		el: '#light-sidebar',
		originalSearchTextBox: $('.search-nav')
	});
});/**
 * 'LocationDetail':	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for LocationDetail components
 */
lpch.LocationDetail = lpch.BaseView.extend({
	mapCanvas: null,
	latitude: 37.436357,
	longtitude: -122.175048,
	imageMaker: '/web-resources/default/img/u12-icon-map-maker.png',
	
	initialize: function() {
		var _this = this;
		
	
		_this.mapCanvas = document.getElementById('map-canvas');
		_this.initMap();

		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		
	},
	handleViewportChange: function(width, height) {

	},
	initMap: function() {
		var _this = this;
		var map = null;

		var mapCenter = new google.maps.LatLng(_this.latitude, _this.longtitude);

		map = new google.maps.Map(_this.mapCanvas, {
			zoom : 12,
			center : mapCenter,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});

		var marker = new google.maps.Marker({
			map : map,
			position : new google.maps.LatLng(_this.latitude, _this.longtitude),
			draggable : false,
			icon : _this.imageMaker
		});
	}
});
/**
 * LocationDetail:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.LocationDetail
 */

$(window).bind('initializeComponents', function() {

//google.maps.event.addDomListener(window, 'load', function() {
	$('.location-detail').each(function() {
		//setTimeout(function() {
			new lpch.LocationDetail({el: this});
		//}, 1300);
	});
});

/**
 * Locations:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Locations components
 */
lpch.Locations = lpch.BaseView.extend({
	maxHeight: 0,
	isDropDown: false,

	$tab: null,
	$tabContent: null,
	$tabItems: null,
	$tabFirstITem: null,
	$tabDefaultItem: null,
	$tabItemLinks: null,
	$locationsItem: null,
	$locationsList: null,
	$contentListItems: null,
	$locationsItemLink: null,
	$dropDownSelectedContent: null,

	ACTIVE: 'active',
	SLIDE_SPEED: 200,
	EXPANDED: 'expanded',
	DEFAULT_ITEM: 'default-item',

	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		_this.$tabContent = _this.$('.tab-content');
		_this.$tab = _this.$('#search_result_tab');
		_this.$tabItems = _this.$tab.find('li');
		_this.$tabFirstITem = _this.$tab.find('.first-child');
		_this.$tabDefaultItem = _this.$tab.find('.default-item');
		_this.$tabItemLinks = _this.$tabItems.find('a');
		_this.$contentListItems = _this.$('.content-list li');
		_this.$locationsList = _this.$el.find('.locations-list');

		_this.$locationsItemLink = _this.$locationsList.find('h4');
		_this.$dropDownSelectedContent = _this.$('.dropdown-nav p');
		_this.$locationsListItem = _this.$locationsList.find('.location-list-item');
		

		_this.$tabItemLinks.bind('click', _this, _this.showTab);
		_this.$('.dropdown-nav').bind('click', _this, _this.showDropDownNav);
		_this.$locationsItemLink.bind('click', _this, _this.expandCollapseHandler);

		_this.showAutoTab();
		_this.changeHeight();

		if(orientation == 'smartphone') _this.showDefaultTabItem();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	changeHeight: function() {
		var orientation = module.view.getCurrentOrientation(),
			_this = this;
		
		_this.$contentListItems.removeAttr('style');
		_this.maxHeight = 0;
		
		_this.$contentListItems.each(function() {
			var contentHeight = $(this).height();
			if (_this.maxHeight < contentHeight) {
				_this.maxHeight = contentHeight;
			}
		});

		if (orientation != 'smartphone') {
			_this.$contentListItems.css({'height': _this.maxHeight});
		}
		else {
			_this.$contentListItems.removeAttr('style');
		}
	},
	showAutoTab: function() {
		var orientation = module.view.getCurrentOrientation(),
			_this = this;
		if (orientation != 'smartphone') {
			var lenTab = _this.$tabItems.not('.' + _this.DEFAULT_ITEM).length,
				singleTabSize = 100 / lenTab;

			_this.$tabItems.not('.' + _this.DEFAULT_ITEM).css('width', singleTabSize + '%');
		}
	},
	showTab: function(e) {
		var _self = $(this),
			_view = e.data,
			_parent = _self.parent(),
			html = _self.find('.inner').html(),
			isDefaultITem = _parent.hasClass(_view.DEFAULT_ITEM),
			orientation = module.view.getCurrentOrientation();

		e.preventDefault();
		_view.$dropDownSelectedContent.html(html);
		
		if(isDefaultITem) {
			_view.showDefaultTabItem();
		} else _self.tab('show');
		
		_view.changeHeight();

		if (orientation == 'smartphone') {
			_view.$tab.hide();
		}
	},
	showDefaultTabItem: function() {
		var _view = this,
			html = _view.$tabDefaultItem.find('.inner').html();

		_view.$dropDownSelectedContent.html(html);	
		_view.$tab.find('.' + _view.ACTIVE).removeClass(_view.ACTIVE);
		_view.$tabContent.find('.' + _view.ACTIVE).removeClass(_view.ACTIVE);
		_view.$tabDefaultItem.addClass(_view.ACTIVE);		
	},
	closeDropDownNav: function(e) {
		var _view = e.data,
			orientation = module.view.getCurrentOrientation();

		if (orientation == 'smartphone' && _view.isDropDown) {
			_view.$tab.hide();
			_view.$tab.removeAttr('style');
		}
	},
	showDropDownNav: function(e) {
		var _view = e.data;

		_view.$tab.slideDown(_view.SLIDE_SPEED, function() {
			_view.isDropDown = true;
			$(document).on('click', _view, _view.closeDropDownNav);
			$('#search_result_tab, .dropdown-nav').on('click', function(e) {
				e.stopPropagation();
			})
		});
	},
	expandCollapseHandler: function(e) {
		var orientation = module.view.getCurrentOrientation(),
			_view = e.data;
		if (orientation == 'smartphone') {
			var _parent = $(this).parent();
			_parent.toggleClass(_view.EXPANDED);
		}
		return false;
	},
	handleLayoutChange: function(layout) {
		var _this = this,
			orientation = layout.get('orientation');

		if (orientation != 'smartphone') {
			_this.$el.find('.' + _this.EXPANDED).removeClass(_this.EXPANDED);
			_this.showAutoTab();
			_this.$tab.removeAttr('style');
			if(_this.$tabDefaultItem.hasClass(_this.ACTIVE)) {
				_this.$tabFirstITem.find('a').tab('show');
			}
		} else {
			_this.isDropDown = false;
			_this.showDefaultTabItem();
			_this.$tabItems.removeAttr('style');
		}
	},
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		this.changeHeight();
	}

});
/**
 * Locations:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Locations
 */
$(window).bind('initializeComponents', function() {

	$('.locations-component').each(function() {
		new lpch.Locations({
			el: this
		});
	});

});/**
 * MarketingSplash:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for MarketingSplash components
 */
lpch.MarketingSplash = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// if the element does not have the 'video-left-text-right',
		// associated with it then add class 'main' for JS parallax and bg img manipulation
		// that in smartphone view, the .main element does not hide its img element
		
		// check to see if this component contains a video
		if (this.$el.find('.mktgsplash-video').length == 0) {
			// if no video make sure the video class is not applied
			this.$el.removeClass('video-left-text-right');
		} else {
			// else make sure the video class is applied
			this.$el.addClass('video-left-text-right');
		}
		
		// if this element does not contain video, apply the 'main' class
		if ( !this.$el.hasClass('video-left-text-right') ) {
			this.$el.addClass('main');
		}
		
		// track events from anchor clicks
		this.$el.find("a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		this.$el.bind('inview', function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
			} else {
				$(this).removeClass("inview");
			}
		});
		
		$(window).bind("scroll", function(event) {
			_this.move(module.view.getViewportHeight());
		});
		
		this.setHeight(module.view.getViewportWidth());
		this.move(module.view.getViewportHeight());
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == "tablet") {
			this.$el.children('img').css({'top': 0});
		} else {
			this.$el.children('img').css({'top': 0});
		}
	},
	
	handleViewportChange: function(width, height) {
		this.setHeight(width);
		this.move(height);
	},
	
	setHeight: function(width) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation != "desktop") {
			
			if (orientation == "smartphone") {
				if (!this.$el.hasClass("main")) {
					this.$el.css("height", "auto");
					return;
				}
			}
			
			var w = (400 * width) / 980;
			this.$el.css("height", w);
		}
		
		
	},
	
	repositionBackground: function(wh, pos, adjuster, inertia) {
		var y = (-((wh + pos) - adjuster) * inertia);
		if (y > 0) y = 0;
		return y  + "px";
	},
	
	move: function(height) {
		var orientation = module.view.getCurrentOrientation();
		if (!Modernizr.touch && orientation == 'desktop') {
			if (this.$el.hasClass("inview")) {
				var top = $(window).scrollTop();
				if (this.$el.hasClass("main")) {
					this.$el.children('img').css({'top': this.repositionBackground(height, top, 980, 0.3)});
				} else {
					this.$el.children('img').css({'top': this.repositionBackground(height, top, 980, 0.12)});
				}
			}
		}
	}
	 
});

/**
 * MarketingSplash:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.marketing-splash' classes and initialize lpch.MarketingSplash*/
 
$(window).bind('initializeComponents', function() {
	$('.mktgsplash-component').each(function(index) {
		new lpch.MarketingSplash({
	        el: this
	    });
	});
});/**
 * MktgFFtxt:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for MktgFFtxt components
 */
lpch.MktgFFtxt = lpch.BaseView.extend({ 
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// track events from anchor clicks
		this.$el.find('a').not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MktgFFtxt:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.MktgFFtxt' classes and initialize lpch.MktgFFtxt
 */
$(window).bind('initializeComponents', function() {
	$('.mktgfftxt-component').each(function(index) {
		new lpch.MktgFFtxt({
	        el: this
	    });
	});
	
});/**
 * Mktgimgtxt:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Mktgimgtxt components
 */
lpch.Mktgimgtxt = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping		
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		var orientation = module.view.getCurrentOrientation();
		if( orientation != 'smartphone') {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').prependTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').appendTo('.img-top-text-bottom');
		}
		
		// track events from anchor clicks
		this.$el.find("a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});

		// invoke the super method

		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').appendTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').prependTo('.img-top-text-bottom');
		} 
	},
	
	handleViewportChange: function(width, height) { 

	}
	
});

/**
 * Mktgimgtxt:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Mktgimgtxt' classes and initialize lpch.Mktgimgtxt
 */
$(window).bind('initializeComponents', function() {
	$('.mktgimgtxt-component').each(function(index) {
		new lpch.Mktgimgtxt({
	        el: this
	    });
	});
});/**
 * MobileContentOverlay:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the moblie content overlay for mobile nav flyout
 */
lpch.MobileContentOverlay = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.click(function(event) {
			$('.ls-canvas').toggleClass('active');
//			$('#navigation .nav').toggleClass('active');
			$('body').toggleClass('no-scroll');
			$('#mobile-content-overlay').toggle();
			
			// trigger an event that the nav is being toggled
			module.trigger('toggleNav');

			//if (module.view.model.get('currentLayout').get('orientation') != 'desktop') {
//			if(!$('.find-doctor').hasClass('find-doctor--device')){
//				$('.find-doctor').addClass('find-doctor--device');
//				$('body, html').addClass('no-scroll');
//			}
//			else {
//				$('.find-doctor').removeClass("find-doctor--device");
//				$('body, html').removeClass('no-scroll');
//			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MobileContentOverlay:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.MobileContentOverlay
 */
$(window).bind('initializeComponents', function() {
	new lpch.MobileContentOverlay({ el: '#mobile-content-overlay' });
});/**
 * MobileHomeSearch:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the moblie content overlay for mobile nav flyout
 */
lpch.MobileHomeSearch = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.find("a").click(function(event) {
			event.stopPropagation();
			_this.$el.find("form").submit();
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MobileHomeSearch:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.MobileHomeSearch
 */
$(window).bind('initializeComponents', function() {
	$('.mobile-home-search').each(function(index) {
		new lpch.MobileHomeSearch({
	        el: this
	    });
	});
});/**
 * Navigation:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for the main site navigation
 */
lpch.Navigation = lpch.BaseView.extend({
	
	// Technically, this is the Navigation component, not the Header
	// but for event tracking, the tagging workbook considers this Header
	NAME: "Header",
	scrollNavigation: null,

	initialize: function() {
		// Self-reference for scoping//
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		
		this.initRecentlyVisited();
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		if (Modernizr.touch) {
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn')
			.bind('click', function(e) {
				e.preventDefault();
				// track events on nav-items
				module.view.trackEvent($(this).find("> span").text(), null, _this.NAME);
			})
			.bind('touchend',function(e) {
				e.preventDefault();
				var itemParent = $(this).parent();
				if(!itemParent.hasClass('open')) {
					if (module.view.getCurrentOrientation() == 'desktop') {
						itemParent.addClass('open').removeClass('unactive').siblings().removeClass('open');
					} else {
						itemParent.addClass('open').removeClass('unactive');
					}
				} else {
					itemParent.removeClass('open').addClass('unactive');
				}
				if(_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
					setTimeout(function () {
						_this.scrollNavigation.refresh();
					}, 100);
				}
				return false;
			});
		} else {
			// nav item hover states
			this.$el.find('.nav-item').not('.nav-item--recently').hover(function() {
				if(module.view.getCurrentOrientation() == 'desktop' && !Modernizr.touch) {
					$(this).addClass('open').siblings().removeClass('open');
				}
			},
			function () {
				if (module.view.getCurrentOrientation() == 'desktop' && !Modernizr.touch) {
					$(this).removeClass('open');
				}
			});
			
			// on focus of a nav item, trigger the parent's mouseenter to show the drop down menu
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn').focus(function() {
				$(this).parent().trigger('mouseenter');
			});
			
			// sub nav item hover states
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item').hover(
					function(event) {
						// show the relevant dropdown thumbnail
						var $dropdown = $(this).parent().parent();
						$dropdown.find(".dropdown-thumbnail ul li").hide();
						$($dropdown.find(".dropdown-thumbnail ul li")[$(this).index()+1]).show();
					},
					function(event) {
						// show the default dropdown thumbnail
						var $dropdown = $(this).parent().parent();
						$dropdown.find(".dropdown-thumbnail ul li").hide();
						$($dropdown.find(".dropdown-thumbnail ul li")[0]).show();
					}
			);
			// on focus of a sub nav item, trigger the parent's hover state
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item a').focus(function() {
				$(this).parent().addClass("hover");
			});
			// on blur of a sub nav item, remove the parent's hover state
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item a').blur(function() {
				$(this).parent().removeClass("hover");
			});
			// on the last sub menu item of the last nav item, trigger a mouseleave to hide the dropdown
			this.$el.find('.nav-item').not('.nav-item--recently').last().find('.dropdown-nav-item').last().find('a').blur(function() {
				$(this).parent().parent().parent().parent().parent().trigger('mouseleave');
			});
			
			
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn').bind('click',function(e) {
				if (module.view.getCurrentOrientation() != 'desktop') {
					e.preventDefault();
				}
				// track events on nav-items
				module.view.trackEvent($(this).find("> span").text(), null, _this.NAME);
				var itemParent = $(this).parent();
				if(!itemParent.hasClass('open')) {
					itemParent.addClass('open');
				} else {
					itemParent.removeClass('open');
				}
				// refresh the iscroll nav if necessary
				if (_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
					setTimeout(function () {
						_this.scrollNavigation.refresh();
					}, 100);
				}
			});
			
			this.$el.find('.nav-item').removeClass('current');
			// highlight the appropriate nav item
			var pathname = window.location.pathname;
			if (pathname.search("/plan") >= 0 ||
				pathname.search("/locations") >= 0) {
					this.$el.find('.dropdown--plan').parent().addClass('current');
			} else if (pathname.search("/service") >= 0) {
					this.$el.find('.dropdown--services').parent().addClass('current');
			} else if (pathname.search("/learn") >= 0 ||
					pathname.search("/about") >= 0 ||
					pathname.search("/calendar") >= 0) {
					this.$el.find('.dropdown--learn').parent().addClass('current');
			} else if (pathname.search("/participate") >= 0) {
					this.$el.find('.dropdown--participate').parent().addClass('current');
			}
		}
		
		// track events on dropdown sub nav items
		this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item').bind('click',function(e) {
			module.view.trackEvent($(this).text(), $(this).parent().parent().parent().parent().find("a > span").text(), _this.NAME);
		});
		
		if (this.$el.length > 0 && this.scrollNavigation == null && orientation != 'desktop') {
			this.$el.height(this.getNavHeight());
			if(!$('html').hasClass('ie8')) {
				_this.setupIscroll();
			}
		}
		
		if (orientation != 'desktop'){
			this.$el.addClass('overflow-y-auto');
		}

		this.$el.find('.dropdown').bind('click', function(e){
			if(module.view.getCurrentOrientation() == 'desktop') {
				e.stopPropagation();
			}
		});

		$(document).bind('click', function(){
			if (module.view.getCurrentOrientation() == 'desktop') {
				var menuItem = _this.$el.find('.nav-item');		    	
				menuItem.removeClass('open');
			}
		});
		
		module.bind('toggleNav', function(event) {
			_this.$el.height(_this.getNavHeight());
		});
		
		this.setTabIndex();
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	setupIscroll: function(){
		this.scrollNavigation = new iScroll('navigation',{
	        onBeforeScrollStart: function (e) {
	            var target = e.target;
	            while (target.nodeType != 1) target = target.parentNode;

	            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
	                e.preventDefault();
	        }
	    });	
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == 'desktop') {
			this.$el.find('.nav-item').removeClass("open");
			if(this.scrollNavigation != null && !$('html').hasClass('ie8')) {
				this.scrollNavigation.destroy();
				this.scrollNavigation = null;
				this.$el.removeAttr('style');
			}
			this.$el.removeClass('overflow-y-auto');
		} else {
			if($('html').hasClass('android')){
				this.$el.css('z-index','1');
				setTimeout(function(){
					this.$el.css('z-index','1399');
				},100);
			}
			// this.$el.find('.current').addClass("open");
			if(this.$el.length > 0 && this.scrollNavigation == null) {
				this.$el.height(this.getNavHeight());
				if(!$('html').hasClass('ie8')){
					this.setupIscroll();
				}
			}
			this.$el.addClass('overflow-y-auto');
		}
	},
	
	initRecentlyVisited: function() {
		var _this = this;
		
		// use jstorage to get the array from LocalStorage
		var recentlyVisited = $.jStorage.get('recentlyVisited');
		if (!recentlyVisited) recentlyVisited = [];
		var thisPage = { title:document.title, href:document.location.href };
		
		var index = recentlyVisited.length;
		while (index--) {
			var pageObj = recentlyVisited[index];
			if (pageObj.href == thisPage.href) {
				recentlyVisited.splice(index, 1);
			}
		}
		
		recentlyVisited.unshift(thisPage);
		// if the history is more than 5, cut it off
		if (recentlyVisited.length > 5) {
			recentlyVisited.splice(5);
		}
		
		// use jstorage to set the array in LocalStorage
		$.jStorage.set('recentlyVisited', recentlyVisited);
		
		// populate the list
		$.each(recentlyVisited, function(i, obj) {
			var html = '<li class="dropdown-nav-item"><a href="'+obj.href+'">'+obj.title+'</a></li>';
			$(html).appendTo(_this.$el.find('.nav-item--recently .dropdown-nav'));
		});
	},
	
	handleViewportChange: function(width, height) {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		if(orientation != "desktop") {
			this.$el.height(this.getNavHeight());
			if(_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
				_this.scrollNavigation.refresh();
			}
		} else {
			this.$el.removeAttr('style');
		}

	},

	getNavHeight: function(){
		var navTop = this.$el.length ? this.$el.offset().top : 0,
			winHeight = module.view.getViewportHeight();
			currentNavHeight = winHeight - navTop;
			return currentNavHeight;
	},
	
	/**
	 * @method	setTabIndex		Method that sets the tab index order for Navigation AND Header
	 */
	setTabIndex: function() {
		var i=1;
		// set tab index for the logo
		$("#header .logo a").each(function() {
			  $(this).attr("tabindex", i++);
		});
		
		// find all top nav items except 'recently clicked' and 'mobile search'
		this.$el.find('.nav-item').not('.nav-item--recently, .nav-item--search').each(function() {
			
			// find the dropdown-btn
			$(this).find('.dropdown-btn').each(function() {
				$(this).attr("tabindex", i++);
			});
			  
			// find the sub nav item links
			$(this).find('.dropdown-nav-item a').each(function() {
				$(this).attr("tabindex", i++);
			});
		});
		
		this.$el.find(".utinity-primary a").each(function() {
			$(this).attr("tabindex", i++);
		});
		
		$("#header .find-btn").each(function() {
			  $(this).attr("tabindex", i++);
		});
	}
	
});

/**
 * Header:		Navigation
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.Navigation
 */
$(window).bind('initializeComponents', function() {
	new lpch.Navigation({ el: '#navigation' });
});/**
 * Header:        Implementation
 * Description:    An extension of the lpch.BaseView object
 *                Patient Story javascript
 */
lpch.PatientStory = lpch.BaseView.extend({

    _this: null,
    readSlider: null,
    helpedSlider: null,
    meetSlider: null,
    masterSlider: null,
    breakpoint: null,
    timeoutDuration: 700,

    initialize: function () {
        // Self-reference for scoping
        _this = this;

        /**
         * Initialize the bxslider's in the panels
         */
        this.setupBxSlider();

        /**
         * Trigger colorbox modal for video
         
        this.$el.find('.youtube').colorbox({
            iframe: true,
            innerWidth: 620,
            innerHeight: 404,
            fixed: true,
            onComplete: function () {
                var orientation = module.view.getCurrentOrientation();
                if (orientation == 'smartphone') {
                    $.colorbox.resize({
                        innerWidth: ($(document).width() * .9),
                        innerHeight: (($(document).width() * .625) * .9)
                    });
                }
            }
        });
        */

        this.$el.find('.breadcrumb').not('.breadcrumb.home').click(function () {
            _this.masterSlider.goToSlide(0);
        });

        /**
         * Trigger Accordion in smartphone view
         * adjusts height of (opens) next div when user clicks an accordion (h3) toggle
         */
        $('.panel h3').click(function () {
            if (_this.breakpoint === "smartphone") {
                // toggle the panel
                var $innerPanel = $(this).parent().find('.inner-panel');
                if ($innerPanel.height() === 0){
                    $innerPanel.css("height", "");
                } else {
                    $innerPanel.css('height', '0px');
                }
                // toggle the arrow open and closed
                $(this).find('.arrow').toggleClass('closed open');
            }
        });

        // invoke the super method
        lpch.BaseView.prototype.initialize.call(this);
    },

    /**
     * Click binding for the tabs in tablet and desktop mode
     */
    initTabs: function () {
        var $tab = $('.tab');
        $tab.unbind('click');
        $tab.click(function () {
            $tab.removeClass('active');
            $(this).toggleClass('active');
            console.log(jQuery.inArray(this, $tab) + 1)
            _this.masterSlider.goToSlide(jQuery.inArray(this, $tab) + 1);
        });
    },

    /**
     * Hides the mobile view panels and resets the arrows to the closed position
     */
    hidePanels: function () {
        $('.read-his-story .inner-panel').css("height", "0px");
        $('.meet-team .inner-panel').css("height", "0px");
        $('.how-we-helped .inner-panel').css("height", "0px");
        $('.watch-video .inner-panel').css("height", "0px");
        $('h3 .arrow').removeClass('closed open').addClass('closed'); // make sure arrows are closed when going back to the mobile view
    },

    /**
     * Fire off handleLayoutChange on page load as well as on page layout change
     */
    setupBxSlider: function () {
        _this.handleLayoutChange(module.view.getCurrentLayout());
    },

    /**
     * This callback fires whenever the layout changes
     * @param layout - a layout object
     */
    handleLayoutChange: function (layout) {
        // hide the panels on smartphone view when switching to it from another view.
        if (_this.breakpoint !== layout.attributes.orientation) {
            if(layout.attributes.orientation === "smartphone") {
                _this.hidePanels();
            }
        }

        _this.breakpoint = layout.attributes.orientation; // store our initial breakpoint
        $('.inner-panel').css("height", ""); // if user goes from mobile to another view, make sure the sliders are displayed so they render properly
        $('.tab').removeClass('active'); // Resetting tabs to inactive states on change orientation.
        $('.sharing.hidden-phone').removeClass('white'); // make sure icons are no longer white

        if (layout.attributes.orientation === 'desktop') {
            _this.setupDesktopView();
        } else if (layout.attributes.orientation === 'tablet') {
            _this.setupTabletView();
        } else if (layout.attributes.orientation === 'smartphone') {
            _this.setupSmartphoneView();
        }
    },

    /**
     * Builds / reloads the desktop view
     */
    setupDesktopView: function () {
        var desktopImgSliderOptions = {
            minSlides: 2,
            maxSlides: 2,
            slideWidth: "235px",
            slideMargin: 0,
            slideSelector: ".slide",
            useCSS: true
        };

        var desktopSliderOptions = {
            minSlides: 1,
            maxSlides: 1,
            slideWidth: "540px",
            slideMargin: 0,
            slideSelector: ".slide",
            useCSS: true
        };

        var masterSliderOptions = {
            onSliderLoad: function () {
                _this.initTabs();

                /**
                 * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
                 * the master slider and children sliders from interfering with each other.
                 */
                var loadSliders = setTimeout(function () {
                    if (_this.readSlider !== null) {
                        _this.readSlider.reloadSlider(desktopSliderOptions);
                    } else {
                        _this.readSlider = $('.read-his-story .bxslider').bxSlider(desktopSliderOptions);
                    }

                    if (_this.meetSlider !== null) {
                        _this.meetSlider.reloadSlider(desktopImgSliderOptions);
                    } else {
                        _this.meetSlider = $('.meet-team .bxslider').bxSlider(desktopImgSliderOptions);
                    }

                    if (_this.helpedSlider !== null) {
                        _this.helpedSlider.reloadSlider(desktopImgSliderOptions);
                    } else {
                        _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(desktopImgSliderOptions);
                    }
                }, _this.timeoutDuration);
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                // handle the tab active state
                $('.tab').removeClass('active');

                if (newIndex !== 0) {
                    $('.tab:eq(' + (newIndex - 1) + ')').toggleClass('active');
                }

                // changing colors of sharing icons
                if (newIndex === 2 || newIndex === 3) {
                    $('.sharing.hidden-phone').addClass('white');
                } else {
                    $('.sharing.hidden-phone').removeClass('white');
                }
            },
            pager: false,
            controls: false,
            touchEnabled: false,
            infiniteLoop: false
        };

        if (_this.masterSlider !== null) {
            _this.masterSlider.reloadSlider(masterSliderOptions);
        } else {
            _this.masterSlider = $('.main.bxslider').bxSlider(masterSliderOptions);
        }
    },

    /**
     * Builds / reloads the tablet view
     */
    setupTabletView: function () {
        var tabletImgSliderOptions = {
            minSlides: 3,
            maxSlides: 3,
            slideWidth: "360px",
            slideMargin: 0,
            slideSelector: ".slide",
            adaptiveHeight: false,
            useCSS: true
        };

        var tabletSliderOptions = {
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 0,
            slideSelector: ".slide",
            adaptiveHeight: false,
            useCSS: true
        };

        var masterSliderOptions = {
            onSliderLoad: function () {
                _this.initTabs();

                /**
                 * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
                 * the master slider and children sliders from interfering with each other.
                 */
                var loadSliders = setTimeout(function () {
                    if (_this.readSlider !== null) {
                        _this.readSlider.reloadSlider(tabletSliderOptions);
                    } else {
                        _this.readSlider = $('.read-his-story .bxslider').bxSlider(tabletSliderOptions);
                    }

                    if (_this.meetSlider !== null) {
                        _this.meetSlider.reloadSlider(tabletImgSliderOptions);
                    } else {
                        _this.meetSlider = $('.meet-team .bxslider').bxSlider(tabletImgSliderOptions);
                    }

                    if (_this.helpedSlider !== null) {
                        _this.helpedSlider.reloadSlider(tabletImgSliderOptions);
                    } else {
                        _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(tabletImgSliderOptions);
                    }
                }, _this.timeoutDuration);

            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                // handle the tab active state
                $('.tab').removeClass('active');
                if (newIndex !== 0) {
                    $('.tab:eq(' + (newIndex - 1) + ')').toggleClass('active');
                }

                // changing colors of sharing icons (make sure it's always white here)
                if (newIndex) {
                    $('.sharing.hidden-phone').removeClass('white');
                }
            },
            pager: false,
            controls: false,
            touchEnabled: false
        };


        if (_this.masterSlider !== null) {
            _this.masterSlider.reloadSlider(masterSliderOptions);
        } else {
            _this.masterSlider = $('.main.bxslider').bxSlider(masterSliderOptions);
        }
    },

    /**
     * Builds / reloads the smart phone view
     */
    setupSmartphoneView: function () {
        var hidePanels = false;
        if (_this.masterSlider !== null) {
            _this.masterSlider.destroySlider();
        } else {
            hidePanels = true; // hide the panels if the page is loaded in smartphone view
        }

        /**
         * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
         * the master slider and children sliders from interfering with each other.
         */
        var loadSliders = setTimeout(function () {
            // _this.masterSlider.destroySlider leaves remnant inline styles in the DOM. Removing those here.
            $('.panel').css("width", "100%");

            var options = {
                minSlides: 1,
                maxSlides: 1,
                slideSelector: ".slide",
                useCSS: true
            };

            if (_this.readSlider !== null) {
                _this.readSlider.reloadSlider(options);
            } else {
                _this.readSlider = $('.read-his-story .bxslider').bxSlider(options);
            }

            if (_this.meetSlider !== null) {
                _this.meetSlider.reloadSlider(options);
            } else {
                _this.meetSlider = $('.meet-team .bxslider').bxSlider(options);
            }

            if (_this.helpedSlider !== null) {
                _this.helpedSlider.reloadSlider(options);
            } else {
                _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(options);
            }

            var hideSliders = setTimeout(function () {
                _this.hidePanels();
            }, _this.timeoutDuration);

        }, _this.timeoutDuration);
    },

    handleViewportChange: function (width, height) {

    }

});

/**
 * Header:        Initialization
 * Description:    Listen for 'initializeComponents' triggered from Document.js
 *                Then initialize lpch.Header
 */
$(window).bind('initializeComponents', function() {
	$('.patient-story').each(function(index) {
		new lpch.PatientStory({
	        el: this
	    });
	});
});/**
 * PersistentSearch:	Implementation
 * Description:			An extension of the lpch.BaseView object
 * 						Allows for declaration of interactivity of the persistent search widget
 */
lpch.PersistentSearch = lpch.BaseView.extend({
	
	$magGlass: null,
	$searchBar: null,
	$searchInput: null,
	$searchResults: null,
	
	pSearchClosedWidth: 40,
	pSearchClosedLeft: 380,
	pSearchActiveWidth: 258,
	pSearchActiveLeft: 160,
	pSearchOpenWidth: 420,
	pSearchOpenLeft: 0,
	
	userClicked: false,
	csstransitions: false,
	
	state:		"active",
	CLOSED: 	"closed",
	OPEN: 		"open",
	ACTIVE: 	"active",
	RESULTS: 	"results",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		this.csstransitions = $("html").hasClass("csstransitions");
		
		// check to see if the device is Android's Browser app NOT Chrome
		// if Browser app, add class to header to help with flyout nav
		if ($('html').hasClass('android') && !$('html').hasClass('chrome')) this.$el.addClass('android-browser');
		
		if ($("#emergency-banner").length > 0) this.$el.find(".p-search-spacer").addClass("emergency");
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$magGlass = this.$el.find(".p-search-mag");
		this.$searchBar = this.$el.find(".p-search-bar");
		this.$searchInput = this.$el.find(".p-search-input");
		this.$searchResults = this.$el.find(".p-search-results");
		
		this.initMagGlass();
		this.initSearchInput();
		this.initWindowScroll();
	
		this.handleViewportChange(module.view.getViewportWidth(), module.view.getViewportHeight());
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);

	},
	
	initMagGlass: function() {
		var _this = this;
		this.$magGlass.click(function(e) {
			e.stopPropagation();
			_this.userClicked = true;
			if (_this.state == _this.CLOSED) {
				_this.activate();
				module.view.trackEvent('Activate', 'Button', 'Search Widget');
			} else if (_this.state == _this.OPEN) {
				module.view.trackEvent('Submit', 'Button', 'Search Widget');
				_this.$el.find(".p-search-form").submit();
			}
		}).hover(function() {
			if (_this.state == _this.CLOSED) {
				if (_this.csstransitions) {
					_this.$el.addClass("hover");
				} else {
					_this.$searchBar.animate({"opacity": 1}, "fast");
				}
			}
		}, function() {
			if (_this.state == _this.CLOSED) {
				if (_this.csstransitions) {
					_this.$el.removeClass("hover");
				} else {
					_this.$searchBar.animate({"opacity": 0.9}, "fast");
				}
			}
		});
	},
	
	initSearchInput: function() {
		var _this = this;
		this.$searchInput.keyup(function() {
			_this.open();
			var url = "/en/search/widget.page?search-term=" + $(this).val();
//			var url = "/web-resources/default/data/search-query.json";
			if ($(this).val().length > 3) {
				_this.load(url, _this.onSearchResults);
			} else {
				_this.$searchResults.empty();
			}
		}).focus(function() {
			_this.userClicked = true;
			if (Modernizr.touch) {
				$("#header, #navigation, #persistent-search").css("position", "absolute");
			}
		}).blur(function() {
			if (Modernizr.touch) {
				$("#header, #navigation, #persistent-search").css("position", "fixed");
			}
		}).click(function(event) {
			// should prevent closing
			event.stopPropagation();
		});
	},
	
	initWindowScroll: function() {
		var _this = this;
		$(window).scroll(function() {
			if (_this.$searchInput.is(":focus")) return;
			if (_this.state == _this.RESULTS) return;
			//if (_this.userClicked) return;
			_this.close();
		});
	},
	
	initDocumentClick: function() {
		var _this = this;
		$(document).click(function() {
			_this.close();
		});
	},
	
	load: function(url, onSuccess, data) {
		var _this = this;
		$.getJSON(url, function(data) {
			_this.onSearchResults(data, _this);
		});
	},
	
	onSearchResults: function(result, _this) {
		// empty the prior results
		_this.$searchResults.empty();
		// create HTML for the different categories and ul lists in each category
		var $servicesHTML = $($.trim(module.view.model.templates.get('pSearchServicesItemTemplate').get('html'))),
			$servicesList = $servicesHTML.find(".p-search-result-set-list"),
		
			$doctorsHTML = $($.trim(module.view.model.templates.get('pSearchDoctorsItemTemplate').get('html'))),
			$doctorsList = $doctorsHTML.find(".p-search-result-set-list"),
		
			$locationsHTML = $($.trim(module.view.model.templates.get('pSearchLocationsItemTemplate').get('html'))),
			$locationsList = $locationsHTML.find(".p-search-result-set-list"),
		
			$eventsHTML = $($.trim(module.view.model.templates.get('pSearchEventsItemTemplate').get('html'))),
			$eventsList = $eventsHTML.find(".p-search-result-set-list"),
		
			$pagesHTML = $($.trim(module.view.model.templates.get('pSearchPagesItemTemplate').get('html'))),
			$pagesList = $pagesHTML.find(".p-search-result-set-list"),
		
			$allHTML = $($.trim(module.view.model.templates.get('pSearchAllItemTemplate').get('html'))),
			list,
			numServices = 0,
			numCaregivers = 0,
			numLocations = 0,
			numClasses = 0,
			numPages = 0,
			docs =	result.response.docs;
		
		$.each( docs, function(i, data) {
			switch(data['content-type']) {
				case "service":
					list = $servicesList;
					numServices++;
					break;
				case "caregiver":
					list = $doctorsList;
					numCaregivers++;
					break;
				case "location":
					list = $locationsList;
					numLocations++;
					break;
				case "class":
					list = $eventsList;
					numClasses++;
					break;
				case "webcrawl":
				//default: // uncomment to capture all results not in one of the above content-types
					list = $pagesList;
					numPages++;
					break;
			}
			// if the list exists and the length is less than 3
			if (list && list.find("li").length < 3) {
				var li = '<li><a href="'+data['url']+'" title="' + (data.name || data.title) + '">' + (data.name || data.title) + '</a></li>';
				$(li).appendTo(list);
			}
		});
		if ($servicesList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($servicesList.find("li").length == 1) $servicesHTML.find(".p-search-result-set-header .icon").hide();
			$servicesHTML.find(".p-search-result-set-header .header").append("<span> (" + numServices + ")</span>");
			$servicesHTML.appendTo(_this.$searchResults);
		}
		if ($doctorsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($doctorsList.find("li").length == 1) $doctorsHTML.find(".p-search-result-set-header .icon").hide();
			$doctorsHTML.find(".p-search-result-set-header .header").append("<span> (" + numCaregivers + ")</span>");
			$doctorsHTML.appendTo(_this.$searchResults);
		}
		if ($locationsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($locationsList.find("li").length == 1) $locationsHTML.find(".p-search-result-set-header .icon").hide();
			$locationsHTML.find(".p-search-result-set-header .header").append("<span> (" + numLocations + ")</span>");
			$locationsHTML.appendTo(_this.$searchResults);
		}
		if ($eventsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($eventsList.find("li").length == 1) $eventsHTML.find(".p-search-result-set-header .icon").hide();
			$eventsHTML.find(".p-search-result-set-header .header").append("<span> (" + numClasses + ")</span>");
			$eventsHTML.appendTo(_this.$searchResults);
		}
		if ($pagesList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($pagesList.find("li").length == 1) $pagesHTML.find(".p-search-result-set-header .icon").hide();
			$pagesHTML.find(".p-search-result-set-header .header").append("<span> (" + numPages + ")</span>");
			$pagesHTML.appendTo(_this.$searchResults);
		}
		$allHTML.appendTo(_this.$searchResults);
		
		// trigger the form on click of View All Results button
		_this.$searchResults.find(".view-all-results").click(function(event) {
			event.preventDefault();
			_this.$el.find(".p-search-form").submit();
		});
		
		// track events on pSearch tabs
		_this.$el.find(".p-search-result-set-header a").click(function(event) {
			event.preventDefault();
			module.view.trackEvent($(this).attr('title'), 'Tab', 'Search Widget');
			var href = $(this).attr("href");
			window.location = href + _this.$searchInput.val();
		});
		
		// track events on pSearch results
		_this.$el.find(".p-search-result-set-list a").not('.view-all-results').click(function(event) {
			module.view.trackEvent($(this).attr('title'), $(this).parent().parent().prev().find('a').attr('title'), 'Search Widget');
		});
		_this.$el.find(".p-search-result-set-list a.view-all-results").click(function(event) {
			module.view.trackEvent($(this).attr('title'), 'View All', 'Search Widget');
		});
		
		_this.$searchResults.find(".p-search-result-set:first-child").addClass("first");
		if (_this.csstransitions) {
			_this.$el.addClass(_this.RESULTS);
		} else {
			_this.$searchResults.css("visibility", "visible").animate({
				maxHeight: "600px",
				opacity: "1"
			}, "fast");
		}
	},
	
	activate: function() {
		this.$searchInput.val("");
		if (this.csstransitions) {
			this.$el.removeClass("hover");
			this.$el.addClass(this.ACTIVE);
		} else {
			this.$searchBar.animate({
									opacity: 0.9,
									left: this.pSearchActiveLeft,
									width: this.pSearchActiveWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchActiveLeft,
									width: this.pSearchActiveWidth
							}, "fast");
			this.$searchInput.fadeIn("fast");
		}
		this.setState(this.ACTIVE);
	},
	
	open: function() {
		if (this.state == this.OPEN) return;
		if (this.csstransitions) {
			this.$el.addClass(this.OPEN);
		} else {
			this.$searchBar.animate({
									left: this.pSearchOpenLeft,
									width: this.pSearchOpenWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchOpenLeft,
									width: this.pSearchOpenWidth
							}, "fast");
			this.$searchInput.animate({
									width: "355px"
							}, "fast");
		}
		this.initDocumentClick();
		this.setState(this.OPEN);
	},
	
	close: function() {
		if (this.csstransitions) {
			this.$el.removeClass(this.ACTIVE);
			this.$el.removeClass(this.OPEN);
			this.$el.removeClass(this.RESULTS);
		} else {
			this.$searchBar.animate({
									left: this.pSearchClosedLeft,
									width: this.pSearchClosedWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchClosedLeft,
									width: this.pSearchClosedWidth,
									maxHeight: "0",
									opacity: "0"
							}, "fast");
			this.$searchInput.animate({
								width: "195px"
							}, "fast");
			this.$searchInput.fadeOut("fast");
			this.$searchResults.css({visibility: "hidden",
									maxHeight: 0});
		}
		this.$searchInput.blur();
		this.setState(this.CLOSED);
		/*setTimeout(function() {
			$(document).unbind("click");
		}, 100);*/
	},
	
	setState: function(state) {
		this.state = state;
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		// for fluid tablet, calculate the margin-left
		if (orientation == "tablet") {
			var ml = width  - this.$el.width();
			this.$el.css({marginLeft: ml});
		} else if (orientation == "desktop") {
			// for fixed desktop, remove any inline styles
			this.$el.attr("style", "");
		}
	}
});

/**
 * SearchResult:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */
$(window).bind('initializeComponents', function() {
		new lpch.PersistentSearch({
	        el: '#persistent-search'
	    });
});/**
 * Related:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Related links component
 */
lpch.Related = lpch.BaseView.extend({
	
	NAME: "Related",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Related:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.related' classes and initialize lpch.Related
 */
$(window).bind('initializeComponents', function() {
	$('.related').each(function(index) {
		new lpch.Related({
	        el: this
	    });
	});
});/**
 * Related Classes:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.RelatedClasses = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},

  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object
    
    var cat = this.$el.attr('data-rel');
    var limit = this.$el.attr('data-rel-limit');
    // set a default if parameter is not defined
    if (limit === '') limit = 4;

    // language detection, default is 'en' (English)
    var url = window.location.pathname.split("/");
    _this.lang = 'en';
    // if 'es' is present, set to Spanish
    // if 'en' or blank, do nothing
    if ( url[1] === 'es' ) _this.lang = 'es';
   
   $.ajax({
      type: "GET",
      //url: "/web-resources/default/data/certaindemo.xml",
      url: "/config-public/events/index.xml",
      dataType: "xml",
      success: function(data) {
        _this.jsonObj = _this.xmlToJson(data);
        _this.parseData(cat,limit);
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },

  parseData: function(cat,limit) {
    var _this = this;
    var html = '',
        counter = 0,
        classes = [];

    _this.$el.find('.noevents').hide();
    
    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
      // list only active/live events
      if (val.txtEvtEstName /* === 'Live' */) {
        
        // fix for indexOf in IE8
        if(!Array.indexOf){
          Array.prototype.indexOf = function(obj){
           for(var i=0; i<this.length; i++){
            if(this[i]==obj){
             return i;
            }
           }
           return -1;
          }
        }
      
        // filter by category
        if ( (val.txtLocCode['#text'] && val.txtLocCode['#text'].indexOf(cat) !== -1) || (val.txtEvtAnsField07['#text'] && val.txtEvtAnsField07['#text'].indexOf(cat) !== -1) ) {
          // filter out duplicate classes
          if (classes.indexOf(val.txtEvtAnsField01['#text']) === -1) {
            classes.push(val.txtEvtAnsField01['#text']);
            
            if (counter < limit) {
              html += '<div class="content-related-classes-wrap">';
              html += '<a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'" class="link-related-classes">';
              // check for Spanish
              if (_this.lang === 'es') {
                // if Spanish field isn't present display English
                if(typeof val.txtEvtAnsField05['#text'] !== 'undefined') {
                  html += val.txtEvtAnsField05['#text'];
                } else {
                  html += val.txtEvtName['#text'];
                }
              } else {
                html += val.txtEvtName['#text'];
              }
              html += '</a>';
              html += '<div class="content-related-classes">';
              html += '<span class="next-class">Next Class:</span> ';
              html += val.dteEvtStartDate['#text']+'<br />';
              html += val.dteEvtStartTime['#text'];
              html += ' - ';
              html += val.dteEvtEndTime['#text'];
              html += '</div>';
              html += '</div>';
            }
            counter++;
          }
        }
      }
    });
    // if no events are present, show 'no event' message
    if (counter === 0) {
      _this.$el.find('.noevents').show();
    } else {
      _this.$el.find('.classlist').html(html);
    }
  },

  xmlToJson: function(xml) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }
  
    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) === "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) === "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

});

/**
 * RelatedClasses:  Initialization
 * Description: Listen for 'initializeComponents' triggered from Document.js
 *        Then find all '.related-classes' classes and initialize lpch.RelatedClasses
 */
$(window).bind('initializeComponents', function() {
	$('.related-classes.list').each(function(index) {
		new lpch.RelatedClasses({
			el: this
		});
	});
});/**
 * location:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for location components
 */
lpch.Location = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// this.$el.find('.location-nav li a').first().addClass('active');
		// this.$el.find('.location-content-container div:first-child').addClass('open');

		this.locCnt = _this.$el.find('.location-content-container');
		this.locNav = _this.$el.find('.location-nav');
		this.locNavPad = parseInt(this.locNav.css('paddingTop')) + parseInt(this.locNav.css('paddingBottom'));				
		this.mH = 0;

		this.$el.find('.location-btn').click(function(e) {
			e.preventDefault();
			
			module.view.trackEvent($(this).find('.center-text').text());
			
			_this.locNav.css('height', 'auto');
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
			}
			_this.changeHeight();
		});
 	 
 		var orientation = module.view.getCurrentOrientation();
		
		if(orientation == 'smartphone'){
			this.$el.find('.location-nav li:even').css({'margin-left':'0px','width':'50%'});
		}
		else{
			this.$el.find('.location-nav li:even').removeAttr('style');
			this.changeHeight();
		}

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	changeHeight: function () {		
		this.mH = this.locCnt.height();
		if(module.view.getCurrentOrientation() != 'smartphone' && this.mH > this.locNav.outerHeight())			
			this.locNav.height(this.mH - this.locNavPad);		
	},
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');		
		if(orientation == 'smartphone'){ 
			this.$el.find('.location-nav li:even').css({'margin-left':'0px','width':'50%'});
		}
		else{
			this.$el.find('.location-nav li:even').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {
		this.locNav.css('height', 'auto');
		this.changeHeight();
	}
});

/**
 * location:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.location' classes and initialize lpch.location
 */
$(window).bind('initializeComponents', function() {
	$('.related-locations').each(function(index) {
		new lpch.Location({
	        el: this
	    });
	});
});/**
 * RelatedNav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the RelatedNav component
 */
lpch.RelatedNav = lpch.BaseView.extend({ 
	NAME: "Related Navigation",
	SLIDE_SPEED: 300,
	EXPANDED: 'expanded',
	HAS_CHILD: 'has-child',
	LAST_CHILD: 'last-child',

	initialize: function() {
		// Self-reference for scoping
		var _this = this,
		orientation = module.view.getCurrentOrientation();
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		_this.$treeList = _this.$el.find('.tree-list');
		_this.$listItems = _this.$treeList.find('li');
		_this.$listItemLinks = _this.$treeList.find('a');

		_this.$listItems.removeClass('has-child');

		$('ul.tree-list').children().find("ul").each( function(index) {
			$(this).parent().addClass(_this.HAS_CHILD);
			$(this).parent().find(".arrow-icon").addClass("collapsed");
			//hide all menus first
			$(this).hide();

			if( $("ul.tree-list > li").hasClass("current") ) {
				//flips the arrow down for the top level li.current
				$(this).parent().filter('.current').find(".arrow-icon").removeClass("collapsed").addClass("expanded");
				//shows the nested submenu that has its parent li marked current.
				$("ul.tree-list > li.current > ul").show();
			}

			//finds nested .current li's. walk back up the tree and fold down arrow.
			if($("ul.tree-list > li > ul > li").hasClass("current")) {
				$("ul.tree-list > li > ul > li.current").parent().parent().find(".arrow-icon").removeClass("collapsed").addClass("expanded");
				//shows the nested submenu that has one of its li children marked current
				$("ul.tree-list > li > ul > li.current").parent().show();
			}
		});

		if (_this.$treeList.is(':last-child')) {
			_this.$treeList.addClass(_this.LAST_CHILD);
		}

		this.$el.find('.topic-footer a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
	},
	handleViewportChange: function(width, height) {}

});

/**
 * RelatedNav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.related-navigation' classes and initialize lpch.RelatedNav
 */
$(window).bind('initializeComponents', function() {
	$('.related-navigation').each(function(index) {
		new lpch.RelatedNav({
	        el: this
	    });
	});
});//This js file used in service-index.html

lpch.SaleforceForm = lpch.BaseView.extend({

	NAME: "Newsletter Form",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		this.validate(this.$el);
		
		this.pageSuccess();
		
		// Submit button tracking
		this.$el.find('input[type="submit"]').click(function(event) {
			module.view.trackEvent($(this).val());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
	},	
	handleViewportChange: function(width, height) {
		
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if ($('#colorbox').hasClass('layer-success-form-template')){
			clearTimeout(this.timer);
			this.timer = setTimeout(function(){
				if(orientation == 'smartphone') {
					$.colorbox.resize({
						innerWidth:320,
						innerHeight: 380
					});
				}
				else if(orientation == 'tablet') {
					$.colorbox.resize({
						innerWidth:508,
						innerHeight: 300
					});
				}
				else{
					$.colorbox.resize({
						innerWidth:564,
						innerHeight: 273
					});			
				}
			},200);
		}
	},
	validate: function(form){
		var _this = this;
		form.validate({
			errorPlacement: function(error, element) {
				error.addClass('error-text-right');
				if (element.next().is('.add-on')) {
					error.addClass('add-on').insertBefore(element.next('.add-on'));
				} else {
					error.insertBefore(element);
				}
			},
			rules: {			
				first_name: "required",
				last_name: "required",
				email: {
					required: true,
					email: true
				},				
				confirm_email : {                    
                    email: true,
					equalTo: '#email'
                },
				phone: {
					number: true
				}
			},
			messages: {
				first_name: "* Required Field",
				last_name: "* Required Field",
				email: {
					required: "* Required Field",
					email: "* Invalid Email"
				},
				confirm_email: "* Email Addresses Do Not Match",
				phone: "* Invalid Number"				
			}
		});
	},
	templateSuccess: function(){
		return '<div class="layout-success-container"><div class="content"><h3 class="heading">Thank You!</h3><p class="description">Est ma comnienis mos ex erferum rerereped quia si reperfe rnates eatibust, excerspid quunt, quas is ipsusciuntes aut eatusamus veliquat imint alit et quidign imoluptatur aceruptatur repudantet quia nulpa plaborepudis re ame imi, es simi, quat autem que Cuptaqu aepernatquis aut am volest, temolorest, consed magnam quat eum int quatur aut que parchit laut la sitias idit omnit ent maiorro.</p></div><p class="controls"><button class="btn btn-danger" type="button">Return to page</button></p></div>';
	},
	pageSuccess: function(){		
		if (module.view.getParameterByName("success") == "true"){
			var template = this.templateSuccess();
			
			$.colorbox({
				html: template,
				innerWidth:564,
				innerHeight:273,
				onComplete: function(){
					var orientation = module.view.getCurrentOrientation();
					if(orientation == 'smartphone') {
						$.colorbox.resize({
							innerWidth:320,
							innerHeight: 400
						});
					}
					else if(orientation == 'tablet') {
						$.colorbox.resize({
							innerWidth:508,
							innerHeight: 300
						});
					}
				},
				onOpen: function(){
					$('#colorbox').addClass('layer-success-form-template');
				},
				onClosed: function(){
					$('#colorbox').removeClass('layer-success-form-template');
				}
			});
		}
	}
	
});

$(window).bind('initializeComponents', function() {	
	new lpch.SaleforceForm({
		el: '.sales-force-form'
	});
});/**
 * ScrollIndicator:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for ScrollIndicator components
 */
lpch.ScrollIndicator = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		$(window).bind("scroll", function(event) {
			var orientation = module.view.getCurrentOrientation();
			if( orientation == 'desktop') {
				var top = $(this).scrollTop();
				if (top > 350) _this.$el.fadeOut();
				else _this.$el.fadeIn();
			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		
	},
	
	handleViewportChange: function(width, height) {

	}
	 
});

/**
 * ScrollIndicator:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.ScrollIndicator' classes and initialize lpch.ScrollIndicator
 */
$(window).bind('initializeComponents', function() {
	$('.scroll-page').each(function(index) {
		new lpch.ScrollIndicator({
	        el: this
	    });
	});
}); /**
 * SearchResult:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SearchResults
 */
lpch.SearchResult = lpch.BaseView.extend({
	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
		
		//Create Tab "All" List View
		this.searchAllList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchAllItemView,
			el: "#all-list",
			templateID:"allListView",
			collection: this.collection
		});

		//Create Tab "Doctor" List View
		this.searchDoctorList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchDoctorItemView,
			el:"#doctors-list",
			templateID:"doctorsListView",
			category:"caregiver",
			filterEventName:"filter.doctor",
			collection: this.collection,
			layoutChangeCallBack: _this.handleDoctorLayoutChange
		});

		//Create Tab "Service" List View
		this.searchServiceList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchServiceItemView,
			el:"#services-list",
			templateID:"servicesListView",
			category:"service",
			collection: this.collection
		});

		//Create Tab "Location" List View
		this.searchLocationList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchLocationItemView,
			el:"#locations-list",
			templateID:"locationsListView",
			category:"location",
			collection: this.collection
		});

		//Create Tab "Class" List View
		this.searchClassList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchClassItemView,
			el:"#classes-list",
			templateID:"classesListView",
			category:"class",
			collection: this.collection
		});
		
		// if the lastSearchTab is stored in LocalStorage AND the search-term in the URL matches the term stored in LocalStorage,
		// then a user is likely backing into a search result page with the browser BACK button, remember the last search page state
		if ($.jStorage.get('lastSearchTab') && $.jStorage.get('lastSearchTerm') == module.view.getParameterByName("search-term")) {
			var href = $.jStorage.get('lastSearchTab');
			var tab = $('#search_result_tab li a[href="'+ href + '"]');
			tab.trigger("click");
		} else if (module.view.getParameterByName("tab") != "") {
			var href = "#" + module.view.getParameterByName("tab");
			var tab = $('#search_result_tab li a[href="'+ href + '"]');
			tab.trigger("click");
		} else {
			$.jStorage.set('lastSearchTab', "#all");
		}
		
		// Store the search term in LocalStorage
		$.jStorage.set('lastSearchTerm', module.view.getParameterByName("search-term"));
		
		// track events for all anchors that have a 'title' attribute
		this.$el.find('.results-header a[title], .results-body a[title]').click(function(e) {
			module.view.trackEvent($(this).attr('title'), _this.$el.find('#search_result_tab li.active .inner').clone().children().remove().end().text(), 'Search');
		});
	},
	
	handleViewportChange: function(width, height) {}
});

lpch.SearchResultTab = lpch.BaseView.extend({
	tabsText: ['all', 'services', 'classes'],
	tabActive: null,
	wordCounts:{
		desktop    : 28,
		tablet     : 20,
		smartphone : 12
	},	
	timer: null,
	stopBubbling: function(e){
		e.stopPropagation();
	},
	toggleDropDownNav: function(e) {
		e.stopPropagation();	
		$('#search_result_tab').slideToggle(200);
	},
	closeDropDownNav: function(e) {		
		if(module.view.getCurrentOrientation() == 'smartphone')
			$('#search_result_tab').slideUp(200, function(){
				$(this).removeAttr("style");
			});
	},
	truncate: function(orientation){
		this.tabActive = $('.tab-content > .active');
		var isTruncate = false;		
		for (var i = 0; i < this.tabsText.length; i++){			
			if (this.tabActive.attr('id') == this.tabsText[i]){
				isTruncate = true;
				break;
			}	
		}		
		if (!isTruncate) return;

		var _this = this;
		clearTimeout(this.timer);
		this.timer = setTimeout(function(){			
			_this.truncateTabsContent(_this.tabActive.find(".results-body"), _this.wordCounts[orientation || module.view.getCurrentOrientation()] );			
		}, 200);
	},
	registerTextTruncate: function(eles){
		this.tabsText.push(eles);
	},
	truncateTabsContent: function(list, limit) {		
		$.each(list.find("li"), function(i, jitem) {
			var desc = $(jitem).find('.desc'),
					jct  = desc.find('.content'),
					jctm = desc.find('.content-mobile'),
					ws   = words(jct.html());

			if (ws.length > limit) truncateText(jctm, ws, limit);
		});		
	},
	showTab: function(e) {		
		e.preventDefault();
		var _self = $(this);
		_self.tab('show');
		module.trigger("showTab", _self.attr("href"));
		$('.dropdown-nav p').html(_self.find('.inner').html());
		$('#search_result_tab').hide().removeAttr("style");
		lpch.SearchResultTab.prototype.truncate();
		// track the tab click
		module.view.trackEvent($(this).find('.inner').clone().children().remove().end().text(), "Tab", "Search");

		// use jstorage to set the href in LocalStorage
		$.jStorage.set('lastSearchTab', $(e.currentTarget).attr("href"));
	},
	updateTabLabelLength: function(data){
		this.$el.find('.nav-wrap .result-' + data.category + '-count').html('('+data.l+')');
	},
	initialize: function() {
		lpch.BaseView.prototype.initialize.call(this);		

		this.$el.find('#search_result_tab a').bind("click", this.showTab);
		this.$el.find("#search_result_tab").bind("click", this.stopBubbling);
		this.$el.find(".dropdown-nav").bind("click", this.toggleDropDownNav);
		
		module.vent.on("updateTabLabelLength", this.updateTabLabelLength, this);			
		
		if(module.view.getCurrentOrientation() == 'smartphone'){
			$(document).bind('click', this.closeDropDownNav);
		}
		
		this.truncate();
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');		
		this.$('.filter-inner').removeAttr('style');
		if(orientation != "smartphone") {			
			$(document).unbind('click', this.closeDropDownNav);
			$.colorbox.resize({			
				innerWidth: 640,
				innerHeight: 404
			});
		}else{
			$(document).bind('click', this.closeDropDownNav);
			this.$('.search-result-tab').removeAttr('style');
			$.colorbox.resize({			
				innerWidth: 320,
				innerHeight: 200
			});
		}
		this.truncate(orientation);
	}
});


/**
 * SearchResult:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */
$(window).bind('initializeComponents', function() {
	
	$('.search-result').each(function(index) {
		
		try {
			var searchResultsCollection = new lpch.SearchResultsCollection();
			searchResultsCollection.reset(searchResults.response.docs);
			searchResultsCollection.clean();
			new lpch.SearchResultTab({
				el: this
			});
			new lpch.SearchResult({
		        el: this,
		        collection: searchResultsCollection
		    });
		} catch (error) {
			console.log(error.message);
		}
		
		
	});
});

/**
 * SectionNav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SectionNav component
 */
lpch.SectionNav = lpch.BaseView.extend({ 
	NAME: "Section Navigation",
	scroller: null,

	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.section-name').bind('click', function(e) {
			_this.openSectionNav(e);
		});
		
		$(document).bind('click touchstart',function(e){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation == 'smartphone') {
				// if the click is NOT on this component
				if ( !$(e.target).parents().is(_this.$el) )
					_this.closeSectionNav();
			}
		});
		
		this.$el.bind('itemClicked', function(event) {
			event.stopPropagation();
			_this.closeSectionNav();
		});
		
		// tracking clicks on .list-section-name anchors
		this.$el.find('.list-section-name a').click(function(event) {
			module.view.trackEvent($(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	openSectionNav: function(e) {
		var _this = this;
		e.preventDefault();
		e.stopPropagation();
		this.$el.find('.list-section-name').show();
		var elem = this.$el.find('.list-section-name')[0];
		this.scroller = new iScroll(elem, {bounce: false});
	},
	closeSectionNav: function(e){
		$('.list-section-name').hide();
		this.scroller = null;
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'smartphone') {
			$('.list-section-name').hide();	
		} else {
			$('.list-section-name').show();
		}
	},
	
	handleViewportChange: function(width, height) {}
});

/**
 * SectionNav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.SectionNav' classes and initialize lpch.SectionNav
 */
$(window).bind('initializeComponents', function() {
	$('.section-navigation').each(function(index) {
		new lpch.SectionNav({
	        el: this
	    });
	});
});/**
 * service-doctors:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for service-doctors components
 */
lpch.ServiceDoctors = lpch.BaseView.extend({ 
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.service-doctors-nav li a').first().addClass('active').next().addClass('open');
		this.$el.find('.service-doctors-content-container div:first-child').addClass('open');
	
		/**
		 * Disabled in favor of simple href links
		 * 
		 * this.$el.find('.service-doctors-btn').click(function(e) {
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
			} 
		});*/

		var orientation = module.view.getCurrentOrientation();
		
		if(orientation == 'tablet'){
			this.$el.find('.our-care-team li:even').css({'margin-left':'0px'});
		}
		else{
			this.$el.find('.our-care-team li:even').removeAttr('style');
		}
		
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) { 
		var device = layout.get('orientation');
		if(device == 'tablet'){ 
			this.$el.find('.our-care-team li:even').css({'margin-left':'0px'});
		}
		else{
			this.$el.find('.our-care-team li:even').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * service-doctors:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.service-doctors' classes and initialize lpch.service-doctors
 */
$(window).bind('initializeComponents', function() {
	$('.service-doctors').each(function(index) {
		new lpch.ServiceDoctors({
	        el: this
	    });
	});
});//This js file used in service-index.html

lpch.ServiceIndex = lpch.BaseView.extend({

	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		_this.initAlphabetNav();
		_this.$('.alphabet-list')
			.bind('touchstart', _this.navTouchStartHandler)
			.bind('touchmove', _this.navTouchMoveHandler)
			.bind('touchend', _this.navTouchEndHandler)
			.mouseover(_this.navTouchStartHandler)
			.mouseout(_this.navTouchEndHandler);
		_this.$('.alphabet-list').find('li a')
			.bind('click', _this, _this.navItemClickHandler)
			.bind('touchstart', _this.indexListItemTouchStartHandler)
			.bind('touchend', _this.indexListItemTouchEndHandler);
		_this.$('.service-list .icon.info').bind('click', _this, _this.showTooltipOnClick);
		_this.$('.service-item')
			.bind('mouseover', _this, _this.showTooltipOnHover)
			.bind('mouseout', _this, _this.closeTooltip)
			.bind('click', function(event) {
				module.view.trackEvent($(this).text());
			});

		_this.upToTop = _this.$('.up-to-top-wrap');
		_this.tooltip = _this.$('.tooltip-wrap');
		_this.tooltip.content = _this.tooltip.find('.tooltip-content');
		_this.tooltipArrow = _this.tooltip.find('.tooltip-arrow'),
		_this.tooltip.find('.close-tooltip')
			.bind('click', _this, _this.closeTooltip);

		_this.navHeightOnMobile = 0;
		_this.navHeightOnTablet = 0;
		_this.setInitNavHeight();
		_this.detectNavListStyle($(window).height());
		$(window).bind('scroll', _this, _this.windowScrollHandler);
		_this.upToTop.find('a.up-to-top').click(_this.scrollToTop);

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	initAlphabetNav: function() {
		this.$('.alphabet-list li a').removeClass('empty');
		this.$('.alphabet-list li a').each(function() {
			var targetId = $(this).attr('href');
			if ($(targetId).length == 0)
				$(this).addClass('empty');
		});
	},
	navTouchMoveHandler: function(e) {
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		curTouchX = touch.pageX;
		curTouchY = touch.pageY;
		$(this).find('li').each(function() {
			var item = $(this);
			var thisOffset = item.offset();
			if (curTouchY < (thisOffset.top + item.outerHeight()) && curTouchY > thisOffset.top) {
				item.find('a').trigger('click');
			}
		});
	},
	navTouchStartHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;
		$(this).addClass('on-touch');
	},
	navTouchEndHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;
		$(this).removeClass('on-touch');
	},
	navItemClickHandler: function(e) {

		if ($(this).hasClass('empty')) return false;
		
		var _view = e.data;
		var targetId = $(this).attr('href');
		var targetTop = $(targetId).offset().top - $('#header-wrapper').height();
		var orientation = module.view.getCurrentOrientation();
		module.view.trackEvent($(this).text());
		if (orientation == 'desktop') $('html, body').animate({
			'scrollTop': targetTop
		}, 400, 'swing');
		else $(window).scrollTop(targetTop);
		
		// if this object has focus
		if ($(this).is(':focus')) {
			// jump focus to first item in the list
			_view.$el.find('.service-list li' + $(this).attr('href') + ' ul li:first-child .service-item').focus();
		}
		
		e.preventDefault();
	},
	indexListItemTouchStartHandler: function() {
		$(this).parent().addClass('hover');
		e.preventDefault();
	},
	indexListItemTouchEndHandler: function() {
		$(this).parent().removeClass('hover');
		e.preventDefault();
	},
	showTooltipOnHover: function(e) {

		var orientation = module.view.getCurrentOrientation();

		if (orientation != 'desktop') return;

		var _view = e.data,
			_this = $(this),
			targetOfset = _this.offset(),
			content = _this.attr('title'),
			compTop = _view.$el.offset().top,
			compLeft = _view.$el.offset().left;

		_view.tooltip.content.html(content);
		if (content != "") {
			_view.tooltip.stop(true, true).show();
		}

		var posLeft = targetOfset.left + _this.width() + 24,
			posTop = targetOfset.top - _view.tooltip.height() / 2 + _this.height() / 2,
			posArrowTop = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 1;

		//remove title attribute to prevent showing default tooltip 
		_this.attr('title', '');
		_view.tooltip.css('top', posTop - compTop);
		_view.tooltip.css('left', posLeft - compLeft);
		_view.tooltipArrow.css('top', posArrowTop);
	},
	showTooltipOnClick: function(e) {

		var orientation = module.view.getCurrentOrientation();

		if (orientation == 'desktop') return;

		var _view = e.data,
			_this = $(this),
			content = _this.parent().find('a').attr('title');


		_view.tooltip.removeAttr('style');
		_view.tooltipArrow.removeAttr('style');
		_view.$('.icon.info').removeClass('active');
		_this.addClass('active');
		_view.tooltip.content.html(content);
		_view.tooltip.stop(true, true).fadeIn(200);


		var targetOfset = _this.offset(),
			compTop = _view.$el.offset().top,
			tooltipWidth = _view.tooltip.width(),
			tooltipOffset = _view.tooltip.offset(),
			tooltipArrowWidth = _view.tooltipArrow.width(),
			tooltipTop = 0,
			tooltipLeft = 0,
			tooltipArrowLeft = 0,
			outerSpace = 0,
			arrowIsOuterRight = false,
			arrowIsOuterLeft = false;

		//set position for tooltip, (difference solution between smartphone and desktop)
		if (orientation == 'smartphone') {
			tooltipTop = targetOfset.top + 29 - compTop;
			tooltipArrowLeft = targetOfset.left - 16 - tooltipOffset.left;
			arrowIsOuterRight = tooltipArrowWidth + tooltipArrowLeft > tooltipWidth;
			arrowIsOuterLeft = tooltipArrowLeft < 0;

			if (arrowIsOuterRight) {
				outerSpace = Math.abs(tooltipWidth - (tooltipArrowWidth + tooltipArrowLeft)) + 20;
			}
			if (arrowIsOuterLeft) {
				outerSpace = tooltipArrowLeft - 10;
			}

			_view.tooltip.css('top', tooltipTop);
			_view.tooltip.css('left', tooltipOffset.left + outerSpace);
			_view.tooltipArrow.css('left', tooltipArrowLeft - outerSpace);
		}
		if (orientation == 'tablet') {
			tooltipLeft = targetOfset.left + 39;
			tooltipTop = targetOfset.top - _view.tooltip.height() / 2 - compTop;
			tooltipArrowLeft = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 8;

			_view.tooltip.css('left', tooltipLeft);
			_view.tooltip.css('top', tooltipTop);
			_view.tooltipArrow.css('top', tooltipArrowLeft);
		}

		$(document).bind('touchstart', _view, _view.closeTooltip);

		_view.tooltip.find('*').addBack().bind('touchstart', function(e) {
			e.stopPropagation();
		});
	},
	closeTooltip: function(e) {
		var _view = e.data; //View object
		var className = e.target.className;
		var orientation = module.view.getCurrentOrientation();
		var _this = $(this);

		if (className == 'service-item' && orientation != 'desktop')
			return; //mouse out of service item and not in desktop won't do below actions

		_view.tooltip.removeAttr('style');
		$(this).removeAttr('style');

		//if this function call from hover of list item on desktop version, return the title attribute
		if (className == 'service-item' && orientation == 'desktop')
			_this.attr('title', _view.tooltip.content.html());
		_view.tooltip.content.html('');
		_view.tooltip.find('.tooltip-arrow').removeAttr('style');

		$('.icon.info').removeClass('active');
		$(document).unbind('touchstart', _view.closeTooltip);
		e.preventDefault();
	},
	handleViewportChange: function(width, height) {
		this.detectNavListStyle(height);

		var orientation = module.view.getCurrentOrientation();
		if (this.$('.active').length > 0) {
			var _view = this,
				_this = _view.$('.active');

			_view.tooltip.removeAttr('style').show();
			_view.tooltipArrow.removeAttr('style');

			var targetOfset = _this.offset(),
				compTop = _view.$el.offset().top,
				tooltipWidth = _view.tooltip.width(),
				tooltipOffset = _view.tooltip.offset(),
				tooltipArrowWidth = _view.tooltipArrow.width(),
				tooltipTop = 0,
				tooltipLeft = 0,
				tooltipArrowLeft = 0,
				outerSpace = 0,
				arrowIsOuterRight = false,
				arrowIsOuterLeft = false;

			if (orientation == 'smartphone') {
				tooltipTop = targetOfset.top + 29 - compTop;
				tooltipArrowLeft = targetOfset.left - 16 - tooltipOffset.left;
				arrowIsOuterRight = tooltipArrowWidth + tooltipArrowLeft > tooltipWidth;
				arrowIsOuterLeft = tooltipArrowLeft < 0;

				if (arrowIsOuterRight) {
					outerSpace = Math.abs(tooltipWidth - (tooltipArrowWidth + tooltipArrowLeft)) + 20;
				}
				if (arrowIsOuterLeft) {
					outerSpace = tooltipArrowLeft - 10;
				}

				_view.tooltip.css('top', tooltipTop);
				_view.tooltip.css('left', tooltipOffset.left + outerSpace);
				_view.tooltipArrow.css('left', tooltipArrowLeft - outerSpace);
			} else if (orientation == 'tablet') {
				tooltipLeft = targetOfset.left + 39;
				tooltipTop = targetOfset.top - _view.tooltip.height() / 2 - compTop;
				tooltipArrowLeft = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 8;

				_view.tooltip.css('left', tooltipLeft);
				_view.tooltip.css('top', tooltipTop);
				_view.tooltipArrow.css('top', tooltipArrowLeft);
			}
		}
	},
	handleLayoutChange: function(layout) {

		var orientation = layout.get('orientation');
		var navList = $('.index-nav')

		switch (orientation) {
			case 'desktop':
				this.$('.icon.active').removeClass('active');
				this.tooltip.removeAttr('style');
				this.tooltipArrow.removeClass('style');

				if (navList.find('ul').hasClass('dotted'))
					navList.find('ul').removeClass('dotted')
						.find('.dot a').each(function() {
							$(this).html($(this).data('text'));
						});
				break;
			case 'tablet':
				if (this.navHeightOnTablet == 0) this.navHeightOnTablet = navList.height();
				this.$('.up-to-top').removeAttr('style');
				this.detectNavListStyle();
				break;
			default: //smartphone
				if (this.navHeightOnMobile == 0) this.navHeightOnMobile = navList.height();
				this.$('.up-to-top').removeAttr('style');
				this.detectNavListStyle();
				break;
		}
		//console.log(this.navHeightOnMobile + ',' + this.navHeightOnTablet);
	},
	windowScrollHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation != 'desktop') return;

		var _view = e.data,
			footerHeight = 221,
			scrollTop = $(this).scrollTop(),
			windowHeight = $(this).height(),
			docHeight = $(document).height();

		if (scrollTop > 0) {
			if (scrollTop + windowHeight > docHeight - footerHeight) {
				if (!_view.upToTop.hasClass('absolute'))
					_view.upToTop.addClass('absolute');
			} else {
				if (_view.upToTop.hasClass('absolute'))
					_view.upToTop.removeClass('absolute');
				_view.upToTop.find('a').show();
			}
		} else {
			_view.upToTop.find('a').hide();
		}
	},
	scrollToTop: function(e) {
		$('html, body').animate({
			'scrollTop': 0
		}, 300);
		e.preventDefault();
	},
	detectNavListStyle: function(windowHeight) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;

		var list = this.$('.alphabet-list');
		var initHeight = orientation == 'smartphone' ? this.navHeightOnMobile : this.navHeightOnTablet;

		if (!list.hasClass('dotted')) {
			if (initHeight > windowHeight) {
				list.addClass('dotted');
				list.find('.dot a').each(function() {
					$(this).data('text', $(this).html());
					$(this).html('');
				});
			}
		} else {
			if (initHeight <= windowHeight) {
				list.removeClass('dotted');
				list.find('.dot a').each(function() {
					$(this).html($(this).data('text'));
				});
			}
		}
	},
	setInitNavHeight: function() {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		switch (orientation) {
			case 'smartphone':
				_this.navHeightOnMobile = this.$('.index-nav').height();
				_this.navHeightOnTablet = 0;
				break;
			case 'tablet':
				_this.navHeightOnMobile = 0;
				_this.navHeightOnTablet = this.$('.index-nav').height();
				break;
			default:
				break;
		}
	}

});

$(window).bind('initializeComponents', function() {
	if ($('#service_index').length == 0) return;
	new lpch.ServiceIndex({
		el: '#service_index'
	});
});lpch.SocialBlogAndArticle = lpch.BaseView.extend({
	NAME: "Social",
	wordCounts:{
		desktop    : 28,
		tablet     : 20,
		smartphone : 12
	},	
	timer: null,
	stopBubbling: function(e){
		e.stopPropagation();
	},	
	truncate: function(orientation){				
		var _this = this;
		clearTimeout(this.timer);
		this.timer = setTimeout(function(){
			_this.truncateTabsContent(_this.$el, _this.wordCounts[orientation || module.view.getCurrentOrientation()] );			
		}, 200);
	},	
	truncateTabsContent: function(list, limit) {
		$.each(list.find(".blog-item"), function(i, jitem) {
			var desc = $(jitem).find('.description'),
					jct  = desc.find('.content'),
					jctm = desc.find('.content-truncate'),
					ws   = words(jct.html());
			
			if (ws.length > limit) truncateText(jctm, ws, limit);
		});		
	},	
	initialize: function() {
		var _this = this;
		// tracking social link clicks
		this.$el.find('a').click(function(event) {
			//module.view.trackEvent($(this).text());
			console.log($(this).attr('title') || $(this).text());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
		this.truncate();
	},
	handleLayoutChange: function(layout) {
		this.truncate(layout.get('orientation'));
	},
	handleViewportChange: function(width, height) {

	}
});

$(window).bind('initializeComponents', function() {	
	$('.social-blog-article').each(function(index) {
		new lpch.SocialBlogAndArticle({
			el: this
		});		
	});
});

lpch.SocialLinkSystem = lpch.BaseView.extend({
	
	NAME: "Social",
	
	initialize: function() {
		var _this = this;
		this.bindSocialRelatedLocation();
		
		// tracking some social widget clicks
		$('.social-newletter a, .social-sharing a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
	},

	bindSocialRelatedLocation: function () {
		var $html = $('html, body'),
			$win = $(window),
			scrollTop = 0;

		$('.social-related-locations-wrap').each(function () {
			var $wrap = $(this),
				items = $wrap.find('.location-btn'),
				curIdx = items.find('.active').index() || 0;

			$.each(items, function (idx) {
				var $this = $(this),					
					rel = $this.attr('data-rel');

				$.event.add(this, 'click', itemClick($this, rel, idx));
			});
			function itemClick($link, rel, idx){
				return function (e) {
					e.preventDefault();
					items.removeClass("active");
					$link.addClass('active');

					$html.stop().animate({
						scrollTop: $('#' + rel).offset().top - 30
					}, 500);
				}
			}
			$('.btn-back-to-top').click(function (e) {
				e.preventDefault();

				$html.stop().animate({
					scrollTop: 0
				}, 500);
			});

			$win.scroll(function (e){
				scrollTop = $win.scrollTop();

				var fscrollTop = $('#location-facebook').offset().top,
					yscrollTop = $('#location-youtube').offset().top,
					bscrollTop = $('#location-blog').offset().top,
					jscrollTop = $('#location-join-us-mobile').offset().top;

				if (scrollTop <= fscrollTop){
					items.removeClass("active");
					items.eq(0).addClass('active');
				}	else if (scrollTop <= yscrollTop){
					items.removeClass("active");
					items.eq(1).addClass('active');
				} else if (scrollTop <= bscrollTop){
					items.removeClass("active");
					items.eq(2).addClass('active');
				} else if (scrollTop <= jscrollTop){
					items.removeClass("active");
					items.eq(3).addClass('active');
				}
			});
		});
	},

	handleLayoutChange: function(layout) {
		
	},

	handleViewportChange: function(width, height) {

	}
});

$(window).bind('initializeComponents', function() {		
	new lpch.SocialLinkSystem({
		el: this
	});
});

/**
 * Subnav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Subnav component
 */
lpch.Subnav = lpch.BaseView.extend({
	
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.choose-a-section').bind('click touchstart', this.openSubnav);
		this.$el.find('.list-subnav a').bind('click touchstart', function(e){
			e.preventDefault();
			e.stopPropagation();

			var orientation = module.view.getCurrentOrientation(); 
			
			if(orientation == 'smartphone') {
				var currentText = $(this).html();
				_this.closeSubnav();
				$('.choose-a-section').html(currentText).truncate({maxLength: 20});
			}
		}); 
		
		$(document).bind('click touchstart',function(){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation == 'smartphone') {
				_this.closeSubnav();
			}
		});
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	openSubnav: function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.list-subnav').show();
	},
	closeSubnav: function(e){
		$('.list-subnav').hide();
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'smartphone') {
			$('.list-subnav').hide();
		}
		else {
			$('.list-subnav').show();	
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Subnav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Subnav' classes and initialize lpch.Subnav
 */
$(window).bind('initializeComponents', function() {
	$('.subnav').each(function(index) {
		new lpch.Subnav({
	        el: this
	    });
	});
});/**
 * TopicIndex:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for TopicIndex components
 */
lpch.TopicIndex = lpch.BaseView.extend({

	$treeList: null,
	$listItems: null,
	$stayWellP: null,
	$stayWellImg: null,
	$listItemLinks: null,
	$stayWellContainer: null,

	SLIDE_SPEED: 300,
	EXPANDED: 'expanded',
	HAS_CHILD: 'has-child',
	LAST_CHILD: 'last-child',

	initialize: function() {
		// Self-reference for scoping
		var _this = this,
			orientation = module.view.getCurrentOrientation();
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		_this.$treeList = this.$el.find('.tree-list');
		_this.$listItems = _this.$treeList.find('li');
		_this.$listItemLinks = _this.$treeList.find('a');
		_this.$stayWellContainer = _this.$el.find('.stay-well');
		_this.$stayWellP = this.$stayWellContainer.find('p');
		_this.$stayWellImg = this.$stayWellContainer.find('img');

		_this.initStayWellContent(orientation);
		_this.$listItems.removeClass('has-child');
		for (var i = 0; i < _this.$listItems.length; i++) {
			_this.initItem(_this.$listItems.eq(i));
		};

		_this.$listItemLinks.bind('click', _this, _this.expandChild);

		this.$el.find('.topic-footer a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	initItem: function($treeItem) {
		var _this = $treeItem,
			_view = this;

		if (_this.find('ul').length > 0) {
			_this.addClass(_view.HAS_CHILD);
		}
		if (_this.is(':last-child')) {
			_this.addClass(_view.LAST_CHILD);
		}
	},
	expandChild: function(e) {
		var _parent = $(this).parent(),
			_view = e.data;
		
		module.view.trackEvent($(this).attr('title') || $(this).clone().children().remove().end().text());
		
		if (_parent.hasClass('has-child')) {

			_parent.find('>ul').slideToggle(_view.SLIDE_SPEED, function() {

				_parent.toggleClass(_view.EXPANDED);
				$(this).removeAttr('style');

				if (!_parent.hasClass(_view.EXPANDED) && _parent.find('.' + _view.EXPANDED).length > 0)

					_parent.find('.' + _view.EXPANDED)
						.removeClass(_view.EXPANDED);

			});


			return false;
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');

		this.initStayWellContent(orientation);
	},

	handleViewportChange: function(width, height) {},

	initStayWellContent: function(orientation) {
		if (orientation == 'smartphone') {
			this.$stayWellImg.before(this.$stayWellP);
		} else {
			this.$stayWellImg.after(this.$stayWellP);
		}
	}

});
/**
 * TopicIndex:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.TopicIndex
 */
$(window).bind('initializeComponents', function() {

	$('.topidx-component').each(function() {
		new lpch.TopicIndex({
			el: this
		});
	});

});lpch.YtVideoModel = Backbone.Model.extend({});


lpch.YtVideoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get("youtube-video-list").get('html'));
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

lpch.YtVideosCollection = Backbone.Collection.extend({
	model: lpch.YtVideoModel,
	initialize: function(options){
		if(options!=undefined)
			this.url += options.maxResults+"&callback=?";
	},
	parse: function(response){
		var resultObj = [];
		_.each(response.feed.entry,function(val, i){
			var dur = val.media$group.media$content[0].duration;
			dur = parseInt(parseInt(dur)/60)+":"+(parseInt(dur)%60<10? ("0"+parseInt(dur)%60): parseInt(dur)%60);
			var desc = val.media$group.media$description.$t;
			desc = desc.length>70 ? desc.slice(0,67)+"...": desc;
			var title = val.media$group.media$title.$t;
			title = title.length>23 ? title.slice(0,23)+"...": title;
			
			resultObj.push({
				"thumb"		: val.media$group.media$thumbnail[1].url,
				"url" 		: '//www.youtube.com/embed/' + val.media$group.yt$videoid.$t + '?rel=0&&amp;mode=transparent',
				"title" 	: title,
				"desc"		: desc,
				"duration" 	: dur
			});
		});
		return resultObj;
	},
	url: "https://gdata.youtube.com/feeds/api/users/PackardChildrensHosp/uploads?v=2&alt=json&max-results="
});


lpch.YtVideosView = lpch.BaseView.extend({
	initialize: function(options){
		lpch.BaseView.prototype.initialize.call(this);
		this.render();
	},
	render: function(){
		this.collection.each(function(model,i){
			var tempYtVideo = new lpch.YtVideoView({model: model});
			this.$el.append(tempYtVideo.render().el);
		},this);
		return this;
	}
});

$(window).bind('initializeComponents', function() {
	var ytVideoData = new lpch.YtVideosCollection({maxResults:2});
	ytVideoData.fetch({
		success: function(){
			$('.social-youtube-videos').each(function(index) {
				var $this = $(this);

				window.videoslist = new lpch.YtVideosView({
					el: $("ul.yt-videos-list").get(0),
			        collection: ytVideoData
			    });
			    setTimeout(function (argument) {					
					$this.find('.youtube')
						.colorbox({
							iframe: true,
							innerWidth: 620,
							innerHeight: 404,
							fixed: true,
							onOpen: function() {
								module.view.trackEvent($(this).attr('title'));
							},
							onComplete: function() {
								var orientation = module.view.getCurrentOrientation();
								if (orientation == 'smartphone') {
									$.colorbox.resize({
										innerWidth: 320,
										innerHeight: 200
									});
								}
							}
						});
				}, 10);
			});
		},
		reset: true
	});
});

lpch.Module = Backbone.Router.extend({

	viewClass: lpch.Document,
	
	routes: {
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
	
	initialize: function() {
		if (window.module) {
			throw new Error('Only one module instance may be created.');
			return;
		}

		window.module = this;
		
		module.vent = {}; //global event object
		_.extend(module.vent, Backbone.Events);

		this.view = new this.viewClass();
	},
	
	defaultRoute: function(deeplink) {},
    
    getView: function() {
    	return this.view;
    }
	
});$(window).ready(function() {
	new lpch.Module();
});