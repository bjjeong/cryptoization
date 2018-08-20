# cryptoization

## Background and Overview
Cryptoization is a data visualization application created to show the all the transactions happening for Bitcoin (BTC) in real time.

Users will be able to see each transaction visualized in the form of spheres, differing in size. The size of the circle will be in direct relation to size of the transaction, measured either in BTC or in USD.

Users will also be able to hear a sound whenever a new transaction is made. The sound's tone will depend on the size of the trasaction as well.

## Functionality & MVP

In Cryptoization, users will be able to:

- [ ] View spheres of different sizes that represent each BTC transaction
- [ ] Click on a sphere, and more information will open up about that transaction
- [ ] Change the color scheme of the spheres
- [ ] Listen to sounds of different tones whenever a new transaction is made
- [ ] Zoom in & out of the cluster of spheres to explore the application
- [ ] Start, pause, and reset the application

In addition, this project will include: 
- [ ] An about modal describing what the application is, and what each sphere/sound represents

## Wireframes

The app will consist of a single screen with the simulation canvas, audio options, zoom in/out controls, and nav links to the GitHub repo and relevant social links.

Spheres will be added to the center of the cluster and the cluster will grow outwards

[General Canvas Wireframe](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=General%20Canvas#R7Zhdb5swFIZ%2FTW4jwBjIZZu228WmVeqmXTtgwKrByDhNsl8%2FO9gEsKNkKlFVac1F4dg%2B5jyvffyxAOtq%2F4WjpvzOMkwXgZftF%2BBhEQR%2B6Hnyn7IcOsvKiztDwUmmK50ML%2BQP1kbdrtiSDLejioIxKkgzNqasrnEqRjbEOduNq%2BWMjnttUIEtw0uKqG39TTJRaqtv4lIFXzEpSt11AnXBBqWvBWfbWve3CEB%2B%2FOuKK2R86fptiTK2G5jA4wKsOWOie6r2a0wVW4Ota%2Fd0prT%2Fbo5rcU2DoGvwhuhWh77mh0Yw8gcJwmr9keJgwBxDw6qxtwD3u5II%2FNKgVJXu5FCQtlJUVL758lH7xlzg%2Fdnv8%2Fuo5WjCrMKCH2QV3cBwOoxfdwNRjK0c6BFpG9LjoOgdn1jIB43DjQZYaD6cRgIu4gjgjXCEl3EMglVhEjmfvqENps%2BsJcfRBB42TAhWyQqIkkIZUhk65tJAVc37fvqsGWX86NZMoJPTO91WMIW4FZy99tM06C0DD56XeE9KopxQ6vLcT0NVKUNt2YsqSxoVXrUvVKpbEtbGSyLzTrtsKDrMpGvkLeFIWZDYyvq2sEaV9wgL%2Fws7FRZtWzyPsiv%2Foq6mxty6Rpd1PU9noPgYes1qbEQdyN%2BrfXF8uLW2Rs1UnqpNEV4WuMYc0SXaZoTZsscP6jeTcnCiXGwpBxyp1kyn9ygXW8rd3f%2F49dOSTwYnrtBqCEmbLNxTVSqSZaob56I2XvZmYC33VeOFLbQXNte6FsywriX%2Fssz7H7Hp6Xedw6ThRQ4eMZwByMoBJISe12s0ICNbyi35uXEyoILaptun52SvSFoJO0lxmrpS%2FCaBsvd5wEJ%2FMsxc%2B0noyMe98T1gTedjsgDelGuOIzfXLF5tvJm4hpNcGZosOJy%2FDqyzUPVdVEPvplgzhJPciTVKE7zJZ8K6Gg9XENpYE0caSGbIAr7r%2BHMcrJ8f6%2BQUFSZ2FrgZ1iuOUbjO7tQdhlqfKWpbkrpWGJxZVxgXAVxYTo2NYypP%2F29j966odQ%2FPjMiOe75RdCbLGhct2%2FIU61bDy4mJo3iSrkE8cSQQL7CwHB1F6MO%2BTpcrTkGfXZcwnEkXMNmggNXtdLniFPPZdYGT%2BQKnOK%2FVBcKxo2g2XeTr6U6yq366%2BAWPfwE%3D)

## Architecture and Technologies

This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure
* `Three.js` to create the 3D objects
* `D3.js` to create the 2D objects
* `Web Audio API` for sound generation
* Websockets from `blockchain.io`

## Implementation Timeline

### Over the weekend:
- [ ] Familiarize myself with the API's that I will be using
- [ ] Get GitHub repo set up
- [ ] Look into how websockets work

### Day 1:
- [ ] Make sure I can subscribe to the websockets from blockchain.io so that I have a stream of information flowing in
- [ ] Create my initial canvas

### Day 2: 
- [ ] Be able to create my objects in D3.js
- [ ] Figure out how to create my objects in D3.js dynamically as I receive JSON from blockchain.io

### Day 3:
- [ ] Be able to create a sound dynamically as I create objects.
- [ ] Be able to create a info box come up as I click on the objects

### Day 4: 
- [ ] Create the controls for audio and color changes
- [ ] Style everything

## Bonus Features:

- [ ] Render everything in 3D

