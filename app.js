let minus = document.querySelectorAll("#minus");
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");




for(let i = 0; i < minus.length; i++){
    if(minus[i] === minus[0]){
        minus[i].onclick = (function(j){
            text1.classList.toggle("text1");
            minus[i].classList.toggle('plus');
            
            return function(){  
                display(j);
            }
        })
    }else if(minus[i] === minus[1]){
        minus[i].onclick= (function(k){
            text2.classList.toggle('text2');
            minus[i].classList.toggle('plus');
            return function(){
                display(k);
            }
        })
    }else if(minus[i] === minus[2]){
        minus[i].onclick = (function(l){
            text3.classList.toggle('text3');
            minus[i].classList.toggle('plus');
            return function(){
                display(l);
            }
        })
    }else if(minus[i] === minus[3]){
        minus[i].onclick = (function(m){
            text4.classList.toggle('text4');
            minus[i].classList.toggle('plus');
            return function(){
                display(m);
            }
        })
    }else {
        break;
    }
}



    


