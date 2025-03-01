//getting time 
function time() {
    const allTime = new Date().toLocaleTimeString('en-US', {hour12: true});//{ hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }
    return allTime;
}

const activityHistoryField = document.getElementById('activity-history');//parent node where history will be stored
const cardTitle=document.getElementsByClassName('c-title');//giving html collection of card title
const taskAssigned=document.getElementById('task-assigned-text').innerText;
let convertedTaskAssigned=parseInt(taskAssigned);
const headerTask=document.getElementById('header-task').innerText;//this is header task of 23
let convertedHeaderTask=parseInt(headerTask);

//succes alert
let completedButton=0;
const totalBtn=document.getElementsByClassName('card-btn-event').length;

function handleBtnClicked(){
    completedButton++;
    if(completedButton===totalBtn){
        alert("Congrats!!!You have completed all the current task")
    }
}
//board update function 
function completedEvent(btnId,titleId) {
    const title=document.getElementById(titleId).innerText;
    document.getElementById(btnId)
    .addEventListener('click', function () {
            alert("Board Updated SuccessFully")
            const historyTime = time();
            const div = document.createElement('div');
            div.classList.add('bg-[#f4f7ff]', 'px-5', 'py-4', 'rounded-xl', 'm-5')
            div.innerHTML = `
            <p class="text-[16px] text-black ">You have completed the task ${title} at ${historyTime}</p>
            `
            //task assigned number will decrease after every click-->
            const sub=convertedTaskAssigned-1;
            convertedTaskAssigned=sub;
            document.getElementById('task-assigned-text').innerText=sub;
            //this is header task that will show SUM
            const sum=convertedHeaderTask+1;
            convertedHeaderTask=sum;
            document.getElementById('header-task').innerText=sum;
            //will disable button after every click
            const disable=document.getElementById(btnId);
            disable.disabled=true;
            disable.classList.add('bg-gray-500')
            handleBtnClicked()
           return activityHistoryField.appendChild(div);

})

}
