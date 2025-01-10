# Next.js 15 Assistant

## Layout Snippets

- nclr - Root Layout

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

- ncl - Layout

```jsx
export default async function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <>{children}</>
}
```

- nclwp - Layout with Params

```jsx
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(slug)

  return (
    <>{children}</>
  )
}
```
