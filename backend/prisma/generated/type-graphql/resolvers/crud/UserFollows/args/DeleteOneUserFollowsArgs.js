"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
let DeleteOneUserFollowsArgs = class DeleteOneUserFollowsArgs {
};
exports.DeleteOneUserFollowsArgs = DeleteOneUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], DeleteOneUserFollowsArgs.prototype, "where", void 0);
exports.DeleteOneUserFollowsArgs = DeleteOneUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUserFollowsArgs);
