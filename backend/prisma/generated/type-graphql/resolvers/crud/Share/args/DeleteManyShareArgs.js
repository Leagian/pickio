"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereInput_1 = require("../../../inputs/ShareWhereInput");
let DeleteManyShareArgs = class DeleteManyShareArgs {
};
exports.DeleteManyShareArgs = DeleteManyShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], DeleteManyShareArgs.prototype, "where", void 0);
exports.DeleteManyShareArgs = DeleteManyShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShareArgs);
