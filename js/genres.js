let generoMovie = document.querySelector('.genm')


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US')
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.genres);
    let genres = data.genres;
    
    for(let i=0; i<genres.length; i++){
        generoMovie.innerHTML += `
                            
                            <ul>
                                <li>
                                    <a href="detail-genres.html?id=${genres[i].id}">${genres[i].name}</a>
                                </li>
                            </ul>`
    }
        
})
.catch(error => console.log(error))


let generoSerie = document.querySelector('.gens')


fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US')
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.genres);
    let genresTwo = data.genres;
    
    for(let i=0; i<genresTwo.length; i++){
        generoSerie.innerHTML += `
                            
                            <ul>
                                <li>
                                    <a href="detail-genres.html?id=${genresTwo[i].id}">${genresTwo[i].name}</a>
                                </li>
                            </ul>`
    }
        
})
.catch(error => console.log(error))
