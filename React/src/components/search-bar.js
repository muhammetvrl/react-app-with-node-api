import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

  }

  onInputChange(term) {
    this.setState({ term });
  }
  handleKeyPress = event => {
    this.props.onSearchButtonClick(this.state.term);
  };

  render() {
    return (
      <div className="row search-movie">
        <div className="col-md-6 col-md-offset-3 search-bar">
          <div className="input-group">
            <input
              className="form-control input-lg"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              onKeyPress={this.handleKeyPress}
              placeholder={this.props.placeholderText}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info input-lg"
                onClick={() => this.props.onSearchButtonClick(this.state.term)}
              >
                <i className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;