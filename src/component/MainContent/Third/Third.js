import React from 'react'

const Third = ({ team, setTeam }) => {
    return (
        <div className='third-container'>
            <div className='flex-children' style={{ flex: "5" }}>
                <input type="text" placeholder='Team 1' onChange={(e) => {
                    setTeam({ ...team, 1: { name: e.target.value } })
                }} />
                <div className="line"></div>
                <input type="text" placeholder='Team 2' onChange={(e) => {
                    setTeam({ ...team, 2: { name: e.target.value } })
                }} />
            </div>
            <div className='flex-children' style={{ display: "flex", flex: '1', alignItems: "center", justifyContent: "center" }}>
                <h4>VS</h4>
            </div>
            <div className='flex-children' style={{ flex: "5" }}>
                <select name="teamOne" id="teamOne" defaultValue={"homeOrAway"} onChange={(e) => { setTeam({ ...team, 1: { ...team["1"], homeOrAway: e.target.value } }) }}>
                    <option value="homeOrAway" disabled>Home or Away</option>
                    <option value="home">Home</option>
                    <option value="away">Away</option>
                </select>
                <div className="line"></div>
                <select name="teamOne" id="teamOne" defaultValue={"homeOrAway"} onChange={(e) => { setTeam({ ...team, 2: { ...team["2"], homeOrAway: e.target.value } }) }}>
                    <option value="homeOrAway" disabled>Home or Away</option>
                    <option value="home">Home</option>
                    <option value="away">Away</option>
                </select>
            </div>
        </div>
    )
}

export default Third