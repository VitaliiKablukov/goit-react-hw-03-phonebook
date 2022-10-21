import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
export class Filter extends Component {
  filterText = e => {
    this.props.filterInputText(e.target.value);
  };
  render() {
    return (
      <Fragment>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" name="filter" onChange={this.filterText} />
      </Fragment>
    );
  }
}
Filter.propTypes = {
  filterInputText: PropTypes.func.isRequired,
};
