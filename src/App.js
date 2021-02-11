import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';


function App() {
  
  // Iteration 1

  //localContacts we are importing from original contacts array
  let localContacts = [...contacts]
  //setting Hook up, with [variable, function variable]=useState(the imported contacts array)
  const [firstFive, setFirstFive] = useState(localContacts.splice(0,5)) //splice 0-5 becasue 0is Index and 5 is where we want to end the splice
  const [newCelebs, setNewCelebs] = useState(localContacts)



  //Iteration 4
  //add a delete button next to each Celeb
  //has to be on top, because we don't want button on bottom. Have to add to ShowFive()
  const deleteCeleb = (i) => {
    let newArr3 = [...firstFive]
    newArr3.splice(i, 1)

    setFirstFive(newArr3)
  }



   // Create an array with first 5 contacts from list
  // Create a table to display: PIC, NAME, POPULARITY
  const ShowFive = () => {
    return firstFive.map((eachCeleb, i) => {
      return <li key={i}><img src={eachCeleb.pictureUrl} alt="celebrity" />
               <b>Name:</b>{eachCeleb.name}
                <b>Popularity:</b> {eachCeleb.popularity}
                <button onClick={()=> deleteCeleb(i)}>Delete Celeb</button>
              </li>
    })
  }
  //Iteration 2
  //create button to add random Celebs to original 5
  const addRandom = () => {
    if (newCelebs.length <= 0) { //if newCelebs is greater than 0 we proceed to add random celebs
      return
    }
    let randomN = Math.floor(Math.random() * newCelebs.length)//generating random forumla
    let tempCelebs = [...firstFive]
    let tempAllCelebs = [...newCelebs]
    tempCelebs.unshift(tempAllCelebs[randomN])//unshift adds to the new array
    tempAllCelebs.splice(randomN, 1)//splice changes the original array by adding or removing from it
    setFirstFive(tempCelebs)
    setNewCelebs(tempAllCelebs)
  }

  //Iteration 3
  //add a button that will sort by name alphabetically 
  const sortByName = () => {
    let newArr1 = [...firstFive]
    newArr1.sort((a, b) => {//sort function -> to alphabetize it from A-Z
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })

    setFirstFive(newArr1)
  }
  //add a second button to sort by popularity highest to lowest
  const sortByPopularity = () => {
    let newArr2 = [...firstFive]
    newArr2.sort((a, b) => {//sorting through the original array
      return b.popularity - a.popularity //classifying it by most -> least popular
    })
    setFirstFive(newArr2)
  }




  return (
    <div>
    <button onClick={addRandom}>Add Random Celeb</button>
    <button onClick={sortByName}>Sort By Name</button>
    <button onClick={sortByPopularity}>Sort By Popularity</button>
    <ShowFive />
    </div>
  );
}

export default App;