import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addItem = (item) => {
    setData([...data, item]);
  };

  return (
    <DataContext.Provider value={{ data, addItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};