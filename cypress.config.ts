import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth:1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
