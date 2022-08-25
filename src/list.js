import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import DiaryList from './DiaryList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DiaryList />
  </React.StrictMode>,
  document.getElementById('list')
);

reportWebVitals();

if (module.hot)
{
  module.hot.accept();
}