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
                <h1 className="text-left">Our Stories</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.state.stories.length < 1
                        ? "There are no stories"
                        : this.state.stories.map((story, key) =>
                            <li key={key} className="text-left">
                                <a href="#">{story.title}</a> by {story.author}
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ListStoriesTest;
