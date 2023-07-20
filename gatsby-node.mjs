import { createRequire } from "module";
import { createRemoteFileNode } from "gatsby-source-filesystem";

const require = createRequire(import.meta.url);
const themeOptions = {}; // 必要なオプションを追加してください
const standardBasePath = `/`;

export const createPages = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions;
  const basePath = themeOptions.basePath || standardBasePath;

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  });

  const result = await graphql(`
    query {
      allStrapiPortfolio {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const template = require.resolve('./src/pages/portfolio/portfolio-details.js');
  const portfolios = result.data.allStrapiPortfolio.edges;

  portfolios.forEach((portfolio, index) => {
    const previous = index === 0 ? null : portfolios[index - 1].node
    const next = index === portfolios.length - 1 ? null : portfolios[index + 1].node

    createPage({
      path: `/portfolio/${portfolio.node.id}`,
      component: template,
      context: {
        id: portfolio.node.id,
        previousId: previous ? previous.id : null,
        nextId: next ? next.id : null,
      },
    })
  })
};

export const onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "description") {
    const { richTextFieldName } = node;
    const imageUrls = findImageUrls(richTextFieldName);

    for (const imageUrl of imageUrls) {
      const fileNode = await createRemoteFileNode({
        url: imageUrl,
        parentNodeId: node.id,
        createNode: actions.createNode,
        createNodeId: actions.createNodeId,
        cache,
        store,
      });

      if (fileNode) {
        createNodeField({
          node,
          name: "image___NODE",
          value: fileNode.id,
        });
      }
    }
  }
};

const findImageUrls = (richTextField) => {
  const imageUrls = [];
  const regex = /<img[^>]+src="([^">]+)/g;
  let match;

  while ((match = regex.exec(richTextField)) !== null) {
    imageUrls.push(match[1]);
  }

  return imageUrls;
};
