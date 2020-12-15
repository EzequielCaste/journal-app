import { Provider } from 'react-redux';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import './styles/styles.scss';


function JournalApp() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </div>
  );
}

export default JournalApp;