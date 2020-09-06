const form = document.getElementById('viewform');
const tbody = document.getElementById('tablebody');
form.addEventListener('submit',event=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const name = formdata.get('name');
    const API_URL= "http://localhost:3000/view/" + name;
    fetch(API_URL).then(response => response.json()).then(data =>{
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var tr= document.createElement('tr');
       td1.innerHTML= data[0].name;
       td2.innerHTML= data[0].time;
       console.log(data);
       tr.append(td1,td2);
       tbody.appendChild(tr);
    });
});
