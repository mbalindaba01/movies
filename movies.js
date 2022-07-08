export function Movies() {
    return {     
        movies: [],
        favorites: [],

        getMovies(){
            fetch('https://movie-favorites-mbali.herokuapp.com/movies/mostpopular')
            .then(res => res.json())
            .then(data => {
                this.movies = data.movies
                console.log(this.movies)
            })
        },
        
        getFavorites(){

        }
    }
}