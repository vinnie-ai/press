const heart = document.getElementById("heart");

const shape = [
"0011110000111100",
"0111111001111110",
"1111111111111111",
"1111111111111111",
"0111111111111110",
"0011111111111100",
"0001111111111000",
"0000111111110000",
"0000011111100000",
"0000001111000000",
"0000000110000000"
];

shape.forEach((row,y)=>{
[...row].forEach((col,x)=>{
if(col==="1"){
let h=document.createElement("div");
h.className="heart";
h.style.left=x*22+"px";
h.style.top=y*22+"px";
heart.appendChild(h);
}
});
});

// FLOATING HEARTS
setInterval(()=>{
let fh=document.createElement("div");
fh.className="floating-heart";
fh.innerHTML="❤️";
fh.style.left=Math.random()*100+"vw";
document.body.appendChild(fh);

setTimeout(()=>{
fh.remove();
},6000);

},400);