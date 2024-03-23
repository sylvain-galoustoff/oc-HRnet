# My react template
Starter for all my new React projects, including some essential packages and a minimal configuration.

## Installation

Open the terminal in the installation folder of your new application.

`git clone https://github.com/sylvain-galoustoff/my-react-template my-new-project`, replace `my-new-project` with the name of your project.

`cd my-new-project`

`npm install`

`npm run dev`

## Under the hood

### Initialisation
The project is set up with the vite.js React template.

#### Npm packages
* Node SASS
* [React Icons](https://react-icons.github.io/react-icons/)
* [Webfont loader](https://github.com/typekit/webfontloader)
* [React Router DOM v6](https://reactrouter.com/en/main)

### Style
The project is initialized with several SASS style sheets. Only the `index.scss` file is compiled into CSS. `index.scss` imports the other files :
* reset.scss : Removes all default styles from the browser.
* vars.scss : This is where I define all the SASS variables and mixins.
* typo.scss : Provides the basic style for typography, mainly the font used and the definitions of the titles from h1 to h6. The Roboto font is set as the default, loaded from Google Fonts. (See [Webfont loader](https://github.com/typekit/webfontloader) for the font installation process)
 
### Routing
The BrowserRouter component wraps the entire application. Configure the routes in the App.jsx file.
