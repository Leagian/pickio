"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateManyFollowerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowerInput_1 = require("../inputs/UserFollowsCreateManyFollowerInput");
let UserFollowsCreateManyFollowerInputEnvelope = class UserFollowsCreateManyFollowerInputEnvelope {
};
exports.UserFollowsCreateManyFollowerInputEnvelope = UserFollowsCreateManyFollowerInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateManyFollowerInput_1.UserFollowsCreateManyFollowerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateManyFollowerInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserFollowsCreateManyFollowerInputEnvelope.prototype, "skipDuplicates", void 0);
exports.UserFollowsCreateManyFollowerInputEnvelope = UserFollowsCreateManyFollowerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateManyFollowerInputEnvelope", {})
], UserFollowsCreateManyFollowerInputEnvelope);
