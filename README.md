# Next.js Assistant

## Introduction

Welcome to the Next.js Assistant, your ultimate resource for Next.js development. This project offers a curated collection of snippets, templates, and resources designed to streamline your Next.js application development process.

## Contributing

> This is a contribution first project. Therefore I made it as easy as possible to contribute.

We welcome contributions from everyone. Adding snippets to this project is straightforward—just edit the `README.md` file. There is no `/src` or `/dist` or any code to worry about. Simply add amazing snippets to the relevant section and submit a pull request.

## Getting Started

To begin, simply install the extension from the Visual Studio Code Marketplace. You can access it [here](https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant). Once installed, you can immediately start utilizing the provided snippets to enhance your development workflow.

## Table of Contents

- [Introduction](#introduction)
- [Contributing](#contributing)
- [Getting Started](#getting-started)
- [Table of Contents](#table-of-contents)
- [Snippets](#snippets)
  - [Page Snippets](#page-snippets)
  - [Layout Snippets](#layout-snippets)

## Snippets

### Page Snippets

- https://nextjs.org/docs/app/api-reference/file-conventions/page

```tsx
// ncp - 🔥 Page 🔥 //

export default function Page() {
  return <>Hello Next.js!</>
}
```

### Layout Snippets

- https://nextjs.org/docs/app/api-reference/file-conventions/layout

```tsx
// ncl - 🔥 Layout 🔥 //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```
