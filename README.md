# Helix Kaartenportaal

## Publiceren via GitHub Pages
1. Maak een nieuwe repository aan op GitHub.
2. Upload de volledige inhoud van deze map, niet alleen het ZIP-bestand.
3. Open in de repository: Settings > Pages.
4. Kies bij Source: Deploy from a branch.
5. Kies branch `main` en map `/(root)`, en klik Save.

## Kaarten vervangen
Vervang de inhoud van bijvoorbeeld `maps/middenmeer/` door de volledige Leaflet/qgis2web-export. Het hoofdbestand van die export moet `index.html` heten.

## Code wijzigen
Open `script.js` en wijzig bovenaan `ACCESS_CODE = "2468"`.

## Belangrijk
GitHub Pages is statische, openbare hosting. De pincode is alleen een toegangsdrempel. Zet geen vertrouwelijke gegevens in deze repository.
