/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;

import Target from './Target';

/**
 * ScrollSpy View Class
 * @public
 * @param option
 **/
export class View {
  /**
   * Static Function
   **/
  static fetchElements(callback): void {
    document.addEventListener("DOMContentLoaded", () => {
      callback({
        triggerList: this.createTrigger(),
        targetList: this.createTargetView()
      });
    });
  }

  public static createTrigger() {
    if(document.querySelectorAll('[data-ap-scrollspy]')) {
      //
    }
  }

  public static createTargetView() {
    let targetList = [],
        targetViewList = [];

    // とりあえず [data-ap-scrollspy]のみ取得
    targetList.push(document.querySelectorAll('[data-ap-scrollspy]'));

    targetList.forEach((nodeList: NodeList) => {
      for (let i: number = 0; i < nodeList.length; i++) {
        targetViewList.push(Target.fromData(nodeList[i]));
      }
    });

    return targetViewList;
  }
}

export default View;
