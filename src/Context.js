import React, { useEffect, useState } from "react";
// const initialState = {
//   list: [
//     { id: uuidv4(), text: 'salary', amount: 500 },
//      { id: uuidv4(), text: 'Grossary', amount: 200 },
//       {id: uuidv4(), text: '', cooking: 200}
//   ]
// }

const GlobalContext = React.createContext();

const Provider = (props) => {
  const [myText, setMyText] = useState("");
  const [list, setList] = useState(
    //   localStorage.list ? JSON.parse(localStorage.list) : []);
    // useEffect(() => {
    //       localStorage.list()
    //     }
    []
  );
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMyText({
      ...myText,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!myText.text || !myText.amount) return;
    const data = {
      id: Math.floor(Math.random() * 100000000),
      text: myText.text,
      amount: +myText.amount,
    };
    setList([...list, data]);
    setMyText({
      text: "",
      amount: "",
    });
  };


  // useEffect(() => {
  //   setList(initialState.list)
  // },[])

  // cancel
  const cancelItemHandler = (e, id) => {
    e.preventDefault();
    const copy = [...list];
    const newArr = copy.filter((item) => item.id !== id);
    setList(newArr);
  };

  // add income
  const income = list
    .map((item) => parseInt(item.amount))
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(list);
  console.log(income);

  // expenses
  const expense = list
    .map((item) => parseInt(item.amount))
    .filter((item) => item < 0)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(expense);

  const state = {
    myText,
    setMyText,
    list,
    setList,
    changeHandler,
    submitHandler,
    cancelItemHandler,
    income,
    expense,
  };
  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const Consumer = GlobalContext.Consumer;
export { Consumer, Provider, GlobalContext };
