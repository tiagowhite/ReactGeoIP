import React, {Component} from 'react';
import {locationSearch} from '../api/api';

class SearchBar extends Component {

  state = {
    url: null
  };

  onUrlChange = (event) => {
    this.setState({url: event.target.value});
  }

  onSearch = (event) => {
    event.preventDefault();
    locationSearch(this.state.url).then(response => {
      this.props.updateLocation(response.data);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input type="search" value={this.state.url} onChange={this.onUrlChange} placeholder="Search Geo Location from url"/>
          <button type="submit" className="button">Locate</button>
        </form>
      </div>
    );
  }


}


export default SearchBar;
