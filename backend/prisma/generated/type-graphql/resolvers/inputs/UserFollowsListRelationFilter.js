"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsWhereInput_1 = require("../inputs/UserFollowsWhereInput");
let UserFollowsListRelationFilter = class UserFollowsListRelationFilter {
};
exports.UserFollowsListRelationFilter = UserFollowsListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], UserFollowsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], UserFollowsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsWhereInput_1.UserFollowsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserFollowsWhereInput_1.UserFollowsWhereInput)
], UserFollowsListRelationFilter.prototype, "none", void 0);
exports.UserFollowsListRelationFilter = UserFollowsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsListRelationFilter", {})
], UserFollowsListRelationFilter);
