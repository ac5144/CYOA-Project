import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationTest extends Component {

  render() {
    return(
      <div className="NavigationTest">
        <div className="Navigation">
          <Link to="/">HOME</Link>
          <br/>
          <Link to="/add">ADD STORY</Link>
        </div>
      </div>
    )
  }
}

export default NavigationTest;
