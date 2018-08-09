import {User} from "./user";
import {Feed} from "./feed";
import {Group} from "./group";
import {Event} from "./event";
import {Model} from "./model";

export class SearchResultTypes extends Model {
    _users?: UserSearchResult;
    _feeds?: FeedsSearchResult;
    _groups?: GroupSearchResult;
    _events?: EventSearchResult;

    set users(o: UserSearchResult) {
        this._users = new UserSearchResult(o);
    }

    get users(): UserSearchResult {
        return this._users;
    }

    set feeds(o: FeedsSearchResult) {
        this._feeds = new FeedsSearchResult(o);
    }

    get feeds(): FeedsSearchResult {
        return this._feeds;
    }

    set groups(o: GroupSearchResult) {
        this._groups = new GroupSearchResult(o);
    }

    get groups(): GroupSearchResult {
        return this._groups;
    }

    set events(o: EventSearchResult) {
        this._events = new EventSearchResult(o);
    }

    get events(): EventSearchResult {
        return this._events;
    }
}

interface SearchResultValue<T> {
    matched_count: number;
    data: T[];
}

class UserSearchResult extends Model implements SearchResultValue<User> {
    matched_count: number;
    _data: User[];

    set data(users: User[]) {
        if (!users) {
            return
        }
        let list: User[] = [];
        for (let user of users) {
            list.push(new User(user));
        }
        this._data = list;
    }
}

class FeedsSearchResult extends Model implements SearchResultValue<Feed> {
    matched_count: number;
    _data: Feed[];

    set data(feeds: Feed[]) {
        if (!feeds) {
            return
        }
        let list: Feed[] = [];
        for (let feed of feeds) {
            list.push(new Feed(feed));
        }
        this._data = list;
    }
}

class GroupSearchResult extends Model implements SearchResultValue<Group> {
    matched_count: number;
    _data: Group[];

    set data(groups: Group[]) {
        if (!groups) {
            return
        }
        let list: Group[] = [];
        for (let group of groups) {
            list.push(new Group(group));
        }
        this._data = list;
    }
}

class EventSearchResult extends Model implements SearchResultValue<Event> {
    matched_count: number;
    _data: Event[];

    set data(events: Event[]) {
        if (!events) {
            return
        }
        let list: Event[] = [];
        for (let event of events) {
            list.push(new Event(event));
        }
        this._data = list;
    }
}