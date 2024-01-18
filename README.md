# React Internship Assesment by GrowMeOrganic

## Feature 1: First Page of the Application

### Objective

A form to collect user information, save it in local storage, and route the user to the second page upon completion. User is redirected to login page if attempting to access the second page without providing necessary details.

### Implementation

1. **Form Fields:**

   - Name
   - Phone number
   - Email

2. **Action:**

   - Upon completion, save user details in local storage.
   - Route the user to the second page.

3. **Validation:**
   - If user attempts to access the second page without entering details, redirect them to the first page with a corresponding message.

---

## Feature 2: Second Page of the Application

### Objective

Fetch JSON details from an API and display the data in a table using the MUI React Data Grid package.

### Implementation

1. **API:**

   - Fetch data from any API returning a list of JSON data (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)).

2. **Typescript:**

   - Convert retrieved JSON data into a model/interface using Typescript.
   - Reference: [Typescript Interfaces](https://www.educative.io/blog/typescript-interfaces)

3. **Table Display:**
   - Utilize MUI React Data Grid to present the data in a table.

---

## Feautre 3: Second Page of the Application

### Objective

Create a component displaying a list of departments with expandable and collapsible sub-departments. Ensure proper functionality and avoid errors within this critical component.

### Implementation

1. **Data Source:**

   - Utilize the provided JSON data ([Google Docs](https://docs.google.com/document/d/1uQCFny5aXfMD9v2TPy3rbE8EHw-xZVdZfj4g-2Yv6IU/edit?usp=sharing)).

2. **Component Features:**

   - List of departments with sub-departments.
   - User-expandable/collapsible sub-departments via icons.

3. **User Interactions:**

   - Selecting a department should select all corresponding sub-departments.
   - If all sub-departments are selected, the parent department should also be selected.

4. **Restrictions:**

   - Use MUI library components only (excluding MUI/Tree).
   - Do not use any external libraries apart from MUI.
   - Strictly use Typescript.

5. **UI Example:**
   - Example UI provided, pixel perfection not required.

## Installation Process

1. **Clone Repository:**

   ```bash
   git clone [repository_url]
   ```

2. **Open in Editor :**
   ```bash
   Open the project in your preferred code editor (e.g., VS Code).
   ```

3. **Install Dependencies: :**
   ```bash
   npm install
   ```

4. **Run Development Server:: :**
   ```bash
   npm run dev
   ```



