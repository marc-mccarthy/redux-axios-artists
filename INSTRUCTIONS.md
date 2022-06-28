# Full Stack React with Redux

For this activity you'll be adding Redux to the famous artists project. Redux has been partially set up in `index.js`.

## Setup

- Fork and clone this repository
- `npm install`
- `npm run server`
- `npm run client`

## Tasks

## Work on a new branch**

```shell
git branch base-mode
```

- [x] Move the client side artists array from local state in `App.js` to the artistReducer.
- [x] Create a new component with an add artist form that will POST data to the **server** on submit.
   > Data sent to the server should be in the format `{name: 'name of artist'}`.
   > The id is added by the database on the server side.
- [x] Add a `Router` and navigation to `App.js`.
   - [x] Add navigation to the *home* page. (The *home* page should just be the welcome message and nav.)
   - [x] Add a client side route for the form, `/addArtist`
   - [x] Add a client side route for the list of artist, `/allArtists`

**When you're done with these tasks, checkout main and do it all again!**

```shell
git checkout main
git branch base-mode-again
```

![No Repeat](https://i.imgflip.com/1rxppm.jpg)

### Stretch

- [x] Implement the delete route on the **server** using `.filter()`.
- [x] Add additional properties to the form.
- [x] Style with Material UI & make the *home* page look spiffy with an image.
- [x] Move the data to a database.
