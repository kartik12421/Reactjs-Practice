import { useState } from "react";

export default function LikeBtn() {
  let [Like, setLike] = useState(false);

  function LikeClick() {
    setLike(!Like);
  }

  let styling = {color: "blue"}

  return (
    <p onClick={LikeClick}>
      {Like ? (
        <i className="fa-solid fa-thumbs-up" style = {styling}></i>
      ) : (
        <i className="fa-regular fa-thumbs-up"></i>
      )}
    </p>
  );
}
