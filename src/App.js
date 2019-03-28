import React from 'react';
import './style.css';
class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			email:'',
			password:'',
			usertype:'',
		}
	}
	signUp=(e)=>{
		var username=this.refs.username.value;
		var password=this.refs.password.value;
		var email=this.refs.email.value;
		var usertype=this.refs.usertype.value;
		var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
		if(username===''||email===''||password===''){
            alert("Enter all details");
        }
		else if(username.length<8){
            alert("Please enter a username with atleast 8 characters");
        }
		else if(!password.match(paswd)){
    		alert("Password must contain atleast one uppercase,lowercase,special character and number and must atleast 8 characters long");
		}
		else if(!email.match(mailformat)){
   			alert("enter a valid email");
		}
		else{
			fetch("http://cvhunt.com/API/signupinfo",{method:'POST',
				body:JSON.stringify({username:username,email:email,password:password,usertype:usertype})
			})
				.then(res=>res.json())
				.then(response=>{
				console.log(response);
				alert("success");
				})
				.catch(error=>console.log("error".error));
				
		}
	}
	render(){
		return(
         <div className="signuptable">
         	<h1>Sign Up Here!!</h1>
         	<table>
            <tbody>
         		<tr>
         			<td>Username</td>
         			<td><input type="text" ref="username" /></td>
         		</tr>
         		<tr>
         			<td>Email</td>
         			<td><input type="email" ref="email" /></td>
         		</tr>
         		<tr>
         			<td>Password</td>
         			<td><input type="password" ref="password" /></td>
         		</tr>
         		<tr>
         			<td>Usertype</td>
         			<td><input type="number" ref="usertype" /></td>
         		</tr>
         		
         		<tr>      			
         			<td><button type="submit" id="signup" onClick={this.signUp}>SIGNUP</button></td>
         		</tr>
            </tbody>
         	</table>
        </div>
      );
	}
}

export default App;