"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
let FindUniqueShareArgs = class FindUniqueShareArgs {
};
exports.FindUniqueShareArgs = FindUniqueShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], FindUniqueShareArgs.prototype, "where", void 0);
exports.FindUniqueShareArgs = FindUniqueShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShareArgs);
