import React, { useState } from "react";

const Main = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (text === "") return;
    if (e.keyCode === 13) {
      setLists([...lists, text]);
      setText("");
    }
  };

  const onClickChoosed = () => {
    const list = lists[Math.floor(Math.random() * lists.length)];
    const decsion = list
      ? `メンバーは${list}さんです`
      : "選択したいリストを入力して下さい";
    alert(decsion);
    lists.splice(list, 1);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="メンバーを入力"
        className="mt-10 ring-2 px-6"
        onKeyDown={(e) => handleSubmit(e)}
      />
      <ul>
        {lists.map((list, index) => {
          return (
            <li className="shadow my-3 px-3 py-2" key={index}>
              {list}
            </li>
          );
        })}
      </ul>
      <button className="text-white bg-yellow-400 px-2  py-4 rounded-full"  onClick={onClickChoosed}>
        Click Choosed!
      </button>
    </div>
  );
};

export default Main;
