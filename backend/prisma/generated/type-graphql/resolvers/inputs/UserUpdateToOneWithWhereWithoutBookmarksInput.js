"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutBookmarksInput_1 = require("../inputs/UserUpdateWithoutBookmarksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutBookmarksInput = class UserUpdateToOneWithWhereWithoutBookmarksInput {
};
exports.UserUpdateToOneWithWhereWithoutBookmarksInput = UserUpdateToOneWithWhereWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutBookmarksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBookmarksInput_1.UserUpdateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBookmarksInput_1.UserUpdateWithoutBookmarksInput)
], UserUpdateToOneWithWhereWithoutBookmarksInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutBookmarksInput = UserUpdateToOneWithWhereWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutBookmarksInput", {})
], UserUpdateToOneWithWhereWithoutBookmarksInput);
