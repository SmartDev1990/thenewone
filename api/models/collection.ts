export enum CollectionCategory {
  WEARABLES = 'WEARABLES',
  SPORTS = 'SPORTS',
  ART = 'ART',
  COLLECTIBLES = 'COLLECTIBLES',
  DOMAIN_NAMES = 'DOMAIN NAMES',
  MUSIC = 'MUSIC',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  FASHION = 'FASHION',
  GAMING = 'GAMING',
  UTILITY = 'UTILITY',
  REAL_ESTATE = 'REAL ESTATE',
  CARTOONS = 'CARTOONS',
  MOVIES = 'MOVIES',
  GIFT_CARDS = 'GIFT CARDS'
}

export const CollectionCategoryImages = {
  WEARABLES: '/images/wearables.png',
  SPORTS: '/images/sports.jpg',
  ART: '/images/art.png',
  COLLECTIBLES: '/images/collectibles.png',
  'DOMAIN NAMES': '/images/domain_names.png',
  MUSIC: '/images/music.jpg',
  PHOTOGRAPHY: '/images/photography.jpg',
  FASHION: '/images/fashion.png',
  GAMING: '/images/video-game-assets.png',
  UTILITY: '/images/ticketing.png',
  'REAL ESTATE': '/images/virtual-land.png',
  CARTOONS: '/images/cartoons.png',
  MOVIES: '/images/movies.png',
  'GIFT CARDS': '/images/gift_cards.png'
};

export type CollectionMetadata = {
  name: string;
  category: CollectionCategory;
  imageURI: string;
  bannerURI: string;
  symbol: string;
  owner: string;
  description: string;
  hasExplicitContent: boolean;
};

export interface CollectionModel {
  collectionName: string;
  collectionCategory: CollectionCategory;
  metadata: CollectionMetadata;
  collectionId: string;
  timeStamp: number;
  collectionSymbol: string;
  collectionOwner: string;
  collectionURI: string;
  network: string;
  id: number;
  floorPrice?: number;
}
