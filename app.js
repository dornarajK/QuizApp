const question=[{
        'que': "Which of tha following is a markup language",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct':"a"

    },
    {
        "que": "what year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of tha above",
      
        'correct':"b"

    },
    {
        'que': "what does Css stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct':"b"

    }]


    //?questuon from const questuon 
let index=0
let total=question.length;
let right=0, woron=0
// 
const queBox=document.getElementById("quesBox")
const optionInput=document.querySelectorAll('.option')

const loadQuestion =()=>{
    if(index ===total){
        return endQuze()
    }
    reset();

    const data=question[index]

    
    //questuon
    queBox.innerText=`${index+1} ${data.que}`
 
    //questuons
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
    
}
submitQuixx= document.querySelector('.btn').addEventListener('click',submitQuix)

function submitQuix() {
    const data=question[index];
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
        
    }else{
        woron++;
    }
    index++;
    loadQuestion();
    return;


}
const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )

    return answer;


}
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        
        }
    )
}

const endQuze = () => {
    document.getElementById('box').innerHTML = `

    <div style="text-align:  center;">   
    <h3> Thank you for playing quiz</h3>
    <h2>${right}/ ${total} are correct</h2>
    </div>
     
        
    `

 
    
}

loadQuestion(); 