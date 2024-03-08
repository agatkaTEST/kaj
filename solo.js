const wyslij = document.querySelector('#wyslij');
const wynik = document.querySelector('.wynik');

wyslij.addEventListener('click', async () => {
    const srinput = document.querySelector('#email').value;
    try {
        const json = await fetch(`https://jsonplaceholder.typicode.com/users?email=${srinput}`);
        const users = await json.json();

        const wartosci = ['id', 'name', 'email', 'address.city'];
        if (users.length > 0) {
            const user = users[0];
            for (const wartosc of wartosci) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.textContent = user[wartosc];
                tr.appendChild(td);
                wynik.appendChild(tr);
            }
        } else {
            wynik.innerHTML = 'nie znaleziono uzytkownika';
        }
    } catch (error) {
        console.error(error);
    }
});