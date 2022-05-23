import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* modonegro */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}> 1500</div>
        <span  style={{color: darkMode?'white':''}}> seguidores </span>
        <span>En lo ultimos 3 meses</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}> 70</div>
        <span  style={{color: darkMode?'white':''}}> obras </span>
        <span> Licenciadas a otros idiomas</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}> 15</div>
        <span  style={{color: darkMode?'white':''}}> obras </span>
        <span> Con mas capitulos libres por semana </span>
      </div>
    </div>
  );
};

export default Experience;
