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
    - [1. Page](#1-page)
    - [2. Page with Params](#2-page-with-params)
    - [3. Page with Search Params](#3-page-with-search-params)
    - [4. Page with Client Params](#4-page-with-client-params)
    - [5. Page with Client Search Params](#5-page-with-client-search-params)

## Snippets

### [Page Snippets](https://nextjs.org/docs/app/api-reference/file-conventions/page)

#### 1. Page

```tsx
// ncp - 🔥 Page 🔥 //

export default function Page() {
  return <>x.com/nrjdalal_com</>
}
```

#### 2. Page with Params

```tsx
// ncp-with-params - 🔥 Page with Params 🔥 //

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return <>{slug}</>
}
```

| Example Route                        | URL         | params                                |
| ------------------------------------ | ----------- | ------------------------------------- |
| `app/shop/[slug]/page.js`            | `/shop/1`   | Promise<{ slug: '1' }>                |
| `app/shop/[category]/[item]/page.js` | `/shop/1/2` | Promise<{ category: '1', item: '2' }> |
| `app/shop/[...slug]/page.js`         | `/shop/1/2` | Promise<{ slug: ['1', '2'] }>         |

#### 3. Page with Search Params

```tsx
// ncp-with-searchParams - 🔥 Page with Search Params 🔥 //

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { query } = await searchParams

  return <>{query}</>
}
```

| Example URL     | searchParams                |
| --------------- | --------------------------- |
| `/shop?a=1`     | Promise<{ a: '1' }>         |
| `/shop?a=1&b=2` | Promise<{ a: '1', b: '2' }> |
| `/shop?a=1&a=2` | Promise<{ a: ['1', '2'] }>  |

#### 4. Page with Client Params

```tsx
// ncp-with-client-params - 🔥 Page with Client Params 🔥 //

"use client"

import { use } from "react"

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return <>{slug}</>
}
```

#### 5. Page with Client Search Params

```tsx
// ncp-with-client-searchParams - 🔥 Page with Client Search Params 🔥 //

"use client"

import { use } from "react"

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { query } = use(searchParams)

  return <>{query}</>
}
```
