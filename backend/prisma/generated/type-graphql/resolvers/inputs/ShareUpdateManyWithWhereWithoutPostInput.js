"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareUpdateManyWithWhereWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareScalarWhereInput_1 = require("../inputs/ShareScalarWhereInput");
const ShareUpdateManyMutationInput_1 = require("../inputs/ShareUpdateManyMutationInput");
let ShareUpdateManyWithWhereWithoutPostInput = class ShareUpdateManyWithWhereWithoutPostInput {
};
exports.ShareUpdateManyWithWhereWithoutPostInput = ShareUpdateManyWithWhereWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareScalarWhereInput_1.ShareScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareScalarWhereInput_1.ShareScalarWhereInput)
], ShareUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareUpdateManyMutationInput_1.ShareUpdateManyMutationInput)
], ShareUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
exports.ShareUpdateManyWithWhereWithoutPostInput = ShareUpdateManyWithWhereWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareUpdateManyWithWhereWithoutPostInput", {})
], ShareUpdateManyWithWhereWithoutPostInput);
