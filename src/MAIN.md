# Next.js Assistant

Build for Production. Designed for Developers.

[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/nrjdalal.nextjs-assistant?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName)

> Project just started. Will take some time to get it to a good place. Please be patient.

## Links

- https://github.com/nrjdalal/next.js-assistant
- https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant

## Introduction

Welcome to the Next.js Assistant, your ultimate resource for Next.js development. This project offers a curated collection of snippets, templates, and resources designed to streamline your Next.js application development process.

## Contributing

> This is a contribution first project. Therefore I made it as easy as possible to contribute.

We welcome contributions from everyone. Adding snippets to this project is straightforward—just edit the `MAIN.md` file. Simply add amazing snippets to the relevant section and submit a pull request.

## Getting Started

To begin, simply install the extension from the Visual Studio Code Marketplace. You can access it [here](https://marketplace.visualstudio.com/items?itemName=nrjdalal.nextjs-assistant). Once installed, you can immediately start utilizing the provided snippets to enhance your development workflow.

## Table of Contents

| Snippets                                  | Description                          |
| ----------------------------------------- | ------------------------------------ |
| [**Directives**](#directives)             |                                      |
| `use-cache`                               | 🔥 use cache 🔥                      |
| `use-client`                              | 🔥 use client 🔥                     |
| `use-server`                              | 🔥 use server 🔥                     |
| [**Components**](#components)             |                                      |
| [**Image**](#image)                       |                                      |
| `import-image`                            | 🔥 Image Import 🔥                   |
| `image`                                   | 🔥 Image 🔥                          |
| [**Link**](#link)                         |                                      |
| `import-link`                             | 🔥 Link Import 🔥                    |
| `link`                                    | 🔥 Link 🔥                           |
| `link-with-target-blank`                  | 🔥 Link with Target Blank 🔥         |
| [**Script**](#script)                     |                                      |
| `import-script`                           | 🔥 Script Import 🔥                  |
| `script`                                  | 🔥 Script 🔥                         |
| [**File Conventions**](#file-conventions) |                                      |
| [**error.tsx**](#errortsx)                |                                      |
| `export-error`                            | 🔥 Error 🔥                          |
| [**layout.tsx**](#layouttsx)              |                                      |
| `export-layout`                           | 🔥 Layout 🔥                         |
| `export-root-layout`                      | 🔥 Root Layout 🔥                    |
| [**page.tsx**](#pagetsx)                  |                                      |
| `export-page`                             | 🔥 Page 🔥                           |
| `export-page-with-params`                 | 🔥 Page with Params 🔥               |
| `export-page-with-searchParams`           | 🔥 Page with Search Params 🔥        |
| `export-page-with-client-params`          | 🔥 Page with Client Params 🔥        |
| `export-page-with-client-searchParams`    | 🔥 Page with Client Search Params 🔥 |
| [**route.ts**](#routets)                  |                                      |
| `export-async-get`                        | 🔥 GET Request 🔥                    |
| `export-async-post`                       | 🔥 POST Request 🔥                   |
| `export-async-put`                        | 🔥 PUT Request 🔥                    |
| `export-async-patch`                      | 🔥 PATCH Request 🔥                  |
| `export-async-delete`                     | 🔥 DELETE Request 🔥                 |
| `export-async-get-with-cookies`           | 🔥 GET Request with Cookies 🔥       |
| `export-async-post-with-cookies`          | 🔥 POST Request with Cookies 🔥      |
| `export-async-put-with-cookies`           | 🔥 PUT Request with Cookies 🔥       |
| `export-async-patch-with-cookies`         | 🔥 PATCH Request with Cookies 🔥     |
| `export-async-delete-with-cookies`        | 🔥 DELETE Request with Cookies 🔥    |
| `export-async-get-with-headers`           | 🔥 GET Request with Headers 🔥       |
| `export-async-post-with-headers`          | 🔥 POST Request with Headers 🔥      |
| `export-async-put-with-headers`           | 🔥 PUT Request with Headers 🔥       |
| `export-async-patch-with-headers`         | 🔥 PATCH Request with Headers 🔥     |
| `export-async-delete-with-headers`        | 🔥 DELETE Request with Headers 🔥    |
| [**Configuration**](#configuration)       |                                      |
| `next-config-ts`                          | 🔥 Next Config 🔥                    |
| [**Drizzle**](#drizzle)                   |                                      |
| `drizzle-config`                          | 🔥 Drizzle Config 🔥                 |
| `drizzle-schema`                          | 🔥 Drizzle Schema 🔥                 |

## Roadmap

- [x] [Directives](#directives)
  - [x] [use cache](#use-cache)
  - [x] [use client](#use-client)
  - [x] [use server](#use-server)
- [x] [Components](#components)
  - [-] Font
  - [-] Form
  - [x] [Image](#image)
  - [x] [Link](#link)
  - [x] [Script](#script)
- [ ] File Conventions
  - [ ] default.tsx
  - [x] [error.tsx](#errortsx)
  - [ ] forbidden.tsx
  - [ ] instrumentation.tsx
  - [ ] [layout.tsx](#layouttsx)
  - [ ] loading.tsx
  - [ ] mdx-components.tsx
  - [ ] middleware.tsx
  - [ ] not-found.tsx
  - [x] [page.tsx](#pagetsx)
  - [x] [route.ts](#routets)
  - [ ] Route Segment Config
  - [ ] template.tsx
  - [ ] unauthorized.tsx
  - [ ] Metadata Files
- [ ] Functions (0/36)
- [x] Configuration
  - [x] next.config.js
  - [-] TypeScript
  - [-] ESLint

## Roadmap Extras

- [ ] Drizzle
- [ ] Prettier
- [ ] React Hook Form
- [ ] Shadcn
- [ ] Tanstack Query
- [ ] Zod

<!-- ~ Directives -->

### [Directives](https://nextjs.org/docs/app/api-reference/directives)

<!-- ~ use cache -->

#### [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache)

```tsx
// use-cache - 🔥 use cache 🔥 //

"use cache"
```

<!-- ~ use client -->

#### [use client](https://nextjs.org/docs/app/api-reference/directives/use-client)

```tsx
// use-client - 🔥 use client 🔥 //

"use client"
```

<!-- ~ use server -->

#### [use server](https://nextjs.org/docs/app/api-reference/directives/use-server)

```tsx
// use-server - 🔥 use server 🔥 //

"use server"
```

<!-- ~ Components -->

### [Components](https://nextjs.org/docs/app/api-reference/components)

<!-- ~ Image -->

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

<!-- ~ Link -->

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

<!-- ~ Script -->

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

<!-- ~ File Conventions -->

### [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

<!-- ~ error.tsx -->

#### [error.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/error)

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

<!-- ~ layout.tsx -->

#### [layout.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/layout)

- #### Layout

```tsx
// export-layout - 🔥 Layout 🔥 //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- #### Root Layout

```tsx
// export-root-layout - 🔥 Root Layout 🔥 //

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

<!-- ~ page.tsx -->

#### [page.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/page)

- #### Page

```tsx
// export-page - 🔥 Page 🔥 //

export default function Page() {
  return <>x.com/nrjdalal_com</>
}
```

- #### Page with Params

```tsx
// export-page-with-params - 🔥 Page with Params 🔥 //

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return <>{slug}</>
}
```

- #### Page with Search Params

```tsx
// export-page-with-searchParams - 🔥 Page with Search Params 🔥 //

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { query } = await searchParams

  return <>{query}</>
}
```

- #### Page with Client Params

```tsx
// export-page-with-client-params - 🔥 Page with Client Params 🔥 //

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

- #### Page with Client Search Params

```tsx
// export-page-with-client-searchParams - 🔥 Page with Client Search Params 🔥 //

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

<!-- ~ route.ts -->

#### [route.ts](https://nextjs.org/docs/app/api-reference/file-conventions/route)

- #### GET

```ts
// export-async-get - 🔥 GET Request 🔥 //

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

- #### POST

```ts
// export-async-post - 🔥 POST Request 🔥 //

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

- #### PUT

```ts
// export-async-put - 🔥 PUT Request 🔥 //

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

- #### PATCH

```ts
// export-async-patch - 🔥 PATCH Request 🔥 //

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

- #### DELETE

```ts
// export-async-delete - 🔥 DELETE Request 🔥 //

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

- #### GET Request with Cookies

```ts
// export-async-get-with-cookies - 🔥 GET Request with Cookies 🔥 //

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

- #### POST Request with Cookies

```ts
// export-async-post-with-cookies - 🔥 POST Request with Cookies 🔥 //

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

- #### PUT Request with Cookies

```ts
// export-async-put-with-cookies - 🔥 PUT Request with Cookies 🔥 //

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

- #### PATCH Request with Cookies

```ts
// export-async-patch-with-cookies - 🔥 PATCH Request with Cookies 🔥 //

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

- #### DELETE Request with Cookies

```ts
// export-async-delete-with-cookies - 🔥 DELETE Request with Cookies 🔥 //

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

- #### GET Request with Headers

```ts
// export-async-get-with-headers - 🔥 GET Request with Headers 🔥 //

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

- #### POST Request with Headers

```ts
// export-async-post-with-headers - 🔥 POST Request with Headers 🔥 //

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

- #### PUT Request with Headers

```ts
// export-async-put-with-headers - 🔥 PUT Request with Headers 🔥 //

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

- #### PATCH Request with Headers

```ts
// export-async-patch-with-headers - 🔥 PATCH Request with Headers 🔥 //

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

- #### DELETE Request with Headers

```ts
// export-async-delete-with-headers - 🔥 DELETE Request with Headers 🔥 //

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

<!-- ~ Configuration -->

### [Configuration](https://nextjs.org/docs/app/api-reference/config)

- #### [next.config.ts](https://nextjs.org/docs/app/api-reference/config/next-config-js)

```ts
// next-config-ts - 🔥 Next Config 🔥 //

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
}

export default nextConfig
```

<!-- ~ Drizzle -->

### Drizzle

- #### Drizzle Config

```ts
// drizzle-config - 🔥 Drizzle Config 🔥 //

import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  schema: "./src/db",
  out: "./src/db/drizzle",
})
```

- #### Drizzle Schema

```ts
// drizzle-schema - 🔥 Drizzle Schema 🔥 //

import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js"
import postgres from "postgres"

declare global {
  // eslint-disable-next-line
  var db: PostgresJsDatabase
}

let db: PostgresJsDatabase

if (process.env.NODE_ENV === "production") {
  db = drizzle({
    client: postgres(process.env.POSTGRES_URL!, {
      connect_timeout: 10000,
      idle_timeout: 30000,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  })
} else {
  if (!global.db) {
    global.db = drizzle({
      client: postgres(process.env.POSTGRES_URL!, {
        connect_timeout: 10000,
        idle_timeout: 30000,
      }),
    })
  }
  db = global.db
}

export { db }
```
