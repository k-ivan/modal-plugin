export default {
  checkScrollbar() {
    return window.innerWidth > document.documentElement.clientWidth;
  },

  getScrollbarWidth() {
    // Create the measurement node
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = `
      width: 100px;
      height: 100px;
      overflow: scroll;
      position: absolute;
      top: -9999px;
    `;
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  },

  isVisible(el) {
    if (el.style.display === 'none') {
      return false;
    }
    const rect = el.getBoundingClientRect();
    return (rect && rect.width > 0 && rect.height > 0);
  },

  emulateTransitionEnd(el, duration = 150) {
    let called = false;
    const transitionEnd = this.transitionEnd();

    el.addEventListener(transitionEnd, function handler(e) {
      this.removeEventListener(e.type, handler);
      called = true;
    });
    const callback = function() {
      if (!called) {
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent(transitionEnd, false, false);
        el.dispatchEvent(evt);
      }
    };
    setTimeout(callback, duration);
  },

  transitionEnd() {
    let transitions = {
      transition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'mozTransitionEnd'
    };
    let root = document.documentElement;
    for (let name in transitions) {
      if (root.style[name] !== undefined) {
        return transitions[name];
      }
    }
    return false;
  },

  // from bootstrap modal util
  getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let transitionDuration = window.getComputedStyle(element)[
      'transition-duration'
    ];
    let transitionDelay = window.getComputedStyle(element)['transition-delay'];

    const floatTransitionDuration = parseFloat(transitionDuration);
    const floatTransitionDelay = parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];

    return (
      (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * 1000
    );
  },

  customTrigger(type, el, params = {}) {
    let evt;
    if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
      evt = new CustomEvent(type, {
        detail: {
          ...params
        }
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(type, true, true, {
        ...params
      });
    }

    el.dispatchEvent(evt);
  },

  onceTransitionEnd(el, evt, cb, useCapture = false) {
    const handler = function(e) {
      // Filter by the event's target to exclude children's events
      if (e.target === el) {
        el.removeEventListener(e.type, handler, useCapture);
        cb.call(this, e);
      }
    };
    el.addEventListener(evt, handler, useCapture);
  }
};
