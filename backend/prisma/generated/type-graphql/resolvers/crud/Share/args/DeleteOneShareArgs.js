"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
let DeleteOneShareArgs = class DeleteOneShareArgs {
};
exports.DeleteOneShareArgs = DeleteOneShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], DeleteOneShareArgs.prototype, "where", void 0);
exports.DeleteOneShareArgs = DeleteOneShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneShareArgs);
