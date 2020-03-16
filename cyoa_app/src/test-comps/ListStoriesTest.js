import React, {Component} from 'react';

class ListStoriesTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    fetch('/stories')
    .then(data => data.json())
    .then(stories => {
      this.setState({stories: stories});
    })
  }

  render() {
    return(
      <div className="ListStoriesTest">
        {this.state.stories.length < 1 ? "There are no stories" : this.state.stories.map(story => <div>{`${story.title} by ${story.author}`}</div>)}
      </div>
    )
  }
}

export default ListStoriesTest;
