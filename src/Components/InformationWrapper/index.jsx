import './style.css'

const BoxOfAllInformation = (props) =>{
    return(
    <div className = "informationWrapper">
        <div className =' blur'>
           
                {props.information.map((value,index) =>(
                    <>
                        <div className = 'cityWrapper'>
                            <h2 key={index} className="textStyle" style = {{fontSize : 50}}>{value.name}</h2>
                            <div key={index} className="textStyle">{value.weather.map(val => (
                                <>
                                    <img src ={val.icon}></img>
                                    <div className="textStyle">{val.description}</div>
                                    <div className="textStyle">{val.main}</div>
                                </>
                            ))}</div>
                        </div>  

                        <div className = "flex">
                            <div key={index} className="textStyle" style = {{fontSize : 150}}>{Math.round(+ value.main.temp - 273.15)}&deg;</div> 
                            <div className = 'flexBox'>   
                                <div key={index} className="textStyle" style = {{fontSize : 40}}>{Math.round(+ value.main.temp_max - 273.15)}&deg;/</div>  
                                <div key={index} className="textStyle" style = {{fontSize : 40}}>{Math.round(+ value.main.temp_min - 273.15)}&deg;</div>  
                            </div>
                            <div key={index} className="textStyle">Feels like {Math.round(+ value.main.feels_like - 273.15)}&deg;</div>  
                        </div>

                         

                    </>  
                ))}
           
        </div>
    </div> 
    )
}
export default BoxOfAllInformation;