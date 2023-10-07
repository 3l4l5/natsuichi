import { Comic } from '../models/Comic'
export class ComicRepository {
  comicList: Comic[]
  constructor() {
    const cdnUrlBase = 'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/'
    this.comicList = [
      new Comic({
        title: '8ビートのハイハット',
        description: '',
        publishedAt: new Date('2022-07-31'),
        maxPageNum: 40,
        id: '1',
        tags: []
      }),
      new Comic(
        {
          title: 'いいやつなんだろうけどさ',
          description: '',
          publishedAt: new Date('2022-09-15'),
          maxPageNum: 32,
          id: '2',
          tags: []
        }
      ),
      new Comic(
        {
          title: '全部捨てなきゃ思い出す',
          description: '',
          publishedAt: new Date('2022-09-15'),
          maxPageNum: 3,
          id: '3',
          tags: []
        }
      ),
      new Comic(
        {
          title: '',
          description: '',
          publishedAt: new Date('2022-09-15'),
          maxPageNum: 1,
          id: '0',
          tags: []
        }
      )
    ]
  }
  async fetchComicList(): Promise<Comic[]> {
    return this.comicList
  }
  async fetchComic(id: string): Promise<Comic> {
    const comic = this.comicList.find((comic) => comic.id === id)
    if (comic === undefined) {
      throw new Error('Comic not found')
    }
    return comic
  }
}
