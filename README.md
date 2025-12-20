# Netflix Clone (Frontend)

## Live Demo [Netflix Clone](https://netflix-clone-frontend-delta-ashen.vercel.app/)

## About The Project

This project is a high-fidelity frontend clone of the Netflix interface, built to demonstrate mastery in **Modern React**, **Advanced CSS/Tailwind**, and **Global State Management**.

The goal was not just to copy the look, but to replicate the *feel* of the application—including the complex hover animations, responsive layouts, and modal interactions that make the original app feel premium.

### Key Features

* **🎬 Interactive Billboard:** A full-width hero section with an auto-playing video background and layered content, responsive to screen width.
* **✨ Advanced "Hover Cards":** Custom-built movie cards that expand, reveal more info, and handle z-index layering seamlessly upon hover (mimicking the "Pop-up" effect).
* **🔎 Global Info Modal:** A detailed overlay modal managed by **Zustand** (global state), decoupling the trigger button (deep in the component tree) from the modal (at the root).
* **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop using Tailwind's utility-first breakpoint system.
* **⚡ Fast & Type-Safe:** Built with **Vite** for instant HMR and **TypeScript** for robust component logic.

---

## Tech Stack

* **Framework:** [React](https://reactjs.org/) (via Vite)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---


## 🔧 Getting Started

To run this project locally, follow these steps:

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/netflix-clone.git](https://github.com/YOUR_USERNAME/netflix-clone.git)
    cd netflix-clone
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

---

## 🧠 Code Highlights

### Global State with Zustand
To avoid "Prop Drilling" (passing generic open/close functions down multiple levels), I implemented a global store hook.

```typescript
// hooks/useInfoModal.ts
const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));
```

### CSS Scaling Transformation
Implementing the "Pop-up" card required complex CSS transition logic to ensure the card scales up without pushing neighboring elements around awkwardly.

```typescript
// CSS Logic for the hover effect
className="
    opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full 
    scale-0 group-hover:scale-110 
    group-hover:-translate-y-[6vw] 
    group-hover:translate-x-[2vw] 
    group-hover:opacity-100"
```
---

### Roadmap / Future Improvements
*[ ] Authentication: Integrate Auth.js or Clerk for real user login.

*[ ] Backend: Connect to a real database (Supabase/MongoDB) to fetch dynamic movie data.

*[ ] Video Player: Implement a full-screen video player for the "Play" button.




