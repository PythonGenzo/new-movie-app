import * as React from 'react';
import { Msg } from './Msg';

export function UserList() {
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
  return (
    <div>
      {users.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}
    </div>
  );
}
