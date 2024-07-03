import { useState } from "react";

import "./Board.styles.css"


export const ScoreBoard = ({title}: any)=>{
    const [score, setScore] = useState(0);
    const updateFirstScore = () => setScore(score + 1);
    const deleteFirstScore = () => score > 0 ? setScore(score- 1) : "";
        
    const resetScore = () => {
        setScore(0);
    }

    return (
        <section>
            <h2>{title}</h2>
            <div className="scoreBoard">
                <p>{score}</p>
                <button className="plus" onClick={updateFirstScore}>+</button>
                <button className="minus" onClick={deleteFirstScore}>-</button>
            </div>
            <button className="reset" onClick={resetScore}>RESET</button>               
        </section>
    )
}
