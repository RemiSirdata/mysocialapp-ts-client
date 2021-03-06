import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";
import {SearchUser} from "./search/user";
import {SearchResults} from "./models/search_results";

export class FluentUser extends FluentAbstract {
    async list(page: number, size: number = 10, params = {}): Promise<User[]> {
        return this.session.clientService.user.list(page, undefined, size, undefined, params);
    }

    async get(id: string): Promise<User> {
        return this.session.clientService.user.get(id);
    }

    async getByExternalId(id: string): Promise<User> {
        return this.session.clientService.userExternal.get(id);
    }

    /**
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<User[]>}
     */
    async search(search: SearchUser, page: number, size: number = 10): Promise<SearchResults> {
        return this.session.clientService.search.get(page, size, search.toQueryParams());
    }
}