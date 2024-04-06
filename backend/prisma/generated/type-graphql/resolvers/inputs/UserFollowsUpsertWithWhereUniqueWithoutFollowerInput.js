"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateWithoutFollowerInput_1 = require("../inputs/UserFollowsCreateWithoutFollowerInput");
const UserFollowsUpdateWithoutFollowerInput_1 = require("../inputs/UserFollowsUpdateWithoutFollowerInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpsertWithWhereUniqueWithoutFollowerInput = class UserFollowsUpsertWithWhereUniqueWithoutFollowerInput {
};
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowerInput = UserFollowsUpsertWithWhereUniqueWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateWithoutFollowerInput_1.UserFollowsUpdateWithoutFollowerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateWithoutFollowerInput_1.UserFollowsUpdateWithoutFollowerInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateWithoutFollowerInput_1.UserFollowsCreateWithoutFollowerInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowerInput.prototype, "create", void 0);
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowerInput = UserFollowsUpsertWithWhereUniqueWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpsertWithWhereUniqueWithoutFollowerInput", {})
], UserFollowsUpsertWithWhereUniqueWithoutFollowerInput);
