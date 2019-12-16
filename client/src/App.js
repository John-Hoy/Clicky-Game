import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json.js";
import NavBar from "./components/NavBar";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer"

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    mid: "Click an image to begin!",
    colorStyle: "text-white"
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      })
    }
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({ mid: "Oh no! Click an image to play again." });
    this.setState({ score: 0 });
    this.setState({ colorStyle: "text-danger" })
    return true;
  }
  
  youWin = () => {
    this.setState({ highScore: 15 }, function () {
      console.log(this.state.highScore);
    })
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({ mid: "OMG! You Win!" });
    this.setState({ score: 0 });
    this.setState({ colorStyle: "text-success" })
    return true;
  }

  render(){
    return (
      <span>
        <NavBar score={this.state.score} highScore={this.state.highScore} mid={this.state.mid} colorStyle={this.state.colorStyle} />
        <Title></Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard/>
          ))}
        </Wrapper>
        <Footer />
      </span>
    )
  }
}
export default App;
