import {ErrorResponse} from "../../src/rest/error";
import {catchErrorFunc, createAccountAndGetSession} from "../common";
import {Conversation} from "../../src/models/conversation";
import {ConversationMessagePost} from "../../src/models/conversation_message_post";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();

            const user2 = await session1.user.get(account2.id);

            // create conversation
            let conversation1 = await session1.conversation.create(new Conversation().setName("test").addMember(user2));
            let message1 = await conversation1.sendMessage(new ConversationMessagePost().setMessage("ping"));

            // get message with user 2 and reply back
            let conversation2 = await session2.conversation.get(conversation1.id);
            expect(conversation2.messages.samples[0].message == "ping").toBeTruthy();
            let message2 = await conversation2.messages.samples[0].replyBack(new ConversationMessagePost().setMessage("pong"));

            // get user 1 notifications, check if
            let events = await session1.account.getEvents();
            expect(events.conversation.total_unreads).toBeGreaterThan(0);

            // update title
            let newConversation1 = await conversation1.setName("changed title").update();
            expect(newConversation1.name == conversation1.name).toBeTruthy();


            /* NOT YET IMPLEMENTED
            message2.message = "pingpong";
            let message2_2 = await message2.update();
            expect(message2_2.message == message2.message).toBeTruthy();
            */


        } catch (err) {
            catchErrorFunc(err);
        }
    });
});