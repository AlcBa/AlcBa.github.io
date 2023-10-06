# Alcba

## Updating Content

The data and images for each page is stored within the `src/content` folder. Other files such PDF documents are stored within the `public` folder, so that they're publicly accessible.

### Home Page

Some information on the home page can be updated using the Markdown file found in `src/content/home/home.md`.

The format is as follows:

| Key        | Value                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title      | The title of the page                                                                                                                                                                                                                                                                    |
| role       | The role, e.g. Professor                                                                                                                                                                                                                                                                 |
| faculty    | The faculty, will be linked to faculty url                                                                                                                                                                                                                                               |
| school     | The school e.g. National University of Singapore                                                                                                                                                                                                                                         |
| facultyUrl | The faculty url to link to                                                                                                                                                                                                                                                               |
| imageUrl   | The file path of the profile image with the file extension e.g. `./yuhao-ba.jpg` <br/> <ul><li>Image should be placed in the `src/content/home` folder</li><li>The file path must begin with `./`</li><li>Image should be a square aspect ratio</li><li>File path is case-sensitive</li> |

```markdown
---
title: 'The title of the page'
role: 'Assistant Professor'
faculty: 'Lee Kuan Yew School of Public Policy'
school: 'National University of Singapore'
facultyUrl: 'https://lkyspp.nus.edu.sg/our-people/faculty/ba-yuhao'
imageUrl: ./yuhao-ba.jpg
---

Content on home page
```

> [!NOTE]
> The site description will update according to the role, faculty and school.

> [!WARNING]
> The site will not build if the image at the specified file path does not exist.

### Research Page

The list of publications and working papers can be updated using the JSON files found in `src/content/research/publications.json` and `src/content/research/workingpapers.json` respectively.

The format is as follows:

| Key                    | Value                                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title                  | The title of the paper                                                                                                                                                                                                                     |
| publication (optional) | The journal or book where the paper is published                                                                                                                                                                                           |
| authors                | The authors of the paper                                                                                                                                                                                                                   |
| pdfUrl (optional)      | The link to the PDF file, with the `.pdf` file extension e.g. `paper 1.pdf` <br/> <ul><li>PDF Document should be placed in the `public/research` folder</li><li>File extension must end in `.pdf`</li><li>File name is case-sensitive</li> |
| doi (optional)         | The doi link to the paper, must begin with `https://` or `http://`.                                                                                                                                                                        |

### Teaching page

The information on the teaching page can be updated using the JSON file found in `src/content/teaching/teaching.json`.

The format is as follows:

| Key         | Value                                     |
| ----------- | ----------------------------------------- |
| title       | The title of course                       |
| school      | The school where the course was taught at |
| description | A description for the course              |

### Data page

The information on the data page can be updated using the JSON file found in `src/content/data/data.json`.

The format is as follows:

| Key         | Value                                        |
| ----------- | -------------------------------------------- |
| description | The description of the page                  |
| data        | The collection of data displayed on the page |

The format of each data is as follows:

| Key             | Value                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| title           | The title of the data                                                                                                |
| description     | The description of the data <ul><li>Support for certain markdown elements, such as links, bold and italics</li></ul> |
| link (optional) | A link to the data, must begin with `http://` or `https://`                                                          |

### Team page

The list of teams members and alumni on the teams page can be updated using the JSON files found in `src/content/team/team.json` and `src/content/team/alumni.json` respectively.

Each list is sorted according to the first name in alphabetical order (case-insensitive).

The format is as follows:

| Key                 | Value                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| firstName           | The first name of the team member                                                                                                                                                                                                                                                    |
| lastName (optional) | The last name of the team member, and will be displayed in `ALL_CAPS`.                                                                                                                                                                                                               |
| role                | The role of the team member                                                                                                                                                                                                                                                          |
| description         | A short description of the team member                                                                                                                                                                                                                                               |
| website (optional)  | The website of the team member                                                                                                                                                                                                                                                       |
| imageUrl            | The file path to the profile image for the team member e.g. `./yuhao-ba.jpg` <br/> <ul><li>Image should be placed in the `src/content/team` folder</li><li>The file path must begin with `./`</li><li>Image should be a square aspect ratio</li><li>File path is case-sensitive</li> |

> [!WARNING]
> The site will not build if the image at the specified file path does not exist.

### CV page

The file path to the CV can be updated using the JSON file found in `src/content/cv/cv.json`.

The format is as follows:

| Key    | Value                                                                                                                                                                                                                                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pdfUrl | The shared link to the PDF file in Google Drive with the `FILE_CODE`<br/> <ul><li>The shared link should look like `drive.google.com/file/d/FILE_CODE/view?usp=sharing`, only input the file code e.g. `1x2TcHfRDjqN6tNOg4Fi9vL2zhXLFSj0x`</li><li>Sharing settings should be set to 'Anyone with the link'</li></ul> |

### Header images

Header images are located in `src/content/header`. To add more header images, place an image file within the folder. To remove a header image, delete the image from the folder.

> [!NOTE]
> By default, a center crop of the image will be taken.

> [!WARNING]
> The site will not build if any of the files located within the folder are not valid image files.

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

> [!NOTE]
> The `site` configuration option in `astro.config.mjs` should be updated according to the deployment URL.

### Other Notes

ESLint and Prettier are set up in this project to lint and format code. This project also uses pre-commit hooks to run ESLint and Prettier on every commit.
