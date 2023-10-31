// data

const account1 = {
  owner: "Fareedat Ifibayi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  pin: 3333,
  currency: "USD",
  locale: "en-US",
};

const account2 = {
  owner: "Revazi Karanadze",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
  pin: 2222,
};

const account3 = {
  owner: "Mamuka Karanadze",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 1111,
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Niniko Bagrationi",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account5 = {
  owner: "Michael Back",
  movements: [200, -20, 500, 900, -340, -600],
  interestRate: 1.5,
  pin: 1234,
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account6 = {
  owner: "Xavi Alonso",
  movements: [400, 700, 1300, 2000, -1000, -700, -100, 50],
  interestRate: 0.5,
  pin: 9999,
  movementsDates: [
    "2023-03-30T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-10-30T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login-input--username");
const inputLoginPin = document.querySelector(".pin-input--userpin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const formatMovementDate = function (date, locale) {
  const calcDay1 = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDay1(new Date(), date);

  if (dayPassed === 0) return "Today";
  if (dayPassed === 1) return "Yesterday";
  if (dayPassed <= 7) return `${dayPassed} day ago`;
  else {
    return Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovenemts = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movS = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movS.forEach((mov, i) => {
    const date = new Date(acc.movementsDates[i]);

    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${formatMovementDate(date, acc.locale)}</div>
      <div class="movements__value">${formatCur(
        mov,
        acc.locale,
        acc.currency
      )}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const balance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const displaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((mov, i, arr) => mov >= 1)
    .reduce((acc, mov, _, arr) => acc + mov / arr.length);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((user) => user[0])
      .join("");
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  displayMovenemts(acc);
  balance(acc);
  displaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = "Logged out, Log In again";
    }
    time--;
  };
  let time = 5 * 60;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// event handlers

let currentAccount, timer;

// currentAccount = account1;
// updateUI(account1);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value.toLowerCase()
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    updateUI(currentAccount);
  } else {
    alert(`You putted wrong username or password`);
  }

  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
  inputLoginUsername.blur();
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciver = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    reciver &&
    currentAccount.balance >= amount &&
    reciver?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciver.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    reciver.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogOutTimer();
  } else if (currentAccount.balance < amount) {
    alert("You don't have enough money");
  } else {
    alert("wrong action. Try again");
  }
  inputTransferTo.value = inputTransferAmount.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovenemts(currentAccount, !sorted);
  sorted = !sorted;
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount &&
    amount > 0 &&
    currentAccount.movements.some((mov) => mov * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === inputCloseUsername.value
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
  inputCloseUsername.blur();
  inputClosePin.blur();
  labelWelcome.textContent = `Login in to Bank`;
});
