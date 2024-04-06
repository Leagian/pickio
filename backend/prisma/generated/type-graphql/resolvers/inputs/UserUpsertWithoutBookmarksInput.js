"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBookmarksInput_1 = require("../inputs/UserCreateWithoutBookmarksInput");
const UserUpdateWithoutBookmarksInput_1 = require("../inputs/UserUpdateWithoutBookmarksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutBookmarksInput = class UserUpsertWithoutBookmarksInput {
};
exports.UserUpsertWithoutBookmarksInput = UserUpsertWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBookmarksInput_1.UserUpdateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBookmarksInput_1.UserUpdateWithoutBookmarksInput)
], UserUpsertWithoutBookmarksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookmarksInput_1.UserCreateWithoutBookmarksInput)
], UserUpsertWithoutBookmarksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutBookmarksInput.prototype, "where", void 0);
exports.UserUpsertWithoutBookmarksInput = UserUpsertWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutBookmarksInput", {})
], UserUpsertWithoutBookmarksInput);
