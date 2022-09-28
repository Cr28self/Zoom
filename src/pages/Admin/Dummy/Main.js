import {useLocation} from "react-router-dom";


const Main = (props) => {

    const user = useLocation().pathname;



  return (

    
    <main>
        <div>
            <h1>{user}</h1>
        </div>
          <h2>MainPage</h2>
    </main>
    

    
  );
}

export default Main;
