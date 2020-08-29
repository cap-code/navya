var form = document.getElementById("addform");
const API_URL='http://localhost:3000/data';
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const name = formdata.get('name');
    const t = document.getElementById("time").value;
    var [h,m] = t.split(":");
    var ti= h%12+12*(h%12==0)+":"+m;
    var me= h>= 12 ? 'PM' : 'AM';
    var time = ti + me;
    var data={
        name,
        time
    };
    console.log(data);
  fetch(API_URL,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
          'content-type':'application/json'
      },
  }).then(response=> response.json()).then(createdres=>{
      console.log(createdres);
      form.reset();
  });
})