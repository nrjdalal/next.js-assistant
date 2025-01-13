// Snippets are generated from the README.md file only.

import fs from "fs"
import path from "path"

const readmePath = path.join(__dirname, "README.md")

const snippetConfigs = [
  {
    name: "Typescript (TS)",
    regex: /```ts\n([\s\S]*?)```/g,
    filePath: path.join(__dirname, "dist/ts.code-snippets"),
  },
  {
    name: "Typescript React (TSX)",
    regex: /```tsx\n([\s\S]*?)```/g,
    filePath: path.join(__dirname, "dist/tsx.code-snippets"),
  },
]

snippetConfigs.forEach((config) => {
  fs.mkdirSync(path.dirname(config.filePath), { recursive: true })
})

const extractSnippets = (data, regex) => {
  const snippets = {}
  let match
  while ((match = regex.exec(data)) !== null) {
    const lines = match[1].split("\n")
    const firstLine = lines.shift().replaceAll("//", "").trim()
    const snippet = {
      name: firstLine.split(" - ")[1],
      prefix: firstLine.split(" - ")[0],
    }
    const restOfSnippet = lines.join("\n").trim()
    snippets[snippet.name] = {
      prefix: snippet.prefix,
      body: restOfSnippet.replaceAll("// $", "$").split("\n"),
    }
  }
  return snippets
}

const writeSnippetsToFile = (filePath, snippets) => {
  fs.writeFile(filePath, JSON.stringify(snippets, null, 2), (err) => {
    if (err) {
      console.error(`Error writing to ${filePath}:`, err)
    } else {
      console.log(`Snippets successfully written to ${filePath}`)
    }
  })
}

const processSnippets = (data, regex, filePath) => {
  const snippets = extractSnippets(data, regex)
  writeSnippetsToFile(filePath, snippets)
}

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading README.md:", err)
    return
  }

  snippetConfigs.forEach((config) => {
    processSnippets(data, config.regex, config.filePath)
  })
})
