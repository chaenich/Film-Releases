import React, { Component } from 'react';
import Film from '../components/Film.js'

class FilmList extends Component {
  render() {
    return (
      <div className="film-list">
        <h3>Film List</h3>
        <Film />
      </div>
    )
  }
}

export default FilmList;
