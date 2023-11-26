// a=1,b=5  //for getting random numbers between 'a' and 'b'
// document.getElementById("btn").addEventListener("click",function run(){
//     r=Math.floor(a + (b-a)*Math.random())
//     console.log(r)
//     if (r==1){
//         window.open("https://www.instagram.com/rishit_padagatti/","_blank")
//     }
//     else if (r==2){
//         window.open("https://twitter.com/rishit1275","_blank")
//     }
//     else if (r==3){
//         window.open("https://open.spotify.com/user/pd44547h9o7rvrbe26u9e9sx7","_blank")
//     }
//     else if (r==4){
//         window.open("https://www.snapchat.com/add/rishit1275?share_id=vEIK3PEySwGN8LDmreKBLQ&locale=en_IN","_blank")
//     }
// })
r=1
document.getElementById("btn").addEventListener("click",function run(){
    if (r==1){
        window.open("https://www.instagram.com/rishit_umesh/","_blank")
    }
    else if (r==2){
        window.open("https://twitter.com/rishit1275","_blank")
    }
    else if (r==3){
        window.open("https://open.spotify.com/user/pd44547h9o7rvrbe26u9e9sx7","_blank")
    }
    else if (r==4){
        window.open("https://www.snapchat.com/add/rishit1275?share_id=vEIK3PEySwGN8LDmreKBLQ&locale=en_IN","_blank")
    }    
    r++
    if (r>4){
        r=1
    }
})