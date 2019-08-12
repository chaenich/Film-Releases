import React, { Component } from 'react';
import FilmList from '../components/FilmList'
import Upcoming from '../components/Upcoming'
import Separator from '../components/Separator'

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div className="film-box">
        <Separator />
        <h2>Main film box</h2>
        <FilmList />
        <Separator />
        <Upcoming />
      </div>
    )
  }

}

export default FilmBox;
