"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsUpdateWithoutFollowerInput_1 = require("../inputs/UserFollowsUpdateWithoutFollowerInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpdateWithWhereUniqueWithoutFollowerInput = class UserFollowsUpdateWithWhereUniqueWithoutFollowerInput {
};
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowerInput = UserFollowsUpdateWithWhereUniqueWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsUpdateWithWhereUniqueWithoutFollowerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateWithoutFollowerInput_1.UserFollowsUpdateWithoutFollowerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateWithoutFollowerInput_1.UserFollowsUpdateWithoutFollowerInput)
], UserFollowsUpdateWithWhereUniqueWithoutFollowerInput.prototype, "data", void 0);
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowerInput = UserFollowsUpdateWithWhereUniqueWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateWithWhereUniqueWithoutFollowerInput", {})
], UserFollowsUpdateWithWhereUniqueWithoutFollowerInput);
