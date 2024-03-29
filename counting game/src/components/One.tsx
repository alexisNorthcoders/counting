import React from 'react';
import dogImage from '../assets/dog.jpeg';
import cowImage from '../assets/cow.jpeg';
import sheepImage from '../assets/sheep.jpeg';

type OneProps = {
  handlePageGoTo: (page:string) => void;
};

const One: React.FC<OneProps> = ({ handlePageGoTo }) => {
  const handleAnimalClick = (animal: string) => {
    // You can define your animation effect logic here
    alert(`You clicked on the ${animal}`);
  };

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="absolute left-0 h-full flex items-center">
      <h2 className="font-bold m-0 p-0" style={{fontSize:"50vw"}}>1</h2>
      </div>
     
      <div className="w-3/4">
      
        <div className="flex flex-wrap justify-center">
          <div className="w-1/4 text-center">
            <img
              src={dogImage}
              alt="Dog"
              className="w-24 h-24 rounded-full cursor-pointer"
              onClick={() => handleAnimalClick('dog')}
            />
            <p className="mt-2">Dog</p>
          </div>
          <div className="w-1/4 text-center">
            <img
              src={cowImage}
              alt="Cow"
              className="w-24 h-24 rounded-full cursor-pointer"
              onClick={() => handleAnimalClick('cow')}
            />
            <p className="mt-2">Cow</p>
          </div>
          <div className="w-1/4 text-center">
            <img
              src={sheepImage}
              alt="Sheep"
              className="w-24 h-24 rounded-full cursor-pointer"
              onClick={() => handleAnimalClick('sheep')}
            />
            <p className="mt-2">Sheep</p>
          </div>
        </div>
        <button onClick={()=>handlePageGoTo("two")} className="w-40 bg-orange-500 mb-2 border-2 text-white font-bold px-1 py-2 rounded-2xl shadow-md hover:bg-orange-600 transition-colors duration-300 active:bg-orange-800">
          Next
        </button>
      </div>
      
      <div className="absolute right-0 h-full flex items-center">
        <h2 className="font-bold m-0 p-0" style={{fontSize:"50vw"}}>1</h2>
      </div>
    </div>
  );
};

export default One;
