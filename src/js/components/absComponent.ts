import { createElement } from "../services";

type Component = {
  getElement:() => ChildNode | null;
  getTemplate:() => string;
  removeElement:() => void;
  workHandler?:(handler: Function) => void
}

abstract class AbsComponent implements Component {
  _element: ChildNode | null;
  abstract getTemplate():string;
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {Component}
export default AbsComponent;
