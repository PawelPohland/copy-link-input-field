document.querySelectorAll(".copy-link").forEach((copyLinkContainer) => {
  const inputField = copyLinkContainer.querySelector(".copy-link-input");
  const copyButton = copyLinkContainer.querySelector(".copy-link-button");

  inputField.addEventListener("click", () => inputField.select());

  copyButton.addEventListener("click", () => {
    const text = inputField.value;
    inputField.value = "Copied!";

    inputField.select();
    navigator.clipboard.writeText(text);

    setTimeout(() => (inputField.value = text), 2000);
  });
});
