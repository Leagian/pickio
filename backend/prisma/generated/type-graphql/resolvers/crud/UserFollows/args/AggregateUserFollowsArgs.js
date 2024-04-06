"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsOrderByWithRelationInput_1 = require("../../../inputs/UserFollowsOrderByWithRelationInput");
const UserFollowsWhereInput_1 = require("../../../inputs/UserFollowsWhereInput");
const UserFollowsWhereUniqueInput_1 = require("../../../inputs/UserFollowsWhereUniqueInput");
let AggregateUserFollowsArgs = class AggregateUserFollowsArgs {
};
exports.AggregateUserFollowsArgs = AggregateUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], AggregateUserFollowsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsOrderByWithRelationInput_1.UserFollowsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateUserFollowsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereUniqueInput_1.UserFollowsWhereUniqueInput)
], AggregateUserFollowsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUserFollowsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUserFollowsArgs.prototype, "skip", void 0);
exports.AggregateUserFollowsArgs = AggregateUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateUserFollowsArgs);
