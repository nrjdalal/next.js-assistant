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

- [x] [Directives](#directives)
  - [x] [use cache](#use-cache)
  - [x] [use client](#use-client)
  - [x] [use server](#use-server)
- [x] [Components](#components)
  - [ ] Font (Future)
  - [ ] Form (Future)
  - [x] [Image](#image)
  - [x] [Link](#link)
  - [x] [Script](#script)
- [ ] File Conventions
  - [ ] default.js (Future)
  - [x] [error.js](#error)
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

## Roadmap Extras

- [ ] Drizzle
- [ ] Prettier
- [ ] React Hook Form
- [ ] Shadcn
- [ ] Tanstack Query
- [ ] Zod

### [Directives](https://nextjs.org/docs/app/api-reference/directives)

#### [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache)

```tsx
// use-cache - 🔥 use cache 🔥 //

"use cache"
```

#### [use client](https://nextjs.org/docs/app/api-reference/directives/use-client)

```tsx
// use-client - 🔥 use client 🔥 //

"use client"
```

#### [use server](https://nextjs.org/docs/app/api-reference/directives/use-server)

```tsx
// use-server - 🔥 use server 🔥 //

"use server"
```

### [Components](https://nextjs.org/docs/app/api-reference/components)

#### [Image](https://nextjs.org/docs/app/api-reference/components/image)

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

#### [Link](https://nextjs.org/docs/app/api-reference/components/link)

- #### Link Import

```tsx
// import-link - 🔥 Link Import 🔥 //

import Link from "next/link"
```

- #### Link Component

```tsx
// link - 🔥 Link 🔥 //

<Link href="___/___">__Home__</Link>
```

- #### Link Component with Target Blank

```tsx
// link-with-target-blank - 🔥 Link with Target Blank 🔥 //

<Link href="___/___" target="_blank">
  __Home__
</Link>
```

#### [Script](https://nextjs.org/docs/app/api-reference/components/script)

- #### Script Import

```tsx
// import-script - 🔥 Script Import 🔥 //

import Script from "next/script"
```

- #### Script Component

```tsx
// script - 🔥 Script 🔥 //

<Script src="https://example.com/script.js" />
```

### [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

#### [Error](https://nextjs.org/docs/app/api-reference/file-conventions/error)

```tsx
// export-error - 🔥 Error 🔥 //

"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
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
