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

import {
  ActivityDto,
  CharityCommentDto,
  CharityDto,
  CharityImageDto,
  CheckNotificationDto,
  CreateAdminNotificationDto,
  CreateCharityCommentDto,
  CreateCharityDto,
  CreateCheckoutSessionDto,
  CreateCustomerPortalSessionDto,
  CreateDonationDto,
  CreateDreamCommentDto,
  CreateDreamDto,
  CreateFeedbackDto,
  CreateNewsfeedDreamAngelCommentDto,
  CreatePayoutDto,
  CreateShareNotificationDto,
  CreateWingDonationCommentDto,
  CreateWingDonationDto,
  DonationDto,
  DreamAdminCheckDto,
  DreamCommentDto,
  DreamDto,
  DreamImageDto,
  FeedbackDto,
  ForgotPasswordDto,
  LoginDto,
  MessageDto,
  NewsfeedDreamAngelCommentDto,
  NewsFeedDreamAngelDto,
  NewsFeedDto,
  NotificationCreationParamsDto,
  NotificationDto,
  PageDto,
  PayloadUserSavedPostDto,
  PayoutDto,
  ProfileDto,
  RegisterDto,
  ReplacePasswordDto,
  TokensDto,
  TopDonorDto,
  UpdateCharityCommentDto,
  UpdateCharityDto,
  UpdateDreamAngelCommentDto,
  UpdateDreamCommentDto,
  UpdateDreamDto,
  UpdateNotificationStatusDto,
  UpdatePayoutDto,
  UpdateProfileDto,
  UpdateUserCoverImageDto,
  UpdateWingDonationCommentDto,
  UserDto,
  UserImageDto,
  UserInfoDto,
  UserSavedPostDto,
  UserShortInfoDto,
  WingDonationCommentDto,
  WingDonationDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Health
   * @name HealthControllerCheck
   * @request GET:/api/v1/_health
   */
  healthControllerCheck = (params: RequestParams = {}) =>
    this.request<
      {
        /** @example "ok" */
        status?: string;
        /** @example {"database":{"status":"up"}} */
        info?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
        /** @example {} */
        error?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
        /** @example {"database":{"status":"up"}} */
        details?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
      },
      {
        /** @example "error" */
        status?: string;
        /** @example {"database":{"status":"up"}} */
        info?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
        /** @example {"redis":{"status":"down","message":"Could not connect"}} */
        error?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
        /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
        details?: Record<
          string,
          {
            status?: string;
            [key: string]: any;
          }
        >;
      }
    >({
      path: `/api/v1/_health`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerRegister
   * @summary Register on the dreams platform
   * @request POST:/api/v1/auth/register
   */
  authControllerRegister = (data: RegisterDto, params: RequestParams = {}) =>
    this.request<TokensDto, void>({
      path: `/api/v1/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerLogin
   * @summary Login on the dreams platform
   * @request POST:/api/v1/auth/login
   */
  authControllerLogin = (data: LoginDto, params: RequestParams = {}) =>
    this.request<TokensDto, any>({
      path: `/api/v1/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerRefresh
   * @summary Get a refreshed Active Token
   * @request GET:/api/v1/auth/refresh
   * @secure
   */
  authControllerRefresh = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/auth/refresh`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfile
   * @summary Get logged in user profile
   * @request GET:/api/v1/auth/profile
   * @secure
   */
  authControllerProfile = (params: RequestParams = {}) =>
    this.request<ProfileDto, any>({
      path: `/api/v1/auth/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerUpdateProfile
   * @summary Update logged in user profile
   * @request PATCH:/api/v1/auth/profile
   * @secure
   */
  authControllerUpdateProfile = (data: UpdateProfileDto, params: RequestParams = {}) =>
    this.request<ProfileDto, any>({
      path: `/api/v1/auth/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileDreams
   * @summary Get logged in user dreams
   * @request GET:/api/v1/auth/profile/dreams
   * @secure
   */
  authControllerProfileDreams = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
      dreamStatus?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/auth/profile/dreams`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileDreamDonations
   * @summary Get logged in user dream donations by dreamId
   * @request GET:/api/v1/auth/profile/dreams/{dreamId}/donations
   * @secure
   */
  authControllerProfileDreamDonations = (
    dreamId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DonationDto[];
      },
      any
    >({
      path: `/api/v1/auth/profile/dreams/${dreamId}/donations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileDreamComments
   * @summary Get logged in user dream comments by dreamId
   * @request GET:/api/v1/auth/profile/dreams/{dreamId}/comments
   * @secure
   */
  authControllerProfileDreamComments = (
    dreamId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamCommentDto[];
      },
      any
    >({
      path: `/api/v1/auth/profile/dreams/${dreamId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileWingDonations
   * @summary Get logged in user wing donations
   * @request GET:/api/v1/auth/profile/wing-donations
   * @secure
   */
  authControllerProfileWingDonations = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationDto[];
      },
      any
    >({
      path: `/api/v1/auth/profile/wing-donations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileWingDonationsAll
   * @summary Get array of charityIds of all logged in user wing-donations
   * @request GET:/api/v1/auth/profile/wing-donations/all
   * @secure
   */
  authControllerProfileWingDonationsAll = (params: RequestParams = {}) =>
    this.request<string[], any>({
      path: `/api/v1/auth/profile/wing-donations/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileDonations
   * @summary Get logged in user donations
   * @request GET:/api/v1/auth/profile/donations
   * @secure
   */
  authControllerProfileDonations = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DonationDto[];
      },
      any
    >({
      path: `/api/v1/auth/profile/donations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerProfileDonationsAll
   * @summary Get array of dreamIds of all logged in user donations
   * @request GET:/api/v1/auth/profile/donations/all
   * @secure
   */
  authControllerProfileDonationsAll = (params: RequestParams = {}) =>
    this.request<string[], any>({
      path: `/api/v1/auth/profile/donations/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerForgotPassword
   * @summary Send a email to reset password
   * @request POST:/api/v1/auth/profile/forgot-password
   */
  authControllerForgotPassword = (data: ForgotPasswordDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/auth/profile/forgot-password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authentication
   * @name AuthControllerReplacePassword
   * @summary Reset password
   * @request POST:/api/v1/auth/profile/replace-password
   * @secure
   */
  authControllerReplacePassword = (data: ReplacePasswordDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/auth/profile/replace-password`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerFindOne
   * @summary Get user by userId (Public/Authorized)
   * @request GET:/api/v1/users/{userId}
   * @secure
   */
  usersControllerFindOne = (userId: string, params: RequestParams = {}) =>
    this.request<UserDto, any>({
      path: `/api/v1/users/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerFindOneShort
   * @summary Get short user information by id
   * @request GET:/api/v1/users/{userId}/short
   */
  usersControllerFindOneShort = (userId: string, params: RequestParams = {}) =>
    this.request<UserShortInfoDto, any>({
      path: `/api/v1/users/${userId}/short`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerSearchUserByName
   * @summary Search users by name, email or birth date (count 10)
   * @request GET:/api/v1/users
   * @secure
   */
  usersControllerSearchUserByName = (
    query?: {
      name?: string;
      email?: string;
      birthDay?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserDto[], any>({
      path: `/api/v1/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetUsersWithMessages
   * @summary Get all users with messages
   * @request GET:/api/v1/message-users
   * @secure
   */
  usersControllerGetUsersWithMessages = (
    query: {
      accepted: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserDto[], any>({
      path: `/api/v1/message-users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerFindDeletedUsers
   * @summary Get all users with deleted
   * @request GET:/api/v1/admin/users
   * @secure
   */
  usersControllerFindDeletedUsers = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: UserDto[];
      },
      any
    >({
      path: `/api/v1/admin/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerRemove
   * @summary Delete user by id
   * @request DELETE:/api/v1/admin/users/{userId}
   * @secure
   */
  usersControllerRemove = (userId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/users/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerRestore
   * @summary Restore user by id
   * @request PATCH:/api/v1/admin/restore/users/{userId}
   * @secure
   */
  usersControllerRestore = (userId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/restore/users/${userId}`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerExportUsers
   * @summary Export users in csv format
   * @request GET:/api/v1/admin/export/users
   * @secure
   */
  usersControllerExportUsers = (
    query: {
      startDate: string;
      endDate: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/admin/export/users`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerUploadImage
   * @summary Upload user image
   * @request POST:/api/v1/user/image
   * @secure
   */
  userImagesControllerUploadImage = (
    data: {
      /** @format binary */
      image?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/user/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerUploadMultipleFiles
   * @summary Upload user images
   * @request POST:/api/v1/user/images
   * @secure
   */
  userImagesControllerUploadMultipleFiles = (
    data: {
      images?: File[];
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/user/images`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerUpdateProfile
   * @summary Set user image as main by imageId
   * @request PATCH:/api/v1/user/image/{imageId}/main
   * @secure
   */
  userImagesControllerUpdateProfile = (imageId: string, params: RequestParams = {}) =>
    this.request<UserImageDto, any>({
      path: `/api/v1/user/image/${imageId}/main`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerDeleteImage
   * @summary Delete user image
   * @request DELETE:/api/v1/user/image/{imageId}
   * @secure
   */
  userImagesControllerDeleteImage = (imageId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/user/image/${imageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerUploadCoverImage
   * @summary Upload user cover image
   * @request POST:/api/v1/user/cover/image
   * @secure
   */
  userImagesControllerUploadCoverImage = (
    data: {
      /** @format binary */
      image?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/user/cover/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerUpdateCoverImage
   * @summary Update cover image position by imageId
   * @request PATCH:/api/v1/user/cover/image/{imageId}
   * @secure
   */
  userImagesControllerUpdateCoverImage = (imageId: string, data: UpdateUserCoverImageDto, params: RequestParams = {}) =>
    this.request<UserImageDto, any>({
      path: `/api/v1/user/cover/image/${imageId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User Images
   * @name UserImagesControllerRemoveCoverImage
   * @summary Delete user cover image
   * @request DELETE:/api/v1/user/cover/image/{imageId}
   * @secure
   */
  userImagesControllerRemoveCoverImage = (imageId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/user/cover/image/${imageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User Saved Post
   * @name UserSavedPostControllerSavePost
   * @summary User saved a post
   * @request POST:/api/v1/saved-post
   * @secure
   */
  userSavedPostControllerSavePost = (data: PayloadUserSavedPostDto, params: RequestParams = {}) =>
    this.request<UserSavedPostDto, any>({
      path: `/api/v1/saved-post`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User Saved Post
   * @name UserSavedPostControllerFindAllSavedPost
   * @summary Get all posts saved by the user
   * @request GET:/api/v1/saved-post
   * @secure
   */
  userSavedPostControllerFindAllSavedPost = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: UserSavedPostDto[];
      },
      any
    >({
      path: `/api/v1/saved-post`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerCreate
   * @summary Create dream
   * @request POST:/api/v1/dreams
   * @secure
   */
  dreamsControllerCreate = (data: CreateDreamDto, params: RequestParams = {}) =>
    this.request<DreamDto, any>({
      path: `/api/v1/dreams`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindAllDreams
   * @summary Get all dreams (Get all popular dreams if isPopular param is set)
   * @request GET:/api/v1/dreams
   */
  dreamsControllerFindAllDreams = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
      isPopular?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/dreams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerGetUserDreams
   * @summary Get dreams by userId (Public/Authorized)
   * @request GET:/api/v1/dreams/users/{userId}
   * @secure
   */
  dreamsControllerGetUserDreams = (
    userId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
      dreamStatus?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/dreams/users/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerNewDreams
   * @summary Get all dreams created two week ago
   * @request GET:/api/v1/new-dreams
   */
  dreamsControllerNewDreams = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/new-dreams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindAllDreamsWithDeleted
   * @summary Get all dreams with deleted
   * @request GET:/api/v1/admin/dreams
   * @secure
   */
  dreamsControllerFindAllDreamsWithDeleted = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/admin/dreams`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindAllAdminDreamStatus
   * @summary Get all admins and if they have a dream
   * @request GET:/api/v1/admin/dream-check
   */
  dreamsControllerFindAllAdminDreamStatus = (params: RequestParams = {}) =>
    this.request<any, DreamAdminCheckDto[]>({
      path: `/api/v1/admin/dream-check`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindOne
   * @summary Get dream by id  (Public/Authorized)
   * @request GET:/api/v1/dreams/{dreamId}
   * @secure
   */
  dreamsControllerFindOne = (dreamId: string, params: RequestParams = {}) =>
    this.request<DreamDto, any>({
      path: `/api/v1/dreams/${dreamId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerUpdate
   * @summary Update dream by id
   * @request PATCH:/api/v1/dreams/{dreamId}
   * @secure
   */
  dreamsControllerUpdate = (dreamId: string, data: UpdateDreamDto, params: RequestParams = {}) =>
    this.request<DreamDto, any>({
      path: `/api/v1/dreams/${dreamId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindAllForPublic
   * @summary Get all dreams for public page
   * @request GET:/api/v1/p/dreams
   */
  dreamsControllerFindAllForPublic = (params: RequestParams = {}) =>
    this.request<
      PageDto & {
        results?: DreamDto[];
      },
      any
    >({
      path: `/api/v1/p/dreams`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerFindDreamAngelForPublic
   * @summary Get dream angel for public page
   * @request GET:/api/v1/p/dreams/angel/{userId}
   */
  dreamsControllerFindDreamAngelForPublic = (userId: string, params: RequestParams = {}) =>
    this.request<UserInfoDto, any>({
      path: `/api/v1/p/dreams/angel/${userId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerUpdateLike
   * @summary Like dreams
   * @request PATCH:/api/v1/dreams/{dreamId}/like
   * @secure
   */
  dreamsControllerUpdateLike = (dreamId: string, params: RequestParams = {}) =>
    this.request<DreamDto, any>({
      path: `/api/v1/dreams/${dreamId}/like`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerRemove
   * @summary Delete dream by id
   * @request DELETE:/api/v1/admin/dreams/{dreamId}
   * @secure
   */
  dreamsControllerRemove = (dreamId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/dreams/${dreamId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Dreams
   * @name DreamsControllerRestore
   * @summary Restore dream by id
   * @request PATCH:/api/v1/admin/restore/dreams/{dreamId}
   * @secure
   */
  dreamsControllerRestore = (dreamId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/restore/dreams/${dreamId}`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Dream Images
   * @name DreamImagesControllerUploadImage
   * @summary Upload dream image
   * @request POST:/api/v1/dream/{dreamId}/image
   * @secure
   */
  dreamImagesControllerUploadImage = (
    dreamId: string,
    data: {
      /** @format binary */
      image?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/dream/${dreamId}/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Dream Images
   * @name DreamImagesControllerUploadMultipleFiles
   * @summary Upload dream images
   * @request POST:/api/v1/dream/{dreamId}/images
   * @secure
   */
  dreamImagesControllerUploadMultipleFiles = (
    dreamId: string,
    data: {
      images?: File[];
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/dream/${dreamId}/images`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Dream Images
   * @name DreamImagesControllerUpdateProfile
   * @summary Set dream image as main
   * @request PATCH:/api/v1/dream/{dreamId}/image/{imageId}/main
   * @secure
   */
  dreamImagesControllerUpdateProfile = (dreamId: string, imageId: string, params: RequestParams = {}) =>
    this.request<DreamImageDto, any>({
      path: `/api/v1/dream/${dreamId}/image/${imageId}/main`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dream Images
   * @name DreamImagesControllerRemove
   * @summary Delete dream image
   * @request DELETE:/api/v1/dream/{dreamId}/image/{imageId}
   * @secure
   */
  dreamImagesControllerRemove = (dreamId: string, imageId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/dream/${dreamId}/image/${imageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags News Feeds
   * @name NewsFeedControllerFindAllNewsFeeds
   * @summary Get all news feeds
   * @request GET:/api/v1/news-feeds
   * @secure
   */
  newsFeedControllerFindAllNewsFeeds = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<NewsFeedDto, any>({
      path: `/api/v1/news-feeds`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags News Feeds
   * @name NewsFeedControllerUpdateNewsFeedLike
   * @summary Like news feed post
   * @request PATCH:/api/v1/news-feeds/{postId}/like
   * @secure
   */
  newsFeedControllerUpdateNewsFeedLike = (postId: string, params: RequestParams = {}) =>
    this.request<NewsFeedDto, any>({
      path: `/api/v1/news-feeds/${postId}/like`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags News Feeds
   * @name NewsFeedControllerGeDreamAngelNewsFeedById
   * @summary Get dream angel news feed by postId (Public/Authorized)
   * @request GET:/api/v1/news-feeds/{postId}/dream-angel
   * @secure
   */
  newsFeedControllerGeDreamAngelNewsFeedById = (
    postId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<NewsFeedDreamAngelDto, any>({
      path: `/api/v1/news-feeds/${postId}/dream-angel`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerCreateShareNotification
   * @summary Post share notifications
   * @request POST:/api/v1/notifications/share
   * @secure
   */
  notificationsControllerCreateShareNotification = (data: CreateShareNotificationDto, params: RequestParams = {}) =>
    this.request<NotificationDto, any>({
      path: `/api/v1/notifications/share`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerFindAllNotificationsByUserId
   * @summary Get notifications by user ID
   * @request GET:/api/v1/notifications
   * @secure
   */
  notificationsControllerFindAllNotificationsByUserId = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
      /** Optional query parameter, accepts values [ True, False ] */
      seen?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageDto, any>({
      path: `/api/v1/notifications`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerCreateNotification
   * @summary Post personal notification
   * @request POST:/api/v1/notifications
   * @secure
   */
  notificationsControllerCreateNotification = (data: NotificationCreationParamsDto, params: RequestParams = {}) =>
    this.request<NotificationDto, any>({
      path: `/api/v1/notifications`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerUpdateOneNotificationSeenStatus
   * @summary Update one notification seen status
   * @request PATCH:/api/v1/notifications/check
   * @secure
   */
  notificationsControllerUpdateOneNotificationSeenStatus = (data: CheckNotificationDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/notifications/check`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerSeenStatusUpdate
   * @summary Mark all notifications as seen
   * @request PATCH:/api/v1/notifications/check-all
   * @secure
   */
  notificationsControllerSeenStatusUpdate = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/notifications/check-all`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerUpdateByPage
   * @summary Update notifications seen status by page
   * @request PATCH:/api/v1/notifications/check-page
   * @secure
   */
  notificationsControllerUpdateByPage = (data: UpdateNotificationStatusDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/notifications/check-page`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notifications
   * @name NotificationsControllerCreateAdminNotification
   * @summary Post admin notification to a specific user
   * @request POST:/api/v1/notifications/admin
   * @secure
   */
  notificationsControllerCreateAdminNotification = (data: CreateAdminNotificationDto, params: RequestParams = {}) =>
    this.request<NotificationDto, any>({
      path: `/api/v1/notifications/admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerCreateDonation
   * @request POST:/api/v1/donations
   * @secure
   */
  donationsControllerCreateDonation = (data: CreateDonationDto, params: RequestParams = {}) =>
    this.request<DonationDto, any>({
      path: `/api/v1/donations`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerCreateWingDonation
   * @request POST:/api/v1/wing-donations
   * @secure
   */
  donationsControllerCreateWingDonation = (data: CreateWingDonationDto, params: RequestParams = {}) =>
    this.request<WingDonationDto, any>({
      path: `/api/v1/wing-donations`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerCreateRandomDonation
   * @request POST:/api/v1/donations/random
   * @secure
   */
  donationsControllerCreateRandomDonation = (params: RequestParams = {}) =>
    this.request<DonationDto, any>({
      path: `/api/v1/donations/random`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerGetUserDonations
   * @summary Get donations by userId (Public/Authorized)
   * @request GET:/api/v1/donations/users/{userId}
   * @secure
   */
  donationsControllerGetUserDonations = (
    userId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DonationDto[];
      },
      any
    >({
      path: `/api/v1/donations/users/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerGetDreamDonations
   * @summary Get donations by dreamId
   * @request GET:/api/v1/donations/dreams/{dreamId}
   */
  donationsControllerGetDreamDonations = (
    dreamId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DonationDto[];
      },
      any
    >({
      path: `/api/v1/donations/dreams/${dreamId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerFindAllDonations
   * @summary Get all donations
   * @request GET:/api/v1/admin/donations
   * @secure
   */
  donationsControllerFindAllDonations = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DonationDto[];
      },
      any
    >({
      path: `/api/v1/admin/donations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerGetUserWingDonations
   * @summary Get wing donations by userId
   * @request GET:/api/v1/wing-donations/users/{userId}
   * @secure
   */
  donationsControllerGetUserWingDonations = (
    userId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationDto[];
      },
      any
    >({
      path: `/api/v1/wing-donations/users/${userId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerGetCharityWingDonations
   * @summary Get wing donations by charityId
   * @request GET:/api/v1/p/wing-donations/charities/{charityId}
   */
  donationsControllerGetCharityWingDonations = (
    charityId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationDto[];
      },
      any
    >({
      path: `/api/v1/p/wing-donations/charities/${charityId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerFindAllWingDonations
   * @summary Get all wing donations
   * @request GET:/api/v1/admin/wing-donations
   * @secure
   */
  donationsControllerFindAllWingDonations = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationDto[];
      },
      any
    >({
      path: `/api/v1/admin/wing-donations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerFindLastDonations
   * @summary Get last 25 dreams donations
   * @request GET:/api/v1/donations/last
   * @secure
   */
  donationsControllerFindLastDonations = (params: RequestParams = {}) =>
    this.request<DonationDto[], any>({
      path: `/api/v1/donations/last`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donations
   * @name DonationsControllerFindTopDonors
   * @summary Get top donors this month
   * @request GET:/api/v1/donations/top-donors-this-month
   * @secure
   */
  donationsControllerFindTopDonors = (params: RequestParams = {}) =>
    this.request<TopDonorDto[], any>({
      path: `/api/v1/donations/top-donors-this-month`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerCreate
   * @summary Create charity
   * @request POST:/api/v1/admin/charities
   * @secure
   */
  charitiesControllerCreate = (data: CreateCharityDto, params: RequestParams = {}) =>
    this.request<CharityDto, any>({
      path: `/api/v1/admin/charities`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerFindAllCharities
   * @summary Get all charities with deleted
   * @request GET:/api/v1/admin/charities
   * @secure
   */
  charitiesControllerFindAllCharities = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: CharityDto[];
      },
      any
    >({
      path: `/api/v1/admin/charities`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerFindAll
   * @summary Get all charities
   * @request GET:/api/v1/charities
   * @secure
   */
  charitiesControllerFindAll = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: CharityDto[];
      },
      any
    >({
      path: `/api/v1/charities`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerFindOneCharity
   * @summary Get charity by id
   * @request GET:/api/v1/charities/{charityId}
   * @secure
   */
  charitiesControllerFindOneCharity = (charityId: string, params: RequestParams = {}) =>
    this.request<CharityDto, any>({
      path: `/api/v1/charities/${charityId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerFindOneForPublic
   * @summary Get charity by id for public
   * @request GET:/api/v1/p/charities/{charityId}
   */
  charitiesControllerFindOneForPublic = (charityId: string, params: RequestParams = {}) =>
    this.request<CharityDto, any>({
      path: `/api/v1/p/charities/${charityId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerUpdate
   * @summary Update charity by id
   * @request PATCH:/api/v1/admin/charities/{charityId}
   * @secure
   */
  charitiesControllerUpdate = (charityId: string, data: UpdateCharityDto, params: RequestParams = {}) =>
    this.request<CharityDto, any>({
      path: `/api/v1/admin/charities/${charityId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerRemove
   * @summary Delete charity by id
   * @request DELETE:/api/v1/admin/charities/{charityId}
   * @secure
   */
  charitiesControllerRemove = (charityId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/charities/${charityId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerRestore
   * @summary Restore charity by id
   * @request PATCH:/api/v1/admin/restore/charities/{charityId}
   * @secure
   */
  charitiesControllerRestore = (charityId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/restore/charities/${charityId}`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Charities
   * @name CharitiesControllerUpdateCharityLike
   * @summary Like charity
   * @request PATCH:/api/v1/charities/{charityId}/like
   * @secure
   */
  charitiesControllerUpdateCharityLike = (charityId: string, params: RequestParams = {}) =>
    this.request<CharityDto, any>({
      path: `/api/v1/charities/${charityId}/like`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityControllerGetSpecificActivity
   * @summary Get activity of logged in user
   * @request GET:/api/v1/me/activity
   * @secure
   */
  activityControllerGetSpecificActivity = (
    query: {
      type: "LIKE" | "COMMENT" | "DONATION" | "ALL";
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: ActivityDto[];
      },
      any
    >({
      path: `/api/v1/me/activity`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityControllerGetActivity
   * @summary Get activity of a specific users
   * @request GET:/api/v1/me/{userId}/activity
   * @secure
   */
  activityControllerGetActivity = (
    userId: string,
    query: {
      type: "LIKE" | "COMMENT" | "DONATION" | "ALL";
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: ActivityDto[];
      },
      any
    >({
      path: `/api/v1/me/${userId}/activity`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charity Images
   * @name CharityImagesControllerUploadImage
   * @summary Upload charity image
   * @request POST:/api/v1/admin/charity/{charityId}/image
   * @secure
   */
  charityImagesControllerUploadImage = (
    charityId: string,
    data: {
      /** @format binary */
      image?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/admin/charity/${charityId}/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Charity Images
   * @name CharityImagesControllerUploadMultipleFiles
   * @summary Upload charity images
   * @request POST:/api/v1/admin/charity/{charityId}/images
   * @secure
   */
  charityImagesControllerUploadMultipleFiles = (
    charityId: string,
    data: {
      images?: File[];
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/admin/charity/${charityId}/images`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Charity Images
   * @name CharityImagesControllerUpdateProfile
   * @summary Set charity image as main
   * @request PATCH:/api/v1/admin/charity/{charityId}/image/{imageId}/main
   * @secure
   */
  charityImagesControllerUpdateProfile = (charityId: string, imageId: string, params: RequestParams = {}) =>
    this.request<CharityImageDto, any>({
      path: `/api/v1/admin/charity/${charityId}/image/${imageId}/main`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Charity Images
   * @name CharityImagesControllerRemove
   * @summary Delete charity image
   * @request DELETE:/api/v1/admin/charity/{charityId}/image/{imageId}
   * @secure
   */
  charityImagesControllerRemove = (charityId: string, imageId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/charity/${charityId}/image/${imageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerCreateDreamComment
   * @request POST:/api/v1/dreams/comments
   * @secure
   */
  commentsControllerCreateDreamComment = (data: CreateDreamCommentDto, params: RequestParams = {}) =>
    this.request<DreamCommentDto, any>({
      path: `/api/v1/dreams/comments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerUpdateDreamComment
   * @summary Update dream comment by id
   * @request PATCH:/api/v1/dreams/comments/{dreamCommentId}
   * @secure
   */
  commentsControllerUpdateDreamComment = (
    dreamCommentId: string,
    data: UpdateDreamCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<DreamCommentDto, any>({
      path: `/api/v1/dreams/comments/${dreamCommentId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerRemoveDreamComment
   * @summary Delete dream comment by id
   * @request DELETE:/api/v1/dreams/comments/{dreamCommentId}
   * @secure
   */
  commentsControllerRemoveDreamComment = (dreamCommentId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/dreams/comments/${dreamCommentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetDreamComments
   * @summary Get dream comments by dreamId
   * @request GET:/api/v1/dreams/{dreamId}/comments
   * @secure
   */
  commentsControllerGetDreamComments = (
    dreamId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamCommentDto[];
      },
      any
    >({
      path: `/api/v1/dreams/${dreamId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetDreamCommentsByCommentId
   * @summary Get dream comments by commentId
   * @request GET:/api/v1/dream/{dreamId}/comments/{commentId}
   * @secure
   */
  commentsControllerGetDreamCommentsByCommentId = (
    dreamId: string,
    commentId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: DreamCommentDto[];
      },
      any
    >({
      path: `/api/v1/dream/${dreamId}/comments/${commentId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetDreamCommentsForPublic
   * @summary Get dream comments by dreamId for public page
   * @request GET:/api/v1/p/dreams/{dreamId}/comments
   */
  commentsControllerGetDreamCommentsForPublic = (dreamId: string, params: RequestParams = {}) =>
    this.request<
      PageDto & {
        results?: DreamCommentDto[];
      },
      any
    >({
      path: `/api/v1/p/dreams/${dreamId}/comments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerCreateCharityComment
   * @request POST:/api/v1/charities/comments
   * @secure
   */
  commentsControllerCreateCharityComment = (data: CreateCharityCommentDto, params: RequestParams = {}) =>
    this.request<CharityCommentDto, any>({
      path: `/api/v1/charities/comments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerUpdate
   * @summary Update charity comment by id
   * @request PATCH:/api/v1/charitites/comments/{id}
   * @secure
   */
  commentsControllerUpdate = (id: string, data: UpdateCharityCommentDto, params: RequestParams = {}) =>
    this.request<CharityCommentDto, any>({
      path: `/api/v1/charitites/comments/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetCharityComments
   * @summary Get charity comments by charityId
   * @request GET:/api/v1/charitites/{charityId}/comments
   * @secure
   */
  commentsControllerGetCharityComments = (
    charityId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: CharityCommentDto[];
      },
      any
    >({
      path: `/api/v1/charitites/${charityId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetCharityCommentsByCharityId
   * @summary Get charity comments by commentId
   * @request GET:/api/v1/charities/{charityId}/comments/{commentId}
   * @secure
   */
  commentsControllerGetCharityCommentsByCharityId = (
    charityId: string,
    commentId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: CharityCommentDto[];
      },
      any
    >({
      path: `/api/v1/charities/${charityId}/comments/${commentId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetCharityCommentsForPublic
   * @summary Get charity comments by charityId for public page
   * @request GET:/api/v1/p/charities/{charityId}/comments
   */
  commentsControllerGetCharityCommentsForPublic = (charityId: string, params: RequestParams = {}) =>
    this.request<
      PageDto & {
        results?: CharityCommentDto[];
      },
      any
    >({
      path: `/api/v1/p/charities/${charityId}/comments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerDeleteCharityComment
   * @summary Delete charity comment by id
   * @request DELETE:/api/v1/charities/comments/{charityCommentId}
   * @secure
   */
  commentsControllerDeleteCharityComment = (charityCommentId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/charities/comments/${charityCommentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerCreateNewsfeedDreamAngelComment
   * @request POST:/api/v1/newsfeed-dream-angel/comments
   * @secure
   */
  commentsControllerCreateNewsfeedDreamAngelComment = (
    data: CreateNewsfeedDreamAngelCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<NewsfeedDreamAngelCommentDto, any>({
      path: `/api/v1/newsfeed-dream-angel/comments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerUpdateDreamAngelComment
   * @summary Update newsfeed dream angel comment by id
   * @request PATCH:/api/v1/newsfeed-dream-angel/comments/{commentId}
   * @secure
   */
  commentsControllerUpdateDreamAngelComment = (
    commentId: string,
    data: UpdateDreamAngelCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<NewsfeedDreamAngelCommentDto, any>({
      path: `/api/v1/newsfeed-dream-angel/comments/${commentId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetDreamAngelComments
   * @summary Get newsfeed dream angel comments by newsFeedId
   * @request GET:/api/v1/newsfeed-dream-angel/{newsFeedId}/comments
   * @secure
   */
  commentsControllerGetDreamAngelComments = (
    newsFeedId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: NewsfeedDreamAngelCommentDto[];
      },
      any
    >({
      path: `/api/v1/newsfeed-dream-angel/${newsFeedId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetNewsfeedDreamAngelCommentsByCommentId
   * @summary Get newsfeed dream angel comments by commentId
   * @request GET:/api/v1/newsfeed/{newsFeedId}/comments/{commentId}
   * @secure
   */
  commentsControllerGetNewsfeedDreamAngelCommentsByCommentId = (
    newsFeedId: string,
    commentId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: CharityCommentDto[];
      },
      any
    >({
      path: `/api/v1/newsfeed/${newsFeedId}/comments/${commentId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetNewsfeedDreamAngelCommentsForPublic
   * @summary Get newsfeed dream angel comments by dreamAngelId for public page
   * @request GET:/api/v1/p/newsfeed-dream-angel/{newsFeedId}/comments
   */
  commentsControllerGetNewsfeedDreamAngelCommentsForPublic = (
    newsFeedId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: NewsfeedDreamAngelCommentDto[];
      },
      any
    >({
      path: `/api/v1/p/newsfeed-dream-angel/${newsFeedId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerCreateWingDonationComment
   * @request POST:/api/v1/wing-donation/{wingDonationId}/comments
   * @secure
   */
  commentsControllerCreateWingDonationComment = (
    wingDonationId: string,
    data: CreateWingDonationCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<WingDonationCommentDto, any>({
      path: `/api/v1/wing-donation/${wingDonationId}/comments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetWingDonationCommentsByWingDonationId
   * @summary Get wing donation comments by wingDonationId
   * @request GET:/api/v1/wing-donation/{wingDonationId}/comments
   * @secure
   */
  commentsControllerGetWingDonationCommentsByWingDonationId = (
    wingDonationId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationCommentDto[];
      },
      any
    >({
      path: `/api/v1/wing-donation/${wingDonationId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerUpdateWingDonationComment
   * @summary Update  wing donation comment by id
   * @request PATCH:/api/v1/wing-donation/comments/{wingDonationCommentId}
   * @secure
   */
  commentsControllerUpdateWingDonationComment = (
    wingDonationCommentId: string,
    data: UpdateWingDonationCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<WingDonationCommentDto, any>({
      path: `/api/v1/wing-donation/comments/${wingDonationCommentId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetWingDonationCommentsById
   * @summary Get wing donation comments by commentId
   * @request GET:/api/v1/wing-donation/{wingDonationId}/comments/{commentId}
   * @secure
   */
  commentsControllerGetWingDonationCommentsById = (
    wingDonationId: string,
    commentId: string,
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: WingDonationCommentDto[];
      },
      any
    >({
      path: `/api/v1/wing-donation/${wingDonationId}/comments/${commentId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerRemoveWingDonationComment
   * @summary Delete wing donation comment by id
   * @request DELETE:/api/v1/wing-donation/{wingDonationId}/comments/{commentId}
   * @secure
   */
  commentsControllerRemoveWingDonationComment = (
    commentId: string,
    wingDonationId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/wing-donation/${wingDonationId}/comments/${commentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsControllerGetWingDonationCommentsForPublic
   * @summary Get wing donation comments by wingDonationID for public page
   * @request GET:/api/v1/p/wing-donation/{wingDonationId}/comments
   */
  commentsControllerGetWingDonationCommentsForPublic = (wingDonationId: string, params: RequestParams = {}) =>
    this.request<
      PageDto & {
        results?: WingDonationCommentDto[];
      },
      any
    >({
      path: `/api/v1/p/wing-donation/${wingDonationId}/comments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Confirmation
   * @name EmailConfirmationControllerSendVerifyLink
   * @request POST:/api/v1/email/verify
   */
  emailConfirmationControllerSendVerifyLink = (
    data: {
      /** @format email */
      email?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/email/verify`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Email Confirmation
   * @name EmailConfirmationControllerConfirm
   * @request POST:/api/v1/email/confirm
   * @secure
   */
  emailConfirmationControllerConfirm = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/email/confirm`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerFindAllUserPayments
   * @summary Get all user payments
   * @request GET:/api/v1/payments
   * @secure
   */
  paymentsControllerFindAllUserPayments = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerGetConfigStripe
   * @summary Get payments stripe config
   * @request GET:/api/v1/payments/config
   * @secure
   */
  paymentsControllerGetConfigStripe = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/config`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerCreateCheckoutSession
   * @summary Create stripe checkout session
   * @request POST:/api/v1/payments/checkout-session
   * @secure
   */
  paymentsControllerCreateCheckoutSession = (data: CreateCheckoutSessionDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/checkout-session`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerCreateCustomerPortalSession
   * @summary Customer portal session
   * @request POST:/api/v1/payments/customer-portal-session
   * @secure
   */
  paymentsControllerCreateCustomerPortalSession = (data: CreateCustomerPortalSessionDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/customer-portal-session`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerGetCheckoutSession
   * @summary Get stripe checkout session
   * @request GET:/api/v1/payments/checkout-session/{sessionId}
   * @secure
   */
  paymentsControllerGetCheckoutSession = (sessionId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/checkout-session/${sessionId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerFindAll
   * @summary Get all payments
   * @request GET:/api/v1/admin/payments
   * @secure
   */
  paymentsControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/payments`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerGetUserSubscription
   * @summary Get user subscriptions
   * @request GET:/api/v1/payments/subscriptions
   * @secure
   */
  paymentsControllerGetUserSubscription = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/subscriptions`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name PaymentsControllerDeleteUserSubscription
   * @summary Cancel user subscriptions by subscription id
   * @request DELETE:/api/v1/payments/subscriptions/{subscriptionId}
   * @secure
   */
  paymentsControllerDeleteUserSubscription = (subscriptionId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/payments/subscriptions/${subscriptionId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Stripe Webhook
   * @name StripeWebhookControllerHandleIncomingEvents
   * @request POST:/api/v1/stripe-webhook
   */
  stripeWebhookControllerHandleIncomingEvents = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/stripe-webhook`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stripe Webhook
   * @name StripeWebhookControllerGetSubscriptionStatus
   * @request GET:/api/v1/stripe-webhook/subscription-status
   * @secure
   */
  stripeWebhookControllerGetSubscriptionStatus = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/stripe-webhook/subscription-status`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Feedbacks
   * @name FeedbacksControllerCreate
   * @request POST:/api/v1/feedbacks
   * @secure
   */
  feedbacksControllerCreate = (data: CreateFeedbackDto, params: RequestParams = {}) =>
    this.request<FeedbackDto, any>({
      path: `/api/v1/feedbacks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Feedbacks
   * @name FeedbacksControllerFindAll
   * @summary Get all feedbacks
   * @request GET:/api/v1/admin/feedbacks
   * @secure
   */
  feedbacksControllerFindAll = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: FeedbackDto[];
      },
      any
    >({
      path: `/api/v1/admin/feedbacks`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Feedbacks
   * @name FeedbacksControllerFindOne
   * @summary Get feedback by id
   * @request GET:/api/v1/admin/feedbacks/{feedbackId}
   * @secure
   */
  feedbacksControllerFindOne = (feedbackId: string, params: RequestParams = {}) =>
    this.request<FeedbackDto, any>({
      path: `/api/v1/admin/feedbacks/${feedbackId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Feedbacks
   * @name FeedbacksControllerRemove
   * @summary Delete feedback by id
   * @request DELETE:/api/v1/admin/feedbacks/{feedbackId}
   * @secure
   */
  feedbacksControllerRemove = (feedbackId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/admin/feedbacks/${feedbackId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerCreate
   * @summary Create a payout
   * @request POST:/api/v1/payouts
   * @secure
   */
  payoutsControllerCreate = (data: CreatePayoutDto, params: RequestParams = {}) =>
    this.request<PayoutDto, any>({
      path: `/api/v1/payouts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerFindByUserId
   * @summary Get logged in user payouts
   * @request GET:/api/v1/payouts
   * @secure
   */
  payoutsControllerFindByUserId = (params: RequestParams = {}) =>
    this.request<PayoutDto[], any>({
      path: `/api/v1/payouts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerFindByDreamId
   * @summary Get logged in user payouts by dreamId
   * @request GET:/api/v1/payouts/dreams/{dreamId}
   * @secure
   */
  payoutsControllerFindByDreamId = (dreamId: string, params: RequestParams = {}) =>
    this.request<PayoutDto[], any>({
      path: `/api/v1/payouts/dreams/${dreamId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerFindAll
   * @summary Get all payouts
   * @request GET:/api/v1/admin/payouts
   * @secure
   */
  payoutsControllerFindAll = (
    query?: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      PageDto & {
        results?: PayoutDto[];
      },
      any
    >({
      path: `/api/v1/admin/payouts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerFindOne
   * @summary Get payout by id
   * @request GET:/api/v1/admin/payouts/{payoutId}
   * @secure
   */
  payoutsControllerFindOne = (payoutId: string, params: RequestParams = {}) =>
    this.request<PayoutDto, any>({
      path: `/api/v1/admin/payouts/${payoutId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payouts
   * @name PayoutsControllerUpdate
   * @summary Update payout
   * @request PATCH:/api/v1/admin/payouts/{payoutId}
   * @secure
   */
  payoutsControllerUpdate = (payoutId: string, data: UpdatePayoutDto, params: RequestParams = {}) =>
    this.request<PayoutDto, any>({
      path: `/api/v1/admin/payouts/${payoutId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessageControllerFindAll
   * @summary Get all messages
   * @request GET:/api/v1/messages
   * @secure
   */
  messageControllerFindAll = (
    query: {
      /** @default "ASC" */
      order?: "ASC" | "DESC";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 50
       * @default 10
       */
      take?: number;
      /** @example "daa93882-7788-43f0-9565-102082860893" */
      to: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MessageDto, any>({
      path: `/api/v1/messages`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessageControllerAcceptMessage
   * @summary Accept message request
   * @request POST:/api/v1/messages/accept-request/{toUserId}
   * @secure
   */
  messageControllerAcceptMessage = (toUserId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/messages/accept-request/${toUserId}`,
      method: "POST",
      secure: true,
      ...params,
    });
}
