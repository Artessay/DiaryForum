import './DiaryList.css';
import React, {Component} from 'react';

const list = [
  {
    title: 'Advanced Data Structure and Algorithm',
    url: 'https://gitee.com/rightbreeze/diary',
    author: 'Rihong Qiu',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Orient-Object Program',
    url: 'https://gitee.com/iridescent-xuan/diary_for_oop',
    author: 'Xuan Wang',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

class DiaryList extends Component {
  render(){
    let username = "Administrator"
    return (
      <div className="DiaryList">
        <header className="DiaryList-header">
          <h2>
            Hello, {username}
          </h2>
          {list.map
            (
              item =>
                <div key={item.objectID}>
                  <span>
                    <a href={item.url}> {item.title} </a>
                  </span>
                  <span>
                    {item.author}
                  </span>
                  <span>
                    {item.num_comments}
                  </span>
                </div>
            )
          }
        </header>
        
      </div>
    );
  }
}

export default DiaryList;
  