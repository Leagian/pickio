"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBookmarksInput_1 = require("../inputs/UserCreateWithoutBookmarksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutBookmarksInput = class UserCreateOrConnectWithoutBookmarksInput {
};
exports.UserCreateOrConnectWithoutBookmarksInput = UserCreateOrConnectWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBookmarksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput)
], UserCreateOrConnectWithoutBookmarksInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutBookmarksInput = UserCreateOrConnectWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutBookmarksInput", {})
], UserCreateOrConnectWithoutBookmarksInput);
