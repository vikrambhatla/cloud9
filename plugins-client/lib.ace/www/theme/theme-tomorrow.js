define("ace/theme/tomorrow",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssClass="ace-tomorrow",b.cssText=".ace-tomorrow .ace_gutter {background: #f6f6f6;color: #4D4D4C}.ace-tomorrow .ace_print-margin {width: 1px;background: #f6f6f6}.ace-tomorrow .ace_scroller {background-color: #FFFFFF}.ace-tomorrow .ace_text-layer {color: #4D4D4C}.ace-tomorrow .ace_cursor {border-left: 2px solid #AEAFAD}.ace-tomorrow .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid #AEAFAD}.ace-tomorrow .ace_marker-layer .ace_selection {background: #D6D6D6}.ace-tomorrow.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;border-radius: 2px}.ace-tomorrow .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-tomorrow .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #D1D1D1}.ace-tomorrow .ace_marker-layer .ace_active-line {background: #EFEFEF}.ace-tomorrow .ace_gutter-active-line {background-color : #dcdcdc}.ace-tomorrow .ace_marker-layer .ace_selected-word {border: 1px solid #D6D6D6}.ace-tomorrow .ace_invisible {color: #D1D1D1}.ace-tomorrow .ace_keyword,.ace-tomorrow .ace_meta,.ace-tomorrow .ace_storage,.ace-tomorrow .ace_storage.ace_type,.ace-tomorrow .ace_support.ace_type {color: #8959A8}.ace-tomorrow .ace_keyword.ace_operator {color: #3E999F}.ace-tomorrow .ace_constant.ace_character,.ace-tomorrow .ace_constant.ace_language,.ace-tomorrow .ace_constant.ace_numeric,.ace-tomorrow .ace_keyword.ace_other.ace_unit,.ace-tomorrow .ace_support.ace_constant,.ace-tomorrow .ace_variable.ace_parameter {color: #F5871F}.ace-tomorrow .ace_constant.ace_other {color: #666969}.ace-tomorrow .ace_invalid {color: #FFFFFF;background-color: #C82829}.ace-tomorrow .ace_invalid.ace_deprecated {color: #FFFFFF;background-color: #8959A8}.ace-tomorrow .ace_fold {background-color: #4271AE;border-color: #4D4D4C}.ace-tomorrow .ace_entity.ace_name.ace_function,.ace-tomorrow .ace_support.ace_function,.ace-tomorrow .ace_variable {color: #4271AE}.ace-tomorrow .ace_support.ace_class,.ace-tomorrow .ace_support.ace_type {color: #C99E00}.ace-tomorrow .ace_markup.ace_heading,.ace-tomorrow .ace_string {color: #718C00}.ace-tomorrow .ace_entity.ace_name.ace_tag,.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow .ace_meta.ace_tag,.ace-tomorrow .ace_string.ace_regexp,.ace-tomorrow .ace_variable {color: #C82829}.ace-tomorrow .ace_comment {color: #8E908C}.ace-tomorrow .ace_markup.ace_underline {text-decoration: underline}.ace-tomorrow .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)}),define("node_modules/ace/build/src/theme-tomorrow.js",function(){}),define("ace/lib/dom",["require","exports","module"],function(a,b,c){var d="http://www.w3.org/1999/xhtml";b.createElement=function(a,b){return document.createElementNS?document.createElementNS(b||d,a):document.createElement(a)},b.setText=function(a,b){a.innerText!==undefined&&(a.innerText=b),a.textContent!==undefined&&(a.textContent=b)},b.hasCssClass=function(a,b){var c=a.className.split(/\s+/g);return c.indexOf(b)!==-1},b.addCssClass=function(a,c){b.hasCssClass(a,c)||(a.className+=" "+c)},b.removeCssClass=function(a,b){var c=a.className.split(/\s+/g);for(;;){var d=c.indexOf(b);if(d==-1)break;c.splice(d,1)}a.className=c.join(" ")},b.toggleCssClass=function(a,b){var c=a.className.split(/\s+/g),d=!0;for(;;){var e=c.indexOf(b);if(e==-1)break;d=!1,c.splice(e,1)}return d&&c.push(b),a.className=c.join(" "),d},b.setCssClass=function(a,c,d){d?b.addCssClass(a,c):b.removeCssClass(a,c)},b.hasCssString=function(a,b){var c=0,d;b=b||document;if(b.createStyleSheet&&(d=b.styleSheets)){while(c<d.length)if(d[c++].owningElement.id===a)return!0}else if(d=b.getElementsByTagName("style"))while(c<d.length)if(d[c++].id===a)return!0;return!1},b.importCssString=function(c,e,f){f=f||document;if(e&&b.hasCssString(e,f))return null;var g;if(f.createStyleSheet)g=f.createStyleSheet(),g.cssText=c,e&&(g.owningElement.id=e);else{g=f.createElementNS?f.createElementNS(d,"style"):f.createElement("style"),g.appendChild(f.createTextNode(c)),e&&(g.id=e);var h=f.getElementsByTagName("head")[0]||f.documentElement;h.appendChild(g)}},b.importCssStylsheet=function(a,c){if(c.createStyleSheet)c.createStyleSheet(a);else{var d=b.createElement("link");d.rel="stylesheet",d.href=a;var e=c.getElementsByTagName("head")[0]||c.documentElement;e.appendChild(d)}},b.getInnerWidth=function(a){return parseInt(b.computedStyle(a,"paddingLeft"),10)+parseInt(b.computedStyle(a,"paddingRight"),10)+a.clientWidth},b.getInnerHeight=function(a){return parseInt(b.computedStyle(a,"paddingTop"),10)+parseInt(b.computedStyle(a,"paddingBottom"),10)+a.clientHeight},window.pageYOffset!==undefined?(b.getPageScrollTop=function(){return window.pageYOffset},b.getPageScrollLeft=function(){return window.pageXOffset}):(b.getPageScrollTop=function(){return document.body.scrollTop},b.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?b.computedStyle=function(a,b){return b?(window.getComputedStyle(a,"")||{})[b]||"":window.getComputedStyle(a,"")||{}}:b.computedStyle=function(a,b){return b?a.currentStyle[b]:a.currentStyle},b.scrollbarWidth=function(a){var c=b.createElement("p");c.style.width="100%",c.style.minWidth="0px",c.style.height="200px";var d=b.createElement("div"),e=d.style;e.position="absolute",e.left="-10000px",e.overflow="hidden",e.width="200px",e.minWidth="0px",e.height="150px",d.appendChild(c);var f=a.body||a.documentElement;f.appendChild(d);var g=c.offsetWidth;e.overflow="scroll";var h=c.offsetWidth;return g==h&&(h=d.clientWidth),f.removeChild(d),g-h},b.setInnerHtml=function(a,b){var c=a.cloneNode(!1);return c.innerHTML=b,a.parentNode.replaceChild(c,a),c},b.setInnerText=function(a,b){var c=a.ownerDocument;c.body&&"textContent"in c.body?a.textContent=b:a.innerText=b},b.getInnerText=function(a){var b=a.ownerDocument;return b.body&&"textContent"in b.body?a.textContent:a.innerText||a.textContent||""},b.getParentWindow=function(a){return a.defaultView||a.parentWindow}})