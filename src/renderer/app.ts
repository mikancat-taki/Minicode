import * as monaco from "monaco-editor";

const container = document.getElementById("editor-container")!;
const editor = monaco.editor.create(container, {
  value: "// Hello — this is a Monaco editor instance\n",
  language: "typescript",
  theme: "vs-dark",
  automaticLayout: true
});
