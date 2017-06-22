/*
 * Author: Daisuke Takayama
 */
'use strict';
let e = eval, global: NodeJS.Global = e('this');

import ScrollSpy from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      scrollSpy: ScrollSpy
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = ScrollSpy;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.scrollSpy === 'undefined') {
    Object.assign(global.AP, { scrollSpy: new ScrollSpy });
  }
}
