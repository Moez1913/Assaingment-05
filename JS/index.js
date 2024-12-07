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
 

