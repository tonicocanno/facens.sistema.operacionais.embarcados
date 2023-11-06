import { Hotel } from '../../contracts/hotel/hotel.interface';

export const HOTELS_MOCK: Hotel[] = [
  {
    id: 'hotel1',
    name: 'Hotel Lux',
    address: {
      city: 'São Paulo',
      street: 'Av. Paulista',
      zipNumber: '01310-100',
      number: 123,
      neighborhood: 'Bela Vista',
      country: 'Brasil',
      state: 'SP',
    },
    starsQuantity: 5,
    description: 'Um hotel luxuoso com vista para a Avenida Paulista.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: false,
    category: 'luxuoso',
    parkingLotsQuantity: 50,
    roomCategories: ['1_single_bed', '2_single_bed', '1_couple_bed'],
  },
  {
    id: 'hotel1_sp',
    name: 'Hotel World',
    address: {
      city: 'São Paulo',
      street: 'Av. Paulista',
      zipNumber: '01310-100',
      number: 321,
      neighborhood: 'Bela Vista',
      country: 'Brasil',
      state: 'SP',
    },
    starsQuantity: 5,
    description: 'Um hotel luxuoso com vista para a Avenida Paulista, e com a melhor refeição do país.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: true,
    category: 'luxuoso',
    parkingLotsQuantity: 100,
    roomCategories: ['1_single_bed', '2_single_bed', '1_couple_bed'],
  },
  {
    id: 'hotel2',
    name: 'Hotel Econ',
    address: {
      city: 'Rio de Janeiro',
      street: 'Av. Atlântica',
      zipNumber: '22021-001',
      number: 456,
      neighborhood: 'Copacabana',
      country: 'Brasil',
      state: 'RJ',
    },
    starsQuantity: 3,
    description: 'Um hotel econômico perto da praia de Copacabana.',
    hasBreakfast: true,
    hasLunch: false,
    hasDinner: false,
    category: 'econômico',
    roomCategories: ['2_single_bed'],
  },
  {
    id: 'hotel2_car',
    name: 'Hotel Carioca',
    address: {
      city: 'Rio de Janeiro',
      street: 'Av. Atlântica',
      zipNumber: '22021-001',
      number: 123,
      neighborhood: 'Copacabana',
      country: 'Brasil',
      state: 'RJ',
    },
    starsQuantity: 5,
    description: 'Um hotel luxuoso perto da praia de Copacabana.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: true,
    category: 'luxuoso',
    roomCategories: ['1_single_bed'],
  },
  {
    id: 'hotel3',
    name: 'Hotel Baratex',
    address: {
      city: 'Salvador',
      street: 'Av. Sete de Setembro',
      zipNumber: '40010-000',
      number: 789,
      neighborhood: 'Centro',
      country: 'Brasil',
      state: 'BA',
    },
    starsQuantity: 2,
    description: 'Um hotel barato no centro da cidade.',
    hasBreakfast: true,
    hasLunch: false,
    hasDinner: false,
    category: 'barato',
    roomCategories: ['1_single_bed', '1_couple_bed'],
  },
  {
    id: 'hotel3_sal',
    name: 'Hotel Baratex',
    address: {
      city: 'Salvador',
      street: 'Av. Nove de Setembro',
      zipNumber: '40210-000',
      number: 123,
      neighborhood: 'Centro',
      country: 'Brasil',
      state: 'BA',
    },
    starsQuantity: 1,
    description: 'Um hotel barato no centro da cidade.',
    hasBreakfast: false,
    hasLunch: false,
    hasDinner: false,
    category: 'barato',
    roomCategories: ['1_single_bed', '2_single_bed'],
  },
  {
    id: 'hotel4',
    name: 'Hotel Praia Bela',
    address: {
      city: 'Fortaleza',
      street: 'Av. Beira Mar',
      zipNumber: '60165-121',
      number: 987,
      neighborhood: 'Meireles',
      country: 'Brasil',
      state: 'CE',
      complement: 'Apto 801',
    },
    starsQuantity: 4,
    description: 'Um belo hotel com vista para a praia de Fortaleza.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: true,
    category: 'luxuoso',
    parkingLotsQuantity: 30,
    roomCategories: ['1_couple_bed'],
  },
  {
    id: 'hotel5',
    name: 'Hotel Central',
    address: {
      city: 'Belo Horizonte',
      street: 'Av. Afonso Pena',
      zipNumber: '30130-001',
      number: 321,
      neighborhood: 'Centro',
      country: 'Brasil',
      state: 'MG',
      complement: 'Apto 102',
    },
    starsQuantity: 3,
    description:
      'Um hotel no centro da cidade, próximo às principais atrações turísticas.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: true,
    category: 'econômico',
    roomCategories: ['2_single_bed'],
  },
  {
    id: 'hotel6',
    name: 'Hotel Charmoso',
    address: {
      city: 'Porto Alegre',
      street: 'Rua maria das araucárias',
      zipNumber: '90035-001',
      number: 555,
      neighborhood: 'Moinhos de Vento',
      country: 'Brasil',
      state: 'RS',
    },
    starsQuantity: 4,
    description: 'Um hotel charmoso localizado no bairro Moinhos de Vento.',
    hasBreakfast: true,
    hasLunch: true,
    hasDinner: true,
    category: 'luxuoso',
    parkingLotsQuantity: 20,
    roomCategories: ['1_single_bed', '1_couple_bed'],
  },
];
