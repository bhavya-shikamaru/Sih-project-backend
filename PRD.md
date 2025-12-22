# Backend Product Requirements Document (PRD)

## Project Name
**UMEEDAI**


---

## 1. Document Information

| Field | Value |
|------|------|
| Document Title | Backend PRD |
| Version | 1.0.0 |
| Last Updated | YYYY-MM-DD |
| Author(s) | Backend Engineering Team |
| Target Audience | Students, Backend Developers, Reviewers |
| API Style | RESTful API |
| Status | Draft / Final |

---

## 2. Backend Overview

### 2.1 Purpose
The backend system provides a **secure, scalable, and well-structured REST API** to manage core resources such as users, products, and orders. It serves as the single source of truth for business logic, data persistence, and integrations.

### 2.2 Scope

**In Scope**
- CRUD APIs for core resources
- Authentication and authorization
- Data validation and centralized error handling
- API documentation and testing

**Out of Scope (MVP)**
- Real-time features (WebSockets)
- Microservices architecture
- Payment gateway integrations

### 2.3 Success Criteria
- REST-compliant endpoints
- Consistent API response formats
- Full CRUD coverage for all resources
- Swagger documentation available
- Basic integration tests passing

---

## 3. Technology Stack

| Layer | Technology | Purpose |
|-----|-----------|--------|
| Runtime | Node.js (LTS) | Non-blocking I/O |
| Language | TypeScript | Type safety |
| Framework | Express.js | API framework |
| Database | MongoDB | NoSQL data store |
| ODM | Mongoose | Schema & validation |
| Documentation | Swagger (OpenAPI) | API documentation |
| Testing | Postman, Jest | Manual & automated tests |

---

## 4. API Architecture

### 4.1 Layered Architecture
Client (Frontend / Postman)

Routes =>
Controllers =>
Services =>
Repositories =>
MongoDB


### 4.2 Layer Responsibilities

| Layer | Responsibility |
|------|---------------|
| Routes | Define API endpoints and HTTP methods |
| Controllers | Handle request/response mapping |
| Services | Business logic and validations |
| Repositories | Database queries and persistence |
| Models | Schema definitions and constraints |

---

## 5. REST Principles & Richardson Maturity Model

### 5.1 REST Constraints

| Constraint | Description |
|----------|-------------|
| Client–Server | Frontend and backend are independent |
| Stateless | Each request contains all required data |
| Cacheable | Responses may be cached |
| Uniform Interface | Consistent resource-based URLs |
| Layered System | Multiple abstraction layers allowed |
| Code on Demand | Optional (not used in this project) |

---

### 5.2 Richardson Maturity Model

| Level | Description | Example |
|-----|------------|--------|
| Level 0 | Single endpoint | `/api` |
| Level 1 | Resource-based | `/users` |
| Level 2 | HTTP methods | GET, POST, PUT, DELETE |
| Level 3 | HATEOAS | Hypermedia links |

**Target Level:** Level 2 (Industry Standard REST)

---

## 6. API Versioning Strategy

### 6.1 URL Versioning
/api/v1/users
/api/v1/products
/api/v1/orders

### 6.2 Semantic Versioning

| Version | Meaning |
|-------|--------|
| MAJOR | Breaking API changes |
| MINOR | Backward-compatible features |
| PATCH | Bug fixes |

### 6.3 npm Version Commands

```bash
npm version patch
npm version minor
npm version major
```

## 7. Application Structure

```
src/
 ├── config/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/
 ├── routes/
 ├── middlewares/
 ├── utils/
 ├── app.ts
 └── server.ts
```
### Naming Conventions

Controllers: user.controller.ts

Services: user.service.ts

Repositories: user.repository.ts

Models: user.model.ts

Routes: user.routes.ts

## 8. API Endpoints Conventions
| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | /api/v1/users     | Create a user       |
| GET    | /api/v1/users     | Retrieve all users  |
| GET    | /api/v1/users/:id | Fetch user by ID    |
| PUT    | /api/v1/users/:id | Update a user by ID |
| DELETE | /api/v1/users/:id | Delete a user by ID |

## 9. Response Format Standards
### Success Response
```
{
success: true,
data: {},
message: "Operation successful"
}
```
### Error Response
```
{
  success: false,
  error: {
    code: "RESOURCE_NOT_FOUND",
    message: "Requested resource does not exist"
  }
}
```
## 10. Error Handling Strategy
### Custom Error Class
```
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
  }
}
```
### Global Error Handling Middleware
```
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message
  });
});
```
## 11. Database Schema Design
### User Schema
```
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
}, { timestamps: true });
```
## 12. Development Workflow
### Order of Development
1. Project initialization

2. Database connection

3. Model definitions

4. Service layer logic

5. Controllers

6. Routes

7. Middleware

8. Documentation and testing

### Git Workflow
- main – production-ready code

- dev – active development

- feature/* – isolated features

## 13. OpenAPI Specification (Swagger)
### Installation
```
npm install swagger-ui-express swagger-jsdoc
```
### Setup
```
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
```
## 14. Testing Strategy
| Test Type | Tool |
|-----------|------|
| Manual Testing | Postman |
| Unit Testing | Jest |
| Integration Testing | Supertest |

## 15. Deployment Plan
### Deployment Platforms

- Render

- Railway

- AWS EC2

### Environment Variables
```
PORT=5000
MONGO_URI=
JWT_SECRET=
```
## 16. Documentation Checklist
- README.md

- API usage examples

- Environment setup instructions

- Swagger documentation

## 17. Success Metrics
- API uptime > 99.9%
- Average Response time < 300ms
- Zero unhandled runtime errors
- Complete Swagger endpoint coverage

## 18. Resources & References
- RESTful API Design: https://restfulapi.net/
- Richardson Maturity Model: https://martinfowler.com/articles/richardsonMaturity
- Express.js Documentation: https://expressjs.com/
- Mongoose Documentation: https://mongoosejs.com/
- Swagger Documentation: https://swagger.io/specification/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- Node.js Documentation: https://nodejs.org/en/docs/
- Jest Documentation: https://jestjs.io/docs/getting-started
- Postman Documentation: https://learning.postman.com/docs/getting-started/introduction/
- Git Documentation: https://git-scm.com/doc
- npm Documentation: https://docs.npmjs.com/
---
*End of Document*