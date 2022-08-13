import react from "react";

function Keypad (){
    function handelChange(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            type="password" 
            onChange={handelChange}
            />
        </div>
    )
}

export default Keypad;