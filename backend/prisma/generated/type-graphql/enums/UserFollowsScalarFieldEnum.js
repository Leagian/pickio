"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserFollowsScalarFieldEnum;
(function (UserFollowsScalarFieldEnum) {
    UserFollowsScalarFieldEnum["UserFollowsId"] = "UserFollowsId";
    UserFollowsScalarFieldEnum["followerId"] = "followerId";
    UserFollowsScalarFieldEnum["followingId"] = "followingId";
    UserFollowsScalarFieldEnum["createdAt"] = "createdAt";
})(UserFollowsScalarFieldEnum || (exports.UserFollowsScalarFieldEnum = UserFollowsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserFollowsScalarFieldEnum, {
    name: "UserFollowsScalarFieldEnum",
    description: undefined,
});
