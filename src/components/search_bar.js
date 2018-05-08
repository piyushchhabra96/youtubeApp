import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue:""
        };
    }
    
    handleInputChange = (event) => {
        this.setState({
            searchValue : event.target.value
        });
    } 

    handleSearch = (event) => {
        event.preventDefault();
        console.log("event",event);
        //this.props.handleSearch(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
            <form>
                <input
                    placeholder = "Search.." 
                    onChange = {this.handleInputChange}
                    value = {this.state.searchValue}
                    onSubmit = {this.handleSearch} />
            </form>
            </div>
        );
    }
}


export default SearchBar; 