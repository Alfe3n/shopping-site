import { createContext, useContext, useState } from "react";

const context = createContext({
  cart: [],
  setCart: () => { },
});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <context.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
