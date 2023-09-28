// Code Keypad Component Here

function Keypad (){

    function Change(event) {
        console.log('Entering password...');
      }
    
      return (
          <input
            type="password"
            onChange={Change}
          />
    )
}

export default Keypad;