# Luka w zabezpieczeniachVisy i Apple Pay

> Opublikowno dnia 07.10.2021r.

Jeżeli korzystasz możliwości płatności kartą za pomocą swojego smartfona, lepiej uważaj.

Badacze z University of Birmingham oraz University of Surrey znalezli lukę w zabezpieczeniach Visy oraz Apple Pay.
Istnieje prawdopodobieństwo wykradzenia środków z karty, nawet w momencie, w którym telefon jest zablokowany.

Na całe szczęście, luka dotyczy wyłącznie podpiecia karty w trybie Express Transit. oznacza to, że atak w dużej mierze dotyczy
jednostki, które płacą za przejazd przez bramki na autostradzie czy przejazd metrem.

## W jaki sposób przeprowadzono atak?

Było to relatywnier prostą czynnością. Co więcej, istnieje wysokie prawdopodobieństwo przeprowadzenia ataku na urządzeniach
zablokowanych, wydaje się to być sprawą przerażającą.

Dla jednostek które często podróżują, wręcz nie do przyjęcia, ponieważ gdy nasz smartfon znajdzie się w bagażu.. cóż.

A zatem jak wyglądał atak?
Obok iPhone'a, został umieszczony [proxmark](https://www.proxmark.com/), który pełnił rolę oszusta. Jego zadaniem było oszukanie smartfona, aby ten zidentyfikował to urządzenie, jako bramkę płatniczą. Dla przykładu, przyjmijmy, że była
to barierka na biletowa na autostradzie. 

Za kolejne urządzenie, posłużył telefon z wgranym androidem, którego zadanie ograniczało się do uruchomienia aplikacji
która została stworzono przez badaczy uniwersytetów. Służył on w dużej mierze do przekazywania sygnału iPhone'a do
wyznaczonego przez nich terminala płatności zbliżeniowych.

Tak oszukane urządzenie, mogło zrealizowa dowoną transakcję np. o wartości ponad 2000 zł.

## Co na to Apple oraz Visa?

Jak pisze serwis [justgeek.it](https://geek.justjoin.it/badacze-znalezli-luki-w-zabezpieczeniach-visy-i-apple-pay-moga-prowadzic-do-kradziezy),

> Badacze twierdzą też, że zgłaszali lukę zarówno w Apple, jak i Visie. Z każdą z firm odbyli rozmowy, ale problem nie został rozwiązany.

Natomiast samo Apple, jak to Apple - oczywiście broni się rękami i nogami

> Z kolei Apple przekazał BBC: “Bardzo poważnie traktujemy wszelkie zagrożenia bezpieczeństwa użytkowników. Jest to obawa związana z systemem Visa, ale Visa nie uważa, aby ten rodzaj oszustwa mógł mieć miejsce na większą skalę, biorąc pod uwagę wiele warstw zabezpieczeń”.

Niestety, jak dobrze wiemy - gdy jedna osoba sądzi a druga nie sądzi to poziom zagrożenia rzecz jasna maleje.
