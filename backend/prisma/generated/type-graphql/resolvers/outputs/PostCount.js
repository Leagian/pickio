"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCountBookmarksArgs_1 = require("./args/PostCountBookmarksArgs");
const PostCountCommentsArgs_1 = require("./args/PostCountCommentsArgs");
const PostCountLikesArgs_1 = require("./args/PostCountLikesArgs");
const PostCountSharesArgs_1 = require("./args/PostCountSharesArgs");
let PostCount = class PostCount {
    getComments(root, args) {
        return root.comments;
    }
    getLikes(root, args) {
        return root.likes;
    }
    getShares(root, args) {
        return root.shares;
    }
    getBookmarks(root, args) {
        return root.bookmarks;
    }
};
exports.PostCount = PostCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountCommentsArgs_1.PostCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getComments", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "likes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountLikesArgs_1.PostCountLikesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getLikes", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "shares",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountSharesArgs_1.PostCountSharesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getShares", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "bookmarks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountBookmarksArgs_1.PostCountBookmarksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getBookmarks", null);
exports.PostCount = PostCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostCount", {})
], PostCount);
