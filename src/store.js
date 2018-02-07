import { createStore, combineReducers } from 'redux';

const initialState = {
  theme: 'green',
  feed: {
    articles: [
      {
        description: 'test',
        slug: 'test',
        title: 'Test',
        tags: ['test'],
        createdAt: new Date(),
        updatedAt: new Date(),
        favorited: false,
        favoritesCount: 0,
        author: 'author',
        body: 'test post'
      }
    ]
  }
};

function theme(state = initialState.theme, action) {
  if (action.type !== 'TOGGLE_THEME') {
    return state;
  }

  return state === 'green' ? 'blue' : 'green';
}

function feed(state = initialState.feed) {
  return state;
}

export default createStore(combineReducers({ theme, feed }));
