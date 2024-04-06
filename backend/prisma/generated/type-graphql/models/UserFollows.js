"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollows = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollows = class UserFollows {
};
exports.UserFollows = UserFollows;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollows.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollows.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollows.prototype, "followingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollows.prototype, "createdAt", void 0);
exports.UserFollows = UserFollows = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserFollows", {})
], UserFollows);
