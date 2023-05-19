import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import CarsList from './components/CarsList';
import CarsSorted from './components/CarsSorted';
import CarLocation from './components/CarLocation';

import useCarsData from './hooks/useCarsData';
import useCarsFilter from './hooks/useCarsFilter';

import { CAR_LOCATION, HOME } from './utils/paths';


const App: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const { cars, removeCar, saveCar } = useCarsData();
  const sortedCars = useCarsFilter(cars, selectedSort);

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    setIsSorted(true);
  };

  const cancelSort = () => {
    setSelectedSort('');
    setIsSorted(false);
  };

  return (
    <div className='container'>
      <h1>Список автомобилей</h1>
      <CarsSorted value={selectedSort} onChange={handleSortChange} />
      {isSorted && (
        <div className="button-container">
          <button onClick={cancelSort}>Отменить сортировку</button>
        </div>
      )}
      <Router>
        <Routes>
          <Route path={HOME}
            element={
              <CarsList
                cars={selectedSort ? sortedCars : cars}
                removeCar={removeCar}
                saveCar={saveCar}
              />}
          />
          <Route path={CAR_LOCATION + ':id'} element={<CarLocation cars={cars} />} />
          <Route path="/*" element={<Navigate replace to="/car" />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
