// from https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export const get = async () => {
    // import files matching wildcard
    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
  
    // Make file data easier to work with
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(2, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
    
    // Sort by descending date
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
    
    // Return body (200 is implicit) (Sveltekit will convert to json and set proper headers automatically)
    return {
      body: sortedPosts
    }
  }