const firstBasket = document.querySelector(".basket1 span");
const secondBasket = document.querySelector(".basket2 span");
const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");

let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

//This types is called Imprerative Programming, we are directly manipulating the DOM and changing the state of the application without any abstraction. This can lead to bugs and makes it harder to maintain the code as the application grows.
//In React, we use a declarative programming approach, where we describe what the UI should look like based on the state of the application, and React takes care of updating the DOM efficiently when the state changes. This makes it easier to reason about the code and helps to avoid bugs.
firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightBtn.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

leftBtn.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
  }
});

//Why React?
//1.Declarative: React allows us to describe what the UI should look like based on the state of the application, and React takes care of updating the DOM efficiently when the state changes. This makes it easier to reason about the code and helps to avoid bugs.
//2.Component-Based: React allows us to build encapsulated components that manage their own state, and then compose them to make complex UIs. This promotes reusability and makes it easier to maintain the code.
//3.Virtual DOM: React uses a virtual DOM to efficiently update the UI when the state changes. This means that React only updates the parts of the DOM that have changed, rather than re-rendering the entire UI, which can improve performance.
//4.Large Ecosystem: React has a large ecosystem of libraries and tools that can help us build complex applications more easily, such as Redux for state management, React Router for routing, and many others.
//5.Single page applications: React is well-suited for building single-page applications (SPAs) where the UI is dynamically updated without requiring a full page reload. This can provide a smoother user experience and faster interactions.