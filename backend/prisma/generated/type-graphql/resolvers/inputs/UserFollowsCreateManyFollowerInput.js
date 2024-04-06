"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateManyFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsCreateManyFollowerInput = class UserFollowsCreateManyFollowerInput {
};
exports.UserFollowsCreateManyFollowerInput = UserFollowsCreateManyFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyFollowerInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyFollowerInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateManyFollowerInput.prototype, "createdAt", void 0);
exports.UserFollowsCreateManyFollowerInput = UserFollowsCreateManyFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateManyFollowerInput", {})
], UserFollowsCreateManyFollowerInput);
