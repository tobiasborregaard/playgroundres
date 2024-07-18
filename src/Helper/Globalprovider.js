import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState(JSON.parse(localStorage.getItem('selectedProjects')) || []);

  return (
    <GlobalContext.Provider value={{ selectedProducts, setSelectedProducts, selectedProjects, setSelectedProjects }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}
const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [x, setScreenSizeWidth] = useState(window.innerWidth);
  const [y, setScreenHeight] = useState(window.innerHeight);

  return x, y;
}

