import React from 'react';
import './App.css';
import contacts from './contacts.json';



class App extends React.Component {
   getContacts() {
      let contactList = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]];
    return contactList;
    }
    populateCelebs() {
        return this.getContacts().map((celeb, i) => {
            return (<tr>
            <td><img src={celeb.pictureUrl} alt=""></img> </td>
            <td>{celeb.name} </td>
            <td>{celeb.popularity} </td>
            </tr>)
        })
    }

    
    render() {
      return (
        <div className="App" >
      
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          
          {this.populateCelebs()}
          </tbody>
        </table>
        </div>
      );
    }
  
}

export default App;