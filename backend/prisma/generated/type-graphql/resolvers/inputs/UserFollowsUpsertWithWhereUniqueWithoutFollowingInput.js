"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateWithoutFollowingInput_1 = require("../inputs/UserFollowsCreateWithoutFollowingInput");
const UserFollowsUpdateWithoutFollowingInput_1 = require("../inputs/UserFollowsUpdateWithoutFollowingInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpsertWithWhereUniqueWithoutFollowingInput = class UserFollowsUpsertWithWhereUniqueWithoutFollowingInput {
};
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowingInput = UserFollowsUpsertWithWhereUniqueWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateWithoutFollowingInput_1.UserFollowsUpdateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateWithoutFollowingInput_1.UserFollowsUpdateWithoutFollowingInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateWithoutFollowingInput_1.UserFollowsCreateWithoutFollowingInput)
], UserFollowsUpsertWithWhereUniqueWithoutFollowingInput.prototype, "create", void 0);
exports.UserFollowsUpsertWithWhereUniqueWithoutFollowingInput = UserFollowsUpsertWithWhereUniqueWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpsertWithWhereUniqueWithoutFollowingInput", {})
], UserFollowsUpsertWithWhereUniqueWithoutFollowingInput);
