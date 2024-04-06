"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsUpdateManyMutationInput_1 = require("../../../inputs/UserFollowsUpdateManyMutationInput");
const UserFollowsWhereInput_1 = require("../../../inputs/UserFollowsWhereInput");
let UpdateManyUserFollowsArgs = class UpdateManyUserFollowsArgs {
};
exports.UpdateManyUserFollowsArgs = UpdateManyUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyMutationInput_1.UserFollowsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyMutationInput_1.UserFollowsUpdateManyMutationInput)
], UpdateManyUserFollowsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], UpdateManyUserFollowsArgs.prototype, "where", void 0);
exports.UpdateManyUserFollowsArgs = UpdateManyUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserFollowsArgs);
