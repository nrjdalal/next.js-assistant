# Next.js 15 Assistant

The latest and most reliable Next.js snippets for VS Code

## Layout Snippets

```tsx
// nrl - Root Layout //

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

```tsx
// nl - Layout //

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

```tsx
// nlwp - Layout with params //

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(slug)

  return <>{children}</>
}
```

## Route Handler Snippets

```ts
// nrhg - HTTP GET //

export async function GET(request: Request) {}
```
