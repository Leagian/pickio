"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareUpdateInput_1 = require("../../../inputs/ShareUpdateInput");
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
let UpdateOneShareArgs = class UpdateOneShareArgs {
};
exports.UpdateOneShareArgs = UpdateOneShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateInput_1.ShareUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateInput_1.ShareUpdateInput)
], UpdateOneShareArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], UpdateOneShareArgs.prototype, "where", void 0);
exports.UpdateOneShareArgs = UpdateOneShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneShareArgs);
