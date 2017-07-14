import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

class App extends Component {

  state = {
    location: {}
  };

  updateLocation = (location) => this.setState({ location });

  render() {
    return (
      <div>
        <SearchBar updateLocation={this.updateLocation} />
        <p>coords: {this.state.location.latitude}</p>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
