import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Resturants: [
        { name: "Hus Cooking", votes: 0 },
        { name: "Azuma", votes: 0 },
        { name: "Shiva", votes: 0 },
        { name: "Thai Village", votes: 0 }
      ]
    };
  }

  vote(i) {
    let newResturants = [...this.state.Resturants];
    newResturants[i].votes++;
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ resturants: newResturants });
  }

  render() {
    return (
      <>
        <h1>식당을 선택해주세요!</h1>
        <div className="resturants">
          {this.state.Resturants.map((restu, i) => (
            <div key={i} className="resturant">
              <div className="voteCount">{restu.votes}</div>
              <div className="resturantName">{restu.name}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default App;
