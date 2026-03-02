# Travlr Getaways (CS 465 Full Stack Project) — David Parks

## Project Overview
In this project, I built **Travlr Getaways**, a full stack travel web application using the **MEAN stack** (MongoDB, Express, Angular, Node.js). The application includes:

- A **customer-facing website** served by Express with server-rendered pages
- An **admin single-page application (SPA)** built with Angular to manage trip data
- A **RESTful API** that connects the UI to the MongoDB database
- **Security features** for admin login using token-based authentication (JWT)

This README explains the architecture, functionality, testing approach, and what I learned through the process.

---

## Architecture

### Frontend Comparison: Express (Server-Rendered) vs Angular (SPA)
In this project, I worked with two different styles of frontend development:

- **Express + Handlebars (HBS) server-rendered pages:**  
  The customer-facing site uses Express routes and controllers to render pages on the server. When a user navigates to a page, the server builds the HTML and sends it to the browser. This is great for straightforward navigation and pages that mainly display content.

- **Angular SPA (client-rendered):**  
  The admin side is built as a single-page application. Angular loads the app once and then uses **client-side routing** and **reusable components** to update the UI without full page reloads. The SPA interacts with the backend through API calls (GET/POST/PUT/DELETE), which creates a faster and more interactive admin experience.

**Compare/contrast summary:**  
Express server-rendered pages are simpler and are good for content delivery, while Angular SPAs provide richer interactivity and better support for admin workflows like editing and managing data.

### Why MongoDB (NoSQL) for the Backend?
The backend uses **MongoDB** because it works well for flexible, document-based data like travel trips. Trip information can evolve over time (new fields, optional fields, changes to formatting), and MongoDB allows that without forcing strict table schemas like a relational database would. MongoDB also pairs naturally with Node/Express through **Mongoose**, which makes it easier to define models and perform CRUD operations.

---

## Functionality

### How JSON Differs From JavaScript (and How It Ties Everything Together)
**JavaScript** is a full programming language used to build logic in both the frontend and backend.  
**JSON (JavaScript Object Notation)** is a lightweight data format used for storing and transferring structured information.

In this project, JSON is the “bridge” between the frontend and backend:
- The API returns **JSON trip objects** from MongoDB.
- Angular receives that JSON and renders it into UI components.
- When an admin edits or adds a trip, Angular sends JSON back to the API.
- The API validates and saves that JSON into MongoDB.

So even though JavaScript powers the logic, **JSON is what carries the data** across the full stack.

### Refactoring Examples and Benefits of Reusable UI Components
During the full stack build, I refactored code multiple times to make the project cleaner and easier to maintain. Examples include:

- Moving from static HTML to **Handlebars templates** to render data dynamically.
- Separating backend logic into **routes and controllers** instead of putting everything in one place.
- In Angular, breaking features into reusable components (ex: trip listing, edit trip, add trip, login) instead of duplicating UI logic.

The benefit of refactoring and reusable components is that:
- Updates are easier (fix once, and it applies everywhere)
- The code becomes more readable and organized
- Features can be expanded without rewriting large parts of the UI

---

## Testing

### API Methods, Endpoints, and Security Testing
To make sure the application worked correctly, I tested both functionality and security.

**Methods and endpoints:**
- **GET** was used to retrieve trip data (example: list all trips)
- **POST** was used to create new resources and handle login
- **PUT** was used to update existing trip information
- **DELETE** was used to remove trips

I tested these endpoints using the browser and **Postman**, which helped confirm that the API returned the right data and handled requests correctly.

**Security testing:**
Once I added authentication, testing became more important because I needed to confirm:
- The login endpoint returns a valid token when correct credentials are provided
- Protected admin routes require authentication
- Requests that modify data (POST/PUT/DELETE) should only work when authorized

I learned that security adds another layer of complexity because even if an endpoint works, it still must be tested under both conditions:
- Without a token (should fail)
- With a token (should succeed)

---

## Reflection

### How This Course Helped Me Reach My Professional Goals
This course helped me grow a lot as a developer because it forced me to build something that feels like a real-world application. I didn’t just write code—I had to integrate systems, debug issues across multiple layers, and think about security, structure, and maintainability.

Skills I learned, developed, or strengthened include:
- Designing a full stack **web application architecture**
- Building with frameworks (Express + Angular)
- Using MongoDB and Mongoose for **NoSQL database integration**
- Creating and testing **RESTful APIs**
- Debugging client/server issues (ports, proxies, routing, data shapes, etc.)
- Implementing security basics with login authentication and JWT concepts

Since I’m pursuing a career in IT and networking, this project also helped me become more marketable by proving I can handle complex systems, troubleshoot problems, and understand how modern applications communicate across the stack.

---

## How to Run (High-Level)
1. Start the backend (Express/Node)
2. Start the Angular admin SPA
3. Use Postman (optional) to test API endpoints and login authentication

*(Exact commands depend on your project folder structure and environment setup.)*
