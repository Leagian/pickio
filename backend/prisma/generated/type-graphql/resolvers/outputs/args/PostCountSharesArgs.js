"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCountSharesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereInput_1 = require("../../inputs/ShareWhereInput");
let PostCountSharesArgs = class PostCountSharesArgs {
};
exports.PostCountSharesArgs = PostCountSharesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], PostCountSharesArgs.prototype, "where", void 0);
exports.PostCountSharesArgs = PostCountSharesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PostCountSharesArgs);
