import React from 'react';
import './sign-in.styles.scss';
import classes from '*.module.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    render() {
        return(
           <div className='sign-in'>
             <h2> I already have an account </h2>
             <span> Sign in with your email and password</span>
             <form onSubmit={this.handleSubmit}>
                 <input name='email' type='email' value={this.state.email} required />
                 <label> Email</label>
                 <input name='password' type='passwrord' value= {this.state.email} required />
                 <label>Email</label>
                 <input type='submit' value='Submit Form'
             </form>
           </div>
        )
    }
}
export default SignIn;