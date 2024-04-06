"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateManyInput_1 = require("../../../inputs/ShareCreateManyInput");
let CreateManyShareArgs = class CreateManyShareArgs {
};
exports.CreateManyShareArgs = CreateManyShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShareCreateManyInput_1.ShareCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShareArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyShareArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyShareArgs = CreateManyShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShareArgs);
