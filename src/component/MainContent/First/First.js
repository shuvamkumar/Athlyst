import React from 'react'

const First = ({ matchData, setMatchData }) => {
    return (
        <div className='first-container'>
            <select name="matchType" id="matchType" onChange={(e) => setMatchData({ ...matchData, matchType: e.target.value })}>
                <option value="Match Type" disabled selected>Match Type</option>
                <option value="Friendly">Friendly</option>
                <option value="Tournament">Tournament</option>
            </select>
            {console.log(matchData)}
        </div>
    )
}

export default First