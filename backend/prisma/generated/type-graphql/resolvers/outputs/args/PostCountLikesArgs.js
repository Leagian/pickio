"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCountLikesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereInput_1 = require("../../inputs/LikeWhereInput");
let PostCountLikesArgs = class PostCountLikesArgs {
};
exports.PostCountLikesArgs = PostCountLikesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], PostCountLikesArgs.prototype, "where", void 0);
exports.PostCountLikesArgs = PostCountLikesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PostCountLikesArgs);
