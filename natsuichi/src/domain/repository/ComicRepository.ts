import { Comic } from '../models/Comic'
export class ComicRepository {
  comicList: Comic[]
  constructor() {
    const cdnUrlBase = 'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/'
    this.comicList = [
      new Comic({
        title: '8ビートのハイハット',
        description: '第374回スピリッツ賞で努力賞をもらいました。',
        shortDescription: '第374回スピリッツ賞 努力賞受賞作',
        publishedAt: new Date('2022-07-31'),
        maxPageNum: 40,
        id: '1',
        tags: []
      }),
      new Comic(
        {
          title: 'いいやつなんだろうけどさ',
          description: '',
          shortDescription: '',
          publishedAt: new Date('2022-09-15'),
          maxPageNum: 32,
          id: '2',
          tags: []
        }
      ),
      new Comic(
        {
          title: '全部捨てなきゃ思い出す',
          description: '何かを思い出すきっかけって、匂いとか、音楽とか、モノとか、そういう身近にあるものだったりするよなと思い描きました。',
          shortDescription: "",
          publishedAt: new Date('2022-09-15'),
          maxPageNum: 3,
          id: '3',
          tags: []
        }
      ),
      new Comic(
        {
          title: 'はじめまして！安達さん',
          description: 'エッセイ漫画家の真実かもね',
          shortDescription: '',
          publishedAt: new Date('2023-10-07'),
          maxPageNum: 31,
          id: '4',
          tags: []
        }
      ),
      new Comic(
        {
          title: 'さよならバードランド',
          description: '第93回新人コミック大賞 青年部門 佳作受賞作',
          shortDescription: '第93回新人コミック大賞 青年部門 佳作受賞作',
          publishedAt: new Date('2023-12-26'),
          maxPageNum: 45,
          id: '5',
          tags: [],
          other: true,
          url: "https://bigcomics.jp/episodes/545946d760eac"
        }
      ),
      new Comic(
        {
          title: '',
          description: '',
          shortDescription: '',
          publishedAt: new Date('1000-09-15'),
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
