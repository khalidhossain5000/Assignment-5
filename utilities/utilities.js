//function for history when click on completed button-->
// // const mainCardAllBtn = document.getElementsByClassName('card-btn-event');
// const activityHistoryField = document.getElementById('activity-history');
// const historyField = document.getElementById('activity-history')//parentnodewherehistorywillbe stored
// const cardTitle=document.getElementsByClassName('c-title');

// console.log(cardTitle)
// const titleTest=title();
// for(const cardBtn of mainCardAllBtn){
//     cardBtn.addEventListener('click',function(){
//         const div=document.createElement('div');
//         div.classList.add('bg-[#f4f7ff]', 'px-5', 'py-4', 'rounded-xl', 'm-5')
//         div.innerHTML=`
//         <p class="text-[16px] text-black ">${titleTest} You have completed the task at ${historyTime}</p>
//         `
//         historyField.appendChild(div);

//     })    
// }
//function for formatted time for the history field-->
function time() {
    const allTime = new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });
    return allTime;
}




const activityHistoryField = document.getElementById('activity-history');//parent node where history will be stored

const cardTitle=document.getElementsByClassName('c-title');//giving html collection of card title
function completedEvent(btnId,titleId) {
    const title=document.getElementById(titleId).innerText;
    document.getElementById(btnId)
    .addEventListener('click', function () {
            const historyTime = time();
            const div = document.createElement('div');
            div.classList.add('bg-[#f4f7ff]', 'px-5', 'py-4', 'rounded-xl', 'm-5')
            div.innerHTML = `
            <p class="text-[16px] text-black ">You have completed the task ${title} at ${historyTime}</p>
            `
            const disable=document.getElementById(btnId);
            disable.disabled=true;
            disable.classList.add('bg-gray-500')
           return activityHistoryField.appendChild(div);

})

}

