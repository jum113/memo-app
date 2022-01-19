const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="card mx-4 my-3 " style="width: 20rem;">
      <div class="body overflow-scroll" style="height: 300px">
        <h5 class="card-title shadow ms-2">${ item.title }</h5>
        <p class="card-text px-2 py-3 overflow-scroll">${ item.content }</p>
      </div>
    </div>`;
  return html;
};

function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/memos", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const list = document.getElementById("list");
      const title = document.getElementById("title");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterbegin", buildHTML(XHR));
      title.value = "";
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);