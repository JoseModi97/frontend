# Getting Started with Project Frontend

### This project was generated with [RadSystems](https://radsystems.io)

## Available Scripts
In the project directory:

### First run:
```bash
npm install
```

### After installation, then run: 
```bash
npm start
```
Open [http://localhost:8050](http://localhost:8050) to view it in your browser.

### Build for production
```bash
npm run build
```
Deploy generated files in `build folder` to your webserver

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

- ```public/``` public resources like images, icons, css, fonts
- ```src/assets/``` app resources such as: scss, themes, json.
- ```src/components/``` custom components
- ```src/contexts/``` page stateful logic which encapsulates reusable functions
- ```src/hooks/``` custom hooks
- ```src/i18n/``` language translation files
- ```src/layouts/``` application layout
- ```src/pages/``` page UI components and logic
- ```src/App.js``` app main layout
- ```src/index.js``` application entry point
- ```.env``` app configurations

## API Integration

API requests are performed with **axios**. The base API path comes from the `.env` variable `REACT_APP_API_PATH`.
[`src/components/InjectAxios.js`](src/components/InjectAxios.js) configures global
defaults and registers a response interceptor that logs the user out when a
request returns `401`. The [`useApi`](src/hooks/useApi.js) hook attaches the
token saved in `localStorage` to every request and exposes helpers for all HTTP
verbs.

Components often combine `useApi` with **React Query** to cache results. The
[`DataSource`](src/components/DataSource.js) component fetches records with:

```javascript
const api = useApi();
const { data } = useQuery(apiPath, () => api.get(apiPath));
```

## Frameworks and Tools

- **React** via Create React App powers the component-based UI under `src/`.
- **PrimeReact**, **PrimeIcons** and **PrimeFlex** provide UI components and grid
  utilities. Listing pages such as
  [`AlbumList`](src/pages/album/List.js) use PrimeReact's `DataTable` and other
  widgets.
- **React Router DOM** defines route mappings in [`src/App.js`](src/App.js).
- **React Query** caches API calls and keeps server state in sync. Custom hooks
  like [`useListPage`](src/hooks/useListPage.js) rely on `useQuery` and
  `useMutation`.
- **Formik** and **Yup** manage and validate forms in pages like
  [`src/pages/track/Add.js`](src/pages/track/Add.js).
- **Chart.js** and **Quill** are included for optional charting and rich text
  editing features.
- **Sass** compiles styles from `src/assets/styles` with variables and mixins.
- **Axios** performs all HTTP requests via the `useApi` hook.
- **ESLint** enforces code style rules from `.eslintrc.json`.

## Detailed Framework Usage

### Axios and API utilities
The [`InjectAxios`](src/components/InjectAxios.js) component sets global
defaults like the API base URL and registers a response interceptor that logs a
user out when a `401` error occurs. The [`useApi`](src/hooks/useApi.js) hook
adds the authentication token from `localStorage` to each request and exposes
wrappers for `get`, `post`, `put` and other HTTP verbs. Components such as
[`DataSource`](src/components/DataSource.js) combine `useApi` with
`useQuery` from **React Query** to load data and automatically cache the
results.

### React Query
`QueryClient` is configured in [`src/index.js`](src/index.js) where the
application is wrapped in `QueryClientProvider`. The custom hooks
[`useListPage`](src/hooks/useListPage.js) and
[`useViewPage`](src/hooks/useViewPage.js) use `useQuery` for fetching records
while `useAddPage` relies on `useMutation` to submit data.

### React Router
Route declarations live in [`src/App.js`](src/App.js). Each CRUD page is mapped
to a path under `<Routes>` so the browser URL drives which page component is
rendered. The [`AppProvider`](src/contexts/AppContext.js) also exposes a
`navigate` helper used throughout the pages to redirect users programmatically.

### Formik and Yup
Add and edit pages, e.g.
[`src/pages/track/Add.js`](src/pages/track/Add.js), use `Formik` to manage form
state and validation. Yup schemas define rules for each field and invalid inputs
are highlighted with the `p-invalid` class from PrimeReact.

### PrimeReact and PrimeFlex
User interfaces are built with PrimeReact widgets. For instance, data tables on
listing pages come from `primereact/datatable` and are paginated with the
`Paginator` component. Layout uses PrimeFlex utility classes to create responsive
grids and spacing.

### Animations and Media Helpers
`CSSTransition` from **react-transition-group** animates menu expansion in
[`AppMenu`](src/components/AppMenu.js). The `classnames` library is used in the
same file to apply conditional menu item styles. Image elements leverage
`react-img-placeholder` inside [`ImageViewer`](src/components/ImageViewer.js)
which displays a spinner from PrimeReact's `ProgressSpinner` until images load.

### Charts, Editors and Styles
`Chart.js` and `Quill` are included for advanced features such as charting and
rich text editing. Global styles are authored in several `.scss` files under
`src/assets/styles` and compiled by the **sass** package. ESLint rules defined in
`.eslintrc.json` keep the codebase consistent.

### For more info
See [RadSystems](https://radsystems.io/)
See [PrimeReact Framework](https://www.primefaces.org/primereact/)
