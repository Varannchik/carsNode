const xhr = document.getElementById("submit");

xhr.addEventListener('click',(e) => {
    e.preventDefault();    
    
    let model= document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let picture = document.getElementById("picture").value;
    console.log(model, price, picture);
    const car = JSON.stringify( {model: model, price: price, picture: picture});

    const request = new XMLHttpRequest();      
    
    request.addEventListener("load", function () {
        request.open("POST", "/car");
        request.setRequestHeader("Content-Type", "application/json");
        console.log('1');
        request.send(JSON.stringify({ model: model }));
        response.send(`${request.body.model} - ${request.body.price}`);
         
    });
    request.send();
    
})





