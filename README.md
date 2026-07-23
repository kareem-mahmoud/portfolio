# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Contact form / Hostinger deployment

The contact form posts to `contact.php` and uses the bundled PHPMailer files to send the complete submission to `kareem.mahmoud.abd.elhannan@gmail.com` through Gmail SMTP.

Before deploying, create a Google **App Password** for that Gmail account (2-Step Verification must be enabled). Do not use the normal Gmail password.

1. Copy `contact-config.sample.php` to `contact-config.php` and replace the placeholder with the 16-character Google App Password. This file is ignored by Git.
2. Run `npm run build`.
3. Upload the **contents** of `dist/portfolio/browser/` to Hostinger's `public_html/` directory, including the `mailer/` folder and `.htaccess` (enables the Angular `/contact` redirect).

No Composer or server terminal is required. Test the deployed form and confirm Gmail receives the message; the visitor's email is set as its Reply-To address.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
