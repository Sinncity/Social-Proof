// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ReviewCard from './ReviewCard';
import StarCard from './StarCard';

function App() {
  return (
    <div className="App">
      <div className="top-image"></div>
      <div className="bottom-image"></div>

      <div className="grid-container">
        <Header />
        <StarCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default App;
