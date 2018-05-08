import React from 'react';
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
                       selectedVideo:null };

        YTSearch({key: YOUTUBE_API_KEY , term:'React tutorial'}, (videos) => {
            this.setState ({ videos ,
                             isLoading:false,
                             selectedVideo:0 });
        });
    }

    handleClick = (index) => {
        this.setState( {selectedVideo:index} );
    }

    render(){
        return(
            <div>
                <SearchBar />
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