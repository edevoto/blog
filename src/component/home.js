import { useEffect, useState } from "react";
import Bloglist from "./bloglist";

const Home = () => {



const [blogs, setBlogs] = useState(null);

const [name, setName] = useState('Mario')
useEffect(() => {
   fetch('http://localhost:8000/blogs')
   .then(response => {
     return  response.json()
   })
   .then((data) =>{
    setBlogs(data);
   })
},[name]);

    return ( 
        <div className="home">
            
            {blogs && <Bloglist blogs={blogs} />}
            <p>{name}</p>
        </div>
     );
}
 
export default Home;
