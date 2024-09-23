const tombol = document.getElementById("tombol");
console.log(tombol);

const data = [
    {
        id:1,
        name:'barbie',
        age: 20
    },
    {
        id: 2,
        name: 'skipper',
        age: 15
    },
    {
        id: 3,
        name: 'stacie',
        age: 12
    }
]



tombol.addEventListener("click", () => {
    console.log('clicked');
    const hello = document.getElementById("hello");
    hello.style.backgroundColor = "black";
    hello.style.color = "white"

    let list = document.getElementById('list');
    let content = '';
    for (let i=0; 1< data.length; i++) {
        content += `<li>${data[i].name}, ${data[i].age}</li>`;
    }
    console.log(content);
    list.innerHTML = content
})