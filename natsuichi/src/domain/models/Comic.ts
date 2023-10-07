export class Comic {
    preview: string
    title: string
    description: string
    publishedAt: Date
    pages: number
    id: string
    tags: string[]
    constructor(preview: string, title: string, description: string, publishedAt: Date, pages: number, id: string, tags: string[]) {
        this.preview = preview
        this.title = title
        this.description = description
        this.publishedAt = publishedAt
        this.pages = pages
        this.id = id
        this.tags = tags
    }
}
