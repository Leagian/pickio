"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShareOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereUniqueInput_1 = require("../../../inputs/ShareWhereUniqueInput");
let FindUniqueShareOrThrowArgs = class FindUniqueShareOrThrowArgs {
};
exports.FindUniqueShareOrThrowArgs = FindUniqueShareOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], FindUniqueShareOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueShareOrThrowArgs = FindUniqueShareOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShareOrThrowArgs);
