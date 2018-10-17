import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Table, FormText, Button } from 'reactstrap';
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

// workoutDelete = (event) => {
//   fetch(`http://localhost:3000/api/log/${event.target.id}`, {
//     method: 'DELETE',
//     body: JSON.stringify({ log: { id: event.target.id } }),
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': this.props.auth.sessionToken
//     })
//   })
//     .then((res) => this.fetchWorkouts())
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

let sloganDisplay = '',
sloganDisplay1 = '',
sloganDisplay2 = '',
sloganDisplay3 = '',
sloganDisplay4 = '',
sloganDisplay5 = '',
sloganDisplay6 = '';
class SloganInputComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      displaySlogan: '',
      replaceNum: 0,
      replaceSlogan: '',
      replaceNumber: 0
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
          this.setState({ sloganObject: data })
      })
      
    let x = this.state.sloganObject;
    console.log('sloganObject ln 70:',this.state.sloganObject);
    let sloganArr = [];
    x.
    this.setState({ sloganList: sloganArr  })
      console.log(sloganArr);
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
    // sloganFunc();
    // this.allSloganFunc();
    // this.loadSloganArr();
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // let slogIndex = this.state.replaceNumber;
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
    sloganDisplay = data.title;
        console.log('sloganDisplay:',sloganDisplay)
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
            <tr>
              <th scope="row">1</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                    {console.log("in :",this.fetchSlogan(1))}
                    {console.log('sloganDisplay in display:',sloganDisplay)}
                    {sloganDisplay}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <div>
                  <ul idName>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                    {this.fetchSlogan(2)}
                    {sloganDisplay}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                    {/* {this.fetchSlogan(3)} */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                <div>
                  <ul>
                    {/* { this.state.sloganList.title.map(tag => <li key={tag.id}>{ tag }</li>) } */}
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <br /><br />
        <div>
          <h5>
            Enter slogan number to replace and new slogan
          </h5>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>New Slogan</th>
            </tr>
          </thead>
        </Table>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="number" placeholder="#"  style={{width: 2 + "em" }} maxLength="1" />
          <input value={this.state.replaceSlogan} onChange={this.handleChange} type="text" placeholder="New Slogan Here"  style={{width: 80 + "%" }} />
          <br /><br />
          <Button block>Add/Update</Button>
        </form>
        <br /><br />
      </div>
    ) 
  } 
}

export default SloganInputComponent;

// document.getElementById('listGenerator')= () => {
//       document.getElementById('listGenerator').innerText = ``


