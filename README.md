# 🚀 Next.js Server-side Pagination Demo

A simple project demonstrating **Server-side Pagination** using **Next.js App Router** and **API Routes**.

## 📌 What We Built

### ✅ Fake Database

Created a `products.json` file to simulate a database containing product information.

```
src/data/products.json
```

---

### ✅ API Route

Created a Next.js API Route to handle pagination requests.

```
src/app/api/products/route.js
```

The API:

- Reads `page` and `limit` from query parameters.
- Calculates pagination indexes.
- Retrieves products using `Array.slice()`.
- Returns paginated data.
- Returns pagination metadata.

---

### ✅ Pagination Logic

Implemented backend pagination using:

- `page`
- `limit`
- `startIndex`
- `endIndex`
- `Array.slice()`

---

### ✅ Pagination Metadata

The API returns useful pagination information such as:

- Current Page
- Items Per Page
- Total Products
- Total Pages
- Previous Page Availability
- Next Page Availability

---

### ✅ API Testing

Pagination can be tested directly from the browser.

Example:

```
http://localhost:3000/api/products?page=1&limit=3
```

```
http://localhost:3000/api/products?page=2&limit=3
```

---

## 📂 Project Structure

```
src
│
├── app
│   ├── api
│   │   └── products
│   │       └── route.js
│   │
│   ├── page.js
│   └── globals.css
│
└── data
    └── products.json
```

---

## 🛠️ Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Next.js API Routes

---

## 🎯 Learning Outcome

This project demonstrates how **Server-side Pagination** works by processing pagination on the backend instead of sending all records to the client.