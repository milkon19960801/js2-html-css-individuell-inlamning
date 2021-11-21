"use strict";

const formButton = document.getElementById("form-button");
const contactFrom = document.getElementById("contact-form");

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const msg = document.createElement("p");
  msg.innerHTML = "Tack för ditt meddelande! Vi återkopplar så fort vi kan";
  msg.id = "form-msg";

  contactFrom.innerHTML = "";
  contactFrom.appendChild(msg);
});
