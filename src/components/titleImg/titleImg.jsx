import { Imagem, Container } from './style'
import logo from '../../assets/logo.png'

function TitleImg() {

    return(
        <Container>
            <Imagem src={logo}></Imagem>
        </Container>
    )

}

export default TitleImg;