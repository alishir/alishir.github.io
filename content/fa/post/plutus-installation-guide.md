---
title: "مراحل نصب Plutus Playground"
#date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags:
  - Plutus
  - Cardano
  - زنجیره بلوک
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

# مقدمه
حتما عبارت «زنجیره بلوک» را شنیده‌اید، تکنولوژی زنجیره بلوک شامل چند
نسل است. نسل اول از این تکنولوژی تنها قادر به پشتیبانی از رمز‌ارزها
است، اما نسل‌های بعدی تکنولوژی زنجیره بلوک از قراردادهای هوشمند نیز
پیشتیبانی می‌کند.

اما منظور از قرارداد هوشمند چیست و چه چیزی سبب می‌شود که به این نوع
قراردادها، قرارداد هوشمند بگوئیم؟

در قراردادهای عادی، برای ثبت و اجرای قرارداد نیاز به حضور شخصی غیر از
طرفین قرارداد هستیم. مثلا در قرارداد اجاره یک منزل مسکونی، علاوه به
شخص اجاره دهنده و مستاجر، نیازمند ثبت قرارداد در یک بنگاه املاک
هستیم. در قراردادهای هوشمند این واسطه وجود ندارد و به محض فراهم شدن
مقدمات و شرایط قرارداد، قرارداد به صورت خودکار اجرا می‌شود.

زیرساخت Plutus محیطی برای پیاده‌سازی، تست و شبیه‌سازیِ قراردادهای هوشمند
بر بستر زنجیره بلوک Cardano فراهم می‌کند. زبان برنامه‌نویسی در این محیط
Haskell است. کدهای قراردادها از دو بخش on-chian و off-chain تشکیل
شده. کدهای on-chain بر بستر زنجیره بلوک اجرا می‌شوند و کدهای off-chain
در محیطی خارج از زنجیره بلوک اجرا می‌شوند. یکی از خوبی‌های این محیط این
است که زبان برنامه‌نویسی هر دو بخش on-chan و off-chain زبان Haskell است
و نیازی نیست برای هر قسمت زبان مجزائی استفاده شود. مزیت دیگر استفاده
از زبان یکسان برای هر دو بخش این است که می‌توان کدها را بین بخش‌های
مختلف به اشتراک گذاشت و نیازی به بازنویسی کدها نیست.

# مراحل نصب Plutus Playground
Plutus Playground محیط توسعه و تست قراردادهای هوشمند را قبل از اجرای
آن‌ها بر بستر زنجیره بلوک Cardano فراهم می‌کند.

برای مهیا کردن این محیط نیاز به برنامه مدیریت بسته
[Nix](https://nixos.org/download.html#nix-install-linux) است. در ادامه
مراحل نصب این برنامه و Plutus Playground ذکر می‌شود.

## نصب Nix
برای نصب Nix ابتدا، پیش‌نیازهای این برنامه را نصب کنید:

```bash
$ sudo apt update
$ sudo apt install curl git
$ sh <(curl -L https://nixos.org/nix/install) --no-daemon
```

دستورات بالا پوشه `nix/` را در سیستم شما ایجاد می‌کند، برای نصب Plutus
Playground تقریبا ۱۳ گیگا بایت فضای خالی در مسیر `/` مورد نیاز است. در
صورتی که این میزان فضای خالی وجود ندارد، می‌توانید پوشه ‍`nix/` را روی
یک دیسک خارجی کپی کنید و با استفاده از دستورات زیر آن پوشه را در مسیر
مورد نیاز ‍`mount` کنید.

```bash
$ sudo mount /dev/sdb1 /mnt
$ sudo rsync -av /nix /mnt
$ sudo rm -rf /nix/*

$ # mount /nix from external device
$ sudo mount /dev/sdb1 /mnt
$ sudo mount --bind /mnt/nix /nix
```

پس از نصب Nix، برای استفاده از دستورات `*-nix` در ترمینال خود دستور زیر را وارد کنید:

```bash
$ source /home/ali/.nix-profile/etc/profile.d/nix.sh
```

می‌توانید این دستور را در انتهای فایل `bashrc./~` هم اضافه کنید.

## فعال‌سازی Cache
در صورت عدم فعال‌سازی Cache، بخش عمده‌ای از نیازمندی‌های Plutus
Playground روی سیستم شما از منبع ساخته می‌شود و این باعث طولانی شدن
فرآیند نصب و اشغال حجم بالای دیسک می‌شود. به همین دلیل از نیازمندی‌های
پیش‌ساخته که توسط IOHK آماده شده استفاده می‌کنیم.


برای اضافه کردن Cache ابتدا مسیر لازم برای فایل تنظیمات Nix را توسط
دستورات زیر ایجاد کنید:

```bash
$ mkdir -p ~/.config/nix
$ touch ~/.config/nix/nix.conf

```

سپس خط‌های زیر را در فایل `nix.conf` اضافه کنید:

```conf
substituters          = https://hydra.iohk.io https://iohk.cachix.org https://cache.nixos.org/
trusted-public-keys   = hydra.iohk.io:f/Ea+s+dFdN+3Y/G+FDgSq+a5NEWhJGzdjvKNGv0/EQ= iohk.cachix.org-1:DpRUyj7h7V830dp/i6Nti+NEO2/nhblbov/8MW7Rqoo= cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY=
experimental-features = nix-command
```

## دریافت کدها و نصب نهایی
پس از نصب Nix نوبت به دریافت‌ کدهای پروژه plutus-app، ساخت و اجرای این
برنامه است. برای این منظور مراحل زیر را انجام دهید:

```bash
$ git clone https://github.com/input-output-hk/plutus-apps
$ cd plutus-app
$ git checkout 41149926c
$ nix-build -A plutus-playground.server
```

بعد از اتمام مراحل فوق، دستور `nix-shell` را اجرا کنید و سپس در محیط
اجرایی `nix-shell` دستورات زیر را اجرا کنید:

```bash
[nix-shell:~/plutus-app] $ cd plutus-playground-client
[nix-shell:~/plutus-app/plutus-playground-client] $ plutus-playground-server
```

صبر کنید تا عبارت `Interpreter ready` در صفحه نمایش چاپ شود. پس از این
مرحله در یک **ترمینال دیگر** مجددا `nix-shell` را اجرا کنید و در محیط
اجرایی آن دستورات زیر را اجرا کنید:

```bash
[nix-shell:~/plutus-app] $ cd plutus-playground-client
[nix-shell:~/plutus-app/plutus-playground-client] $ npm install
[nix-shell:~/plutus-app/plutus-playground-client] $ npm run start
```

پس از اینکه پیام `... webpack compiled with` را مشاهده کردید، به آدرس
`https://localhost:8009` در مرورگر خود بروید و از محیط Plutus
Playground استفاده نمائید.


