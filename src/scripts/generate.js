#!/usr/bin/env bun

import fs from "fs"

const files = fs.readdirSync("src/snippets")

const PackageSnippets = {}

for (const file of files) {
  const name = file.split(".")[0]
  const fileContent = fs.readFileSync(`src/snippets/${file}`, "utf8")

  let modifyContent = fileContent.split("---").map((s) =>
    s
      .trim()
      .split(" -\n\n```jsx\n")
      .map((s) => [s.split("\n")])
      .flat()
  )

  modifyContent = modifyContent.map((arr) => {
    const type = arr[0][0]

    const snippet = `${name.replace("-", " ")} ${type}`
      .split(" ")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" ")
      .replace(",", " ")

    return (PackageSnippets[snippet] = {
      prefix: type,
      body: [arr[1].slice(0, -1)].flat(),
      description: `https://nrjdalal.com/nextjs-15-assistant`,
    })
  })
}

const SnippetsJson = Object.fromEntries(
  Object.entries(PackageSnippets)
    .sort()
    .filter(([key, value]) => value.body[0] !== "")
)

fs.mkdirSync("dist", { recursive: true })

fs.writeFileSync(
  "dist/nrjdalal.code-snippets",
  JSON.stringify(SnippetsJson, null, 2)
)
