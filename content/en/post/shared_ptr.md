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
---

# TEST
- pointers are effiecient abstraction of machine addresses.
- using them correctly to represent resource ownership is difficult.
- std provides resource managemnt pointers that similifies correct uses.
- ownership of a shared pointer is shared among all pointers.
- owning pointer is responsible to delete the object.
- non-owning pinter can dangle.
- One of the key tasks of any nontrivial program is to manage resources.
- The last shared_ptr destructor destroys the object
- shared_ptr copied rather than moved.
- use shared_ptr only if you actually need shared ownership.
- make_shared<S>


# TODO
- implicit dereference.
- C++ core guideline for preventing dangling pointer.
- RAII 5.2.2
- no naked new plicy
- https://www.cppstories.com/2015/02/non-static-data-members-initialization/
