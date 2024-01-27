// CategoryContext.js
import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const updateSelectedCategory = (categoryType) => {
    setSelectedCategory(categoryType);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, updateSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
