/*! Modal-plugin v1.0.0 | MIT License | https://github.com/k-ivan/modal-plugin */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Modal",[],e):"object"==typeof exports?exports.Modal=e():t.Modal=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){i(1),t.exports=i(2)},function(t,e,i){},function(t,e,i){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e);var s={emulateTransitionEnd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,i=!1,n=this.transitionEnd();t.addEventListener(n,function t(e){this.removeEventListener(e.type,t),i=!0});setTimeout(function(){if(!i){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!1),t.dispatchEvent(e)}},e)},transitionEnd:function(){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd"},e=document.documentElement;for(var i in t)if(void 0!==e.style[i])return t[i];return!1},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=window.getComputedStyle(t)["transition-duration"],i=window.getComputedStyle(t)["transition-delay"],n=parseFloat(e),o=parseFloat(i);return n||o?(e=e.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(e)+parseFloat(i))):0},customTrigger:function(t,e){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"CustomEvent"in window&&"function"==typeof window.CustomEvent?i=new CustomEvent(t,{detail:n({},o)}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n({},o)),e.dispatchEvent(i)},onceListener:function(t,e,i){t.addEventListener(e,function e(n){t.removeEventListener(n.type,e,!1),i.call(this,n)},!1)}};function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=".modal__dialog",c=".modal__content",d=".modal__close",h={backdrop:!0,animation:!0,stickySelectors:[],closeBackdrop:!0},u=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!!e&&("string"==typeof e&&(this.modal=document.querySelector(e)),this.modal instanceof HTMLElement&&(!this.modal.isActive&&(this.modal.isActive=!0,this.modal.tabIndex="-1",this.isOpen=!1,this.isTransitiong=!1,this.settings=a(h,i),this.transitionEndEvent=s.transitionEnd(),void this.init())))}var e,i,n;return e=t,(i=[{key:"init",value:function(){this.body=document.body,this.modalDialog=this.modal.querySelector(l),this.modalContent=this.modal.querySelector(c),this.modalClose=this.modal.querySelector(d),this.focusableEls=Array.prototype.slice.call(this.modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),this.focusableElFirst=this.focusableEls[0],this.focusableElLast=this.focusableEls[this.focusableEls.length-1],this.modal.focus(),this.scrollbarWidth=0,this.settings.animation&&this.modalDialog.classList.add("has-animate"),this._attachEvents()}},{key:"_attachEvents",value:function(){var t=this;this.closeHandler=function(e){t.close()},this.clickModal=function(e){e.preventDefault(),t.modalContent.contains(e.target)||t.close()},this.modalClose.addEventListener("click",this.closeHandler),this.modal.querySelector('[data-dismiss="modal"]').addEventListener("click",this.closeHandler),this.settings.closeBackdrop&&this.modal.addEventListener("click",this.clickModal),this.keyHandler=this._keyHandler.bind(this),this.modal.addEventListener("keydown",this.keyHandler)}},{key:"_dettachEvents",value:function(){this.settings.closeBackdrop&&this.modal.removeEventListener("click",this.clickModal),this.modalClose.removeEventListener("click",this.closeHandler),this.modal.removeEventListener("keydown",this.keyHandler),this.modal.querySelector('[data-dismiss="modal"]').removeEventListener("click",this.closeHandler)}},{key:"_keyHandler",value:function(t){var e=this;switch(t.which){case 9:if(0===this.focusableEls.length){t.preventDefault();break}t.shiftKey?document.activeElement===e.focusableElFirst&&(t.preventDefault(),e.focusableElLast.focus()):document.activeElement===e.focusableElLast&&(t.preventDefault(),e.focusableElFirst.focus());break;case 27:t.stopPropagation(),this.close()}}},{key:"_checkScrollbar",value:function(){return window.innerWidth>document.documentElement.clientWidth}},{key:"_getScrollbarWidth",value:function(){var t=document.createElement("div");t.style.cssText="\n    \twidth: 100px;\n      height: 100px;\n      overflow: scroll;\n      position: absolute;\n      top: -9999px;\n    ",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}},{key:"_createBackdrop",value:function(){var t=document.createElement("div");return t.className="modal-backdrop",this.settings.animation&&(t.className+=" has-animate"),document.body.appendChild(t),t}},{key:"_setScrollOffset",value:function(){var t=this;this.hasScrollbar=this._checkScrollbar(),this.body.classList.add("modal-open"),this.hasScrollbar&&(this.scrollbarWidth=this._getScrollbarWidth(),this.body.style["margin-right"]="".concat(this.scrollbarWidth,"px"),this.settings.stickySelectors.forEach(function(e){var i=document.querySelector(e);i&&(i.style["margin-right"]="".concat(t.scrollbarWidth,"px"))}))}},{key:"_resetScrollOffset",value:function(){this.body.classList.remove("modal-open"),this.hasScrollbar&&(this.body.style["margin-right"]="",this.settings.stickySelectors.forEach(function(t){var e=document.querySelector(t);e&&(e.style["margin-right"]="")}))}},{key:"_adjustModal",value:function(){this.scrollbarWidth=this._getScrollbarWidth(),this.modal.classList.add("is-animating"),this.modal.style.marginRight="".concat(this.scrollbarWidth,"px")}},{key:"_resetAdjustModal",value:function(){this.modal.classList.remove("is-animating"),this.modal.style.marginRight=""}},{key:"open",value:function(){var t=this;if(!this.isOpen&&!this.isTransitiong)if(this.isOpen=!0,this._setScrollOffset(),this.settings.backdrop&&(this.backdrop=this._createBackdrop(this)),this.modal.classList.add("is-open"),this.isTransitiong=!0,this.modal.scrollTop=0,setTimeout(function(){t.backdrop&&t.backdrop.classList.add("is-show"),t.modalDialog.classList.add("is-show")},20),this.transitionEndEvent&&this.settings.animation){this._adjustModal();var e=s.getTransitionDurationFromElement(this.modalDialog);s.onceListener(this.modalDialog,this.transitionEndEvent,function(e){t.modal.focus(),t._resetAdjustModal(),t.isTransitiong=!1,s.customTrigger("showModal",t.modal)}),s.emulateTransitionEnd(this.modalDialog,e)}else this.modal.focus(),this.isTransitiong=!1,s.customTrigger("showModal",this.modal)}},{key:"close",value:function(t){if(this.isOpen&&!this.isTransitiong)if(this.modalDialog.classList.remove("is-show"),this.hideBackdrop(),this.isOpen=!1,this.isTransitiong=!0,this.settings.animation&&this.transitionEndEvent){this._adjustModal();var e=s.getTransitionDurationFromElement(this.modalDialog);s.onceListener(this.modalDialog,this.transitionEndEvent,this.hideModal.bind(this)),s.emulateTransitionEnd(this.modalDialog,e)}else this.hideModal()}},{key:"hideBackdrop",value:function(){var t=this;if(this.backdrop)if(this.backdrop.classList.remove("is-show"),this.settings.animation&&this.transitionEndEvent){var e=s.getTransitionDurationFromElement(this.backdrop);s.onceListener(this.modalDialog,this.transitionEndEvent,function(e){t.backdrop.parentNode&&t.backdrop.parentNode.removeChild(t.backdrop)}),s.emulateTransitionEnd(this.backdrop,e)}else this.backdrop.parentNode&&this.backdrop.parentNode.removeChild(this.backdrop)}},{key:"hideModal",value:function(){this._resetScrollOffset(),this._resetAdjustModal(),this.modal.classList.remove("is-open"),this.isTransitiong=!1,s.customTrigger("hideModal",this.modal)}},{key:"unobserve",value:function(){var t=this;this.modal&&(this._dettachEvents(),delete this.modal.isActive,Object.keys(this).forEach(function(e){delete t[e]}))}},{key:"element",get:function(){return this.modal}}])&&r(e.prototype,i),n&&r(e,n),t}();e.default=u}]).default});