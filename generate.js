import fs from "fs"
import path from "path"

const readmePath = path.join(__dirname, "README.md")
const outputPath = path.join(__dirname, "dist/readme.code-snippets")

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading README.md:", err)
    return
  }

  const codeBlockRegex = /```tsx([\s\S]*?)```/g
  const snippets = {}
  let match
  while ((match = codeBlockRegex.exec(data)) !== null) {
    const lines = match[1].trim().split("\n")
    const firstLine = lines.shift().trim().replace("// ", "")
    const snippet = {
      name: firstLine.split(" - ")[1],
      prefix: firstLine.split(" - ")[0],
    }
    const restOfSnippet = lines.join("\n").trim()
    snippets[snippet.name] = {
      prefix: snippet.prefix,
      body: restOfSnippet.split("\n"),
    }
  }
  console.log("Found snippets:", Object.keys(snippets).length)

  fs.writeFile(outputPath, JSON.stringify(snippets, null, 2), (err) => {
    if (err) {
      console.error("Error writing to readme.code-snippets:", err)
    } else {
      console.log("Snippets successfully written to readme.code-snippets")
    }
  })
})
