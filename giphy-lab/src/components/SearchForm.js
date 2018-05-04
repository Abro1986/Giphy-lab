import React, { Component } from 'react';


class SearchForm extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      response: []
    }
//    this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);

  }

  onInputChange(event){
    this.setState({
      query: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let search = this.state.search
    this.setState({
      search: ""
    })
    console.log("clicked")
  }
  render() {
    //   let results;
    //   if (this.state.response) {
    // results = this.state.response.map((item,index) => {
    //     <img key={index} src={item.images.fixed_height.url} alt="results"/>
    //     })
    //   }
    return (
      <div className="App">
        <form onSubmit={this.onFormSubmit}>
          <input type="text"
            onChange={this.onInputChange}
            value={this.state.search}
          />
          <button type='submit'>Send it!</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;