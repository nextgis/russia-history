(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var a=r(23),o=r(74),n=function(t,e,r,a){return new(r||(r=Promise))(function(o,n){function i(t){try{u(a.next(t))}catch(t){n(t)}}function s(t){try{u(a.throw(t))}catch(t){n(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}u((a=a.apply(t,e||[])).next())})},i=function(t,e){var r,a,o,n,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(o=2&n[0]?a.return:n[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,a=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){i.label=n[1];break}if(6===n[0]&&i.label<o[1]){i.label=o[1],o=n;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(n);break}o[2]&&i.ops.pop(),i.trys.pop();continue}n=e.call(t,i)}catch(t){n=[6,t],a=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},s=function(){function t(t,e){var r=this;this.webMap=t,this.options=e,this.opacity=.8,this._timeLayers={},this._layersLoaded={},this._onDataLoadEvents=[],this._onLayerClickMem={},t.mapAdapter.emitter.on("data-loaded",function(t){return r._onData(t)}),t.mapAdapter.emitter.on("data-error",function(t){return r._onData(t)})}return t.prototype.updateLayer=function(t){var e=this.currentLayerId;this.currentLayerId=t,this.switchLayer(e,t)},t.prototype.updateLayersColor=function(){var t=this.webMap.mapAdapter.map;if(t)for(var e in this._layersLoaded)-1!==e.indexOf("-bound")?t.setPaintProperty(e,"line-color",this.options.getFillColor({darken:.5})):t.setPaintProperty(e,"fill-color",this.options.getFillColor())},t.prototype.pushDataLoadEvent=function(t){this._onDataLoadEvents.push(t)},t.prototype.fitToFilter=function(t,e,r){var a=this.webMap.mapAdapter.map;if(a){var o=a.querySourceFeatures(r,{filter:t,sourceLayer:e});this._fitToFeatures(o)}},t.prototype.switchLayer=function(t,e){return n(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return t&&o.b.remove("id"),this._removePopup(),e&&t!==e?[4,this._showLayer(e)]:[3,2];case 1:r.sent(),this._addLayerListeners(e),t&&(this._removeLayerListeners(t),this._setLayerOpacity(e,0)),r.label=2;case 2:return[2]}})})},t.prototype._setLayerOpacity=function(t,e){var r=this;this._forEachTimeLayer(t,function(t){return r.webMap.setLayerOpacity(t,e)})},t.prototype._removePopup=function(){this._popup&&(this._popup.remove(),this._popup=void 0)},t.prototype._isCurrentDataLayer=function(t){return this._timeLayers[this.currentLayerId].some(function(e){return e.layer&&e.layer.some(function(e){return e===t})})},t.prototype._onData=function(t){var e=t.target,r=this._layersLoaded[e],a=this._isCurrentDataLayer(t.target);!r&&this._isHistoryLayer(t.target)&&a&&(this._layersLoaded[e]=!0,this._onSourceIsLoaded())},t.prototype._onLayerClick=function(t,e,r){var o=this.webMap.mapAdapter.map,n=t.point;if(o){var i=o.queryRenderedFeatures([[n.x-2.5,n.y-2.5],[n.x+2.5,n.y+2.5]],{layers:[e]})[0].properties;if(i&&i.status&&i.status<6){var s=this.options.createPopupContent(i);this._removePopup(),this._popup=(new a.Popup).setLngLat(t.lngLat).setDOMContent(s).addTo(o)}if(i&&this.options.filterIdField){var u=i[this.options.filterIdField],p=this.webMap.getLayer(r);p.select&&p.select([[this.options.filterIdField,"eq",Number(u)]])}}},t.prototype._removeLayerListeners=function(t){var e=this.webMap.mapAdapter.map,r=this._onLayerClickMem[t];if(r&&e)for(var a in r){var o=r[a];e.off(a,o)}this._removePopup()},t.prototype._addLayerListeners=function(t){var e=this,r=this.webMap.mapAdapter.map;r&&this._forEachDataLayer(t,function(a){var o=function(r){return e._onLayerClick(r,a,t)};r.on("click",a,o),r.on("mouseenter",a,function(){return r.getCanvas().style.cursor="pointer"}),r.on("mouseleave",a,function(){return r.getCanvas().style.cursor=""}),e._onLayerClickMem[a]=e._onLayerClickMem[a]||{},e._onLayerClickMem[a].click=o,e._onLayerClickMem[a].mouseenter=o,e._onLayerClickMem[a].mouseleave=o})},t.prototype._isHistoryLayer=function(t){return!this.webMap.isBaseLayer(t)},t.prototype._isAllDataLayerLoaded=function(t){var e=this,r=this._timeLayers[t];if(r)return r.every(function(t){return t.layer&&t.layer.some(function(t){return e._layersLoaded[t]})})},t.prototype._forEachTimeLayer=function(t,e){var r=this._timeLayers[t];r&&r.forEach(function(t){return e(t)})},t.prototype._forEachDataLayer=function(t,e){this._forEachTimeLayer(t,function(t){return t.layer&&t.layer.forEach(function(t){return e(t)})})},t.prototype._onSourceIsLoaded=function(){if(this._isAllDataLayerLoaded(this.currentLayerId)){this._setLayerOpacity(this.currentLayerId,this.opacity),this._hideNotCurrentLayers();for(var t=0;t<this._onDataLoadEvents.length;t++){(0,this._onDataLoadEvents[t])()}this._onDataLoadEvents=[]}},t.prototype._hideNotCurrentLayers=function(){var t=this;this.webMap.getLayers().forEach(function(e){t.webMap.isBaseLayer(e)||t.webMap.isLayerVisible(e)&&(t._timeLayers[t.currentLayerId].some(function(t){return t.id===e})||t._hideLayer(e))})},t.prototype._addLayer=function(t,e){return n(this,void 0,Promise,function(){var r,a,n,s,u,p,c,y,h,f=this;return i(this,function(i){switch(i.label){case 0:r=this.options.addLayers(t,e),this._timeLayers[e]=[],n=0,s=r,i.label=1;case 1:return n<s.length?[4,s[n]]:[3,4];case 2:u=i.sent(),a||(a=u),this._timeLayers[e].push(u),i.label=3;case 3:return n++,[3,1];case 4:return p=o.b.get("id"),c=p&&p.split(",").map(function(t){return Number(t)}),y=a&&a.layer&&a.layer[0],h=this.options.filterIdField,c&&y&&h&&this._onDataLoadEvents.push(function(){a&&a.select&&a.select([[h,"in",c]]),f.fitToFilter(["in",h].concat(c),e,y)}),[2,this._timeLayers[e]]}})})},t.prototype._toggleLayer=function(t,e){var r=this;this._forEachDataLayer(t,function(t){r._layersLoaded[t]=!1}),e?this._showLayer(t):this._forEachTimeLayer(t,function(t){return r.webMap.removeLayer(t)})},t.prototype._hideLayer=function(t){this._toggleLayer(t,!1)},t.prototype._showLayer=function(t){var e=this,r=function(){e._forEachTimeLayer(t,function(t){return e.webMap.toggleLayer(t,!0)})};if(this.webMap.getLayer(t))return Promise.resolve(r());var a=this.options.baseUrl+"/api/resource/"+t+"/{z}/{x}/{y}.mvt";return this._addLayer(a,t).then(function(){return r()})},t.prototype._fitToFeatures=function(t){var e=new a.LngLatBounds,r=function(t){2===t.length?e.extend(t):t.forEach(function(t){r(t)})};t.forEach(function(t){r(t.geometry.coordinates)}),this.webMap.mapAdapter.map&&this.webMap.mapAdapter.map.fitBounds(e,{padding:20})},t}()}}]);