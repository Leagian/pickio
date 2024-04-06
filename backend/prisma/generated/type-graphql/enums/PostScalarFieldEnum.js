"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["postId"] = "postId";
    PostScalarFieldEnum["userId"] = "userId";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["address"] = "address";
    PostScalarFieldEnum["location"] = "location";
    PostScalarFieldEnum["images"] = "images";
    PostScalarFieldEnum["tags"] = "tags";
    PostScalarFieldEnum["createdAt"] = "createdAt";
})(PostScalarFieldEnum || (exports.PostScalarFieldEnum = PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
