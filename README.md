# Vuetify Image Gallery App

This is a simple Vue.js application that displays a gallery of images. The user can switch between a color gallery and a grayscale gallery by selecting options from the sidebar.

## Features

- Display a gallery of images
- Toggle between color and grayscale images
- Copy image URLs to the clipboard

## Project Structure

The project consists of the following files:

- `App.vue`: The main component that serves as the entry point for the application.
- `ImageGallery.vue`: A component that displays the image gallery.
- `SideBar.vue`: A component that provides a sidebar with options to switch between color and grayscale galleries.
- `assets/`: A directory that contains static assets such as images.
- `router/`: A directory that contains the routing configuration for the application.

## Setup

To set up the project, follow these steps:

1. Clone the repository: `git clone https://github.com/OpreaTudorCalin/image-gallery-app.git`
2. Navigate to the project directory: `cd image-gallery-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run serve`
2. Open your web browser and visit `http://localhost:8080` (or the specified address in the console) to see the application running.

## How It Works

- The main component, `App.vue`, is responsible for rendering the sidebar and the image gallery components.
- The `SideBar.vue` component displays a navigation drawer with user information and options for color and grayscale galleries. When an option is selected, it emits an event to the parent component to update the `isColored` flag.
- The `ImageGallery.vue` component displays a grid of image cards. The `isColored` flag determines whether to display color or grayscale images. Each image card includes a click event that copies the corresponding image URL to the clipboard using the `navigator.clipboard.writeText()` API.
- The application uses Vue Router to handle routing when the user selects an option in the sidebar. It navigates to the `/colored` or `/gray` route based on the selected option.

## Copyright

This project is protected by the copyright of Oprea Tudor Calin. All rights reserved. Without written permission from the copyright holder, this project cannot be used, modified, or distributed in any form or by any means.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## Acknowledgements

- The images in the gallery are sourced from [Picsum Photos](https://picsum.photos/).
- This project was built using [Vue.js](https://vuejs.org/).
- Special thanks to the contributors and maintainers of the libraries and tools used in this project.
