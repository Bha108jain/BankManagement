# HackerBank - Angular Banking App

An Angular 17 banking application with filtering and sorting functionality.

## Features
- Display all transactions from the data source
- Filter transactions by date using a date picker
- Sort transactions by amount (ascending) by clicking the **Amount ($)** header
- Bootstrap 5 for responsive styling

## Getting Started

### Prerequisites
- Node.js (v18+)
- Angular CLI 17

### Installation

```bash
npm install
```

### Run the App

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Run Tests

```bash
ng test
```

## Project Structure

```
src/
└── app/
    ├── record-table/
    │   ├── record-table.component.ts     # Main logic (filter + sort)
    │   ├── record-table.component.html   # Table template
    │   ├── record-table.component.css    # Component styles
    │   └── record-table.component.spec.ts
    ├── bank.ts                           # Transaction data source
    ├── app.component.ts
    ├── app.component.html
    ├── app.routes.ts
    └── app.config.ts
```
