import './DiaryList.css';
import React, {Component} from 'react';

const list = [
  {
    title: 'Romeo and Juliet',
    url: 'https://gitee.com/rightbreeze/diary',
    author: 'Shakespeare',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Winter's Tale",
    url: 'https://gitee.com/rightbreeze/diary',
    author: 'Shakespeare',
    num_comments: 6,
    points: 3,
    objectID: 0,
  },
  {
    title: 'Diary For OOP',
    url: 'https://gitee.com/iridescent-xuan/diary_for_oop',
    author: 'Xuan Wang',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

function isSearched(searchTerm)
{
  return function(item)
  {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = 
    {
      list: list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id)
  {
    function isNotId(item){
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);

    this.setState({list: updatedList});
  }

  onSearchChange(event)
  {
    this.setState({searchTerm: event.target.value})
  }

  render()
  {
    let username = "Administrator"
    const {searchTerm, list} = this.state;
    return (
      <div className="DiaryList">
        <h2>
          Hello, {username}
        </h2>
        <Search
          value = {searchTerm}
          onChange = {this.onSearchChange}
        >
          Search Engine
        </Search>
        <p></p>
        
        <Table
          list = {list}
          pattern = {searchTerm}
          onDismiss = {this.onDismiss}
        />
      </div>
    );
  }
  
}

class Search extends Component
{
  render()
  {
    const {value, onChange, children} = this.props;
    return (
      <form>
        {children} <input 
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends Component
{
  render()
  {
    const {list, pattern, onDismiss} = this.props;
    return (
      <div className='table'>
        {list.filter(isSearched(pattern)).map(
          item =>
            <div key={item.objectID} className="table-row">
              <span style={{width: '50%'}}>
                <a href={item.url}> {item.title} </a>
              </span>
              <span style={{width: '35%'}}>
                {item.author}
              </span>
              {/* <span style={{width: '2%'}}>
                {item.num_comments}
              </span>
              <span style={{width: '2%'}}>
                {item.points}
              </span> */}
              <span style={{width: '15%'}}>
                <Button
                  onClick={() => onDismiss(item.objectID)}
                  className = "button-inline"
                >
                  Dismiss
                </Button>
              </span>
            </div>
        )
      }
      </div>
    )
  }
}

class Button extends Component
{
  render()
  {
    const {
      onClick,
      className = '',
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    )
  }
}

export default App;
