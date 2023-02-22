type Props = {
  turn: boolean;
};
const PlayerTurnInfo = ({ turn }: Props) => {
  return (
    <div className='player-turn-info'>
      {turn ? "player 2 turn" : "player 1 turn"}
    </div>
  );
};

export default PlayerTurnInfo;
