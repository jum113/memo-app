const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="card mx-4 my-3 " style="width: 20rem;">
      <div class="card-body overflow-scroll" style="height: 300px">
        <h5 class="card-title shadow ms-2">
          ${ item.title }
        </h5>
        <h6 class="d-flex justify-content-end pt-2">
          ${ item.created_at }
        </h6>
        <p class="card-text overflow-scroll">
          ${ item.content }
        </p>
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
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const title = document.getElementById("title");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterbegin", buildHTML(XHR));
      title.value = "";
      formText.value = "";
      location.reload();
    };
  });
};

window.addEventListener('load', post);