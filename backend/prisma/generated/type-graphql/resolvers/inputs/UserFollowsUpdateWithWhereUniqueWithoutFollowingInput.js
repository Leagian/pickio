"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsUpdateWithoutFollowingInput_1 = require("../inputs/UserFollowsUpdateWithoutFollowingInput");
const UserFollowsWhereUniqueInput_1 = require("../inputs/UserFollowsWhereUniqueInput");
let UserFollowsUpdateWithWhereUniqueWithoutFollowingInput = class UserFollowsUpdateWithWhereUniqueWithoutFollowingInput {
};
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowingInput = UserFollowsUpdateWithWhereUniqueWithoutFollowingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UserFollowsUpdateWithWhereUniqueWithoutFollowingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateWithoutFollowingInput_1.UserFollowsUpdateWithoutFollowingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateWithoutFollowingInput_1.UserFollowsUpdateWithoutFollowingInput)
], UserFollowsUpdateWithWhereUniqueWithoutFollowingInput.prototype, "data", void 0);
exports.UserFollowsUpdateWithWhereUniqueWithoutFollowingInput = UserFollowsUpdateWithWhereUniqueWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateWithWhereUniqueWithoutFollowingInput", {})
], UserFollowsUpdateWithWhereUniqueWithoutFollowingInput);
