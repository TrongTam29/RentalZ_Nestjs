import { UserComment } from "./user-comment.model";


export const userCommentProviders = [
    {
        provide: 'USER_COMMENT_REPOSITORY',
        useValue: UserComment,
    },
];