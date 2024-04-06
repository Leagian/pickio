"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBookmarksInput_1 = require("../inputs/UserCreateOrConnectWithoutBookmarksInput");
const UserCreateWithoutBookmarksInput_1 = require("../inputs/UserCreateWithoutBookmarksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutBookmarksInput = class UserCreateNestedOneWithoutBookmarksInput {
};
exports.UserCreateNestedOneWithoutBookmarksInput = UserCreateNestedOneWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput)
], UserCreateNestedOneWithoutBookmarksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookmarksInput_1.UserCreateOrConnectWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBookmarksInput_1.UserCreateOrConnectWithoutBookmarksInput)
], UserCreateNestedOneWithoutBookmarksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutBookmarksInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutBookmarksInput = UserCreateNestedOneWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutBookmarksInput", {})
], UserCreateNestedOneWithoutBookmarksInput);
