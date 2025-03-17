const jsonData = "data.json"; // ̳���, �� ����������� ���

// ������� ��� ��������� ����� � JSON
async function fetchData() {
    const response = await fetch(jsonData);
    return await response.json();
}

// ��������� �����������
document.getElementById('register-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let data = await fetchData();
    data.users.push({ username, password });
    console.log('����������� ������������:', data);
    // ��� ����� ������ ��� ��� ���������� ����� � �������� ������� ��� ������
});

// ���� �����������
document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let data = await fetchData();
    const user = data.users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('���� �������');
        window.location.href = 'profile.html'; // ������� �� �������
    } else {
        alert('����� ���');
    }
});

// ��������� �����
document.getElementById('create-post-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    let data = await fetchData();
    const newPost = {
        id: data.posts.length + 1,
        author: 'admin', // � ��������� ������� ��� ���� �������� ����������
        title,
        content
    };
    data.posts.push(newPost);
    console.log('����� ���� ��������:', newPost);
    // ��� ����� ������ ��� ��� ���������� ����� � �������� ������� ��� ������
});
