import React, { createContext, useState } from 'react';

export type CardProviderProps = {
  children: React.ReactNode;
};

export type CardContextInterface = {
  name: string;
  setName: (name: any) => void;
};

export const CardContext = createContext<CardContextInterface>({} as CardContextInterface);

export const CardProvider = ({ children }: CardProviderProps) => {
  const [name, setName] = useState('');

  return (
    <CardContext.Provider value={{name, setName}}>
        {children}
    </CardContext.Provider>
  );
};
