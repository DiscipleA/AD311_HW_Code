# Assignment AD311: Creating a Feature Toggle Component in React

## 📂 Project Overview
This project demonstrates how to implement a **Feature Toggle system in React** using a reusable component.

Feature toggles allow developers to enable or disable features dynamically without changing the underlying codebase.

This pattern is widely used in modern software development for controlled feature releases, A/B testing, and safe deployments.

---

## 🚀 Features
* Reusable `FeatureToggle` React component
* Conditional rendering based on feature flags
* Multiple simulated feature toggles
* Clean component structure
* Easy to extend for real-world feature flag systems

---

## 🛠️ How it Works
The `FeatureToggle` component accepts two props:

| Prop        | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| isEnabled   | boolean | Determines whether the feature is active |
| featureName | string  | Name of the feature                      |

### Logic

If `isEnabled` is true:

```
New Dashboard
```

If `isEnabled` is false:

```
Feature New Dashboard is disabled
```

---

## 📁 Project Structure

```
src
 ├── components
 │     └── FeatureToggle.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## 📦 How to Run

### 1. Clone the repository

```
git clone <your-repo-url>
```

### 2. Navigate to the project

```
cd feature-toggle-demo
```

### 3. Install dependencies

```
npm install
```

### 4. Start development server

```
npm run dev
```

Open the browser at:

```
http://localhost:5173
```

---

## 🎥 Project Demonstration
| Component | Walkthrough Link |
| :--- | :--- |
| **Full Walkthrough & Tests** | [Watch on YouTube](https://youtu.be/PByngvinGKs) |

---

### Example Output

```
Feature Toggle Demo

New Dashboard
Feature Advanced Analytics is disabled
Dark Mode
Feature AI Recommendations is disabled
```

---

### Future Improvements

* Integrate real feature flag services
* Connect to backend feature management
* Add environment-based toggles
* Add automated testing
