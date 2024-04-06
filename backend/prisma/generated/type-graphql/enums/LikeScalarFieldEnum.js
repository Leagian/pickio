"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LikeScalarFieldEnum;
(function (LikeScalarFieldEnum) {
    LikeScalarFieldEnum["likeId"] = "likeId";
    LikeScalarFieldEnum["postId"] = "postId";
    LikeScalarFieldEnum["userId"] = "userId";
    LikeScalarFieldEnum["createdAt"] = "createdAt";
})(LikeScalarFieldEnum || (exports.LikeScalarFieldEnum = LikeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
    name: "LikeScalarFieldEnum",
    description: undefined,
});
