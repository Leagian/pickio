"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountSharesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareWhereInput_1 = require("../../inputs/ShareWhereInput");
let UserCountSharesArgs = class UserCountSharesArgs {
};
exports.UserCountSharesArgs = UserCountSharesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereInput_1.ShareWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShareWhereInput_1.ShareWhereInput)
], UserCountSharesArgs.prototype, "where", void 0);
exports.UserCountSharesArgs = UserCountSharesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountSharesArgs);
