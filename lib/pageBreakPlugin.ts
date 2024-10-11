import { visit } from "unist-util-visit";

export function remarkPageBreak() {
  // @ts-expect-error
  return (tree) => {
    // Visit all elements of type `text`
    visit(tree, "text", (node, index, parent) => {
      if (node.value && node.value.includes("---pagebreak---")) {
        // Split the node value by the custom markdown separator
        const parts = node.value.split("---pagebreak---");

        // Insert a `div.page-break` between parts
        // @ts-expect-error
        const newNodes = parts.reduce((acc, part, i) => {
          if (i > 0) {
            acc.push({
              type: "element",
              tagName: "div",
              properties: { className: ["page-break"] },
              children: [],
            });
          }
          if (part) {
            acc.push({ type: "text", value: part });
          }
          return acc;
        }, []);

        // Replace the original text node with new nodes (parts + divs)
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
