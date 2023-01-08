---
title: "دسته‌بندی متون"
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

در این نوشته مراحل لازم برای دسته‌بندی متون یک یا چند سایت محدود را
بررسی می‌کنیم. برای انجام دسته‌بندی متون، ابتدا نیاز به جمع‌آوری داده از
سایت‌های مد نظر داریم. بعد از جمع‌آوری داده نیاز به برچسب زدن داده‌ها و
فراهم کردن داده برای آموزش ابزار دسته‌بندی است. در نهایت اجرای الگوریتم
دسته‌بندی و استفاده از نتایج حاصل. به طور خلاصه گام‌های زیر را پیش رو داریم:

- جمع‌آوری داده با استفاده از ابزارهای `wget` و کتابخانه `scrapy` در
پایتون
- برچسب زدن به داده‌ها توسط ابزار `label-studio` 
- آموزش هسته دسته‌بندی توسط ابزار `fasttext` و تهیه مدل
- اجرای الگوریتم دسته‌بندی با مدل به دست آمده و دسته‌بندی متون

## جمع‌آوری لینک‌های‌ داده‌های هدف
برای جمع‌آوری داده از سایت مورد نظر از ابزار `wget` استفاده می‌کنیم و تمام لینک‌های سایت مورد نظر را استخراج می‌کنیم:


```bash
$ wget -erobots=off --spider --recursive \
	   --force-html --no-clobber \
	   --level 0  --delete-after \
	   --reject js,css,jpg,jpeg,gif,png,svg,php,xml,json \
	   http://example.com/ 2>&1 | \
	   grep --line-buffered '^--' | tee link_raw.txt
```

خروجی دستور فوق شامل لینک‌های تکراری است، با استفاده از دستور زیر لینک‌های تکراری را حذف می‌کنیم:

```bash
$ cat link_raw.txt | awk '{ print $3}' | sort | uniq > links.txt
```

بعد از جمع‌آوری تمام لینک‌ها می‌توانیم لینک‌هایی که شامل داده‌های مد نظر
هستند را از بین کل لینک‌ها جدا کنیم. فرض کنید داده‌های یک سایت مبتنی بر
وردپرس هدف نهایی شماست، ولی تنها پست‌های این سایت برای شما ارزشمند است
و ساختار لینک هر پست به صورت `http://wordpressblog.com/?p=234` است. با
استفاده از دستور زیر لینک‌های پست‌ها را جدا می‌کنیم:

```bash
$ cat links.txt | grep '?p=' | target_links.txt
```

## دریافت صفحات
بعد از بدست آوردن لینک صفحاتی که حاوی داده‌های مورد نظر بودند، نوبت به
دریافت آن صفحات می‌رسد.  برای این کار از کتابخانه `scrapy` در پایتون
استفاده می‌کنیم. قبل از آنکه اقدام به پیاده‌سازی خزش‌گر صفحات کنیم، با
استفاده از خط فرمان `scrapy` ساختار صفحات و مختصات داده‌ای که قصد
دریافت آن را داریم بدست می‌آوریم.

برای این منظور از دستور زیر استفاده می‌کنیم:

```bash
$ scrapy shell 'http://someblog.com/?p=1234'
```

پس از اینکه `scrapy` صفحه مورد نظر را دریافت کرد، خروجی مشابه خروجی
زیر نمایش داده می‌شود:

```python
[s] Available Scrapy objects:
[s]   scrapy     scrapy module (contains scrapy.Request, scrapy.Selector, etc)
[s]   crawler    <scrapy.crawler.Crawler object at 0x7f01d2b00040>
[s]   item       {}
[s]   request    <GET http://someblog.com/?p=1234>
[s]   response   <200 http://someblog.com/post-slug/>
[s]   settings   <scrapy.settings.Settings object at 0x7f01d2afc910>
[s]   spider     <DefaultSpider 'default' at 0x7f01d2822520>
[s] Useful shortcuts:
[s]   fetch(url[, redirect=True]) Fetch URL and update local objects (by default, redirects are followed)
[s]   fetch(req)                  Fetch a scrapy.Request and update local objects
[s]   shelp()           Shell help (print this help)
[s]   view(response)    View response in a browser
>>>
```

همان‌طور که در خروجی مشاهده می‌شود، چند شیء مهیا شده‌اند، شیء `response`
حاوی اطلاعات صفحه دریافت شده است. با استفاده از انتخاب‌گرهایی که در
دسترس قرار دارند می‌توانیم قسمت یا قسمت‌های مورد نظر را جدا کنیم. به
عنوان مثل فرض کنید از تمام اطلاعات یک صفحه، فقط قسمت `content` برای
شما اهمیت دارد و این قسمت در یک تگ `div` قرار گرفته است.

```python
>>> content = response.xpath('//*[@id="content"]')[0]
```

و برای گرفتم متن‌های هر پاراگراف می‌توانیم از این دستور استفاده کنیم:

```python
>>> paras = content.xpath('//p//text()')
>>> paras[0].get()
```
