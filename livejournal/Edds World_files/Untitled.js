/* >>> file start: js/front-bundled/dist/sanitizeHtml.js */
/*! For license information please see sanitizeHtml.js.LICENSE.txt */
(()=>{var e={7856:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:o}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;c||(c=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),s||(s=function(e,t){return new e(...t)});const u=_(Array.prototype.forEach),m=_(Array.prototype.pop),f=_(Array.prototype.push),p=_(String.prototype.toLowerCase),d=_(String.prototype.toString),h=_(String.prototype.match),g=_(String.prototype.replace),y=_(String.prototype.indexOf),T=_(String.prototype.trim),b=_(RegExp.prototype.test),E=(A=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(A,t)});var A;function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(e,t,r)}}function N(e,r,o){var i;o=null!==(i=o)&&void 0!==i?i:p,t&&t(e,null);let a=r.length;for(;a--;){let t=r[a];if("string"==typeof t){const e=o(t);e!==t&&(n(r)||(r[a]=e),t=e)}e[t]=!0}return e}function v(t){const n=l(null);for(const[r,o]of e(t))n[r]=o;return n}function S(e,t){for(;null!==e;){const n=o(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}const w=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),O=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),x=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),C=i(["#text"]),k=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),I=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),j=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),F=a(/^aria-[\-\w]+$/),B=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),W=a(/^(?:\w+script|data):/i),G=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=a(/^html$/i);var $=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:j,TMPLIT_EXPR:H,DATA_ATTR:z,ARIA_ATTR:F,IS_ALLOWED_URI:B,IS_SCRIPT_OR_DATA:W,ATTR_WHITESPACE:G,DOCTYPE_NAME:Y});const q=()=>"undefined"==typeof window?null:window;return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q();const r=e=>t(e);if(r.version="3.0.3",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;const o=n.document,a=o.currentScript;let{document:l}=n;const{DocumentFragment:c,HTMLTemplateElement:s,Node:A,Element:_,NodeFilter:U,NamedNodeMap:j=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:H,DOMParser:z,trustedTypes:F}=n,W=_.prototype,G=S(W,"cloneNode"),X=S(W,"nextSibling"),K=S(W,"childNodes"),V=S(W,"parentNode");if("function"==typeof s){const e=l.createElement("template");e.content&&e.content.ownerDocument&&(l=e.content.ownerDocument)}let J,Z="";const{implementation:Q,createNodeIterator:ee,createDocumentFragment:te,getElementsByTagName:ne}=l,{importNode:re}=o;let oe={};r.isSupported="function"==typeof e&&"function"==typeof V&&Q&&void 0!==Q.createHTMLDocument;const{MUSTACHE_EXPR:ie,ERB_EXPR:ae,TMPLIT_EXPR:le,DATA_ATTR:ce,ARIA_ATTR:se,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:me}=$;let{IS_ALLOWED_URI:fe}=$,pe=null;const de=N({},[...w,...O,...R,...L,...C]);let he=null;const ge=N({},[...k,...I,...M,...P]);let ye=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Te=null,be=null,Ee=!0,Ae=!0,_e=!1,Ne=!0,ve=!1,Se=!1,we=!1,Oe=!1,Re=!1,De=!1,Le=!1,xe=!0,Ce=!1,ke=!0,Ie=!1,Me={},Pe=null;const Ue=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let je=null;const He=N({},["audio","video","img","source","image","track"]);let ze=null;const Fe=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Be="http://www.w3.org/1998/Math/MathML",We="http://www.w3.org/2000/svg",Ge="http://www.w3.org/1999/xhtml";let Ye=Ge,$e=!1,qe=null;const Xe=N({},[Be,We,Ge],d);let Ke;const Ve=["application/xhtml+xml","text/html"];let Je,Ze=null;const Qe=l.createElement("form"),et=function(e){return e instanceof RegExp||e instanceof Function},tt=function(e){if(!Ze||Ze!==e){if(e&&"object"==typeof e||(e={}),e=v(e),Ke=Ke=-1===Ve.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Je="application/xhtml+xml"===Ke?d:p,pe="ALLOWED_TAGS"in e?N({},e.ALLOWED_TAGS,Je):de,he="ALLOWED_ATTR"in e?N({},e.ALLOWED_ATTR,Je):ge,qe="ALLOWED_NAMESPACES"in e?N({},e.ALLOWED_NAMESPACES,d):Xe,ze="ADD_URI_SAFE_ATTR"in e?N(v(Fe),e.ADD_URI_SAFE_ATTR,Je):Fe,je="ADD_DATA_URI_TAGS"in e?N(v(He),e.ADD_DATA_URI_TAGS,Je):He,Pe="FORBID_CONTENTS"in e?N({},e.FORBID_CONTENTS,Je):Ue,Te="FORBID_TAGS"in e?N({},e.FORBID_TAGS,Je):{},be="FORBID_ATTR"in e?N({},e.FORBID_ATTR,Je):{},Me="USE_PROFILES"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,Ae=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ne=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,ve=e.SAFE_FOR_TEMPLATES||!1,Se=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,De=e.RETURN_DOM_FRAGMENT||!1,Le=e.RETURN_TRUSTED_TYPE||!1,Oe=e.FORCE_BODY||!1,xe=!1!==e.SANITIZE_DOM,Ce=e.SANITIZE_NAMED_PROPS||!1,ke=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,fe=e.ALLOWED_URI_REGEXP||B,Ye=e.NAMESPACE||Ge,ye=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ye.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ye.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ye.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ve&&(Ae=!1),De&&(Re=!0),Me&&(pe=N({},[...C]),he=[],!0===Me.html&&(N(pe,w),N(he,k)),!0===Me.svg&&(N(pe,O),N(he,I),N(he,P)),!0===Me.svgFilters&&(N(pe,R),N(he,I),N(he,P)),!0===Me.mathMl&&(N(pe,L),N(he,M),N(he,P))),e.ADD_TAGS&&(pe===de&&(pe=v(pe)),N(pe,e.ADD_TAGS,Je)),e.ADD_ATTR&&(he===ge&&(he=v(he)),N(he,e.ADD_ATTR,Je)),e.ADD_URI_SAFE_ATTR&&N(ze,e.ADD_URI_SAFE_ATTR,Je),e.FORBID_CONTENTS&&(Pe===Ue&&(Pe=v(Pe)),N(Pe,e.FORBID_CONTENTS,Je)),ke&&(pe["#text"]=!0),Se&&N(pe,["html","head","body"]),pe.table&&(N(pe,["tbody"]),delete Te.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');J=e.TRUSTED_TYPES_POLICY,Z=J.createHTML("")}else void 0===J&&(J=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(F,a)),null!==J&&"string"==typeof Z&&(Z=J.createHTML(""));i&&i(e),Ze=e}},nt=N({},["mi","mo","mn","ms","mtext"]),rt=N({},["foreignobject","desc","title","annotation-xml"]),ot=N({},["title","style","font","a","script"]),it=N({},O);N(it,R),N(it,D);const at=N({},L);N(at,x);const lt=function(e){f(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},ct=function(e,t){try{f(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!he[e])if(Re||De)try{lt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},st=function(e){let t,n;if(Oe)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ke&&Ye===Ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const r=J?J.createHTML(e):e;if(Ye===Ge)try{t=(new z).parseFromString(r,Ke)}catch(e){}if(!t||!t.documentElement){t=Q.createDocument(Ye,"template",null);try{t.documentElement.innerHTML=$e?Z:r}catch(e){}}const o=t.body||t.documentElement;return e&&n&&o.insertBefore(l.createTextNode(n),o.childNodes[0]||null),Ye===Ge?ne.call(t,Se?"html":"body")[0]:Se?t.documentElement:o},ut=function(e){return ee.call(e.ownerDocument||e,e,U.SHOW_ELEMENT|U.SHOW_COMMENT|U.SHOW_TEXT,null,!1)},mt=function(e){return"object"==typeof A?e instanceof A:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ft=function(e,t,n){oe[e]&&u(oe[e],(e=>{e.call(r,t,n,Ze)}))},pt=function(e){let t;if(ft("beforeSanitizeElements",e,null),(n=e)instanceof H&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof j)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return lt(e),!0;var n;const o=Je(e.nodeName);if(ft("uponSanitizeElement",e,{tagName:o,allowedTags:pe}),e.hasChildNodes()&&!mt(e.firstElementChild)&&(!mt(e.content)||!mt(e.content.firstElementChild))&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return lt(e),!0;if(!pe[o]||Te[o]){if(!Te[o]&&ht(o)){if(ye.tagNameCheck instanceof RegExp&&b(ye.tagNameCheck,o))return!1;if(ye.tagNameCheck instanceof Function&&ye.tagNameCheck(o))return!1}if(ke&&!Pe[o]){const t=V(e)||e.parentNode,n=K(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r)t.insertBefore(G(n[r],!0),X(e))}return lt(e),!0}return e instanceof _&&!function(e){let t=V(e);t&&t.tagName||(t={namespaceURI:Ye,tagName:"template"});const n=p(e.tagName),r=p(t.tagName);return!!qe[e.namespaceURI]&&(e.namespaceURI===We?t.namespaceURI===Ge?"svg"===n:t.namespaceURI===Be?"svg"===n&&("annotation-xml"===r||nt[r]):Boolean(it[n]):e.namespaceURI===Be?t.namespaceURI===Ge?"math"===n:t.namespaceURI===We?"math"===n&&rt[r]:Boolean(at[n]):e.namespaceURI===Ge?!(t.namespaceURI===We&&!rt[r])&&!(t.namespaceURI===Be&&!nt[r])&&!at[n]&&(ot[n]||!it[n]):!("application/xhtml+xml"!==Ke||!qe[e.namespaceURI]))}(e)?(lt(e),!0):"noscript"!==o&&"noembed"!==o||!b(/<\/no(script|embed)/i,e.innerHTML)?(ve&&3===e.nodeType&&(t=e.textContent,t=g(t,ie," "),t=g(t,ae," "),t=g(t,le," "),e.textContent!==t&&(f(r.removed,{element:e.cloneNode()}),e.textContent=t)),ft("afterSanitizeElements",e,null),!1):(lt(e),!0)},dt=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in l||n in Qe))return!1;if(Ae&&!be[t]&&b(ce,t));else if(Ee&&b(se,t));else if(!he[t]||be[t]){if(!(ht(e)&&(ye.tagNameCheck instanceof RegExp&&b(ye.tagNameCheck,e)||ye.tagNameCheck instanceof Function&&ye.tagNameCheck(e))&&(ye.attributeNameCheck instanceof RegExp&&b(ye.attributeNameCheck,t)||ye.attributeNameCheck instanceof Function&&ye.attributeNameCheck(t))||"is"===t&&ye.allowCustomizedBuiltInElements&&(ye.tagNameCheck instanceof RegExp&&b(ye.tagNameCheck,n)||ye.tagNameCheck instanceof Function&&ye.tagNameCheck(n))))return!1}else if(ze[t]);else if(b(fe,g(n,me,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==y(n,"data:")||!je[e])if(_e&&!b(ue,g(n,me,"")));else if(n)return!1;return!0},ht=function(e){return e.indexOf("-")>0},gt=function(e){let t,n,o,i;ft("beforeSanitizeAttributes",e,null);const{attributes:a}=e;if(!a)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:he};for(i=a.length;i--;){t=a[i];const{name:c,namespaceURI:s}=t;if(n="value"===c?t.value:T(t.value),o=Je(c),l.attrName=o,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,ft("uponSanitizeAttribute",e,l),n=l.attrValue,l.forceKeepAttr)continue;if(ct(c,e),!l.keepAttr)continue;if(!Ne&&b(/\/>/i,n)){ct(c,e);continue}ve&&(n=g(n,ie," "),n=g(n,ae," "),n=g(n,le," "));const u=Je(e.nodeName);if(dt(u,o,n)){if(!Ce||"id"!==o&&"name"!==o||(ct(c,e),n="user-content-"+n),J&&"object"==typeof F&&"function"==typeof F.getAttributeType)if(s);else switch(F.getAttributeType(u,o)){case"TrustedHTML":n=J.createHTML(n);break;case"TrustedScriptURL":n=J.createScriptURL(n)}try{s?e.setAttributeNS(s,c,n):e.setAttribute(c,n),m(r.removed)}catch(e){}}}ft("afterSanitizeAttributes",e,null)},yt=function e(t){let n;const r=ut(t);for(ft("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ft("uponSanitizeShadowNode",n,null),pt(n)||(n.content instanceof c&&e(n.content),gt(n));ft("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t,n,i,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if($e=!e,$e&&(e="\x3c!--\x3e"),"string"!=typeof e&&!mt(e)){if("function"!=typeof e.toString)throw E("toString is not a function");if("string"!=typeof(e=e.toString()))throw E("dirty is not a string, aborting")}if(!r.isSupported)return e;if(we||tt(l),r.removed=[],"string"==typeof e&&(Ie=!1),Ie){if(e.nodeName){const t=Je(e.nodeName);if(!pe[t]||Te[t])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof A)t=st("\x3c!----\x3e"),n=t.ownerDocument.importNode(e,!0),1===n.nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!Re&&!ve&&!Se&&-1===e.indexOf("<"))return J&&Le?J.createHTML(e):e;if(t=st(e),!t)return Re?null:Le?Z:""}t&&Oe&&lt(t.firstChild);const s=ut(Ie?e:t);for(;i=s.nextNode();)pt(i)||(i.content instanceof c&&yt(i.content),gt(i));if(Ie)return e;if(Re){if(De)for(a=te.call(t.ownerDocument);t.firstChild;)a.appendChild(t.firstChild);else a=t;return(he.shadowroot||he.shadowrootmod)&&(a=re.call(o,a,!0)),a}let u=Se?t.outerHTML:t.innerHTML;return Se&&pe["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&b(Y,t.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+u),ve&&(u=g(u,ie," "),u=g(u,ae," "),u=g(u,le," ")),J&&Le?J.createHTML(u):u},r.setConfig=function(e){tt(e),we=!0},r.clearConfig=function(){Ze=null,we=!1},r.isValidAttribute=function(e,t,n){Ze||tt({});const r=Je(e),o=Je(t);return dt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(oe[e]=oe[e]||[],f(oe[e],t))},r.removeHook=function(e){if(oe[e])return m(oe[e])},r.removeHooks=function(e){oe[e]&&(oe[e]=[])},r.removeAllHooks=function(){oe={}},r}()}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(7856);function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}LJ.define("LJ.Util.sanitizeHtml");var a={ADD_TAGS:["iframe","lj"],ADD_ATTR:["allow","allowfullscreen","frameborder","scrolling","lj-screenable","target","allowtransparency","url","user","buttons","text","whoview","whovote","to","from"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:/^lj/,attributeNameCheck:null,allowCustomizedBuiltInElements:!0}};LJ.Util.sanitizeHtml=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof t)return console.warn("sanitizeHtml: ".concat(o(t)," is an invalid param type")),t;var l=r(r({},a),n),c=function(e){return e.replace(/<(lj[\w-]*)([^>]*)\/>/g,"<$1$2></$1>")}(t);return function(e){var t=e;return[[/<(lj [^>]*)>/g,/<\/lj\s*>/g],[/<(lj-like[^>]*)>/g,/<\/lj-like[^>]*>/g],[/<(lj-map[^>]*)>/g,/<\/lj-map[^>]*>/g]].forEach((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(n,r)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1];t=t.replace(a,"<$1/>").replace(l,"")})),t}(e.sanitize(c,l))}})()})();
/* <<< file end: js/front-bundled/dist/sanitizeHtml.js */

//# map link was there [sanitizeHtml.js.map]