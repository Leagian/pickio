"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
let FindUniqueUserFollowsArgs = class FindUniqueUserFollowsArgs {
};
exports.FindUniqueUserFollowsArgs = FindUniqueUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], FindUniqueUserFollowsArgs.prototype, "where", void 0);
exports.FindUniqueUserFollowsArgs = FindUniqueUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUserFollowsArgs);
