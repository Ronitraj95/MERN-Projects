import React, { createContext, useState } from "react";
import ReactDOM from 'react-dom/client'; // ✅ Import ReactDOM correctly
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

export const Context = createContext({
  isAuthorized: false,
});


const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// ✅ Use createRoot directly (not via ReactDOM)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);