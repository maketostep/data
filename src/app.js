const loginHTML = `<div class="enter">
<div class="form">
    <h2 class="error" id="error">Вход не выполнен</h2>
    <form>
        <h3>Войдите в аккаунт</h3>
        <input type="text" id="login" placeholder="Введите логин">
        <input type="password"  id="password" placeholder="Введите пароль" autocomplete="on">

        <button id="btn" class="btn">LOGIN</button>
    </form>
</div>
</div>`

let isLogged = false
const url = 'https://raw.githubusercontent.com/maketostep/data/main/data.json'
let usersData = []
let getUsers = fetch(url)
    .then(data => data.json())
    .then(data => {
        const keys = Object.keys(data).map(key => ({
            ...data[key]

            
        }))
        return keys
    })
    .then(users => usersData = users)
    .catch(e => console.error(e))

async function start() {
    document.body.innerHTML = `<h1>Loading...</h1>`
    await getUsers
    document.body.innerHTML = loginHTML
    const login = document.getElementById('login')
    const password = document.getElementById('password')
    const btn = document.getElementById('btn')
    const error = document.getElementById('error')
    
    btn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log()
    if(await LoginWithData(login.value, password.value)) {
        error.className = 'success'
        error.textContent = 'Успешный вход!'
        error.value = 'Успешный вход!'
        setTimeout(() => {
            document.body.innerHTML = `<h2>Количество накоплений: <p id="count">loading...</p></h2>`
        }, 3000)
    } else {
        document.body.innerHTML = `<h2 class="error">Неверный пароль!</h2>`
        setTimeout(() => {
            // document.body.innerHTML = loginHTML
            location.reload()
        }, 2000)
    }
})
}
start()

async function LoginWithData(log, pass) {
    await getUsers
    const test = usersData.find(user => user.name === log && user.password === pass)
    // await getUsers
    return test !== undefined
}
