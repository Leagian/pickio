"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsCreateManyInput = class UserFollowsCreateManyInput {
};
exports.UserFollowsCreateManyInput = UserFollowsCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyInput.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateManyInput.prototype, "createdAt", void 0);
exports.UserFollowsCreateManyInput = UserFollowsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateManyInput", {})
], UserFollowsCreateManyInput);
