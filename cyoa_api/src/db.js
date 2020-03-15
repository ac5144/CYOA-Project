class DB {

  constructor() {

    this.stories = [];
    this.sections = [];
  }

  addNewStory(story) {

    this.stories.push(story);
  }

  getStories() {

    return this.stories;
  }
}

module.exports = DB;
