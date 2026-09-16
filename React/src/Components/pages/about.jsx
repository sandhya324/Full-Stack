import { useParams } from "react-router-dom";


function about() {
    const params = useParams();

    console.log(params);
    return (
        <>
        <h1>About dynamic Page</h1>;
        <a href="/"> go to home page</a>
      
        </>
    )
}

export default about;