import React from "react";
import Demo from "./demo";
const App = () => {
  //first example
  // function btnClick() {
  //   console.log("Button clicked");
  //   // alert("Button Clicked");
  // }

  //second Example
  // function inputChanging(val) {
  //   console.log(val);
  // }

  //4example
  // const pageScrolling = (elem) => {
  //   if (elem > 0) {
  //     console.log("page tala scrolling hudaixa....", elem);
  //   } else {
  //     console.log("page mathi scrolling hudiaxa....", elem);
  //   }
  // };

  return (
    //first example
    // <div>
    //   <button onClick={btnClick}>Click Here</button>
    //   <button onClick={btnClick}>Explore this</button>
    // </div>

    //second Example
    // <div>
    //   <input
    //     onChange={function (elem) {
    //       inputChanging(elem.target.value);
    //     }}
    //     type="text"
    //     placeholder="Enter Name"
    //     name=""
    //     id=""
    //   />
    // </div>

    //third example
    // <div
    //   onMouseMove={(elem) => {
    //     console.log(elem.clientY);
    //   }}
    //   className="box"
    // ></div>

    //4th example
    // <div
    //   onWheel={(elem) => {
    //     pageScrolling(elem.deltaY);
    //   }}
    // >
    //   <div className="page1"></div>
    //   <div className="page2"></div>
    //   <div className="page3"></div>
    // </div>

    <div className="">
      <Demo />
    </div>
  );
};

export default App;
