import { updateInterface } from "./uiUpdate";
import {textAnalysis} from "./dataAnalysis";

//https://javascript.info/async-await
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
function submitHandler(event) {
    event.preventDefault()
    let url = document.getElementById('url').value;
    if (url === '') {
        alert("invalid link: please enter a valid URL")
    } 
    else {
        //object destructuring
        //https://dmitripavlutin.com/javascript-object-destructuring/
        textAnalysis({url})

        .then(function(res) {
            updateInterface(res);
        })
        .catch(function(error) {
            console.log("error");
        })
    }}

export { submitHandler }
export { textAnalysis }

