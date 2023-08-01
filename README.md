<div align="center">
    <h1 align="center">WisiIndie</h1>
    <h5>Open Source Event Monitoring</h5>
</div>

<div align="center">
  <a href="https://wisi-indie.vercel.app/">wisi-indie.vercel.app</a>
</div>
<br/>

## Contributing

Thank you for considering contributing to our open source project! We appreciate your interest and are excited to have you on board. This document outlines the steps you need to follow to contribute to the project effectively. Please read the guidelines carefully and feel free to reach out if you have any questions.

### Services

Before getting started, please ensure that you have the following third-party services set up:

- [supabase](https://supabase.com/dashboard/): Go to the Database section to get started
- [supabase](https://supabase.com/docs/guides/auth/social-login/auth-github): Authentication with Github

## Installation

To install the project and its dependencies, follow these steps:

1.  Make sure you have `npm` installed on your system. If not, you can install nvm (Node Version Manager) by running:

    ```sh-session
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```

2.  We will install the latest version of `node lts` we will use the `--lts` flag for the direct installation of the most current version with LTS

    ```sh-session
    nvm install --lts
    ```

3.  Great, we already have it installed… now, to configure this version as the global version of our system:

    ```sh-session
    nvm use --lts
    ```

4.  Run the following command to install the project dependencies:
    ```sh-session
    npm install
    ```

## Database Preparation

### Supabase

To prepare the Supabase database, follow these steps:

1.  If you have not had any experience with Supabase, I highly recommend that you watch this basic video for Supabase, you will learn how to use the Supabase interface to create tables and manage the API. If not, you can skip this step and move on to the next one.

<a href='https://www.youtube.com/watch?v=pi33WDrgfpI' target='_blank'>
  <img width='50%' src='https://img.youtube.com/vi/pi33WDrgfpI/mqdefault.jpg' alt='Supabase, Tutorial Práctico y Overview (REST API)' />
</a>

2.  Create a project from scratch and save the `Project URL` and `API Key` keys for the environment variables in the .env file, you can leave this section for now to do that setup or go ahead and do it later no problem.

    <img width='100%' src='https://i.postimg.cc/5tz3mh1W/Clavess.png' alt='Key for the environment' />

3.  The next step would be to go to the table editor and create the necessary tables for the database following this structure: Be careful, this structure must be followed since there may be errors if any table is not correct.

<img width='80%' src='https://i.postimg.cc/ZRNBymrX/Create-Table.png' alt='Create Tablas' />

3.1  Structure Table Ideas:
<br/><br/>
<img width='40%' src='https://i.postimg.cc/xd4p1vRt/Tabla-Ideas.png' alt='Create Tabla Ideas' />
<img width='40%' src='https://i.postimg.cc/LXm5hP8g/Colums.png' alt='Create Tabla Ideas' />

3.2  Structure Table User
<br/><br/>
<img width='40%' src='https://i.postimg.cc/HWcnnTp2/Tabla-User.png' alt='Create Tabla User' />
<img width='40%' src='https://i.postimg.cc/kgdBLLPy/Table-User-Colums.png' alt='Create Tabla User' />

With this you will have all the necessary tables for the database, now you can continue with the authentication and configuration of Email and Github providers.

### Supabase Auth

To configure authentication on Supabase, follow these steps:

1.  Go to the Authentication section
<br/><br/>
<img width='40%' src='https://i.postimg.cc/02c9CN0D/goauth.png' alt='Go to the Authentication section' />

2.  Go to the providers settings and make sure the Email provider is enabled and make sure to disable the Confirm Email option and make sure to save it.
<br/><br/>
<img width='80%' src='https://i.postimg.cc/QdvCptjS/desa.png' alt='providers Settings' />

2.1  You can see the Github provider configuration in the following link:

- [supabase](https://supabase.com/docs/guides/auth/social-login/auth-github): Authentication with Github

### Environment Variables

After configuring the necessary services, you must set the environment variables provided by supabase in the `/.env.local` file. To do this, follow these steps:

1.  Pass your environment variables to the .env.example file
<br/><br/>
<img width='80%' src='https://i.postimg.cc/qvhbdR6V/env-Example.png' alt='Envaironment Variables .env.example' />

2.  Finally change the `.env.example` to `.env.local`