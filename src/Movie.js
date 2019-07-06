import React,{ Component } from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//     render(){
//         return(
//             <div >
//                 <MoviePoster poster ={this.props.poster}/>
//             <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// } state component (smart state를 가지고 랜더를 한다.)
function Movie({title,poster,genres,synopsis}){
    return(
            <div className="Movie">
                <div className="Movie_Colums">
                <MoviePoster poster ={poster}  alt={title}/>
                </div>
                <div className="Movie_Colums">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                    {genres.map((genre,index) =><MovieGenere genre={genre} key={index}/>)}
                    </div>
                    <p className="Movie_Synopsis">
                        <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        baseOn='letters'
                        />
                    </p>
                </div>
            </div>
    )
}
// stateless component(dumb state를 가지고있지 않고 랜더링도 안한다. 단지 리턴만 할뿐이다.)
// class MoviePoster extends Component{
//     render(){
//         return(
//             <img src={this.props.poster}/>
//         )
//     }
// }

function MoviePoster({poster}){
    return(
        <img src={poster} className="Movie_poster"/>
    )
}
function MovieGenere({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}

export default Movie