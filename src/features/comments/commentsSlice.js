import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCamsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
}

