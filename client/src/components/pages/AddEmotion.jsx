import React, { Component } from 'react'
import axios from 'axios'

class AddEmotion extends Component {
  state = {
    emotion: '',
  }

  addEmotion = e => {
    e.preventDefault()
    axios
      .post(
        'http://localhost:5000/api/add-emotion',
        {
          emotion: this.state.emotion,
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res)
      })
  }

  getEmotion = e => {
    this.setState({
      emotion: e.target.value,
    })
  }

  render() {
    // this.getEmotion()
    return (
      <div>
        <form onSubmit={this.addEmotion}>
          <label>Add Emotion</label>
          <br />
          <input
            onChange={this.getEmotion}
            type="text"
            placeholder="Enter Emotion"
          ></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default AddEmotion
