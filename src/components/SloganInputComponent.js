import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Table, FormText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// fetchWorkouts = () => {
//   fetch("http://localhost:3000/api/log", {
//     method: 'GET',
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': this.props.auth.sessionToken
//     })
//   })
//     .then((res) => res.json())
//     .then((logData) => {
//       return this.setState({ workouts: logData })
//     })
// }



// workoutUpdate = (event, workout) => {
//   fetch(`http://localhost:3000/api/log/${workout.id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ log: workout }),
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': this.props.auth.sessionToken
//     })
//   })
//     .then((res) => {
//       this.setState({ updatePressed: false })
//       this.fetchWorkouts();
//     })
// }

// fetch('http://localhost:3000/api/log/', {
//   method: 'POST',
//   body: JSON.stringify({log: this.state}),
//   headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': this.props.token
//   })
// })
// .then(response => response.json())
// .then(workoutData => console.log(workoutData));
// event.preventDefault();


// let listGenerator = () => {
//   return (
//     <ul>
//       {this.props.list.map(function(listValue){
//         return <li>{listValue}</li>;
//       })}
//     </ul>
//   )
// }

// sloganFunc = () => {
  
//   let url = `http://localhost:3000/slogan/${sloganCount}`
//   fetch((url), {
//     method: 'GET',
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//     })
//   })
//     .then(
//       (response) => response.json()
//     ).then(
//       (data) => {
//         this.setState({ sloganObject: data })
//     })
//   let x = this.state.sloganObject;
//   let sloganArr = [];
//   x.map(x => sloganArr.push[x]);
//     console.log(sloganArr);
// }

// fetch('http://localhost:3000/', {
//   method: 'POST',
//   body: JSON.stringify({
//     startTime: DataTypes.DATE,
//     endTime: DataTypes.DATE,
//     totalTime: DataTypes.DATE,
//     level: DataTypes.INTEGER,
//     elevation: DataTypes.INTEGER,
//     mhr: DataTypes.INTEGER,
//     weight: DataTypes.INTEGER,
//     user_id: DataTypes.INTEGER,
//     slogan_id: DataTypes.INTEGER
//   }),
//   headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': this.props.token
//   })
// })
// .then(response => response.json())
// .then(workoutData => console.log(workoutData));
// event.preventDefault();

// startTime: req.body.timeIn,
//             finishTime: req.body.timeOut,
//             totalTime: req.body.totalTime,
//             resistance: req.body.resistance,
//             elevation: req.body.elevation,
//             mhr: req.body.calories,
//             weight: req.body.weight,
//             user_: req.body.user_id,
//             slogan_id: req.body.slogan_id
// ReactDOM.render(<listGenerator list={[1,2,3,4,5]} />, document.getElementById('listGenerator'));

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
    }
  }
  
  allSloganFunc = () => {
  
    let url = `http://localhost:3000/slogan/getAll`
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

    let url = `http://localhost:3000/slogan/${sloganCount}`
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

  fetchSlogan = (index) => {
    let url = `http://localhost:3000/slogan/${index}`
    fetch((url), {
      method: 'UPSERT',
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
          // (sloganDisplay+'slogIndex')= data.title;
          sloganDisplay=data.title;

          console.log('sloganDisplay:',sloganDisplay)
        }
      )
      // .catch(err => {
      //   if(err==404) {
      //     fetch(`http://localhost:3000/slogan/`, {
      //       method: 'POST',
      //       body: JSON.stringify({ 
      //         title: this.replaceSlogan 
      //       }),
      //       headers: new Headers({
      //         'Content-Type': 'application/json',
      //         'Authorization': this.props.auth.sessionToken
      //       })
      //   })
      //     .then((res) => res.json())
      //     .then((sloganData) => {
      //       this.props.updateWorkoutsArray()
      //       this.setState({
      //         result: '',
      //         description: '',
      //         def: ''
      //       })
      //     })
      // } else {
      //   if(err==)
      // }
      //   }
      // })
  // }
  }
  componentDidMount = () => {
    this.allSloganFunc()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitDelete(e) {
    // const _this = this;
      fetch(`http://localhost:3000/slogan/7`, {
        method: 'DELETE',
        body: JSON.stringify({ id: e.target.id }),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      })
           
  }
  
  fetchSlogan = (slogIndex) => {
    let url = `http://localhost:3000/slogan/${slogIndex}`
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



  render(){
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Motivational Slogan</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sloganList.map((tag, index) => 
              <tr key={index}>
              <th scope="row">{index+1}</th>
              <td >{ tag.title }</td>
              </tr>) 
            }
          </tbody>
        </Table>
        <br /><br />
        <div>
          <h5>
            Add Slogan
          </h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="number" placeholder="#"  style={{width: 2 + "em" }} />
          <input name="addSlogan" value={this.state.addSlogan} onChange={this.handleChange} type="text" placeholder="        Enter Your New Slogan Here"  style={{width: 80 + "%" }} />
          <br /><br />
          <Button block>Update</Button>
        </form>
        <br /><br />
        <div>
          <h5>
            Replace Slogan
          </h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input name="replaceSlogan" value={this.state.replaceSlogan} onChange={this.handleChange} type="text" placeholder="        Enter Your New Slogan Here"  style={{width: 80 + "%" }} />
          <br /><br />
          <Button block>Add</Button>
        </form>
        <br /><br />
        <div>
          <h5>
            Delete Slogan
          </h5>
        </div>
        <form onSubmit={this.handleSubmitDelete}>
          <input name="deleteSlogan" value={this.state.updateSlogan} onChange={this.handleChange} type="text" placeholder="        Enter Slogan Number to Delete"  style={{width: 80 + "%" }} />
          <br /><br />
          <Button block>Delete</Button>
        </form>
        <br /><br />
      </div>
    )
  }
}

export default SloganInputComponent;

// document.getElementById('listGenerator')= () => {
//       document.getElementById('listGenerator').innerText = ``


