# Gerenda Műhely

Nulláról készített, keretrendszer és futásidejű függőségek nélküli magyar portfólió-demó. HTML, CSS és vanilla JavaScript; rendszerbetűk, külső font- és követőkérések nélkül.

## Megnyitás

`npm start`, majd http://127.0.0.1:4173. Az `index.html` közvetlenül is megnyitható. A `server.cjs` kizárólag helyi előnézethez készült; élesben a statikus fájlokat kell kiszolgálni.

## Fájlok

- `index.html`: teljes magyar tartalom és metaadatok.
- `styles.css`: színek, tipográfia, reszponzív kompozíciók, animációk.
- `script.js`: sticky navigáció, natív dialog mobilmenü, IntersectionObserver animációk.
- `favicon.svg`: saját, gerendaszerkezetet idéző geometrikus jel.
- `images/optimized/`: méretezett WebP képek; az eredetik változatlanok.
- `checks/`: böngészős ellenőrzés, eredmények és képernyőképek.

## Képek

A kapott mappában 7 fájl található, nem 8. A `pavilon.jfif` és a `pavilon-03.jfif` SHA-256 szerint azonos: összesen 6 egyedi kép áll rendelkezésre.

| Eredeti | Méret | Felhasználás |
| --- | --- | --- |
| hero-pavilon-01.png | 1672×941 | Hero, faanyag-részlet, előtető/pergola hangulatkép |
| pavilon-02.jfif | 800×533 | Hagyományos rönkpavilon, rönk kiülő kategória |
| pavilon-03.jfif | 700×700 | Natúr fa és antracit modern pavilon |
| pavilon-04.jfif | 2500×1669 | Nagy cinematic antracit referencia |
| pavilon-05.jfif | 1280×960 | Lamellás pavilon és egyedi faszerkezet kategória |
| pavilon-06.jfif | 902×541 | Üvegezett kerti pavilon kategóriakép |
| pavilon.jfif | 700×700 | Azonos a pavilon-03 képpel, külön nem ismételjük |

Az előtető/kocsibeálló kategóriához nem érkezett saját referenciafotó. A kategória szövege ezért egyértelműen hangulatképként azonosítja a pergolafotót. A ró­lunk kép ugyanennek a fotónak célzott részletkivágása.

## Működés és hozzáférhetőség

Az ajánlatkérő gombok a kapcsolat szekcióhoz vezetnek; az ottani fő gomb közvetlen telefonhívást indít. Nincs látszatűrlap vagy nem működő beküldés. A mobilmenü natív modális dialog, fókuszkorlátozással, Escape bezárással és visszaadott fókusszal. A tartalom JavaScript nélkül is látható. A csökkentett mozgás beállítás kikapcsolja az animációkat.

## Élesítés előtt

- A Gerenda Műhely demómárkanév, telefonszám és bemutató megjelölés cseréje valódi ügyféladatokra.
- A munkák és szolgáltatási állítások jóváhagyása; tényleges referenciák, képfelhasználási jogok és saját kocsibeálló/előtető fotó ellenőrzése.
- Végleges domain: abszolút canonical, `og:url`, `og:image` megadása. A demó `noindex, nofollow` beállításának eltávolítása csak publikáláskor.
- Valós cégadatok és a végleges adatkezeléshez illeszkedő jogi tájékoztatók hozzáadása. Jelenleg nincs analitika, cookie vagy adatgyűjtő űrlap.
- A helyi képoptimalizáló és tesztszkript a Codex környezet előtelepített sharp / Playwright csomagjait használja; ezek nem szükségesek a weboldal futásához.
