"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateInput_1 = require("../../../inputs/ShareCreateInput");
const ShareUpdateInput_1 = require("../../../inputs/ShareUpdateInput");
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
let UpsertOneShareArgs = class UpsertOneShareArgs {
};
exports.UpsertOneShareArgs = UpsertOneShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], UpsertOneShareArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateInput_1.ShareCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateInput_1.ShareCreateInput)
], UpsertOneShareArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateInput_1.ShareUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateInput_1.ShareUpdateInput)
], UpsertOneShareArgs.prototype, "update", void 0);
exports.UpsertOneShareArgs = UpsertOneShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneShareArgs);
