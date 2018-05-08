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
        this.props.handleSearch(event.target.value);
    } 


    render(){
        return (
            <div className="search-bar">
                <input
                    placeholder = "Search.." 
                    onChange = {this.handleInputChange}
                    value = {this.state.searchValue}/>
            </div>
        );
    }
}


export default SearchBar; 