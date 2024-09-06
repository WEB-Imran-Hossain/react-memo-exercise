import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Parent Component
      </h1>
      
      {/* Button to Increment Count */}
      <button 
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg 
                   hover:bg-blue-600 transition-all duration-200 ease-in-out"
      >
        Increment Count ({count})
      </button>
      
      {/* Child Component with Message */}
      <ChildComponent message="Hello, World!" />
    </div>
  );
};

export default ParentComponent;