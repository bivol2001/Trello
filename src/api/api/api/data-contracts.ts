/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RegisterDto {
  /** @example "dev@dreams.dev" */
  email: string;
  /** @example "P@ssword12" */
  password: string;
}

export interface TokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface LoginDto {
  /** @example "user@dreams.dev" */
  email: string;
  /** @example "P@ssword12" */
  password: string;
}

export interface UserImageDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "image.png" */
  avatarName: string;
  /** @example "image.png" */
  name: string;
  /** @example "http://server.com/image.png" */
  url: string;
  /** @example "http://server.com/image.png" */
  avatarUrl: string;
  /** @example true */
  isMain: boolean;
}

export interface UserCoverImageDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "image.png" */
  avatarName: string;
  /** @example "image.png" */
  name: string;
  /** @example "http://server.com/image.png" */
  url: string;
  /** @example "http://server.com/image.png" */
  avatarUrl: string;
}

export interface UserInfoDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName: string;
  /** @example "Creed" */
  lastName: string;
  gender?: "MALE" | "FEMALE";
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example "https://server.com/image.png" */
  mainImageUrl?: string;
  coverImage: UserCoverImageDto;
}

export interface DreamImageDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "image.png" */
  avatarName: string;
  /** @example "image.png" */
  name: string;
  /** @example "http://server.com/image.png" */
  url?: string;
  /** @example "http://server.com/image.png" */
  avatarUrl: string;
  /**
   * @default false
   * @example true
   */
  isMain?: boolean;
}

export interface DreamInfoDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum..." */
  title: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  likedByUsers?: UserInfoDto[];
  likedDreamsByUsers?: UserInfoDto[];
  /** @example 201 */
  amount?: number;
  /** @example 201 */
  amountReceived?: number;
  /** @example 25 */
  progress?: number;
  /** The user associated with this DreamAngel */
  user?: UserInfoDto;
  images?: DreamImageDto[];
  donations?: number;
}

export interface UserDreamDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName: string;
  /** @example "Creed" */
  lastName: string;
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example "http://server.com/image.png" */
  mainImageUrl?: string;
  coverImage: UserCoverImageDto;
  dreams: DreamInfoDto;
}

export interface UserPublicDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName: string;
  /** @example "Creed" */
  lastName: string;
  gender?: "MALE" | "FEMALE";
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example "https://server.com/image.png" */
  mainImageUrl?: string;
  coverImage: UserCoverImageDto;
  /** @example 10 */
  donatedCount?: number;
}

export interface DreamDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  title: string;
  /** @example "IN_PROGRESS" */
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  likedDreamsByUsers?: UserInfoDto[];
  /** @example 201 */
  amount?: number;
  /** @example 12 */
  savedCount?: number | null;
  /** @example 10 */
  sharedCount?: number | null;
  /** @example 201 */
  amountReceived?: number;
  /** @example 25 */
  progress?: number;
  images?: DreamImageDto[];
  user?: UserPublicDto;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  deletedAt?: string;
  donations?: any[][];
  isSaved: boolean;
}

export interface DonationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  userId: string;
  /** @example 1 */
  amount: number;
  user?: UserDreamDto;
  dream?: DreamDto;
}

export interface CharityImageDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "image.png" */
  avatarName: string;
  /** @example "image.png" */
  name: string;
  /** @example "http://server.com/image.png" */
  url?: string;
  /** @example "http://server.com/image.png" */
  avatarUrl: string;
  /** @example true */
  isMain?: boolean;
}

export type ActivityEntity = object;

export interface WingDonationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  userId: string;
  /** @example 1 */
  amount: number;
  user?: UserInfoDto;
  charity?: CharityDto;
  charityId?: string;
}

export interface CharityCommentDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  charityId: string;
  user?: UserInfoDto;
  replyUser?: UserInfoDto;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
  parent?: CharityCommentDto;
  children?: CharityCommentDto;
  repliesCount?: number;
}

export type LikedCharityActivityEntity = object;

export interface CharityDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet" */
  title: string;
  /** @example "NOT_STARTED" */
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  description: string;
  /** @example 201 */
  amount?: number;
  /** @example 201 */
  amountReceived?: number;
  images?: CharityImageDto[];
  user?: UserInfoDto;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  deletedAt?: string;
  likedCharitiesByUsers?: UserInfoDto[];
  activity?: ActivityEntity[];
  wingDonations?: WingDonationDto[];
  comments?: CharityCommentDto[];
  likedCharityActivities?: LikedCharityActivityEntity[];
  isSaved: boolean;
  /** @example 12 */
  savedCount?: number | null;
  /** @example 10 */
  sharedCount?: number | null;
}

export interface UserCommentInfoDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName: string;
  /** @example "Creed" */
  lastName: string;
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example "http://server.com/image.png" */
  mainImageUrl?: string;
}

export interface NewsfeedDreamAngelCommentDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamAngelId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  newsFeedId?: string;
  user?: UserCommentInfoDto;
  replyUser?: UserInfoDto;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
  parent?: number;
  children?: number;
  repliesCount?: number;
}

export interface DreamAngelDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /**
   * Number of donations made by the DreamAngel
   * @example "5"
   */
  donationCount: string;
  /**
   * Unique identifier for the user associated with the DreamAngel
   * @example "a13a1607-013b-4703-aa3e-b383d4609ac5"
   */
  userId: string;
  /** The user associated with this DreamAngel */
  user: UserInfoDto;
  /** List of comments associated with this DreamAngel */
  dreamAngelComment?: NewsfeedDreamAngelCommentDto[];
  /** List of news feed entries related to this DreamAngel */
  dreamAngel?: any[][];
}

export type WingDonationEntity = object;

export interface UserSavedPostNewsfeedDreamAngelDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  type: "FULFILL_DONATION" | "FULFILL_WING_DONATION" | "DREAM" | "CHARITY" | "DREAM_ANGEL" | "SAINT_DREAMER";
  user?: UserInfoDto;
  newsFeedDream?: DreamInfoDto;
  dreamId?: string;
  contributor?: UserInfoDto;
  contributorId?: string;
  charity?: CharityDto;
  charityId?: string;
  dreamAngel?: DreamAngelDto;
  dreamAngelId?: string;
  wingDonation?: WingDonationEntity;
  wingDonationId?: string;
  /** @example "User just fulfilled 1000 dreams" */
  title?: string;
  isSaved: boolean;
  activity?: ActivityEntity[];
  /** @example 12 */
  savedCount?: number | null;
  /** @example 10 */
  sharedCount?: number | null;
  likedNewsFeedByUsers?: UserInfoDto[];
}

export interface UserSavedPostDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  userId: string;
  user: UserInfoDto;
  dreamId?: string;
  dream?: DreamDto;
  charityId?: string;
  charity?: CharityDto;
  newsFeedDreamAngelId?: string;
  newsFeedDreamAngel?: UserSavedPostNewsfeedDreamAngelDto;
}

export interface ProfileDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example true */
  isEmailConfirmed?: boolean;
  /** @example "dev@dreams.dev" */
  email: string;
  /** @example "Victor" */
  firstName?: string;
  /** @example "Creed" */
  lastName?: string;
  /** @example "Creed" */
  password?: string;
  /** @example "cus_111" */
  stripeCustomerId?: string;
  /** @example "prod_222" */
  stripeProductId?: string;
  /** @example "sub_active" */
  monthlySubscriptionStatus?: string;
  /** @example "sub_333" */
  monthlySubscriptionId?: string;
  gender?: "MALE" | "FEMALE";
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /**
   * @format date-time
   * @example "2011-11-11"
   */
  birthday?: string;
  /** @example "London" */
  city?: string;
  /** @example "England" */
  country?: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  description?: string;
  /** @example "+1 892 213 1232" */
  phoneNumber?: string;
  /** @example 201 */
  balance?: number;
  /** @example "https://server.com/image.png" */
  mainImageUrl?: string;
  images?: UserImageDto[];
  coverImage?: UserCoverImageDto;
  donations?: DonationDto[];
  dreams?: DreamInfoDto[];
  likedDreams?: DreamInfoDto[];
  savedPosts?: UserSavedPostDto[];
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  deletedAt?: string;
  /**
   * @format date-time
   * @example "2024-01-22T13:55:37.839Z"
   */
  activeAt?: string | null;
  /** @example "ByliyyUgt_N11tJRAAAH" */
  socketId?: string | null;
  /** @example "WELCOME" */
  onboardingStatus?:
    | "WELCOME"
    | "PERSONAL_DATA"
    | "USER_PROFILE"
    | "CREATE_DREAM"
    | "SUBSCRIPTION_PLAN"
    | "COMPLETED"
    | null;
}

export interface PageMetaDto {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PageDto {
  results: any[][];
  meta: PageMetaDto;
}

export interface DreamCommentDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
  user?: UserInfoDto;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  replyUserId?: string;
  replyUser?: UserInfoDto;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
  parent?: DreamCommentDto;
  children?: DreamCommentDto[];
  /** @example 5 */
  repliesCount?: number;
}

export interface ForgotPasswordDto {
  /** @default "test@email1.com" */
  email: string;
}

export interface ReplacePasswordDto {
  /** @default "P@ssword12" */
  password: string;
  /** @default "P@ssword12" */
  confirmPassword: string;
}

export interface UpdateProfileDto {
  /** @example "Victor" */
  firstName?: string;
  /** @example "Creed" */
  lastName?: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  description?: string;
  /** @example "+1 892 213 1232" */
  phoneNumber?: string;
  gender?: "MALE" | "FEMALE";
  /**
   * @format date-time
   * @example "2011-11-11"
   */
  birthday?: string;
  /** @example "London" */
  city?: string;
  /** @example "England" */
  country?: string;
  onboardingStatus?: "WELCOME" | "PERSONAL_DATA" | "USER_PROFILE" | "CREATE_DREAM" | "SUBSCRIPTION_PLAN" | "COMPLETED";
}

export interface UserDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example true */
  isEmailConfirmed?: boolean;
  /** @example "dev@dreams.dev" */
  email: string;
  /** @example "Victor" */
  firstName?: string;
  /** @example "Creed" */
  lastName?: string;
  /** @example "Creed" */
  password?: string;
  /** @example "cus_111" */
  stripeCustomerId?: string;
  /** @example "prod_222" */
  stripeProductId?: string;
  /** @example "sub_active" */
  monthlySubscriptionStatus?: string;
  /** @example "sub_333" */
  monthlySubscriptionId?: string;
  gender?: "MALE" | "FEMALE";
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /**
   * @format date-time
   * @example "2011-11-11"
   */
  birthday?: string;
  /** @example "London" */
  city?: string;
  /** @example "England" */
  country?: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  description?: string;
  /** @example "+1 892 213 1232" */
  phoneNumber?: string;
  /** @example 201 */
  balance?: number;
  /** @example "https://server.com/image.png" */
  mainImageUrl?: string;
  images?: UserImageDto[];
  coverImage?: UserCoverImageDto;
  donations?: DonationDto[];
  dreams?: DreamInfoDto[];
  likedDreams?: DreamInfoDto[];
  savedPosts?: UserSavedPostDto[];
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  deletedAt?: string;
  /**
   * @format date-time
   * @example "2024-01-22T13:55:37.839Z"
   */
  activeAt?: string | null;
  /** @example "ByliyyUgt_N11tJRAAAH" */
  socketId?: string | null;
  /** @example "WELCOME" */
  onboardingStatus?:
    | "WELCOME"
    | "PERSONAL_DATA"
    | "USER_PROFILE"
    | "CREATE_DREAM"
    | "SUBSCRIPTION_PLAN"
    | "COMPLETED"
    | null;
}

export interface UserShortInfoDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName: string;
  /** @example "Creed" */
  lastName: string;
  /** @example "Creed" */
  password?: string;
  /** @example "Creed" */
  stripeCustomerId?: string;
  /** @example "Creed" */
  stripeProductId?: string;
  /** @example "Creed" */
  monthlySubscriptionStatus?: string;
  /** @example "Creed" */
  monthlySubscriptionId?: string;
  /** @example "Creed" */
  balance?: string;
  city: string;
  country: string;
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example "http://server.com/image.png" */
  mainImageUrl?: string;
  coverImage: UserCoverImageDto;
  dreams: DreamInfoDto;
  donations?: DonationDto;
}

export interface UpdateUserCoverImageDto {
  /** @example 150 */
  coverImagePosition?: number;
}

export interface PayloadUserSavedPostDto {
  dreamId?: string;
  charityId?: string;
  /**
   * Post ID - UUID
   * @example "123e4567-e89b-12d3-a456"
   */
  postId?: string;
}

export interface CreateDreamDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  title: string;
  /** @example 150 */
  amount: number;
}

export interface DreamAdminCheckDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /** @example "Victor" */
  firstName?: string;
  /** @example "Creed" */
  lastName?: string;
  role: "ADMIN" | "DREAMER" | "ANGEL";
  /** @example false */
  hasDream: boolean;
}

export interface UpdateDreamDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  title?: string;
  /** @example 150 */
  amount?: number;
}

export interface LikedNewsFeedByUserDto {
  /**
   * UUID of the News Feed
   * @example "d4f6e3c9-8734-49f2-841e-098b648a6b9b"
   */
  newsFeedId: string;
  /**
   * UUID of the User
   * @example "a9f79b7d-1d50-4bfc-b732-08a5f64c217a"
   */
  usersId: string;
  /** The related User */
  user?: UserInfoDto;
}

export interface NewsFeedDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  type: "FULFILL_DONATION" | "FULFILL_WING_DONATION" | "DREAM" | "CHARITY" | "DREAM_ANGEL" | "SAINT_DREAMER";
  user?: UserInfoDto;
  newsFeedDream?: DreamInfoDto;
  dreamId?: string;
  contributor?: UserInfoDto;
  contributorId?: string;
  charity?: CharityDto;
  charityId?: string;
  dreamAngel?: DreamAngelDto;
  dreamAngelId?: string;
  wingDonation?: WingDonationEntity;
  wingDonationId?: string;
  /** @example "User just fulfilled 1000 dreams" */
  title?: string;
  likedNewsFeedByUsers?: LikedNewsFeedByUserDto[];
  isSaved: boolean;
  activity?: ActivityEntity[];
  /** @example 12 */
  savedCount?: number | null;
  /** @example 10 */
  sharedCount?: number | null;
}

export interface NewsFeedDreamAngelDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  type: "FULFILL_DONATION" | "FULFILL_WING_DONATION" | "DREAM" | "CHARITY" | "DREAM_ANGEL" | "SAINT_DREAMER";
  user?: UserInfoDto;
  dreamId?: string;
  charityId?: string;
  dreamAngel?: DreamAngelDto;
  dreamAngelId?: string;
  wingDonation?: WingDonationEntity;
  wingDonationId?: string;
  /** @example "User just fulfilled 1000 dreams" */
  title?: string;
  likedNewsFeedByUsers?: LikedNewsFeedByUserDto[];
  isSaved: boolean;
  activity?: ActivityEntity[];
  /** @example 12 */
  savedCount?: number | null;
  /** @example 10 */
  sharedCount?: number | null;
}

export interface CreateShareNotificationDto {
  /** @example "FULFILL_DONATION" */
  type:
    | "POST_DREAM"
    | "DREAM_FULFILLED"
    | "POST_COMMENT"
    | "POST_DREAM_ANGEL_COMMENT"
    | "POST_WING_DONATION_COMMENT"
    | "REPLY_POST_WING_DONATION_COMMENT"
    | "REPLY_COMMENT"
    | "FULFILL_DONATION"
    | "POST_WING_DONATION"
    | "WING_DONATION_FULFILLED"
    | "SUBSCRIBE_REMINDER"
    | "DONATION_DREAM_REMINDER"
    | "SHARE_DREAM"
    | "SHARE_DREAM_ANGEL"
    | "ADMIN_NOTIFICATION";
  /** @example "14c621e6-8010-4625-84b8-3919eee4eaa2" */
  dreamId?: string;
  /** @example "99fe1b84-8175-44c8-9441-fbccd6b5fadc" */
  charityId?: string;
  /** @example "99fe1b84-8175-44c8-9441-fbccd6b5fadc" */
  dreamAngelId?: string;
  /** @example "e3855a5d-3535-4a38-986d-938883d1ff2c" */
  replyUserId?: string;
  /** @example "6fff6db8-ef1b-4efd-8649-18e5a21cfcb4" */
  wingDonationId?: string;
  /** @example false */
  seen?: boolean;
  /** @example "Twitter" */
  media?: string;
}

export interface NotificationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "FULFILL_DONATION" */
  type:
    | "POST_DREAM"
    | "DREAM_FULFILLED"
    | "POST_COMMENT"
    | "POST_DREAM_ANGEL_COMMENT"
    | "POST_WING_DONATION_COMMENT"
    | "REPLY_POST_WING_DONATION_COMMENT"
    | "REPLY_COMMENT"
    | "FULFILL_DONATION"
    | "POST_WING_DONATION"
    | "WING_DONATION_FULFILLED"
    | "SUBSCRIBE_REMINDER"
    | "DONATION_DREAM_REMINDER"
    | "SHARE_DREAM"
    | "SHARE_DREAM_ANGEL"
    | "ADMIN_NOTIFICATION";
  /** @example "e3855a5d-3535-4a38-986d-938883d1ff2c" */
  senderId: string;
  sender?: UserDto;
  /** @example "14c621e6-8010-4625-84b8-3919eee4eaa2" */
  receiverId: string;
  receiver?: UserDto;
  /** @example "14c621e6-8010-4625-84b8-3919eee4eaa2" */
  dreamId: string | null;
  dream?: DreamDto | null;
  /** @example "99fe1b84-8175-44c8-9441-fbccd6b5fadc" */
  charityId?: string | null;
  notificationsCharity?: CharityDto | null;
  /** @example "99fe1b84-8175-44c8-9441-fbccd6b5fadc" */
  dreamAngelId?: string | null;
  /** @example "6fff6db8-ef1b-4efd-8649-18e5a21cfcb4" */
  wingDonationId: string | null;
  dreamAngel: DreamAngelDto | null;
  /** @example "New donation received!" */
  title: string;
  /** @example false */
  seen: boolean;
}

export interface CheckNotificationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  notificationId: string;
}

export interface UpdateNotificationStatusDto {
  /** @example ["cca5813c-38b0-47ca-abdf-71e75bc6d9a6","e3855a5d-3535-4a38-986d-938883d1ff2c"] */
  notificationIds: string[];
}

export interface CreateAdminNotificationDto {
  /** @example "e3855a5d-3535-4a38-986d-938883d1ff2c" */
  receiverId: string;
  /** @example "Message from the admin" */
  title: string;
}

export interface NotificationCreationParamsDto {
  /** @example "FULFILL_DONATION" */
  type?:
    | "POST_DREAM"
    | "DREAM_FULFILLED"
    | "POST_COMMENT"
    | "POST_DREAM_ANGEL_COMMENT"
    | "POST_WING_DONATION_COMMENT"
    | "REPLY_POST_WING_DONATION_COMMENT"
    | "REPLY_COMMENT"
    | "FULFILL_DONATION"
    | "POST_WING_DONATION"
    | "WING_DONATION_FULFILLED"
    | "SUBSCRIBE_REMINDER"
    | "DONATION_DREAM_REMINDER"
    | "SHARE_DREAM"
    | "SHARE_DREAM_ANGEL"
    | "ADMIN_NOTIFICATION";
  /** @example "3c9cc97d-ec1a-4761-b633-9072e9895131" */
  senderId?: string;
  /** @example "b5328b8b-6d60-4b28-b090-40200602333a" */
  receiverId?: string;
  /** @example "55c93735-6ff0-4609-997c-685cb83c91f0" */
  dreamId?: string;
  /** @example "c8ea3ba5-fba4-4d2b-95b1-1a1a9ce70c86" */
  charityId?: string;
  /** @example "aef7946a-1c34-4d64-b5ca-5519288b9fcd" */
  dreamAngelId?: string;
  /** @example "203796a0-e49c-49f8-9dad-2f95c2719cd6" */
  wingDonationId?: string;
  /** @example "donated for" */
  title?: string;
  /** @example false */
  seen?: boolean;
}

export interface CreateDonationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
}

export interface CreateWingDonationDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  charityId: string;
}

export interface TopDonorDto {
  user?: UserInfoDto;
  currentDream?: DreamDto;
  /** @example 1 */
  amount: number;
}

export interface CreateCharityDto {
  /** @example "Lorem ipsum dolor sit amet" */
  title: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  description: string;
  /** @example 100 */
  amount: number;
}

export interface UpdateCharityDto {
  /** @example "Lorem ipsum dolor sit amet" */
  title?: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." */
  description?: string;
  /** @example 100 */
  amount?: number;
}

export interface CharityCommentActivityDto {
  /** UUID of the activity */
  activityId: string;
  /** UUID of the charity comment */
  charityCommentsId: string;
  /** The related activity data */
  activity: ActivityDto;
  /** The related charity comment data */
  charityComment: CharityCommentDto;
}

export interface DreamAngelCommentActivityDto {
  /**
   * UUID of the activity
   * @example "d2c4e234-07a8-4a7f-837e-d4f3e79db55b"
   */
  activityId: string;
  /**
   * UUID of the dream angel comment
   * @example "c3d4e234-07a8-4a7f-837e-d4f3e79db55b"
   */
  dreamAngelCommentId: string;
  /** The related activity data */
  activity: ActivityDto;
  /** The related dream angel comment data */
  dreamAngelComment: NewsfeedDreamAngelCommentDto;
}

export interface LikedNewsFeedActivityDto {
  /** The ID of the activity. */
  activityId: string;
  /** The ID of the news feed. */
  newsFeedId: string;
  /** The related News feed */
  newsFeed?: NewsFeedDto;
}

export interface ActivityDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  type: "LIKE" | "COMMENT" | "DONATION" | "ALL";
  user?: UserInfoDto;
  dreamCommentActivities?: DreamCommentActivityDto[];
  charityCommentActivity?: CharityCommentActivityDto[];
  dreamAngelCommentActivities?: DreamAngelCommentActivityDto[];
  wingDonation?: WingDonationDto[];
  donation?: DonationDto[];
  likedDream?: DreamDto[];
  likedNewsFeed?: LikedNewsFeedActivityDto[];
  likedCharity?: CharityDto[];
}

export interface DreamCommentActivityDto {
  /** UUID of the activity */
  activityId: string;
  /** UUID of the dream comment */
  dreamCommentsId: string;
  /** The related activity data */
  activity: ActivityDto;
  /** The related dream comment data */
  dreamComment: DreamCommentDto;
}

export interface CreateDreamCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  replyUserId?: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
}

export interface UpdateDreamCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
}

export interface CreateCharityCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  charityId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  replyUserId?: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
}

export interface UpdateCharityCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
}

export interface CreateNewsfeedDreamAngelCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  replyUserId?: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamAngelId: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  newsFeedId: string;
}

export interface UpdateDreamAngelCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
}

export interface CreateWingDonationCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  parentId?: string;
}

export interface WingDonationCommentDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  user?: UserCommentInfoDto;
  repliesCount?: number;
}

export interface UpdateWingDonationCommentDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
}

export interface CreateCheckoutSessionDto {
  /** @example "price_1KxpsgAw8kwLXibRc1Y8t5cE" */
  priceId: string;
  /** @example "http://localhost:4242/success" */
  successUrl: string;
  /** @example "http://localhost:4242/cancel" */
  cancelUrl: string;
}

export interface CreateCustomerPortalSessionDto {
  /** @example "http://localhost:4242" */
  returnUrl: string;
}

export interface CreateFeedbackDto {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
}

export interface FeedbackDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" */
  message: string;
  user?: UserInfoDto;
}

export interface CreatePayoutDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  dreamId: string;
  /** @example "+1 892 213 1232" */
  phoneNumber: string;
  /** @example "street name 100" */
  address: string;
  /** @example "apartament 10" */
  address2?: string;
  /** @example "Berlin" */
  city: string;
  /** @example "Berlin" */
  state: string;
  /** @example "Germany" */
  country: string;
  /** @example "12345" */
  zipCode: string;
  /** @example "12345" */
  iban: string;
  /** @example "12345" */
  swift: string;
}

export interface PayoutDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example 1 */
  amount: number;
  /**
   * The status of the payout (PAID, PENDING, IN_TRANSIT, CANCELED, FAILED)
   * @default "PENDING"
   */
  status: "PAID" | "PENDING" | "IN_TRANSIT" | "CANCELED" | "FAILED";
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   * @example "Your payout has been sent to your bank account."
   */
  description?: string;
  /** @example "+1 892 213 1232" */
  phoneNumber: string;
  /** @example "street name 100" */
  address: string;
  /** @example "apartament 10" */
  address2?: string;
  /** @example "Berlin" */
  city: string;
  /** @example "Berlin" */
  state: string;
  /** @example "Germany" */
  country: string;
  /** @example "12345" */
  zipCode: string;
  /** @example "12345" */
  iban: string;
  /** @example "12345" */
  swift: string;
  user?: UserInfoDto;
  dream?: DreamDto;
}

export interface UpdatePayoutDto {
  /**
   * The status of the payout (PAID, PENDING, IN_TRANSIT, CANCELED, FAILED)
   * @example "PENDING"
   */
  status?: "PAID" | "PENDING" | "IN_TRANSIT" | "CANCELED" | "FAILED";
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   * @example "Your payout has been sent to your bank account."
   */
  description?: string;
}

export interface MessageDto {
  /** @example "cca5813c-38b0-47ca-abdf-71e75bc6d9a6" */
  id: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  updatedAt: string;
  /** @example "f60e8b76-038a-4a14-a050-7d194c02c5e9" */
  from: string;
  /** @example "f60e8b76-038a-4a14-a050-7d194c02c5e9" */
  to: string;
  fromUser: UserDto;
  toUser: UserDto;
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit." */
  content: string;
  /**
   * @format date-time
   * @example "2022-01-22T13:55:37.839Z"
   */
  seenAt: string | null;
  /**
   * Accepted status
   * @example false
   */
  accepted: boolean;
  /** Dream entity associated with this message */
  dream: DreamDto | null;
  /** Dream Angel entity associated with this message */
  dreamAngel: DreamAngelDto | null;
  /** Charity entity associated with this message */
  charity: CharityDto | null;
}
