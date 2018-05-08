import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue:"Default Text"
        };
    }
    
    handleInputChange = (event) => {
        this.setState({
            searchValue : event.target.value
        });
    } 

    render(){
        return (
            <div>
                <input 
                    onChange = {this.handleInputChange}
                    value = {this.state.searchValue} />
            </div>
        );
    }
}


export default SearchBar; 