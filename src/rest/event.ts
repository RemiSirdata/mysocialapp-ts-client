import {Rest} from "./rest";
import {SimpleLocation} from "../models/simple_location";
import {Event} from "../models/event";
import {CustomField} from "../models/custom_field";
import {EventMember} from "../models/event_member";
import {Empty} from "../models/empty";
import {Photo} from "../models/photo";
import {AccessControl} from "../models/access_control";
import {Feed} from "../models/feed";
import {TagEntities} from "../models/tag_entities";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestEvent extends Rest {
    async list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Event[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['limited'] = limited === true;
        params['size'] = size;
        if (location !== undefined) {
            params['latitude'] = location.latitude;
            params['longitude'] = location.longitude;
        }
        return this.conf.getList(new Event(), "/event?" + Rest.encodeQueryData(params)) as Promise<Event[]>;
    }

    async listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number,
                     upperLatitude: number, upperLongitude: number): Promise<Event[]> {
        let params = {
            lower_latitude: lowerLatitude,
            lower_longitude: lowerLongitude,
            upper_latitude: upperLatitude,
            upper_longitude: upperLongitude
        };
        return this.list(page, limited, size, undefined, params);
    }

    async get(id: string): Promise<Event> {
        return this.conf.get(new Event(), "/event/" + id) as Promise<Event>;
    }

    async create(event: Event): Promise<Event> {
        return this.conf.post(new Event(), "/event", event)as Promise<Event>;
    }

    async update(event: Event): Promise<Event> {
        return this.conf.put(new Event(), "/event/" + event.id, event) as Promise<Event>;
    }

    async cancel(id: string): Promise<void> {
        return this.conf.postVoid(Rest.params("/event/{id}/cancel", {id: id}), new Empty());
    }

    async getCustomFields(): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), "/event/customfield") as Promise<CustomField[]>;
    }

    async getEventCustomFields(id: string): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), Rest.params("/event/{id}/customfield", {id: id})) as Promise<CustomField[]>;
    }

    async getMembers(id: string): Promise<EventMember[]> {
        return this.conf.getList(new EventMember(), Rest.params("event/{id}/member", {id: id})) as Promise<EventMember[]>;
    }

    async join(eventId: string): Promise<EventMember> {
        return this.conf.post(new EventMember(), Rest.params("/event/{id}/member", {id: eventId}), new Empty()) as Promise<EventMember>;
    }

    async leave(eventId: string): Promise<void> {
        return this.conf.delete(Rest.params("/event/{id}/member", {id: eventId}));
    }

    async getPhotos(eventId: string, page?: number): Promise<Photo[]> {
        let params = {page: page !== undefined ? page : 0};
        let path = Rest.params("/event/{id}/photo", {id: eventId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Photo(), path) as Promise<Photo[]>;
    }

    async addPhoto(eventId: string, photo: FileData, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        if (message !== undefined) {
            f.append("message", message);
        }
        if (accessControl !== undefined) {
            f.append("access_control", accessControl)
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        return this.conf.postMultipart(new Feed(), Rest.params("/event/{id}/photo", {id: eventId}), f) as Promise<Feed>;
    }

    async getProfilePhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/event/{id}/profile/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfilePhoto(eventId: string, photo: FileData): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), Rest.params("/event/{id}/profile/photo", {id: eventId}), f) as Promise<Photo>;

    }

    async getProfileCoverPhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/event/{id}/profile/cover/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfileCoverPhoto(eventId: string, photo: FileData): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), Rest.params("/event/{id}/profile/cover/photo", {id: eventId}), f) as Promise<Photo>;

    }

}