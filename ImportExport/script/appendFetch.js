
let getData =async(url) =>{
    // let res = await fetch("https://fakestoreapi.com/products/category/electronics");
   
    let res = await fetch(url);
    
    let data = await res.json();
   return data;
};
 

 let append = (data,container) =>{

data.forEach((el) =>{
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src =el.image;

    let p= document.createElement("p");
    p.innerText =el.title;

    div.append(img,p);
    container.append(div);
});
 };

 export {getData ,append };