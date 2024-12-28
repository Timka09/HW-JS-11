// Task 1
const bankAccount = {
  ownerName: "Timoha",
  accountNumber: 15,
  balance: 100000000,

  deposit() {
    const depositNum = Number(prompt("Сільки хочете закинути на свій рахунок"))
    this.balance += depositNum
    return alert(`ваш рухунок після депозиту ${this.balance}`)
  },

  withdraw() {
    const withdrawNum = Number(prompt("Сільки хочете зняти зі свого рахунку"))
    this.balance -= withdrawNum
    return alert(`ваш рахунок після зняття коштів ${this.balance}`)
  }
}
bankAccount.deposit()
bankAccount.withdraw()
// Task 2
const weather = {
  temperature: Number(prompt("яка температура повітря?")),
  humidity: "55%",
  windSpeed: "20 m/s",

  chekTemperature() {
    if (this.temperature < 0) {
      return alert("температура нижче 0 градусів Цельсія");
    } else {
      return alert("температура вище за або рівна 0 градусів Цельсія");
    }
  },
};
weather.chekTemperature();
// Task 3
const user = {
  useName: "Timo",
  email: prompt("Введіть емейл"),
  password: Number(prompt("Введіть пароль")),
  login() {
    let rewriteEmail = this.email.toLocaleLowerCase();
    if (
      rewriteEmail.includes("@gmail.com" || "@ukr.net") &&
      this.password.length >= 6
    ) {
      return alert("Ви ввели все правельно");
    } else {
      return alert("Ви ввели щось неправельно. Повторіть спробу");
    }
  },
};
user.login();
// Task 4
const movie = {
  title: "Black Panther",
  director: "Timoha😎",
  year: 2020,
  rating: Number(prompt("введіть пж рейтинг побільше")),

  chekRating() {
    if (this.rating > 8) {
      return this.title = "Black Panther(Я змінився на зелений колір👽";
    } else {
      return false
    }
  }
};
movie.chekRating()
console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);
