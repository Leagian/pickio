"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateInput_1 = require("../../../inputs/UserFollowsCreateInput");
let CreateOneUserFollowsArgs = class CreateOneUserFollowsArgs {
};
exports.CreateOneUserFollowsArgs = CreateOneUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsCreateInput_1.UserFollowsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsCreateInput_1.UserFollowsCreateInput)
], CreateOneUserFollowsArgs.prototype, "data", void 0);
exports.CreateOneUserFollowsArgs = CreateOneUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUserFollowsArgs);
