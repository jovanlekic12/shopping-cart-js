import "./style.css";
import "./data.js";
import { cars } from "./data.js";
const list = document.querySelector(".car__container");
class CarManager {
  cars;
  constructor() {
    this.cars = [];
  }
  addCar(car) {
    this.cars.push(car);
  }

  deleteCar(id) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  renderCars() {
    this.cars.forEach((car) => {
      const html = `<li class="list__item" id="${car.id}">
      <div class="first__data">
      <h1 class="first__data_title">${car.name}</h1>
      <img src="${car.image}" alt="404 not found">
      </div>
      <div class="second__data">
      <p><strong>Brand:</strong> ${car.brand}</p>
      <p><strong>Manufactured Year:</strong> ${car.manufacturedYear}</p>
      <p><strong>Doors:</strong> ${car.doors}</p>
      <p><strong>Price:</strong><span class="price"> $${car.price}</span></p>
      </div>
      <p class="available ${
        car.available === "yes" ? "green" : "red"
      }"><strong>Available:</strong> ${car.available}</p>
      <button class="delete__car" data-carid="${car.id}">Delete</button>
      </li>`;
      list.insertAdjacentHTML("beforeend", html);
    });
  }
}

class Car {
  id;
  name;
  brand;
  manufacturedYear;
  doors;
  price;
  available;
  image;
  constructor(
    id,
    name,
    brand,
    manufacturedYear,
    doors,
    price,
    available,
    image
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.manufacturedYear = manufacturedYear;
    this.doors = doors;
    this.price = price;
    this.available = available;
    this.image = image;
  }
}

const carManager = new CarManager();
cars.forEach((car) => {
  carManager.addCar(
    new Car(
      car.id,
      car.name,
      car.brand,
      car.manufacturedYear,
      car.doors,
      car.price,
      car.available,
      car.image
    )
  );
});
carManager.renderCars();

list.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.classList.contains("delete__car")) {
    const li = event.target.closest("li");
    const id = li.id;
    console.log(id);
    carManager.deleteCar(id);
    li.remove();
    console.log(carManager);
  }
});
