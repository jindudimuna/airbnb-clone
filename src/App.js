import Header from './Header';
import Main from './Main';
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {
  const cardElements = Data.map(card=>{
    return <Card 
    key={card.id}
    {...card}


    /*/coverImg ={card.coverImg}
    title ={card.title} 
    description ={card.description}
    price = {card.price}
    location ={card.location}
    rating ={card.stats.rating}
    star ={card.star}
    openSpots ={card.openSpots}
    
    reviewcount={card.stats.reviewCount}
      /*/ 
    />
 
  })
  return (
    <div>
      <Header />
      <Main />
      <div className='card-items'>
     {cardElements}
    </div>
    </div>
  );
}

export default App;
