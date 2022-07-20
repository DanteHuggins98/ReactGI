import { Component } from 'react';
import Basicinfo from './Components/BasicInfo.js';



let people = [
  {
    name: 'Dante',
    phone: '(704)111-1111',
    age: 24,
    email: 'huggdante98@gmail.com',
    favoriteColor: 'Purple'
  },
  {
    name: 'Demetrius',
    phone: '(704)222-2222',
    age: 21,
    email: 'a@mail.com',
    favoriteColor: 'Red'
  },
  {
    name: 'Demarcus',
    phone: '123456789',
    age: 25,
    email: 'b@mail.com',
    favoriteColor: 'Green'
  },
  {
    name: 'Kayla',
    phone: '123456789',
    age: 27,
    email: 'c@mail.com',
    favoriteColor: 'Yellow'
  },
  {
    name: 'Ashley',
    phone: '123456789',
    age: 23,
    email: 'd@mail.com',
    favoriteColor: 'Aqua Marine'
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <Basicinfo person={person} />
  }
  )
}
//EZ
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {

      }
    }
  }
//Very EZ 
render() {
  return (iteratePeople(people))
  }
}

