

export interface GetCardsApiResponse {
    cards: CardFullData[],
    cardCount: number,
    pageCount: number,
    page: number
}

export interface Battlegrounds {
    hero: boolean
    quest: boolean
    reward: boolean
    duosOnly: boolean
    companionId: number
    image: string
    imageGold: string
}

export interface CardFullData {
    id: number
    collectible: number
    slug: string
    classId: number
    multiClassIds: number[]
    cardTypeId: number
    cardSetId: number
    rarityId: number
    artistName: string
    health: number
    manaCost: number
    armor: number
    name: string
    text: string
    image: string
    imageGold: string
    flavorText: string
    cropImage: string
    childIds: number[]
    isZilliaxFunctionalModule: boolean
    isZilliaxCosmeticModule: boolean
    battlegrounds: Battlegrounds
}
