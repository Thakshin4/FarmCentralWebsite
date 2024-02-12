# Farm Central Stock Management Website

Farm Central Stock Management Website is a powerful platform designed to streamline the management of farmers and their associated products. It eliminates the need for manual recording and simplifies the process of tracking products. With Farm Central, you can efficiently manage your farm's inventory and improve productivity.

![image](https://github.com/Thakshin4/FarmCentralWebsite/assets/69991863/f7fca013-946c-4482-a742-ead8b614110f)

## Table of Contents
- [Usage](#usage)
  - [Employee Login](#employee-login)
  - [Farmer Login](#farmer-login)
- [Features](#features)
- [Tables](#tables)
  - [users](#users)
  - [products](#products)
- [Credits](#credits)
  - [Svelte - Language](#svelte---language)
  - [SvelteKit - Framework](#sveltekit---framework)
  - [Skeleton UI - UI Toolkit](#skeleton-ui---ui-toolkit)
  - [Supabase - Database](#supabase---database)
  - [Vercel - Website Hosting](#vercel---website-hosting)

## Usage
To access the Farm Central Stock Management Website, simply click on the following link: [Farm Central Website](https://farm-central-website.vercel.app)

Please note that registration is not available on the app. Instead, login details are provided for both employees and farmers.

### Employee Login:
- Email: james@example.com
- Password: mypassword

### Farmer Login:
- Email: william@example.com
- Password: anotherpassword

## Features
The Farm Central Stock Management Website offers the following key features:

1. User Authentication:
   - Login as either an employee or a farmer with the provided credentials.
   - Secure access ensures that only authorized individuals can log in.

2. User Profile:
   - Both employees and farmers can view their details after logging in.
   - Accessible profile information provides a personalized experience.

3. Employee Functionality:
   - Employees can create new farmers, enabling efficient management of farmer records.
   - Simplified farmer creation process improves workflow and organization.

4. Product History:
   - Employees can view a comprehensive history of all products.
   - Access to product records allows for effective monitoring and analysis.

5. Farmer Functionality:
   - Farmers can create new products, streamlining the process of adding inventory.
   - Efficient product creation empowers farmers to manage their stock effectively.

We hope you find the Farm Central Stock Management Website useful in optimizing your farm operations and increasing productivity. If you have any questions or need assistance, please feel free to reach out to our support team.

Happy farming!

## Tables

### users
| userId | email                  | password        | name      | role    |
|--------|------------------------|-----------------|-----------|---------|
| 1      | james@example.com      | mypassword      | James M   | Employee|
| 2      | william@example.com    | anotherpassword | William M | Farmer  |
| 3      | louis@example.com      | apassword       | Louis M   | Farmer  |

### products
| productId | productName | productType | dateSupplied | farmerName |
|-----------|-------------|-------------|--------------|------------|
| 1         | Strawberry  | Fruit       | 2023-06-03   | William M  |
| 2         | Watermelon  | Fruit       | 2023-06-29   | William M  |
| 3         | Tomato      | Fruit       | 2023-06-02   | William M  |
| 4         | Onion       | Vegetable   | 2023-06-09   | William M  |
| 5         | Carrots     | Vegetable   | 2023-06-14   | William M  |
| 6         | Potatoes    | Vegetable   | 2023-06-06   | William M  |

## Credits
### Svelte - Language
https://svelte.dev

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

### SvelteKit - Framework
https://kit.svelte.dev

SvelteKit is built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. It's a love letter to web development.

### Skeleton UI - UI Toolkit
https://www.skeleton.dev

The UI toolkit for Svelte and Tailwind.
Skeleton allows you to create adaptive and accessible interfaces for web apps of any shape or size.

### Supabase - Database
https://app.supabase.com

Supabase is an open source Firebase alternative for building secure and performant Postgres backends with minimal configuration.

### Vercel - Website Hosting
https://vercel.com

Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
