import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addItem = (item) => {
    setData([...data, item]);
  };

  const clearData = () => {
    setData([]);
  };

  return (
    <DataContext.Provider value={{ data, addItem, clearData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};