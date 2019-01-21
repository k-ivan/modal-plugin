/*! Glory-modal plugin v1.1.0 | MIT License | https://github.com/k-ivan/glory-modal */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Gmodal",[],e):"object"==typeof exports?exports.Gmodal=e():t.Gmodal=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){i(1),t.exports=i(2)},function(t,e,i){},function(t,e,i){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e);var a={emulateTransitionEnd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,i=!1,n=this.transitionEnd();t.addEventListener(n,function t(e){this.removeEventListener(e.type,t),i=!0});setTimeout(function(){if(!i){var e=document.createEvent("HTMLEvents");e.initEvent(n,!1,!1),t.dispatchEvent(e)}},e)},transitionEnd:function(){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd"},e=document.documentElement;for(var i in t)if(void 0!==e.style[i])return t[i];return!1},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=window.getComputedStyle(t)["transition-duration"],i=window.getComputedStyle(t)["transition-delay"],n=parseFloat(e),o=parseFloat(i);return n||o?(e=e.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(e)+parseFloat(i))):0},customTrigger:function(t,e){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"CustomEvent"in window&&"function"==typeof window.CustomEvent?i=new CustomEvent(t,{detail:n({},o)}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n({},o)),e.dispatchEvent(i)},onceTransitionEnd:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.addEventListener(e,function e(o){o.target===t&&(t.removeEventListener(o.type,e,n),i.call(this,o))},n)}};function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=".gmodal__dialog",d=".gmodal__content",c='[data-gmodal="dismiss"]',h="gmodal-open",u="is-show",_="has-animate",m="gmodal-backdrop",f={stickySelectors:[],animation:!0,backdrop:!0,closeBackdrop:!0,keyboard:!0},p=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!!e&&(this._modal="string"==typeof e?document.querySelector(e):e,this._modal instanceof Element&&(this._modal.instance?this._modal.instance:(this._modal.instance=this,this._modal.tabIndex="-1",this._isOpen=!1,this._isTransitiong=!1,this._settings=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}({},f,i),this._transitionEndEvent=a.transitionEnd(),void this._init())))}var e,i,n;return e=t,(i=[{key:"_init",value:function(){this._body=document.body,this._modalDialog=this._modal.querySelector(l),this._modalContent=this._modal.querySelector(d),this._modalDismiss=Array.prototype.slice.call(this._modal.querySelectorAll(c)),this._scrollbarWidth=0,this._settings.animation&&this._modal.classList.add(_),this._focusable(),this._attachEvents()}},{key:"_attachEvents",value:function(){var t=this;this._closeHandler=function(e){e.preventDefault(),e.stopPropagation(),t.close()},this._clickModal=function(e){e.preventDefault(),t._modalContent.contains(e.target)||t.close()},this._modalDismiss.forEach(function(e){e.addEventListener("click",t._closeHandler)}),this._settings.closeBackdrop&&this._modal.addEventListener("click",this._clickModal),this._settings.keyboard&&(this._keyHandler=this._keyHandler.bind(this),this._modal.addEventListener("keydown",this._keyHandler))}},{key:"_dettachEvents",value:function(){var t=this;this._settings.closeBackdrop&&this._modal.removeEventListener("click",this._clickModal),this._modalDismiss.forEach(function(e){e.removeEventListener("click",t._closeHandler)}),this._settings.keyboard&&this._modal.removeEventListener("keydown",this._keyHandler)}},{key:"_focusable",value:function(){this._focusableEls=Array.prototype.slice.call(this._modal.querySelectorAll('a[href],\n        area[href],\n        input:not([disabled]):not([type="hidden"]):not([aria-hidden]),\n        select:not([disabled]):not([aria-hidden]),\n        textarea:not([disabled]):not([aria-hidden]),\n        button:not([disabled]):not([aria-hidden]),\n        iframe,\n        object,\n        embed,\n        [contenteditable],\n        [tabindex]:not([tabindex^="-"])')),this._focusableElFirst=this._focusableEls[0],this._focusableElLast=this._focusableEls[this._focusableEls.length-1]}},{key:"_keyHandler",value:function(t){var e=this;switch(t.which){case 9:if(0===this._focusableEls.length){t.preventDefault();break}t.shiftKey?document.activeElement!==e._focusableElFirst&&document.activeElement!==e._modal||(t.preventDefault(),e._focusableElLast.focus()):document.activeElement===e._focusableElLast&&(t.preventDefault(),e._focusableElFirst.focus());break;case 27:t.stopPropagation(),this.close()}}},{key:"_checkScrollbar",value:function(){return window.innerWidth>document.documentElement.clientWidth}},{key:"_getScrollbarWidth",value:function(){var t=document.createElement("div");t.style.cssText="\n      width: 100px;\n      height: 100px;\n      overflow: scroll;\n      position: absolute;\n      top: -9999px;\n    ",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}},{key:"_createBackdrop",value:function(){var t=document.createElement("div");return t.className=m,this._settings.animation&&(t.className+=" ".concat(_)),document.body.appendChild(t),t}},{key:"_setScrollOffset",value:function(){var t=this;if(this._hasScrollbar=this._checkScrollbar(),this._body.classList.add(h),this._hasScrollbar){this._scrollbarWidth=this._getScrollbarWidth();var e=this._body.style.paddingRight,i=parseFloat(getComputedStyle(this._body).paddingRight);e&&this._body.setAttribute("data-gmodal-padding",e),this._body.style.paddingRight="".concat(i+this._scrollbarWidth,"px"),this._settings.stickySelectors.forEach(function(e){t._stickySelectors=Array.prototype.slice.call(document.querySelectorAll(e)),t._stickySelectors.forEach(function(e){var i=e.style.marginRight,n=parseFloat(getComputedStyle(e).marginRight);i&&e.setAttribute("data-gmodal-margin",i),e.style.marginRight="".concat(n+t._scrollbarWidth,"px")})})}}},{key:"_resetScrollOffset",value:function(){this._body.classList.remove(h),this._hasScrollbar&&(this._body.style.paddingRight=this._body.getAttribute("data-gmodal-padding")||"",this._body.removeAttribute("data-gmodal-padding"),this._stickySelectors&&Array.isArray(this._stickySelectors)&&this._stickySelectors.forEach(function(t){t.style.marginRight=t.getAttribute("data-gmodal-margin")||"",t.removeAttribute("data-gmodal-margin")}))}},{key:"_adjustModal",value:function(){this._scrollbarWidth=this._getScrollbarWidth(),this._modal.style.overflow="hidden",this._modal.style.marginRight="".concat(this._scrollbarWidth,"px")}},{key:"_resetAdjustModal",value:function(){this._modal.style.overflow="",this._modal.style.marginRight=""}},{key:"_hideBackdrop",value:function(){var t=this;if(this._backdrop)if(this._backdrop.classList.remove(u),this._settings.animation){var e=a.getTransitionDurationFromElement(this._backdrop);a.onceTransitionEnd(this._backdrop,this._transitionEndEvent,function(e){t._backdrop.parentNode&&t._backdrop.parentNode.removeChild(t._backdrop)}),a.emulateTransitionEnd(this._backdrop,e)}else this._backdrop.parentNode&&this._backdrop.parentNode.removeChild(this._backdrop)}},{key:"_hideModal",value:function(){this._resetScrollOffset(),this._modal.style.display="",this._isTransitiong=!1,this._focusableSave&&this._focusableSave.focus(),a.customTrigger("gmodal:close",this._modal)}},{key:"open",value:function(){var t=this;if(this._modal&&!this._isOpen&&!this._isTransitiong)if(this._isOpen=!0,this._focusableSave=document.activeElement,this._setScrollOffset(),this._settings.backdrop&&(this._backdrop=this._createBackdrop(this)),this._modal.style.display="block",this._isTransitiong=!0,this._modal.scrollTop=0,setTimeout(function(){t._backdrop&&t._backdrop.classList.add(u),t._modal.classList.add(u)},20),this._settings.animation){this._adjustModal();var e=a.getTransitionDurationFromElement(this._modalDialog);a.onceTransitionEnd(this._modalDialog,this._transitionEndEvent,function(){t._isTransitiong=!1,t._resetAdjustModal(),t._modal.focus(),a.customTrigger("gmodal:open",t._modal)}),a.emulateTransitionEnd(this._modalDialog,e)}else this._isTransitiong=!1,this._modal.focus(),a.customTrigger("gmodal:open",this._modal)}},{key:"close",value:function(){if(this._modal&&this._isOpen&&!this._isTransitiong)if(this._modal.classList.remove(u),this._hideBackdrop(),this._isOpen=!1,this._isTransitiong=!0,this._settings.animation){var t=a.getTransitionDurationFromElement(this._modalDialog);a.onceTransitionEnd(this._modalDialog,this._transitionEndEvent,this._hideModal.bind(this)),a.emulateTransitionEnd(this._modalDialog,t)}else this._hideModal()}},{key:"destroy",value:function(){var t=this;this._modal&&(this._backdrop&&this._backdrop.parentNode&&this._backdrop.parentNode.removeChild(this._backdrop),this._hideModal(),this._modal.classList.remove(_,u),this._dettachEvents(),delete this._modal.instance,Object.keys(this).forEach(function(e){delete t[e]}))}},{key:"element",get:function(){return this._modal}}])&&r(e.prototype,i),n&&r(e,n),t}();e.default=p}]).default});