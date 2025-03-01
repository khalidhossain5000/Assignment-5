completedEvent('card-btn-1','card-1-title');
completedEvent('card-btn-2','card-2-title');
completedEvent('card-btn-3','card-3-title');
completedEvent('card-btn-4','card-4-title');
completedEvent('card-btn-5','card-5-title');
completedEvent('card-btn-6','card-6-title');
 //ALL TASK COMPLETED ALERT-->
 document.getElementById('card-btn-6').addEventListener('click',function(){
    alert("Congrats!!!You have completed all the current task")
})

//clear history when click on button functionalities-->
let allHistoryContainer=document.getElementById('activity-history');
document.getElementById('clear-history-btn')
.addEventListener('click',function(){
    allHistoryContainer.innerText=" ";
})

//HEADER DYNAMIC TIME SHOWING CODE-->
const headerDynamicTime=document.getElementById('header-time-container');//parentNode where dynamic time will be stored
const date=new Date().toLocaleDateString('en-US',{
    weekday:'long',
    month:'short',
    day:'numeric',
    year:'numeric'
});
const h3=document.createElement('h3');
h3.classList.add('text-2xl','title-color','font-bold','ml-5','mb-6')
h3.innerText=`
    ${date}
`
headerDynamicTime.appendChild(h3);

