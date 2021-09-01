import { FC, createContext } from 'react';
import './App.css';
import Main from './components/Main';

export const Msg = createContext(
  (_: string) => { },
);

const App: FC = () => {


  return (
    <div className="App">
      <Main />
    </div >
  )
}


export default App;

