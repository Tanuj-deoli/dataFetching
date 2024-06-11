import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FruitsWithCalories } from './Fruits';
import { Fruits } from './FruitList';
import { v4 as uuidv4 } from 'uuid';

function Home() {

  const [items, setItems] = useState([
    { id: uuidv4(), name: 'Item 1' },
    { id: uuidv4(), name: 'Item 2' },
    { id: uuidv4(), name: 'Item 3' },
  ]);
  const [Fruitslist, setList] = useState(FruitsWithCalories)





  console.log(FruitsWithCalories.length);

  const listItem = Fruits.map((list, index) => <li id={index}>{list}</li>)

  Fruitslist.sort((a, b) => a.name.localeCompare(b.name))  //ALPHABETIC

  const listWithCalories = Fruitslist.map((list, index) => <li id={list.id} key={list.id}>
    <div className="row mt-3">
      <div className='col-md-2'>{list.name}</div>
      {""}
      <div className='col-md-1'><b>{list.calories}</b></div>
      <div className="col-md-2"><button onClick={() => deleteItem(list.id)}>Delete</button></div>
    </div>
  </li>)


  const deleteItem = (id) => {
    const NewItem = items.filter(filter => filter.id !== id)
    setItems(NewItem)

    const ListNewItem = Fruitslist.filter(filter => filter.id !== id)
    setList(ListNewItem)

  }

  return (
    <Container>
      <h2>home page</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* <ul className='mt-5'>{listItem}</ul> */}
      <ol className='listWithCalories'>{listWithCalories}</ol>
    </Container>
  )
}

export default Home
