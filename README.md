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

- ```public/``` public resuources like images, icons, css, fonts
- ```src/assets/``` app resources such as: scss, themes, json.
- ```src/components/```  custom components
- ```src/context/```  page stateful logic which encapsulate reusable functions
- ```src/hooks/```  app hooks comp
- ```src/i18n/```  language translation files
- ```src/layouts/```  app layout
- ```src/pages/```  app page UI components and logic
- ```src/App.js``` app main layout
- ```src/index.js``` application entry point
- ```.env``` app configurations

## API Integration

API requests are handled by **axios**. The base API path is configured in `.env` using the `REACT_APP_API_PATH` variable. `src/components/InjectAxios.js` sets up axios defaults and a response interceptor for handling authentication errors. A custom hook `useApi` wraps axios methods and automatically attaches the `Authorization` header when a user token exists.

### For more info
See [RadSystems](https://radsystems.io/)
See [PrimeReact Framework](https://www.primefaces.org/primereact/)
