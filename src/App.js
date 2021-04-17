import './App.css';
import userData from './data/data.json'
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);


  // console.log(cart, '<---cart');

  const handleAddMe = (myUser) => {
    // console.log(myUser, '<<-----user');
    const newCart = [...cart, myUser];
    // console.log(newCart, '<<----newCart');
    setCart(newCart);
    // console.log(cart, '<<----cart');
    
  }

  return (
    <div className="App">
      <Cart cart={cart} userData={userData}></Cart>
      <ul>
        {
          userData.map(user => <User user={user} handleAddMe={handleAddMe} userData={userData} key={user.id} ></User>)
        }
      </ul>
    </div>
  );
}

export default App;
