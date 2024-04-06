"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareScalarWhereInput_1 = require("../inputs/ShareScalarWhereInput");
const ShareUpdateManyMutationInput_1 = require("../inputs/ShareUpdateManyMutationInput");
let ShareUpdateManyWithWhereWithoutUserInput = class ShareUpdateManyWithWhereWithoutUserInput {
};
exports.ShareUpdateManyWithWhereWithoutUserInput = ShareUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareScalarWhereInput_1.ShareScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareScalarWhereInput_1.ShareScalarWhereInput)
], ShareUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput)
], ShareUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.ShareUpdateManyWithWhereWithoutUserInput = ShareUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateManyWithWhereWithoutUserInput", {})
], ShareUpdateManyWithWhereWithoutUserInput);
