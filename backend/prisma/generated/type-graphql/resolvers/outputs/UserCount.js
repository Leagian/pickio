"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountBookmarksArgs_1 = require("./args/UserCountBookmarksArgs");
const UserCountCommentsArgs_1 = require("./args/UserCountCommentsArgs");
const UserCountFollowersArgs_1 = require("./args/UserCountFollowersArgs");
const UserCountFollowingsArgs_1 = require("./args/UserCountFollowingsArgs");
const UserCountLikesArgs_1 = require("./args/UserCountLikesArgs");
const UserCountPostsArgs_1 = require("./args/UserCountPostsArgs");
const UserCountSharesArgs_1 = require("./args/UserCountSharesArgs");
let UserCount = class UserCount {
    getPosts(root, args) {
        return root.posts;
    }
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
    getFollowers(root, args) {
        return root.followers;
    }
    getFollowings(root, args) {
        return root.followings;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "posts",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountPostsArgs_1.UserCountPostsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getPosts", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCommentsArgs_1.UserCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getComments", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "likes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountLikesArgs_1.UserCountLikesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getLikes", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "shares",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountSharesArgs_1.UserCountSharesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getShares", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "bookmarks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountBookmarksArgs_1.UserCountBookmarksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getBookmarks", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "followers",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountFollowersArgs_1.UserCountFollowersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getFollowers", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "followings",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountFollowingsArgs_1.UserCountFollowingsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getFollowings", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
