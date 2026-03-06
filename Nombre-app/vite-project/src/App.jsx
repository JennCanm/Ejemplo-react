import Encabezado from "./encabezado.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import Body from "./body.jsx";
import { useState } from "react";
import { AuthProvider } from "./authContext.jsx";

function App() {
  const[vista,setVista]=useState('Inicio');
  return (
    <div style={{width: '100%'}}>
      <AuthProvider>
      <Encabezado cambiarVista={setVista} />
      <Cards vista={vista} />
      </AuthProvider>
      <Body name='jenn'/>
      <Footer/>
    </div>
  );
}


export default App
