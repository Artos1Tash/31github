import { g, config, connector } from "@grafbase/sdk";

const contentful = connector.GraphQL("Contentful", {
  url: g.env("CONTENTFUL_API_URL"),
  headers: (headers) => {
    headers.set("Authorization", `Bearer ${g.env("CONTENTFUL_API_KEY")}`);
  },
});

g.datasource(contentful);

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});
export default config({
  schema: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
