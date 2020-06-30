(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{120:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return s}));var n=r(282),i=r(56),a=i.baseUrl,o=new n.default({baseUrl:a});function p(){return o.makeQuery("/api/resource/?parent={id}",{id:i.pointsGroupId},{})}function s(t){return o.makeQuery("/api/resource/{id}/geojson",{id:t},{})}},123:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(118),i=r.n(n),a=r(63);function o(t){var e=/(\d{4})/.exec(t);if(e)return Number(e[0])}var p,s=r(70),c=(p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(){return(u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var a=arguments[e],o=0,p=a.length;o<p;o++,i++)n[i]=a[o];return n},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.oldNgwMvtApi=!0,e.filterIdField="fid",e}return c(e,t),e.prototype.addLayers=function(t,e){return this._createTimeLayers(t,e)},e.prototype.getFillColor=function(t){return this._getFillColor(t)},e.prototype.createPopupContent=function(t){if(t&&t.status&&t.status<6){return this._createPropBlock([],t)}},e.prototype._createTimeLayers=function(t,e){var r=this.groupLayer;if(r){var n={"fill-opacity":r.opacity,"fill-opacity-transition":{duration:0},"fill-color":this._getFillColor()},i=u(u({},n),{"fill-color":this._getFillColor({darken:.5})}),a=e;return[this.app.webMap.addLayer("MVT",{url:t,id:e,name:e,paint:n,order:this.order,selectedPaint:i,selectable:!0,type:"polygon",nativePaint:!0,labelField:"name",sourceLayer:a})]}return[]},e.prototype._getFillColor=function(t){void 0===t&&(t={});var e=[],r=this.app.options.lineColorLegend,n=r&&r.base;if(n&&e&&n){n.forEach((function(t){t[3].forEach((function(r){var n=t[1],i="string"==typeof n?n:n.color;e.push([r,i])}))}));var a=e.reduce((function(e,r){var n=r[0],a=r[1],o=i()(a);return n&&e.push(n),t.darken&&(o=o.darken(t.darken)),e.push(o.hex()),e}),[]);return a.push("#cccccc"),["match",["get","status"]].concat(a)}},e.prototype._formatDateStr=function(t){return t.split("-").reverse().join(".")},e.prototype._createPropElement=function(t,e){void 0===e&&(e="");var r=document.createElement("div");return r.className="popup__propertyblock",r.innerHTML='<div class="popup__property--value'+(e?" "+e:"")+'" >'+t+"</div >",r},e.prototype._findPrincipalities01=function(t,e){return(this.app.options.principalities01||[]).find((function(r){var n=o(r.upperdat),i=o(r.lwdate);return!(!n||!i)&&(r.fid===t&&e<=n&&e>=i)}))},e.prototype._findPrincipalities02=function(t,e){return(this.app.options.principalities02||[]).find((function(r){var n=o(r.years_to),i=o(r.years_from);return!(!n||!i)&&(t===r.fid&&e<=n&&e>=i)}))},e.prototype._createPropBlock=function(t,e,r){var n=this;void 0===r&&(r="name");var i=document.createElement("div"),o=l(t),p=u({},e);"principalities"===this.app.getTimeStop(this.app.timeMap.currentYear)&&this._addPrincipalitiesFields(o,p),p[r]&&i.appendChild(this._createPropElement("<h2>"+p[r]+'\n            <a class="feature-link">&#x1f517;</a>\n          </h2>',"prop header")),o.forEach((function(t){var e=p[t.field];if(e){var r=document.createElement("div");if(r.className="popup__propertyblock",r.innerHTML="",e){var a=t.getHtml?t.getHtml(e,p):n._createPropElement(e,"");i.appendChild(a)}}})),e.status&&(i.innerHTML+=this._createPropStatusHtml(e));var s=i.getElementsByClassName("feature-link")[0];return s&&s.addEventListener("click",(function(){var t=document.location.origin+document.location.pathname;t+="?year="+n.app.timeMap.currentYear+"&id="+e.fid,n.app.urlParams.set("id",String(e.fid)),Object(a.a)(t)})),this._addPropShowDateClickEvent(i),i},e.prototype._addPrincipalitiesFields=function(t,e){var r=this,n=function(r,n){t.push(u({name:n.field},n)),e[n.field]=r},i=e.fid;if(i){var a=this._findPrincipalities01(i,this.app.timeMap.currentYear),o=this._findPrincipalities02(i,this.app.timeMap.currentYear);a&&(e.desc_link=a.desc_link,n(a.name,{field:"name_prince",getHtml:function(t,e){return r._createPropElement('<a href="'+e.desc_link+'" target="_blank">'+t+"</a>","")}})),o&&(n(o.ruler,{field:"ruler",getHtml:function(t,e){return r._createPropElement('Правитель: <a href="'+e.desc_link+'" target="_blank">'+t+"</a>","")}}),n(o.years_from+" - "+o.years_to,{field:"board_dates",getHtml:function(t,e){return r._createPropElement("Даты правления: "+t+" гг.")}}))}},e.prototype._createPropStatusHtml=function(t){var e="",r=this.app.options.statusAliases&&this.app.options.statusAliases[t.status];if(r&&(e+='\n              <div class="popup__property--value status"><p>'+r+"</p></div>\n            "),"principalities"!==this.app.getTimeStop(this.app.timeMap.currentYear)){if(t.status>0&&t.status<6){var n=this._formatDateStr(t.lwdate),i=this._formatDateStr(t.updtrl||t.upperdat);n&&i&&(e+='\n              <div class="popup__property--value dates">\n                <span>\n                  <span class="show-date">'+n+'</span> -\n                  <span class="show-date">'+i+"</span>\n                </span>\n              </div>\n            ")}t.Area&&(e+='\n              <div class="popup__property--value area">\n                <span>\n                  '+Object(a.b)(t.Area/1e6)+"\n                </span>\n              </div>\n            ")}return e},e.prototype._addPropShowDateClickEvent=function(t){for(var e=this,r=t.querySelectorAll(".show-date"),n=function(t){var n=r[t];n.addEventListener("click",(function(){var t=o(n.innerHTML);t&&(e.app.timeMap.updateByYear(t),e.app.slider&&e.app.slider._slider&&e.app.slider._slider.set(t))}))},i=0;i<r.length;i++)n(i)},e}(s.a)},157:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=new(r(287).default)},281:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(155);function i(t){n&&setTimeout((function(){t(n)}))}},288:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r(296),i=r(32),a=r(11),o=r(120),p=function(){function t(t){this.app=t,this.opacity=1,this.simplification=8,this._markers=[],this._pointsConfig=[]}return t.prototype.setPoints=function(t){this._pointsConfig=this._processPointsMeta(t);var e=this._getPointIdByYear(this.app.timeMap.currentYear);e&&this.updatePoint(e)},t.prototype.remove=function(){this._markers.forEach((function(t){t.marker.remove()})),this._markers=[]},t.prototype.updatePoint=function(t){t!==this.currentPointId&&(this.currentPointId&&this.remove(),this.currentPointId=t,t&&this._addPoint(t))},t.prototype.updateActiveMarker=function(t){t&&this._markers.forEach((function(e){e.properties.year===t.year&&e.properties.numb===t.numb?e.element.classList.add("active"):e.element.classList.remove("active")}))},t.prototype._getPointIdByYear=function(t){var e=this._getPointByYear(t);if(e)return e&&String(e.id)},t.prototype._addPoint=function(t){var e=this;Object(o.a)(t).then((function(t){var r=t.features.length>1&&Object(a.arrayUnique)(t.features.map((function(t){return t.properties.numb}))),n=r&&r.length>1;t.features.forEach((function(t,r){var i=t&&t.geometry&&t.geometry.type;"MultiPoint"===i?t.geometry.coordinates.forEach((function(r){e._addMarkerToMap(r,t.properties,n)})):"Point"===i&&e._addMarkerToMap(t.geometry.coordinates,t.properties,n)}))}))},t.prototype._addMarkerToMap=function(t,e,r){var a=this,o=this.app.webMap.mapAdapter.map;if(o){var p=document.createElement("div"),s=void 0;if(this.app.controls.yearsStatPanelControl){var c=this.app.controls.yearsStatPanelControl.yearStat;s=c&&c.year===e.year&&c.numb===e.numb}p.className="map-marker"+(s?" active":"");var u=document.createElement("div");u.className="map-marker--inner",u.innerHTML=r?'<div class="map-marker__label">'+e.numb+"</div>":"",p.appendChild(u);var l=Object(n.a)("EPSG:3857").inverse(t),f=new i.Marker(p),d={marker:f,element:p,properties:e};this._markers.push(d),f.setLngLat(l),f.addTo(o),p.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),a._setMarkerActive(d,e)}))}},t.prototype._setMarkerActive=function(t,e){var r=this.app.controls.yearsStatPanelControl;if(r&&r.yearStats){var n=r.yearStats.find((function(t){return t.year===e.year&&t.numb===e.numb}));n&&(r.updateYearStat(n),r.unBlock(),r.show())}},t.prototype._getPointByYear=function(t){return this._pointsConfig.find((function(e){return e.year===t}))},t.prototype._processPointsMeta=function(t){return t.map((function(t){var e=t.resource,r=e.display_name,n=r.match("(\\d{4})*$");return{name:r,year:n.slice(1).map((function(t){return Number(t)}))[0],id:e.id}}))},t}()},289:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(522);var n,i=r(24),a=r(11),o=r(70),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.app=e,n.oldNgwMvtApi=!0,n.emitter=new i.EventEmitter,n.events=new a.Events(n.emitter),n.app.webMap.onLoad().then((function(){return n._registerMapboxImages()})),n}return p(e,t),e.prototype.addLayers=function(t,e){return this._createTimeLayers(t,e)},e.prototype._registerMapboxImages=function(){var t=this,e=this.app.webMap.mapAdapter.map;e&&e.loadImage("images/city.png",(function(r,n){e.addImage("city",n),t.emitter.emit("load-images")}))},e.prototype._createTimeLayers=function(t,e){var r=this,n=e;return[this.events.onLoad("load-images").then((function(){return r.app.webMap.addLayer("MVT",{url:t,id:e,order:r.order,paint:{"text-color":"rgba(255, 255, 255, 1)","text-halo-color":"rgba(49, 67, 90, .9)","text-halo-width":1},layout:{"icon-image":"city","icon-allow-overlap":!0,"icon-optional":!0,"text-field":["to-string",["get","toponym"]],"text-anchor":"top","text-size":10,"text-font":["Open Sans Semibold"],"text-variable-anchor":["top"],"text-radial-offset":.95,"text-line-height":1.1,"text-letter-spacing":.06,"text-padding":0,"text-justify":"auto"},type:"point",nativeOptions:{type:"symbol"},nativePaint:!0,sourceLayer:n}).then((function(t){return t}))}))]},e}(o.a)},290:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n,i=r(70),a=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.oldNgwMvtApi=!0,e}return a(e,t),e.prototype.addLayers=function(t,e){var r=this.groupLayer?this.groupLayer.opacity:1,n=o({"line-opacity":r,"line-opacity-transition":{duration:0},"line-width":2},this._getLinePaint()),i=e;return[this.app.webMap.addLayer("MVT",{url:t,id:e,order:this.order,paint:n,type:"line",sourceLayer:i,nativePaint:!0,visibility:!0})]},e.prototype._getLineTypes=function(){var t={},e=this.app.options.lineColorLegend,r=e&&e.lines;return r&&r&&r.forEach((function(e){e[3].forEach((function(r){var n=e[1];e[3].forEach((function(e){var r="string"==typeof n?n:n.color,i="string"!=typeof n&&n.width||1;t[Number(e)]={color:r,width:i}}))}))})),t},e.prototype._getLinePaint=function(){var t=["match",["get","linetype"]],e=this._getLineTypes();return Object.entries(e).forEach((function(e){var r=e[0],n=e[1];t.push(Number(r)),t.push(n.color)})),t.push("#000000"),{"line-color":t}},e}(i.a)},301:function(t,e,r){"use strict";r.r(e);r(302),r(303),r(236);var n=r(274),i=r(56),a=r(88),o=r(291),p=r.n(o),s=r(292),c=r.n(s),u=r(293),l=r.n(u),f=r(294),d=r.n(f),h=r(295),y=r.n(h),m=(r(523),new n.a({baseUrl:i.baseUrl,target:"map",fromYear:850,timeStops:[{toYear:1462,name:"principalities"}],currentYear:1462,animationDelay:100,animationStep:1,bounds:[2,27,203,82],minZoom:3,periods:p.a,yearsStat:c.a,areaStat:l.a,principalities01:d.a,principalities02:y.a,version:a.version,lineColor:i.lineColor,lineColorLegend:i.lineColorLegend}));m.emitter.on("build",(function(){var t=document.getElementsByClassName("noUi-marker-large");t.length&&[t[0],t[t.length-1]].forEach((function(t){t.style.display="none"}))})),window.app=m,window.version=a.version},63:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a}));var n=r(11);function i(t){return Object(n.numberWithSpaces)(Math.round(t))+" км²"}function a(t){n.Clipboard.copy(t)}},70:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(t,e){this.app=t,this.opacity=1,this.simplification=8,this.selectOnLayerClick=!1,this.oldNgwMvtApi=!1,Object.assign(this,e)}return Object.defineProperty(t.prototype,"groupLayer",{get:function(){return this.app.timeMap&&this.app.timeMap.getTimeGroup(this.name)},enumerable:!1,configurable:!0}),t}()}},[[524,7,10,14,11,8,16,13,18,9,15,17,12,5,2,0,1,6,3]]]);