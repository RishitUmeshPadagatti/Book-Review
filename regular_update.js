function qwerty(bookname,authorname) {
    if (bookname.style.display=="block"){
        bookname.style.display="none"
        authorname.style.display="none"
    }
    else{
        bookname.style.display="block"
        authorname.style.display="block"
    }     
}

// Book1: Rich Dad Poor Dad
document.getElementById("book1").addEventListener('mouseover',function run(){
    qwerty(document.getElementById("bookName1"),document.getElementById("authorName1"))
})
document.getElementById("book1").addEventListener('mouseout',function run(){
    qwerty(document.getElementById("bookName1"),document.getElementById("authorName1"))
})

// Book2: The Psychology of Money 
document.getElementById("book2").addEventListener('mouseover',function run(){
    qwerty(document.getElementById("bookName2"),document.getElementById("authorName2"))
})
document.getElementById("book2").addEventListener('mouseout',function run(){
    qwerty(document.getElementById("bookName2"),document.getElementById("authorName2"))
})

// book3: breaking the habit of being yourself
document.getElementById("book3").addEventListener('mouseover',function run(){
    qwerty(document.getElementById("bookName3"),document.getElementById("authorName3"))
})
document.getElementById("book3").addEventListener('mouseout',function run(){
    qwerty(document.getElementById("bookName3"),document.getElementById("authorName3"))
})

// book4: the monk who sold his ferrari
document.getElementById("book4").addEventListener('mouseover',function run(){
    qwerty(document.getElementById("bookName4"),document.getElementById("authorName4"))
})
document.getElementById("book4").addEventListener('mouseout',function run(){
    qwerty(document.getElementById("bookName4"),document.getElementById("authorName4"))
})