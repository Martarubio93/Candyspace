//Styles 
import '../styles/core/Reset.scss'
//Components
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
//Services
import CallToApi from '../services/CallToApi';
//Functionals
import {useState, useEffect} from 'react'




function App() {
  const [dataFromApi, setDataFromApi] = useState([])


  useEffect(() => {
    CallToApi().then((response) => {
      setDataFromApi(response)
    })
  }, [])


  return (
    <div className="App">
    <Header/>
    <Main dataFromApi={dataFromApi}/>
    <Footer/>
    </div>
  );
}

export default App;
