"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareUpdateManyMutationInput_1 = require("../../../inputs/ShareUpdateManyMutationInput");
const ShareWhereInput_1 = require("../../../inputs/ShareWhereInput");
let UpdateManyShareArgs = class UpdateManyShareArgs {
};
exports.UpdateManyShareArgs = UpdateManyShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput)
], UpdateManyShareArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], UpdateManyShareArgs.prototype, "where", void 0);
exports.UpdateManyShareArgs = UpdateManyShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShareArgs);
