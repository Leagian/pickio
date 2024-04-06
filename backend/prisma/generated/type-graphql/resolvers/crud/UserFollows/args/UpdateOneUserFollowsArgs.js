"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsUpdateInput_1 = require("../../../inputs/UserFollowsUpdateInput");
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
let UpdateOneUserFollowsArgs = class UpdateOneUserFollowsArgs {
};
exports.UpdateOneUserFollowsArgs = UpdateOneUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateInput_1.UserFollowsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateInput_1.UserFollowsUpdateInput)
], UpdateOneUserFollowsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], UpdateOneUserFollowsArgs.prototype, "where", void 0);
exports.UpdateOneUserFollowsArgs = UpdateOneUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUserFollowsArgs);
