import { useState } from "react";
import {boardData} from "../../Lib"

export const ScoreBoard = ()=>{
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const updateFirstScore = () => setScore1(score1 + 1);
    const updateSecondScore = () => setScore2(score2 + 1);
    const resetScore = () => {
        setScore1(0);
        setScore2(0);
    }

    return (
        <section>
            <h2>{boardData.title}</h2>
            <p>{score1}</p>
            <p>{score2}</p>
            <button onClick={updateFirstScore}>Score one</button>
            <button onClick={updateSecondScore}>Score two</button>
            <button onClick={resetScore}>Reset</button>
        </section>
    )
}