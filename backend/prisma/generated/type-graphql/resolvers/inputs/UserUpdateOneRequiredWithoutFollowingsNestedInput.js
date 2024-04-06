"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutFollowingsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowingsInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowingsInput");
const UserCreateWithoutFollowingsInput_1 = require("../inputs/UserCreateWithoutFollowingsInput");
const UserUpdateToOneWithWhereWithoutFollowingsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutFollowingsInput");
const UserUpsertWithoutFollowingsInput_1 = require("../inputs/UserUpsertWithoutFollowingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutFollowingsNestedInput = class UserUpdateOneRequiredWithoutFollowingsNestedInput {
};
exports.UserUpdateOneRequiredWithoutFollowingsNestedInput = UserUpdateOneRequiredWithoutFollowingsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutFollowingsInput_1.UserCreateWithoutFollowingsInput)
], UserUpdateOneRequiredWithoutFollowingsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingsInput_1.UserCreateOrConnectWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutFollowingsInput_1.UserCreateOrConnectWithoutFollowingsInput)
], UserUpdateOneRequiredWithoutFollowingsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutFollowingsInput_1.UserUpsertWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutFollowingsInput_1.UserUpsertWithoutFollowingsInput)
], UserUpdateOneRequiredWithoutFollowingsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutFollowingsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutFollowingsInput_1.UserUpdateToOneWithWhereWithoutFollowingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutFollowingsInput_1.UserUpdateToOneWithWhereWithoutFollowingsInput)
], UserUpdateOneRequiredWithoutFollowingsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutFollowingsNestedInput = UserUpdateOneRequiredWithoutFollowingsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFollowingsNestedInput", {})
], UserUpdateOneRequiredWithoutFollowingsNestedInput);
