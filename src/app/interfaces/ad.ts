import { AdStatus, AdType, CurrencyType } from 'app/constants'
import { ICategory } from 'app/interfaces/category'
import { CityDTO } from 'app/interfaces/city'

export interface AdDTO {
  id: string,
  createdAt: string,
  updatedAt: string | null,
  title: string
  description: string
  photos: string[]
  assessedValue: number,
  phoneNumber: string,
  considerOptions: boolean
  type: AdType
  currency: CurrencyType
  status: AdStatus
  category: ICategory
  city: CityDTO
  interests: ICategory[]
}

export interface CreateAdResponseDTO {
  id: string,
  category: ICategory
  createdAt: string,
}

export interface CreateAdSecondStepRequestDTO {
  id: string
  title: string
  description: string
  photos: string[]
  type: AdType
}
