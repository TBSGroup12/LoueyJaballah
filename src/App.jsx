/* import * as REACT from "react";
function App() {
  const title="React";
  return(
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */


/*import * as REACT from "react";
const welcome = {
  greeting: "Hey",
  title: "React",
};
function App() {
  return(
    <div>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */

/*
import * as REACT from "react";
function getTitle(title){
  return title;
};
function App() {
  return(
    <div>
      <h1> Hello {getTitle("React")} </h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;
*/

import * as REACT from "react";

const list=[
  {
    title: "React",
    url: "httpls://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: "Redux",
    url: "httpls://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
    <h1>My Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}> 
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <br></br>
            <span>{item.author}</span>
            <br></br>
            <span>{item.num_comments}</span>
            <br></br>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
    </div>
  );
}
export default App;