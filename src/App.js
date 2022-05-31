import './App.css';
import { useState } from "react";

function App() {

  const names = ["Sanjay", "Aniket", "Anjali"];
  const users = [
    {
      name: "Sanjay",
      pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },

    {
      name: "Aniket",
      pic: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    },
    {
      pic: "https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg",
      name: "Anjali",
    },
  ];

    const people =["karthick","navin","sanjay"];

  return (
    <div className="App">
      {users.map((user)=>(
        <Msg name={user.name} pic={user.pic} />
      ))}


      {people.map(personName => 
        <Welcome name={personName}/>
      )}
      {/* <Counter /> */}
    </div>
  );
}

function Counter() {
  const [like , setLike] = useState(0);
  const [dislike , setDisLike] = useState(0);

  // let like =10;
  return (
    <div>
      <button className="btn-like" onClick={()=>{setLike(like+1);}}>👍 {like}</button>
      <button className="btn-dislike" onClick={()=>{setDisLike(dislike+1);}}>👎 {dislike}</button>
      
      {/* <p>{like}</p> */}
    </div>
  )
}

function Msg( {name, pic} ) {
  return (
    <div className="name">
    <img className="profile-pic" src={pic} alt={name} />
    <h1>Welcome, {name} 😊🤣😍🙌</h1>
      <Counter />
      
    </div>
    )
}

function Welcome(props) {
  console.log(props);
  return (
    <div>
    <h1>Hai, {props.name} 😊🤣😍🙌</h1>
    </div>
  )
}


export default App;
