import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

const Second = ({ matchData, setMatchData }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        setMatchData({ ...matchData, startDateTime: startDate, endDateTime: endDate })
    }, [])
    return (
        <div className='second-container'>
            {matchData[Object.keys(matchData)[0]] === "Friendly" ? <>
                <div className='flex-children'>
                    <DateTimePicker onChange={
                        () => { setStartDate(); setMatchData({ ...matchData, startDateTime: startDate }) }
                    } value={startDate}>
                    </DateTimePicker>
                    <input type="text" onChange={(e) => { setMatchData({ ...matchData, location: e.target.value }) }} placeholder="Match Location" style={{ marginTop: "2rem", padding: "0.2rem 0.2rem", fontSize: "1rem" }}></input>
                </div>
                <div className='flex-children'>
                    <DateTimePicker onChange={
                        () => { setEndDate(); setMatchData({ ...matchData, endDateTime: endDate }) }
                    } value={endDate}>
                    </DateTimePicker>
                    <textarea onChange={(e) => { setMatchData({ ...matchData, comments: e.target.value }) }} placeholder="Comments" style={{ marginTop: "2rem", padding: "0.2rem 0.2rem", fontSize: "1rem" }}></textarea>
                </div>
            </> : <>
                <div className='flex-children'>
                    <DateTimePicker onChange={
                        () => { setStartDate(); setMatchData({ ...matchData, startDateTime: startDate }) }
                    } value={startDate}>
                    </DateTimePicker>
                    <input type="text" onChange={(e) => { setMatchData({ ...matchData, location: e.target.value }) }} placeholder="Match Location" style={{ marginTop: "2rem", padding: "0.2rem 0.2rem", fontSize: "1rem" }}></input>
                    <input type="text" onChange={(e) => { setMatchData({ ...matchData, tournamentName: e.target.value }) }} placeholder="Tournament Name" style={{ marginTop: "2rem", padding: "0.2rem 0.2rem", fontSize: "1rem" }}></input>
                </div>
                <div className='flex-children'>
                    <DateTimePicker onChange={
                        () => { setEndDate(); setMatchData({ ...matchData, endDateTime: endDate }) }
                    } value={endDate}>
                    </DateTimePicker>
                    <textarea onChange={(e) => { setMatchData({ ...matchData, comments: e.target.value }) }} placeholder="Comments" style={{ marginTop: "2rem", padding: "0.2rem 0.2rem", fontSize: "1rem" }}></textarea>
                </div>
            </>}
        </div>
    )
}

export default Second