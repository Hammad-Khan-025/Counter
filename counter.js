let count = 0;
const btns = document.querySelectorAll('.btn')

const textValue = document.querySelector('.value')

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=> {
        let styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('reset')){
            count = 0;
        }
        else if (styles.contains('increase')){
            count++;
        }
        if(count > 0){
            textValue.style.color = 'green'
        }
        if(count < 0){
            textValue.style.color = 'red'
        }
        if(count === 0){
            textValue.style.color = '#212529'
        }
        textValue.innerHTML = count;

    })
})