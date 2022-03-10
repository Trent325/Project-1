import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Feed from "../components/instafeed";
import Instafeed from "instafeed.js";
import {useEffect} from "react";





function onStart (){

    const feed = new Instafeed({

            accessToken: 'IGQVJVVDh6SW5wYzdlaWt6anFkOF8wVmQ4Qk1JVVE5V2dtRFl0MXdKbUs1XzVtT2xVd0otaGNIRXZA2bVBHdkNpUlEyYlU3ZAG5UY29fWkxIZAjktdWhpODVBQWRKb1VtV21ISWdXZAjVFaWtRNE1UMUZAEMAZDZD',
            limit:  24,
            target: "instafeed",
            get: 'user',

            
            });


            feed.run();
        };
       
       

const OurTrips: NextPage =() => {
    




    onStart();
    return(
        <div>
            <Header/>
                <title>Our Trips | BassLines Sport Fishing</title>
        
            <Feed/>

            <Footer/>
            <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" defer></script>
        </div>

    )
};

export default OurTrips;