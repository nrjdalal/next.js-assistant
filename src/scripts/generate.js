const fs = require("fs")
const path = require("path")

const readmePath = path.join(__dirname, "../../README.md")
const outputPath = path.join(__dirname, "../../dist/readme.code-snippets")

// Ensure the dist directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true })

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading README.md:", err)
    return
  }

  const snippets = {}
  const lines = data.split("\n")
  let currentPrefix = ""
  let currentBody = []
  let currentKey = ""

  lines.forEach((line) => {
    if (line.startsWith("### ")) {
      // Save the previous snippet
      if (currentKey) {
        snippets[currentKey] = {
          prefix: currentPrefix,
          body: currentBody,
        }
      }
      // Start a new snippet
      const parts = line.split(" ")
      currentPrefix = parts[1]
      currentKey = parts[2]
      currentBody = []
    } else if (line.trim()) {
      // Add non-empty lines to the current body
      currentBody.push(line)
    }
  })

  // Save the last snippet
  if (currentKey) {
    snippets[currentKey] = {
      prefix: currentPrefix,
      body: currentBody,
    }
  }

  fs.writeFile(outputPath, JSON.stringify(snippets, null, 2), (err) => {
    if (err) {
      console.error("Error writing to readme.code-snippets:", err)
    } else {
      console.log("Snippets successfully written to readme.code-snippets")
    }
  })
})
