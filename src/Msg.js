import { Counter } from './Counter';

export function Msg({ name, pic }) {
  return (
    <div className="name">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Welcome, {name} 😊🤣😍🙌</h1>
      <Counter />

    </div>
  );
}
