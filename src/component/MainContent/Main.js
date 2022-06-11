import "./main.css";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";

const Main = ({
  pageNumber,
  setPageNumber,
  matchData,
  setMatchData,
  team,
  setTeam,
}) => {
  const handleNext = () => {
    if (matchData[Object.keys(matchData)[0]] !== "") {
      setPageNumber(pageNumber + 1);
    } else {
      alert("Select match type");
    }
    console.log(team);
  };
  const handleBack = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <>
      {pageNumber === 1 ? (
        <First matchData={matchData} setMatchData={setMatchData} />
      ) : pageNumber === 2 ? (
        <Second matchData={matchData} setMatchData={setMatchData} />
      ) : pageNumber === 3 ? (
        <Third team={team} setTeam={setTeam} />
      ) : (
        <Fourth matchData={matchData} team={team} />
      )}
      <div className="btn-container">
        {pageNumber > 1 && pageNumber < 4 && (
          <button
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </button>
        )}
        {pageNumber < 4 && (
          <button
            onClick={() => {
              handleNext();
            }}
          >
            {pageNumber === 3 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default Main;
