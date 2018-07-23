import {Rest} from "./rest";
import {ConversationMessage} from "../models/conversation_message";
import {ConversationMessagePost} from "../models/conversation_message_post";

export class RestConversationMessage extends Rest {

    list(id: string, page: number, size?: number): Promise<ConversationMessage[]> {
        size = size !== undefined ? size : 10;
        let path = Rest.params("/conversation/{id}/message", {id: id});
        path = path + '?' + Rest.encodeQueryData({page: page, size: size});
        return this.conf.getList(new ConversationMessage(), path) as Promise<ConversationMessage[]>;
    }

    post(id: string, message: ConversationMessage): Promise<ConversationMessage> {
        let path = Rest.params("/conversation/{id}/message", {id: id});
        return this.conf.post(new ConversationMessage(), path, message) as Promise<ConversationMessage>;
    }

    postFile(id: string, message: ConversationMessagePost): Promise<ConversationMessage> {
        let fd = new FormData();
        fd.set("file", message.image);
        fd.set("message", message.message);
        let path = Rest.params("/conversation/{id}/message", {id: id});
        return this.conf.postMultipart(new ConversationMessage(), path, fd) as Promise<ConversationMessage>;
    }
}