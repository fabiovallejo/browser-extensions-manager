import './global.css'
import NavBar from './components/navbar';

function App() {

  return (
  <div className="bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] min-h-screen h-[100%] text-white pt-10">
    <NavBar />
    <div className='px-45 flex items-center justify-between'>
      <h1 className='text-[35px] font-[600]'>Extensions List</h1>
      <div className='flex space-x-6'>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]'>All</button>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]' >Active</button>
        <button className='bg-[#2F354B] py-2 px-5 rounded-[25px] border-white/15 border-[1px]'>Inactive</button>
      </div>
    </div>

    
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Fabio Vallejo</a>.
    </div>
  </div>
  );
}

export default App;
