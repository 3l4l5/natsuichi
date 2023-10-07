import { Comic } from "../models/Comic"
export class ComicRepository {
    comicList: Comic[]
    constructor() {
        this.comicList = [
            new Comic(
                'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/0.webp',
                '8ビートのハイハット',
                '',
                new Date('2022-07-31'),
                40,
                '1',
                []
            ),
            new Comic(
                'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/2/0.webp',
                'いいやつなんだろうけどさ',
                '',
                new Date('2022-09-15'),
                32,
                '2',
                []
            ),
            new Comic(
                `https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/3/0.webp`,
                '全部捨てなきゃ思い出す',
                'メルカリのモノガタリ大賞に応募した作品です。\n何かを思い出すきっかけって、匂いとか、音楽とか、モノとか、そういう身近にあるものだったりするよなと思い描きました。',
                new Date('2021-09-09'),
                3,
                '3',
                []
            ),
            new Comic(
                'https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/0/0.webp',
                '',
                '',
                new Date('2999-01-01'),
                0,
                '#',
                []
            )
        ]
    }
    async fetchComicList(): Promise<Comic[]> {
        return this.comicList
    }
    async fetchComic(id :string): Promise<Comic> {
        const comic = this.comicList.find((comic) => comic.id === id)
        if (comic === undefined) {
            throw new Error('Comic not found')
        }
        return comic
    }
}
