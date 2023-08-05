import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';

import Error from './pages/Error';

import Header from './component/Header';
import Produto from './pages/Produto';

function RounterApp (){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/Sobre' element={ <Sobre/> }/>
                <Route path='/Contatos' element={ <Contatos/> }/>
                <Route path='/Produto/:id' element={ <Produto/> }/>

                <Route path='*' element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RounterApp;