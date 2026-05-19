import Cabecalho from "Components/Cabecalho"
import Container from "Components/Container"
import Rodape from "Components/Rodape"
import FavoritosProvider from "Contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase () {
    return(
<main>
    <Cabecalho />
    <FavoritosProvider>
        <Container>
            <Outlet />
        </Container>
    </FavoritosProvider>
    <Rodape />

</main>
    )
}

export default PaginaBase