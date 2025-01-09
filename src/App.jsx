import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import Artical from './components/Artical';
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-500 selection:text-gray-900'>
    {/* <div className='flixed top-0 -z-10 h-full w-full '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div> */}
<div className='container mx-auto px-8'>
<Navbar />
</div>
    
    <Hero />

    <Section />
    <Artical/>
    <Footer/>
  </div>
  )
}

export default App
