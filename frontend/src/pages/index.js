import React,{useState} from 'react'


// import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Predict from '../components/predict';

// import Footer from '../components/footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Make a fn to update the state and reverse the state

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
{/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
<Navbar toggle={toggle}/>
<Services />
<Predict/>
{/* <Footer /> */}
    </>
  )
}

export default Home;
