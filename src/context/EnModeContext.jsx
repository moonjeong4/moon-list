import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const EnModeContext = createContext();

function EnModeProvider({ children }) {
  const [isEnMode, setIsEnMode] = useLocalStorageState(false, 'isEnMode');

  function toggleEnMode() {
    setIsEnMode((isEn) => !isEn);
  }

  return (
    <EnModeContext.Provider value={{ isEnMode, toggleEnMode }}>
      {children}
    </EnModeContext.Provider>
  );
}

function useEnMode() {
  const context = useContext(EnModeContext);
  if (context === undefined)
    throw new Error('EnModeContext was used outside of EnModeProvider');
  return context;
}

export { EnModeProvider, useEnMode };
