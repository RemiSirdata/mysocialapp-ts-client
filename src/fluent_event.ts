import {FluentAbstract} from "./fluent_abstract";
import {Event} from "./models/event";
import {CustomField} from "./models/custom_field";

export class FluentEvent extends FluentAbstract {
    async list(page: number, size: number = 10, options: {} = {}): Promise<Event[]> {
        return this.session.clientService.event.list(page, undefined, size, undefined, options);
    }

    async* stream() {
        let page = 0;
        while (true) {
            let feeds = await this.list(page++);
            if (!feeds.length) {
                return;
            }
            for (let feed of feeds) {
                yield feed;
            }
        }
    }

    async get(id: string): Promise<Event> {
        return this.session.clientService.event.get(id);
    }

    async create(event: Event): Promise<Event> {
        return this.session.clientService.event.create(event);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Event[]>}
     */
    async search(search: {}, page: number, size: number = 10): Promise<Event[]> {
        return this.session.clientService.event.list(page, undefined, size);
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        return this.session.clientService.event.getCustomFields();
    }
}