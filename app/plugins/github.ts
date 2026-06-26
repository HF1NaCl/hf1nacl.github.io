import { ofetch } from "ofetch";

export default defineNuxtPlugin(() => {
  const github = ofetch.create({
    baseURL: "https://api.github.com",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  return {
    provide: {
      github,
    },
  };
});
