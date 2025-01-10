# Next.js 15 Assistant

## Layout Snippets

```tsx
// nclr - Root Layout

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
// ncl - Layout

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

```tsx
// nclp - Layout with params

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
