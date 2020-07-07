document.querySelector("form").addEventListener("submit", (event) => {
  //prevents default behaviour of form to submit to a server
  event.preventDefault();

  const input = document.querySelector("input");

  console.log(input.value);
});
