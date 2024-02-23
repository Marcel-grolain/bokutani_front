import React, { createContext, useState } from 'react';

export const DeclarContext = createContext();


export const DeclarObjectProvider = ({ children }) => {
    const [etatDeclaration, setEtat] = useState('');
  
    return (
      <DeclarContext.Provider value={{ etatDeclaration, setEtat }}>
        {children}
      </DeclarContext.Provider>
    );
}
