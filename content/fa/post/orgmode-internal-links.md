---
title: "ارجاع درون متنی در org-mode"
#date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags:
  - org-mode
#author: "علی"
showToc: true
TocOpen: false
draft: false
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

گاهی اوقات نیاز است در یک سند مبتنی بر `org-mode` ارجاع به یک قسمت
دیگر از سند داشته باشیم. فرض کنید خلاصه جلسات درسی را در یک سند
جمع‌آوری کرده‌اید، جایی در میان مباحث درسی نیاز به ارجاع به قسمتی از
جلسات گذشته است، در این صورت می‌توانید با استفاده از `[[sectoin]]` به
بخش مورد نظر ارجاع دهید. برای انواع ارجاعات در `org-mode` می‌توانید به
این [لینک](https://orgmode.org/manual/Internal-Links.html) مراجعه
کنید.

```org
* Lecture 1
** Array
* Lecture 2
** Linked List
- [[Array]]
```
