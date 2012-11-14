define("ace/theme/dreamweaver",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssClass="ace-dreamweaver",b.cssText='.ace-dreamweaver .ace_gutter {background: #e8e8e8;color: #333;}.ace-dreamweaver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-dreamweaver .ace_scroller {background-color: #FFFFFF;}.ace-dreamweaver .ace_fold {background-color: #757AD8;}.ace-dreamweaver .ace_text-layer {}.ace-dreamweaver .ace_cursor {border-left: 2px solid black;}.ace-dreamweaver .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid black;}.ace-dreamweaver .ace_invisible {color: rgb(191, 191, 191);}.ace-dreamweaver .ace_storage,.ace-dreamweaver .ace_keyword {color: blue;}.ace-dreamweaver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-dreamweaver .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-dreamweaver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-dreamweaver .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-dreamweaver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_support.ace_type,.ace-dreamweaver .ace_support.ace_class {color: #009;}.ace-dreamweaver .ace_support.ace_php_tag {color: #f00;}.ace-dreamweaver .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-dreamweaver .ace_string {color: #00F;}.ace-dreamweaver .ace_comment {color: rgb(76, 136, 107);}.ace-dreamweaver .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-dreamweaver .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-dreamweaver .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-dreamweaver .ace_variable {color: #06F}.ace-dreamweaver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-dreamweaver .ace_entity.ace_name.ace_function {color: #00F;}.ace-dreamweaver .ace_markup.ace_heading {color: rgb(12, 7, 255);}.ace-dreamweaver .ace_markup.ace_list {color:rgb(185, 6, 144);}.ace-dreamweaver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-dreamweaver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-dreamweaver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-dreamweaver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-dreamweaver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-dreamweaver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-dreamweaver .ace_meta.ace_tag {color:#009;}.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {color:#060;}.ace-dreamweaver .ace_meta.ace_tag.ace_form {color:#F90;}.ace-dreamweaver .ace_meta.ace_tag.ace_image {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_script {color:#900;}.ace-dreamweaver .ace_meta.ace_tag.ace_style {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_table {color:#099;}.ace-dreamweaver .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-dreamweaver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)}),define("node_modules/ace/build/src/theme-dreamweaver.js",function(){}),define("ace/lib/dom",["require","exports","module"],function(a,b,c){var d="http://www.w3.org/1999/xhtml";b.createElement=function(a,b){return document.createElementNS?document.createElementNS(b||d,a):document.createElement(a)},b.setText=function(a,b){a.innerText!==undefined&&(a.innerText=b),a.textContent!==undefined&&(a.textContent=b)},b.hasCssClass=function(a,b){var c=a.className.split(/\s+/g);return c.indexOf(b)!==-1},b.addCssClass=function(a,c){b.hasCssClass(a,c)||(a.className+=" "+c)},b.removeCssClass=function(a,b){var c=a.className.split(/\s+/g);for(;;){var d=c.indexOf(b);if(d==-1)break;c.splice(d,1)}a.className=c.join(" ")},b.toggleCssClass=function(a,b){var c=a.className.split(/\s+/g),d=!0;for(;;){var e=c.indexOf(b);if(e==-1)break;d=!1,c.splice(e,1)}return d&&c.push(b),a.className=c.join(" "),d},b.setCssClass=function(a,c,d){d?b.addCssClass(a,c):b.removeCssClass(a,c)},b.hasCssString=function(a,b){var c=0,d;b=b||document;if(b.createStyleSheet&&(d=b.styleSheets)){while(c<d.length)if(d[c++].owningElement.id===a)return!0}else if(d=b.getElementsByTagName("style"))while(c<d.length)if(d[c++].id===a)return!0;return!1},b.importCssString=function(c,e,f){f=f||document;if(e&&b.hasCssString(e,f))return null;var g;if(f.createStyleSheet)g=f.createStyleSheet(),g.cssText=c,e&&(g.owningElement.id=e);else{g=f.createElementNS?f.createElementNS(d,"style"):f.createElement("style"),g.appendChild(f.createTextNode(c)),e&&(g.id=e);var h=f.getElementsByTagName("head")[0]||f.documentElement;h.appendChild(g)}},b.importCssStylsheet=function(a,c){if(c.createStyleSheet)c.createStyleSheet(a);else{var d=b.createElement("link");d.rel="stylesheet",d.href=a;var e=c.getElementsByTagName("head")[0]||c.documentElement;e.appendChild(d)}},b.getInnerWidth=function(a){return parseInt(b.computedStyle(a,"paddingLeft"),10)+parseInt(b.computedStyle(a,"paddingRight"),10)+a.clientWidth},b.getInnerHeight=function(a){return parseInt(b.computedStyle(a,"paddingTop"),10)+parseInt(b.computedStyle(a,"paddingBottom"),10)+a.clientHeight},window.pageYOffset!==undefined?(b.getPageScrollTop=function(){return window.pageYOffset},b.getPageScrollLeft=function(){return window.pageXOffset}):(b.getPageScrollTop=function(){return document.body.scrollTop},b.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?b.computedStyle=function(a,b){return b?(window.getComputedStyle(a,"")||{})[b]||"":window.getComputedStyle(a,"")||{}}:b.computedStyle=function(a,b){return b?a.currentStyle[b]:a.currentStyle},b.scrollbarWidth=function(a){var c=b.createElement("p");c.style.width="100%",c.style.minWidth="0px",c.style.height="200px";var d=b.createElement("div"),e=d.style;e.position="absolute",e.left="-10000px",e.overflow="hidden",e.width="200px",e.minWidth="0px",e.height="150px",d.appendChild(c);var f=a.body||a.documentElement;f.appendChild(d);var g=c.offsetWidth;e.overflow="scroll";var h=c.offsetWidth;return g==h&&(h=d.clientWidth),f.removeChild(d),g-h},b.setInnerHtml=function(a,b){var c=a.cloneNode(!1);return c.innerHTML=b,a.parentNode.replaceChild(c,a),c},b.setInnerText=function(a,b){var c=a.ownerDocument;c.body&&"textContent"in c.body?a.textContent=b:a.innerText=b},b.getInnerText=function(a){var b=a.ownerDocument;return b.body&&"textContent"in b.body?a.textContent:a.innerText||a.textContent||""},b.getParentWindow=function(a){return a.defaultView||a.parentWindow}})