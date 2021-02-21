import React,{useEffect,useRef} from "react";



function ProgressFill({percentage,background,border,children}) {
 
    const waterlevel = useRef();
    const containerBorder = useRef();

    useEffect(() => {
      const perc = 100 - percentage;

      containerBorder.current.style.border = `.5rem solid ${border}`
      waterlevel.current.style.top = `${perc}%`

     waterlevel.current.style.background = background;

    }, [percentage,background,border])
  return (
    
      <div ref={containerBorder} className="fu-progress">
        <div className="fu-inner">
          <div className="fu-logo-container">
              <img src={children} alt="logo"/>
          </div>
          <div className="fu-percent percent">
            <span>{percentage}</span>%
          </div>
          <div ref={waterlevel} className="water"></div>
          <div className="glare"></div>
        </div>
      </div>

  );
}

export default ProgressFill;
