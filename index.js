import React, { useState } from "react";
import ReactDOM from 'react-dom/client';


class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' }; // initial value, state

    this.handlechange = this.handlechange.bind(this);
    this.handleclick = this.handleclick.bind(this); // Fixed typo here
  }

  handlechange(event) {
    this.setState({ value: event.target.value });
  }
  

  handleclick(event) {
    alert('A name was submitted: ' + this.state.value); // Access state value
    event.preventDefault();
  }

  render() {
    return (
      <form>
        Name here
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlechange}
        />
        <button type="button" onClick={this.handleclick}>Submit</button> {/* Changed to "button" */}
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);


//using textarea tag and taking input

class Enterinput extends React.Component{
  constructor(props){
    super(props);

    this.state = {                       //initial state
      value : ''
    };
    
    this.handlechange = this.handlechange.bind(this);
    this.handleclick = this.handleclick.bind(this); // Fixed typo here

  }

  handlechange(event){
    this.setState({ value: event.target.value });

  }

  handleclick(event){
    alert('your review is submitted ' + this.state.value)
    event.preventDefault();
  }


 render() {
  return (
    <form onSubmit={this.handleclick}>

      <label>
        write essay here
        <textarea value={this.state.value} onChange={this.handlechange}></textarea>
      </label>

      <input type="submit" value="submit" ></input>
     
    </form>
  )
 }
}

const shoot = ReactDOM.createRoot(document.getElementById('shoot'));
shoot.render(<Enterinput ></Enterinput>)


//Using selecttag and giving option to select then return alert with option you choose ;

class Option extends React.Component{
  constructor(props){
    super(props);

    this.state = ({ value : 'Apple'})

    this.handlesubmit = this.handlesubmit.bind(this)
    this.handlechange = this.handlechange.bind(this)

    

    
  }

  handlechange(event){
    this.setState({value : event.target.value});
  }

  
  handlesubmit(event) {
    alert('Your favorite fruit is: ' + this.state.value);
    event.preventDefault();
  }

  render(){

    return(
      <form onSubmit={this.handlesubmit}>

        <label >
          who are you?
          <select value={this.state.value} onChange={this.handlechange}>
            <option value="Apple"> Ram </option>
            <option value="orange"> Sham</option>
          </select>
        </label>

        <input type="submit" value="submit"/>


      </form>

    );
      

    
  }
}

const boot = ReactDOM.createRoot(document.getElementById('boot'));
boot.render(<Option />)

// take input of files from devices 

class Files extends React.Component{
  constructor(props){
  super(props);

  this.state = {value : ''};
  this.handlechange = this.handlechange.bind(this);
  this.handleclick  = this.handleclick.bind(this);
  
  }

  handlechange(event){
    this.setState({ value : event.target.value});


  }

  handleclick(event){
    alert('we import file  from your device '+ this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form >
        <label>
          choose file from your device

          <input type ="file" 
          
          value={this.state.value} 
          onChange={this.handlechange}>

          </input>
          
        </label>

        {/*<input type="file" value="choose"></input>*/}
        <button type="submit" onClick={this.handleclick}>submit</button>

      </form>

    );
  }
  
}


const pro = ReactDOM.createRoot(document.getElementById('pro'));
pro.render(< Files />)
