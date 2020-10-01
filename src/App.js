import React from 'react';
import './setup.css'; 
import './App.css';
import './index.css';
import './listings.css';
import './header.css';



import firebase from './firebase'
import Header from './header.js'
import Button from './button.js'
import Listings from './listings.js'

//All listing images Courtesy of the Toronto Real Estate Board, All Rights Reseved. Addresses have been obscured to protect identity. 



class App extends React.Component {

// Constructor Holding Listings and Filtered Listings
  constructor() {
    super();
    this.state = {
      listings: [],
      filteredListings: [],
    }
  }

  //filterListings is handling our userSelection state we have set in button.js. It's function is to match the user's selection to the listing type

  filterListings = (userSelection) => {
    const copyofListings = [...this.state.listings];
    
    if (userSelection === "All") {
      this.setState({
        filteredListings: copyofListings
      })
      return
    } 

    
    

    const filteredListings = copyofListings.filter( (listings) => {
      let listingType = listings.type
      return listingType === userSelection;
      // if (listingType === userSelection) {
      //   return listingType = "Condo"
      // }
    }) 
    console.log(filteredListings)
    this.setState({
      filteredListings
    })

  }

  //Grabbing Data from Firebase
  componentDidMount() {

    // Here we create a variable that holds a reference to our database
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const listings = [];
      const data = response.val();

      for (let key in data) {
        listings.push(data[key]);
      }

      this.setState({
        listings,
        filteredListings : listings,
      });
    });
  }
  
  //Rendering App on Page
  render() {
    return (
      <div className="App">

        <Header />
        <Button handleFilter={this.filterListings} />
        <div className="listingsContainer">
            {this.state.filteredListings.map((listings) => {
              return (
                <Listings listings={listings} />
              )
            })}
        </div>
        <footer>
          Created in Juno College. Copyright 2020. 
        </footer>
      </div>
    )
  }
}

export default App;
