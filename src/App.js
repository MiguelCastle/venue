import { Route, Routes, Navigate} from 'react-router-dom';
import ToTop from './components/common/toTop/toTop';
import BudgetCalculator from './components/screens/BugetCalculator/BudgetCalculator';
import Home from './components/screens/Home/Home';
import Services from './components/screens/Services/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path="/budget-calculator" element={<BudgetCalculator/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>    
      <ToTop/>
    </>
  );
}

export default App;
