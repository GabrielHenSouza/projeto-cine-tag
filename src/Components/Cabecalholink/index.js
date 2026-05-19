import { Link } from 'react-router-dom';
import stles from './Cabecalholink.module.css';


function Cabecalholink({url,children}){
    return(
<Link to={url}className={stles.Link}>
{children}
</Link>
    )
}

export default Cabecalholink;