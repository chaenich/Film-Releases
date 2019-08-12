import React, { Component } from 'react';
import FilmList from '../components/FilmList'

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div className="film-box">
        <h2>Main film box</h2>
        <FilmList />
      </div>
    )
  }

}

export default FilmBox;
