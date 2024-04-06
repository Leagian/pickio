"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowsCreateManyFollowingInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserFollowsCreateManyFollowingInput_1 = require("../inputs/UserFollowsCreateManyFollowingInput");
let UserFollowsCreateManyFollowingInputEnvelope = class UserFollowsCreateManyFollowingInputEnvelope {
};
exports.UserFollowsCreateManyFollowingInputEnvelope = UserFollowsCreateManyFollowingInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserFollowsCreateManyFollowingInput_1.UserFollowsCreateManyFollowingInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserFollowsCreateManyFollowingInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserFollowsCreateManyFollowingInputEnvelope.prototype, "skipDuplicates", void 0);
exports.UserFollowsCreateManyFollowingInputEnvelope = UserFollowsCreateManyFollowingInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserFollowsCreateManyFollowingInputEnvelope", {})
], UserFollowsCreateManyFollowingInputEnvelope);
