"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsUpdateManyWithWhereWithoutFollowerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsScalarWhereInput_1 = require("../inputs/UserFollowsScalarWhereInput");
const UserFollowsUpdateManyMutationInput_1 = require("../inputs/UserFollowsUpdateManyMutationInput");
let UserFollowsUpdateManyWithWhereWithoutFollowerInput = class UserFollowsUpdateManyWithWhereWithoutFollowerInput {
};
exports.UserFollowsUpdateManyWithWhereWithoutFollowerInput = UserFollowsUpdateManyWithWhereWithoutFollowerInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsScalarWhereInput_1.UserFollowsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsScalarWhereInput_1.UserFollowsScalarWhereInput)
], UserFollowsUpdateManyWithWhereWithoutFollowerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserFollowsUpdateManyMutationInput_1.UserFollowsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserFollowsUpdateManyMutationInput_1.UserFollowsUpdateManyMutationInput)
], UserFollowsUpdateManyWithWhereWithoutFollowerInput.prototype, "data", void 0);
exports.UserFollowsUpdateManyWithWhereWithoutFollowerInput = UserFollowsUpdateManyWithWhereWithoutFollowerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsUpdateManyWithWhereWithoutFollowerInput", {})
], UserFollowsUpdateManyWithWhereWithoutFollowerInput);
