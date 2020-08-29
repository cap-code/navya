var form = document.getElementById("editform");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var formdata = new FormData(form);
    const name = formdata.get('name');
    const t = document.getElementById("time").value;
    var [h,m] = t.split(":");
    var ti= h%12+12*(h%12==0)+":"+m;
    var me= h>= 12 ? 'PM' : 'AM';
    var time = ti + me;
    const newname = formdata.get('newname');
    const nt = document.getElementById("newtime").value;
    var [nh,nm] = nt.split(":");
    var nti= nh%12+12*(nh%12==0)+":"+nm;
    var nme= nh>= 12 ? 'PM' : 'AM';
    var newtime = nti + nme;
    
})