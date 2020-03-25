import React, { Component } from 'react';

class CreateStoryTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
        title: '',
        author: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleTitleChange(e) {
      this.setState({
          title: e.target.value
      })
  }

  handleAuthorChange(e) {
      this.setState({
          author: e.target.value
      });
  }

  onSubmit() {
      fetch('/stories', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
      })
  }

  render() {
    return(
      <div className="CreateStoryTest">
        <h1>Create a New Story</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Story Title</label>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div>
            <label>Author</label>
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </div>
          <div>
            <label>First Section Title</label>
            <input type="text"/>
          </div>
          <div>
            <label>Section Content</label>
            <textarea />
          </div>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default CreateStoryTest;
