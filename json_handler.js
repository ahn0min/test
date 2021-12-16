var feed = document.querySelector('.feedList');

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        jsonFunc(this.responseText);
    }
}

xhr.open("GET", "data.json", true);
xhr.send();
function jsonFunc (jsonText) {
  let json = JSON.parse(jsonText);
  const tableBody = document.querySelector('.product_list_wrap>table>tbody');

  json[0].forEach(data => {
    const {number, title, author, likes, views} = data;
    tableBody.innerHTML += `
    <tr>
      <th>${number}</th>
      <th>
        <a href='#'>${title}</a>
      </th>
      <th>${author}</th>
      <th>${likes}</th>
      <th>${views}</th>
    </tr>`;
  })
  json[1].forEach(data => {
    const {number, title, author, likes, views} = data;
    tableBody.innerHTML += `
    <tr>
      <td>${number}</td>
      <td>
        <a href='#'>${title}</a>
      </td>
      <td>${author}</td>
      <td>${likes}</td>
      <td>${views}</td>
    </tr>`;
  })
}