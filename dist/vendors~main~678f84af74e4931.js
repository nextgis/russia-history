(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(t,e,r){"use strict";var n=function(t){return new c(t).output()},a=/\s/,o=/[A-Za-z]/,i=/[A-Za-z84]/,s=/[,\]]/,f=/[\d\.E\-\+]/;function c(t){if("string"!=typeof t)throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=1}function l(t,e,r){Array.isArray(e)&&(r.unshift(e),e=null);var n=e?{}:t,a=r.reduce((function(t,e){return u(e,t),t}),n);e&&(t[e]=a)}function u(t,e){if(Array.isArray(t)){var r=t.shift();if("PARAMETER"===r&&(r=t.shift()),1===t.length)return Array.isArray(t[0])?(e[r]={},void u(t[0],e[r])):void(e[r]=t[0]);if(t.length)if("TOWGS84"!==r){if("AXIS"===r)return r in e||(e[r]=[]),void e[r].push(t);var n;switch(Array.isArray(r)||(e[r]={}),r){case"UNIT":case"PRIMEM":case"VERT_DATUM":return e[r]={name:t[0].toLowerCase(),convert:t[1]},void(3===t.length&&u(t[2],e[r]));case"SPHEROID":case"ELLIPSOID":return e[r]={name:t[0],a:t[1],rf:t[2]},void(4===t.length&&u(t[3],e[r]));case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":return t[0]=["name",t[0]],void l(e,r,t);default:for(n=-1;++n<t.length;)if(!Array.isArray(t[n]))return u(t,e[r]);return l(e,r,t)}}else e[r]=t;else e[r]=!0}else e[t]=!0}c.prototype.readCharicter=function(){var t=this.text[this.place++];if(4!==this.state)for(;a.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case 1:return this.neutral(t);case 2:return this.keyword(t);case 4:return this.quoted(t);case 5:return this.afterquote(t);case 3:return this.number(t);case-1:return}},c.prototype.afterquote=function(t){if('"'===t)return this.word+='"',void(this.state=4);if(s.test(t))return this.word=this.word.trim(),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in afterquote yet, index '+this.place)},c.prototype.afterItem=function(t){return","===t?(null!==this.word&&this.currentObject.push(this.word),this.word=null,void(this.state=1)):"]"===t?(this.level--,null!==this.word&&(this.currentObject.push(this.word),this.word=null),this.state=1,this.currentObject=this.stack.pop(),void(this.currentObject||(this.state=-1))):void 0},c.prototype.number=function(t){if(!f.test(t)){if(s.test(t))return this.word=parseFloat(this.word),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in number yet, index '+this.place)}this.word+=t},c.prototype.quoted=function(t){'"'!==t?this.word+=t:this.state=5},c.prototype.keyword=function(t){if(i.test(t))this.word+=t;else{if("["===t){var e=[];return e.push(this.word),this.level++,null===this.root?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,void(this.state=1)}if(!s.test(t))throw new Error("havn't handled \""+t+'" in keyword yet, index '+this.place);this.afterItem(t)}},c.prototype.neutral=function(t){if(o.test(t))return this.word=t,void(this.state=2);if('"'===t)return this.word="",void(this.state=4);if(f.test(t))return this.word=t,void(this.state=3);if(!s.test(t))throw new Error("havn't handled \""+t+'" in neutral yet, index '+this.place);this.afterItem(t)},c.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(-1===this.state)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function d(t){return.017453292519943295*t}e.a=function(t){var e=n(t),r=e.shift(),a=e.shift();e.unshift(["name",a]),e.unshift(["type",r]);var o={};return u(e,o),function(t){if("GEOGCS"===t.type?t.projName="longlat":"LOCAL_CS"===t.type?(t.projName="identity",t.local=!0):"object"==typeof t.PROJECTION?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var e="",r=0,n=t.AXIS.length;r<n;++r){var a=t.AXIS[r][0].toLowerCase();-1!==a.indexOf("north")?e+="n":-1!==a.indexOf("south")?e+="s":-1!==a.indexOf("east")?e+="e":-1!==a.indexOf("west")&&(e+="w")}2===e.length&&(e+="u"),3===e.length&&(t.axis=e)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),"metre"===t.units&&(t.units="meter"),t.UNIT.convert&&("GEOGCS"===t.type?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var o=t.GEOGCS;function i(e){return e*(t.to_meter||1)}"GEOGCS"===t.type&&(o=t),o&&(o.DATUM?t.datumCode=o.DATUM.name.toLowerCase():t.datumCode=o.name.toLowerCase(),"d_"===t.datumCode.slice(0,2)&&(t.datumCode=t.datumCode.slice(2)),"new_zealand_geodetic_datum_1949"!==t.datumCode&&"new_zealand_1949"!==t.datumCode||(t.datumCode="nzgd49"),"wgs_1984"!==t.datumCode&&"world_geodetic_system_1984"!==t.datumCode||("Mercator_Auxiliary_Sphere"===t.PROJECTION&&(t.sphere=!0),t.datumCode="wgs84"),"_ferro"===t.datumCode.slice(-6)&&(t.datumCode=t.datumCode.slice(0,-6)),"_jakarta"===t.datumCode.slice(-8)&&(t.datumCode=t.datumCode.slice(0,-8)),~t.datumCode.indexOf("belge")&&(t.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(t.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===t.ellps.toLowerCase().slice(0,13)&&(t.ellps="intl"),t.a=o.DATUM.SPHEROID.a,t.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(t.datum_params=o.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),"ch1903+"===t.datumCode&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",d],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",d],["x0","false_easting",i],["y0","false_northing",i],["long0","central_meridian",d],["lat0","latitude_of_origin",d],["lat0","standard_parallel_1",d],["lat1","standard_parallel_1",d],["lat2","standard_parallel_2",d],["azimuth","Azimuth"],["alpha","azimuth",d],["srsCode","name"]].forEach((function(e){return r=t,a=(n=e)[0],o=n[1],void(!(a in r)&&o in r&&(r[a]=r[o],3===n.length&&(r[a]=n[2](r[a]))));var r,n,a,o})),t.long0||!t.longc||"Albers_Conic_Equal_Area"!==t.projName&&"Lambert_Azimuthal_Equal_Area"!==t.projName||(t.long0=t.longc),t.lat_ts||!t.lat1||"Stereographic_South_Pole"!==t.projName&&"Polar Stereographic (variant B)"!==t.projName||(t.lat0=d(t.lat1>0?90:-90),t.lat_ts=t.lat1)}(o),o}},117:function(t,e,r){(function(e){for(var n=r(494),a="undefined"==typeof window?e:window,o=["moz","webkit"],i="AnimationFrame",s=a["request"+i],f=a["cancel"+i]||a["cancelRequest"+i],c=0;!s&&c<o.length;c++)s=a[o[c]+"Request"+i],f=a[o[c]+"Cancel"+i]||a[o[c]+"CancelRequest"+i];if(!s||!f){var l=0,u=0,d=[];s=function(t){if(0===d.length){var e=n(),r=Math.max(0,1e3/60-(e-l));l=r+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(r))}return d.push({handle:++u,callback:t,cancelled:!1}),u},f=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return s.call(a,t)},t.exports.cancel=function(){f.apply(a,arguments)},t.exports.polyfill=function(t){t||(t=a),t.requestAnimationFrame=s,t.cancelAnimationFrame=f}}).call(this,r(92))},118:function(t,e){t.exports=function(t){this.ok=!1,this.alpha=1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();var e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};t=e[t]||t;for(var r=[{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,example:["rgba(123, 234, 45, 0.8)","rgba(255,234,245,1.0)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),parseFloat(t[4])]}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],n=0;n<r.length;n++){var a=r[n].re,o=r[n].process,i=a.exec(t);if(i){var s=o(i);this.r=s[0],this.g=s[1],this.b=s[2],s.length>3&&(this.alpha=s[3]),this.ok=!0}}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.alpha=this.alpha<0?0:this.alpha>1||isNaN(this.alpha)?1:this.alpha,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toRGBA=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r},this.getHelpXML=function(){for(var t=new Array,n=0;n<r.length;n++)for(var a=r[n].example,o=0;o<a.length;o++)t[t.length]=a[o];for(var i in e)t[t.length]=i;var s=document.createElement("ul");s.setAttribute("id","rgbcolor-examples");for(n=0;n<t.length;n++)try{var f=document.createElement("li"),c=new RGBColor(t[n]),l=document.createElement("div");l.style.cssText="margin: 3px; border: 1px solid black; background:"+c.toHex()+"; color:"+c.toHex(),l.appendChild(document.createTextNode("test"));var u=document.createTextNode(" "+t[n]+" -> "+c.toRGB()+" -> "+c.toHex());f.appendChild(l),f.appendChild(u),s.appendChild(f)}catch(t){}return s}}},232:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function l(){}function u(){}function d(){}var h={};h[a]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(C([])));g&&g!==e&&r.call(g,a)&&(h=g);var m=d.prototype=l.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,s){var c=f(t[a],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return u.prototype=m.constructor=d,d.constructor=u,d[i]=u.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),f=r.call(o,"finallyLoc");if(s&&f){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},276:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.d(e,"a",(function(){return s}));var a=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],o=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function i(t,e,r,a,o){if("string"==typeof t&&(t=document.getElementById(t)),!t||"object"!==n(t)||!("getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var i=t.getContext("2d");try{return i.getImageData(e,r,a,o)}catch(t){throw new Error("unable to access image data: "+t)}}function s(t,e,r,n,s,c){if(!(isNaN(c)||c<1)){c|=0;var l=i(t,e,r,n,s);l=function(t,e,r,n,i,s){var c,l,u,d,h,p,g,m,v,y,b,w,_,x,C,E,O,A,k,S,I,T,L,N,R,j=t.data,D=2*s+1,G=n-1,M=i-1,P=s+1,F=P*(P+1)/2,U=new f,q=U;for(u=1;u<D;u++)q=q.next=new f,u===P&&(R=q);q.next=U;var H=null,z=null;g=p=0;var B=a[s],J=o[s];for(l=0;l<i;l++){for(E=O=A=k=m=v=y=b=0,w=P*(S=j[p]),_=P*(I=j[p+1]),x=P*(T=j[p+2]),C=P*(L=j[p+3]),m+=F*S,v+=F*I,y+=F*T,b+=F*L,q=U,u=0;u<P;u++)q.r=S,q.g=I,q.b=T,q.a=L,q=q.next;for(u=1;u<P;u++)d=p+((G<u?G:u)<<2),m+=(q.r=S=j[d])*(N=P-u),v+=(q.g=I=j[d+1])*N,y+=(q.b=T=j[d+2])*N,b+=(q.a=L=j[d+3])*N,E+=S,O+=I,A+=T,k+=L,q=q.next;for(H=U,z=R,c=0;c<n;c++)j[p+3]=L=b*B>>J,0!==L?(L=255/L,j[p]=(m*B>>J)*L,j[p+1]=(v*B>>J)*L,j[p+2]=(y*B>>J)*L):j[p]=j[p+1]=j[p+2]=0,m-=w,v-=_,y-=x,b-=C,w-=H.r,_-=H.g,x-=H.b,C-=H.a,d=g+((d=c+s+1)<G?d:G)<<2,E+=H.r=j[d],O+=H.g=j[d+1],A+=H.b=j[d+2],k+=H.a=j[d+3],m+=E,v+=O,y+=A,b+=k,H=H.next,w+=S=z.r,_+=I=z.g,x+=T=z.b,C+=L=z.a,E-=S,O-=I,A-=T,k-=L,z=z.next,p+=4;g+=n}for(c=0;c<n;c++){for(O=A=k=E=v=y=b=m=0,w=P*(S=j[p=c<<2]),_=P*(I=j[p+1]),x=P*(T=j[p+2]),C=P*(L=j[p+3]),m+=F*S,v+=F*I,y+=F*T,b+=F*L,q=U,u=0;u<P;u++)q.r=S,q.g=I,q.b=T,q.a=L,q=q.next;for(h=n,u=1;u<=s;u++)p=h+c<<2,m+=(q.r=S=j[p])*(N=P-u),v+=(q.g=I=j[p+1])*N,y+=(q.b=T=j[p+2])*N,b+=(q.a=L=j[p+3])*N,E+=S,O+=I,A+=T,k+=L,q=q.next,u<M&&(h+=n);for(p=c,H=U,z=R,l=0;l<i;l++)j[(d=p<<2)+3]=L=b*B>>J,L>0?(L=255/L,j[d]=(m*B>>J)*L,j[d+1]=(v*B>>J)*L,j[d+2]=(y*B>>J)*L):j[d]=j[d+1]=j[d+2]=0,m-=w,v-=_,y-=x,b-=C,w-=H.r,_-=H.g,x-=H.b,C-=H.a,d=c+((d=l+P)<M?d:M)*n<<2,m+=E+=H.r=j[d],v+=O+=H.g=j[d+1],y+=A+=H.b=j[d+2],b+=k+=H.a=j[d+3],H=H.next,w+=S=z.r,_+=I=z.g,x+=T=z.b,C+=L=z.a,E-=S,O-=I,A-=T,k-=L,z=z.next,p+=n}return t}(l,0,0,n,s,c),t.getContext("2d").putImageData(l,e,r)}}var f=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}},278:function(t,e,r){var n,a,o;a=[],void 0===(o="function"==typeof(n=function(){"use strict";var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(t){return t.split("").reverse().join("")}function r(t,e){return t.substring(0,e.length)===e}function n(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function a(t){return"number"==typeof t&&isFinite(t)}function o(t,r,n,o,i,s,f,c,l,u,d,h){var p,g,m,v,y,b=h,w="",_="";return s&&(h=s(h)),!!a(h)&&(!1!==t&&0===parseFloat(h.toFixed(t))&&(h=0),h<0&&(p=!0,h=Math.abs(h)),!1!==t&&(y=t,v=(v=h).toString().split("e"),h=(+((v=(v=Math.round(+(v[0]+"e"+(v[1]?+v[1]+y:y)))).toString().split("e"))[0]+"e"+(v[1]?+v[1]-y:-y))).toFixed(y)),-1!==(h=h.toString()).indexOf(".")?(m=(g=h.split("."))[0],n&&(w=n+g[1])):m=h,r&&(m=e(m).match(/.{1,3}/g),m=e(m.join(e(r)))),p&&c&&(_+=c),o&&(_+=o),p&&l&&(_+=l),_+=m,_+=w,i&&(_+=i),u&&(_=u(_,b)),_)}function i(t,e,n,o,i,s,f,c,l,u,d,h){var p,g="";return d&&(h=d(h)),!(!h||"string"!=typeof h)&&(c&&r(h,c)&&(h=h.replace(c,""),p=!0),o&&r(h,o)&&(h=h.replace(o,"")),l&&r(h,l)&&(h=h.replace(l,""),p=!0),i&&function(t,e){return t.slice(-1*e.length)===e}(h,i)&&(h=h.slice(0,-1*i.length)),e&&(h=h.split(e).join("")),n&&(h=h.replace(n,".")),p&&(g+="-"),""!==(g=(g+=h).replace(/[^0-9\.\-.]/g,""))&&(g=Number(g),f&&(g=f(g)),!!a(g)&&g))}function s(e,r,n){var a,o=[];for(a=0;a<t.length;a+=1)o.push(e[t[a]]);return o.push(n),r.apply("",o)}return function e(r){if(!(this instanceof e))return new e(r);"object"==typeof r&&(r=function(e){var r,a,o,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),r=0;r<t.length;r+=1)if(void 0===(o=e[a=t[r]]))"negative"!==a||i.negativeBefore?"mark"===a&&"."!==i.thousand?i[a]=".":i[a]=!1:i[a]="-";else if("decimals"===a){if(!(o>=0&&o<8))throw new Error(a);i[a]=o}else if("encoder"===a||"decoder"===a||"edit"===a||"undo"===a){if("function"!=typeof o)throw new Error(a);i[a]=o}else{if("string"!=typeof o)throw new Error(a);i[a]=o}return n(i,"mark","thousand"),n(i,"prefix","negative"),n(i,"prefix","negativeBefore"),i}(r),this.to=function(t){return s(r,o,t)},this.from=function(t){return s(r,i,t)})}})?n.apply(e,a):n)||(t.exports=o)},512:function(t,e,r){"use strict";var n=r(513),a=Array.prototype.concat,o=Array.prototype.slice,i=t.exports=function(t){for(var e=[],r=0,i=t.length;r<i;r++){var s=t[r];n(s)?e=a.call(e,o.call(s)):e.push(s)}return e};i.wrap=function(t){return function(){return t(i(arguments))}}},92:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}}]);