import fs from "fs"
import path from "path"

const readmePath = path.join(__dirname, "../../README.md")
const outputPath = path.join(__dirname, "../../dist/readme.code-snippets")

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading README.md:", err)
    return
  }

  const snippets = {}

  fs.writeFile(outputPath, JSON.stringify(snippets, null, 2), (err) => {
    if (err) {
      console.error("Error writing to readme.code-snippets:", err)
    } else {
      console.log("Snippets successfully written to readme.code-snippets")
    }
  })
})
