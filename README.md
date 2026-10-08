# Module 3: Warehouse Intelligence Suite

A state-of-the-art React application designed to orchestrate outbound warehouse logistics using AI agents, real-time tablet verification, and predictive ML modeling.

## Features

*   **Warehouse Supervisor AI Agent (Smart Clipboard):** 
    A ruggedized tablet interface for staging docks. Allows real-time manual override verification of physical units packed vs ERP purchase orders. Instantly catches and flags discrepancies (e.g., 100 units ordered vs 80 packed).
*   **Order-vs-Availability Reconciliation Agent:** 
    A background Auto-Correction Accountant. It automatically catches "Quantity Divergence Exceptions", blocks the ERP billing engine, modifies the invoice to reflect true physical quantities, and generates "Backorder" tags to alert Procurement.
*   **Reverse Logistics Prediction Model (Coming Soon):** 
    Predictive ML scoring for inbound return probabilities. Flags high-risk shipments for proactive Quality Assurance (QA) checks.
*   **Built-In Analytics Dashboard (Coming Soon):** 
    Power BI-style layout for warehouse managers. Tracks live stock levels, fulfillment breakdowns, and AI return forecasts.

## Tech Stack

*   **Framework:** React 18 with Vite
*   **Routing:** React Router v6
*   **Styling:** Tailwind CSS v3
*   **Icons:** Lucide React
*   **Animations:** Framer Motion
*   **Deployment:** Hostinger VPS via GitHub Actions (CI/CD)

## Getting Started

### Prerequisites

Ensure you have Node.js (v18 or higher) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/HelloWorld-Farhan/Industrial_Warehouse_Module3.git
    cd Industrial_Warehouse_Module3
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173/`

## Deployment

This application is configured for automated CI/CD deployment to a Hostinger VPS. Pushing code to the `main` branch will automatically trigger a GitHub Action that builds the Vite app and securely transfers the `dist` files to the isolated Nginx directory `/var/www/module3_ai_agent` on the server.
