export class Comic {
  preview: string
  title: string
  description: string
  shortDescription: string
  publishedAt: Date
  pages: string[]
  id: string
  tags: string[]
  other: boolean
  url? : string
  constructor(comicInfo: {
    title: string
    description: string
    shortDescription: string
    publishedAt: Date
    maxPageNum: number
    id: string
    tags: string[]
    other?: boolean
    url? : string
  }) {
    const cdnUrlBase = 'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/'
    this.other = comicInfo.other || false
    if (this.other) {
      this.url = comicInfo.url
    }
    this.pages = [...(new Array(comicInfo.maxPageNum + 1))].map((_, i) => i).map(
      (pageNum) => `${cdnUrlBase}${comicInfo.id}/${pageNum}.webp`
    )
    this.shortDescription = comicInfo.shortDescription
    this.preview = this.pages.shift() as string
    this.title = comicInfo.title
    this.description = comicInfo.description
    this.publishedAt = comicInfo.publishedAt
    this.id = comicInfo.id
    this.tags = comicInfo.tags
  }
}
