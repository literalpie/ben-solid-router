# Solid Query createQueries prevents page from loading

I am seeing the page fail to load when all of the following are true:

- Solid Query version 5.0.0 or later is installed. (I don't see the issue in `5.0.0-beta.15`)
- SSR is enabled using SolidStart
- Any component in the page uses `createQueries`

To see the relevant code, go to `./src/app.tsx`
