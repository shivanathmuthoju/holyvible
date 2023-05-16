let testaments = [

    "Everything you can’t change happened for a good reason. If it did not, it is better to think that it did.",
    
    "Have faith things are going to be great. If you do, you’ll at least get closer to where you want to be. ",
    
    "Have Faith in having Faith, and nothing can limit it.",
    
    "Limitless faith leads to limitless hope",
    
    "Limitless hope leads to limitless love",
    
    "Limitless love is the vibe of heaven",
    
    "Together, through faith, we can bear witness to heaven."
]

let testament = document.getElementById("testament");
count = 1 

setInterval(() => {
    if(count > testaments.length) { count = 0 }
    testament.textContent = testaments[count]
    count++;

}, 5000)