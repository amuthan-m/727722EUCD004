import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material';

export default class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            fullNameError: false,
            fullNameHelperText: '',
            email: '',
            emailError: false,
            emailHelperText: '',
            password: '',
            passwordError: false,
            passwordHelperText: '',
            confirmPassword: '',
            confirmError: false,
            confirmHelperText: '',
        };
    }

    handleFullname = (e) => {
        this.setState({
            fullName: e.target.value,
            fullNameError: false,
            fullNameHelperText: ''
        });
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
            emailError: false,
            emailHelperText: ''
        });
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value,
            passwordError: false,
            passwordHelperText: ''
        });
    }

    handleConfirm = (e) => {
        this.setState({
            confirmPassword: e.target.value,
            confirmError: false,
            confirmHelperText: ''
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.fullName === '') {
            this.setState({
                fullNameError: true,
                fullNameHelperText: 'You must fill in your full name'
            });
        }
        
        if(this.state.email === ''){
            this.setState({
                emailError: true,
                emailHelperText: 'You must fill in your email address'
            });
        }
        if(this.state.password === ''){
            this.setState({
                passwordError: true,
                passwordHelperText: 'You must fill in your password'
            });
        }
        if(this.state.confirmPassword === ''){
            this.setState({
                confirmError: true,
                confirmHelperText: 'You must fill in your confirm password'
            });
        }
        if(this.state.password !== this.state.confirmPassword){
            this.setState({
                confirmError: true,
                confirmHelperText: 'Incorrect confirm password'
            });
        }
        if (this.state.fullName !== '' && this.state.emai !== '' && this.state.password !== '' && this.state.confirmPassword !== '' && this.state.password === this.state.confirmPassword) {
            alert('Form Submitted Successfully');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    name="fullName"
                                    value={this.state.fullName}
                                    onChange={this.handleFullname}
                                    variant="outlined"
                                    label="Full Name"
                                    type='text'
                                    error={this.state.fullNameError}
                                    helperText={this.state.fullNameHelperText}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleEmail}
                                    variant="outlined"
                                    label="Email"
                                    type='email'
                                    error={this.state.emailError}
                                    helperText={this.state.emailHelperText}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                    variant="outlined"
                                    label="Password"
                                    type='password'
                                    error={this.state.passwordError}
                                    helperText={this.state.passwordHelperText}/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    name="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleConfirm}
                                    variant="outlined"
                                    label="Confirm Password"
                                    type='password'
                                    error={this.state.confirmError}
                                    helperText={this.state.confirmHelperText}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" size="small">Submit</Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

