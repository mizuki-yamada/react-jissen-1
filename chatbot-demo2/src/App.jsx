import "./assets/styles/style.css";
import defaultDataset from "./dataset";
import React from "react";
import { AnswersList } from "./components";

export default class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers,
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers}></AnswersList>
        </div>
      </section>
    );
  }
}
