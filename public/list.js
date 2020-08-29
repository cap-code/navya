const API_URL = "http://localhost:3000/data";
const tbody = document.getElementById('tablebody');
fetch(API_URL).then(response=>response.json()).then(data=>{
   data.forEach(people=>{
       const tr = document.createElement('tr');
       const td1 = document.createElement('td');
       const td2 = document.createElement('td');
       td1.innerHTML= people.name;
       td2.innerHTML=people.time;
       console.log(td2.innerHTML);
       tr.append(td1,td2);
       tbody.appendChild(tr);
   })
});