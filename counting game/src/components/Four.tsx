import React from 'react';

type FourProps = {
    handlePageGoTo: (page:string) => void;
  };
  
  const Four: React.FC<FourProps> = ({ handlePageGoTo }) => {



  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="absolute left-0 h-full flex items-center">
      <h2 className="font-bold m-0 p-0" style={{fontSize:"50vw"}}>4</h2>
      </div>
      <button onClick={()=>handlePageGoTo("five")} className="w-40 bg-orange-500 mb-2 border-2 text-white font-bold px-1 py-2 rounded-2xl shadow-md hover:bg-orange-600 transition-colors duration-300 active:bg-orange-800">
          Next
        </button>
      <div className="absolute right-0 h-full flex items-center">
        <h2 className="font-bold m-0 p-0" style={{fontSize:"50vw"}}>4</h2>
      </div>
    </div>
  );
};

export default Four;