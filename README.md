# Mummon Tupa — Vercel-esikatselu

Kevyt yhden sivun esikatselu. Ei asennettavia riippuvuuksia eikä rakennusvaihetta.

Esikatselussa on `noindex`, kunnes asiakas on hyväksynyt sisällön ja sivu siirretään omalle verkkotunnukselle.

## Sisältö

- `index.html`: sivun rakenne, tekstit ja tyylit
- `content.js`: omistajan vahvistamat tapahtumat, puhelin, aukioloajat ja valinnainen hinnaston URL
- `assets/ulkokyltti.webp`: paikan kyltti ja saapumisohje
- `assets/super-sunday-jams.webp`: tapahtumajuliste
- `assets/biljardi.webp` ja `assets/baari.webp`: Villen omista kuvista verkkokäyttöön optimoidut versiot
- `assets/mummon-tupa-logo.svg`: uusi vektorisanamerkki kyltin typografian pohjalta
- `assets/mummon-tupa-logo-horizontal.svg`: vektorisanamerkin vaakaversio headeriin

Nykyisen piirrosmummon sisältävää vanhaa logoa ei ole jäljennetty; käytettävissä oleva rasteriversio on liian pieni tarkkaan vektorointiin. SVG-tiedostojen tekstit on muunnettu poluiksi, joten fonttia ei tarvita lataajalla.

## Vercel

Vie hakemisto GitHub-repoon ja valitse Vercelissä **Other**-framework. Root Directory on hakemisto, jossa `index.html` sijaitsee. Build Command jätetään tyhjäksi ja Output Directoryksi asetetaan `.` tarvittaessa. Git-integraatio tekee esikatselulinkin.

## Ennen julkista domainia

1. Vahvista asiakkaalta puhelin, aukioloajat, tapahtumat ja kuvan sekä julisteen käyttöoikeus.
2. Hero käyttää Villen aitoa kuvaa biljardipöydästä. Jos uusi terävämpi sisätilan vaakakuva saadaan, vaihda se hero-kuvaksi.
3. Lisää vahvistetut tiedot `content.js`-tiedostoon. Tyhjiä kenttiä ei näytetä.
4. Testaa mobiilissa reittilinkki ja yhteystiedot. Lisää nykyinen domain vasta hyväksyttyyn tuotantoversioon.
5. Ravintolan kaupallinen sivu edellyttää Vercel Pro -tilausta nykyisten Vercel-ehtojen mukaan.

Spizano on erillinen yritys eikä sen ruokalistaa tai yhteystietoja sisällytetä tähän sivuun.
