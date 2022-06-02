import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);

  // useEffect(() => {
  //   console.log("like is value", like);
  // }, [like, dislike]);

  // let like =10;
  return (
    <div>
      {/* <button className="btn-like" 
      onClick={incrementLike}>👍 {like}</button>
      <button className="btn-dislike" 
      onClick={incrementDisLike}>👎 {dislike}</button> */}
      <IconButton color="primary" onClick={incrementLike} aria-label="like">
      <Badge badgeContent={like} color="primary">
      <RecommendIcon />
      </Badge>
      </IconButton>

      <IconButton color="primary" onClick={incrementDisLike} aria-label="dislike">
      <Badge badgeContent={dislike} color="error">
      <ThumbDownOffAltIcon />
      </Badge>
      </IconButton>

      

      {/* <p>{like}</p> */}
    </div>
  );
}
