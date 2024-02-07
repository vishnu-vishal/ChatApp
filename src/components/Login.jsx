import React from 'react'
import { Container ,Card, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div style={{backgroundColor:"",height:"70vh"}}>
        <Container style={{paddingLeft:"",paddingTop:"45px"}}>
            <Card varient="outlined" style={{opacity:"0.9",backgroundColor:"lightblue",padding:"15px",width:"300px",height:"390px",textAlign:"center"}}>
           
                <div style={{colour:"black",textAlign:"center"}}>
                <h1>Sign In</h1>
                <TextField fullwidth label="Email or Mobile Number" placeholder="Mobile Number or Email" style={{marginBottom:"10px",width:"220px"}}>Email</TextField>
                <TextField fullwidth label="Password" type="password" placeholder="Password" style={{marginBottom:"10px",width:"220px"}}>Password</TextField>
                <br/>
                <br/>
                {/* <font size='-1' style={{opacity:'0.9'}}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</font> */}
                <br/>
                <Link to='/home'><Button variant="contained" style={{width:"220px",borderRadius:"10px",color:"white",backgroundColor:""}}>Sign in</Button></Link>
                <p><a href=''>forgot password?</a></p>
                <p> don't Have an account?<Link to='/signin'>sign up</Link></p>
                </div>
            </Card>
        </Container>
    </div>
  )
}