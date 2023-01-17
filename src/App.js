import './App.css';
import CatCard from "./components/CatCard";


function App() {
  return (
    <div className="App">
        <h1 className={'main_title'}>Ты сегодня покормил кота?</h1>
        <div className={'cards_wrapper'}>
            <CatCard taste={'с фуагра'} weight={'0,5'} disabled={true}/>
            <CatCard taste={'с рыбой'} weight={'2'} disabled={false}/>
            <CatCard taste={'с курой'} weight={'5'} disabled={false}/>
        </div>

    </div>
  );
}

export default App;
