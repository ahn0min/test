// table body
const tableBody = document.querySelector('.product_list_wrap>table>tbody');
// fetch를 사용하여 API로부터 데이터를 받아오는 비동기 함수
const getPosts = async (url) => {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    // Promise 객체이다.
    return posts
  } catch(err) {
    console.error(err)
  }
}

// 문제점: 요청순서는 동기지만 받아오는 순서는 다르기 때문에 매번 순서가 다르게 렌더링된다.
// 해결법: for ... of 문 사용, map 과 Promise.all를 사용 (아직 해보진 않았다.)
for(let i = 1; i < 20; i++) {
  const url = `https://jsonplaceholder.typicode.com/todos/${i}`;

  getPosts(url)
  .then(data => {
    console.log(data)
    const {userId, id, title, completed} = data;
  
    tableBody.innerHTML += `
    <tr>
      <td>${userId}</td>
      <td>
        <a href='#'>${title}</a>
      </td>
      <td>${id}</td>
      <td>${Number(completed)}</td>
      <td>${Number(completed)}</td>
    </tr>`;
  })
}


