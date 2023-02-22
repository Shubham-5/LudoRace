type Props = {
  score: number;
  playerName: string;
};

const Player = ({ score, playerName }: Props) => {
  return (
    <div className='player'>
      <div className='avatar'></div>
      <div className='player-details'>
        <div>{playerName}</div>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Player;
