import "./style.css";
import "./data.js";
import { cars } from "./data.js";
const list = document.querySelector(".car__container");
const filter = document.querySelector(".filter");
const sort = document.querySelector(".sortOptions");
class CarManager {
  cars;
  filteredCars;
  constructor() {
    this.cars = [];
    this.filteredCars = [];
  }
  addCar(car) {
    this.cars.push(car);
  }

  deleteCar(id) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  sortingArray(value) {
    if (value === "high") {
      this.cars.sort((a, b) => b.price - a.price);
    } else if (value === "low") {
      this.cars.sort((a, b) => a.price - b.price);
    } else if (value === "az") {
      this.cars.sort((a, b) =>
        a.brand.toLowerCase().localeCompare(b.brand.toLowerCase())
      );
    } else if (value === "za") {
      this.cars.sort((a, b) =>
        b.brand.toLowerCase().localeCompare(a.brand.toLowerCase())
      );
    }
  }

  fillArray() {
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
  }

  filterCars(key, value) {
    this.filteredCars = [...this.cars];
    this.filteredCars = this.filteredCars.filter((car) => car[key] == value);
    // if (key === "available-yes") {
    //   this.cars = this.cars.filter((car) => car.available === "yes");
    //   return;
    // } else if (key === "available-yes") {
    //   this.cars = this.cars.filter((car) => car.available === "no");
    //   return;
    // }
  }

  renderCars(cars) {
    list.innerHTML = "";
    cars.forEach((car) => {
      const html = `<li class="list__item" id="${car.id}">
      <div class="first__data">
      <h1 class="first__data_title">${car.name}</h1>
      <img src="${car.image}" alt="${car.image}">
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
carManager.fillArray();
carManager.sortingArray("az");
carManager.renderCars(carManager.cars);
const deleteButtons = document.querySelectorAll(".delete__car");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const li = button.closest("li");
    const id = li.id;
    carManager.deleteCar(Number(id));
    li.remove();
  });
});

filter.addEventListener("change", function (event) {
  const [key, value] = event.target.value.split("-");
  carManager.filterCars(key, value);
  carManager.renderCars(carManager.filteredCars);
  console.log(key, value);
});

sort.addEventListener("change", function (event) {
  console.log(event.target.value);
  carManager.sortingArray(event.target.value);
  carManager.renderCars(carManager.cars);
});
