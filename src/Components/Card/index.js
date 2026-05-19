import { useFavoritoContext } from 'Contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavorita from './desfavorita.png';
import { Link } from 'react-router-dom';

function Card ({id,titulo,capa}) {
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavoritar :iconeDesfavorita;
    return(
<div className={styles.container}>
     <Link className={styles.Link} to={`/${id}`}>
    <img src={capa} alt={titulo} className={styles.capa} />
    <h2>{titulo}</h2>
    </Link>
    
    
    <img src={icone}
    alt='Favoritar filme'
    className={styles.favoritar} onClick={() => {
        adicionarFavorito({id,titulo, capa})
    }}/>
</div>
    )
}

export default Card