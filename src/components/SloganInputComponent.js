import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Table, FormText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../helpers/environment';

const InputStyleFields = styled.div `
  background: #;
  border-radius: 20px;
`
let sloganDisplay = '';
class SloganInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySlogan: '',
      replaceNum: 0,
      replaceSlogan: '',
      replaceNumber: 0,
      sloganList: [],
      deleteSlogan: '',
      title: '',
      sloganId: '',
      rerender: 0,
    }
  }
  
  allSloganFunc = () => {
  
    let url = `${APIURL}/slogan/getAll`
    fetch((url), {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
    })
      .then(
        (response) => response.json()
      ).then(
        (data) => {
          console.log("data:",data)
          this.setState({ sloganList: data })
      })
      
  }
  
  loadSloganArr = () => {
    // let sloganCount = 1;
    let newSlogList = [];
  
      for(let sloganCount=1; sloganCount<5; sloganCount++) {

    let url = `${APIURL}/slogan/${sloganCount}`
  fetch((url), {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
    })
  })
    .then(
      (response) => response.json()
    ).then(
      (data) => {
        // this.setState({ sloganObject: data })
        newSlogList.push(data);
        
    })
  }
  console.log('newSlogList:',newSlogList);

  this.setState({ sloganList: newSlogList });

  console.log('sloganList:',this.state.sloganList);
  this.arr = newSlogList;
  }
  componentWillMount() {
    this.setState({ rerender: this.state.rerender+1 })
  }
  componentDidMount = () => {
    this.allSloganFunc()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitDelete = (e) => {
    console.log('butthole ID:',e.target.id)
    console.log('butthole className:',e.target.className)
    e.preventDefault();

    fetch(`${APIURL}/slogan/delete/${parseInt(this.state.deleteSlogan)}`, {
      method: 'DELETE',
      // body: JSON.stringify({ id: e.target.id }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      })
    })
    this.setState ({ rerender: this.state.rerender++ })     
  }

  handleSubmitAdd = (e) => {
    e.preventDefault();

    fetch(`${APIURL}/slogan/create`, {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token'),
    }),
  body: JSON.stringify({title: this.state.title}),
  
    })
    .then(response => response.json())
  }

  fetchSlogan = (slogIndex) => {
    let url = `${APIURL}/slogan/${slogIndex}`
    fetch((url), {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
    })
    .then(
      (response) => response.json()
    )
    .then(
      (data) => {
        console.log('data:',data.title)
    // sloganDisplay = data.title;
        console.log('sloganDisplay:',sloganDisplay)
        return sloganDisplay
      }
    )
    .catch(
    )
  }

  updateSlogan = event => {
    event.preventDefault();
    let id = this.state.sloganId
    let title = this.state.title
    let newSlogan = { slogan: { title: title} }

    fetch(`${APIURL}/slogan/update/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSlogan)
    }).then(response => response.json()).then(response => window.alert("Updated!"))
  }

  render(){
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID#</th>
              <th>Motivational Slogan</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sloganList.map((tag) => 
              <tr key={tag.id}>
              <th scope="row">{tag.id}</th>
              <td >{ tag.title }</td>
              </tr>) 
            }
          </tbody>
        </Table>
        <br /><br />
        <div className="add-slogan-title">
          <h5>
            Add Slogan
          </h5>
        </div>
        
        <form onSubmit={this.handleSubmitAdd}>
          <InputStyleFields>
            <div className="field-div">
              <input className="add-style-field" name="title" value={this.state.addSlogan} onChange={this.handleChange} type="text" placeholder ="             Enter Your New Slogan Here" style={{width: 80 + "%" }}/>
            </div>
          </InputStyleFields>
          <br />
          <Button  className="add-slogan-button">Create</Button>
        </form>
        <br /><br /><br />
        <div className="replace-slogan-title">
          <h5>
            Replace Slogan
          </h5>
        </div>
        <form onSubmit={this.updateSlogan}>
        <input type="number" placeholder="           Slogan ID #" onChange={this.handleChange} name="sloganId" />
        <input className="replace-slogan-field" onChange={this.handleChange} type="text" placeholder="                             New Slogan"  style={{width: 80 + "%" }} name="title" />
          <br /><br />
          <Button  className="replace-slogan-button" type="submit">Update</Button>
        </form>
        <br /><br /><br />
        <div className="delete-slogan-title">
          <h5>
            Delete Slogan
          </h5>
        </div>
        <form onSubmit={this.handleSubmitDelete}>
          <input className="delete-slogan-field" name="deleteSlogan" onChange={this.handleChange} type="text" placeholder="           Enter Slogan Number to Delete"  style={{width: 80 + "%" }} />
          <br /><br />
          <Button  id="delSloganButton" type="submit" className="delete-slogan-button">Delete</Button>
        </form>
        <br /><br />
      </div>
    )
  }
}

export default SloganInputComponent;




