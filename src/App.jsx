import { Container } from './App.js'
import TitleImg from './components/titleImg/titleImg.jsx'
import Bio from './components/bio/bio.jsx'
import Buttons from './components/buttons/buttons.jsx'
import Footer from './components/footer/footer.jsx'
import Adress from './components/adress/adrees.jsx'

function App() {
  
  return (
    <Container>
      <TitleImg />
      <Bio />
      <Adress />
      <Buttons />
      <Footer />
    </Container>  
  )
}

export default App;
