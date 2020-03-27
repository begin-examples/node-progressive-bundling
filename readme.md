# Progressive Bundle Example

## Dynamic progressive bundling of frontend code

- frontend source is in `src/views`
- `get /` returns home page
- `get /modules/:type/:module` bundles JavaScript entry files

### Bonus features

- `get /cache` to view and clear the cache

### Usage

- `npm start` to run with bundling enabled
- `npm run debug` to run in debug mode to view module source and waterfall loading
