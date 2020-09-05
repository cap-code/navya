const API_URL= "http://localhost:3000/update"
var form = document.getElementById("editform");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var formdata = new FormData(form);
    var name = formdata.get('name');
    const t = document.getElementById("time").value;
    var [h,m] = t.split(":");
    var ti= h%12+12*(h%12==0)+":"+m;
    var me= h>= 12 ? 'PM' : 'AM';
    var time = ti + me;
    var newname = formdata.get('newname');
    const nt = document.getElementById("newtime").value;
    var [nh,nm] = nt.split(":");
    var nti= nh%12+12*(nh%12==0)+":"+nm;
    var nme= nh>= 12 ? 'PM' : 'AM';
    var newtime = nti + nme;
    var data = {
        name,
        time,
        newname,
        newtime

    };
    console.log(data);
    fetch(API_URL,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=> response.json()).then(editedres=>{
        console.log(editedres);
        form.reset();
    });
});