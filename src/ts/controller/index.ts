/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';

/**
 * ScrollSpy Controller Class
 * @public
 * @param option
 **/
export class ScrollSpy {
    private model: Model;

    constructor() {
        View.fetchElements((data) => {
            this.model = Model.fromData(data);
        });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
        //this.trigger = Trigger.fromData(data);
    }

    public createTargets(data: any): void {
        //this.targetList.push(Target.fromData(data));
    }

    public scroll(data: any): void {
        //number, id, class
        //
    }

    public resetSelected(data: any) {

    }
}

export default ScrollSpy;
