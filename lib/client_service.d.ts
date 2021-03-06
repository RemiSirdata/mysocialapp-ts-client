import { ClientConfiguration } from "./client_configuration";
import { Configuration } from "./configuration";
import { RestLogin } from "./rest/login";
import { RestFeed } from "./rest/feed";
import { RestUserWallMessage } from "./rest/user_wall_message";
import { RestAccount } from "./rest/account";
import { RestLogout } from "./rest/logout";
import { RestConversationMessage } from "./rest/conversation_message";
import { RestRegister } from "./rest/register";
import { RestUserWall } from "./rest/user_wall";
import { RestConversation } from "./rest/conversation";
import { RestEvent } from "./rest/event";
import { RestEventWall } from "./rest/event_wall";
import { RestFeedComment } from "./rest/feed_comment";
import { RestFeedLike } from "./rest/feed_like";
import { RestFriend } from "./rest/friend";
import { RestGroup } from "./rest/group";
import { RestGroupWall } from "./rest/group_wall";
import { RestNotification } from "./rest/notification";
import { RestPhoto } from "./rest/photo";
import { RestPhotoAlbum } from "./rest/photo_album";
import { RestPhotoLike } from "./rest/photo_like";
import { RestPhotoComment } from "./rest/photo_comment";
import { RestSearch } from "./rest/search";
import { RestStatus } from "./rest/status";
import { RestStatusComment } from "./rest/status_comment";
import { RestStatusLike } from "./rest/status_like";
import { RestUser } from "./rest/user";
import { RestUserEvent } from "./rest/user_event";
import { RestUserExternal } from "./rest/user_external";
import { RestUserFriend } from "./rest/user_friend";
import { RestUserGroup } from "./rest/user_group";
import { RestShadowEntityFeed } from "./rest/shadow_entity_feed";
import { RestShadowEntityFeedMessage } from "./rest/shadow_entity_feed_message";
import { RestShadowEntityProfilePhoto } from "./rest/shadow_entity_profile_photo";
import { RestShadowEntityProfileCoverPhoto } from "./rest/shadow_entity_profile_cover_photo";
import { RestShadowEntityPhoto } from "./rest/shadow_entity_photo";
export declare class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;
    private restAccount?;
    private restConversation?;
    private restConversationMessage?;
    private restEvent?;
    private restEventWall?;
    private restFeed?;
    private restFeedComment?;
    private restFeedLike?;
    private restFriend?;
    private restGroup?;
    private restGroupWall?;
    private restLogin?;
    private restLogout?;
    private restNotification?;
    private restPhoto?;
    private restPhotoAlbum?;
    private restPhotoComment?;
    private restPhotoLike?;
    private restRegister?;
    private restSearch?;
    private restStatus?;
    private restStatusComment?;
    private restStatusLike?;
    private restUser?;
    private restUserEvent?;
    private restUserExternal?;
    private restUserFriend?;
    private restUserGroup?;
    private restUserWall?;
    private restUserWallMessage?;
    private restShadowEntityFeed?;
    private restShadowEntityPhoto?;
    private restShadowEntityFeedMessage?;
    private restShadowEntityProfilePhoto?;
    private restShadowEntityProfileCoverPhoto?;
    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration: Configuration, clientConf?: ClientConfiguration);
    readonly account: RestAccount;
    readonly conversation: RestConversation;
    readonly conversationMessage: RestConversationMessage;
    readonly event: RestEvent;
    readonly eventWall: RestEventWall;
    readonly feed: RestFeed;
    readonly feedComment: RestFeedComment;
    readonly feedLike: RestFeedLike;
    readonly friend: RestFriend;
    readonly group: RestGroup;
    readonly groupWall: RestGroupWall;
    readonly login: RestLogin;
    readonly logout: RestLogout;
    readonly notification: RestNotification;
    readonly photo: RestPhoto;
    readonly photoAlbum: RestPhotoAlbum;
    readonly photoComment: RestPhotoComment;
    readonly photoLike: RestPhotoLike;
    readonly register: RestRegister;
    readonly search: RestSearch;
    readonly status: RestStatus;
    readonly statusComment: RestStatusComment;
    readonly statusLike: RestStatusLike;
    readonly user: RestUser;
    readonly userEvent: RestUserEvent;
    readonly userExternal: RestUserExternal;
    readonly userFriend: RestUserFriend;
    readonly userGroup: RestUserGroup;
    readonly userWall: RestUserWall;
    readonly userWallMessage: RestUserWallMessage;
    readonly shadowEntityFeed: RestShadowEntityFeed;
    readonly shadowEntityPhoto: RestShadowEntityPhoto;
    readonly shadowEntityFeedMessage: RestShadowEntityFeedMessage;
    readonly shadowEntityProfilePhoto: RestShadowEntityProfilePhoto;
    readonly shadowEntityProfileCoverPhoto: RestShadowEntityProfileCoverPhoto;
}
