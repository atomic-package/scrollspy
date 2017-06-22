import Target from './Target';

/**
 * ScrollSpy Trigger View Class
 * @public
 * @param option
 **/
let _created_scroll_spy_trigger_num: number  = 0;

export class Trigger {
  private toggleCallBackFunction: Function = () => {};

  constructor(
    public id: number,
    public option: any,
    public coordinate: number,
    public moveCoordinate: number
  ) {
    this.id = this.createTriggerId();
    //this.coordinate = this.getCoordinate(this.node);

    this.setEventListener();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
      0,
      data.dataset.apScrollspy ? data.dataset.apScrollspy : null,
      0,
      0
    );
  }

  /**
   * Private Function
   **/
  private createTriggerId(): number {
    return ++_created_scroll_spy_trigger_num;
  }

  private getCoordinate(node) {
    let rect = node.getBoundingClientRect();

    return rect.top + window.pageYOffset;
  }

  private setEventListener(): void {
    window.addEventListener('scroll', (e) => {
      e.preventDefault();

      this.toggle(this.toggleCallBackFunction);
    }, false);
  }

  /**
   * Public Function
   **/
  public toggle(fn?, isFirst?): void {
    this.toggleCallBackFunction = fn;

    if(!isFirst) {
      fn(this);
    }
  }
}

export default Trigger;