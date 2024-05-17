Requests to a db (currently just firebase) on the client-side go in this /src/db directory.

Each directory is a collection. Each directory has a file for:

1. requests that result in various db operations ocurring.
2. Hooks to perform those same requests and store data in state.

For example, the Blogs directory is responsible for the Blogs (renamed from Texts) collection. Blogs.ts contains functions that perform db operations. useBlogs is a hook for reading from the blogs collection (arguments would dictate a subset of Blogs, but currently there are no args and it reads all Blogs).