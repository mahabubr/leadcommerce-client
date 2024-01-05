# [Leadcommerce](https://leadcommerce-client.vercel.app/)

_ e-commerce management system web app. The primary goal is to manage and maintain the product. Deals with e-commerce websites for online product sales. It provides for users to purchase and maintain their products through a dashboard._

### System Overview

- Admin -> email: admin@leadcommerce.com, password: hashed_password
   
- Store -> email: store@leadcommerce.com, password: hashed_password

- Employee -> email: employee@leadcommerce.com, password: hashed_password

- Deliveryman -> email: delivery@leadcommerce.com, password: hashed_password

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

### Feature

#### Authentication:
- The user can sign in as admin, store, or employee delivery.
- The user can sign up as the store owner.
- admin will create an employee, delivery

##### Admin:

- a great admin dashboard where admins can see user activity, order activity, revenue activity, order status, products, top categories, and recent orders.
- have a category section where admins can create, view, edit, or delete the category.
- have a store page where admins can see all stores or vendors and see their activity.
- have an order section where admins can see all orders and assign a specific delivery man to deliver the products.
- have an admin section to create and view admins.
- have an employee section to create and view employee.
- have an delivery man section to create and view delivery man.
- have an event section where admins can create their events and see the events as calendars.
- have a FAQ section where admins can see the FAQ and replay it.
- The whole dashboard was responsive and full screen option.

##### Store

- store their information as dashboard.
- There is a product section where store owners can add, view, delete, and update their products.
- There is an orders section where stores can view their orders and accept or delete them.
- There is a transaction section where the store can see their orders and transactions.
- have an events section where you can see all the events that admin created.
- The whole dashboard was responsive and full screen option.

#### Employee

- employees profile section as dashboard.
- see products that the store created
- add their product and place orders.
- The whole dashboard was responsive and full screen option.

#### Deliveryman

- delivery man their order section as dashboard.
- He can send it to the user to give delivery and make payment on that.
- have a map, the delivery man can see all the locations on their map.
- The whole dashboard was responsive, with a full-screen option.

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

## Folder Structure

Here is an overview of your project's folder structure:

```
.
├── .next/                     
├── .vscode/             
│   ├── setting.json/     
│   └── settings.json/ 
├── public/     
│   ├── event.jpg/              
│   ├── mastercard.jpg/              
│   ├── next.svg/  
│   └── vercel.svg/ 
├── src/                        # Source code directory
│   ├── app/                    # Main application code
│   │   ├── (authentication)/  
│   │   │   ├── forget-password/  
│   │   │   ├── login/  
│   │   │   ├── register/  
│   │   │   ├── reset-password/  
│   │   │   ├── style/  
│   │   │   └── layout.txt/ 
│   │   ├── (dashboard)/  
│   │   │   │── admin/ 
│   │   │   │   ├── admins/  
│   │   │   │   ├── category/  
│   │   │   │   ├── dashboard/  
│   │   │   │   ├── delivery/  
│   │   │   │   ├── employees/  
│   │   │   │   ├── event/  
│   │   │   │   ├── faqs/  
│   │   │   │   ├── orders/  
│   │   │   │   └── stores/ 
│   │   │   ├── delivery/ 
│   │   │   │   └── order/ 
│   │   │   ├── employee/ 
│   │   │   │   ├── all-product/  
│   │   │   │   ├── order/  
│   │   │   │   └── settings/ 
│   │   │   ├── store/ 
│   │   │   │   ├── event/  
│   │   │   │   ├── orders/  
│   │   │   │   ├── payments/  
│   │   │   │   ├── products/  
│   │   │   │   ├── seller-details/  
│   │   │   │   └── wallet/ 
│   │   │   ├── layout.module.css/ 
│   │   │   └── layout.txt/ 
│   │   ├── favicon.ico/ 
│   │   ├── global.css/ 
│   │   ├── layout.tsx/ 
│   │   ├── page.module.css/ 
│   │   ├── page.tsx/ 
│   │   └── variable.css/ 
│   ├── assets/         
│   │   └── loading.json/ 
│   ├── components/         
│   │   ├── authPage/
│   │   ├── cart/
│   │   ├── category/
│   │   ├── dashboard/
│   │   ├── employee/
│   │   ├── event/
│   │   ├── orderTable/
│   │   ├── payments/
│   │   ├── products/
│   │   ├── sellerDetails/
│   │   ├── settings/
│   │   ├── store/
│   │   ├── transaction/
│   │   ├── ui/
│   │   ├── users/
│   │   └── wallet/
│   ├── config/         /
│   │   └── constants/
│   ├── constants/         
│   │   ├── image/
│   │   └── base-url.ts/
│   ├── helper/         
│   │   ├── CommonFunction.ts/
│   │   ├── dateFormater.ts/
│   │   └── utils.ts/
│   ├── lib/         
│   │   ├── AntdRegistry.tsx/
│   │   └── Provider.tsx/
│   ├── paths/         
│   │   └── paths.tsx/
│   ├── redux/         
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── category/
│   │   ├── dashboard/
│   │   ├── delivery/
│   │   ├── employees/
│   │   ├── events/
│   │   ├── faqapi/
│   │   ├── order/
│   │   ├── payment/
│   │   ├── product/
│   │   ├── store/
│   │   ├── types/
│   │   ├── api.ts/
│   │   └── store.ts/
│   ├── theme/         
│   │   └── theme.tsx/
│   ├── utils/         
│   │   ├── decodeToken.ts/
│   │   ├── local-storage.ts/
│   │   └── sidebar-links.tsx/
├── .eslintrc
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.lock.json        
├── package.json        
├── tsconfig           
├── tsconfig.json          
└── README.md                    # Project documentation (you are here)

```

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
