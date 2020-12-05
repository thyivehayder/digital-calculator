// There are four different functions we have to write for our calculator.
// insert(num)
// equal()
// empty()
// back()


function insert(number) {
   document.form.textview.value=document.form.textview.value+number
}
function equal() {
    let equalProcedure=document.form.textview.value
    if(equalProcedure){
        document.form.textview.value=eval(equalProcedure)
    }
}
function clean() {
    document.form.textview.value=''
}
function back() {
    let backProcedure=document.form.textview.value
    document.form.textview.value=backProcedure.substring(0,backProcedure.length-1)
}
