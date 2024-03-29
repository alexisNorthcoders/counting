import React, { useState } from 'react';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import Eight from './components/Eight';
import Nine from './components/Nine';
import Ten from './components/Ten';

const Menu: React.FC<{ onStart: () => void; onOptions: () => void }> = ({ onStart, onOptions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold font-sans mb-8">Play Counting</h1>
      <div className="flex flex-col">
        <button onClick={onStart} className="w-40 bg-orange-500 mb-2 border-2 text-white font-bold  px-1 py-2 rounded-2xl shadow-md hover:bg-orange-600 transition-colors duration-300 active:bg-orange-800">
          Start
        </button>
        <button onClick={onOptions} className="w-40 bg-orange-500 mb-2 border-2 text-white font-bold px-1 py-2 rounded-2xl shadow-md hover:bg-orange-600 transition-colors duration-300 active:bg-orange-800">
          Options
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('menu');

  const handleStart = () => {
    setCurrentPage('game');
    
  };

  const handleOptions = () => {
    setCurrentPage('options');
   
  };
  const handlePageGoTo = (page:string) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gradient-split flex flex-col justify-center items-center">
      {currentPage === 'menu' && <Menu onStart={handleStart} onOptions={handleOptions} />}
      
      {currentPage === 'game' && <One handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'two' && <Two handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'three' && <Three handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'four' && <Four handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'five' && <Five handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'six' && <Six handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'seven' && <Seven handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'eight' && <Eight handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'nine' && <Nine handlePageGoTo={handlePageGoTo} />}
      {currentPage === 'ten' && <Ten handlePageGoTo={handlePageGoTo} />}
      
      {currentPage === 'options' && <div>Options Content</div>}
    </div>
  );
};

export default App;
