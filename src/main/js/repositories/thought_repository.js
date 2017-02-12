import { observable, computed } from 'mobx';

export default class ThoughtRepository {
  @observable thoughts = [];
  @observable selectedCategory = localStorage.getItem('category') || 'work';

  constructor() {
    fetch('/thoughts?sort=creationTime,desc')
      .then(raw => raw.json())
      .then(json => {
        this.thoughts = json._embedded.thoughts;
      });
  }

  @computed get thoughtsBySelectedCategory() {
    return this.thoughts.filter(
      thought => thought.category === this.selectedCategory
    );
  }

  create(text) {
    fetch('/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        category: this.selectedCategory
      })
    })
      .then(raw => raw.json())
      .then(thought => {
        this.thoughts.unshift(thought);
      });
  }

  delete(id) {
    fetch(`/thoughts/${id}`, {
      method: 'DELETE'
    }).then(raw => {
      this.thoughts = this.thoughts.filter(thought => {
        return thought.id !== id;
      });
    });
  }
}