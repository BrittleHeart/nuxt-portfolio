# Bezpieczeństwo haseł

> Opublikowano dnia 03.08.2021r.

W obecnych czasach wysoki poziom bezpieczeństwa hasła, jest sprawą nie tylko ważną a, co najważniejsze - priorytetową! Dnia 01 lipca 2021 r. prezentowałem Państwu
sposoby działania hakerów. Jeżeli nie mieliście okazji przeczytać tego artykułu, zapraszam serdecznie [tutaj](https://bartoszpazdur.pl/posts/metody_dzialania_hakerow)

W skrócie chodziło mi o to, aby uświadomić wam, że haker również jest człowiekiem. Również popełnia błędy, ba! Zdarzają się zazwyczaj często – niemniej trzeba przyznać, że ich metody bywają niebywale skuteczne. Zatem w jaki sposób możemy chronić swoje hasła przed niepowołanym dostępem?

Przede wszystkim, chce Państwo Państwu pokazać na jakiej zasadzie działa łamanie haseł. Postarałem się, aby unikać w jak największym stopniu pojęć czysto technicznych – chociaż w miarę wzrostu częstotliwości pisania tych artykułów mam wrażenie, że powinienem zrobić przynajmniej kurs teorii ogólnej poświęconej podstawowym pojęciom informatycznym.

## Metody łamania haseł
Niegdyś, odbywało się to przy użyciu zwykłej kartki oraz ołówka. Czasy się zmieniły, kryptografia coraz bardziej podbija nasz rynek i jest zauważalna niemalże w każdym naszym aspekcie życia. 
Dziś już nie wystarczy posiadanie kartki, na której będziemy zapisywali nasze obliczenia. Dlaczego? Ponieważ średnia ilość możliwych kombinacji fizycznie przekracza możliwość zrozumienia przez zwykłego człowieka. 
Dlatego też, na przełomie lat 20 ubiegłego wieku, genialny matematyk – Alan Turing, wynalazł pierwszy „komputer”. 
Obecnie, możliwości obliczeniowe komputerów dostępnych dla użytkowników prywatnych sięgają nawet miliardów obliczeń na **sekundę**! 

A zatem, nie przeciągając dłużej naszego tematu, którego chciałbym poruszyć – przyjdźmy do rzeczy.

Powiedzmy zatem, że dysponujemy hasłami wykradzionymi z jakiegoś serwera. Niech dla dobra prezentacji, będą to bardzo proste krótkie hasła:

- 098f6bcd4621d373cade4e832627b4f6
- 5a105e8b9d40e1329780d62ea2265d8a
- 962012d09b8170d912f0669f6d7d9d07

Jest to tak zwany algorytm md5, możecie się z nim zaznajomić na [tej]( https://en.wikipedia.org/wiki/MD5) stronie. 
Skopiujemy sobie teraz te hasła do pliku, powiedzmy niech nazywa się hasla.txt. Teraz, użyjemy programu hashcat. Nie będę tutaj zamieszczał do niego linka – wystarczy poszukać 😉. 
Wprowadźmy podstawowe informacje oraz zacznijmy łamanie haseł. Wprowadzone przez nas dane do programu, wyglądają następująco

```sh
$ hashcat -a 3 -m 0 hasla.txt "?a?a?a?a?a?a" -i
```
Ponownie, aby uchronić osoby postronne, nie będę tłumaczył co oznaczają przedstawione powyżej literki.
Po jego wprowadzeniu, mojemu komputerowi zajęło to jedynie 2 / 3s aby złamać wszystkie przedstawione powyżej hasła.
Wyciągnijmy sobie teraz uzyskane przez nas hasełka – zrobimy to w sposób następujący

```sh
$ hashcat -a 3 -m 0 hasla.txt "?a?a?a?a?a?a" -I --show
```

A oto nasze hasła.

```sh
098f6bcd4621d373cade4e832627b4f6:test
5a105e8b9d40e1329780d62ea2265d8a:test1
962012d09b8170d912f0669f6d7d9d07:qwer
```
Jak widzicie, nie było to trudne, a prawdopodobieństwo rozszyfrowania haseł zaszyfrowanych tym samym algorytmem, jest oczywiście bardzo wysokie. 

Pozostaje zatem pytanie, jak się uchronić?

## Jak przechowywać hasła?

Niestety, nie jesteśmy w stanie wpłynąć w sposób bezpośredni na naszych dostawców usług, aby upewnić się, że korzystają z lepszych algorytmów szyfrujących, bądź hashujących (na ten temat pojawi się osobny artykuł). Jesteśmy jednak w stanie zrobić coś innego. Możemy tworzyć jednorazowe hasła dla każdego odwiedzanego przez nas serwisu. Dla przykładu, do serwisu Facebook, stworzymy inne hasło niż dla Google’a. Zminimalizuje to prawdopodobieństwo zarówno przechwycenia powiązanych między siebie danymi oraz, co chyba najważniejsze możemy w ten sposób zniechęcić napastnika do dalszego przeprowadzania ataku.

> No dobrze, ale w jaki sposób mam je zapamiętać, korzystam z blisko 30 serwisów, naprawdę mam pamiętam każde pojedyncze hasło?

Cóż.. i tak i nie. Możesz, ale po co? Do tego celu, polecam użyć menadżera haseł. Osobiście korzystam z [KeePassXC](https://keepassxc.org/). 
Jest to całkowicie bezpłatne narzędzie, niemniej właściwie niczym nie odstępuje od swojego płatnego konkurenta [1Password]( https://1password.com/). 
Nie będę tutaj się skupiał na różnicy pomiędzy nimi, a jedynie wspomnę, że dostarczają wysokiego poziomu bezpieczeństwa. 
Korzystają bowiem z niebywale silnego algorytmu zwanego [AES]( https://pl.wikipedia.org/wiki/Advanced_Encryption_Standard). 
Na temat samych menadżerów haseł, przeznaczę osobny artykuł. Są bowiem niebywale fascynujące oraz wymagane w obecnych czasach.

## Dodatkowe metody zabezpieczeń

Niestety, samo hasło to czasem za mało, aby uchronić się przed utratą konta. Dlatego powstało coś, co dziś nazywamy [2FA]( https://en.wikipedia.org/wiki/Multi-factor_authentication) inaczej Multi-factor authentication. 
Ujmując sprawę bardzo oględnie, jest to metoda zabezpieczeń polegająca na przysyłaniu jednorazowego kodu, który jest ważny wyłącznie przez określony okres czasowy. 
Po jego upłynięciu, kod zostaje unieważniony i nie da się z niego dalej korzystać. Przy logowaniu na nowym urządzeniu – czyli nierozpoznanym przez serwis – użytkownik proszony jest o jego podanie. 
Następnie kod jest sprawdzany, weryfikowany – jeżeli wszystko jest w porządku, zostaje wpuszczony do systemu. 
Dlaczego to tak dobre rozwiązanie? 
Ponieważ nawet jeżeli włamywacz, zdobędzie nasze hasło oraz będzie w stanie podać standardową kombinację tj. email oraz hasło – nie będzie w stanie w tak prosty sposób, dostać w swoje posiadanie naszego telefonu komórkowego. 
Właśnie! Telefon. Kody te bowiem, zapisywane są nie gdzieś na widoku a strzeżonym przez nas samych smartfonie. Warto bowiem się tym zainteresować. Istnieje jeszcze lepsza metoda, niemniej wykracza to poza zakres tego artykułu.
Mam nadzieję, że artykuł się podobał, życzę miłego wieczoru oraz do zobaczenia wkrótce
