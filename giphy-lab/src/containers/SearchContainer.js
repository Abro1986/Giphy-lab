import React, { Component } from 'react';
import SearchForm from './Search'
import axios from 'axios';


class SearchContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      response: []
    }
    this.API_KEY = "JGfbC7y8JHqPfeAGfQRVUOxo2Vz7UNWS";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

onInputChange(event){
    this.setState({
      query: event.target.value
    });
  }

onFormSubmit(event){
    event.preventDefault()
    const rootUrl = "http://api.giphy.com/v1/gifs/search?q="
    let search = axios.get(rootUrl+ this.state.query + "&api_key=" + this.API_KEY + "&limit=10");
    response.then(function(data){
    	this.setState({
      search: data.data.data
    })
    }
    
    console.log("clicked")
  } 

  	render(){
  		let results;
  		if (this.state.search) {
  	results = this.state.search.map((item, index) =>
  			<img key={index} src={item.images.fixed_height_small.url} alt="results" />					
  			)		
  		}
  			return (
  					<div>
  						<Search query={this.state.query}
  								onFormSubmit={(e) => {this.onFormSubmit(e)}}
  								onInputChange={(e) =>{this.onInputChange(e)}}
  						<br/>
  						<div>{results}</div>
  					</div>	
  					)
  	} 
}







export default SearchContainer
