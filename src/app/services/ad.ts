import { CreateAdResponseDTO, CreateAdSecondStepRequestDTO } from 'app/interfaces'

interface Ad {
  createAd(categoryId: string): Promise<CreateAdResponseDTO>

  createAdSecondStep(dto: CreateAdSecondStepRequestDTO): Promise<any>
}

class Ad implements Ad {
  async createAd(categoryId: string): Promise<CreateAdResponseDTO> {
    return {
      id: '4b37761a-9edf-480d-b127-5641e4f0c3c9',
      category: {
        id: 'shop',
        title: 'Магазины',
        parentCategory: {
          id: 'commercialProperty',
          title: 'Коммерческая недвижимость',
          parentCategory: {
            id: 'realEstate',
            icon: '/assets/icons/category/real-estate.svg',
            title: 'Недвижимость',
            parentCategory: null
          }
        }
      },
      createdAt: 'Wed Oct 30 2019 10:53:12'
    }
  }

}

export default Ad
