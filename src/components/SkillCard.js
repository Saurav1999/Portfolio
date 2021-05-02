// import React from 'react'

// function Card({logo}) {
//   return (
//     <div className="card">
//        <img src={logo} alt="logo"/>
       
//     </div>
//   )
// }

// export default Card
import React,{useEffect,useRef} from "react";



function ProgressFill({percentage,background,border,children}) {
 
    const waterlevel = useRef();
   

    useEffect(() => {
      const perc = 100 - percentage;

      waterlevel.current.style.top = `${perc}%`

     waterlevel.current.style.background = background;

    }, [percentage,background,border])
  return (
    
      <div  className="skill-progress">
        <div className="skill-inner">
          <div className="skill-logo-container">
              <img src={children} alt="logo"/>
          </div>
 
          <div ref={waterlevel} className="skill-water"></div>
          <div className="skill-glare"></div>
        </div>
      </div>

  );
}

export default ProgressFill;
