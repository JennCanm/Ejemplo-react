import './body.css';


function Body(props) {
    const position ={lat: 20.748429, lng: -97.629916};

    let user=props;
    console.info(user);
    if (user.name!=""){
        return (
        <div className="bodyDiv">
            <div className='glassContainer'>
            <h1>Jenny</h1>
            <p>5C</p>
            </div>  
        </div>
    );

    }
    return(
        <div className='bodyDiv'>
            <div className='glassContainer'>
            <h1>Nada Nada</h1>
            </div>
            </div>
)
}

export default Body;