import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import './Card.css';
import data from './data';


function App() {
  const cards = data.map( (item) => {
        return (
          <Card key = {item.id}
                img = {item.coverImg}
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                country = {item.location}
                title = {item.title}
                price = {item.price} 
                openSpots = {item.openSpots} />
        )
  }
  )
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-display">
      {cards}
      </div>
    </>
  );
}

export default App;
