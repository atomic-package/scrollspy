/**
 * ScrollSpy Target View Class
 * @public
 * @param option
 **/
let _created_scroll_spy_target_num: number = 0;

export class Target {
  constructor(
    public id: number,
    public triggerId: number,
    public idName: string,
    public className: string,
    public coordinate: number,
    public node: any
  ) {
    this.id = this.createContentsId();
    if(this.node && this.coordinate == 0) {
      this.coordinate = this.getCoordinate(this.node);
    }
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Target {
    return new Target(
      0,
      data.triggerId ? data.triggerId : null,
      data.node && data.node.id ? data.node.id : null,
      data.node && data.node.className ? data.node.className : null,
      data.coordinate ? data.coordinate : 0,
      data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createContentsId(): number {
    return ++_created_scroll_spy_target_num;
  }

  private getCoordinate(node) {
    var rect = node.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }

  /**
   * Public Function
   **/
  public getItemNode(node) {
    //return this.getChildren(node);
  }

  public scroll() {
    window.scrollTo(0, this.coordinate);
  }
}

export default Target;