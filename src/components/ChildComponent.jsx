//simple component

// import React from 'react';
// const ChildComponent = ({ message }) => {
//   console.log("ChildComponent is rendering");
  
//   return (
//     <div className="text-lg font-semibold text-gray-700 mt-4">
//       {message}
//     </div>
//   );
// };

// export default ChildComponent;



// use React.memo
import React  from 'react';

const ChildComponent = React.memo(({ message }) => {
  console.log("ChildComponent is rendering");
  return (
    <div>{message}</div>
  )
});

export default ChildComponent;
