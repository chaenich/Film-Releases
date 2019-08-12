import React, { Component } from 'react';

class Upcoming extends Component {
  render() {
    return (
      <div className="upcoming">
        <a href={ this.props.upcomingData.url }>
          { this.props.upcomingData.name }</a>
      </div>
    )
  }
}

export default Upcoming;
