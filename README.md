# My Portfolio
This repository will be used to host my web developer portfolio website.

## Setup Instructions

### Basic Setup
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

### Setting Up The Contact Form with Cloudflare Workers, Turnstile, and Resend

To enable secure, spam-protected contact form submissions, you'll need to configure:

1. Resend to send form submissions via email
1. Cloudflare Turnstile to prevent spam
1. A Cloudflare Worker to handle the contact form submissions

#### 1. Create a resend account

Resend is a third party email service that lets you send emails through a simple API. Note: there is a free tier, see the [resend](https://resend.com/) website for details.

- Go to the [Resend](https://resend.com/) website.
- Follow the sign up instructions on screen.
- Create an API key. You will need this later when you set up your Cloudflare worker.

#### 2. Create a Cloudflare account and setup turnstile

To ensure that only real people use the contact form, we can use Cloudflare's Turnstile:

- Go to the [Cloudflare](https://www.cloudflare.com/) website.
- Follow the sign up instructions on screen.
- Once your account has been created, go to `Turnstile` in the side bar.
- From the turnstyle overview page, click on `+ Add widget`.
- Give the widget a name.
- Click on `+ Add Hostnames` enter the hostname for your website.
- Choose `Managed` as the Widget Mode.
- Click `Create`.
- Once your widget is created, you will have two keys, save these for later when you set up your Cloudflare worker. 

#### 3. Create a Cloudflare worker

From your project we will now create a Cloudflare worker to handle the Turnstile widget. Follow these steps from your project's root directory:

- Install Wrangler CLI globally (if not already installed): `npm install -g wrangler`
- Authenticate with Cloudflare: `wrangler login`
- From the project's root go to the cloudflare-worker/my-contact-worker directory: `cd cloudflare-worker/my-contact-worker`
- Set secrets for the following keys:
  - **TURNSTILE_SECRET** enter the command: `wrangler secret put TURNSTILE_SECRET` then enter the secret key from step 2 when prompted. Note: this should be the **Secret Key** not the **Site Key** from the Turnstile setup.
  - **RESEND_API_KEY** enter the command `wrangler secret put RESEND_API_KEY` then enter the API key you created when you set up your Resend account. 
  - **EMAIL_TO** enter the command `wrangler secret put EMAIL_TO` then enter the email address you would like to use to recieve your messages.
- Deploy wrangler: `wrangler deploy`
- When you first deploy your worker, you will be prompted to create a subdomain for your wrker. Enter one and follow any additional prompts.
- When wrangler is deployed, it will print a url for your worker. Copy it for later when you set up your react environment.

#### 4. Configure your React environment
- In your project's root, create a new file with the name `.env`
- Copy the contents of the `.env.example` to your `.env` and replace the keys with the following information:
  - For the **VITE_TURNSTILE_SITEKEY** replace `your-site-key` with the site key you created from step 2. Note: this time, use the **Site key** not the **Secret key**
  - For the **VITE_TURNSTILE_WORKER_URL** replace `your-worker-url` with the url associated with your Cloudflare worker, i.e., the worker url copied from step 3.
- From `./cloudflare-worker/my-contact-worker/src/index.js` update the `allowedOrigins` to include your website's domain instead of the one currectly listed.

Once you have the above steps complete, restart your server. You should now be able to send emails using your contect form.
