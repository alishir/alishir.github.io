---
title: "یک پایان غیرمنتظره"
date: "2020-05-18"
draft: false
path: "/blog/npm-error-unexpected-end-of-json"
---

اگر در نصب بسته‌های npm با خطایی مشابه خطای زیر مواجه شده‌اید:

```shell
npm ERR! Unexpected end of JSON input while parsing near '...arball":"https://regi'
```


و تمام راه‌کارهایی که به ذهن‌تان خطور کرده را تست کرده‌اید و به نتیجه نرسیده‌اید،
شاید دستورات زیر که ذیل این [مشکل](https://github.com/npm/npm/issues/19072) بیان شده، کمک کننده باشد.

```shell
$ npm cache clean --force
$ npm install <package>
```
