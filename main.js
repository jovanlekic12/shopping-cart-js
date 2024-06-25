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

  renderCars() {
    this.cars.forEach((car) => {
      const html = `<li class="list__item" id="${car.id}">
      <div class="first__data">
      <h1>${car.name}</h1>
      <img src="${car.image}" alt="404 not found">
      </div>
      <div class="second__data">
      <p><strong>Brand:</strong> ${car.brand}</p>
      <p><strong>Manufactured Year:</strong> ${car.manufacturedYear}</p>
      <p><strong>Doors:</strong> ${car.doors}</p>
      <p><strong>Price:</strong><span class="price"> $${car.price}</span></p>
      </div>
      <p><strong>Available:</strong> ${car.available}</p>
      <button class"delete__car" data-carid="${car.id}">Delete</button>
      </li>`;
      list.insertAdjacentHTML("afterbegin", html);
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
console.log(carManager);
carManager.renderCars();
