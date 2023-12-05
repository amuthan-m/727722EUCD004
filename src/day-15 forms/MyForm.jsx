import React, { Component } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      submissions: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submissions: [...this.state.submissions, { name: this.state.name, age: this.state.age }],
      name: '',
      age: '',
    });
  };

  renderTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="submission table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.submissions.map((submission, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {submission.name}
                </TableCell>
                <TableCell align="right">{submission.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Age</InputLabel>
            <Select
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>

        {this.state.submissions.length > 0 && (
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            <Grid item xs={12}>
              {this.renderTable()}
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default MyForm;
