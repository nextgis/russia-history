(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{67:function(t,e,r){"use strict";var a=function(t){return new u(t).output()},i=1,s=/\s/,n=/[A-Za-z]/,o=/[A-Za-z84]/,d=/[,\]]/,l=/[\d\.E\-\+]/;function u(t){if("string"!=typeof t)throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=i}function c(t,e,r){Array.isArray(e)&&(r.unshift(e),e=null);var a=e?{}:t,i=r.reduce(function(t,e){return h(e,t),t},a);e&&(t[e]=i)}function h(t,e){if(Array.isArray(t)){var r,a=t.shift();if("PARAMETER"===a&&(a=t.shift()),1===t.length)return Array.isArray(t[0])?(e[a]={},void h(t[0],e[a])):void(e[a]=t[0]);if(t.length)if("TOWGS84"!==a)switch(Array.isArray(a)||(e[a]={}),a){case"UNIT":case"PRIMEM":case"VERT_DATUM":return e[a]={name:t[0].toLowerCase(),convert:t[1]},void(3===t.length&&h(t[2],e[a]));case"SPHEROID":case"ELLIPSOID":return e[a]={name:t[0],a:t[1],rf:t[2]},void(4===t.length&&h(t[3],e[a]));case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":return t[0]=["name",t[0]],void c(e,a,t);default:for(r=-1;++r<t.length;)if(!Array.isArray(t[r]))return h(t,e[a]);return c(e,a,t)}else e[a]=t;else e[a]=!0}else e[t]=!0}u.prototype.readCharicter=function(){var t=this.text[this.place++];if(4!==this.state)for(;s.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case i:return this.neutral(t);case 2:return this.keyword(t);case 4:return this.quoted(t);case 5:return this.afterquote(t);case 3:return this.number(t);case-1:return}},u.prototype.afterquote=function(t){if('"'===t)return this.word+='"',void(this.state=4);if(d.test(t))return this.word=this.word.trim(),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in afterquote yet, index '+this.place)},u.prototype.afterItem=function(t){return","===t?(null!==this.word&&this.currentObject.push(this.word),this.word=null,void(this.state=i)):"]"===t?(this.level--,null!==this.word&&(this.currentObject.push(this.word),this.word=null),this.state=i,this.currentObject=this.stack.pop(),void(this.currentObject||(this.state=-1))):void 0},u.prototype.number=function(t){if(!l.test(t)){if(d.test(t))return this.word=parseFloat(this.word),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in number yet, index '+this.place)}this.word+=t},u.prototype.quoted=function(t){'"'!==t?this.word+=t:this.state=5},u.prototype.keyword=function(t){if(o.test(t))this.word+=t;else{if("["===t){var e=[];return e.push(this.word),this.level++,null===this.root?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,void(this.state=i)}if(!d.test(t))throw new Error("havn't handled \""+t+'" in keyword yet, index '+this.place);this.afterItem(t)}},u.prototype.neutral=function(t){if(n.test(t))return this.word=t,void(this.state=2);if('"'===t)return this.word="",void(this.state=4);if(l.test(t))return this.word=t,void(this.state=3);if(!d.test(t))throw new Error("havn't handled \""+t+'" in neutral yet, index '+this.place);this.afterItem(t)},u.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(-1===this.state)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};var _=.017453292519943295;function f(t){return t*_}e.a=function(t){var e=a(t),r=e.shift(),i=e.shift();e.unshift(["name",i]),e.unshift(["type",r]);var s={};return h(e,s),function(t){"GEOGCS"===t.type?t.projName="longlat":"LOCAL_CS"===t.type?(t.projName="identity",t.local=!0):"object"==typeof t.PROJECTION?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),"metre"===t.units&&(t.units="meter"),t.UNIT.convert&&("GEOGCS"===t.type?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var e=t.GEOGCS;function r(e){return e*(t.to_meter||1)}"GEOGCS"===t.type&&(e=t),e&&(e.DATUM?t.datumCode=e.DATUM.name.toLowerCase():t.datumCode=e.name.toLowerCase(),"d_"===t.datumCode.slice(0,2)&&(t.datumCode=t.datumCode.slice(2)),"new_zealand_geodetic_datum_1949"!==t.datumCode&&"new_zealand_1949"!==t.datumCode||(t.datumCode="nzgd49"),"wgs_1984"===t.datumCode&&("Mercator_Auxiliary_Sphere"===t.PROJECTION&&(t.sphere=!0),t.datumCode="wgs84"),"_ferro"===t.datumCode.slice(-6)&&(t.datumCode=t.datumCode.slice(0,-6)),"_jakarta"===t.datumCode.slice(-8)&&(t.datumCode=t.datumCode.slice(0,-8)),~t.datumCode.indexOf("belge")&&(t.datumCode="rnb72"),e.DATUM&&e.DATUM.SPHEROID&&(t.ellps=e.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===t.ellps.toLowerCase().slice(0,13)&&(t.ellps="intl"),t.a=e.DATUM.SPHEROID.a,t.rf=parseFloat(e.DATUM.SPHEROID.rf,10)),e.DATUM&&e.DATUM.TOWGS84&&(t.datum_params=e.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),"ch1903+"===t.datumCode&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",f],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",f],["x0","false_easting",r],["y0","false_northing",r],["long0","central_meridian",f],["lat0","latitude_of_origin",f],["lat0","standard_parallel_1",f],["lat1","standard_parallel_1",f],["lat2","standard_parallel_2",f],["azimuth","Azimuth"],["alpha","azimuth",f],["srsCode","name"]].forEach(function(e){return r=t,i=(a=e)[0],s=a[1],void(!(i in r)&&s in r&&(r[i]=r[s],3===a.length&&(r[i]=a[2](r[i]))));var r,a,i,s}),t.long0||!t.longc||"Albers_Conic_Equal_Area"!==t.projName&&"Lambert_Azimuthal_Equal_Area"!==t.projName||(t.long0=t.longc),t.lat_ts||!t.lat1||"Stereographic_South_Pole"!==t.projName&&"Polar Stereographic (variant B)"!==t.projName||(t.lat0=f(t.lat1>0?90:-90),t.lat_ts=t.lat1)}(s),s}}}]);