type IMyProps = {
  race: number[];
  player: number;
};
const Race = ({ race, player }: IMyProps) => {
  return (
    <div className='race'>
      <h6>Start</h6>
      {race.map((line, i) => {
        return (
          <>
            {/* <div>{i === race.length / 2 && <div>i</div>}</div> */}
            <div>{player === i && <div className='avatar'>1</div>}</div>
            <div>
              <div className='race-line'>-</div>
            </div>
          </>
        );
      })}
      <h6>End</h6>
    </div>
  );
};

export default Race;
