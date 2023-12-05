import React, { Component } from 'react';

export default class BuggyComponent extends Component {
  state = {
    value: 0,
    data: null,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let value = Math.random()
    // Simulate a data fetch with a 50% chance of failure
    if (value < 0.5) {
      this.setState({value: value});
      this.setState({ error: 'Failed to fetch data' });
    } else {
      this.setState({value: value});
      this.setState({ data: 'Fetched data successfully' });
    }
  }

  render() {
    const { value, data, error } = this.state;

    if (error) {
      throw new Error(error);
    }

    return <div>{data ? data : 'Loading...'}<br/>{value}</div>;
  }
}
