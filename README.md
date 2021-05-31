# Project 4: Evaluate a News Article with Natural Language Processing

## Overview

This project is part of Udacity's Front End Development Nanodegree. From the course:

> This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

The goal of this project is to get get used to:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

In addition to being able to analyze news articles and blogs through URLs, in my project users can also enter their own text to analyze.

## Instructions

### 1. Setting up the Project

Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies.

```
cd <project directory>
npm install
```

### 2. API Key

First, you will need to go [here](https://www.meaningcloud.com/developer/) and register for an account. Signing up will get you an API key.

At the root of the project, create a new file named `.env`.

`API_KEY=**************************`

### 3. Run server

```
npm run build-prod
npm run start
```

This will create a `dist` folder and the production server runs on `localhost:8081`

For more information on the results of the text analysis, check out the [MeaningCloud API documentation](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response).
