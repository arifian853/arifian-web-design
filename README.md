# Arifian Saputra — Web Designer Portfolio

> **Quiet expression. Tonal depth. Editorial composition. Product rigor.**

A premium single-page portfolio for **Arifian Saputra**, Web Designer & Creative Technologist. Built adhering to the **Subtle Design System** (*Soft Editorial Materialism*), combining editorial composition, tonal materiality, rounded geometry, and Material-inspired product ergonomics across **8 harmonized moods**.

---

## ✨ Features & Highlights

- **Soft Editorial Materialism**: Built without harsh neon gradients or noisy animations. Hierarchy is created through tonal surface contrast, deliberate whitespace, and expressive typography.
- **8 Canonical Moods with Real-Time Switcher**:
  - 🌾 **Beige** *(Default / Warm & Approachable)*
  - 🌊 **Teal** *(Fresh & Balanced)*
  - 🌲 **Forest** *(Natural & Grounded)*
  - 🏢 **Slate** *(Professional & Neutral)*
  - 🪻 **Lavender** *(Soft & Thoughtful)*
  - 🪵 **Rosewood** *(Warm & Intimate)*
  - 🖤 **Graphite** *(Technical Dark)*
  - 🌌 **Sky Night** *(Nocturnal Calm Dark)*
- **Dual Typography Scale**:
  - **Lexend Deca**: Prominent display titles, hero headings, and section titles.
  - **Inclusive Sans**: Accessible body copy, labels, and interactive controls.
  - **JetBrains Mono**: Machine-readable metadata, numbers, and technical tags.
- **Soft Mosaic Project Grid**: Asymmetrical grid layout showcasing flagship design systems, enterprise LMS platforms, open-source community portals, and e-commerce storefronts.
- **Interactive Contact & Ergonomics**:
  - Instant one-click email copying with visual feedback.
  - Interactive message inquiry card with client-side validation.
  - Smooth anchor navigation and sticky adaptive header.
- **100% Type-Safe & High Performance**: Powered by React 19, Vite, TypeScript, and Tailwind CSS v4 with zero lint errors (`oxlint`).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- **Design Specification**: [Subtle Design System](DESIGN.md)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/arifian853/arifian-web-design.git
cd arifian-web-design
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

The output will be generated inside the `dist/` directory.

### Code Quality & Linting

Run Oxlint to audit code cleanliness:

```bash
npm run lint
```

---

## 📂 Project Structure

```text
arifian-web-design/
├── src/
│   ├── assets/             # Static brand images & icons
│   ├── components/         # Modular UI components
│   │   ├── About.tsx       # Narrative & 4 core design pillars
│   │   ├── Contact.tsx     # Direct email copy & inquiry form
│   │   ├── Footer.tsx      # Editorial footer & back to top
│   │   ├── Header.tsx      # Adaptive navbar & mood selector
│   │   ├── Hero.tsx        # Tonal hero & live availability pill
│   │   ├── MoodSwitcher.tsx# Mood dropdown & picker component
│   │   ├── Projects.tsx    # Soft Mosaic project showcase & filters
│   │   └── Skills.tsx      # Capabilities & toolchain breakdown
│   ├── types/
│   │   └── mood.ts         # Mood token types & definitions
│   ├── App.tsx             # Root page assembler
│   ├── index.css           # Token variables & mood stylesheets
│   └── main.tsx            # React DOM entry point
├── DESIGN.md               # Subtle Design System canonical specification
├── ImplementationPlan.md   # Project scope & acceptance checklist
├── package.json
└── vite.config.ts
```

---

## 👤 Author

**Arifian Saputra**
- **Role**: Web Designer & Tech Trainer at Infinite Learning Indonesia
- **Community**: Batam Linux User Group (BLUG)
- **Website**: [arifian.dev](https://arifian.dev)
- **GitHub**: [@arifian853](https://github.com/arifian853)
- **Email**: [arifiansaputra43@gmail.com](mailto:arifiansaputra43@gmail.com)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
