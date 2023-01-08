---
title: "شبکه‌های نسل ۵ موبایل"
#date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags:
  - یادگیری ماشین
  - دسته‌بندی
  - fasttext
#author: "علی"
showToc: true
TocOpen: false
draft: true
hidemeta: false
comments: false
#description: "توضیحات مختصر"
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: false
ShowBreadCrumbs: false
ShowPostNavLinks: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
#editPost:
#    URL: "https://github.com/blog/content/fa"
#    Text: "پیشنهادها" # edit text
#    appendFilePath: true # to append file path to Edit link
---

# مقدمه
نسل ۵ام شبکه‌های موبایل نیازمندی‌های جدیدی در حوزه محاسبه هزینه‌ و صورت‌
حساب‌ مطرح کرده که لازمه آن ارائه معماری جدید و API جدید است. این نوشته
تلاشی برای ارائه بیانی اجمالی از این معماری جدید است. این معماری جدید
یک معماری سرویس‌پایه است و هدف آن پوشش تمام نیازمندی‌های شبکه برای
محاسبه هزینه و صورت حساب است.

# معماری
در سیستم جدید محاسبه هزینه‌ی نسل ۵ام شبکه‌های موبایل، سیستم محاسبه
هزینه‌ برخط با سیستم محاسبه‌ هزینه برون‌خط ادغام شده و تشکیل یک سیستم
محاسبه هزینه همگرا را داده‌اند. این سیستم همگرا شامل اجزاء زیر است:
- تابع محاسبه هزینه
- تابع ارزش‌گذاری
- تابع مدیریت موجودی حساب
- تابع درگاه محاسبه هزینه

## تابع محاسبه هزینه (CHF)
تابع محاسبه هزینه شامل دو بخش است:
- تابع محاسبه هزینه برخط، OCS، که عملکرد مدیریت اعتبار را طبق ادبیات
  اعتبار-کنترل فراهم می‌کند.
- تابع داده محاسبه هزینه، CDF، که عملکرد تولید CDRها برای رخدادهای
   واصله از CTF یا CEF از طریق Nchf را فراهم می‌کند.

## تابع مدیریت موجودی حساب (ABMF)
