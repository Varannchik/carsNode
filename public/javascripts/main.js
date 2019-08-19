const btn = document.getElementById("submit");

btn.addEventListener('click',(e) => {
    e.preventDefault();    
    
    let model= document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let picture = document.getElementById("picture").value;
    const car = JSON.stringify( {model: model, price: price, picture: picture});
    console.log(car);

    const xhr = new XMLHttpRequest(); 
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
   
    xhr.send(car);    
    
})

