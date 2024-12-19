"use strict";(self.webpackChunkalishir_github_io=self.webpackChunkalishir_github_io||[]).push([[518],{4369:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"telephony-binary-coded-decimal","metadata":{"permalink":"/telephony-binary-coded-decimal","source":"@site/blog/2024-12-19-tbcd-string-encoding/index.md","title":"\u0631\u0648\u0634 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD","description":"\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc\u060c \u0645\u0634\u062e\u0635 \u06a9\u0646\u0646\u062f\u0647 \u0627\u062f\u0628\u06cc\u0627\u062a \u0645\u0634\u062a\u0631\u06a9 \u0628\u0631\u0627\u06cc \u062a\u0639\u0627\u0645\u0644 \u0627\u062c\u0632\u0627\u0621 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631","date":"2024-12-19T00:00:00.000Z","tags":[{"inline":true,"label":"TBCD","permalink":"/tags/tbcd"},{"inline":true,"label":"\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc","permalink":"/tags/\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc"}],"readingTime":1.94,"hasTruncateMarker":true,"authors":[{"name":"\u0639\u0644\u06cc","title":"\u0645\u0647\u0646\u062f\u0633 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631","url":"https://www.linkedin.com/in/ali-shirvani-37a031191/","page":null,"socials":{"x":"https://x.com/alishirv","github":"https://github.com/alishir","linkedin":"https://www.linkedin.com/in/ali-shirvani-37a031191/"},"imageURL":"https://github.com/alishir.png","key":"ali"}],"frontMatter":{"slug":"telephony-binary-coded-decimal","title":"\u0631\u0648\u0634 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD","authors":"ali","tags":["TBCD","\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc"]},"unlisted":false,"nextItem":{"title":"\u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a","permalink":"/state-machine"}},"content":"\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc\u060c \u0645\u0634\u062e\u0635 \u06a9\u0646\u0646\u062f\u0647 \u0627\u062f\u0628\u06cc\u0627\u062a \u0645\u0634\u062a\u0631\u06a9 \u0628\u0631\u0627\u06cc \u062a\u0639\u0627\u0645\u0644 \u0627\u062c\u0632\u0627\u0621 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631\\n\u0627\u0633\u062a. \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc \u0635\u062d\u06cc\u062d \u0627\u062c\u0632\u0627\u0621 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0628\u0627\\n\u06cc\u06a9\u062f\u06cc\u06af\u0631 \u062a\u0639\u0627\u0645\u0644 \u06a9\u0646\u0646\u062f. \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u0646\u0647 \u0639\u0628\u0627\u0631\u062a `01/11/06`\u060c \u0628\u0633\u062a\u0647 \u0628\u0647 [\u0631\u0648\u0634\\n\u06a9\u062f\u06af\u0630\u0627\u0631\u06cc](https://en.wikipedia.org/wiki/List_of_date_formats_by_country)\\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u062a\u0627\u0631\u06cc\u062e \u06f1 \u0646\u0648\u0627\u0628\u0631 \u0633\u0627\u0644 \u06f2\u06f0\u06f0\u06f6 \u0648 \u06cc\u0627 \u06f1\u06f1 \u0698\u0627\u0646\u0648\u06cc\u0647 \u0633\u0627\u0644\\n\u06f2\u06f0\u06f0\u06f6 \u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0628\u0647 \u062e\u0648\u0628\u06cc \u0627\u0647\u0645\u06cc\u062a \u0645\u0648\u0636\u0648\u0639 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f.\\n\\n\x3c!-- truncate --\x3e\\n\\n\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0634\u0628\u06a9\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc\u060c \u0631\u0648\u0634 Telephony\\nBinary-Coded Decimal \u06cc\u0627 \u0628\u0647 \u0627\u062e\u062a\u0635\u0627\u0631 TBCD \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0631\u0627\u06cc \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc\\n\u0645\u0642\u0627\u062f\u06cc\u0631\u06cc \u0645\u0627\u0646\u0646\u062f `IMSI`\u060c `IMEI` \u0648 \u0628\u0631\u062e\u06cc \u0622\u062f\u0631\u0633\u200c\u0647\u0627 \u0648 \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647\\n\u0645\u06cc\u200c\u0634\u0648\u062f. \u0645\u062b\u0644\u0627 \u062f\u0631 \u0633\u0646\u062f [3GPP TS\\n29.338](https://www.3gpp.org/dynareport?code=29338) \u0628\u0647 \u0686\u0646\u062f \u0646\u0645\u0648\u0646\u0647 \u0627\u0632\\n\u0622\u062f\u0631\u0633\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0631\u0648\u0634 TBCD \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0627\u0634\u0627\u0631\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.\\n\\n\u0631\u0648\u0634 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0627\u0639\u062f\u0627\u062f \u0628\u06cc\u0646 \u06f0 \u062a\u0627 \u06f9 \u0648 \u062d\u0631\u0648\u0641 `a, b, c,#,*`\\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0631\u0627\u06cc \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc \u062f\u0631 \u0641\u0636\u0627\u060c \u0647\u0631 \u062f\u0648 \u0631\u0642\u0645 \u0645\u062a\u0648\u0627\u0644\u06cc \u062f\u0631 \u06cc\u06a9\u06cc \u0628\u0627\u06cc\u062a\\n\u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0628\u0647 \u0639\u0628\u0627\u0631\u062a \u062f\u06cc\u06af\u0631 \u0628\u0631\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0647\u0631 \u0631\u0642\u0645 \u0627\u0632 \u0686\u0647\u0627\u0631 \u0628\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647\\n\u0645\u06cc\u200c\u0634\u0648\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062a\u0639\u062f\u0627\u062f \u0627\u0631\u0642\u0627\u0645 \u0641\u0631\u062f \u0628\u0627\u0634\u062f \u0628\u0631\u0627\u06cc \u067e\u0631 \u06a9\u0631\u062f\u0646 \u06f4 \u0628\u06cc\u062a \u0628\u0627\u0642\u06cc\u200c\u0645\u0627\u0646\u062f\u0647\u060c\\n\u0627\u0632 \u0645\u0642\u062f\u0627\u0631 `1111` \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067e\u0631\u06a9\u0646\u0646\u062f\u0647 \u06cc\u0627 `filler` \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\\n\\n\u0627\u0639\u062f\u0627\u062f \u06f0 \u062a\u0627 \u06f9 \u0628\u0627 \u0645\u0642\u062f\u0627\u0631 \u0645\u062a\u0646\u0627\u0638\u0631 \u062f\u0648\u062f\u0648\u06cc\u06cc \u0622\u0646\u200c\u0647\u0627 \u062f\u0631 \u0646\u0645\u0627\u06cc\u0634 \u06f4 \u0628\u06cc\u062a\u06cc \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc\\n\u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0627\u0632 \u0645\u0642\u0627\u062f\u06cc\u0631 \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u062d\u0631\u0648\u0641 `a, b, c, # ,*` \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\\n\\n| \u062d\u0631\u0641 | \u0645\u0642\u062f\u0627\u0631 \u062f\u0648\u062f\u0648\u06cc\u06cc |\\n|:---:|:----------:|\\n| *   | 1010       |\\n| #   | 1011       |\\n| a   | 1100       |\\n| b   | 1101       |\\n| c   | 1110       |\\n\\n\\n\\n\u062f\u0631 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0631\u0648\u0634 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD \u0628\u0631\u0627\u06cc \u0645\u0642\u062f\u0627\u0631 `43211` \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647. \u0627\u0628\u062a\u062f\u0627\\n\u0647\u0631 \u0631\u0642\u0645 \u0631\u0627 \u0628\u0627 \u0645\u0642\u062f\u0627\u0631 \u062f\u0648\u062f\u0648\u06cc\u06cc \u06f4 \u0628\u06cc\u062a\u06cc \u0645\u062a\u0646\u0627\u0638\u0631 \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645. \u0633\u067e\u0633 \u0647\u0631 \u062f\u0648 \u0631\u0642\u0645 \u0631\u0627\\n\u062f\u0631 \u06cc\u06a9 \u0628\u0627\u06cc\u062a \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645\u060c \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u06a9\u0647 \u0627\u06af\u0631 \u0628\u06cc\u062a\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u06cc\u06a9 \u0628\u0627\u06cc\u062a \u0631\u0627\\n\u0627\u0632 \u0631\u0627\u0633\u062a \u0628\u0647 \u0686\u067e\u060c \u0627\u0632 \u06f1 \u062a\u0627 \u06f8 \u0634\u0645\u0627\u0631\u0647\u200c\u06af\u0630\u0627\u0631\u06cc \u06a9\u0646\u06cc\u0645\u060c \u0628\u06cc\u062a\u200c\u0647\u0627\u06cc \u0634\u0645\u0627\u0631\u0647 \u06f1 \u062a\u0627 \u06f4 \u0628\u0631\u0627\u06cc\\n\u0646\u0645\u0627\u06cc\u0634 \u0631\u0642\u0645 \u0627\u0648\u0644 \u0648 \u0628\u06cc\u062a\u200c\u0647\u0627\u06cc \u0634\u0645\u0627\u0631\u0647 \u06f5 \u062a\u0627 \u06f8 \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0631\u0642\u0645 \u062f\u0648\u0645 \u062a\u062e\u0635\u06cc\u0635\\n\u0645\u06cc\u200c\u06cc\u0627\u0628\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646\u06a9\u0647 \u062a\u0639\u062f\u0627\u062f \u0627\u0631\u0642\u0627\u0645 \u0641\u0631\u062f \u0627\u0633\u062a\u060c \u0627\u0632 \u0645\u0642\u062f\u0627\u0631\\n`1111` \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067e\u0631\u06a9\u0646\u0646\u062f\u0647 \u06f4 \u0628\u06cc\u062a \u062e\u0627\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u062f\u0631 \u0634\u06a9\u0644 \u0628\u0627 \u0631\u0646\u06af \u0642\u0631\u0645\u0632\\n\u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u062d\u0627\u0635\u0644 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc \u0645\u0642\u062f\u0627\u0631 `0x3412F1` \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\\n\\n<div style={{textAlign: \'center\'}}>\\n\\n![TBCD-String Encoding Example](./example_43211.svg)\\n\\n</div>\\n\\n\u062a\u0635\u0648\u06cc\u0631 \u0632\u06cc\u0631 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0633\u0646\u062f [3GPP TS\\n29.002](https://www.3gpp.org/dynareport?code=29002) \u0628\u0647 \u0622\u0646 \u0627\u0634\u0627\u0631\u0647 \u0634\u062f\u0647.\\n\\n\\n<div style={{textAlign: \'center\'}}>\\n\\n![TBCD-String Encoding](./tbcd_encoding.png)\\n\\n</div>"},{"id":"state-machine","metadata":{"permalink":"/state-machine","source":"@site/blog/2024-10-28-aws-lambda-state-machine.md","title":"\u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a","description":"\u0648\u0627\u0636\u0639 \u0639\u0628\u0627\u0631\u062a Structured Concurrency \u062f\u0631 \u0686\u0646\u062f \u0646\u0648\u0634\u062a\u0647 \u062e\u0648\u062f \u0628\u0647 \u0647\u0645\u0631\u0648\u0646\u062f\u06cc","date":"2024-10-28T00:00:00.000Z","tags":[{"inline":true,"label":"Erlang","permalink":"/tags/erlang"},{"inline":true,"label":"Elixir","permalink":"/tags/elixir"},{"inline":true,"label":"gen_statem","permalink":"/tags/gen-statem"},{"inline":true,"label":"AWS Lambda","permalink":"/tags/aws-lambda"},{"inline":true,"label":"Structured Concurrency","permalink":"/tags/structured-concurrency"}],"readingTime":1.025,"hasTruncateMarker":true,"authors":[{"name":"\u0639\u0644\u06cc","title":"\u0645\u0647\u0646\u062f\u0633 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631","url":"https://www.linkedin.com/in/ali-shirvani-37a031191/","page":null,"socials":{"x":"https://x.com/alishirv","github":"https://github.com/alishir","linkedin":"https://www.linkedin.com/in/ali-shirvani-37a031191/"},"imageURL":"https://github.com/alishir.png","key":"ali"}],"frontMatter":{"slug":"state-machine","title":"\u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a","authors":"ali","tags":["Erlang","Elixir","gen_statem","AWS Lambda","Structured Concurrency"]},"unlisted":false,"prevItem":{"title":"\u0631\u0648\u0634 \u06a9\u062f\u06af\u0630\u0627\u0631\u06cc TBCD","permalink":"/telephony-binary-coded-decimal"},"nextItem":{"title":"\u0638\u0631\u0627\u0626\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 cloud-init","permalink":"/cloud-init"}},"content":"\u0648\u0627\u0636\u0639 \u0639\u0628\u0627\u0631\u062a `Structured Concurrency` \u062f\u0631 \u0686\u0646\u062f \u0646\u0648\u0634\u062a\u0647 \u062e\u0648\u062f \u0628\u0647 \u0647\u0645\u0631\u0648\u0646\u062f\u06cc\\n\u0633\u0627\u062e\u062a\u200c\u06cc\u0627\u0641\u062a\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0631\u0627\u0647 \u0631\u0647\u0627\u06cc\u06cc \u0627\u0632 \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u0627\u0634\u0627\u0631\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f.\\n\\n\x3c!-- truncate --\x3e\\n\\n\u0627\u0645\u0631\u0648\u0632 [\u0627\u06cc\u0646\\n\u0645\u0637\u0644\u0628](https://aws.amazon.com/blogs/architecture/lets-architect-designing-serverless-solutions/)\\n\u0648 \u062f\u0648 \u0648\u06cc\u062f\u0626\u0648\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u0622\u0646 \u0627\u0634\u0627\u0631\u0647 \u0634\u062f\u0647 \u0631\u0627 \u0645\u06cc\u200c\u062f\u06cc\u062f\u0645. \u062c\u0627\u06cc\u06cc \u062f\u0631 [\u0627\u06cc\u0646\\n\u0648\u06cc\u062f\u0626\u0648](https://www.youtube.com/watch?v=qs0U0LdNkV0) \u062f\u0631 \u062d\u06cc\u0646 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc\\n\u067e\u0631\u0648\u0698\u0647 `serverlesspresso` \u0645\u062a\u0648\u062c\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u06a9\u0647 \u06af\u0648\u06cc\u0627 \u062f\u0631 \u062d\u0627\u0644 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06cc\u06a9\\n\u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u0647\u0633\u062a\u0646\u062f. \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u0633\u0631\u06cc \u062a\u0627\u0628\u0639 \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f\\n\u06a9\u0647 \u0628\u0631 \u0628\u0633\u062a\u0631 `AWS Lambda` \u0642\u0627\u0628\u0644 \u0627\u062c\u0631\u0627 \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 `EventBridge`\\n\u0631\u062e\u062f\u0627\u062f\u0647\u0627\u06cc \u062e\u0627\u0631\u062c\u06cc \u0631\u0627 \u067e\u0648\u0634\u0634 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f.  \u0628\u0647 \u0646\u0638\u0631 \u0622\u0645\u0627\u0632\u0648\u0646 \u0628\u0627 \u0633\u0628\u062f \u0645\u062d\u0635\u0648\u0644\u06cc \u062e\u0648\u062f \u062a\u0645\u0627\u0645\\n\u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06cc\u06a9 \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u062f\u0631 \u062d\u0627\u0644\u062a \u0645\u0642\u06cc\u0627\u0633\u200c\u067e\u0630\u06cc\u0631 \u0631\u0627\\n\u0641\u0631\u0627\u0647\u0645 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a.\\n\\n\u0627\u0645\u0627 \u0627\u06af\u0631 \u0628\u0647 [\u0646\u0648\u0634\u062a\u0647\u200c\u0647\u0627\u06cc](https://250bpm.com/blog:71/) \u0622\u0642\u0627\u06cc `Martin\\nS\xfastrik` \u062f\u0631 \u0645\u0648\u0631\u062f \u0647\u0645\u0631\u0648\u0646\u062f\u06cc \u0633\u0627\u062e\u062a\u200c\u06cc\u0627\u0641\u062a\u0647 \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0627\u06cc\u0634\u0627\u0646 \u062f\u0648 \u0645\u0634\u06a9\u0644 \u0631\u0627 \u062f\u0631\\n\u0645\u0648\u0631\u062f \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u0630\u06a9\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f\u060c \u0627\u0648\u0644 \u0627\u06cc\u0646\u06a9\u0647 \u0645\u0627\u0634\u06cc\u0646\u200c\u0647\u0627\u06cc \u062d\u0627\u0644\u062a \u0645\u0639\u0645\u0648\u0644\u0627 \u0628\u0632\u0631\u06af \u0648\\n\u0634\u06a9\u0646\u0646\u062f\u0647 \u0647\u0633\u062a\u0646\u062f \u0648 \u062f\u0648\u0645 \u0627\u06cc\u0646\u06a9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627 \u0632\u0628\u0627\u0646\u200c\u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0630\u0627\u062a\u06cc \u0627\u0632\\n\u0622\u0646\u200c\u0647\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.\\n\\n\u0627\u0645\u0627 \u062f\u0631 \u0645\u0648\u0631\u062f \u0632\u0628\u0627\u0646\u200c `Erlang` \u0642\u0636\u06cc\u0647 \u0645\u062a\u0641\u0627\u0648\u062a \u0627\u0633\u062a \u0648 \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0630\u0627\u062a\u06cc\\n\u0631\u0648\u06cc\u06a9\u0631\u062f\u06cc \u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u062f\u0627\u0631\u062f \u06a9\u0647 \u062a\u062d\u062a \u0639\u0646\u0648\u0627\u0646 \u0631\u0641\u062a\u0627\u0631 `gen_statem`\\n\u0634\u0646\u0627\u062e\u062a\u0647\\n\u0645\u06cc\u200c\u0634\u0648\u062f. [\u0631\u0641\u062a\u0627\u0631\u0647\u0627](https://www.erlang.org/doc/system/design_principles.html#behaviours)\\n\u062f\u0631 \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 \u0686\u06cc\u0632\u06cc \u0634\u0628\u06cc\u0647 \u0645\u0641\u0647\u0648\u0645 `Design Pattern` \u0647\u0633\u062a\u0646\u062f. \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631\\n\u0628\u0627 \u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 [\u0645\u0633\u062a\u0646\u062f\u0627\u062a\\n\u0627\u0635\u0644\u06cc](https://www.erlang.org/doc/apps/stdlib/gen_statem) \u062e\u06cc\u0644\u06cc \u0631\u0627\u0647\u06af\u0634\u0627\\n\u0647\u0633\u062a\u0646\u062f."},{"id":"cloud-init","metadata":{"permalink":"/cloud-init","source":"@site/blog/2024-10-23-cloud-init/index.md","title":"\u0638\u0631\u0627\u0626\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 cloud-init","description":"\u0645\u0639\u0645\u0648\u0644\u0627 \u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0631\u06cc\u0639 \u06cc\u06a9 \u0645\u0627\u0634\u06cc\u0646 \u200c\u0645\u062c\u0627\u0632\u06cc \u0627\u0632 \u062f\u06cc\u0633\u06a9\u200c\u0647\u0627\u06cc \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc","date":"2024-10-23T00:00:00.000Z","tags":[{"inline":true,"label":"\u0645\u062c\u0627\u0632\u06cc\u200c\u0633\u0627\u0632\u06cc","permalink":"/tags/\u0645\u062c\u0627\u0632\u06cc-\u0633\u0627\u0632\u06cc"},{"inline":true,"label":"qemu","permalink":"/tags/qemu"},{"inline":true,"label":"cloud-init","permalink":"/tags/cloud-init"}],"readingTime":1.57,"hasTruncateMarker":true,"authors":[{"name":"\u0639\u0644\u06cc","title":"\u0645\u0647\u0646\u062f\u0633 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631","url":"https://www.linkedin.com/in/ali-shirvani-37a031191/","page":null,"socials":{"x":"https://x.com/alishirv","github":"https://github.com/alishir","linkedin":"https://www.linkedin.com/in/ali-shirvani-37a031191/"},"imageURL":"https://github.com/alishir.png","key":"ali"}],"frontMatter":{"slug":"cloud-init","title":"\u0638\u0631\u0627\u0626\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 cloud-init","authors":"ali","tags":["\u0645\u062c\u0627\u0632\u06cc\u200c\u0633\u0627\u0632\u06cc","qemu","cloud-init"]},"unlisted":false,"prevItem":{"title":"\u0645\u0627\u0634\u06cc\u0646 \u062d\u0627\u0644\u062a","permalink":"/state-machine"},"nextItem":{"title":"\u0645\u0639\u0645\u0627\u0631\u06cc NFV","permalink":"/NFV-Architecture"}},"content":"\u0645\u0639\u0645\u0648\u0644\u0627 \u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0631\u06cc\u0639 \u06cc\u06a9 \u0645\u0627\u0634\u06cc\u0646 \u200c\u0645\u062c\u0627\u0632\u06cc \u0627\u0632 \u062f\u06cc\u0633\u06a9\u200c\u0647\u0627\u06cc \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc\\n\u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0627\u0628\u0631\u06cc \u06cc\u0627 \u0628\u0647 \u0627\u0635\u0637\u0644\u0627\u062d cloud-ready images \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u0645. \u0645\u062b\u0644\u0627 \u0627\u06af\u0631\\n\u0642\u0631\u0627\u0631 \u0628\u0627\u0634\u0647 \u06cc\u0647 \u0645\u0627\u0634\u06cc\u0646\u200c\u0645\u062c\u0627\u0632\u06cc ubuntu \u0646\u0633\u062e\u0647 \u06f2\u06f2.\u06f0\u06f4 \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u0645\u060c \u0627\u0632\\n[\u0627\u06cc\u0646\u062c\u0627](https://cloud-images.ubuntu.com/ \\"ubuntu cloud-ready image\\nsite\\") \u0646\u0633\u062e\u0647 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u06cc\u200c\u06a9\u0646\u0645 \u0648 \u0628\u0639\u062f \u0641\u0627\u06cc\u0644 \u0628\u0627 \u067e\u0633\u0648\u0646\u062f\\n`disk-kvm.img` \u0631\u0627 \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u06cc\u200c\u06a9\u0646\u0645.\\n\\n\x3c!-- truncate --\x3e\\n\\n\u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc \u0627\u0632 \u0637\u0631\u06cc\u0642 `cloud-init` \u0628\u0627\u06cc\u062f \u0627\u0632 \u0637\u0631\u06cc\u0642 \u06cc\u06a9 \u0645\u0646\u0628\u0639\u06cc\\n\u0628\u0631\u062e\u06cc \u0627\u0632 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u0628\u0631\u0627\u06cc \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0627\u0648\u0644\u06cc\u0647 \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc \u0645\u0634\u062e\u0635 \u0634\u0648\u062f\u060c \u0645\u062b\u0644 \u067e\u0633\u0648\u0631\u062f\\n\u06cc\u0627 \u0634\u0646\u0627\u0633\u0647. \u0646\u06a9\u062a\u0647 \u0645\u0647\u0645 \u0627\u06cc\u0646\u062c\u0627\u0633\u062a \u06a9\u0647 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0622\u062e\u0631\u06cc\u0646 \u0646\u0633\u062e\u0647 `cloud-init` \u0645\u0639\u0645\u0648\u0644\u0627\\n\u0631\u0648\u0634 \u0633\u0627\u062f\u0647 \u0648 \u0633\u0631\u06cc\u0639 \u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f\u0647\u060c \u0645\u062b\u0644\u0627 \u062f\u0631 [\u0627\u06cc\u0646\\n\u0642\u0633\u0645\u062a](https://cloudinit.readthedocs.io/en/latest/tutorial/qemu.html)\\n\u0627\u0632 \u0631\u0648\u0634 `IMDS` \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646\u062f.\\n\\n\u0627\u0645\u0627 \u0646\u06a9\u062a\u0647 \u0627\u06cc\u0646\u062c\u0627\u0633\u062a \u06a9\u0647 \u0646\u0633\u062e\u0647 `cloud-init` \u0646\u0635\u0628 \u0634\u062f\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0631\u0648\u06cc \u0641\u0627\u06cc\u0644\\n\u062f\u0627\u0646\u0644\u0648\u062f \u0634\u062f\u0647 \u0644\u0632\u0648\u0645\u0627 \u0622\u062e\u0631\u06cc\u0646 \u0646\u0633\u062e\u0647 \u0646\u06cc\u0633\u062a \u0648 \u0627\u062d\u062a\u0645\u0627\u0644\u0627 \u0627\u0632 \u0631\u0648\u0634 \u0630\u06a9\u0631 \u0634\u062f\u0647 \u062f\u0631 \u0622\u062e\u0631\u06cc\u0646\\n\u0646\u0633\u062e\u0647 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0647\u0645 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u0647. \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0628\u0627\u06cc\u062f \u0627\u0648\u0644 \u0646\u0633\u062e\u0647 `cloud-init`\\n\u0646\u0635\u0628 \u0634\u062f\u0647 \u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u06cc\u0645 \u0648 \u0628\u0639\u062f \u0627\u0632 \u0631\u0648\u0634 \u0645\u062a\u0646\u0627\u0633\u0628 \u0628\u0627 \u0647\u0645\u0648\u0646 \u0646\u0633\u062e\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c\\n\u0645\u062b\u0644\u0627 \u0627\u0632 \u0631\u0648\u0634 `seed.iso` \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062f\u0631\\n[\u0627\u06cc\u0646\u062c\u0627](https://cloudinit.readthedocs.io/en/22.1_a/topics/debugging.html#analyze-quickstart-kvm)\\n\u0628\u0647\u0634 \u0627\u0634\u0627\u0631\u0647 \u0634\u062f\u0647.\\n\\n\u062e\u0644\u0627\u0635\u0647 \u0631\u0648\u0634 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0647\u0633\u062a \u06a9\u0647 \u0634\u0645\u0627 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0628\u0627 \u0627\u0633\u0645 `user-data` \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u0632\u06cc\u0631:\\n\\n```\\n#cloud-config\\npassword: passw0rd\\nssh_authorized_keys:\\n  - ssh-ed25519 .... ali@dev\\nchpasswd: { expire: False }\\n```\\n\\n\u0633\u067e\u0633 \u0628\u0627 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0641\u0627\u06cc\u0644 `seed.iso` \u0631\u0627 \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f:\\n\\n```bash\\nsudo apt update\\nsudo apt install -y cloud-image-utils\\ncloud-localds seed.img user-data\\n```\\n\\n\u0648 \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc \u0631\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0631\u0627\u0647 \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u06cc\u0645:\\n\\n```bash\\nqemu-system-amd64 -enable-kvm -m 1G -smp 2 \\\\\\n                  -vga std -nic user \\\\\\n                  -drive file=ubuntu.img,if=virtio,format=qcow2 \\\\\\n                  -drive file=seed.img,if=virtio,format=raw\\n```\\n\\n\u0646\u06a9\u062a\u0647 \u062f\u06cc\u06af\u0631 \u0627\u06cc\u0646\u06a9\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u0646\u0633\u062e\u0647 `debian-genericcloud` \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u0628\u0647 \u062f\u0644\u06cc\u0644 \u0639\u062f\u0645 \u0648\u062c\u0648\u062f \u062f\u0631\u0627\u06cc\u0648\u0631\u0647\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u0628\u0631 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0627\u0632 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc\u06cc \u0645\u0627\u0646\u0646\u062f `virtio` \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.\\n\\n```bash\\nqemu-system-amd64 -enable-kvm -m 1G -smp 2 \\\\\\n                  -vga std -nic user,model=virtio \\\\\\n                  -drive file=debian-genericcloud.img,if=virtio,format=qcow2 \\\\\\n                  -drive file=seed.img,if=virtio,format=raw\\n\\n```"},{"id":"NFV-Architecture","metadata":{"permalink":"/NFV-Architecture","source":"@site/blog/2024-10-23-nfv-arch/index.md","title":"\u0645\u0639\u0645\u0627\u0631\u06cc NFV","description":"\u0627\u0645\u0631\u0648\u0632 [\u0627\u06cc\u0646","date":"2024-10-23T00:00:00.000Z","tags":[{"inline":true,"label":"NFV","permalink":"/tags/nfv"},{"inline":true,"label":"ETSI","permalink":"/tags/etsi"},{"inline":true,"label":"\u0645\u0639\u0645\u0627\u0631\u06cc","permalink":"/tags/\u0645\u0639\u0645\u0627\u0631\u06cc"}],"readingTime":0.305,"hasTruncateMarker":true,"authors":[{"name":"\u0639\u0644\u06cc","title":"\u0645\u0647\u0646\u062f\u0633 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631","url":"https://www.linkedin.com/in/ali-shirvani-37a031191/","page":null,"socials":{"x":"https://x.com/alishirv","github":"https://github.com/alishir","linkedin":"https://www.linkedin.com/in/ali-shirvani-37a031191/"},"imageURL":"https://github.com/alishir.png","key":"ali"}],"frontMatter":{"slug":"NFV-Architecture","title":"\u0645\u0639\u0645\u0627\u0631\u06cc NFV","authors":"ali","tags":["NFV","ETSI","\u0645\u0639\u0645\u0627\u0631\u06cc"]},"unlisted":false,"prevItem":{"title":"\u0638\u0631\u0627\u0626\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 cloud-init","permalink":"/cloud-init"}},"content":"\u0627\u0645\u0631\u0648\u0632 [\u0627\u06cc\u0646\\n\u0641\u0627\u06cc\u0644](https://www.etsi.org/images/articles/NFV_Architecture.svg \\"NFV\\nArchitecture\\") \u0628\u0627 \u0641\u0631\u0645\u062a `SVG` \u06a9\u0647 \u0628\u06cc\u0627\u0646\u06af\u0631 \u0645\u0639\u0645\u0627\u0631\u06cc NFV \u0647\u0633\u062a \u062f\u06cc\u062f\u0645\u060c \u0635\u0631\u0641\u0627 \u0628\u0631\u0627\u06cc\\n\u0627\u0631\u062c\u0627\u0639\u0627\u062a \u0628\u0639\u062f\u06cc \u0627\u06cc\u0646\u062c\u0627 \u0647\u0645 \u0642\u0631\u0627\u0631\u0634 \u0645\u06cc\u062f\u0645. \u062c\u0627 \u062f\u0627\u0631\u0647 \u06a9\u0647 \u0627\u0632 \u0622\u0642\u0627\u06cc [Laurent\\nVreck](https://www.linkedin.com/in/laurent-vreck-560174/ \\"Laurent\\nVreck LinkedIn Profile\\") \u0628\u0627\u0628\u062a \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u062a\u0634\u06a9\u0631 \u06a9\u0646\u0645. \u06cc\u06a9\u06cc \u0627\u0632 \u0645\u0632\u0627\u06cc\u0627\u06cc\\n\u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc\u06cc \u0647\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0647\u0631 \u0642\u0633\u0645\u062a \u0628\u0647 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0645\u0631\u0628\u0648\u0637\u0647 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647.\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n![NFV Architecture](./NFV_Architecture.svg)"}]}}')}}]);