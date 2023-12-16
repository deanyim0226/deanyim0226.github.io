$(document).ready(function(){
    
    var count = 1
    const TITLENUMBER = 3
 
    setInterval(function(){
        
        if(count == 1){
         
            $(".text-wrapper").children().remove()
            $(".text-wrapper").append("<b class='sub-title'>FULL-STACK DEVELOPER</b>")
        
        }else if (count == 2){
            $(".text-wrapper").children().remove()
            $(".text-wrapper").append("<b class='sub-title'>KOREAN CODER</b>")
        }else if (count == TITLENUMBER){
            count = 0
            $(".text-wrapper").children().remove()
            $(".text-wrapper").append("<b class='sub-title'>SOFTWARE ENGINEER</b>")
        }
        count += 1

    },3000)
    


    $(".proejctList").click(function(){
        $("#"+$(this).attr('data-toggle')).css("display","block")
    })

    $("button").click(function(){
        $("#"+$(this).attr('data-dismiss')).css("display","none")
    })

    $(window).scroll(function(){
        let top = $(window).scrollTop();
        let linkList = document.querySelectorAll("nav a")

        if(top >= 1){
            $("header nav").css("background-color", "white")
            $("nav a").css("color", "black")
            $(".checkbtn").css("color","black")
            linkList.forEach((link)=>{
                link.style.setProperty('--afterBack','black')
            })
  
        }else{
            $("header nav").css("background-color", "")
            $(".checkbtn").css("color","white")
            $("nav a").css("color", "white")
            linkList.forEach((link)=>{
                link.style.setProperty('--afterBack','white')
            })
        }
    })

    window.onscroll = () =>{

        let articles = document.querySelectorAll("article")
        let linkList = document.querySelectorAll("nav a")

        articles.forEach((article)=>{
            let top = $(window).scrollTop();
            let offset = article.offsetTop;
            let height = article.offsetHeight;

            let id = article.getAttribute('id');
            
            if( top <= 5){
                linkList[0].style.setProperty('--afterColor','white')
            }
  
            if( top >= offset && top < offset + height){
                linkList.forEach((link)=>{
                    link.classList.remove('active')

                    let selectedQuery = document.querySelector('nav a[href*='+id +']');
                    selectedQuery.classList.add('active');
                    selectedQuery.style.setProperty('--afterColor','black')
                })
            }
        })
    }

    
});