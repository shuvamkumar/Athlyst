import React from 'react'

const Fourth = ({ matchData, team }) => {
    return (
        <div className='fourth-container'>{console.log(matchData)}
            <table>
                <tr>
                    <th>Team 1</th>
                    <th>Team 2</th>
                    <th>Match Type</th>
                    <th>Tournament Name</th>
                    <th>Start Date and Time</th>
                    <th>End Date and Time</th>
                    <th>Location</th>
                    <th>Comments</th>
                </tr>
                <tr>
                    <td>{`${team[Object.keys(team)[0]]["name"]}(${team[Object.keys(team)[0]]["homeOrAway"]})`}</td>
                    <td>{`${team[Object.keys(team)[1]]["name"]}(${team[Object.keys(team)[1]]["homeOrAway"]})`}</td>
                    <td>{`${matchData[Object.keys(matchData)[0]]}`}</td>
                    <td>{matchData[Object.keys(matchData)[0]] === "Friendly" ? `-` : `${matchData[Object.keys(matchData)[1]]}`}</td>
                    <td>{`${matchData[Object.keys(matchData)[2]]}`}</td>
                    <td>{`${matchData[Object.keys(matchData)[4]]}`}</td>
                    <td>{`${matchData[Object.keys(matchData)[3]]}`}</td>
                    <td id='special-cell'>{`${matchData[Object.keys(matchData)[5]]}`}</td>
                </tr>
            </table>
        </div>
    )
}

export default Fourth