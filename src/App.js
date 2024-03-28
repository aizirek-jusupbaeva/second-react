import './App.css';
import Cart from './companents/cart/Cart';
import Form from './companents/form/Form';
import img1 from './assets/img1.webp'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.webp'
import img7 from'./assets/img7.webp'
import img8 from './assets/img8.jpg'
const data = [
  {
    image: img1,
    price_line: '400',
    price: '350'
  },
  {
    image: img2,
    price_line: '350',
    price: '290'
  },
  {
    image: img3,
    price_line: '500',
    price: '420'
  },
  {
    image: img4,
    price_line: '340',
    price: '300'
  },
  {
    image: img5,
    price_line: '800',
    price: '740'
  },
  {
    image: img6,
    price_line: '350',
    price: '290'
  },
  {
    image: img7,
    price_line: '290',
    price: '260'
  },
  {
    image: img8,
    price_line: '930',
    price: '860'
  }

]

function App() {
  return (
    <div className="App">
      {
        data.map(item => (
          <Cart 
           image={item.image}
           price_line={item.price_line}
           price={item.price}
           />
        ))
      }
    </div>
  );
}

export default App;
