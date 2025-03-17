const jsonData = "data.json"; // Місце, де зберігаються дані

// Функція для отримання даних з JSON
async function fetchData() {
    const response = await fetch(jsonData);
    return await response.json();
}

// Реєстрація користувача
document.getElementById('register-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let data = await fetchData();
    data.users.push({ username, password });
    console.log('Користувача зареєстровано:', data);
    // Тут можна додати код для збереження даних в локальне сховище або сервер
});

// Логін користувача
document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let data = await fetchData();
    const user = data.users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Вхід успішний');
        window.location.href = 'profile.html'; // Перехід на профіль
    } else {
        alert('Невірні дані');
    }
});

// Створення посту
document.getElementById('create-post-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    let data = await fetchData();
    const newPost = {
        id: data.posts.length + 1,
        author: 'admin', // В реальному додатку тут буде поточний користувач
        title,
        content
    };
    data.posts.push(newPost);
    console.log('Новий пост створено:', newPost);
    // Тут можна додати код для збереження поста в локальне сховище або сервер
});
