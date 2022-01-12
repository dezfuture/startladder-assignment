import React, { useEffect, useState } from "react";

const Question = ({ questionNumber, i }) => {
  const [datas, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
        setData(hell);
        // console.log(data);
        console.log(data.task_array[i]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [i]);

  // setTimeout(() => setI(i + 1), 5000);
  // let hell = datas.find((data) => data._id == 1);
  // console.log(datas);
  return <div>{datas.question}</div>;
};

export default Question;
