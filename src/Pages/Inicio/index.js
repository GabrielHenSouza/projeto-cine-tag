import Banner from "Components/Banner"
import Card from "Components/Card"
import Titulo from "Components/Titulo"
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";


function Inicio () {
    const [videos,setVideos] = useState([])

useEffect(() => {
    fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
    .then(respota=> respota.json())
    .then(dados => {
        setVideos(dados)
    })
}, [])

    return(
        <>
        
        <Banner imagem="home" />
        <Titulo>
            <h1>um lugar para guardar seus videos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((video) =>{
              return  <Card {...video} key={video.id} />
            })}
        </section>
       
        </>
    )
}

export default Inicio