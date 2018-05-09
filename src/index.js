import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YOUTUBE_API_KEY = 'AIzaSyCz033_qzFTN2O40C-YObA_27Mt0E7Ag1M';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { videos: [],
                       isLoading:true,
                       selectedVideo:null,
                       term:'React tutorial' };

    this.handleSearch("react tutorial");
    }

    handleClick = (index) => {
        this.setState( {selectedVideo:index} );
    }

    handleSearch = (term) => {
        YTSearch({key: YOUTUBE_API_KEY , term: term}, (videos) => {
            this.setState ({ videos ,
                             isLoading:false,
                             selectedVideo:0 });
        });
    }




    render(){
        const handleSearch = _.debounce((term)=>{ this.handleSearch(term) }, 800)
        return(
            <div>
                <SearchBar 
                    handleSearch = {handleSearch}/>
                <VideoDetail 
                    video={this.state.videos[this.state.selectedVideo]}
                    isLoading={this.state.isLoading}/>
                <VideoList 
                    videos = {this.state.videos}
                    handleClick = {this.handleClick}/>
            </div>
            );
        }
}
ReactDOM.render(<App />, document.querySelector('.container'));