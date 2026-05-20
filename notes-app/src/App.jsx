import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white  ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 gap-4 flex-col items-start  p-10 "
      >
        <h1 className="text-4xl mb-2 font-bold ">Add Notes</h1>

        {/** Pahilo Inut for Heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 rounded outline-none font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/**Detailed rupama vayako input */}
        <textarea
          type="text"
          placeholder=" Writes Details"
          className="px-5 h-32  w-full  flex-row py-2 border-2 rounded outline-none font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button
          className="bg-white
        active:scale-95 font-medium  text-black px-5 py-2 outline-none rounded "
        >
          Add notes
        </button>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2   p-10">
        <h1 className="text-4xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap items-start  justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 pt-9 pb-4 px-4 rounded-xl bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold text-black">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-semimedium text-gray-600">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white
                "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
