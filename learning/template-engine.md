Template engines in Node.js dynamically generate HTML by combining data with templates, streamlining server-side rendering. They are a key topic in the [roadmap.sh](https://roadmap.sh) Node.js learning path, with engines like EJS, Pug, and Marko as subtopics (child nodes) under the parent node "Template Engines."

### Template Engines: Definition, Example, Use Cases, Purpose
- **Definition**: Libraries that allow embedding dynamic data into HTML templates, enabling server-side rendering of dynamic web pages.
- **Purpose**: Simplify HTML generation, improve code maintainability, and separate logic from presentation.
- **Use Cases**: Rendering dynamic web pages (e.g., user profiles, dashboards), generating emails, or building server-rendered apps.
- **Example (Generic Concept)**:
  ```javascript
  // Using a template engine (pseudo-code)
  const template = "<h1>Hello, <%= name %></h1>";
  const data = { name: "Alice" };
  // Engine processes template + data → <h1>Hello, Alice</h1>
  ```

### Types of Template Engines: EJS, Pug, Marko
Below are concise details for EJS, Pug, and Marko, including definition, example code, use cases, and purpose.

#### 1. EJS (Embedded JavaScript)
- **Definition**: A simple template engine that embeds JavaScript directly in HTML using `<% %>` tags, resembling traditional HTML syntax.
- **Purpose**: Easy-to-learn engine for developers familiar with HTML/JavaScript, ideal for straightforward server-side rendering.
- **Use Cases**: Small to medium projects, rapid prototyping, or apps needing minimal templating complexity.
- **Example Code**:
  ```javascript
  // app.js (Node.js with Express)
  const express = require("express");
  const app = express();
  app.set("view engine", "ejs");
  app.get("/", (req, res) => {
    res.render("index", { name: "Bob" });
  });
  app.listen(3000);
  ```
  ```html
  <!-- views/index.ejs -->
  <h1>Hello, <%= name %></h1>
  ```
  **Output**: `<h1>Hello, Bob</h1>`

#### 2. Pug (formerly Jade)
- **Definition**: A concise, indentation-based template engine that uses a minimal syntax instead of traditional HTML tags.
- **Purpose**: Clean, readable templates with less boilerplate, ideal for developers prioritizing concise code.
- **Use Cases**: Complex web apps, projects needing clean template syntax, or teams comfortable with non-HTML syntax.
- **Example Code**:
  ```javascript
  // app.js (Node.js with Express)
  const express = require("express");
  const app = express();
  app.set("view engine", "pug");
  app.get("/", (req, res) => {
    res.render("index", { name: "Charlie" });
  });
  app.listen(3000);
  ```
  ```pug
  <!-- views/index.pug -->
  h1 Hello, #{name}
  ```
  **Output**: `<h1>Hello, Charlie</h1>`

#### 3. Marko
- **Definition**: A high-performance template engine with a component-based approach, optimized for both server-side and client-side rendering.
- **Purpose**: Fast rendering and reusable components for large-scale, performance-critical applications.
- **Use Cases**: Enterprise apps, single-page applications (SPAs), or projects requiring isomorphic rendering.
- **Example Code**:
  ```javascript
  // app.js (Node.js with Express)
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    require("marko/node-require");
    const template = require("./index.marko");
    res.marko(template, { name: "Dave" });
  });
  app.listen(3000);
  ```
  ```marko
  <!-- index.marko -->
  <h1>Hello, ${data.name}</h1>
  ```
  **Output**: `<h1>Hello, Dave</h1>`

### Key Differences
| Engine | Syntax | Learning Curve | Performance | Use Case |
|--------|--------|---------------|-------------|----------|
| **EJS** | HTML-like, JS embedded | Low | Moderate | Simple projects |
| **Pug** | Indentation-based, minimal | Medium | Good | Clean templates |
| **Marko** | Component-based, HTML-like | Medium | High | Large-scale apps |

### Relation to Roadmap.sh
In [roadmap.sh](https://roadmap.sh), "Template Engines" is a parent node under Node.js, emphasizing their role in server-side rendering. EJS, Pug, and Marko are child nodes, representing popular implementations. Mastering these engines helps build dynamic, scalable web applications, aligning with roadmap.sh’s focus on practical Node.js skills.

# Node.js Template Engines

## Overview
**Definition**: Libraries for dynamic HTML generation by combining data with templates.  
**Purpose**: Simplify server-side rendering, separate logic from presentation.  
**Use Cases**: Dynamic web pages, emails, server-rendered apps.  
**Example**: `<h1>Hello, <%= name %></h1>` + `{ name: "Alice" }` → `<h1>Hello, Alice</h1>`

## Types

### 1. EJS
- **Definition**: Embeds JS in HTML with `<% %>`.  
- **Purpose**: Easy for HTML/JS devs, simple rendering.  
- **Use Cases**: Small projects, prototyping.  
- **Code**:
  ```javascript
  app.set("view engine", "ejs");
  app.get("/", (req, res) => res.render("index", { name: "Bob" }));
  ```
  ```html
  <h1>Hello, <%= name %></h1>
  ```

### 2. Pug
- **Definition**: Indentation-based, minimal syntax.  
- **Purpose**: Clean, concise templates.  
- **Use Cases**: Complex apps, clean syntax.  
- **Code**:
  ```javascript
  app.set("view engine", "pug");
  app.get("/", (req, res) => res.render("index", { name: "Charlie" }));
  ```
  ```pug
  h1 Hello, #{name}
  ```

### 3. Marko
- **Definition**: Component-based, high-performance.  
- **Purpose**: Fast, reusable components.  
- **Use Cases**: Enterprise apps, SPAs.  
- **Code**:
  ```javascript
  app.get("/", (req, res) => res.marko(require("./index.marko"), { name: "Dave" }));
  ```
  ```marko
  <h1>Hello, ${data.name}</h1>
  ```

## Comparison
| Engine | Syntax | Learning Curve | Performance | Use Case |
| --- | --- | --- | --- | --- |
| EJS | HTML-like | Low | Moderate | Simple |
| Pug | Minimal | Medium | Good | Clean templates |
| Marko | Component-based | Medium | High | Large-scale |

Below is a concise table summarizing the child nodes (EJS, Pug, Marko) under the "Template Engines" parent node in Node.js, as per the [roadmap.sh](https://roadmap.sh) learning path. The table covers their purpose, functionality, use cases, example code, and differences.


# Node.js Template Engines: EJS, Pug, Marko

## Comparison Table

| Template Engine | Purpose | What It Does | When to Use | Example Code | 
|-----------------|---------|--------------|-------------|--------------|
| **EJS** | Simple server-side rendering for HTML/JS devs | Embeds JS in HTML with `<% %>` for dynamic content | Small/medium projects, rapid prototyping, minimal complexity | ```javascript<br>app.set("view engine", "ejs");<br>app.get("/", (req, res) => res.render("index", { name: "Bob" }));<br>```<br>```html<br><!-- views/index.ejs --><br><h1>Hello, <%= name %></h1><br>```<br>**Output**: `<h1>Hello, Bob</h1>` |
| **Pug** | Clean, concise templates with minimal syntax | Uses indentation-based syntax to generate HTML | Complex apps, teams preferring less boilerplate | ```javascript<br>app.set("view engine", "pug");<br>app.get("/", (req, res) => res.render("index", { name: "Charlie" }));<br>```<br>```pug<br><!-- views/index.pug --><br>h1 Hello, #{name}<br>```<br>**Output**: `<h1>Hello, Charlie</h1>` |
| **Marko** | Fast, reusable components for scalable apps | Component-based rendering, optimized for server/client | Enterprise apps, SPAs, performance-critical projects | ```javascript<br>app.get("/", (req, res) => res.marko(require("./index.marko"), { name: "Dave" }));<br>```<br>```marko<br><!-- index.marko --><br><h1>Hello, ${data.name}</h1><br>```<br>**Output**: `<h1>Hello, Dave</h1>` |

## Differences

| Feature | EJS | Pug | Marko |
|---------|-----|-----|-------|
| **Syntax** | HTML-like, JS embedded | Indentation-based, minimal | Component-based, HTML-like |
| **Learning Curve** | Low | Medium | Medium |
| **Performance** | Moderate | Good | High |
| **Configuration** | Basic | Moderate | Advanced (components) |
| **Use Case** | Simple projects | Clean templates | Large-scale, performant apps |

