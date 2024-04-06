"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountFollowersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsWhereInput_1 = require("../../inputs/UserFollowsWhereInput");
let UserCountFollowersArgs = class UserCountFollowersArgs {
};
exports.UserCountFollowersArgs = UserCountFollowersArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], UserCountFollowersArgs.prototype, "where", void 0);
exports.UserCountFollowersArgs = UserCountFollowersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountFollowersArgs);
