const socket = io();

socket.on("products", (data) => {
    render(data);
});

socket.on("messages", (data) => {
    renderMessages(data);
});

function render(data) {
    const html = `<tr style="color: yellow;">
    <th>Nombre</th>
    <th>Precio</th>
    <th>Thumbnail</th>
</tr>` + data.reduce((html, index) => `<tr>
    <td>${index.title}</td>
    <td>${index.price}</td>
    <td><img src="${index.thumbnail}" alt="Imagen del producto" style="width: 4rem;"></td>
</tr>` + html, '');
    document.getElementById("tableProducts").innerHTML = html;
}

function renderMessages(data) {
    const html = data.reduce((html, index) => 
             `<div>
          <span style="color: blue; font-weight: bold;">${index.email}</span>
          <span style="color: brown;">[${index.date}]:</span>
          <span style="color: green; font-style: italic;">${index.message}</span></div>`
+ html, '');
    document.getElementById("messages").innerHTML = html;
}

function addProduct(e) {
    let producto = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value,
    };
    socket.emit("new-product", producto);
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("thumbnail").value = "";
    return false;
}

function addMessage(e) {
    let message = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        date: formatDate(),
    };
    socket.emit("new-message", message); 
    document.getElementById("message").value = "";
    document.getElementById("message").focus();

    return false;
}

const formatDate = () => {
    let date = new Date();
    let formatted_date = `${date.getDate()}/${("0" + (date.getMonth() + 1)).slice(
      -2
    )}/${date.getFullYear()} ${date.getHours()}:${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
    return formatted_date;
};