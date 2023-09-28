// Code EyesOnMe Component Here
function EyesOnMe() {

function Focus(event) {
}

    function Blur(event) {
}


    return(
        <button

        onFocus={(Focus => {
            console.log('Good!')})}
        onBlur={(Blur => {
            console.log('Hey! Eyes on me!')})}>Eyes on me</button>
    );
}

export default EyesOnMe;