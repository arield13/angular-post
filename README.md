# Angular Post Viewer

This is a simple Angular application for viewing posts fetched from an API. Users can search for posts by tags and sort them based on various criteria.

## Features

- Fetch posts from an external API based on user-defined tags.
- Display fetched posts in a tabular format.
- Allow users to search for posts by entering tags.
- Provide options to sort posts by different criteria.
- Show error messages when fetching posts fails or when no data is found.

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. ## Updating API URL

Change the URL: 
  ## private baseUrl = 'https://localhost:7034/api/post'; 
  in services/post.service.ts for the one generate when runing the DotNet core API.

4. Run `npm install` to install the project dependencies.
5. Run `ng serve` to start the development server.
6. Open your web browser and navigate to `http://localhost:4200` to view the application.

## Usage

- Enter one or more tags separated by commas in the input field.
- Choose sorting options (direction and criteria) using radio buttons.
- Click the "Search" button to fetch posts based on the entered tags and sorting options.
- View the fetched posts in the table below the input fields.
- If no posts are found or an error occurs during the fetch process, appropriate messages will be displayed.

## Folder Structure

- `src/app/components`: Contains Angular components.
- `src/app/services`: Contains Angular services.
- `src/app/models`: Contains TypeScript interfaces for data models.
- `src/assets`: Contains static assets such as images, stylesheets, etc.

## Contribution

Contributions to this project are welcome. If you find any bugs or want to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
