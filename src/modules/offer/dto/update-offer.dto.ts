import { CityName } from '../../../types/city-name.enum.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { Category } from '../../../types/category.enum.js';

export default class UpdateOfferDto {
  public id!: string;
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: CityName;
  public previewImage?: string;
  public images?: string[];
  public isPremium?: boolean;
  public isFavorite?: boolean;
  public rating?: number;
  public type?: OfferType;
  public maxAdults?: number;
  public bedrooms?: number;
  public price?: number;
  public categories?: Category[];
  public userId?: string;
  public latitude?: number;
  public longitude?: number;
}
