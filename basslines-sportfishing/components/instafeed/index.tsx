import React from "react";
import style from "./instafeed.module.scss";
import Instafeed from "instafeed.js";

function onStart (){

  
        };

const instafeed: React.FC =() => {


   
    
    return(
        
    

        
        <div>
       
          <div className={style.Container}>

                <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" defer></script>
            

                <div id="instafeed"> </div>

            
            </div>

        </div>
 
        
    )};

export default instafeed;