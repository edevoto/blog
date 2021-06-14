import { useState } from "react";
import Bloglist from "./bloglist";

const Home = () => {



const [blogs, setBlogs] = useState([
    {title: 'My new website', body:'lorem ipsum...', author: 'Mario', id:1},
    {title: 'Welcome party!', body:'lorem ipsum...', author: 'luigi', id:2},
    {title: 'Web dev top tips', body:'lorem ipsum...', author: 'Mario', id:3},
    {title: 'How to be fullstack and not die', body:'lorem ipsum...', author: 'toad', id:4}
]);



const handeDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
}








    return ( 
        <div className="home">
            <Bloglist blogs={blogs} handleDelete={handeDelete} />
        </div>
     );
}
 
export default Home;
