"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["commentId"] = "commentId";
    CommentScalarFieldEnum["postId"] = "postId";
    CommentScalarFieldEnum["userId"] = "userId";
    CommentScalarFieldEnum["content"] = "content";
    CommentScalarFieldEnum["createdAt"] = "createdAt";
})(CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = CommentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
    name: "CommentScalarFieldEnum",
    description: undefined,
});
