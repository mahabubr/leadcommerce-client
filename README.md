# [Leadcommerce](https://leadcommerce-gray.vercel.app/dashboard/)

_ e-commerce management system web app. The primary goal is to manage and maintain the product. Deals with e-commerce websites for online product sales. It provides for users to purchase and maintain their products through a dashboard._

### System Overview

- Admin:.

- Store:.

- Employee:.

- Deliveryman:

### Languages/Technologies (Frontend)

- Next.js 14
- TypeScript
- AntDesign
- CSS
- reduxjs
- apexcharts
- chart.js
- jwt-decode
- lottie-react
- react-apexcharts
- react-chartjs-2
- react-chartjs-3
- react-dom
- react-google-charts
- react-icons
- react-paginate
- react-redux
- react-to-print
- sass

### feature

#### Authentication:

##### Admin:

- Administrators should be able to log in securely using their credentials, including email and a secure password.

##### Store

-

#### Employee

-

#### Deliveryman

-

## 🔧 Non-Functional Requirements/Feature:

#### Security:

- User passwords must be securely stored using appropriate hashing and salting techniques
- API endpoints handling sensitive information should be protected using secure protocols (HTTPS).
- Authentication tokens should be securely generated and validated to prevent unauthorized access.

#### Performance

- The API should be able to handle a high volume of concurrent requests efficiently.
- Response times should be optimized to ensure a responsive user experience.

#### Scalability

- The application should be designed to accommodate future growth and increasing user demands.
- The architecture should allow for horizontal scalability, such as load balancing and distributed processing.

#### Reliability

- The API should be highly available, minimizing downtime and ensuring data integrity.
- Error handling and logging should be implemented to facilitate troubleshooting and maintenance.

#### Constraints

- The REST API Application should be implemented using a specific programming language or framework.
- The API may depend on external services or libraries for certain functionalities (e.g., email verification, file upload).

## 🔧 Installation

Provide step-by-step instructions on how to install and set up your application locally. For example:

1. Clone the ecommerce-backend repository:

```sh

git clone https://github.com/mahabubr/leadcommerce-client

```

2. Install the dependencies:

```sh

npm install

```

## Deployment Instructions

To deploy your Node.js application using GitHub Actions, follow these simplified steps:

1. **Push Changes to GitHub**: Make changes to your Node.js application code as needed.

2. **Commit Changes**: Commit your changes to the `main` branch.

   ```bash
   git add .
   git commit -m "Update application code"
   ```

3. **Push to GitHub**: Push the committed changes to your GitHub repository.

   ```bash
   git push origin main
   ```

4. **GitHub Actions**: GitHub Actions will automatically trigger a workflow when changes are pushed to the `main`
   branch. This workflow performs the following tasks:

   - Builds your main branch with github action..
   - Deploys the updated application to your server.

5. **Monitor Deployment**: Monitor the GitHub Actions workflow progress on your GitHub repository's Actions tab. The
   workflow will display the status of each step, including building, pushing, and deploying.

6. **Access Deployed Application**: Once the workflow is completed successfully, your Node.js application should be
   deployed and accessible. You can access it via the specified URL or domain name.

That's it! Your application is automatically deployed whenever you push changes to the `main` branch of your GitHub
repository. This streamlined process minimizes manual deployment steps for users.
