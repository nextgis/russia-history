(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{201:function(t,e,r){"use strict";r(425);var n=r(92),i=r(200),o=r(182),a=r(183),s=r(184),p=r(25),l=r(187),c=r(123),u=r(24),d=r(96),h=r.n(d),f=r(199),_=r(48),m=r(49),y=r(190),v=r(191),g=r(192),b=(r(446),function(t,e,r,n){return new(r||(r=Promise))(function(i,o){function a(t){try{p(n.next(t))}catch(t){o(t)}}function s(t){try{p(n.throw(t))}catch(t){o(t)}}function p(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,s)}p((n=n.apply(t,e||[])).next())})}),C=function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},P=function(){function t(t){var e=this;this.app=t,this.isMobile=!1,this._installedControls=[],this._mobileTogglePanels=[],this._openPanels=[],this._eventBindings={onMapClick:function(){return null}},this._mobSizeConst={height:700,width:650},this._togglerEvents=[],this._eventBindings.onMapClick=function(){return e._onMapClick()},this.checkMobile(),this.initControls(),this._updateTimeSlider(),this._updateMapEvents(),this._addEventsListeners()}return t.prototype.updateControls=function(){var t=this;this.removeControls();var e=this.app.webMap.getContainer();e&&(this.isMobile?(this._hideAllPanels(),e.classList.add("mobile"),this._addMobileControls(),this._addPanelToggleListeners()):(this._mobileTogglePanels.forEach(function(e){-1!==t._openPanels.indexOf(e)&&e.show()}),this._removePanelToggleListener(),e.classList.remove("mobile"),this._addFullSizeControls()))},t.prototype.removeControls=function(){var t=this;this._installedControls.forEach(function(e){t.app.webMap.removeControl(e)}),this._installedControls=[]},t.prototype.initControls=function(){return b(this,void 0,void 0,function(){var t=this;return C(this,function(e){return this.periodsPanelControl=new v.a({webMap:this.app.webMap}),this.yearsStatPanelControl=new g.a({webMap:this.app.webMap}),this.legendPanel=new y.a({colors:this.app.options.lineColorLegend}),this.legendPanel.emitter.on("change",function(e){return t.app.updateLayersColor()}),this._socialLinksPanel=Object(m.d)(),this._switchersPanel=Object(m.e)(this),this._homeBtnPanel=Object(m.c)(this),this._zoomControl=this.app.webMap.getControl("ZOOM",{zoomInTitle:"Приблизить",zoomOutTitle:"Отдалить"}),this._attributions=this.app.webMap.getControl("ATTRIBUTION"),this._mobileTogglePanels=[this.periodsPanelControl,this.yearsStatPanelControl,this.legendPanel],this._mobileTogglePanels.forEach(function(t){return t.show()}),[2]})})},t.prototype._addControl=function(t,e,r){return b(this,void 0,void 0,function(){var n;return C(this,function(i){switch(i.label){case 0:return[4,this.app.webMap.addControl(t,e,r)];case 1:return(n=i.sent())&&this._installedControls.push(n),[2]}})})},t.prototype._addFullSizeControls=function(){return b(this,void 0,void 0,function(){return C(this,function(t){switch(t.label){case 0:return[4,this._addControl(this.legendPanel,"top-left")];case 1:return t.sent(),[4,this._addControl(this._switchersPanel,"top-right")];case 2:return t.sent(),[4,this._addControl(this.periodsPanelControl,"top-right")];case 3:return t.sent(),[4,this._addControl(this.yearsStatPanelControl,"top-right")];case 4:return t.sent(),[4,this._addControl(this._attributions,"bottom-left")];case 5:return t.sent(),[4,this._addControl(this._socialLinksPanel,"bottom-left")];case 6:return t.sent(),[4,this._addControl(this._homeBtnPanel,"bottom-left")];case 7:return t.sent(),[4,this._addControl(this._zoomControl,"bottom-left")];case 8:return t.sent(),this._manualControlMove(),[2]}})})},t.prototype._addMobileControls=function(){return b(this,void 0,void 0,function(){return C(this,function(t){switch(t.label){case 0:return[4,this._addControl(this._switchersPanel,"top-left")];case 1:return t.sent(),[4,this._addControl(this.legendPanel,"bottom-right")];case 2:return t.sent(),[4,this._addControl(this.yearsStatPanelControl,"bottom-right")];case 3:return t.sent(),[4,this._addControl(this.periodsPanelControl,"bottom-right")];case 4:return t.sent(),[4,this._addControl(this._zoomControl,"top-left")];case 5:return t.sent(),[4,this._addControl(this._homeBtnPanel,"top-left")];case 6:return t.sent(),[4,this._addControl(this._attributions,"bottom-left")];case 7:return t.sent(),[4,this._addControl(this._socialLinksPanel,"bottom-left")];case 8:return t.sent(),this._manualControlMove(),[2]}})})},t.prototype._manualControlMove=function(){var t=this.app.webMap.getContainer();if(t){var e=t.querySelector(".mapboxgl-ctrl.mapboxgl-ctrl-attrib");e&&e.parentNode&&(e.parentNode.removeChild(e),t.appendChild(e))}},t.prototype.checkMobile=function(){return this.isMobile=window.innerWidth<=this._mobSizeConst.width||window.innerHeight<=this._mobSizeConst.height,this.isMobile},t.prototype._updateMapEvents=function(){this.isMobile?this._addMapClickEvent():this._removeMapClickEvent()},t.prototype._updateTimeSlider=function(){var t=document.querySelectorAll(".noUi-marker.noUi-marker-horizontal.noUi-marker-normal"),e=Array.from(t),r=document.querySelectorAll(".noUi-value.noUi-value-horizontal.noUi-value-large");e=e.concat([r[1],r[r.length-2]]),window.innerWidth<=this._mobSizeConst.width?e.forEach(function(t){t.style.visibility="hidden"}):e.forEach(function(t){t.style.visibility=""})},t.prototype._onPanelToggle=function(t){this._removePanelToggleListener();var e=t.isHide;this._hideAllPanels(),e||t.show(),this._addPanelToggleListeners()},t.prototype._addPanelToggleListeners=function(){var t=this;this._removePanelToggleListener(),this._togglerEvents=[],this._mobileTogglePanels.forEach(function(e){var r=function(){return t._onPanelToggle(e)};t._togglerEvents.push([e,r]),e.emitter.on("toggle",r)})},t.prototype._removePanelToggleListener=function(){var t=this;this._mobileTogglePanels.forEach(function(e){var r=t._togglerEvents.find(function(t){return t[0]===e});r&&e.emitter.removeListener("toggle",r[1])})},t.prototype._onMapClick=function(){this.isMobile&&this._hideAllPanels()},t.prototype._onWindowResize=function(){var t=this.isMobile;this.checkMobile(),t!==this.isMobile&&this.updateControls(),this._updateTimeSlider(),this._updateMapEvents()},t.prototype._addEventsListeners=function(){var t=this;window.addEventListener("resize",function(){return t._onWindowResize()},!1)},t.prototype._hideAllPanels=function(){var t=this;this._openPanels=[],this._mobileTogglePanels.forEach(function(e){e.isHide||t._openPanels.push(e),e.hide()})},t.prototype._addMapClickEvent=function(){this.app.webMap.emitter.on("click",this._eventBindings.onMapClick)},t.prototype._removeMapClickEvent=function(){this.app.webMap.emitter.removeListener("click",this._eventBindings.onMapClick)},t}(),w=r(193);r.d(e,"a",function(){return Y});var M=function(){return(M=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Y=function(){function t(t){this.options={target:"#app"},this.urlParams=new a.default,this.emitter=new u.EventEmitter,this._minYear=0,this._maxYear=0,this._layersConfig=[],this._pointsConfig=[],this._markers=[],this.options=M({},this.options,t);var e=this.urlParams.get("year");e&&(this.options.currentYear=parseInt(e,10));var r=this.options,n=r.fromYear,i=r.currentYear;n&&i&&i<n&&(this.options.currentYear=n),this.options.currentYear&&(this.currentYear=this.options.currentYear),this.createWebMap(),this._buildApp()}return t.prototype.createWebMap=function(){var t=this,e=M({},this.options),r=new n.default({mapAdapter:new i.a,starterKits:[new o.default]});return r.create(e).then(function(){t.timeMap=new w.a(t.webMap,{baseUrl:t.options.baseUrl,getFillColor:function(e){return t._getFillColor(e)},createPopupContent:function(e){return t._createPopupContent(e)},addLayers:function(e,r){return t._createTimeLayers(e,r)}}),r.addBaseLayer("QMS",{id:"baselayer",qmsId:2550,visibility:!0})}),this.webMap=r,r},t.prototype.updateByYear=function(t,e){var r=this._getLayerIdByYear(t,e);r&&this.updateLayer(r),this.updateDataByYear(t)},t.prototype.updateDataByYear=function(t){var e=this._getPointIdByYear(t);this.updatePoint(e);var r=this._findAreaStatByYear(t);this._updatePeriodBlockByYear(t,r),this._updateYearStatBlockByYear(t,r),this.urlParams.set("year",String(t))},t.prototype.updateLayer=function(t){this.timeMap.updateLayer(t)},t.prototype.updatePoint=function(t){t!==this.currentPointId&&(this.currentPointId&&(this._markers.forEach(function(t){t.marker.remove()}),this._markers=[]),this.currentPointId=t,t&&this._addPoint(t))},t.prototype.updateLayersColor=function(){this.timeMap.updateLayersColor()},t.prototype._buildApp=function(){var t=this;Object(l.a)(function(e){t._layersConfig=t._processLayersMeta(e),!t.currentYear&&t._minYear&&(t.currentYear=t._minYear),t._layersConfig.sort(function(t,e){return t.from<e.from?-1:1}),t.slider=t._createSlider(),t._createHeader(),t._createAffiliatedLogos(),t.controls=new P(t),t.controls.updateControls(),t.webMap.onMapLoad(function(){t.updateByYear(t.currentYear)}),t.emitter.emit("build"),t._addEventsListeners()}),Object(c.b)().then(function(e){t._pointsConfig=t._processPointsMeta(e);var r=t._getPointIdByYear(t.currentYear);r&&t.updatePoint(r)})},t.prototype._getTimeStop=function(t){var e=this.options.timeStops.find(function(e){return t<e.toYear});return e?e.name:""},t.prototype._createSlider=function(){var t=this,e=new s.a({type:"range",min:this._minYear,max:this._maxYear,step:1,animationStep:this.options.animationStep||1,value:this.currentYear,animationDelay:this.options.animationDelay||100,stepReady:function(e,r,n){t._stepReady(e,r,n)}});e.emitter.on("change",function(e){e!==t.currentYear&&(t.currentYear=e,t.updateByYear(e))});var r=this.webMap.mapAdapter.getContainer();return r&&r.appendChild(e.onAdd(this.webMap)),e},t.prototype._createHeader=function(){var t=document.createElement("div");t.className="font-effect-shadow-multiple app-header";var e=document.createElement("span");e.innerHTML="Границы России "+this._minYear+"-"+this._maxYear+" гг.",t.appendChild(e),t.appendChild(Object(m.a)(this));var r=this.webMap.mapAdapter.getContainer();return r&&r.appendChild(t),t},t.prototype._createAffiliatedLogos=function(){var t=document.createElement("div");t.className="app-affiliated-logos",t.appendChild(Object(m.b)(this));var e=this.webMap.mapAdapter.getContainer();return e&&e.appendChild(t),t},t.prototype._updatePeriodBlockByYear=function(t,e){var r=this._findPeriodByYear(t);r&&this.controls.periodsPanelControl&&this.controls.periodsPanelControl.updatePeriod(r,e)},t.prototype._findPeriodByYear=function(t){return(this.options.periods||[]).find(function(e){var r=t>=e.years_from;return r&&e.years_to&&(r=t<=e.years_to),r})},t.prototype._updateYearStatBlockByYear=function(t,e){if(this.controls.yearsStatPanelControl){var r=this._findYearStatsByYear(t);this.controls.yearsStatPanelControl.updateYearStats(r,e)}},t.prototype._findYearInDateStr=function(t){var e=/(\d{4})/.exec(t);if(e)return Number(e[0])},t.prototype._findAreaStatByYear=function(t){if(this.options.areaStat)return this.options.areaStat.find(function(e){return e.year===t})},t.prototype._findYearStatsByYear=function(t){return t=Number(t),(this.options.yearsStat||[]).filter(function(e){return t===e.year})},t.prototype._stepReady=function(t,e,r){var n=this,i=this._getLayerByYear(t,r);if(i||(i=this._getNextLayer(t,r)),i){var o=t,a=function(){n.currentYear=o,e(o)};this.timeMap.currentLayerId!==String(i.id)?(this.timeMap.pushDataLoadEvent(a),this.updateLayer(String(i.id))):a(),this.updateDataByYear(o)}else this._minYear&&this._maxYear&&e(r?this._minYear:this._maxYear)},t.prototype._createTimeLayers=function(t,e){var r={"fill-opacity":this.timeMap.opacity,"fill-opacity-transition":{duration:0},"fill-color":this._getFillColor()},n={"line-opacity":this.timeMap.opacity,"line-opacity-transition":{duration:0},"line-width":1,"line-color":this._getFillColor({darken:.5})},i=e;return[this.webMap.addLayer("MVT",{url:t,id:e,paint:r,type:"fill",nativePaint:!0,labelField:"name",sourceLayer:i}),this.webMap.addLayer("MVT",{url:t,id:e+"-bound",paint:n,type:"line",sourceLayer:i,nativePaint:!0})]},t.prototype._addPoint=function(t){var e=this;Object(c.a)(t).then(function(t){var r=t.features.length>1&&t.features.map(function(t){return t.properties.numb}).filter(_.b),n=r&&r.length>1;t.features.forEach(function(t,r){var i=t&&t.geometry&&t.geometry.type;"MultiPoint"===i?t.geometry.coordinates.forEach(function(r){e._addMarkerToMap(r,t.properties,n)}):"Point"===i&&e._addMarkerToMap(t.geometry.coordinates,t.properties,n)})})},t.prototype._addMarkerToMap=function(t,e,r){var n=this,i=this.webMap.mapAdapter.map;if(i){var o=document.createElement("div"),a=void 0;if(this.controls.yearsStatPanelControl){var s=this.controls.yearsStatPanelControl.yearStat;a=s&&s.year===e.year&&s.numb===e.numb}o.className="map-marker"+(a?" active":"");var l=document.createElement("div");l.className="map-marker--inner",l.innerHTML=r?'<div class="map-marker__label">'+e.numb+"</div>":"",o.appendChild(l);var c=Object(f.a)("EPSG:3857").inverse(t),u=new p.Marker(o),d={marker:u,element:o,properties:e};this._markers.push(d),u.setLngLat(c),u.addTo(i),o.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),n._setMarkerActive(d,e)})}},t.prototype._setMarkerActive=function(t,e){var r=this.controls.yearsStatPanelControl;if(r&&r.yearStats){var n=r.yearStats.find(function(t){return t.year===e.year&&t.numb===e.numb});n&&(r.updateYearStat(n),r.unBlock(),r.show())}},t.prototype._updateActiveMarker=function(t){this._markers.forEach(function(e){e.properties.year===t.year&&e.properties.numb===t.numb?e.element.classList.add("active"):e.element.classList.remove("active")})},t.prototype._getFillColor=function(t){void 0===t&&(t={});var e=this.options,r=e.lineColorLegend,n=e.lineColor;if(n&&r){r.forEach(function(t){t[3].forEach(function(e){var r=n.find(function(t){return t[0]===e});r&&(r[1]=t[1])})});var i=n.reduce(function(e,r){var n=r[0],i=r[1],o=h()(i);return n&&e.push(n),t.darken&&o.darken(t.darken),e.push(o.hex()),e},[]);return["match",["get","status"]].concat(i)}},t.prototype._getLayerByYear=function(t,e){var r=this._layersConfig.filter(function(e){return t>=e.from&&t<=e.to});return r[r.length-1]},t.prototype._getLayerIdByYear=function(t,e){var r=this._getLayerByYear(t,e);if(r)return r&&String(r.id)},t.prototype._getPointByYear=function(t){return this._pointsConfig.find(function(e){return e.year===t})},t.prototype._getPointIdByYear=function(t){var e=this._getPointByYear(t);if(e)return e&&String(e.id)},t.prototype._getNextLayer=function(t,e){var r=this._getLayerByYear(t);if(!r)return e?this._layersConfig.slice().reverse().find(function(e){return e.to<=t}):this._layersConfig.find(function(e){return e.from>=t});if(String(r.id)!==this.timeMap.currentLayerId)return r;var n=this._layersConfig.indexOf(r);return-1!==n?this._layersConfig[e?n-1:n+1]:void 0},t.prototype._processLayersMeta=function(t){var e=this,r=[];return t.forEach(function(t){var n=t.resource,i=n.display_name,o=i.match("from_(\\d{3,4})_to_(\\d{3,4}).*$");if(o){var a=o.slice(1).map(function(t){return Number(t)}),s=a[0],p=a[1];!(e.options.fromYear&&s<e.options.fromYear)&&(e._minYear=(e._minYear>s?s:e._minYear)||s,e._maxYear=(e._maxYear<p?p:e._maxYear)||p,r.push({name:i,from:s,to:p,id:n.id}))}}),r},t.prototype._processPointsMeta=function(t){return t.map(function(t){var e=t.resource,r=e.display_name,n=r.match("(\\d{4})*$");return{name:r,year:n.slice(1).map(function(t){return Number(t)})[0],id:e.id}})},t.prototype._createPopupContent=function(t){return this._createPropBlock([],t)},t.prototype._formatDateStr=function(t){return t.split("-").reverse().join(".")},t.prototype._createPropElement=function(t,e){var r=document.createElement("div");return r.className="popup__propertyblock",r.innerHTML='<div class="popup__property--value'+(e?" "+e:"")+'" >'+t+"</div >",r},t.prototype._createPropBlock=function(t,e,r){var n=this;void 0===r&&(r="name");var i=document.createElement("div"),o=t.slice(),a=M({},e);return"principalities"===this._getTimeStop(this.currentYear)&&this._addPrincipalitiesFields(o,a),a[r]&&i.appendChild(this._createPropElement("<h2>"+a[r]+"</h2>","prop header")),o.forEach(function(t){var e=a[t.field];if(e){var r=document.createElement("div");r.className="popup__propertyblock",r.innerHTML="",e&&i.appendChild(n._createPropElement(e,""))}}),e.status&&(i.innerHTML+=this._createPropStatusHtml(e)),this._addPropShowDateClickEvent(i),i},t.prototype._findPrincipalities01ByYear=function(t){var e=this;return(this.options.principalities01||[]).find(function(r){var n=e._findYearInDateStr(r.upperdat),i=e._findYearInDateStr(r.lwdate);return!(!n||!i)&&(t>=n&&i<=t)})},t.prototype._findPrincipalities02ByYear=function(t){var e=this;return(this.options.principalities02||[]).find(function(r){var n=e._findYearInDateStr(r.years_to),i=e._findYearInDateStr(r.years_from);return!(!n||!i)&&(t>=n&&i<=t)})},t.prototype._addPrincipalitiesFields=function(t,e){var r=function(r,n,i){t.push({name:i||r,field:r}),e[r]=n},n=(this._findPrincipalities01ByYear(this.currentYear),this._findPrincipalities02ByYear(this.currentYear));n&&(r("ruler",n.ruler),r("name",n.name))},t.prototype._createPropStatusHtml=function(t){var e="",r=this.options.statusAliases&&this.options.statusAliases[t.status];if(r&&(e+='\n              <div class="popup__property--value status"><p>'+r+"</p></div>\n            "),t.status>0&&t.status<6){var n=this._formatDateStr(t.lwdate),i=this._formatDateStr(t.updtrl||t.upperdat);n&&i&&(e+='\n              <div class="popup__property--value dates">\n                <span>\n                  <span class="show-date">'+n+'</span> -\n                  <span class="show-date">'+i+"</span>\n                </span>\n              </div>\n            ")}return t.Area&&(e+='\n              <div class="popup__property--value area">\n                <span>\n                  '+Object(_.a)(t.Area/1e6)+"\n                </span>\n              </div>\n            "),e},t.prototype._addPropShowDateClickEvent=function(t){for(var e=this,r=t.querySelectorAll(".show-date"),n=function(t){var n=r[t];n.addEventListener("click",function(){var t=e._findYearInDateStr(n.innerHTML);t&&(e.updateByYear(t),e.slider&&e.slider._slider&&e.slider._slider.set(t))})},i=0;i<r.length;i++)n(i)},t.prototype._addEventsListeners=function(){var t=this;this.controls.yearsStatPanelControl&&this.controls.yearsStatPanelControl.emitter.on("update",function(e){var r=e.yearStat;t._updateActiveMarker(r)})},t}()},425:function(t,e){},446:function(t,e){},73:function(t){t.exports=JSON.parse('{"name":"russia-history","version":"3.0.0","description":"","main":"src/app.js","scripts":{"start":"webpack-dev-server --progress --hot --open","build":"webpack --progress","watch":"rimraf ./dist && npm run build -- --watch","dev":"rimraf ./dist && npm run build","data":"node ./scripts/generator.js","prod":"rimraf ./dist && npm run build -- --mode=production"},"author":"","license":"ISC","dependencies":{"@nextgis/dialog":"^0.17.0","@nextgis/mapboxgl-map-adapter":"^0.17.0","@nextgis/ngw-connector":"^0.17.0","@nextgis/qms-kit":"^0.17.0","@nextgis/url-runtime-params":"^0.17.0","@nextgis/webmap":"^0.17.0","@types/color":"^3.0.0","@types/node":"^12.6.9","@types/proj4":"^2.5.0","color":"^3.1.2","core-js":"^3.1.4","dialog-polyfill":"^0.5.0","mapbox-gl":"^1.2.0","nouislider":"^14.0.2","proj4":"^2.5.0","regenerator":"^0.14.2","reset-css":"^4.0.1","wnumb":"^1.1.0"},"devDependencies":{"@nextgis/eslint-config":"^0.17.0","@types/geojson":"^7946.0.7","@types/mapbox-gl":"^0.54.1","@types/nouislider":"^9.0.5","autoprefixer":"^9.6.1","babel-loader":"^8.0.6","compression-webpack-plugin":"^3.0.0","css-loader":"^3.1.0","csv-loader":"^3.0.2","eslint":"^6.1.0","eslint-loader":"^2.2.1","extract-text-webpack-plugin":"^4.0.0-beta.0","favicons-webpack-plugin":"0.0.9","file-loader":"^4.1.0","fork-ts-checker-webpack-plugin":"^1.5.0","html-webpack-plugin":"^3.2.0","image-webpack-loader":"^5.0.0","node-sass":"^4.12.0","papaparse":"^5.0.1","postcss-loader":"^3.0.0","precss":"^4.0.0","sass-loader":"^7.1.0","style-loader":"^0.23.1","ts-loader":"^6.0.4","typescript":"^3.5.3","url-loader":"^2.1.0","webpack":"^4.39.1","webpack-cli":"^3.3.6","webpack-dev-server":"^3.7.2"}}')}}]);