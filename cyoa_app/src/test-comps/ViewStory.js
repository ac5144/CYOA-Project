import React, {Component} from 'react';

class ViewStory extends Component {

    constructor(props) {

        super(props)

        this.state = {
            story: null
        }
    }

    componentDidMount() {

        const storyId = this.props.match.params.storyId;

        fetch(`/stories/${storyId}`)
            .then(data => data.json())
            .then(story => {
                this.setState({story: story})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return(
            <div className="ViewStory">
                {this.state.story ? <h1>{this.state.story.title}</h1> : <div></div>}
                <div>{this.state.story ? this.state.story.rootSection.content: ''}</div>
            </div>
        )
    }
}

export default ViewStory;
