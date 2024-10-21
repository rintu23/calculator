function display(content){
    result.value += content
}

function allClear(){
    result.value = ""
}

// function handleSubmit(){
//     try{
//         result.value = eval(result.value)
//     }
//     catch(err){
//         console.log(err);
//         result.value = "Invalid Expression!!"
//     }
// }

function output(){
    try{
        result.value = eval(result.value)
    }
    catch(error){
        console.log(error);
        result.value = "error....."
        
    }
}
function delet(){
    result.value=result.value.slice(0,-1)
}
