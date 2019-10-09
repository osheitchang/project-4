import React, { Component } from 'react'
import api from '../../api'
///import User from '../'

export default class Emotions extends Component {
  state = {
    emotions: [],
  }

  componentDidMount = () => {
    //Came to the page -1
    api
      .getEmotions() //when to api and used getEmotion function -2
      .then(emotions => {
        //8 you for emotions from api.getEmotion
        console.log(emotions)
        this.setState({
          //9  you set emotions to state
          emotions: emotions.easy,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="emotionss">
        <h2>List of emotions</h2>
        {this.state.emotions.map(c => (
          <li key={c}>{c.emotion}</li> /**10 Show emotions */
        ))}
      </div>
    )
  }
}
