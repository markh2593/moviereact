import React, {useEffect, useState} from "react";
import "./style.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Home() {


   const [movies, setMovies] = useState([])
   const [movieId, setMoviesId] = useState("")

    // {image:"./../the 100.jpg", tittle:"The 100" , id: 1, desc:"hggkllojg"},
    // {image:"./../grimm 2.jfif", tittle:"Grimm" , id: 2, desc:"cryhdyjkl"},
    // {image:"./../the mother.jfif", tittle:"The Mother" , id: 3, desc:"khjkloi"},
    // {image:"./../damsel.jpg", tittle:"Damsel" , id: 4, desc:"kljhkkiul"},
    // {image:"./../vampire diaries.jpg", tittle:"Vampire Diaries" , id: 5, desc:"switchkill"},
    // {image:"./../designator survivor.jpg", tittle:"Designator survivor" , id: 6, desc:"jhkloikjh"},
  
  useEffect(() =>{


    fetch("https://api.themoviedb.org/3/discover/movie?api_key=882cffa85dd9db00f237b58decb27d2f")
    .then((res) => res.json())
    .then((res) => setMovies(res.results))
    .catch((err) => console.log(err))

    
  }, [])

  function handleClick(title){
     movieTrailer(title)
     .then((res) => {
      let vidId = res.split("=")[1]
      setMoviesId(vidId)

     })

  }

     const opt = {
      playerVars:{
        autoplay: 1,
       },     
}




  return (
    <div className=""id="test">

       <div className='banner'>

        <div>

          <h4>The Marvels</h4>

          <div>
            <button>Watch Now</button>
            <button>Save For Later</button>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Laudantium, repellat!.</p>


        </div>

        <button id="btn"></button>
       


       </div>


       <main className="bg-dark p-5">
          <div className="container ">
            < h5 className="text-white mb-5">Trending</h5>

            <div className="movieposter d-flex ">


            {


                movies.map(each =>(

                  <img onClick ={() =>handleClick(each.original_title)} src={"https://image.tmdb.org/t/p/w500/" + each.poster_path} alt="poster img"/>


                ))

            }

            input type = img <source />
              

            </div>

            <div className= "player">

              <YouTube
              videoId={movieId}
              opts={opt}
              />
              
            </div>

          </div>

        </main>

      
    </div>







    // <div className=''>
    //   <input type="text" onChange={(m)=>console.log(m,tagert.value)}/>

    //   <button onClick={getData}>click</button>

    //   <h1>React JS</h1>


    // </div>
  )
}

export default Home