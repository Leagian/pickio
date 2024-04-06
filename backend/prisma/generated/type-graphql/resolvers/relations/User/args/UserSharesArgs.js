"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSharesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareOrderByWithRelationInput_1 = require("../../../inputs/ShareOrderByWithRelationInput");
const ShareWhereInput_1 = require("../../../inputs/ShareWhereInput");
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
const ShareScalarFieldEnum_1 = require("../../../../enums/ShareScalarFieldEnum");
let UserSharesArgs = class UserSharesArgs {
};
exports.UserSharesArgs = UserSharesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], UserSharesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareOrderByWithRelationInput_1.ShareOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserSharesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], UserSharesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserSharesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserSharesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareScalarFieldEnum_1.ShareScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserSharesArgs.prototype, "distinct", void 0);
exports.UserSharesArgs = UserSharesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserSharesArgs);
