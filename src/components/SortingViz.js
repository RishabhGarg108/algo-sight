import React, { Component } from "react";
import { generateRandomArray } from "../algorithms/sortingAlgorithms/sortingHelper";
import "./SortingViz.css";
import mergeSort from "../algorithms/sortingAlgorithms/mergeSort";

const DEFAULT_ARRAY_SIZE = 100;
const MIN_BAR_HEIGHT = 20;
const MAX_BAR_HEIGHT = 450;

class SortingViz extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], animations: [], selectedAlgorithm: null };
  }

  // reset array inside state to a random generated array
  resetArray() {
    const array = generateRandomArray(
      DEFAULT_ARRAY_SIZE,
      MIN_BAR_HEIGHT,
      MAX_BAR_HEIGHT
    );
    this.setState({ array });
  }

  componentDidMount() {
    this.resetArray();
  }

  // maps all the array values to their corresponding bars
  arrayToBars(array) {
    return array.map((value, idx) => {
      return (
        <div
          id={idx}
          key={idx}
          className="array-bar"
          style={{ height: `${value}px` }}
        ></div>
      );
    });
  }

  render() {
    let { array } = this.state;
    array = this.arrayToBars(array);
    return (
      <div>
        <nav className="navbar bg-dark bg-primary">
          <a className="navbar-brand" href="#">
            <button className="btn btn-primary">Sorting Visualizer</button>
          </a>
          <button className="btn">Generate New Array</button>
          <button className="btn">Bubble Sort</button>
          <button className="btn">Merge Sort</button>
          <button className="btn">Heap Sort</button>
          <button className="btn">Sort!</button>
        </nav>
        <div className="container">
          <div className="body">{array}</div>
        </div>
      </div>
    );
  }
}

export default SortingViz;
