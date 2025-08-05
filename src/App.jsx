import './global.css'
import NavBar from './components/navbar';
import ExtensionCard from './components/ExtensionCard';
import extensiones from '../data.json';

function App() {

  return (
  <div className="bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] min-h-screen text-white pt-10">
    <NavBar />
    <div className='px-65 flex items-center justify-between'>
      <h1 className='text-[35px] font-[600]'>Extensions List</h1>
      <div className='flex space-x-6'>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]'>All</button>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]' >Active</button>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]'>Inactive</button>
      </div>
    </div>
    <div className='px-63 pt-8 grid grid-cols-3'>
      {extensiones.map((ext) => (
        <ExtensionCard logo={ext.logo} name={ext.name} description={ext.description} isActive={ext.isActive}/>
      ))}
    </div>


    <div className="attribution pt-10 pb-5 text-center">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Fabio Vallejo</a>.
    </div>
  </div>
  );
}

export default App;
