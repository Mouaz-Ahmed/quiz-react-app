
const Options = (props) => {
  const { inAns, corrAns, radioName, getAnswer } = props;
  // console.log(getAnswer);
 
  return (
    <div>
      {inAns.map((item, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              className={`q${radioName}`}
              name={`q${radioName}`}
              value={item}
              onChange={(e)=> getAnswer(e)}
               />
            <span>{item}</span>
          </div>
        );
      })}
      <div>
        <input
          type="radio"
          className={`q${radioName}`}
          name={`q${radioName}`}
          value={corrAns}
          onChange={(e)=> getAnswer(e)}
         />{" "}
        <span>{corrAns}</span>
      </div>
    </div>
  );
};

export default Options;
