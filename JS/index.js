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
      const section= document.getElementById('history-section')
      const div=document.createElement('div');
      const currentTime = new Date().toString();
      div.innerHTML=`
      <div tabindex="0" class="collapse collapse-open border-base-300 bg-white border">
  <div class="collapse-title text-xl font-medium">${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh</div>
  <div class="collapse-content">
    <p>Date:${currentTime}</p>
  </div>
</div>
      `
      div.classList.add('mx-36','mb-4','bg-white')
      section.appendChild(div)


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
      document.getElementById('my_modal_5').showModal();

      const section= document.getElementById('history-section')
      const div=document.createElement('div');
      const currentTime = new Date().toString();
      div.innerHTML=`
      <div tabindex="0" class="collapse collapse-open border-base-300 bg-white border">
  <div class="collapse-title text-xl font-medium">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</div>
  <div class="collapse-content">
    <p>Date:${currentTime}</p>
  </div>
</div>
      `
      div.classList.add('mx-36','mb-4','bg-white')
      section.appendChild(div)

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
      document.getElementById('my_modal_5').showModal();

      const section= document.getElementById('history-section')
      const div=document.createElement('div');
      const currentTime = new Date().toString();
      div.innerHTML=`
      <div tabindex="0" class="collapse collapse-open border-base-300 bg-white border">
  <div class="collapse-title text-xl font-medium">${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</div>
  <div class="collapse-content">
    <p>Date:${currentTime}</p>
  </div>
</div>
      `
      div.classList.add('mx-36','mb-4','bg-white');
      section.appendChild(div);

   }
})
 
//toggle button
document.getElementById('history').addEventListener('click',function(){
   const card=document.getElementById('card');
   const history=document.getElementById('history-section')
   const button=document.getElementById('history');
   const donation=document.getElementById('donation');
   donation.classList.remove('bg-[#B4F461]')
   button.classList.add('bg-[#B4F461]','hover:bg-[#B4F461]')
   history.classList.remove('hidden')
   card.classList.add('hidden')
})

document.getElementById('donation').addEventListener('click',function(){
   const card=document.getElementById('card');
   const history=document.getElementById('history-section')
   const button=document.getElementById('history');
   const donation=document.getElementById('donation');
   donation.classList.add('bg-[#B4F461]','hover:bg-[#B4F461]')
   button.classList.remove('bg-[#B4F461]','hover:bg-[#B4F461]')
   history.classList.add('hidden')
   card.classList.remove('hidden')
})

document.getElementById('blog').addEventListener('click',function(){
   window.location.href='/blog.html'
})
