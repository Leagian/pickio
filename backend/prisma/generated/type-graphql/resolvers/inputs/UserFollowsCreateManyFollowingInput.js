"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateManyFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserFollowsCreateManyFollowingInput = class UserFollowsCreateManyFollowingInput {
};
exports.UserFollowsCreateManyFollowingInput = UserFollowsCreateManyFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyFollowingInput.prototype, "UserFollowsId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserFollowsCreateManyFollowingInput.prototype, "followerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserFollowsCreateManyFollowingInput.prototype, "createdAt", void 0);
exports.UserFollowsCreateManyFollowingInput = UserFollowsCreateManyFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateManyFollowingInput", {})
], UserFollowsCreateManyFollowingInput);
