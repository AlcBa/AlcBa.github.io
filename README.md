# Alcba

## Updating Content

The data and images for each page is stored within the `src/content` folder. Other files such PDF documents are stored within the `public` folder, so that they're publicly accessible.

**Note**: Header images are stored in the `public` folder to prevent Astro from optimising these images! Astro's image optimisation conflicts with the transitions between the images.

### Home Page

Some information on the home page can be updated using the JSON file found in `src/content/home/home.json`.

The format is as follows:

| Key         | Value                                                                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | The title of the page                                                                                                                                                                                                                                                                    |
| description | The description on the page                                                                                                                                                                                                                                                              |
| imageUrl    | The file path of the profile image with the file extension e.g. `./yuhao-ba.jpg` <br/> <ul><li>Image should be placed in the `src/content/home` folder</li><li>The file path must begin with `./`</li><li>Image should be a square aspect ratio</li><li>File path is case-sensitive</li> |

**Note**: The site will throw a build error if there is no image at the specified file path.

### Research Page

The list of publications and working papers can be updated using the JSON files found in `src/content/research/publications.json` and `src/content/research/workingpapers.json` respectively.

The format is as follows:

| Key                    | Value                                                                                                                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                  | The title of the paper                                                                                                                                                                                                                 |
| publication (optional) | The journal or book where the paper is published                                                                                                                                                                                       |
| authors                | The authors of the paper                                                                                                                                                                                                               |
| pdfUrl (optional)      | The link to the PDF file, with the `.pdf` file extension e.g. `paper 1.pdf` <br/> <ul><li>PDF Document should be placed in the `public/research` folder</li><li>File extension must be `.pdf`</li><li>File name is case-sensitive</li> |

### Teaching page

The information on the teaching page can be updated using the JSON file found in `src/content/teaching/teaching.json`.

The format is as follows:

| Key        | Value                                            |
| ---------- | ------------------------------------------------ |
| philosophy | The description of teaching philosophy           |
| courses    | A title and optional description for each course |

### Team page

The list of teams members and alumni on the teams page can be updated using the JSON files found in `src/content/team/team.json` and `src/content/team/alumni.json` respectively.

Each list is sorted according to the first name in alphabetical order (case-insensitive).

The format is as follows:

| Key                 | Value                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| firstName           | The first name of the team member                                                                                                                                                                                                                              |
| lastName (optional) | The last name of the team member, and will be displayed in `ALL_CAPS`.                                                                                                                                                                                         |
| role                | The role of the team member                                                                                                                                                                                                                                    |
| description         | A short description of the team member                                                                                                                                                                                                                         |
| website (optional)  | The website of the team member                                                                                                                                                                                                                                 |
| imageUrl            | The file path to the profile image for the team member <br/> <ul><li>Image should be placed in the `src/content/team` folder</li><li>The file path must begin with `./`</li><li>Image should be a square aspect ratio</li><li>File name is case-sensitive</li> |

**Note**: The site will throw a build error if there is no image at the specified file path.

### Social Links

The social links can be updated using the JSON file found in `src/content/social/social.json`.

| Key           | Value                                                                          |
| ------------- | ------------------------------------------------------------------------------ |
| googleScholar | A URL to the Google Scholar page, must begin with `https://scholar.google.com` |
| email         | An email                                                                       |
| twitter       | A URL to the Twitter page, must begin with `https://twitter.com`               |
| github        | A URL to the GitHub page, must begin with `https://github.com`                 |

## Developer Guide

### Getting Started

This project is built with Astro + TailwindCSS.

1. Clone this repository
2. Install dependencies `yarn install`
3. Run `yarn dev` to serve the application

### Deploying the Application

See [Astro documentation](https://docs.astro.build/en/guides/deploy) for deployment instructions.

### Other Notes

ESLint and Prettier are set up in this project to lint and format code. This project also uses pre-commit hooks to run ESLint and Prettier on every commit.
