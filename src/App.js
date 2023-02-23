import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Sameh L'andolsi ",
    profession: "Full stack Developper",
    bio: " Full Stack Developer with experience in javascript , react, etc....",
    image:
      "https://i.pinimg.com/originals/9b/e3/9c/9be39c6c000a7175483fc15f615c9c48.jpg",
    show: true,
    cnt: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        cnt: prevState.cnt + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div className="pos app">
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">Count: {this.state.cnt} sec</div>
              </section>
            </div>
          )}
          <button type="button" className="btn" onClick={this.handleClick}>
            Show Me
          </button>
        </div>
      </div>
    );
  }
}
export default App;
