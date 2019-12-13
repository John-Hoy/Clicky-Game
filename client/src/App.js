import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json.js";
import NavBar from "./components/NavBar";
import FriendCard from "./components/FriendCard";

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    mid: "Click an image to begin!",
    colorStyle: "text-white"
  };

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
      </span>
    )
  }
}
export default App;
