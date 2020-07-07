const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-card").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  //prevents default behaviour of form to submit to a server
  event.preventDefault();

  const msgIp = document.querySelector("#message-input");
  const linkIp = document.querySelector("#link-input");
  document.querySelector("#message-card").classList.add("hide");
  document.querySelector("#link-card").classList.remove("hide");
  //convert the input value(ascii) to base64 encoding
  const encrypted = btoa(msgIp.value);
  //current url
  const url = window.location;
  linkIp.value = `${url}#${encrypted}`;
  //select all the input
  linkIp.select();
});
