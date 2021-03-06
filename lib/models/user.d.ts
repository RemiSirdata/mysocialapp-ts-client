import { Photo } from "./photo";
import { CustomField } from "./custom_field";
import { Status } from "./status";
import { Location } from "./location";
import { Flag } from "./flag";
import { Model } from "./model";
import { Gender } from "./gender";
import { Feed } from "./feed";
import { FeedPost } from "./feed_post";
import { PhotoAlbum } from "./photo_album";
export declare class User extends Model {
    private _profile_photo?;
    private _custom_fields?;
    private _living_location;
    private _current_status;
    private _flag;
    private _user_stat;
    private _displayed_photo;
    private _profile_cover_photo;
    id_str?: string;
    type?: string;
    displayed_name: string;
    updated_date?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[];
    is_friend?: boolean;
    is_requested_as_friend?: boolean;
    getJsonParameters(): {};
    id: any;
    displayed_photo: Photo;
    profile_photo: Photo;
    profile_cover_photo: Photo;
    flag: Flag;
    living_location: Location;
    current_status: Status;
    custom_fields: CustomField[];
    /**
     * return true if field found
     * @param {string} id
     * @param value
     * @returns {boolean}
     */
    setCustomFieldValueById(id: string, value: any): boolean;
    listNewsFeed(page: number, size: number): Promise<Feed[]>;
    createFeedPost(post: FeedPost): Promise<Feed>;
    removeFriend(): Promise<void>;
    listFriends(page: number, size: number): Promise<User[]>;
    requestAsFriend(): Promise<User>;
    cancelFriendRequest(): Promise<void>;
    acceptFriendRequest(): Promise<User>;
    refuseFriendRequest(): Promise<void>;
    listPhotoAlbum(page: number, size: number): Promise<PhotoAlbum[]>;
}
