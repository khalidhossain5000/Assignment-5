const body=document.getElementById('bg');
document.getElementById('background-change-btn')
.addEventListener('click',function(){
    const random1=Math.trunc(Math.random()*256)
    const random2=Math.trunc(Math.random()*256)
    const random3=Math.trunc(Math.random()*256)

    const rgbColor=`rgb(${random1},${random2},${random3})`
    body.style.backgroundColor=rgbColor;
    
})

//adding blog page when clicking this-->
document.getElementById('blog-btn')
.addEventListener('click',function(){
    window.location.href='./blog.html'
})
