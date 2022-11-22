let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id= queryObject.get ('id');
console.log(id);



fetch(`https://api.themoviedb.org/3/discover/movie?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data);
    let peliculas = document.querySelector ('.pelis')
    let info = data.results
    console.log(info);
  

   
    for(let i=0; i<info.length; i++){
        
        peliculas.innerHTML += 
                                `<a href="detail-movie.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt=""></a>`
    }


})
.catch(error => console.log(error))



fetch(`https://api.themoviedb.org/3/discover/tv?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let peliculas = document.querySelector ('.pelis')
    let info = data.results
    console.log(info);
  
    for(let i=0; i<info.length; i++){
        
        peliculas.innerHTML += 
                                `<a href="detail-series.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt=""></a>`
    }


})
.catch(error => console.log(error))