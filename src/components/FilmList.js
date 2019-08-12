import React, { Component } from 'react';
import Film from '../components/Film.js'

class FilmList extends Component {
  render() {
    const filmNodes =
      this.props.data.map(film => {
        return(<Film
          url={film.url} name={film.name}></Film>)
    })

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;
