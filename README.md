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

API requests are handled by **axios**. The base API path is configured in `.env` using the `REACT_APP_API_PATH` variable. `src/components/InjectAxios.js` sets up axios defaults and a response interceptor for handling authentication errors. A custom hook `useApi` wraps axios methods and automatically attaches the `Authorization` header when a user token exists.

## Frameworks and Tools

- **React** via Create React App powers the overall UI framework.
- **PrimeReact**, **PrimeIcons** and **PrimeFlex** provide UI components, iconography and a responsive grid system.
- **React Router DOM** manages client-side routing.
- **React Query** caches API requests and keeps server state in sync.
- **Formik** and **Yup** handle form state management and validation.
- **Chart.js** and **Quill** are used for charting and rich text editing.
- **Sass** enables styling with variables and mixins.
- **Axios** performs HTTP requests.
- **ESLint** ensures code quality using `.eslintrc.json` rules.

### For more info
See [RadSystems](https://radsystems.io/)
See [PrimeReact Framework](https://www.primefaces.org/primereact/)
