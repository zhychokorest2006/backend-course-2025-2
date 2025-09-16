const { URL, URLSearchParams } = require('url');

// --- Константи для варіанту 4 ---
const currency = "EUR";        // Валюта
const exact_date = "20240910"; // Дата (10 вересня 2024)

// --- Базовий URL ---
const baseUrl = "https://bank.gov.ua/NBU_Exchange/exchange_site";

// --- Створюємо URL ---
const url = new URL(baseUrl);

// --- Додаємо параметри ---
url.search = new URLSearchParams({
  valcode: currency,
  date: exact_date,
  json: ""
});

// --- Виводимо URL у консоль ---
console.log(url.toString());