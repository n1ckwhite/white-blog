import {Routes,Route} from 'react-router-dom'
import { MainPage } from '../../pages/MainPage/MainPage';
import { AppHeader } from '../AppHeader/AppHeader';
function App() {
  return (
    <>
    <AppHeader/>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    </Routes>
    </>
  );
}

export default App;
