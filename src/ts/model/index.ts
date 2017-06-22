/*
 * Author: Daisuke Takayama
 */
const APModel = require('@atomic-package/common').Model;

// store
import {
  Target,
  Trigger,
} from '../store/';

/**
 * ScrollSpy Model Class
 * @public
 * @param option
 **/
export class Model {

  constructor(
    public targetList: Target[],
    public trigger: Trigger
  ) {
    this.setTriggerCallBack();
    this.setTriggerTargetId();
  }

  /**
   * Static Function
   **/
  public static fromData(data: any): Model {
    return new Model(
      data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
      data.trigger ? Trigger.fromData(data) : null
    );
  }

  private setTriggerTargetId() {
    //this.trigger.setTargetId(this.targetList);
  }

  private setTriggerCallBack(): void {
//      this.trigger.view.toggle((triggerView) => {
//        this.toggleContents(trigger);
//      }, true);
  }

  private toggleContents(trigger: Trigger): void {
    for(let i: number = 0; i < this.targetList.length; i++) {
      this.targetList[i].toggle(trigger);
    }
  }
}

export default Model;
