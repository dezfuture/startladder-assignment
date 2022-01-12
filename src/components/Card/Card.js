import React, { useEffect, useState } from "react";
import Timer from "../Timer/Timer";

import right from "../../assets/correct.png";
import wrong from "../../assets/wrong.png";

import "./card.css";

const Card = ({ childToParent }) => {
  const [i, setI] = useState(0);
  const [counter, setCounter] = useState(1);
  const [showAccuracy, setShowAccuracy] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  // ----------------------------------------------------------------------------
  const [datas, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [correct, setCorrect] = useState("");
  const [show, setShow] = useState(false);
  var hell;

  useEffect(() => {
    fetch("https://api.startladder.co/api/frontend/tasks")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        hell = data.task_array[i];
        setCorrect(hell.answer);
        setData(hell);
        console.log(data.task_array[i]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [i]);

  // ----------------------------------------------------------------------------

  const buttonHandler = () => {
    setShow(true);
  };

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      if (inputValue == correct) {
        setCounter(counter + 1);
        setIsTrue(true);
        console.log(counter);
      } else {
        setIsFalse(true);
      }
      // setTimeout(setIsFalse(false), 1000);
      // setTimeout(setIsTrue(false), 1000);

      setInputValue("");
      setShow(false);
    }
  };

  const matchAnswer = (event) => {
    setInputValue(event.target.value);

    setTimeout(() => {
      if (i < 5) {
        setI(i + 1);
      } else {
        setCounter((counter / 6) * 100);
        setShowAccuracy(true);
      }

      setTimeout(() => {
        setIsTrue(false);
        setIsFalse(false);
      }, 100);
    }, 2500);
  };

  return (
    <>
      {(console.log(isTrue), console.log(isFalse))}
      {showAccuracy ? (
        <div className="card__show-score">
          <p>Your Accuracy : {counter} %</p>
          <button className="btn" onClick={() => childToParent(true)}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="card__header">
            <h1>Topic: </h1>
            <p>Product Management</p>
            <div className="card__timer">
              <Timer />
            </div>
          </div>
          <div className="card__middle">
            <h3>Question {i + 1} of 6 : </h3>
            <p>{datas.question}</p>
          </div>
          {!isTrue && !isFalse && (
            <div className="card__lower">
              <div className="card__input">
                <span>Answer</span>
                <input
                  value={inputValue}
                  onKeyPress={submitHandler}
                  onChange={matchAnswer}
                />
              </div>
              <div className="card__enquire">
                {!show && (
                  <div>
                    <form onSubmit={submitHandler}>
                      <span>Stuck ?</span>
                      <button
                        type="submit"
                        className="btn"
                        onClick={buttonHandler}
                      >
                        See Solution
                      </button>
                    </form>
                  </div>
                )}
                {show && <p>{correct}</p>}
              </div>
            </div>
          )}
          {isTrue && (
            <div className="card__true">
              <img src={right} />
            </div>
          )}
          {isFalse && (
            <div className="card__false">
              <img src={wrong} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
