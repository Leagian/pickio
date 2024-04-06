"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutBookmarksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBookmarksInput_1 = require("../inputs/UserCreateOrConnectWithoutBookmarksInput");
const UserCreateWithoutBookmarksInput_1 = require("../inputs/UserCreateWithoutBookmarksInput");
const UserUpdateToOneWithWhereWithoutBookmarksInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutBookmarksInput");
const UserUpsertWithoutBookmarksInput_1 = require("../inputs/UserUpsertWithoutBookmarksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutBookmarksNestedInput = class UserUpdateOneRequiredWithoutBookmarksNestedInput {
};
exports.UserUpdateOneRequiredWithoutBookmarksNestedInput = UserUpdateOneRequiredWithoutBookmarksNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput)
], UserUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookmarksInput_1.UserCreateOrConnectWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBookmarksInput_1.UserCreateOrConnectWithoutBookmarksInput)
], UserUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutBookmarksInput_1.UserUpsertWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutBookmarksInput_1.UserUpsertWithoutBookmarksInput)
], UserUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutBookmarksInput_1.UserUpdateToOneWithWhereWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutBookmarksInput_1.UserUpdateToOneWithWhereWithoutBookmarksInput)
], UserUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutBookmarksNestedInput = UserUpdateOneRequiredWithoutBookmarksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookmarksNestedInput", {})
], UserUpdateOneRequiredWithoutBookmarksNestedInput);
