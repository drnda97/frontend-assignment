# Propylon - Front-end challenge

The objective of this code challenge is to give the candidate the opportunity to demonstrate their technical skills. We're focused here on setting the foundation for a maintainable codebase to grow. If this was the start of a bigger project, how would you set it up, which tools would you choose and what architectural decisions are important to make now and which can wait until later.

## Requirements
The challenge is to build from scratch an application using React that renders a tree of elements from a JSON structure (the /backend/backend.json file provided along with this challenge), providing the option to navigate to the list of components via Table Of Contents (ToC), following the requirements below:  

- The JSON file needs to be served to the React App via API request
- In the left side of the main page, a navigation panel needs to be included, rendering the content in the format of Table of Contents
- The right panel of the main page needs to be included to show the list of components of the document in a flat structure.
- In the first load of the page, the first component needs to get selected in the Table of Contents and Content View
- If a component is selected in the content view, the corresponding item on the ToC needs to get selected as well
- If a component is selected via ToC, the corresponding component needs to get selected in the Content View as well
- For the ToC, only the components with levels 1 and 2 need to be displayed

Basic design on Figma: [https://www.figma.com/file/bi5ilhjDy3ltx0PLpLIfVu/Propylon-Frontend-Assignment](https://www.figma.com/file/bi5ilhjDy3ltx0PLpLIfVu/Propylon-Frontend-Assignment)

## Delivery  & Non-Functional

- The code should be pushed to your personal GitHub account, and the repository link sent to us.
- Folder structure, libraries, architecture are entirely up to you but we do ask that you use React and TypeScript is a bonus.
- Our main goal here is to assess your JS/TS and React skills. We'll also be looking at architectural and library decisions and in particular how you can walk us through those decisions in the follow-up call.
- We are not looking for pixel perfect implementation or overly complex solutions. We value your time and we'd expect this challenge shouldn't take more than 3-4 hours.

## Running the initial project

We've purposely left the front-end code out so you can set the project up with your preferred tooling.

Inside the `backend` folder you'll find a small npm project that simply servers the data to get you started. `npm i` and `npm start` will then give you your data in json format on port 3004
