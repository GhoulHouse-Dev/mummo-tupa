# Mummon Tupa — verkkosivun lähdekoodi

Kevyt, responsiivinen yhden sivun esikatselu. Ei asennettavia riippuvuuksia eikä rakennusvaihetta.

Esikatselussa on `noindex`, kunnes asiakas on hyväksynyt sisällön ja sivu siirretään omalle verkkotunnukselle.

## Sisältö

- `index.html`: sivun rakenne, tekstit ja tyylit
- `content.js`: omistajan vahvistamat tapahtumat, puhelin, aukioloajat ja valinnainen hinnaston URL
- `assets/ulkokyltti.webp`: paikan kyltti ja saapumisohje
- `assets/super-sunday-jams.webp`: tapahtumajuliste
- `assets/biljardi.webp` ja `assets/baari.webp`: Villen omista kuvista verkkokäyttöön optimoidut versiot
- `assets/mummon-tupa-facebook-post.png`: asiakkaan omasta Facebook-julkaisusta saatu alkuperäinen piirroslogo. Sivun CSS näyttää kuvasta vain logon alueen. Kuvassa itsessään on myös vanhan julkaisun yhteystietoja, eikä niitä käytetä sivun tietoina.

Facebook-kuvan logo näytetään alkuperäisinä pikseleinä, jotta piirrosta ei muuteta vahingossa. Se ei ole vektorilogo, ja kuvan tarkkuus rajoittaa sen käyttöä suurissa painotuotteissa. Uusista, tarkemmista alkuperäisistä logotiedostoista voi myöhemmin tehdä varsinaisen SVG-version.

## Vercel

Esikatselu on osoitteessa [mummo-tupa-espoo.vercel.app](https://mummo-tupa-espoo.vercel.app/). Vercel-projekti `mummo-tupa-espoo` seuraa kloonattua repoaan `Jambovisuaalit/mummo-tupa-espoo` (`main`). Tämä repo `GhoulHouse-Dev/mummo-tupa` on alkuperäinen lähde, mutta sen uudet commitit eivät päivity Verceliin automaattisesti. Vie muutokset Vercelin seuraamaan repoon tai vaihda Vercelin Git-lähde tähän repoon ennen seuraavaa julkaisua.

Staattisen sivun asetukset: **Other**-framework, Root Directory repon juuressa, Build Command tyhjä, Output Directory `.` tarvittaessa.

## Ennen omaa verkkotunnusta ja lopullista julkaisua

1. Vahvista asiakkaalta puhelin, aukioloajat, tapahtumat ja kuvan sekä julisteen käyttöoikeus.
2. Hero käyttää Villen aitoa kuvaa biljardipöydästä. Jos uusi terävämpi sisätilan vaakakuva saadaan, vaihda se hero-kuvaksi.
3. Lisää vahvistetut tiedot `content.js`-tiedostoon. Tyhjiä kenttiä ei näytetä.
4. Testaa mobiilissa reittilinkki ja yhteystiedot. Lisää nykyinen domain vasta hyväksyttyyn tuotantoversioon.
5. Ravintolan kaupallinen sivu edellyttää Vercel Pro -tilausta nykyisten Vercel-ehtojen mukaan.

Spizano on erillinen yritys eikä sen ruokalistaa tai yhteystietoja sisällytetä tähän sivuun.
