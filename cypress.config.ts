import { defineConfig } from "cypress";
export default defineConfig({
  env: {
    baseUrl: "https://automationexercise.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
