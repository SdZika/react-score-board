import { useState } from "react";
import {boardData} from "../../Lib"
import "./Buttons.styles.css"

export const ScoreBoard = ()=>{
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const updateFirstScore = () => setScore1(score1 + 1);
    const updateSecondScore = () => setScore2(score2 + 1);
    const deleteFirstScore = () => score1 > 0 ? setScore1(score1 - 1) : "";
    const deleteSecondScore = () => score2 > 0 ? setScore2(score2 - 1) : "";
        
        
    const resetScore = () => {
        setScore1(0);
        setScore2(0);
    }

    return (
        <section>
            <h2>{boardData.title}</h2>
            <div className="scoreBorad">
                <div>
                    <h3>{boardData.teamA}</h3>
                    <p>{score1}</p>
                    <button className="plus" onClick={updateFirstScore}>+</button>
                    <button className="minus" onClick={deleteFirstScore}>-</button>
                </div>
                <div>
                    <h3>{boardData.teamB}</h3>
                    <p>{score2}</p>
                    <button className="plus" onClick={updateSecondScore}>+</button>
                    <button className="minus" onClick={deleteSecondScore}>-</button>
                </div>                     
            </div>
            <button className="reset" onClick={resetScore}>RESET</button>
        </section>
    )
}
