---
title: "DNS + Tor"
date: "2020-05-18"
draft: false
path: "/blog/tor-resolve"
---

احتمالا شما هم تجربه عدم resolve درخواست‌های DNS را داشتید. راه‌کار زیر 
یک روش ساده‌ است که تمام درخواست‌های DNS را از طریق Tor اجابت می‌کند.

## تنظیمات Tor

خط زیر را به فایل تنظیمات Tor اضافه کنید:

```shell
DNSPort 9053
```

و سرویس مربوطه را restart کنید.

## نصب سرور DNS

برای این کار کافیست یک DNS Server ساده نصب کنید، مثل dnsmasq:

```bash
$ sudo apt install dnsmasq
```

سپس فایل مربوط به تنظیمات dnsmasq را طوری تنظیم کنید که درخواست‌های DNS را به سمت Tor هدایت کند:

```shell
#/etc/dnsmasq.conf

no-resolv
port=53
server=127.0.0.1#9053
listen-address=127.0.0.1
```

در نهایت سرویس dnsmasq را restart کنید و DNS سرور سیستم را روی 127.0.0.1 تنظیم کنید.
