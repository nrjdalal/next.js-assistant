# Next.js Assistant

Build for Production. Designed for Developers.

[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)

> Project just started. Will take some time to get it to a good place. Please be patient.

## What's New?

- [x] Page Snippets
- [x] (Latest)Route Handlers Snippets with Error Handling

## Links

- https://github.com/nrjdalal/nextjs-assistant
- https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant

## Introduction

Welcome to the Next.js Assistant, your ultimate resource for Next.js development. This project offers a curated collection of snippets, templates, and resources designed to streamline your Next.js application development process.

## Contributing

> This is a contribution first project. Therefore I made it as easy as possible to contribute.

We welcome contributions from everyone. Adding snippets to this project is straightforward—just edit the `README.md` file. There is no `/src` or `/dist` or any code to worry about. Simply add amazing snippets to the relevant section and submit a pull request.

## Getting Started

To begin, simply install the extension from the Visual Studio Code Marketplace. You can access it [here](https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant). Once installed, you can immediately start utilizing the provided snippets to enhance your development workflow.

## Table of Contents

- [What's New?](#whats-new)
- [Links](#links)
- [Introduction](#introduction)
- [Contributing](#contributing)
- [Getting Started](#getting-started)
- [Table of Contents](#table-of-contents)
- [Snippets](#snippets)
  - [Page Snippets](#page-snippets)
    - [Page](#page)
    - [Page with Params](#page-with-params)
    - [Page with Search Params](#page-with-search-params)
    - [Page with Client Params](#page-with-client-params)
    - [Page with Client Search Params](#page-with-client-search-params)
  - [Route Handlers](#route-handlers)
    - [HTTP Methods](#http-methods)
    - [HTTP Methods with Cookies](#http-methods-with-cookies)
    - [HTTP Methods with Headers](#http-methods-with-headers)

## Snippets

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

### [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

#### HTTP Methods

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

#### GET Request

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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

```tsx
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
