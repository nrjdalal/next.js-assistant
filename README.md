# Next.js Assistant

Build for Production. Designed for Developers.

[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)

> Project just started. Will take some time to get it to a good place. Please be patient.

## Links

- https://github.com/nrjdalal/nextjs-assistant
- https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant

## Introduction

Welcome to the Next.js Assistant, your ultimate resource for Next.js development. This project offers a curated collection of snippets, templates, and resources designed to streamline your Next.js application development process.

## Contributing

> This is a contribution first project. Therefore I made it as easy as possible to contribute.

We welcome contributions from everyone. Adding snippets to this project is straightforward—just edit the `MAIN.md` file. Simply add amazing snippets to the relevant section and submit a pull request.

## Getting Started

To begin, simply install the extension from the Visual Studio Code Marketplace. You can access it [here](https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant). Once installed, you can immediately start utilizing the provided snippets to enhance your development workflow.

## Table of Contents

- [Links](#links)
- [Introduction](#introduction)
- [Contributing](#contributing)
- [Getting Started](#getting-started)
- [Roadmap Core](#roadmap-core)
- [Roadmap Extended](#roadmap-extended)
- [Table of Contents](#table-of-contents)
- [Snippets](#snippets)
  - [Directives Snippets](#directives)
    - [Use Cache](#use-cache)
    - [Use Client](#use-client)
    - [Use Server](#use-server)
  - [Components Snippets](#components)
    - [Link](#link)
      - [Link Import](#link-import)
      - [Link Component](#link-component)
      - [Link Component with Target Blank](#link-component-with-target-blank)
  - [Page Snippets](#page-snippets)
    - [Page](#page)
    - [Page with Params](#page-with-params)
    - [Page with Search Params](#page-with-search-params)
    - [Page with Client Params](#page-with-client-params)
    - [Page with Client Search Params](#page-with-client-search-params)
  - [Route Handlers Snippets](#route-handlers-snippets)
    - [HTTP Methods](#http-methods)
    - [HTTP Methods with Cookies](#http-methods-with-cookies)
    - [HTTP Methods with Headers](#http-methods-with-headers)

## Roadmap Core

- [x] Directives
  - [x] use cache
  - [x] use client
  - [x] use server
- [ ] Components
  - [ ] Font
  - [ ] Form
  - [ ] Image
  - [x] Link
  - [ ] Script
- [ ] File Conventions
  - [ ] default.js
  - [ ] error.js
  - [ ] forbidden.js
  - [ ] instrumentation.js
  - [ ] layout.js
  - [ ] loading.js
  - [ ] mdx-components.js
  - [ ] middleware.js
  - [ ] not-found.js
  - [ ] page.js
  - [ ] route.js
  - [ ] Route Segment Config
  - [ ] template.js
  - [ ] unauthorized.js
  - [ ] Metadata Files
- [ ] Functions (0/36)
- [ ] Configuration
  - [ ] next.config.js
  - [ ] TypeScript
  - [ ] ESLint

## Roadmap Extended

- [ ] Drizzle
- [ ] Prettier
- [ ] React Hook Form
- [ ] Shadcn
- [ ] Tanstack Query
- [ ] Zod

## Snippets

### [Directives Snippets](https://nextjs.org/docs/app/api-reference/directives)

#### Use Cache

```tsx
// use-cache - 🔥 use cache 🔥 //

"use cache"
```

#### Use Client

```tsx
// use-client - 🔥 use client 🔥 //

"use client"
```

#### Use Server

```tsx
// use-server - 🔥 use server 🔥 //

"use server"
```

### [Components Snippets](https://nextjs.org/docs/app/api-reference/components)

#### Link

- #### Link Import

```tsx
// import-link - 🔥 Link Import 🔥 //

import Link from "next/link"
```

- #### Link Component

```tsx
// link - 🔥 Link 🔥 //

<Link href="/">Home</Link>
```

- #### Link Component with Target Blank

```tsx
// link-target-blank - 🔥 Link with Target Blank 🔥 //

<Link href="/" target="_blank">
  Home
</Link>
```

#### Image

- #### Image Import

```tsx
// import-image - 🔥 Image Import 🔥 //

import Image from "next/image"
```

- #### Image Component

```tsx
// image - 🔥 Image 🔥 //

<Image src="/nrjdalal.png" width={500} height={500} alt="Author Photo" />
```

#### Script

```tsx
// import-script - 🔥 Script Import 🔥 //

import Script from "next/script"
```

### [Page Snippets](https://nextjs.org/docs/app/api-reference/file-conventions/page)

#### Page

```tsx
// ncp - 🔥 Page 🔥 //

export default function Page() {
  return <>x.com/nrjdalal_com</>
}
```

#### Page with Params

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

#### Page with Search Params

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

#### Page with Client Params

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

#### Page with Client Search Params

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

### [Route Handlers Snippets](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

#### HTTP Methods

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

#### GET Request

```ts
// nrh-get - 🔥 GET Request 🔥 //

export async function GET(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### POST Request

```ts
// nrh-post - 🔥 POST Request 🔥 //

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PUT Request

```ts
// nrh-put - 🔥 PUT Request 🔥 //

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PATCH Request

```ts
// nrh-patch - 🔥 PATCH Request 🔥 //

export async function PATCH(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### DELETE Request

```ts
// nrh-delete - 🔥 DELETE Request 🔥 //

export async function DELETE(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### HTTP Methods with Cookies

#### GET Request with Cookies

```ts
// nrh-get-with-cookies - 🔥 GET Request with Cookies 🔥 //

import { cookies } from "next/headers"

export async function GET(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(await cookies(), query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### POST Request with Cookies

```ts
// nrh-post-with-cookies - 🔥 POST Request with Cookies 🔥 //

import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await cookies(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PUT Request with Cookies

```ts
// nrh-put-with-cookies - 🔥 PUT Request with Cookies 🔥 //

import { cookies } from "next/headers"

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await cookies(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PATCH Request with Cookies

```ts
// nrh-patch-with-cookies - 🔥 PATCH Request with Cookies 🔥 //

import { cookies } from "next/headers"

export async function PATCH(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await cookies(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### DELETE Request with Cookies

```ts
// nrh-delete-with-cookies - 🔥 DELETE Request with Cookies 🔥 //

import { cookies } from "next/headers"

export async function DELETE(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(await cookies(), query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### HTTP Methods with Headers

#### GET Request with Headers

```ts
// nrh-get-with-headers - 🔥 GET Request with Headers 🔥 //

import { headers } from "next/headers"

export async function GET(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(await headers(), query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### POST Request with Headers

```ts
// nrh-post-with-headers - 🔥 POST Request with Headers 🔥 //

import { headers } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await headers(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PUT Request with Headers

```ts
// nrh-put-with-headers - 🔥 PUT Request with Headers 🔥 //

import { headers } from "next/headers"

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await headers(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### PATCH Request with Headers

```ts
// nrh-patch-with-headers - 🔥 PATCH Request with Headers 🔥 //

import { headers } from "next/headers"

export async function PATCH(request: Request) {
  try {
    const body = await request.json()

    // ${0:console.log(await headers(), body)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```

#### DELETE Request with Headers

```ts
// nrh-delete-with-headers - 🔥 DELETE Request with Headers 🔥 //

import { headers } from "next/headers"

export async function DELETE(request: Request) {
  try {
    const query = Object.fromEntries(new URL(request.url).searchParams)

    // ${0:console.log(await headers(), query)}

    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 404 })
    } else {
      return Response.json({ message: "404" }, { status: 404 })
    }
  }
}
```
