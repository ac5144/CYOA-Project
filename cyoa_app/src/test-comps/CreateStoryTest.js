import React, { Component } from 'react';

class CreateStoryTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            storyTitle: '',
            author: '',
            sectionTitle: '',
            sectionContent: ''
        }

        this.handleStoryTitleChange = this.handleStoryTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleSectionTitleChange = this.handleSectionTitleChange.bind(this);
        this.handleSectionContentChange = this.handleSectionContentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleStoryTitleChange(e) {
        this.setState({
            storyTitle: e.target.value
        });
    }

    handleAuthorChange(e) {
        this.setState({
            author: e.target.value
        });
    }

    handleSectionTitleChange(e) {
        this.setState({
            sectionTitle: e.target.value
        });
    }

    handleSectionContentChange(e) {
        this.setState({
            sectionContent: e.target.value
        });
    }

    onSubmit(e) {
		e.preventDefault();
        fetch('/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    }

    render() {
        return(
            <div className="CreateStoryTest">
                <h1>Create a New Story</h1>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="storyTitleInput">Story Title</label>
                        <input type="text" className="form-control" id="storyTitleInput" value={this.state.storyTitle} onChange={this.handleStoryTitleChange} />
                    </div>
                    <div className="form-group">
                        <label for="storyAuthorInput">Author</label>
                        <input type="text" className="form-control" id="storyAuthorInput" value={this.state.author} onChange={this.handleAuthorChange} />
                    </div>
                    <div className="form-group">
                        <label for="sectionTitleInput">First Section Title</label>
                        <input type="text" className="form-control" id="sectionTitleInput" value={this.state.sectionTitle} onChange={this.handleSectionTitleChange} />
                    </div>
                    <div className="form-group">
                        <label for="sectionContentInput">Section Content</label>
                        <textarea className="form-control" id="sectionContentInput" rows="10" value={this.state.sectionContent} onChange={this.handleSectionContentChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateStoryTest;
