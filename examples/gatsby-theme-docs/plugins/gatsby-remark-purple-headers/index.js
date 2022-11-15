// This example plugin was taken from https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/
const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'heading', (node) => {
    const { depth } = node;
    // Skip if not an h1
    if (depth !== 1) return;

    // Grab the innerText of the heading node
    const text = toString(node);
    const html = `
        <h1 style="color: rebeccapurple">
          ${text}
        </h1>
      `;
    node.type = 'html';
    node.children = undefined;
    node.value = html;
  });

  return markdownAST;
};
