"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateInput_1 = require("../../../inputs/UserFollowsCreateInput");
const UserFollowsUpdateInput_1 = require("../../../inputs/UserFollowsUpdateInput");
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
let UpsertOneUserFollowsArgs = class UpsertOneUserFollowsArgs {
};
exports.UpsertOneUserFollowsArgs = UpsertOneUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UpsertOneUserFollowsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateInput_1.UserFollowsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateInput_1.UserFollowsCreateInput)
], UpsertOneUserFollowsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateInput_1.UserFollowsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateInput_1.UserFollowsUpdateInput)
], UpsertOneUserFollowsArgs.prototype, "update", void 0);
exports.UpsertOneUserFollowsArgs = UpsertOneUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUserFollowsArgs);
