import { useState } from 'react';
import './App.css';
import Nav from './component/Navbar/Nav';
import Main from './component/MainContent/Main';
function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [matchData, setMatchData] = useState(
    {
      matchType: "",
      tournamentName: "",
      startDateTime: "",
      location: "",
      endDateTime: "",
      comments: ""
    }
  )
  const [team, setTeam] = useState({
    1: {
      name: "",
      homeOrAway: ""
    },
    2: {
      name: "",
      homeOrAway: ""
    }
  })
  return (
    <div className="App">
      {pageNumber < 4 && <Nav pageNumber={pageNumber} />}
      <Main team={team} setTeam={setTeam} pageNumber={pageNumber} setPageNumber={setPageNumber} matchData={matchData} setMatchData={setMatchData} />
    </div>
  );
}

export default App;
