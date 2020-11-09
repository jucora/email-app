import Header from './components/Header';
import Registration from './containers/Registration';
import Footer from './components/Footer';
import './style/App.scss';

const App = () => {
  return (
    <div>
      <Header />;
      <Registration />
      <Footer />;
    </div>
  );
};

export default App;
