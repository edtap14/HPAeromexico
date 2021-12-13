import React, { Component } from "react";
import Portal from "../Portal";

import "../sass/Modal.scss";

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="wrapper2">
            <div className="window">
              <div>{children}</div>
            </div>
            <div onClick={toggle} className="backgroundModal"></div>
          </div>
        )}
      </Portal>
    );
  }
}
