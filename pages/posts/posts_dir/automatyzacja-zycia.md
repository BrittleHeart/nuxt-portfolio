# Jak zautomatyzować swoje życie?

## Wstęp
W dzisiejszych czasach pojecie automatyzacji - wydaje się nie tylko sprawą kluczową, lecz - co chyba najważniejsze, sprawą na tyle istotną, że zależą od niej zarówno duże jak i małe organizacje.
Dlaczego? Przez **ilość przetwarzanych danych**. Tworząc odpowiednie programy a czasem nawet całe systemy odpowiadające za realizację powtarzalnych oraz żmudnych zadań.
Szczerze powiedziawszy, osobiście nie widzę w tym niczego złego, do momentu gdy nie zaczynamy automatyzowac naszego życia towarzyskiego oraz relacji międzyludzkich.
Łatwo jest bowiem popaść w przesadę - mówię tutaj z własnego doświadczenia niestety. 

### Bezpłatne narzędzie
> No dobrze, ale w jaki sposób mogę zautomatyzować niektóre z swoich zadań w taki sposób, abym nie musiał(a) uczyć się zasad
> programowania i innych tego typu bzdur? Nie chce tracic dodatkowego czasu

**I nie musisz!** Tak naprawdę wystarczy skorzystać z darmowego serwisu jakim jest [IFTTT](https://ifttt.com). Jest to serwis umożliwiający 
łatwą oraz przyjemną konfigarację najczęściej wykonywanych przez Ciebie czynności. Oczywiście fakt, że jest po częsci darmowym serwisem (5 apletów uruchomionych jednocześnie)
sprawia, że bywa ograniczony w swoich możliwościach. Niemniej, jeżeli jesteś vlogerem / vlogerką z całą pewnością zastanawiałeś(aś) się, czy nie lepiej byłoby
aby zdjęcie zamieszczone na Facebook'u, automatycznie pojawiały się np. na Instagramie, czy tez Twitterze.

Wykorzystując zaledwie jeden ze swoich [Appletów](https://help.ifttt.com/hc/en-us/articles/115010361348-What-is-an-Applet-) jesteś w stanie ustawic taką akcje. A sam proces ustawiania, nie powinien zając więcej niz 5 min.

> Wspomniałeś o "częściowo" bezpłatnym serwisie. Zastanawiam się co to oznacza?
> Czy to znaczy, ze po pewnym czasie będę musiał(a) wydać jakieś pieniądze?

**Nie**. Sam dostęp jest dozywotni. jeżeli natomiast chcesz wykupić wersję PRO, będzie Cię ona kosztować 9.10zł. Jak sam(a) widzisz, jest to niewiele zwłaszcza - jeżeli jak
ja wykorzystujesz to narzędzie to swojej codziennej pracy 🙂

### Płatne narzędzie
Jeżeli nie przekonał Cię IFTTT - to co powiesz o [Zapierze](https://zapier.com)? Jego możliwości są o wiele większe - minus jest taki, że jeżeli
zamierzasz używac go, do ściśle hobbystycznych zadań, **Przemyśl to dobrze**. Zapier nie należy do takich i warto mieć to na uwadze, gdy z niego korzystamy.

Więcej informacji znajdziecie Państwo pod tym [linkiem](https://zapier.com/pricing). Istnieje oczywiście opcja darmowego planu, niemniej jest on bardzo ograniczony.
Poniżej pozwoliłem sobie na jego proste porównanie

**FREE PLAN**
- [x] 100 zadań **na miesiąc** 
- [x] 5 zapów (coś jak applety)
- [x] 15 min Update time (Czyli czas do wykonania zadania)
- [x] Single-step Zap (Jedna akcja na zap)


**STARTER PLAN - Koszt 79.43zł / 154.97zł**
- [x] Płatność w rozliczeniu **rocznym**!
- [x] 750 zadań lub 1500 zadań na miesiąc
- [x] 20 Zaps
- [x] 15 min Update Time
- [x] Multi-step Zaps
- [x] 3 Premium Apps (Zaawansowane operacje)
- [x] Filters (Filtry wyszukujące - przydaje się jeśli chcemy coś wykluczyć z reakcji na zdarzenie)
- [x] Formatery (Formatują dane wyjściowe)
- [x] Webhooki (Coś dla programistów)

I wiele, wiele więcej planów. Tak naprawdę każdy znajdzie coś dla siebie, tylko trzeba mieć na uwadze koszty takiej zabawy


### Coś dla programistów
jeżeli jesteś programistą(ką), oczywiście możesz użyć do tego celu zarówno API od Facebook'a, Twittera, czy nawet Google'a. To wszystko nie powinno Cię nic kosztować - oczywiście
zakładając, ze Twoje programy są self-hosted. Samo pukanie do API zazwyczaj nie nastręcza dużych problemów a już samo utrzymanie infrastrukury.

Nawet, jeżeli dopiero zaczynasz swoją przygodę z programowaniem, nie trać ducha! Google pomyślało o tym, żeby dać nam już gotowe narzędzia,
umozliwiające prostą automatyzację. Skopiuj ten kod, uprzednio rejestrując się [tutaj](https://developers.google.com/) i baw się dobrze.

Zdaje sobie sprawę, ze to nie był techniczny wpis i nie miał taki byc. jeżeli natomiast pojawi się zainteresowanie, z chęcią napiszę
bardziej techniczny artykuł.

```javascript
<!DOCTYPE html>
<html>
  <head>
    <title>Google Sheets API Quickstart</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>Google Sheets API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>

    <script type="text/javascript">
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '<YOUR_CLIENT_ID>';
      var API_KEY = '<YOUR_API_KEY>';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          appendPre(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listMajors();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
          range: 'Class Data!A2:E',
        }).then(function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            appendPre('Name, Major:');
            for (i = 0; i < range.values.length; i++) {
              var row = range.values[i];
              // Print columns A and E, which correspond to indices 0 and 4.
              appendPre(row[0] + ', ' + row[4]);
            }
          } else {
            appendPre('No data found.');
          }
        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        });
      }

    </script>

    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
  </body>
</html>
```

## Zakończenie
Póki co, mam nadzieję, że ten pierwszy wpis się Państwu podobał i natchnął was do działania. Bardzo dziękuję za uwagę
i do usłyszenia już niedługo