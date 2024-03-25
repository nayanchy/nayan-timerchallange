import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState(null);

  const handleClick = () => {
    setPlayer(playerName.current.value);
    playerName.current.value = null;
  };
  return (
    <section id="player">
      <h2>Welcome {player ? player : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
