import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  // let like =10;
  return (
    <div>
      <button className="btn-like" onClick={() => { setLike(like + 1); }}>👍 {like}</button>
      <button className="btn-dislike" onClick={() => { setDisLike(dislike + 1); }}>👎 {dislike}</button>

      {/* <p>{like}</p> */}
    </div>
  );
}
