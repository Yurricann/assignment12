$(".content-header").click((e)=>{
    let d = document.querySelectorAll(".content-body");
    $(d).slideUp()
    let x = e.target.parentElement.nextElementSibling
    if (x.classList.length > 1){
        
        $(x).slideUp(()=>{
            x.classList.remove("first")
        })
        
    } else{
        $(x).slideToggle()
    }  
})

$(".nav").click(()=>{
    $("nav").animate({left: '0'})
})

$(".closeBtn").click(()=>{
    $("nav").animate({left: '-250'})
})

let allNavLinks = document.querySelectorAll("nav span a");

$(allNavLinks).click(()=>{
    $("nav").animate({left: '-250'})
})


let countDownDate = new Date("2023-10-25").getTime();
let container = document.querySelector(".timerContainer")

let timer = setInterval(function(){
    let currentDate = new Date().getTime();
    let difference = countDownDate - currentDate;

    let days = Math.floor(difference / (1000*60*60*24))
    let hours  = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes  = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)

    container.innerHTML = `
                    <div class="col-md-3 mb-1">
                        <div class="timer">
                            <p id="days">${days} D</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-1">
                        <div class="timer">
                            <p id="hours">${hours} h</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-1">
                        <div class="timer">
                            <p id="minutes">${minutes} m</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="timer">
                            <p id="seconds">${seconds} s</p>
                        </div>
                    </div>
    `

    if (difference == 0) {
        clearInterval(timer);
        container.innerHTML = `<div class="timer">
        Done
    </div>`;
      }

},1000)


let textArea = document.getElementById("textArea");

let counterz = document.getElementById("counterz");

let maxValue = 100;

textArea.addEventListener("keydown",function(){
    let currentValue = textArea.value.length;
    let count = maxValue-currentValue;
    if(currentValue <= 0){
        counterz.innerHTML = "0"
    } else{
        counterz.innerHTML = count;
    }
    
    
})