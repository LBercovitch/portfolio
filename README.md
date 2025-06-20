# My Portfolio
This repository will be used to host my web developer portfolio website.

## Setup Instructions

This project is build using React, Tailwind, Node.js, and Vite and can be set up using the following steps:
- Create a fork of this repository.
- From your dev environment, clone your forked repo using this command: `git clone Your_Fork_URL`
- Navigate to the project's directory: `cd portfolio/portfolio`
- Check to make sure node, npm, and nvm are installed with these commands:
  - `node -v`
  - `npm -v`
  - `nvm -v`
- If you get an error message for any of these commands, you will have to install the packages with these steps:
  - First install curl as a sudo user: `sudo apt-get install curl`
  - Next install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`
  - Test to make sure nvm installed successfully: `command -v nvm` Note: If successful 'nvm' will print. If nothing happens or an error is received, close and open a new terminal.
  - Next, install node and npm: `nvm install --lts`
  - Confirm node and npm were installed: `node -v` and `npm -v`
- Install dependencies: `npm install`
- Run the project with: `npm run dev`
- Copy the localhost url from the server output into your browser. You should see the project running.
