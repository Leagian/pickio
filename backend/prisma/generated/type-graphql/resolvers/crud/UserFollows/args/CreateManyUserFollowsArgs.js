"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyInput_1 = require("../../../inputs/UserFollowsCreateManyInput");
let CreateManyUserFollowsArgs = class CreateManyUserFollowsArgs {
};
exports.CreateManyUserFollowsArgs = CreateManyUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateManyInput_1.UserFollowsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUserFollowsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUserFollowsArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyUserFollowsArgs = CreateManyUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUserFollowsArgs);
