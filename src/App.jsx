import './App.css';
import PasswordApp from './components/password/passwordApp';
import InfoApp from './components/info/infoApp';
const App = () => {
  return (
    <div className="app">
      <h1>Генератор паролей</h1>
      <PasswordApp/>
      <InfoApp/>
    </div>
  );
}

export default App;
