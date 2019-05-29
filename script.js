class Contact {
  constructor (name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor (contacts) {
    this.contacts = [
      new Contact ("Tracy", "tracylgarner@aol.com", "313-273-7165", "Family"),
      new Contact ("Jordan", "stripsoffire@yahoo.com", "313-633-8015", "Family")];
  }

  add(info) {
    this.contacts.push(info);
    address.display();
  }

  deleteAt = (index) => {
    this.contacts.splice(index,1);
    address.display();
  }

  display() {
    let contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
    let count = 0;

    for (let contact of this.contacts) {
      let newEntry = document.createElement("section");
      newEntry.setAttribute("data-index",count);
      newEntry.classList.add("content-box");
      newEntry.innerHTML = `
      
      <ul class="contact-info">
        <li>Name:  ${contact.name}</li>
        <li>Email:  ${contact.email}</li>
        <li>Phone:  ${contact.phone}</li>
        <li>Relation:  ${contact.relation}</li>
      </ul>

      <button class="deleteBtn"> <i class="material-icons">delete</i></button>
      `;
      contactList.appendChild(newEntry);

      count++;
    }
  }
}

let address = new AddressBook();

address.display();

let deleteBtn = document.getElementsByClassName("material-icons");
let addBtn = document.getElementById("add");

document.addEventListener("click", function (e) {
  let index = e.target.parentElement.parentElement.dataset.index;
  if (e.target === deleteBtn[index]) {
    address.deleteAt(index);
  }
})

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let relation = document.querySelector("#relation").value;
  let contact = new Contact (name, email, phone, relation);

  address.add(contact);
  let form = document.querySelector(".contact-form");
  form.reset();
})