---
title: "نمونه کد"
date: "2019-06-06"
draft: true
path: "/blog/code-example"
---

این یک نوشته تستی ‌می‌باشد. در این نوشته از قسمت‌های کد استفاده می‌شود.

```js
console.log("Hello World");
```

# یک هدر و بخش جدید

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
