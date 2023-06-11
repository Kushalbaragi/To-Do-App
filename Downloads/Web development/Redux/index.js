// const BUY_CAKE = "BUY_CAKE";

// //action Creator that creates action

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "first redux action",
//   };
// }

// //reducer (prevstate, action)=> newstate
// const initialState = {
//   numOfCakes: 10,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default: return state;
//   }
// };
// const data=require('./data.json');
import data from './data.json';


// let newData=JSON.stringify(data);
// let secData=JSON.parse(newData)
// console.log(newData);
// console.log(secData);

console.log(data);

