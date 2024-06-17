$(document).ready(function() {
    
    const txtWrap = document.querySelector('.typing');
const txtString = '안녕하세요 \n 성경모의 포트폴리오입니다.';
const txtSpeed = 150;
const txtDelay = 2500;
let txtIndex = 0;
let typeCotrol = true;

function typingEvent(){
  if(typeCotrol === true){
    let txtNow = txtString[txtIndex++];
    txtWrap.innerHTML += txtNow === "\n" ? "<br>": txtNow;
    // console.log(txtIndex)
    if(txtIndex >= txtString.length){
      txtIndex = 0;
      typeCotrol = false;
    }
  }else{
    clearInterval(setTyping);
  }
}
let setTyping = setInterval(typingEvent, txtSpeed);

/* 메인페이지 메뉴버튼 누르면 이동 */



$('#scroll_move').on('click', function(){
    let dir = event.wheelDelta // 음수면 아래, 양수면 위
    let o_top;
    //스크롤 막기
    
    setTimeout(function(){
        
    }, 700)

    // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
    if(dir < 0) { 
        if($(this).next().length > 0) { 
            o_top = $(this).next().offset().top
        }
    }
    else if(dir > 0) { 
        if($(this).prev().length > 0) {
            o_top = $(this).prev().offset().top
        }
    }
    
    $('html, body').stop(true).animate({
        scrollTop: o_top
    }, 700)
});


/* 스크롤바 색상 */
$(window).scroll(function(){
    if($(window).scrollTop()>= 0){
        $('.side_bar').css({
            display : 'none'
        })
    }
    if($(window).scrollTop() + 300 >=$(`.sec2`).offset().top){
        $('.side_bar').css({
            display : 'block'
        })
    }
})

$('body::-webkit-scrollbar-track').css({
    background: '#000'
})


/* skillPage 게이지바 */

$(window).scroll(function(){
    
    if($(window).scrollTop() + 300 >=$(`.sec2`).offset().top){
        $('.gauge1').css({
            width:'80%'
        })
        $('.gauge2').css({
            width:'90%'
        })
        $('.gauge3').css({
            width:'90%'
        })
        $('.gauge4').css({
            width:'90%'
        })
        $('.gauge5').css({
            width:'90%'
        })
        $('.gauge6').css({
            width:'90%'
        })
        $('.gauge7').css({
            width:'90%'
        })
        $('.gauge8').css({
            width:'80%'
        })
    }
})



let sec_length = $('.sec').length
// console.log(sec_length)
$(window).scroll(function(){
    for(let i=1; i<sec_length; i++){
        if($(window).scrollTop()>=$(`.sec`).eq(i).offset().top - 230){
            $('.color').removeClass('font_active')
            $(`.color${i}`).addClass('font_active')
        }
    }
})

})
