"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserFollowsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsOrderByWithAggregationInput_1 = require("../../../inputs/UserFollowsOrderByWithAggregationInput");
const UserFollowsScalarWhereWithAggregatesInput_1 = require("../../../inputs/UserFollowsScalarWhereWithAggregatesInput");
const UserFollowsWhereInput_1 = require("../../../inputs/UserFollowsWhereInput");
const UserFollowsScalarFieldEnum_1 = require("../../../../enums/UserFollowsScalarFieldEnum");
let GroupByUserFollowsArgs = class GroupByUserFollowsArgs {
};
exports.GroupByUserFollowsArgs = GroupByUserFollowsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], GroupByUserFollowsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsOrderByWithAggregationInput_1.UserFollowsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserFollowsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsScalarFieldEnum_1.UserFollowsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserFollowsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsScalarWhereWithAggregatesInput_1.UserFollowsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsScalarWhereWithAggregatesInput_1.UserFollowsScalarWhereWithAggregatesInput)
], GroupByUserFollowsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserFollowsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserFollowsArgs.prototype, "skip", void 0);
exports.GroupByUserFollowsArgs = GroupByUserFollowsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUserFollowsArgs);
