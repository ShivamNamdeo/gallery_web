import React,{useState,useEffect} from 'react';
import "./App.css";
import ModalImage from "react-modal-image";



const App = () => {


  const [gallery_list, set_gallery_list] = useState([]);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=fc7218c544eefe8c010a66f0253717a7&per_page=&format=json&nojsoncallback=1&api_sig=6accc064702d74d4f98c0d46d8914dfc")
    .then(data=>data.json())
    .then(doc=>{


      console.log(doc);

      set_gallery_list(doc.photos.photo);


      set_loading(false);



    })


  }, [])




if(loading){
  return(

    <p>Loading</p>

  )
}



  return (


    <div className="app">

    <div className="gallery_grid">


        {

          gallery_list.map((item,index)=>{
            return(

               

                 <div className="gallery_comp">
                   <ModalImage
                      className="image"
                      small={ "https://live.staticflickr.com/"+ item.server  + "/" + item.id + "_"+item.secret +"_w"+ ".jpg"}
                      large={ "https://live.staticflickr.com/"+ item.server  + "/" + item.id + "_"+item.secret +"_w"+ ".jpg"}
                      alt={item.title}
                    />;
                 </div>

            )
          })

        }


  
    </div>

    </div>
  )
}

export default App