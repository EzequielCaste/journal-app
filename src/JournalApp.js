import './App.css';
import { AppRouter } from './routers/AppRouter';
import './styles/styles.scss'

function JournalApp() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default JournalApp;