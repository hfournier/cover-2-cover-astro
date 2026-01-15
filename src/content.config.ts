import { defineCollection } from "astro:content"
import { glob, file } from "astro/loaders" // Not available with legacy API
import { z } from "astro/zod"

const bios = defineCollection({
  loader: file("src/data/bios.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      talent: z.string(),
      description: z.string(),
      photo: image(),
      publish: z.boolean()
    })
})

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string(),
      publish: z.boolean(),
      date: z.coerce.date(),
      photo: image().optional(),
      tags: z.array(z.string()).optional()
    })
})

const events = defineCollection({
  loader: file("src/data/events.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      publish: z.boolean(),
      venue: z.string(),
      photo: image(),
      eventLink: z.string().url(),
      location: z.object({ type: z.string(), coordinates: z.array(z.number()) }),
      ticketUrl: z.string().url().optional()
    })
})

const nav = defineCollection({
  loader: file("src/data/nav.json"),
  schema: z.object({
    text: z.string(),
    href: z.string()
  })
})

const photos = defineCollection({
  loader: file("src/data/photos.json"),
  schema: ({ image }) =>
    z.object({
      caption: z.string(),
      photo: image(),
      publish: z.boolean()
    })
})

const videos = defineCollection({
  loader: file("src/data/videos.json"),
  schema: z.object({
    title: z.string(),
    videoId: z.string(),
    publish: z.boolean()
  })
})

export const collections = { bios, blog, events, nav, photos, videos }
