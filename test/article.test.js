import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import bookmarks from '../reducers/bookmarks';
import user from '../reducers/user';
import hiddenArticles from '../reducers/hiddenArticles';

const reducers = combineReducers({ bookmarks, user, hiddenArticles });
const persistConfig = { key: 'morningnews', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

import Article from '../components/Article';
import { render, screen } from '@testing-library/react';

const articleData = {
  title : "Test Article",
  author : "John Doe",
  urlToImage: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2700x1800/640x512/filters:focal(1447x874:1448x875):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25270268/246998_Drop_CSTM65_JPorter_0004.jpg",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus nesciunt natus veniam illo ad libero esse magni, laboriosam cupiditate, facere nisi nihil eligendi fugit aut nostrum perspiciatis. Dolorum, possimus?"
};

it('Display article content', () => {
  render(
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
        <Article {...articleData} />
      </PersistGate>
    </Provider>
  )
  const articleTitle = screen.getByText(articleData.title);
  expect(articleTitle).toBeTruthy();

  const articleAuthor = screen.getByText(articleData.author, {exact: false});
  expect(articleAuthor).toBeTruthy();

  const articleDescription = screen.getByText(articleData.description);
  expect(articleDescription).toBeTruthy();
});