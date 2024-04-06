"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    UserFollows: crudResolvers.UserFollowsCrudResolver,
    Post: crudResolvers.PostCrudResolver,
    Comment: crudResolvers.CommentCrudResolver,
    Like: crudResolvers.LikeCrudResolver,
    Share: crudResolvers.ShareCrudResolver,
    Bookmark: crudResolvers.BookmarkCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    UserFollows: {
        aggregateUserFollows: actionResolvers.AggregateUserFollowsResolver,
        createManyUserFollows: actionResolvers.CreateManyUserFollowsResolver,
        createOneUserFollows: actionResolvers.CreateOneUserFollowsResolver,
        deleteManyUserFollows: actionResolvers.DeleteManyUserFollowsResolver,
        deleteOneUserFollows: actionResolvers.DeleteOneUserFollowsResolver,
        findFirstUserFollows: actionResolvers.FindFirstUserFollowsResolver,
        findFirstUserFollowsOrThrow: actionResolvers.FindFirstUserFollowsOrThrowResolver,
        findManyUserFollows: actionResolvers.FindManyUserFollowsResolver,
        findUniqueUserFollows: actionResolvers.FindUniqueUserFollowsResolver,
        findUniqueUserFollowsOrThrow: actionResolvers.FindUniqueUserFollowsOrThrowResolver,
        groupByUserFollows: actionResolvers.GroupByUserFollowsResolver,
        updateManyUserFollows: actionResolvers.UpdateManyUserFollowsResolver,
        updateOneUserFollows: actionResolvers.UpdateOneUserFollowsResolver,
        upsertOneUserFollows: actionResolvers.UpsertOneUserFollowsResolver
    },
    Post: {
        aggregatePost: actionResolvers.AggregatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        createOnePost: actionResolvers.CreateOnePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        deleteOnePost: actionResolvers.DeleteOnePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
        posts: actionResolvers.FindManyPostResolver,
        post: actionResolvers.FindUniquePostResolver,
        getPost: actionResolvers.FindUniquePostOrThrowResolver,
        groupByPost: actionResolvers.GroupByPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        updateOnePost: actionResolvers.UpdateOnePostResolver,
        upsertOnePost: actionResolvers.UpsertOnePostResolver
    },
    Comment: {
        aggregateComment: actionResolvers.AggregateCommentResolver,
        createManyComment: actionResolvers.CreateManyCommentResolver,
        createOneComment: actionResolvers.CreateOneCommentResolver,
        deleteManyComment: actionResolvers.DeleteManyCommentResolver,
        deleteOneComment: actionResolvers.DeleteOneCommentResolver,
        findFirstComment: actionResolvers.FindFirstCommentResolver,
        findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
        comments: actionResolvers.FindManyCommentResolver,
        comment: actionResolvers.FindUniqueCommentResolver,
        getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
        groupByComment: actionResolvers.GroupByCommentResolver,
        updateManyComment: actionResolvers.UpdateManyCommentResolver,
        updateOneComment: actionResolvers.UpdateOneCommentResolver,
        upsertOneComment: actionResolvers.UpsertOneCommentResolver
    },
    Like: {
        aggregateLike: actionResolvers.AggregateLikeResolver,
        createManyLike: actionResolvers.CreateManyLikeResolver,
        createOneLike: actionResolvers.CreateOneLikeResolver,
        deleteManyLike: actionResolvers.DeleteManyLikeResolver,
        deleteOneLike: actionResolvers.DeleteOneLikeResolver,
        findFirstLike: actionResolvers.FindFirstLikeResolver,
        findFirstLikeOrThrow: actionResolvers.FindFirstLikeOrThrowResolver,
        likes: actionResolvers.FindManyLikeResolver,
        like: actionResolvers.FindUniqueLikeResolver,
        getLike: actionResolvers.FindUniqueLikeOrThrowResolver,
        groupByLike: actionResolvers.GroupByLikeResolver,
        updateManyLike: actionResolvers.UpdateManyLikeResolver,
        updateOneLike: actionResolvers.UpdateOneLikeResolver,
        upsertOneLike: actionResolvers.UpsertOneLikeResolver
    },
    Share: {
        aggregateShare: actionResolvers.AggregateShareResolver,
        createManyShare: actionResolvers.CreateManyShareResolver,
        createOneShare: actionResolvers.CreateOneShareResolver,
        deleteManyShare: actionResolvers.DeleteManyShareResolver,
        deleteOneShare: actionResolvers.DeleteOneShareResolver,
        findFirstShare: actionResolvers.FindFirstShareResolver,
        findFirstShareOrThrow: actionResolvers.FindFirstShareOrThrowResolver,
        shares: actionResolvers.FindManyShareResolver,
        share: actionResolvers.FindUniqueShareResolver,
        getShare: actionResolvers.FindUniqueShareOrThrowResolver,
        groupByShare: actionResolvers.GroupByShareResolver,
        updateManyShare: actionResolvers.UpdateManyShareResolver,
        updateOneShare: actionResolvers.UpdateOneShareResolver,
        upsertOneShare: actionResolvers.UpsertOneShareResolver
    },
    Bookmark: {
        aggregateBookmark: actionResolvers.AggregateBookmarkResolver,
        createManyBookmark: actionResolvers.CreateManyBookmarkResolver,
        createOneBookmark: actionResolvers.CreateOneBookmarkResolver,
        deleteManyBookmark: actionResolvers.DeleteManyBookmarkResolver,
        deleteOneBookmark: actionResolvers.DeleteOneBookmarkResolver,
        findFirstBookmark: actionResolvers.FindFirstBookmarkResolver,
        findFirstBookmarkOrThrow: actionResolvers.FindFirstBookmarkOrThrowResolver,
        bookmarks: actionResolvers.FindManyBookmarkResolver,
        bookmark: actionResolvers.FindUniqueBookmarkResolver,
        getBookmark: actionResolvers.FindUniqueBookmarkOrThrowResolver,
        groupByBookmark: actionResolvers.GroupByBookmarkResolver,
        updateManyBookmark: actionResolvers.UpdateManyBookmarkResolver,
        updateOneBookmark: actionResolvers.UpdateOneBookmarkResolver,
        upsertOneBookmark: actionResolvers.UpsertOneBookmarkResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    UserFollows: ["aggregateUserFollows", "createManyUserFollows", "createOneUserFollows", "deleteManyUserFollows", "deleteOneUserFollows", "findFirstUserFollows", "findFirstUserFollowsOrThrow", "findManyUserFollows", "findUniqueUserFollows", "findUniqueUserFollowsOrThrow", "groupByUserFollows", "updateManyUserFollows", "updateOneUserFollows", "upsertOneUserFollows"],
    Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
    Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
    Like: ["aggregateLike", "createManyLike", "createOneLike", "deleteManyLike", "deleteOneLike", "findFirstLike", "findFirstLikeOrThrow", "likes", "like", "getLike", "groupByLike", "updateManyLike", "updateOneLike", "upsertOneLike"],
    Share: ["aggregateShare", "createManyShare", "createOneShare", "deleteManyShare", "deleteOneShare", "findFirstShare", "findFirstShareOrThrow", "shares", "share", "getShare", "groupByShare", "updateManyShare", "updateOneShare", "upsertOneShare"],
    Bookmark: ["aggregateBookmark", "createManyBookmark", "createOneBookmark", "deleteManyBookmark", "deleteOneBookmark", "findFirstBookmark", "findFirstBookmarkOrThrow", "bookmarks", "bookmark", "getBookmark", "groupByBookmark", "updateManyBookmark", "updateOneBookmark", "upsertOneBookmark"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateUserFollowsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserFollowsArgs: ["data", "skipDuplicates"],
    CreateOneUserFollowsArgs: ["data"],
    DeleteManyUserFollowsArgs: ["where"],
    DeleteOneUserFollowsArgs: ["where"],
    FindFirstUserFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserFollowsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserFollowsArgs: ["where"],
    FindUniqueUserFollowsOrThrowArgs: ["where"],
    GroupByUserFollowsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserFollowsArgs: ["data", "where"],
    UpdateOneUserFollowsArgs: ["data", "where"],
    UpsertOneUserFollowsArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    CreateOnePostArgs: ["data"],
    DeleteManyPostArgs: ["where"],
    DeleteOnePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePostArgs: ["where"],
    FindUniquePostOrThrowArgs: ["where"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPostArgs: ["data", "where"],
    UpdateOnePostArgs: ["data", "where"],
    UpsertOnePostArgs: ["where", "create", "update"],
    AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCommentArgs: ["data", "skipDuplicates"],
    CreateOneCommentArgs: ["data"],
    DeleteManyCommentArgs: ["where"],
    DeleteOneCommentArgs: ["where"],
    FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCommentArgs: ["where"],
    FindUniqueCommentOrThrowArgs: ["where"],
    GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCommentArgs: ["data", "where"],
    UpdateOneCommentArgs: ["data", "where"],
    UpsertOneCommentArgs: ["where", "create", "update"],
    AggregateLikeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyLikeArgs: ["data", "skipDuplicates"],
    CreateOneLikeArgs: ["data"],
    DeleteManyLikeArgs: ["where"],
    DeleteOneLikeArgs: ["where"],
    FindFirstLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstLikeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueLikeArgs: ["where"],
    FindUniqueLikeOrThrowArgs: ["where"],
    GroupByLikeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyLikeArgs: ["data", "where"],
    UpdateOneLikeArgs: ["data", "where"],
    UpsertOneLikeArgs: ["where", "create", "update"],
    AggregateShareArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyShareArgs: ["data", "skipDuplicates"],
    CreateOneShareArgs: ["data"],
    DeleteManyShareArgs: ["where"],
    DeleteOneShareArgs: ["where"],
    FindFirstShareArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstShareOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyShareArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueShareArgs: ["where"],
    FindUniqueShareOrThrowArgs: ["where"],
    GroupByShareArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyShareArgs: ["data", "where"],
    UpdateOneShareArgs: ["data", "where"],
    UpsertOneShareArgs: ["where", "create", "update"],
    AggregateBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBookmarkArgs: ["data", "skipDuplicates"],
    CreateOneBookmarkArgs: ["data"],
    DeleteManyBookmarkArgs: ["where"],
    DeleteOneBookmarkArgs: ["where"],
    FindFirstBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBookmarkOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookmarkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBookmarkArgs: ["where"],
    FindUniqueBookmarkOrThrowArgs: ["where"],
    GroupByBookmarkArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBookmarkArgs: ["data", "where"],
    UpdateOneBookmarkArgs: ["data", "where"],
    UpsertOneBookmarkArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    UserFollows: relationResolvers.UserFollowsRelationsResolver,
    Post: relationResolvers.PostRelationsResolver,
    Comment: relationResolvers.CommentRelationsResolver,
    Like: relationResolvers.LikeRelationsResolver,
    Share: relationResolvers.ShareRelationsResolver,
    Bookmark: relationResolvers.BookmarkRelationsResolver
};
const relationResolversInfo = {
    User: ["posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserFollows: ["follower", "following"],
    Post: ["User", "comments", "likes", "shares", "bookmarks"],
    Comment: ["User", "Post"],
    Like: ["User", "Post"],
    Share: ["User", "Post"],
    Bookmark: ["User", "Post"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserFollows: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    Post: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt"],
    Comment: ["commentId", "postId", "userId", "content", "createdAt"],
    Like: ["likeId", "postId", "userId", "createdAt"],
    Share: ["shareId", "postId", "userId", "createdAt"],
    Bookmark: ["bookmarkId", "postId", "userId", "createdAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "_count", "_min", "_max"],
    AggregateUserFollows: ["_count", "_min", "_max"],
    UserFollowsGroupBy: ["UserFollowsId", "followerId", "followingId", "createdAt", "_count", "_min", "_max"],
    AggregatePost: ["_count", "_min", "_max"],
    PostGroupBy: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt", "_count", "_min", "_max"],
    AggregateComment: ["_count", "_min", "_max"],
    CommentGroupBy: ["commentId", "postId", "userId", "content", "createdAt", "_count", "_min", "_max"],
    AggregateLike: ["_count", "_min", "_max"],
    LikeGroupBy: ["likeId", "postId", "userId", "createdAt", "_count", "_min", "_max"],
    AggregateShare: ["_count", "_min", "_max"],
    ShareGroupBy: ["shareId", "postId", "userId", "createdAt", "_count", "_min", "_max"],
    AggregateBookmark: ["_count", "_min", "_max"],
    BookmarkGroupBy: ["bookmarkId", "postId", "userId", "createdAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserCountAggregate: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "_all"],
    UserMinAggregate: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserMaxAggregate: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserFollowsCountAggregate: ["UserFollowsId", "followerId", "followingId", "createdAt", "_all"],
    UserFollowsMinAggregate: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    UserFollowsMaxAggregate: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    PostCount: ["comments", "likes", "shares", "bookmarks"],
    PostCountAggregate: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt", "_all"],
    PostMinAggregate: ["postId", "userId", "content", "address", "createdAt"],
    PostMaxAggregate: ["postId", "userId", "content", "address", "createdAt"],
    CommentCountAggregate: ["commentId", "postId", "userId", "content", "createdAt", "_all"],
    CommentMinAggregate: ["commentId", "postId", "userId", "content", "createdAt"],
    CommentMaxAggregate: ["commentId", "postId", "userId", "content", "createdAt"],
    LikeCountAggregate: ["likeId", "postId", "userId", "createdAt", "_all"],
    LikeMinAggregate: ["likeId", "postId", "userId", "createdAt"],
    LikeMaxAggregate: ["likeId", "postId", "userId", "createdAt"],
    ShareCountAggregate: ["shareId", "postId", "userId", "createdAt", "_all"],
    ShareMinAggregate: ["shareId", "postId", "userId", "createdAt"],
    ShareMaxAggregate: ["shareId", "postId", "userId", "createdAt"],
    BookmarkCountAggregate: ["bookmarkId", "postId", "userId", "createdAt", "_all"],
    BookmarkMinAggregate: ["bookmarkId", "postId", "userId", "createdAt"],
    BookmarkMaxAggregate: ["bookmarkId", "postId", "userId", "createdAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserOrderByWithRelationInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserWhereUniqueInput: ["userId", "username", "email", "AND", "OR", "NOT", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserOrderByWithAggregationInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserFollowsWhereInput: ["AND", "OR", "NOT", "UserFollowsId", "followerId", "followingId", "createdAt", "follower", "following"],
    UserFollowsOrderByWithRelationInput: ["UserFollowsId", "followerId", "followingId", "createdAt", "follower", "following"],
    UserFollowsWhereUniqueInput: ["UserFollowsId", "followerId_followingId", "AND", "OR", "NOT", "followerId", "followingId", "createdAt", "follower", "following"],
    UserFollowsOrderByWithAggregationInput: ["UserFollowsId", "followerId", "followingId", "createdAt", "_count", "_max", "_min"],
    UserFollowsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "UserFollowsId", "followerId", "followingId", "createdAt"],
    PostWhereInput: ["AND", "OR", "NOT", "postId", "userId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares", "bookmarks"],
    PostOrderByWithRelationInput: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares", "bookmarks"],
    PostWhereUniqueInput: ["postId", "AND", "OR", "NOT", "userId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares", "bookmarks"],
    PostOrderByWithAggregationInput: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt", "_count", "_max", "_min"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "postId", "userId", "content", "address", "location", "images", "tags", "createdAt"],
    CommentWhereInput: ["AND", "OR", "NOT", "commentId", "postId", "userId", "content", "createdAt", "User", "Post"],
    CommentOrderByWithRelationInput: ["commentId", "postId", "userId", "content", "createdAt", "User", "Post"],
    CommentWhereUniqueInput: ["commentId", "AND", "OR", "NOT", "postId", "userId", "content", "createdAt", "User", "Post"],
    CommentOrderByWithAggregationInput: ["commentId", "postId", "userId", "content", "createdAt", "_count", "_max", "_min"],
    CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "commentId", "postId", "userId", "content", "createdAt"],
    LikeWhereInput: ["AND", "OR", "NOT", "likeId", "postId", "userId", "createdAt", "User", "Post"],
    LikeOrderByWithRelationInput: ["likeId", "postId", "userId", "createdAt", "User", "Post"],
    LikeWhereUniqueInput: ["likeId", "AND", "OR", "NOT", "postId", "userId", "createdAt", "User", "Post"],
    LikeOrderByWithAggregationInput: ["likeId", "postId", "userId", "createdAt", "_count", "_max", "_min"],
    LikeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "likeId", "postId", "userId", "createdAt"],
    ShareWhereInput: ["AND", "OR", "NOT", "shareId", "postId", "userId", "createdAt", "User", "Post"],
    ShareOrderByWithRelationInput: ["shareId", "postId", "userId", "createdAt", "User", "Post"],
    ShareWhereUniqueInput: ["shareId", "AND", "OR", "NOT", "postId", "userId", "createdAt", "User", "Post"],
    ShareOrderByWithAggregationInput: ["shareId", "postId", "userId", "createdAt", "_count", "_max", "_min"],
    ShareScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "shareId", "postId", "userId", "createdAt"],
    BookmarkWhereInput: ["AND", "OR", "NOT", "bookmarkId", "postId", "userId", "createdAt", "User", "Post"],
    BookmarkOrderByWithRelationInput: ["bookmarkId", "postId", "userId", "createdAt", "User", "Post"],
    BookmarkWhereUniqueInput: ["bookmarkId", "AND", "OR", "NOT", "postId", "userId", "createdAt", "User", "Post"],
    BookmarkOrderByWithAggregationInput: ["bookmarkId", "postId", "userId", "createdAt", "_count", "_max", "_min"],
    BookmarkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookmarkId", "postId", "userId", "createdAt"],
    UserCreateInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserUpdateInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserCreateManyInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserUpdateManyMutationInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserFollowsCreateInput: ["UserFollowsId", "createdAt", "follower", "following"],
    UserFollowsUpdateInput: ["UserFollowsId", "createdAt", "follower", "following"],
    UserFollowsCreateManyInput: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    UserFollowsUpdateManyMutationInput: ["UserFollowsId", "createdAt"],
    PostCreateInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares", "bookmarks"],
    PostUpdateInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares", "bookmarks"],
    PostCreateManyInput: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt"],
    PostUpdateManyMutationInput: ["postId", "content", "address", "location", "images", "tags", "createdAt"],
    CommentCreateInput: ["commentId", "content", "createdAt", "User", "Post"],
    CommentUpdateInput: ["commentId", "content", "createdAt", "User", "Post"],
    CommentCreateManyInput: ["commentId", "postId", "userId", "content", "createdAt"],
    CommentUpdateManyMutationInput: ["commentId", "content", "createdAt"],
    LikeCreateInput: ["likeId", "createdAt", "User", "Post"],
    LikeUpdateInput: ["likeId", "createdAt", "User", "Post"],
    LikeCreateManyInput: ["likeId", "postId", "userId", "createdAt"],
    LikeUpdateManyMutationInput: ["likeId", "createdAt"],
    ShareCreateInput: ["shareId", "createdAt", "User", "Post"],
    ShareUpdateInput: ["shareId", "createdAt", "User", "Post"],
    ShareCreateManyInput: ["shareId", "postId", "userId", "createdAt"],
    ShareUpdateManyMutationInput: ["shareId", "createdAt"],
    BookmarkCreateInput: ["bookmarkId", "createdAt", "User", "Post"],
    BookmarkUpdateInput: ["bookmarkId", "createdAt", "User", "Post"],
    BookmarkCreateManyInput: ["bookmarkId", "postId", "userId", "createdAt"],
    BookmarkUpdateManyMutationInput: ["bookmarkId", "createdAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    CommentListRelationFilter: ["every", "some", "none"],
    LikeListRelationFilter: ["every", "some", "none"],
    ShareListRelationFilter: ["every", "some", "none"],
    BookmarkListRelationFilter: ["every", "some", "none"],
    UserFollowsListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    PostOrderByRelationAggregateInput: ["_count"],
    CommentOrderByRelationAggregateInput: ["_count"],
    LikeOrderByRelationAggregateInput: ["_count"],
    ShareOrderByRelationAggregateInput: ["_count"],
    BookmarkOrderByRelationAggregateInput: ["_count"],
    UserFollowsOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserMaxOrderByAggregateInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    UserMinOrderByAggregateInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    UserFollowsFollowerIdFollowingIdCompoundUniqueInput: ["followerId", "followingId"],
    UserFollowsCountOrderByAggregateInput: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    UserFollowsMaxOrderByAggregateInput: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    UserFollowsMinOrderByAggregateInput: ["UserFollowsId", "followerId", "followingId", "createdAt"],
    JsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    PostCountOrderByAggregateInput: ["postId", "userId", "content", "address", "location", "images", "tags", "createdAt"],
    PostMaxOrderByAggregateInput: ["postId", "userId", "content", "address", "createdAt"],
    PostMinOrderByAggregateInput: ["postId", "userId", "content", "address", "createdAt"],
    JsonNullableWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    PostRelationFilter: ["is", "isNot"],
    CommentCountOrderByAggregateInput: ["commentId", "postId", "userId", "content", "createdAt"],
    CommentMaxOrderByAggregateInput: ["commentId", "postId", "userId", "content", "createdAt"],
    CommentMinOrderByAggregateInput: ["commentId", "postId", "userId", "content", "createdAt"],
    LikeCountOrderByAggregateInput: ["likeId", "postId", "userId", "createdAt"],
    LikeMaxOrderByAggregateInput: ["likeId", "postId", "userId", "createdAt"],
    LikeMinOrderByAggregateInput: ["likeId", "postId", "userId", "createdAt"],
    ShareCountOrderByAggregateInput: ["shareId", "postId", "userId", "createdAt"],
    ShareMaxOrderByAggregateInput: ["shareId", "postId", "userId", "createdAt"],
    ShareMinOrderByAggregateInput: ["shareId", "postId", "userId", "createdAt"],
    BookmarkCountOrderByAggregateInput: ["bookmarkId", "postId", "userId", "createdAt"],
    BookmarkMaxOrderByAggregateInput: ["bookmarkId", "postId", "userId", "createdAt"],
    BookmarkMinOrderByAggregateInput: ["bookmarkId", "postId", "userId", "createdAt"],
    PostCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    LikeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    ShareCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    BookmarkCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserFollowsCreateNestedManyWithoutFollowerInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserFollowsCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LikeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ShareUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BookmarkUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserFollowsUpdateManyWithoutFollowerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserFollowsUpdateManyWithoutFollowingNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutFollowingsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutFollowersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutFollowingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostCreateimagesInput: ["set"],
    PostCreatetagsInput: ["set"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
    LikeCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
    ShareCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
    BookmarkCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
    PostUpdateimagesInput: ["set", "push"],
    PostUpdatetagsInput: ["set", "push"],
    UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CommentUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LikeUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ShareUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BookmarkUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSharesInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedOneWithoutSharesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSharesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostUpdateOneRequiredWithoutSharesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutBookmarksInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedOneWithoutBookmarksInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutBookmarksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostUpdateOneRequiredWithoutBookmarksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedJsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    PostCreateWithoutUserInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "comments", "likes", "shares", "bookmarks"],
    PostCreateOrConnectWithoutUserInput: ["where", "create"],
    PostCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    CommentCreateWithoutUserInput: ["commentId", "content", "createdAt", "Post"],
    CommentCreateOrConnectWithoutUserInput: ["where", "create"],
    CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    LikeCreateWithoutUserInput: ["likeId", "createdAt", "Post"],
    LikeCreateOrConnectWithoutUserInput: ["where", "create"],
    LikeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ShareCreateWithoutUserInput: ["shareId", "createdAt", "Post"],
    ShareCreateOrConnectWithoutUserInput: ["where", "create"],
    ShareCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    BookmarkCreateWithoutUserInput: ["bookmarkId", "createdAt", "Post"],
    BookmarkCreateOrConnectWithoutUserInput: ["where", "create"],
    BookmarkCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    UserFollowsCreateWithoutFollowerInput: ["UserFollowsId", "createdAt", "following"],
    UserFollowsCreateOrConnectWithoutFollowerInput: ["where", "create"],
    UserFollowsCreateManyFollowerInputEnvelope: ["data", "skipDuplicates"],
    UserFollowsCreateWithoutFollowingInput: ["UserFollowsId", "createdAt", "follower"],
    UserFollowsCreateOrConnectWithoutFollowingInput: ["where", "create"],
    UserFollowsCreateManyFollowingInputEnvelope: ["data", "skipDuplicates"],
    PostUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "postId", "userId", "content", "address", "location", "images", "tags", "createdAt"],
    CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    CommentScalarWhereInput: ["AND", "OR", "NOT", "commentId", "postId", "userId", "content", "createdAt"],
    LikeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    LikeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    LikeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    LikeScalarWhereInput: ["AND", "OR", "NOT", "likeId", "postId", "userId", "createdAt"],
    ShareUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    ShareUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    ShareUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    ShareScalarWhereInput: ["AND", "OR", "NOT", "shareId", "postId", "userId", "createdAt"],
    BookmarkUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    BookmarkUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    BookmarkUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    BookmarkScalarWhereInput: ["AND", "OR", "NOT", "bookmarkId", "postId", "userId", "createdAt"],
    UserFollowsUpsertWithWhereUniqueWithoutFollowerInput: ["where", "update", "create"],
    UserFollowsUpdateWithWhereUniqueWithoutFollowerInput: ["where", "data"],
    UserFollowsUpdateManyWithWhereWithoutFollowerInput: ["where", "data"],
    UserFollowsScalarWhereInput: ["AND", "OR", "NOT", "UserFollowsId", "followerId", "followingId", "createdAt"],
    UserFollowsUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
    UserFollowsUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
    UserFollowsUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
    UserCreateWithoutFollowersInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followings"],
    UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
    UserCreateWithoutFollowingsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers"],
    UserCreateOrConnectWithoutFollowingsInput: ["where", "create"],
    UserUpsertWithoutFollowersInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutFollowersInput: ["where", "data"],
    UserUpdateWithoutFollowersInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followings"],
    UserUpsertWithoutFollowingsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutFollowingsInput: ["where", "data"],
    UserUpdateWithoutFollowingsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "bookmarks", "followers"],
    UserCreateWithoutPostsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    CommentCreateWithoutPostInput: ["commentId", "content", "createdAt", "User"],
    CommentCreateOrConnectWithoutPostInput: ["where", "create"],
    CommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
    LikeCreateWithoutPostInput: ["likeId", "createdAt", "User"],
    LikeCreateOrConnectWithoutPostInput: ["where", "create"],
    LikeCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
    ShareCreateWithoutPostInput: ["shareId", "createdAt", "User"],
    ShareCreateOrConnectWithoutPostInput: ["where", "create"],
    ShareCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
    BookmarkCreateWithoutPostInput: ["bookmarkId", "createdAt", "User"],
    BookmarkCreateOrConnectWithoutPostInput: ["where", "create"],
    BookmarkCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutPostsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
    UserUpdateWithoutPostsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "comments", "likes", "shares", "bookmarks", "followers", "followings"],
    CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    LikeUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    LikeUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    LikeUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    ShareUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    ShareUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    ShareUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    BookmarkUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    BookmarkUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    BookmarkUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    UserCreateWithoutCommentsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "likes", "shares", "bookmarks", "followers", "followings"],
    UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
    PostCreateWithoutCommentsInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "likes", "shares", "bookmarks"],
    PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
    UserUpsertWithoutCommentsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    UserUpdateWithoutCommentsInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "likes", "shares", "bookmarks", "followers", "followings"],
    PostUpsertWithoutCommentsInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    PostUpdateWithoutCommentsInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "likes", "shares", "bookmarks"],
    UserCreateWithoutLikesInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "shares", "bookmarks", "followers", "followings"],
    UserCreateOrConnectWithoutLikesInput: ["where", "create"],
    PostCreateWithoutLikesInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "shares", "bookmarks"],
    PostCreateOrConnectWithoutLikesInput: ["where", "create"],
    UserUpsertWithoutLikesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutLikesInput: ["where", "data"],
    UserUpdateWithoutLikesInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "shares", "bookmarks", "followers", "followings"],
    PostUpsertWithoutLikesInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutLikesInput: ["where", "data"],
    PostUpdateWithoutLikesInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "shares", "bookmarks"],
    UserCreateWithoutSharesInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "bookmarks", "followers", "followings"],
    UserCreateOrConnectWithoutSharesInput: ["where", "create"],
    PostCreateWithoutSharesInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "bookmarks"],
    PostCreateOrConnectWithoutSharesInput: ["where", "create"],
    UserUpsertWithoutSharesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSharesInput: ["where", "data"],
    UserUpdateWithoutSharesInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "bookmarks", "followers", "followings"],
    PostUpsertWithoutSharesInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutSharesInput: ["where", "data"],
    PostUpdateWithoutSharesInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "bookmarks"],
    UserCreateWithoutBookmarksInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "followers", "followings"],
    UserCreateOrConnectWithoutBookmarksInput: ["where", "create"],
    PostCreateWithoutBookmarksInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares"],
    PostCreateOrConnectWithoutBookmarksInput: ["where", "create"],
    UserUpsertWithoutBookmarksInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutBookmarksInput: ["where", "data"],
    UserUpdateWithoutBookmarksInput: ["userId", "username", "email", "password", "profilePicture", "bio", "interests", "createdAt", "posts", "comments", "likes", "shares", "followers", "followings"],
    PostUpsertWithoutBookmarksInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutBookmarksInput: ["where", "data"],
    PostUpdateWithoutBookmarksInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "User", "comments", "likes", "shares"],
    PostCreateManyUserInput: ["postId", "content", "address", "location", "images", "tags", "createdAt"],
    CommentCreateManyUserInput: ["commentId", "postId", "content", "createdAt"],
    LikeCreateManyUserInput: ["likeId", "postId", "createdAt"],
    ShareCreateManyUserInput: ["shareId", "postId", "createdAt"],
    BookmarkCreateManyUserInput: ["bookmarkId", "postId", "createdAt"],
    UserFollowsCreateManyFollowerInput: ["UserFollowsId", "followingId", "createdAt"],
    UserFollowsCreateManyFollowingInput: ["UserFollowsId", "followerId", "createdAt"],
    PostUpdateWithoutUserInput: ["postId", "content", "address", "location", "images", "tags", "createdAt", "comments", "likes", "shares", "bookmarks"],
    CommentUpdateWithoutUserInput: ["commentId", "content", "createdAt", "Post"],
    LikeUpdateWithoutUserInput: ["likeId", "createdAt", "Post"],
    ShareUpdateWithoutUserInput: ["shareId", "createdAt", "Post"],
    BookmarkUpdateWithoutUserInput: ["bookmarkId", "createdAt", "Post"],
    UserFollowsUpdateWithoutFollowerInput: ["UserFollowsId", "createdAt", "following"],
    UserFollowsUpdateWithoutFollowingInput: ["UserFollowsId", "createdAt", "follower"],
    CommentCreateManyPostInput: ["commentId", "userId", "content", "createdAt"],
    LikeCreateManyPostInput: ["likeId", "userId", "createdAt"],
    ShareCreateManyPostInput: ["shareId", "userId", "createdAt"],
    BookmarkCreateManyPostInput: ["bookmarkId", "userId", "createdAt"],
    CommentUpdateWithoutPostInput: ["commentId", "content", "createdAt", "User"],
    LikeUpdateWithoutPostInput: ["likeId", "createdAt", "User"],
    ShareUpdateWithoutPostInput: ["shareId", "createdAt", "User"],
    BookmarkUpdateWithoutPostInput: ["bookmarkId", "createdAt", "User"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
