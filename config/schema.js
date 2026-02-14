import { boolean, duration } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar, json } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar().notNull(),
  name: varchar(),
  description: varchar(),
  noOfChapters: integer().notNull(),
  includeVideo: boolean().default(false),
  level: varchar().notNull(),
  category: varchar(),
  courseBanner: varchar(),
  userEmail: varchar('userEmail').references(() => usersTable.email)
});

export const chaptersTable = pgTable("chapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: varchar().notNull(),
  chapterId: integer().notNull(), // This will serve as the order/index
  name: varchar().notNull(),
  duration: varchar(),
  topics: json(),
  content: json(),
  videoId: varchar().notNull().default('pending')
});
