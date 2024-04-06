"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsFollowerIdFollowingIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsFollowerIdFollowingIdCompoundUniqueInput = class UserFollowsFollowerIdFollowingIdCompoundUniqueInput {
};
exports.UserFollowsFollowerIdFollowingIdCompoundUniqueInput = UserFollowsFollowerIdFollowingIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsFollowerIdFollowingIdCompoundUniqueInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsFollowerIdFollowingIdCompoundUniqueInput.prototype, "followingId", void 0);
exports.UserFollowsFollowerIdFollowingIdCompoundUniqueInput = UserFollowsFollowerIdFollowingIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsFollowerIdFollowingIdCompoundUniqueInput", {})
], UserFollowsFollowerIdFollowingIdCompoundUniqueInput);
