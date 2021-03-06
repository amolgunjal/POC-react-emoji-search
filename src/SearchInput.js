import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  textChange: PropTypes.func
};
