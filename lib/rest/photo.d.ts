import { Rest } from "./rest";
import { Photo } from "../models/photo";
import { TagEntities } from "../models/tag_entities";
import { Feed } from "../models/feed";
import { FileData } from "../models/file";
export declare class RestPhoto extends Rest {
    list(page: number, size?: number): Promise<Photo[]>;
    get(photoId: string): Promise<Photo>;
    delete(photoId: string): Promise<void>;
    create(photo: FileData, message?: string, tagEntities?: TagEntities, albumName?: string): Promise<Feed>;
    update(photoId: string, photo: Photo): Promise<Photo>;
}
