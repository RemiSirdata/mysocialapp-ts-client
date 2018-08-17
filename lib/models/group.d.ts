import { BaseWall } from "./base_wall";
import { Photo } from "./photo";
import { CustomField } from "./custom_field";
import { GroupMember } from "./group_member";
import { GroupMemberAccessControl } from "./group_member_access_control";
import { Location } from "./location";
import { Feed } from "./feed";
import { TextWallMessage } from "./text_wall_message";
export declare class Group extends BaseWall {
    private _location?;
    private _profile_photo?;
    private _profile_cover_photo?;
    private _members?;
    private _custom_fields?;
    name: string;
    description: string;
    open: boolean;
    member: boolean;
    approvable: boolean;
    distance_in_meters: number;
    total_members: number;
    group_member_access_control: GroupMemberAccessControl;
    getJsonParameters(): {};
    join(): Promise<GroupMember>;
    leave(): Promise<void>;
    update(): Promise<Group>;
    addMessage(message: TextWallMessage): Promise<Feed>;
    setName(name: string): Group;
    setDescription(desc: string): Group;
    setAccessControl(ac: GroupMemberAccessControl): Group;
    setLocation(l: Location): Group;
    custom_fields: CustomField[];
    members: GroupMember[];
    profile_cover_photo: Photo;
    profile_photo: Photo;
    location: Location;
}
