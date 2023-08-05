let myScore=document.getElementById("myScore").innerHTML;
let comp=document.getElementById("comp").innerHTML;

function myFun1(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b); 
    console.log(c);
    let rocks = document.getElementById("userImg").src="rock.png";

    if(c==0){
        let rock = document.getElementById("compImg").src="rock.png";        
        if(rock && rocks){
            document.getElementById("result").innerHTML="Match Draw";
        }
    }
    if(c==1){
        let paper = document.getElementById("compImg").src="paper.png";        
        if(paper && rocks){
            document.getElementById("result").innerHTML="User Lost";
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
    if(c==2){
        let scissor = document.getElementById("compImg").src="scissor.png";        
        if(scissor && rocks){
            document.getElementById("result").innerHTML="User Win";
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;

        }
    }
}

function myFun2(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b); 
    console.log(c);
    let papers = document.getElementById("userImg").src="paper.png";

    if(c==0){
        let rock = document.getElementById("compImg").src="rock.png";        
        if(rock && papers){
            document.getElementById("result").innerHTML="User Win";
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;
        }
    }
    if(c==1){
        let paper = document.getElementById("compImg").src="paper.png";        
        if(paper && papers){
            document.getElementById("result").innerHTML="Match Draw";
        }
    }
    if(c==2){
        let scissor = document.getElementById("compImg").src="scissor.png";        
        if(scissor && papers){
            document.getElementById("result").innerHTML="User Lost";
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
}

function myFun3(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b); 
    console.log(c);
    let scissors = document.getElementById("userImg").src="scissor.png";

    if(c==0){
        let rock = document.getElementById("compImg").src="rock.png";        
        if(rock && scissors){
            document.getElementById("result").innerHTML="User Lost";
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
    if(c==1){
        let paper = document.getElementById("compImg").src="paper.png";        
        if(paper && scissors){
            document.getElementById("result").innerHTML="User Win";
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;
        }
    }
    if(c==2){
        let scissor = document.getElementById("compImg").src="scissor.png";        
        if(scissor && scissors){
            document.getElementById("result").innerHTML="Match Draw";
        }
    }
}