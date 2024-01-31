const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height==" "|| height<0 ||isNaN(height)){
        result.innerHTML =`Please give a valid height ${height}`
        result.style.backgroundColor="#fff"
        
    }else if(weight==" "||weight<0 ||isNaN(weight)){
        result.innerHTML =`Please give a valid height ${weight}`
        result.style.backgroundColor="#fff"
       
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        //show the result
        if(bmi < 18.6){
            result.innerHTML=`<span><b>${bmi}<br>Under Wieght</b></span>`
            result.style.backgroundColor="#a3a3a3"
            result.style.color="#ff0000"
          
        }else if(bmi>=18.6 && bmi<24.9){
            result.innerHTML=`<span><b>${bmi}<br> Normal Range</b></span>`
            result.style.backgroundColor="#fff"
            result.style.color="#2b8a3e"
           
        }else{
            result.innerHTML=`<span><b>${bmi} <br>Over Wieght</b></span>`
            result.style.backgroundColor="#f2f2f2"
            result.style.color="#f08c00"
            
        }
    }

})