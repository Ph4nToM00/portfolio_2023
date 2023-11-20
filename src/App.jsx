import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={'Accueil'} />
                <Route path='/about' element={'À propos'} />
                <Route path='/projects' element={'Projets'} />
                <Route path='/contact' element={'Contact'} />
            </Routes>
        </Router>
    </main>
  )
}

export default App