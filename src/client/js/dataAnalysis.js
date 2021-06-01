let data={};

//https://javascript.info/async-await
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

async function textAnalysis(data) {
    const res= await fetch('http://localhost:8081/',{
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
return res.json();
}




export { textAnalysis }


