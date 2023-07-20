
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        list: [],
        item: '',
    };
  }
  handleChange = (event) => {
      this.setState (() => {
        item: event.target.value
      })
  }
  handleAddItem = () => {
     this.setState (() => {
         item: ''
         list: [...this.state.list,this.state.item]   
     })
  }

  render () {
    return (
      <div>
      <div>
      <h3>Todo List</h3>
        <input type='text' onChange={this.handleChange} value={this.state.item}
         placeholder='please enter here'></input>
        <button onClick={this.handleAddItem}>Add</button>
      </div>
       <table>
       {this.state.list.map((item) =>{
        return(
          <tr key={item.item}>
              <td>{item}</td>
          </tr>
         )
       })}
       </table>
      </div>
    )
  }

}

export default App;