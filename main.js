const wyslij = document.querySelector('#wyslij');
const wynik = document.querySelector('.wynik'); 
wyslij.addEventListener('click', () =>  { 
    const srinput = document.querySelector('#email').value;
    console.log(srinput)    
    fetch(`https://jsonplaceholder.typicode.com/users?email=${srinput}`)
        .then((response) => response.json())
        .then((users) => {
            const user1 = users[0]; 
            const tr1 = document.createElement('tr'); 
            const tr2 = document.createElement('tr'); 
            const td1 = document.createElement('td'); 
            const td2 = document.createElement('td'); 
            const td3 = document.createElement('td'); 
            const td4 = document.createElement('td'); 
            const td5 = document.createElement('td'); 
            const td6 = document.createElement('td'); 
            const td7 = document.createElement('td'); 
            const td8 = document.createElement('td'); 

            td1.textContent = `id`
            td2.textContent = `name`
            td3.textContent = `email`
            td4.textContent = `city`
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)
            
            td5.textContent = user1.id; 
            td6.textContent = user1.name;
            td7.textContent = user1.email;
            td8.textContent = user1.address.city;
            tr2.appendChild(td5)
            tr2.appendChild(td6)
            tr2.appendChild(td7)
            tr2.appendChild(td8)
            
            wynik.appendChild(tr1);
            wynik.appendChild(tr2);
            console.log(user1 )
        })
        .catch((error) => console.log(error))
}); 