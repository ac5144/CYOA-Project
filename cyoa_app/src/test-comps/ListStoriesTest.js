import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListStoriesTest extends Component {

    constructor(props) {
        super(props);

            this.state = {
            stories: []
        }
    }

    componentDidMount() {
        this.getStories();
    }

	getStories() {
		fetch('/stories')
            .then(data => data.json())
            .then(stories => {
                this.setState({stories: stories});
            })
			.catch(err => {
				console.log(err);
			})
	}

	onDeleteStory(storyId) {
		fetch('/stories/' + storyId, {method: 'DELETE'})
			.then(() => {
				this.getStories();
			})
			.catch(err => {
				console.log(err);
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
                                <Link to={`/${story._id}`}>{story.title}</Link> by {story.author}
								<button className="btn btn-danger"
										onClick={this.onDeleteStory.bind(this, story._id)}>X</button>
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ListStoriesTest;
