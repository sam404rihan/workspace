let count=0
let comp=0;
let incomp=0;
        function add(){
            
            if(count>6){
                alert('complete your current tasks')
                return 0;}
            let input=document.getElementById("input").value;
            if(!input){
                alert('try to do something lol')
                return 0;
            }
            let x=document.getElementById("task");
            let div= document.createElement('div');
            div.classList.add('taskerr');
            div.innerHTML=`${input}<div><button class='complete' onclick='something(this)' >completed</button></div><button class='delete' onclick='remove(this)'>remove</button>`;
            count+=1;
            x.appendChild(div);
            document.getElementById("input").value=''
            incomp+=1;
            document.getElementById('taskCount').textContent=` Completed: ${comp}| Incomplete: ${incomp}`;

          
        }
        function something(element){
            incomp-=1;
            comp=count-incomp;
            document.getElementById('taskCount').textContent=` Completed: ${comp}| Incomplete: ${incomp}`;
            
            element.parentElement.parentElement.style.backgroundColor = 'green';
            element.parentElement.parentElement.style.color = 'white';
            element.parentElement.remove();
        }




function remove(element){
        
        count=count-1
        comp-=1
        document.getElementById('taskCount').textContent=` Completed: ${comp}| Incomplete: ${incomp}`;
        element.parentElement.remove();
}