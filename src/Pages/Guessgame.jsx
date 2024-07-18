import React, { useEffect, useState } from "react";
import cal from './calls.json';

function GuessGame() {
    const [json, setJson] = useState([]);
    const [remainingQuest, setRemainingQuest] = useState([]); 
    const [currentkey, setCurrentKey] = useState("");
    const [indexedlist, setIndexedlist] = useState([]);
    const [question, setQuestion] = useState([]);
    const [rAnswer, setAnswer] = useState([]);
    const [options, setOptions] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer: 0,
        index: 0,
        maxLength: 0
    });
    const [gamestart, setGamestart] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [selectedOption, setSelectedOption] = useState(""); // New state for selected option

    const updateOptions = (key, value) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [key]: value
        }));
    };
    
    useEffect(() => {
        setJson(cal);
    },[]);


    useEffect(() => {
        gameSetup();
    },[json]);

    const generateQuestion = (tmplist,rmgquest) => {
        let tmp = tmplist;
        let quest = [];

        // select one from list

        let index = Math.floor(Math.random() * tmp.length);
        let answer = tmp[index].value;
        setCurrentKey(tmp[index].key);
        tmp.splice(index,1);
        setRemainingQuest(tmp);
        quest.push(answer);
        let i = 0;
        for (i = 0; i < 3; i++) {
            index = Math.floor(Math.random() * tmp.length);
            if (tmp[index].value === answer) {
                index = Math.floor(Math.random() * tmp.length);
            }
            quest.push(tmp[index].value);
            tmp.splice(index,1);
        }

        quest.sort(() => Math.random() - 0.5);
        setQuestion(quest);
        setAnswer(answer);

        setFeedback("");
        setSelectedOption("");

        


        



    };


    const gameSetup = () => {
        let tindexedlist = Object.keys(json).map((key, index) => ({
            key: key,
            value: json[key].value,
            coverage: json[key].coverage
                }));
        console.log(tindexedlist);
        setRemainingQuest(tindexedlist);
        setIndexedlist(tindexedlist);
        let score = 0;
        let correctAnswer = 0;
        let wrongAnswer = 0;
        let index = 1;
        let maxLength = tindexedlist.length;
        updateOptions("score",score);
        updateOptions("correctAnswer",correctAnswer);
        updateOptions("wrongAnswer",wrongAnswer);
        updateOptions("index",index);
        updateOptions("maxLength",maxLength);
        
        setGamestart(true);

    };
    

    const gameLoop = () => {
        if (gamestart === true) {
            setGamestart(false);
        }
        generateQuestion(indexedlist,remainingQuest);


        


    };
        





const handleOptionClick = (option) => {
    if (option === rAnswer) {
        updateOptions("score",options.score + 1);
        updateOptions("correctAnswer",options.correctAnswer + 1);
        setSelectedOption(option);
        setFeedback("correct");
        updateOptions("index",options.index + 1);
        generateQuestion(indexedlist,remainingQuest);
    } else if (option !== rAnswer) {
        updateOptions("score",options.score - 1);
        updateOptions("wrongAnswer",options.wrongAnswer + 1);
        setSelectedOption(option);
        setFeedback("wrong");
    } else {
        setFeedback("");
        setSelectedOption("");
    }

    
};





    return (
        <div className="min-w-full p-4 place-items-center content-center justify-self-center">
            <h2>Score: {options.score}</h2>
            <h2>Correct Answer: {options.correctAnswer}</h2>
            <h2>Wrong Answer: {options.wrongAnswer}</h2>
           
            <h2>Total: {options.index}/{options.maxLength+1}</h2>
            {gamestart ? <button className='rounded-xl border-4 border-solid border-licorice p-2 hover:bg-licorice hover:text-ivory' onClick={gameLoop}>Start Game</button> : null}
            
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="col-span-2 w-full place-items-center">
                What is the Long call for {currentkey}?
                </div>

                {question.map((option, index) => (
                    <button 
                        key={index} 
                        className={`p-4 w-fit text-white ${feedback && selectedOption === option ? (feedback === "correct" ? "bg-green-500" : "bg-red-500") : "bg-blue-500"}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GuessGame;
