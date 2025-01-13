# Next.js Assistant

> Project just started. Will take some time to get it to a good place. Please be patient.

[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)

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
  - [Page Snippets](#1-page-snippets)
    - [1. Page](#11-page)
    - [2. Page with Params](#12-page-with-params)
    - [3. Page with Search Params](#13-page-with-search-params)
    - [4. Page with Client Params](#14-page-with-client-params)
    - [5. Page with Client Search Params](#15-page-with-client-search-params)
  - [2. Route Handlers](#2-route-handlers)
    - [2.1. HTTP Methods](#21-http-methods)
      - [2.1.1. GET Request](#211-get-request)
      - [2.1.2. POST Request](#212-post-request)
      - [2.1.3. PUT Request](#213-put-request)
      - [2.1.4. PATCH Request](#214-patch-request)
      - [2.1.5. DELETE Request](#215-delete-request)
      - [2.1.6. HEAD Request](#216-head-request)

## Snippets

### [1. Page Snippets](https://nextjs.org/docs/app/api-reference/file-conventions/page)

#### 1.1. Page

```tsx
// ncp - 🔥 Page 🔥 //

export default function Page() {
  return <>x.com/nrjdalal_com</>
}
```

#### 1.2. Page with Params

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

#### 1.3. Page with Search Params

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

#### 1.4. Page with Client Params

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

#### 1.5. Page with Client Search Params

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

### [2. Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

#### 2.1. HTTP Methods

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

#### 2.1.1. GET Request

```tsx
// nrh-get - 🔥 GET Request 🔥 //

export async function GET(request: Request) {
  const query = Object.fromEntries(new URL(request.url).searchParams)

  return Response.json({ status: 200 })
}
```

#### 2.1.2. POST Request

```tsx
// nrh-post - 🔥 POST Request 🔥 //

export async function POST(request: Request) {
  const body = await request.json()

  return Response.json({ status: 200 })
}
```

#### 2.1.3. PUT Request

```tsx
// nrh-put - 🔥 PUT Request 🔥 //

export async function PUT(request: Request) {
  const body = await request.json()

  return Response.json({ status: 200 })
}
```

#### 2.1.4. PATCH Request

```tsx
// nrh-patch - 🔥 PATCH Request 🔥 //

export async function PATCH(request: Request) {
  const body = await request.json()

  return Response.json({ status: 200 })
}
```

#### 2.1.5. DELETE Request

```tsx
// nrh-delete - 🔥 DELETE Request 🔥 //

export async function DELETE(request: Request) {
  const query = Object.fromEntries(new URL(request.url).searchParams)

  return Response.json({ status: 200 })
}
```

#### 2.1.6. HEAD Request

```tsx
// nrh-head - 🔥 HEAD Request 🔥 //

export async function HEAD(request: Request) {
  const query = Object.fromEntries(new URL(request.url).searchParams)

  return Response.json({ status: 200 })
}
```
