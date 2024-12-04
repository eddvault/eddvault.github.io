var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 *  © 2000-2012 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/jQueryMisc.js"],function(){window.BrowserSupport={getBrowser:function(D){for(var A=0;A<D.length;A++){var B=D[A].string;var C=D[A].prop;this.versionSearchString=D[A].versionSearch||D[A].identity;if(B){if(B.indexOf(D[A].subString)!=-1){return D[A]}}else{if(C){if(navigator.userAgent){if(navigator.userAgent.indexOf(D[A].identity)!=-1){return D[A]}}else{return D[A]}}}}return null},getVersion:function(A){var B=new RegExp(this.versionSearchString+"/? ?([0-9]+(.?[0-9]+)*)");var C=A.match(B);if(!C){return null}return C[1].split(".")},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome",min:[8,0],link:"https://web.archive.org/web/20120413142049/http://www.google.com/chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version",min:[4,0],link:"https://web.archive.org/web/20120413142049/http://www.apple.com/safari/"},{prop:window.opera,identity:"Opera Mini",versionSearch:"Version",min:[10,50],link:"https://web.archive.org/web/20120413142049/http://www.opera.com/"},{prop:window.opera,identity:"Opera",versionSearch:"Version",min:[11,50],link:"https://web.archive.org/web/20120413142049/http://www.opera.com/"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox",min:[3,6],link:"https://web.archive.org/web/20120413142049/http://getfirefox.com"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE",min:[8,0],link:"https://web.archive.org/web/20120413142049/http://microsoft.com/ie"}],enforce:function(){var C=this.getBrowser(this.dataBrowser);var B=this.getVersion(navigator.userAgent);if(!C||!B){return }var A=undefined;$.each(C.min,function(D,E){if(A===undefined&&B[D]){if(B[D]<E){A=false}if(B[D]>E){A=true}}});if(A===false||(A===undefined&&C.min.length>B.length)){this.showBanner(C.link)}},showBanner:function(A){$("#overhead-collect").before('<div style="background:url(http://st.deviantart.net/misc/updatebrowser_ylw_bg.png) repeat-x;width:100%;height:10px;line-height:10px;text-align:center;position:absolute;top:-1px;z-index:1000;font-family:verdana;font-size:10px;color:#3c3838;padding:10px 0px;text-shadow:#fff 1px 1px;">Please <a href="'+A+'" style="color:#1965B6;">upgrade your browser</a> to access deviantART</div>')}};BrowserSupport.enforce();if(window.DWait){DWait.run("jms/pages/browser_support.js")}});DWait.count();

}
/*
     FILE ARCHIVED ON 14:20:49 Apr 13, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:42:26 Dec 04, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.546
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 13.358
  LoadShardBlock: 120.732 (3)
  PetaboxLoader3.datanode: 134.429 (4)
  load_resource: 121.468
  PetaboxLoader3.resolve: 79.993
*/