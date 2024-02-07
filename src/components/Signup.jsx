import React from 'react'
import { Container ,Card, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div style={{backgroundColor:"",height:"70vh"}}>
        <Container style={{paddingLeft:"",paddingTop:"45px"}}>
            <Card varient="outlined" style={{backgroundColor:"lightblue",padding:"15px",width:"300px",height:"390px",textAlign:"center"}}>
           
                <div style={{colour:"black",textAlign:"center"}}>
                {/* <h1>Letschat</h1> */}
                <TextField fullwidth label="Email or Mobile Number" placeholder="Mobile Number or Email" style={{marginBottom:"10px",width:"220px"}}>Email</TextField>
                <TextField fullwidth label="FullName" placeholder="Full Name" style={{marginBottom:"10px",width:"220px"}}>Name</TextField>
                <TextField fullwidth label="User Name" placeholder="User Name" style={{marginBottom:"20px",width:"220px"}}>UserName</TextField>
                <TextField fullwidth label="Password" type="password" placeholder="Password" style={{marginBottom:"10px",width:"220px"}}>Password</TextField>
                <br/>
                <br/>
                {/* <font size='-1' style={{opacity:'0.9'}}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</font> */}
                <br/>
                <Button variant="contained" style={{width:"220px",borderRadius:"10px",color:"white",backgroundColor:""}}>Sign up</Button>
                <p>Have an account?<Link to='/'>Log in</Link></p>
                </div>
            </Card>
        </Container>
    </div>
  )
}