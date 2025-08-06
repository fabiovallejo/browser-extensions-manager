import './global.css'
import NavBar from './components/navbar';
import ExtensionCard from './components/ExtensionCard';
import extensionesData from '../data.json';
import { useState } from 'react';

function App() {
  const [extensiones, setExtensiones] = useState(extensionesData);
  const [filtro, setFiltro] = useState("all");
  const [IsDarkTheme, setIsDarkTheme] = useState(true);

  const extensionesFiltradas = extensiones.filter(ext => {
    if (filtro === "all") return true;
    if (filtro === "active") return ext.isActive;
    if (filtro === "inactive") return !ext.isActive;
  })

  const handleToggle = (name) => {
    setExtensiones(prev =>
      prev.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleTheme = () => {
    setIsDarkTheme(!IsDarkTheme);
  };

  const getButtonClasses = (type) => {
    const isSelected = filtro === type;

    if(IsDarkTheme){
       return isSelected 
       ? "bg-[#F35B55] text-[#1F153F] font-[500] border-white/15 focus:outline-offset-1 focus:border-[#040A1C] focus:outline-[#D4686C] focus:outline-2 hover:bg-[#DE4B42] transition-all duration-200" 
       : "bg-[#2F354B] text-white border-white/15 focus:bg-[#525868] focus:outline-offset-1 focus:border-[#040A1C] focus:outline-[#D4686C] focus:outline-2 hover:bg-[#525868] transition-all duration-200";
    } else {
      return isSelected 
        ? "bg-[#C62418] text-white font-[500] border-black/15 focus:outline-offset-1 focus:border-[#ECF4FB] focus:outline-[#CA241B] focus:outline-2 hover:bg-[#DD493F] transition-all duration-200" 
        : "bg-[#FBFEFF] text-[#0C1645] border-black/15 focus:bg-[#FCFDFF] focus:outline-offset-1 focus:border-[#ECF4FB] focus:outline-[#CA241B] focus:outline-2 hover:bg-[#F6FAFD] transition-all duration-200";
    }
  }

  return (
  <div className={`${IsDarkTheme === true ? "bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] text-white" : "bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] text-[#0C1645]" } min-h-screen pt-10 px-7 sm:px-20 md:px-30 xl:px-50 2xl:px-65`}>
    <NavBar onTheme={handleTheme} darkTheme={IsDarkTheme} />
    <div className=' flex lg:flex-row flex-col space-y-3 items-center justify-between px-2 text-center'>
      <h1 className='text-[25px] lg:text-[35px] font-[700]'>Extensions List</h1>
      <div className='flex space-x-3 lg:space-x-6'>
        <button className={`${getButtonClasses("all")} py-2 px-5 rounded-[25px] border-[1px] cursor-pointer text-[15px] lg:text-[18px]`} onClick={() => setFiltro("all")}>All</button>
        <button className={`${getButtonClasses("active")} py-2 px-5 rounded-[25px] border-[1px] cursor-pointer text-[15px] lg:text-[18px]`} onClick={() => setFiltro("active")} >Active</button>
        <button className={`${getButtonClasses("inactive")} py-2 px-5 rounded-[25px] border-[1px] cursor-pointer text-[15px] lg:text-[18px]`} onClick={() => setFiltro("inactive")}>Inactive</button>
      </div>
    </div>
    <div className='pt-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
      {extensionesFiltradas.map((ext) => (
        <ExtensionCard 
        logo={ext.logo} 
        name={ext.name} 
        description={ext.description} 
        isActive={ext.isActive}
        onRemove={() => {
          setExtensiones(prev => prev.filter(e => e.name !== ext.name));
        }}
        onToggle={() => handleToggle(ext.name)}
        darkTheme={IsDarkTheme}
        />
      ))}
    </div>

    <footer className="attribution pt-10 pb-5 text-center">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Fabio Vallejo</a>.
    </footer>
  </div>
  );
}

export default App;
