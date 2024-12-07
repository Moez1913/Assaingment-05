 document.getElementById('btn-noakhali').addEventListener('click',function(){
   const inputFild=document.getElementById('noakhali-fund').value
   const inputValue=getValue('noakhali-fund');
   const myBalance=getInnerText('my-balance');
   const nokhaliFundBalance=getInnerText('noakhali');
   const myCurrentBalance=myBalance-inputValue;
   const noakhaliCurrentBalance=nokhaliFundBalance+inputValue;

   if(isNaN(inputFild) || inputFild.trim()== ""){
      alert('Please! Enter  Number')
   }
   else if(inputValue<0){
      alert('Please! Enter Valid Amount')

   }
   else if(inputValue>myBalance){
      alert('Insufficiant Fund')
   }
   else{
      document.getElementById('noakhali').innerText=noakhaliCurrentBalance;
      document.getElementById('my-balance').innerText=myCurrentBalance;
      document.getElementById('my_modal_5').showModal()

   }
})



 document.getElementById('btn-feni').addEventListener('click',function(){
   const inputFild=document.getElementById('feni-input').value
   const inputValue=getValue('feni-input');
   const myBalance=getInnerText('my-balance');
   const nokhaliFundBalance=getInnerText('feni-fund');
   const myCurrentBalance=myBalance-inputValue;
   const noakhaliCurrentBalance=nokhaliFundBalance+inputValue;

   if(isNaN(inputFild) || inputFild.trim()== ""){
      alert('Please! Enter  Number')
   }
   else if(inputValue<0){
      alert('Please! Enter Valid Amount')

   }
   else if(inputValue>myBalance){
      alert('Insufficiant Fund')
   }
   else{
      document.getElementById('feni-fund').innerText=noakhaliCurrentBalance;
      document.getElementById('my-balance').innerText=myCurrentBalance;
      document.getElementById('my_modal_5').showModal()

   }
})


 document.getElementById('btn-quota').addEventListener('click',function(){
   const inputFild=document.getElementById('input-quota').value
   const inputValue=getValue('input-quota');
   const myBalance=getInnerText('my-balance');
   const nokhaliFundBalance=getInnerText('fund-quota');
   const myCurrentBalance=myBalance-inputValue;
   const noakhaliCurrentBalance=nokhaliFundBalance+inputValue;

   if(isNaN(inputFild) || inputFild.trim()== ""){
      alert('Please! Enter  Number')
   }
   else if(inputValue<0){
      alert('Please! Enter Valid Amount')

   }
   else if(inputValue>myBalance){
      alert('Insufficiant Fund')
   }
   else{
      document.getElementById('noakhali').innerText=noakhaliCurrentBalance;
      document.getElementById('my-balance').innerText=myCurrentBalance;
      document.getElementById('my_modal_5').showModal()

   }
})
 

