export const windowOpen = {
  methods: {
    windowOpen(link, type = '_blank', options) {
      switch (type) {
        case '_blank':
          window.open(link, type)
          break;
        case 'sharer':
          window.open(
            link,
            type,
            `
            status=${options.status}, 
            toolbar=${options.toolbar}, 
            width=${options.width},
            height=${options.height}`
          )
          break;
      }
    }
  }
}